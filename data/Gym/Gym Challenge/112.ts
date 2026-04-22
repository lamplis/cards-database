import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Quiz #3",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274380,
				tcgplayer: 83881
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
