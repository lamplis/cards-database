import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274151,
				tcgplayer: 83960
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83960,
				cardmarket: 274151
			}
		}
	],
}

export default card
