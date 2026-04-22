import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Psychic Control",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274389,
				tcgplayer: 88886
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
