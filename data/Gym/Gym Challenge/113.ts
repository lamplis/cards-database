import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Cinnabar City Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274381,
				tcgplayer: 84322
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
