import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Charity"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274235,
				tcgplayer: 84182
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 84182,
				cardmarket: 274235
			}
		}
	],
}

export default card
