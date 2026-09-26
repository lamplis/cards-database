import { describe, expect, it } from 'bun:test'
import { resolveClassicCollectionOrigin } from '../compiler/utils/cardUtil'

describe('resolveClassicCollectionOrigin', () => {
	it('maps CC001 to Base Set Pikachu 58', () => {
		expect(resolveClassicCollectionOrigin('CC001')).toEqual({
			serieId: 'base',
			setId: 'base1',
			localId: '58'
		})
	})

	it('maps CC002 to Base Set Charizard 4', () => {
		expect(resolveClassicCollectionOrigin('CC002')).toEqual({
			serieId: 'base',
			setId: 'base1',
			localId: '4'
		})
	})

	it('maps CC009 to Team Rocket Returns Dark Tyranitar', () => {
		expect(resolveClassicCollectionOrigin('CC009')).toEqual({
			serieId: 'ex',
			setId: 'ex7',
			localId: '19'
		})
	})

	it('maps the LEGEND halves onto consecutive Triumphant scans', () => {
		expect(resolveClassicCollectionOrigin('CC016')).toEqual({
			serieId: 'hgss',
			setId: 'hgss4',
			localId: '99'
		})
		expect(resolveClassicCollectionOrigin('CC017')).toEqual({
			serieId: 'hgss',
			setId: 'hgss4',
			localId: '100'
		})
	})

	it('maps CC030 to Paldea Evolved Magikarp', () => {
		expect(resolveClassicCollectionOrigin('CC030')).toEqual({
			serieId: 'sv',
			setId: 'sv02',
			localId: '203'
		})
	})

	it('returns undefined for numbered, letter, and out-of-range ids', () => {
		expect(resolveClassicCollectionOrigin('001')).toBeUndefined()
		expect(resolveClassicCollectionOrigin('R')).toBeUndefined()
		expect(resolveClassicCollectionOrigin('CC031')).toBeUndefined()
	})
})
