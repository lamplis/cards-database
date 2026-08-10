import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Moomoo Milk",
		fr: "Kaiminus"
	},

	illustrator: "Noriko Hotta",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Item",
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
				cardmarket: 279125,
				tcgplayer: 87577,
			},
		},
	],

}

export default card
