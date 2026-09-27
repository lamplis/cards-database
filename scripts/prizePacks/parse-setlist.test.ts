import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseSetlist } from './parse-setlist.ts'

const FIXTURE = `
{{Setlist/entry|SWSH111|E|[[Galarian Rapidash V (SWSH Promo 111)|Galarian Rapidash]]{{TCGV}}|Psychic||None|Standard Set Foil}}
{{Setlist/entry|[[Image:SetSymbolSword and Shield.png|18px|link=Sword & Shield (TCG)]] 014/202|D|{{TCG ID|Sword & Shield|Rillaboom|14}}|Grass||Rare Holo|Standard Set}}
{{Setlist/entry|[[Image:SetSymbolSword and Shield.png|18px|link=Sword & Shield (TCG)]] 056/202|D|{{TCG ID|Sword & Shield|Drizzile|56}}|Water||Uncommon|Standard Set Foil}}
{{Setlist/entry|[[Image:SetSymbolSword and Shield.png|18px|link=Sword & Shield (TCG)]] 056/202|D|{{TCG ID|Sword & Shield|Drizzile|56}}|Water||Uncommon|Standard Set}}
{{Setlist/entry|—|—|{{TCG|Basic Grass Energy}}|Energy|Grass|None|Standard Set Foil}}
{{Setlist/entry|[[MEE]] 001|—|{{TCG|Basic Grass Energy}}|Energy|Grass|None|Standard Set}}
{{Setlist/entry|[[Image:SetSymbolPhantasmal Flames.png|x18px|link=Phantasmal Flames (TCG)]] 017/094|I|{{TCG ID|Phantasmal Flames|Reshiram|17}}|Fire||Rare|Standard Set {{tt|*|Erroneously listed as Standard Set Foil on the official setlist.}}}}
`

describe('parseSetlist', () => {
	const rows = parseSetlist(FIXTURE)

	test('reads a promo foil row', () => {
		expect(rows[0]).toEqual({
			setTitle: null,
			collectorNumber: 'SWSH111',
			promotion: 'Standard Set Foil',
			finish: 'holo',
			unnumbered: false,
			basicEnergy: null,
		})
	})

	test('unpads a main-set number and keeps the non-holo finish', () => {
		expect(rows[1]).toMatchObject({
			setTitle: 'Sword & Shield',
			collectorNumber: '14',
			finish: 'normal',
			unnumbered: false,
		})
	})

	test('keeps both finishes of the same collector number', () => {
		expect(rows[2]).toMatchObject({ collectorNumber: '56', finish: 'holo' })
		expect(rows[3]).toMatchObject({ collectorNumber: '56', finish: 'normal' })
	})

	test('marks an unnumbered basic energy', () => {
		expect(rows[4]).toMatchObject({
			collectorNumber: null,
			finish: 'holo',
			unnumbered: true,
			basicEnergy: 'Grass',
		})
	})

	test('reads a numbered Mega Evolution energy', () => {
		expect(rows[5]).toMatchObject({
			setTitle: 'MEE',
			collectorNumber: '1',
			finish: 'normal',
			unnumbered: false,
		})
	})

	test('strips a footnote and keeps the corrected finish', () => {
		expect(rows[6]).toMatchObject({
			setTitle: 'Phantasmal Flames',
			collectorNumber: '17',
			promotion: 'Standard Set',
			finish: 'normal',
		})
	})

	test('parses every Series One entry', () => {
		const wikitext = readFileSync(join(import.meta.dir, 'checklists/series-1.wikitext'), 'utf8')
		expect(parseSetlist(wikitext)).toHaveLength(210)
	})
})

