import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274152,
				tcgplayer: 85281
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85281,
				cardmarket: 274152
			}
		}
	],
}

export default card
