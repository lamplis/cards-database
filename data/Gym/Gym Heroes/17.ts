import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274153,
				tcgplayer: 86848
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86848,
				cardmarket: 274153
			}
		}
	],
}

export default card
