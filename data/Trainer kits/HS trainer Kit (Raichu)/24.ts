import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Marill"
	},

	illustrator: "Hideaki Hakozaki",
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
				fr: "Éclaboussure"
			},
			damage: "10+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			}
		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coud'keu"
			},
			damage: "30"
		},
	],

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279111,
				tcgplayer: 89720,
			},
		},
	],

}

export default card
