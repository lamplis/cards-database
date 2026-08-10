import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Kaiminus"
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Ronge"
			}
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Grosse vague"
			},
			damage: "20"
		},
	],

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279109,
				tcgplayer: 86776,
			},
		},
	],

}

export default card
