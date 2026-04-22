import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Protection",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274369,
				tcgplayer: 83977
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
