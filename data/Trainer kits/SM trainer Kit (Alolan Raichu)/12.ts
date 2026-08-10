import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Manglouton"
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Charge"
			},
			damage: "10"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Morsure"
			},
			damage: "20"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297243,
				tcgplayer: 192937
			}
		},
	],

}

export default card
