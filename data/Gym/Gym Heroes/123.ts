import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Duel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274259,
				tcgplayer: 87527
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87527,
				cardmarket: 274259
			}
		}
	],
}

export default card
