import { describe, expect, test } from 'bun:test'
import { variantArray } from './build-prize-sets.ts'

describe('variantArray', () => {
	test('emits the play stamp and orders normal before holo', () => {
		expect(variantArray('\t', '\t', '"', ['holo', 'normal'])).toBe(
			'[\n' +
			'\t\t{\n' +
			'\t\t\ttype: "normal",\n' +
			'\t\t\tstamp: ["player-rewards-program"],\n' +
			'\t\t},\n' +
			'\t\t{\n' +
			'\t\t\ttype: "holo",\n' +
			'\t\t\tstamp: ["player-rewards-program"],\n' +
			'\t\t},\n' +
			'\t]',
		)
	})

	test('uses the source quote for a holo-only variant', () => {
		const result = variantArray('\t', '\t', "'", ['holo'])
		expect(result).toContain("type: 'holo'")
		expect(result).not.toContain('type: "holo"')
		expect(result).not.toContain("type: 'normal'")
		expect(result).toContain("stamp: ['player-rewards-program']")
	})
})
