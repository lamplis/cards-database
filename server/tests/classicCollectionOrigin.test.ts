import { describe, expect, it } from 'bun:test'
import { reprintOriginPictureLanguage, resolveClassicCollectionOrigin, type PlayReprintSetRef } from '../compiler/utils/cardUtil'

const sets: ReadonlyArray<PlayReprintSetRef> = [
	{ id: 'base1', serieId: 'base', officialAbbreviation: 'BS' },
	{ id: 'sv02', serieId: 'sv', officialAbbreviation: 'PAL' },
	{ id: 'sv01', serieId: 'sv', officialAbbreviation: 'SVI' },
	{ id: 'ex7', serieId: 'ex', officialAbbreviation: 'TR' },
	{ id: 'hgss4', serieId: 'hgss', officialAbbreviation: 'TRI' },
	{ id: 'dup-a', serieId: 'misc', officialAbbreviation: 'ZZ' },
	{ id: 'dup-b', serieId: 'misc', officialAbbreviation: 'ZZ' }
]

describe('resolveClassicCollectionOrigin', () => {
	it('maps BS-004 to Base Set Charizard 4', () => {
		expect(resolveClassicCollectionOrigin('BS-004', sets)).toEqual({
			serieId: 'base',
			setId: 'base1',
			localId: '4'
		})
	})

	it('maps SV02-203 to Paldea Evolved 203', () => {
		expect(resolveClassicCollectionOrigin('SV02-203', sets)).toEqual({
			serieId: 'sv',
			setId: 'sv02',
			localId: '203'
		})
	})

	it('prefers the series alias over the official abbreviation', () => {
		expect(resolveClassicCollectionOrigin('EX7-019', sets)).toEqual({
			serieId: 'ex',
			setId: 'ex7',
			localId: '19'
		})
	})

	it('returns undefined for an ambiguous code', () => {
		expect(resolveClassicCollectionOrigin('ZZ-001', sets)).toBeUndefined()
	})

	it('returns undefined for numbered and letter ids', () => {
		expect(resolveClassicCollectionOrigin('001', sets)).toBeUndefined()
		expect(resolveClassicCollectionOrigin('R', sets)).toBeUndefined()
		expect(resolveClassicCollectionOrigin('CC001', sets)).toBeUndefined()
	})
})

describe('reprintOriginPictureLanguage', () => {
	it('uses English when the requested language has no scan', () => {
		expect(reprintOriginPictureLanguage('fr', false, true)).toBe('en')
	})

	it('keeps the requested language when that scan exists', () => {
		expect(reprintOriginPictureLanguage('fr', true, true)).toBe('fr')
	})

	it('uses English when English is requested and present', () => {
		expect(reprintOriginPictureLanguage('en', true, true)).toBe('en')
	})

	it('returns null when neither language has a scan', () => {
		expect(reprintOriginPictureLanguage('fr', false, false)).toBeNull()
		expect(reprintOriginPictureLanguage('en', false, false)).toBeNull()
	})
})
