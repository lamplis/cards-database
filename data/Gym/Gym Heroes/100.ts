import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274152,
				tcgplayer: 85282
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85282,
				cardmarket: 274152
			}
		}
	],
}

export default card
