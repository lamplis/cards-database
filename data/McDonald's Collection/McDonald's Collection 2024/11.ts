import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Roaring Moon",
		fr: "Rugit-Lune",
		es: "Bramaluna",
		it: "Lunaruggente",
		pt: "Lua Estrondo",
		de: "Donnersichel"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1005],

	hp: 140,

	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Vengeance Fletching",
				fr: "Plumage Vengeur"
			},
			effect: {
				en: "This attack does 10 more damage for each Ancient card in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Temps passé dans votre pile de défausse."
			},
			damage: "70+"
		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
				fr: "Ailes Vives"
			},
			damage: 120
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802833,
				tcgplayer: 614380
			}
		}
	]
}

export default card

