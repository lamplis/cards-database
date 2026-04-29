import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Cleffa",
		de: "Pii"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [173],

	hp: 30,

	types: [
		"Colorless"
	],

	stage: "Baby",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Recycle",
				de: "Energierecycling"
			},
			effect: {
				en: "Shuffle a basic Energy card from your discard pile into your deck.",
				de: "Mische eine Basis-Energiekarte aus deinem Ablagestapel in dein Deck."
			},

		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 275306,
				tcgplayer: 84364
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84364,
				cardmarket: 275306
			},
		},
	],
}

export default card
