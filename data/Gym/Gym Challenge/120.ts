import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Secret Experiment"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274388,
				tcgplayer: 88790
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88790,
				cardmarket: 274388
			}
		},
	],
}

export default card
