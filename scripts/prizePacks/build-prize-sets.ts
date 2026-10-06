import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { parseSetlist, type PrizeFinish, type SetlistRow } from './parse-setlist.ts'

const SERIE_NAME = 'Play! Pokémon'
const SERIE_ID = 'play'

const ENERGY_FILES: Record<string, string> = {
	Grass: 'data/Scarlet & Violet/Scarlet & Violet Energy/001.ts',
	Fire: 'data/Scarlet & Violet/Scarlet & Violet Energy/002.ts',
	Water: 'data/Scarlet & Violet/Scarlet & Violet Energy/003.ts',
	Lightning: 'data/Scarlet & Violet/Scarlet & Violet Energy/004.ts',
	Psychic: 'data/Scarlet & Violet/Scarlet & Violet Energy/005.ts',
	Fighting: 'data/Scarlet & Violet/Scarlet & Violet Energy/006.ts',
	Darkness: 'data/Scarlet & Violet/Scarlet & Violet Energy/007.ts',
	Metal: 'data/Scarlet & Violet/Scarlet & Violet Energy/008.ts',
}

interface SeriesSpec {
	series: number
	id: string
	abbr: string
	releaseDate: string
	expectedCards: number
	name: { en: string, fr: string, de: string, it: string, es: string }
}

const SERIES: SeriesSpec[] = [
	spec(1, '2022-11-09', 170, 'Première', 'Prima'),
	spec(2, '2023-01-19', 154, 'Deuxième', 'Seconda'),
	spec(3, '2023-08-14', 163, 'Troisième', 'Terza'),
	spec(4, '2024-02-14', 86, 'Quatrième', 'Quarta'),
	spec(5, '2024-08-14', 86, 'Cinquième', 'Quinta'),
	spec(6, '2025-02-14', 94, 'Sixième', 'Sesta'),
	spec(7, '2025-08-14', 96, 'Septième', 'Settima'),
	spec(8, '2026-01-01', 90, 'Huitième', 'Ottava'),
	spec(9, '2026-07-01', 80, 'Neuvième', 'Nona'),
]

function spec(series: number, releaseDate: string, expectedCards: number, fr: string, it: string): SeriesSpec {
	const number = String(series).padStart(2, '0')
	return {
		series,
		id: `pps${series}`,
		abbr: `PPS${series}`,
		releaseDate,
		expectedCards,
		name: {
			en: `Play! Pokémon Prize Pack Series ${number}`,
			fr: `Play! Pokémon Packs Récompense ${fr} Série`,
			de: `Play! Pokémon Preispack Serie ${series}`,
			it: `Play! Pokémon Buste Premio ${it} Serie`,
			es: `Play! Pokémon Paquetes de Premio Serie ${series}`,
		},
	}
}

interface PlannedCard {
	sourcePath: string
	localId: string
	finishes: PrizeFinish[]
	energy: boolean
}

function main() {
	const dryRun = process.argv.includes('--dry-run')
	const root = join(import.meta.dir, '../..')
	const dataDir = join(root, 'data')
	const index = buildSetIndex(dataDir)
	let failures = 0

	if (!dryRun)
		writeSerie(dataDir)

	for (const series of SERIES) {
		const wikitext = readFileSync(join(import.meta.dir, 'checklists', `series-${series.series}.wikitext`), 'utf8')
		const planned = new Map<string, PlannedCard>()
		for (const row of parseSetlist(wikitext)) {
			if (!row.finish) {
				console.log(`unknown promotion\t${series.series}\t${row.promotion}`)
				failures++
				continue
			}
			const resolved = resolveSource(row, index, dataDir)
			if ('reason' in resolved) {
				console.log(`${resolved.reason}\t${series.series}\t${row.setTitle ?? ''}\t${row.collectorNumber ?? row.basicEnergy ?? '—'}`)
				failures++
				continue
			}
			const existing = planned.get(resolved.key)
			if (existing) {
				if (!existing.finishes.includes(row.finish))
					existing.finishes.push(row.finish)
				continue
			}
			planned.set(resolved.key, {
				sourcePath: resolved.path,
				localId: resolved.localId,
				finishes: [row.finish],
				energy: resolved.energy,
			})
		}

		const cards = assignLocalIds([...planned.values()])
		if (cards.length !== series.expectedCards) {
			console.log(`count\t${series.abbr}\texpected ${series.expectedCards}\tgot ${cards.length}`)
			failures++
			continue
		}
		const idCounts = new Map<string, number>()
		for (const card of cards)
			idCounts.set(card.localId, (idCounts.get(card.localId) ?? 0) + 1)
		const duplicateIds = [...idCounts.entries()].filter(([, count]) => count > 1)
		if (duplicateIds.length > 0) {
			for (const [id] of duplicateIds)
				console.log(`duplicate local id\t${series.abbr}\t${id}`)
			failures++
			continue
		}
		console.log(`${series.abbr}: ${cards.length} cards`)
		if (dryRun)
			continue
		writeSet(dataDir, series, cards)
	}

	if (failures > 0)
		process.exitCode = 1
}

function resolveSource(row: SetlistRow, index: Map<string, string>, dataDir: string): { key: string, path: string, localId: string, energy: boolean } | { reason: string } {
	if (row.unnumbered) {
		if (!row.basicEnergy)
			return { reason: 'unnumbered energy' }
		const relative = ENERGY_FILES[row.basicEnergy]
		if (!relative)
			return { reason: 'unnumbered energy' }
		const path = join(dataDir, '..', relative)
		return { key: `energy:${row.basicEnergy}`, path, localId: row.basicEnergy, energy: true }
	}
	if (!row.collectorNumber)
		return { reason: 'no file' }
	let title = row.setTitle
	if (!title && /^SWSH\d+$/.test(row.collectorNumber))
		title = 'SWSH Black Star Promos'
	if (!title)
		return { reason: 'no set' }
	const aliased = title === 'SVE Basic Energies'
		? 'Scarlet & Violet Energy'
		: title === 'MEE'
			? 'Mega Evolution Energy'
			: title
	const folder = index.get(normalizeTitle(aliased))
	if (!folder)
		return { reason: 'no set' }
	const names = /^\d+$/.test(row.collectorNumber)
		? [...new Set([row.collectorNumber, row.collectorNumber.padStart(3, '0')])]
		: [row.collectorNumber]
	const hits = names.map((name) => join(folder, `${name}.ts`)).filter((path) => existsSync(path))
	if (hits.length !== 1)
		return { reason: hits.length === 0 ? 'no file' : 'ambiguous' }
	return {
		key: hits[0],
		path: hits[0],
		localId: row.collectorNumber,
		energy: false,
	}
}

function assignLocalIds(cards: PlannedCard[]): PlannedCard[] {
	for (const card of cards) {
		if (card.energy || !/^\d+$/.test(card.localId))
			continue
		card.localId = `${officialAbbr(card.sourcePath)}${card.localId}`
	}
	return cards
}

function officialAbbr(cardPath: string): string {
	const setFile = `${dirname(cardPath)}.ts`
	const text = readFileSync(setFile, 'utf8')
	const abbr = text.match(/official:\s*['"]([^'"]+)['"]/)?.[1]
	if (!abbr)
		throw new Error(`No official abbreviation for ${setFile}`)
	return abbr
}

function writeSerie(dataDir: string) {
	const file = join(dataDir, `${SERIE_NAME}.ts`)
	if (existsSync(file))
		return
	writeFileSync(file, `import { Serie } from '../interfaces'

const serie: Serie = {
	id: "${SERIE_ID}",
	name: {
		en: "${SERIE_NAME}",
		fr: "${SERIE_NAME}",
		es: "${SERIE_NAME}",
		it: "${SERIE_NAME}",
		de: "${SERIE_NAME}",
	},
}

export default serie
`)
}

function writeSet(dataDir: string, series: SeriesSpec, cards: PlannedCard[]) {
	const folder = join(dataDir, SERIE_NAME, series.name.en)
	mkdirSync(folder, { recursive: true })
	writeFileSync(join(dataDir, SERIE_NAME, `${series.name.en}.ts`), setSource(series))
	for (const file of readdirSync(folder)) {
		if (file.endsWith('.ts'))
			unlinkSync(join(folder, file))
	}
	for (const card of cards) {
		const source = readFileSync(card.sourcePath, 'utf8')
		const rewritten = card.energy
			? energyCard(source, series.name.en, card.finishes)
			: rewriteReprint(source, series.name.en, card.finishes)
		writeFileSync(join(folder, `${card.localId}.ts`), rewritten)
	}
}

function setSource(series: SeriesSpec): string {
	return `import { Set } from '../../interfaces'
import serie from '../${SERIE_NAME}'

const set: Set = {
	id: "${series.id}",

	name: {
		en: "${series.name.en}",
		fr: "${series.name.fr}",
		de: "${series.name.de}",
		it: "${series.name.it}",
		es: "${series.name.es}",
	},

	serie,

	cardCount: {
		official: ${series.expectedCards}
	},

	releaseDate: "${series.releaseDate}",

	abbreviations: {
		official: "${series.abbr}"
	},
	searchAliases: [
		"${series.abbr}"
	],
}

export default set
`
}

function energyCard(source: string, setName: string, finishes: PrizeFinish[]): string {
	const name = toTabs(extractProperty(source, 'name'))
	return `import { Card } from '../../../interfaces'
import Set from '../${setName}'

const card: Card = {
	${name.trim()},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	variants: ${variantArray('\t', '\t', '"', finishes)}
}

export default card
`
}

function rewriteReprint(source: string, setName: string, finishes: PrizeFinish[]): string {
	const replaced = source.replace(
		/^import Set from .+$/m,
		`import Set from "../${setName}"`,
	)
	if (replaced === source)
		throw new Error('Card is missing a set import')
	const withVariants = replaceVariants(replaced, finishes)
	return removeRootThirdParty(withVariants)
}

function replaceVariants(source: string, finishes: PrizeFinish[]): string {
	const found = findVariants(source)
	const quote = source.match(/\ben:\s*(['"])/)?.[1] ?? '"'
	const lineIndent = found?.lineIndent ?? rootIndent(source)
	const unit = lineIndent.includes('\t') || source.includes('\n\t') ? '\t' : '  '
	const array = variantArray(lineIndent, unit, quote, finishes)
	if (!found)
		return insertVariants(source, array, lineIndent)
	return source.slice(0, found.valueStart) + array + source.slice(found.valueEnd)
}

function insertVariants(source: string, arrayText: string, lineIndent: string): string {
	const exportAt = source.lastIndexOf('export default')
	const close = source.lastIndexOf('\n', exportAt)
	const brace = source.lastIndexOf('}', exportAt)
	if (brace < 0)
		throw new Error('Card object has no closing brace')
	let head = source.slice(0, brace)
	const last = lastNonSpace(head)
	if (last.char !== ',' && last.char !== '{')
		head = head.slice(0, last.index + 1) + ',' + head.slice(last.index + 1)
	return `${head}\n${lineIndent}variants: ${arrayText}${source.slice(brace)}`
}

export function variantArray(lineIndent: string, unit: string, quote: string, finishes: PrizeFinish[]): string {
	const objectIndent = lineIndent + unit
	const inner = objectIndent + unit
	const ordered = (['normal', 'holo'] as PrizeFinish[]).filter((finish) => finishes.includes(finish))
	const objects = ordered.map((finish) =>
		`${objectIndent}{\n${inner}type: ${quote}${finish}${quote},\n${inner}stamp: [${quote}player-rewards-program${quote}],\n${objectIndent}},\n`
	).join('')
	return `[\n${objects}${lineIndent}]`
}

function removeRootThirdParty(source: string): string {
	const indent = rootIndent(source)
	let current = source
	while (true) {
		const match = new RegExp(`^${indent}thirdParty:\\s*`, 'm').exec(current)
		if (!match || match.index === undefined)
			return current
		let start = match.index
		if (start > 0 && current[start - 1] === '\n')
			start--
		let index = match.index + match[0].length
		if (current[index] === '{')
			index = matchBracket(current, index)
		if (current[index] === ',')
			index++
		if (current[index] === '\n')
			index++
		current = current.slice(0, start) + current.slice(index)
	}
}

function extractProperty(source: string, key: string): string {
	const match = new RegExp(`^[ \\t]*${key}:\\s*`, 'm').exec(source)
	if (!match || match.index === undefined)
		throw new Error(`Missing ${key}`)
	const brace = source.indexOf('{', match.index)
	const end = matchBracket(source, brace)
	return source.slice(match.index, end)
}

function toTabs(block: string): string {
	return block.split('\n').map((line) => line.replace(/^(?: {4})+/, (spaces) => '\t'.repeat(spaces.length / 4))).join('\n')
}

function findVariants(source: string): { valueStart: number, valueEnd: number, lineIndent: string } | null {
	const matches = [...source.matchAll(/^[ \t]*variants[ \t]*:/gm)]
	if (matches.length !== 1 || matches[0].index === undefined)
		return null
	const lineIndent = matches[0][0].match(/^[ \t]*/)?.[0] ?? ''
	let index = matches[0].index + matches[0][0].length
	while (index < source.length && /\s/.test(source[index]))
		index++
	if (source[index] !== '[' && source[index] !== '{')
		return null
	const valueEnd = matchBracket(source, index)
	if (valueEnd < 0)
		return null
	return { valueStart: index, valueEnd, lineIndent }
}

function rootIndent(source: string): string {
	return source.match(/^([ \t]+)(?:name|set):/m)?.[1] ?? '\t'
}

function lastNonSpace(value: string): { char: string, index: number } {
	for (let index = value.length - 1; index >= 0; index--) {
		if (!/\s/.test(value[index]))
			return { char: value[index], index }
	}
	return { char: '', index: -1 }
}

function matchBracket(source: string, openIndex: number): number {
	const open = source[openIndex]
	const close = open === '[' ? ']' : '}'
	let depth = 0
	let index = openIndex
	while (index < source.length) {
		const char = source[index]
		if (char === '"' || char === "'") {
			index = skipString(source, index)
			continue
		}
		if (char === open)
			depth++
		else if (char === close) {
			depth--
			if (depth === 0)
				return index + 1
		}
		index++
	}
	return -1
}

function skipString(source: string, start: number): number {
	const quote = source[start]
	let index = start + 1
	while (index < source.length) {
		if (source[index] === '\\') {
			index += 2
			continue
		}
		if (source[index] === quote)
			return index + 1
		index++
	}
	return source.length
}

function normalizeTitle(value: string): string {
	return value.normalize('NFC').replace(/[\u2018\u2019\u02BC]/g, "'").trim()
}

function buildSetIndex(dataDir: string): Map<string, string> {
	const claimed = new Map<string, string>()
	for (const serie of readdirSync(dataDir, { withFileTypes: true })) {
		if (!serie.isDirectory())
			continue
		const serieDir = join(dataDir, serie.name)
		for (const file of readdirSync(serieDir)) {
			if (!file.endsWith('.ts'))
				continue
			const setFile = join(serieDir, file)
			const text = readFileSync(setFile, 'utf8')
			if (!text.includes('cardCount'))
				continue
			const folder = setFile.slice(0, -3)
			if (!existsSync(folder))
				continue
			const name = text.match(/\ben:\s*['"]([^'"]+)['"]/)?.[1]
			for (const key of [file.slice(0, -3), name].filter((key): key is string => Boolean(key))) {
				const normalized = normalizeTitle(key)
				const previous = claimed.get(normalized)
				if (!previous)
					claimed.set(normalized, folder)
				else if (previous !== folder)
					claimed.set(normalized, '')
			}
		}
	}
	const index = new Map<string, string>()
	for (const [key, folder] of claimed) {
		if (folder)
			index.set(key, folder)
	}
	return index
}

if (import.meta.main)
	main()
