import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274287,
				tcgplayer: 86503
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86503,
				cardmarket: 274287
			}
		},
	],
}

export default card
