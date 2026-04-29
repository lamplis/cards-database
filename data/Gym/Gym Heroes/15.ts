import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274151,
				tcgplayer: 83959
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83959,
				cardmarket: 274151
			}
		}
	],
}

export default card
