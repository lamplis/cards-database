#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { extractFile } from '../utils/ts-extract-utils'
import { buildSetIndex } from './dex-utils'

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

interface CameoLookupEntry {
	setNameEn: string
	localId: string
	cardName: string
	cameoDexIds: number[]
}

interface FixResult {
	relativePath: string
	cardName: string
	status: 'fixed' | 'unchanged' | 'skipped' | 'error'
	reason?: string
	newCameoDexIds?: number[]
}

function normalizeSetKey(value: string): string {
	return value.trim().toLowerCase()
}

function normalizeLocalId(value: string): string {
	const trimmed = value.trim()
	if (!trimmed) {
		return ''
	}

	const numericWithSuffix = trimmed.match(/^0*([0-9]+)([A-Za-z]*)$/)
	if (numericWithSuffix) {
		const numberPart = String(Number(numericWithSuffix[1]))
		const suffixPart = (numericWithSuffix[2] || '').toLowerCase()
		return `${numberPart}${suffixPart}`
	}

	return trimmed.toLowerCase()
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

function buildCameoLookup(
	cameoDatabase: CameoDatabase,
	setIndex: Map<string, unknown>,
	aliases: Map<string, string>,
): {
	lookup: Map<string, CameoLookupEntry>
	unknownSets: string[]
} {
	const lookup = new Map<string, CameoLookupEntry>()
	const unknownSets = new Set<string>()

	for (const entry of cameoDatabase.cards) {
		const incomingSetName = entry.setName.trim()
		const alias = aliases.get(normalizeSetKey(incomingSetName))
		const resolvedSetName = alias ?? incomingSetName
		const setKey = normalizeSetKey(resolvedSetName)

		if (!setIndex.has(setKey)) {
			unknownSets.add(incomingSetName)
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

		const key = `${setKey}|||${normalizeLocalId(localId)}`
		const existing = lookup.get(key)
		if (!existing) {
			lookup.set(key, {
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
	}
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

	const { lookup, unknownSets } = buildCameoLookup(cameoDatabase, setIndex, aliases)
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
	const matchedKeys = new Set<string>()
	let fixedCount = 0
	let unchangedCount = 0
	let skippedCount = 0
	let errorCount = 0
	let nonPokemonMatches = 0

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

		const localId = path.basename(filePath, '.ts')
		const lookupKey = `${normalizeSetKey(setNameEn)}|||${normalizeLocalId(localId)}`
		const cameo = lookup.get(lookupKey)
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
		if (card.category !== 'Pokemon') {
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

		matchedKeys.add(lookupKey)

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

	let unknownCardCount = 0
	for (const [key, entry] of lookup.entries()) {
		if (matchedKeys.has(key)) {
			continue
		}
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
	console.log(`[i] Unknown cards:       ${unknownCardCount}`)
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
