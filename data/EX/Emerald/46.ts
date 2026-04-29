import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
		de: "Zwirrlicht"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pound"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276557,
				tcgplayer: 85047
			}
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85047,
				cardmarket: 276557
			},
		}
	],
}

export default card
