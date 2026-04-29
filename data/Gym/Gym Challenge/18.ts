import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274286,
				tcgplayer: 85708
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85708,
				cardmarket: 274286
			}
		},
	],
}

export default card
