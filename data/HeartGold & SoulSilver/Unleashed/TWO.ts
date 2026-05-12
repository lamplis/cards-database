import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d'Alpha",
		de: "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Shuffle your deck!",
		fr: "Mélangez votre deck.",
		de: "Mische dein Deck!"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83510,
				cardmarket: 279156
			}
		}
	],
	hp: 0,

}

export default card
