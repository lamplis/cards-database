import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Wave",
				fr: "Aqua-Vague",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 396762,
		tcgplayer: 197661
	}
}

export default card
