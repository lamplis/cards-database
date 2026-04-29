import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Erika's Kindness"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	cameoDexIds: [43, 58],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274371,
				tcgplayer: 85299
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85299,
				cardmarket: 274371
			}
		},
	],
}

export default card
