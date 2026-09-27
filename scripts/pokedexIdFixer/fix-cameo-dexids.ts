#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { extractFile } from '../utils/ts-extract-utils'
import { buildSetIndex } from './dex-utils'
import { resolveCameoFile, type CameoManualMapping } from './cameo-resolve'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const apply = args.includes('--apply')

if (!dryRun && !apply) {
	console.error('Usage: bun run cameo:fix:dry-run | bun run cameo:fix:apply')
	process.exit(1)
}

const SCRIPT_DIR = __dirname
const DATA_DIR = path.resolve(SCRIPT_DIR, '../../data')
const CAMEO_DB_PATH = path.join(SCRIPT_DIR, 'cameo-database.json')
const ALIASES_PATH = path.join(SCRIPT_DIR, 'cameo-set-aliases.json')
const MAPPINGS_PATH = path.join(SCRIPT_DIR, 'cameo-card-mappings.json')
const OUT_OF_CATALOG_PATH = path.join(SCRIPT_DIR, 'cameo-out-of-catalog-sets.json')
const LOG_PATH = path.join(SCRIPT_DIR, dryRun ? 'cameo-fix-preview.txt' : 'cameo-fix-log.txt')

interface CameoCardRecord {
	setName: string
	localId: string
	cardName: string
	cameoDexIds: number[]
	generations?: number[]
}

interface CameoDatabase {
	source: string
	sourceFile: string
	generatedAt: string
	cards: CameoCardRecord[]
}

interface AliasFile {
	aliases?: Record<string, string>
}

interface ManualMappingFile {
	mappings?: CameoManualMapping[]
}

interface OutOfCatalogNote {
	setName: string
	market: string
	reason: string
}

interface OutOfCatalogFile {
	sets?: OutOfCatalogNote[]
}

interface SetDirEntry {
	setFile: string
	setNameEn: string
}

interface CameoResolveError {
	setName: string
	localId: string
	cardName: string
	reason: string
}

interface CameoLookupEntry {
	setNameEn: string
	localId: string
	cardName: string
	cameoDexIds: number[]
}

interface FixResult {
	relativePath: string
	cardName: string
	status: 'fixed' | 'unchanged' | 'skipped' | 'error' | 'removed'
	reason?: string
	newCameoDexIds?: number[]
}

function normalizeSetKey(value: string): string {
	return value.trim().toLowerCase()
}

function toSortedUniqueDexIds(input: number[]): number[] {
	return Array.from(new Set(input.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > 0))).sort((a, b) => a - b)
}

function arrayEquals(left: number[] | undefined, right: number[]): boolean {
	if (!left || left.length !== right.length) {
		return false
	}

	const sortedLeft = [...left].sort((a, b) => a - b)
	for (let i = 0; i < sortedLeft.length; i++) {
		if (sortedLeft[i] !== right[i]) {
			return false
		}
	}

	return true
}

function loadAliases(): Map<string, string> {
	if (!fs.existsSync(ALIASES_PATH)) {
		return new Map()
	}

	const parsed = JSON.parse(fs.readFileSync(ALIASES_PATH, 'utf-8')) as AliasFile
	const aliases = new Map<string, string>()
	for (const [from, to] of Object.entries(parsed.aliases || {})) {
		if (!from.trim() || !to.trim()) {
			continue
		}
		aliases.set(normalizeSetKey(from), to.trim())
	}
	return aliases
}

function loadManualMappings(): CameoManualMapping[] {
	if (!fs.existsSync(MAPPINGS_PATH)) {
		return []
	}

	const parsed = JSON.parse(fs.readFileSync(MAPPINGS_PATH, 'utf-8')) as ManualMappingFile
	return parsed.mappings ?? []
}

function loadOutOfCatalogNotes(): Set<string> {
	if (!fs.existsSync(OUT_OF_CATALOG_PATH)) {
		return new Set()
	}

	const parsed = JSON.parse(fs.readFileSync(OUT_OF_CATALOG_PATH, 'utf-8')) as OutOfCatalogFile
	const names = new Set<string>()
	for (const entry of parsed.sets ?? []) {
		const name = entry.setName?.trim()
		if (name) {
			names.add(name)
		}
	}
	return names
}

function listCardStems(directory: string, cache: Map<string, string[]>): string[] {
	const cached = cache.get(directory)
	if (cached) {
		return cached
	}
	if (!fs.existsSync(directory)) {
		cache.set(directory, [])
		return []
	}

	const stems = fs
		.readdirSync(directory)
		.filter((name) => name.endsWith('.ts'))
		.map((name) => name.slice(0, -3))
	cache.set(directory, stems)
	return stems
}

function buildCameoLookup(
	cameoDatabase: CameoDatabase,
	setIndex: Map<string, SetDirEntry>,
	aliases: Map<string, string>,
	outOfCatalogNotes: Set<string>,
): {
	lookup: Map<string, CameoLookupEntry>
	unknownSets: string[]
	outOfCatalog: string[]
	unknownCards: CameoLookupEntry[]
	resolveErrors: CameoResolveError[]
	protectedPaths: Set<string>
} {
	const lookup = new Map<string, CameoLookupEntry>()
	const unknownSets = new Set<string>()
	const outOfCatalogHits = new Set<string>()
	const unknownCards: CameoLookupEntry[] = []
	const resolveErrors: CameoResolveError[] = []
	const protectedPaths = new Set<string>()
	const setDirs = new Map<string, string>()
	for (const [key, entry] of setIndex) {
		setDirs.set(key, path.join(path.dirname(entry.setFile), path.basename(entry.setFile, '.ts')))
	}
	const manualMappings = loadManualMappings()
	const stemCache = new Map<string, string[]>()

	for (const entry of cameoDatabase.cards) {
		const incomingSetName = entry.setName.trim()
		const alias = aliases.get(normalizeSetKey(incomingSetName))
		const resolvedSetName = alias ?? incomingSetName
		const setKey = normalizeSetKey(resolvedSetName)

		if (!setIndex.has(setKey)) {
			if (outOfCatalogNotes.has(incomingSetName)) {
				outOfCatalogHits.add(incomingSetName)
			} else {
				unknownSets.add(incomingSetName)
			}
			continue
		}

		if (outOfCatalogNotes.has(incomingSetName)) {
			resolveErrors.push({
				setName: incomingSetName,
				localId: String(entry.localId).trim(),
				cardName: entry.cardName,
				reason: `Out-of-catalog note is stale because the set now exists: ${resolvedSetName}`,
			})
			continue
		}

		const localId = String(entry.localId).trim()
		if (!localId) {
			continue
		}

		const cameoDexIds = toSortedUniqueDexIds(entry.cameoDexIds)
		if (cameoDexIds.length === 0) {
			continue
		}

		const resolved = resolveCameoFile({
			resolvedSetName,
			localId,
			setDirs,
			manualMappings,
			listStems: (directory) => listCardStems(directory, stemCache),
		})
		if (resolved.status === 'missing') {
			unknownCards.push({
				setNameEn: resolvedSetName,
				localId,
				cardName: entry.cardName,
				cameoDexIds,
			})
			continue
		}
		if (resolved.status === 'manual-missing') {
			resolveErrors.push({
				setName: resolvedSetName,
				localId,
				cardName: entry.cardName,
				reason: `Manual mapping target is not an existing file: ${resolved.targetSetName}/${resolved.targetLocalId}`,
			})
			continue
		}
		if (resolved.status === 'ambiguous') {
			for (const candidate of resolved.candidates) {
				if (candidate.endsWith('.ts')) {
					protectedPaths.add(path.resolve(candidate))
				}
			}
			resolveErrors.push({
				setName: resolvedSetName,
				localId,
				cardName: entry.cardName,
				reason: `Ambiguous card file match: ${resolved.candidates.join(', ')}`,
			})
			continue
		}

		const filePath = path.resolve(resolved.filePath)
		const existing = lookup.get(filePath)
		if (!existing) {
			lookup.set(filePath, {
				setNameEn: resolvedSetName,
				localId,
				cardName: entry.cardName,
				cameoDexIds,
			})
			continue
		}

		existing.cameoDexIds = toSortedUniqueDexIds([...existing.cameoDexIds, ...cameoDexIds])
	}

	return {
		lookup,
		unknownSets: Array.from(unknownSets).sort((a, b) => a.localeCompare(b)),
		outOfCatalog: Array.from(outOfCatalogHits).sort((a, b) => a.localeCompare(b)),
		unknownCards,
		resolveErrors,
		protectedPaths,
	}
}

const APPLICABLE_CATEGORIES = new Set(['Pokemon', 'Trainer', 'Energy'])
const CAMEO_LINE_REGEX = /^[ \t]*cameoDexIds:\s*\[[^\]]*?\],?[ \t]*\n/m

function removeCameoLine(filePath: string) {
	const originalContent = fs.readFileSync(filePath, 'utf-8')
	if (!CAMEO_LINE_REGEX.test(originalContent)) {
		throw new Error(`cameoDexIds line not found for removal: ${filePath}`)
	}

	const content = originalContent.replace(CAMEO_LINE_REGEX, '')
	if (content === originalContent || /cameoDexIds\s*:/.test(content)) {
		throw new Error(`cameoDexIds removal failed: ${filePath}`)
	}

	fs.writeFileSync(filePath, content)
}

function applyFix(filePath: string, cameoDexIds: number[]) {
	const originalContent = fs.readFileSync(filePath, 'utf-8')
	let content = originalContent
	const cameoLine = `cameoDexIds: [${cameoDexIds.join(', ')}],`

	const existingCameoRegex = /(\s*)cameoDexIds:\s*\[[^\]]*?\],?\s*\n/
	const existingCameoMatch = existingCameoRegex.exec(content)
	const buildLine = (indent: string) => `${indent}${cameoLine}\n`

	if (existingCameoMatch && existingCameoMatch.index !== undefined) {
		const indent = existingCameoMatch[1] || '\t'
		content = content.slice(0, existingCameoMatch.index) + buildLine(indent) + content.slice(existingCameoMatch.index + existingCameoMatch[0].length)
	} else {
		const dexIdRegex = /(\s*)dexId:\s*\[[^\]]*?\],?\s*\n/
		const dexIdMatch = dexIdRegex.exec(content)
		if (dexIdMatch && dexIdMatch.index !== undefined) {
			const insertPos = dexIdMatch.index + dexIdMatch[0].length
			const indent = dexIdMatch[1] || '\t'
			content = `${content.slice(0, insertPos)}${buildLine(indent)}\n${content.slice(insertPos)}`
		} else {
			const setLineRegex = /^(\t*)set:\s*Set,\s*\n(\n?)/m
			const setLineMatch = setLineRegex.exec(content)
			if (setLineMatch) {
				const indent = setLineMatch[1] || '\t'
				content = content.replace(setLineRegex, `${indent}set: Set,\n\n${buildLine(indent)}\n`)
			} else {
				throw new Error(`Could not find insertion point in: ${filePath}`)
			}
		}
	}

	if (content === originalContent) {
		throw new Error(`No file change generated for: ${filePath}`)
	}

	fs.writeFileSync(filePath, content)
	const written = fs.readFileSync(filePath, 'utf-8')
	if (!written.includes(cameoLine)) {
		throw new Error(`cameoDexIds write verification failed for: ${filePath}`)
	}
}

async function main() {
	if (!fs.existsSync(CAMEO_DB_PATH)) {
		console.error(`[x] Missing cameo database: ${CAMEO_DB_PATH}`)
		process.exit(1)
	}

	const cameoDatabase = JSON.parse(fs.readFileSync(CAMEO_DB_PATH, 'utf-8')) as CameoDatabase
	const aliases = loadAliases()
	const setIndex = buildSetIndex(DATA_DIR)
	const setNameByDir = new Map<string, string>()
	for (const entry of setIndex.values()) {
		const setDir = path.join(path.dirname(entry.setFile), path.basename(entry.setFile, '.ts'))
		setNameByDir.set(setDir, entry.setNameEn)
	}

	const outOfCatalogNotes = loadOutOfCatalogNotes()
	const { lookup, unknownSets, outOfCatalog, unknownCards, resolveErrors, protectedPaths } = buildCameoLookup(
		cameoDatabase,
		setIndex,
		aliases,
		outOfCatalogNotes,
	)
	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	cardFiles.sort()
	console.log(`[i] Loaded ${cameoDatabase.cards.length} cameo card records`)
	console.log(`[i] Resolved ${lookup.size} cameo card matches after set aliasing`)
	console.log(`[i] Scanning ${cardFiles.length} card files...`)

	const results: FixResult[] = []
	let fixedCount = 0
	let unchangedCount = 0
	let skippedCount = 0
	let errorCount = 0
	let nonPokemonMatches = 0
	let removedCount = 0

	for (const resolveError of resolveErrors) {
		errorCount++
		results.push({
			relativePath: `${resolveError.setName}/${resolveError.localId}`,
			cardName: resolveError.cardName,
			status: 'error',
			reason: resolveError.reason,
		})
		console.log(`[x] ${resolveError.setName} #${resolveError.localId} "${resolveError.cardName}": ${resolveError.reason}`)
	}

	for (const filePath of cardFiles) {
		const relativePath = path.relative(DATA_DIR, filePath)
		const cardDir = path.dirname(filePath)
		const setNameEn = setNameByDir.get(cardDir)
		if (!setNameEn) {
			skippedCount++
			results.push({
				relativePath,
				cardName: 'Unknown',
				status: 'skipped',
				reason: 'Set directory not found in set index',
			})
			continue
		}

		const cameo = lookup.get(path.resolve(filePath))
		if (!cameo) {
			continue
		}

		const card = extractFile(filePath)
		if (!card) {
			errorCount++
			results.push({
				relativePath,
				cardName: 'Unknown',
				status: 'error',
				reason: 'Failed to parse card file',
			})
			continue
		}

		const displayName = card.name?.en || card.name?.fr || path.basename(filePath, '.ts')
		if (!APPLICABLE_CATEGORIES.has(card.category)) {
			nonPokemonMatches++
			results.push({
				relativePath,
				cardName: displayName,
				status: 'skipped',
				reason: 'Cameo entry matched a non-Pokemon card',
				newCameoDexIds: cameo.cameoDexIds,
			})
			continue
		}

		const existingCameoDexIds = Array.isArray(card.cameoDexIds)
			? toSortedUniqueDexIds(card.cameoDexIds)
			: undefined
		if (arrayEquals(existingCameoDexIds, cameo.cameoDexIds)) {
			unchangedCount++
			results.push({
				relativePath,
				cardName: displayName,
				status: 'unchanged',
				newCameoDexIds: cameo.cameoDexIds,
			})
			continue
		}

		try {
			if (apply) {
				applyFix(filePath, cameo.cameoDexIds)
			}

			fixedCount++
			results.push({
				relativePath,
				cardName: displayName,
				status: 'fixed',
				newCameoDexIds: cameo.cameoDexIds,
			})
			const label = dryRun ? '[DRY RUN]' : '[APPLY]'
			console.log(`${label} ${relativePath} \"${displayName}\": cameoDexIds -> [${cameo.cameoDexIds.join(', ')}]`)
		} catch (error: any) {
			errorCount++
			results.push({
				relativePath,
				cardName: displayName,
				status: 'error',
				reason: error.message,
			})
			console.log(`[x] ${relativePath} \"${displayName}\": ${error.message}`)
		}
	}

	for (const filePath of cardFiles) {
		const cardDir = path.dirname(filePath)
		const setNameEn = setNameByDir.get(cardDir)
		if (!setNameEn) {
			continue
		}

		const resolvedPath = path.resolve(filePath)
		if (lookup.has(resolvedPath) || protectedPaths.has(resolvedPath)) {
			continue
		}

		const originalContent = fs.readFileSync(filePath, 'utf-8')
		if (!originalContent.includes('cameoDexIds:')) {
			continue
		}

		const relativePath = path.relative(DATA_DIR, filePath)
		try {
			if (apply) {
				removeCameoLine(filePath)
			}

			removedCount++
			results.push({
				relativePath,
				cardName: path.basename(filePath, '.ts'),
				status: 'removed',
				reason: 'Cameo entry absent from the updated workbook',
			})
			const label = dryRun ? '[DRY RUN]' : '[APPLY]'
			console.log(`${label} ${relativePath}: removed cameoDexIds`)
		} catch (error: any) {
			errorCount++
			results.push({
				relativePath,
				cardName: path.basename(filePath, '.ts'),
				status: 'error',
				reason: error.message,
			})
			console.log(`[x] ${relativePath}: ${error.message}`)
		}
	}

	let unknownCardCount = 0
	for (const entry of unknownCards) {
		unknownCardCount++
		results.push({
			relativePath: `${entry.setNameEn}/${entry.localId}`,
			cardName: entry.cardName,
			status: 'skipped',
			reason: 'No Pokemon card file found for cameo entry',
			newCameoDexIds: entry.cameoDexIds,
		})
	}

	console.log('')
	console.log('='.repeat(60))
	console.log(dryRun ? 'CAMEO FIX PREVIEW (DRY RUN)' : 'CAMEO FIX RESULTS')
	console.log('='.repeat(60))
	console.log(`[i] Fixed:               ${fixedCount}`)
	console.log(`[i] Unchanged:           ${unchangedCount}`)
	console.log(`[i] Errors:              ${errorCount}`)
	console.log(`[i] Unknown sets:        ${unknownSets.length}`)
	console.log(`[i] Out of catalog:      ${outOfCatalog.length}`)
	console.log(`[i] Unknown cards:       ${unknownCardCount}`)
	console.log(`[i] Removed:             ${removedCount}`)
	console.log(`[i] Non-Pokemon matches: ${nonPokemonMatches}`)

	if (unknownSets.length > 0) {
		console.log('')
		console.log('[!] Unknown cameo set names (add aliases in cameo-set-aliases.json):')
		for (const setName of unknownSets) {
			console.log(`  - ${setName}`)
		}
	}

	fs.writeFileSync(
		LOG_PATH,
		results
			.map((result) => {
				const cameoValues = result.newCameoDexIds ? `[${result.newCameoDexIds.join(',')}]` : ''
				return `${result.status.toUpperCase()}\t${result.relativePath}\t\"${result.cardName}\"\t${cameoValues}\t${result.reason || ''}`
			})
			.join('\n') + '\n',
	)
	console.log(`[OK] Log saved to: ${LOG_PATH}`)
}

main().catch((error: any) => {
	console.error(`[x] ${error.message}`)
	process.exit(1)
})
