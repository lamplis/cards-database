import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274285,
				tcgplayer: 83858
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
