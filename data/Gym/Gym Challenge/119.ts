import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Minefield Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274387,
				tcgplayer: 88779
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "text-error"
		}
	]
}

export default card
