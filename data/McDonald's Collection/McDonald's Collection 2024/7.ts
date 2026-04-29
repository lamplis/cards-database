import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},

	illustrator: "otumami",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [195],

	hp: 120,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille"
			},
			damage: 30
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fickle Impact",
				fr: "Frappe Capricieuse"
			},
			damage: 180,
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, this attack does nothing.",
				fr: "S'il vous reste exactement 2, 4 ou 6 cartes Récompense, cette attaque ne fait rien."
			}
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
			type: 'normal',
			thirdParty: {
				cardmarket: 802829,
				tcgplayer: 614376
			}
		}
	]
}

export default card

