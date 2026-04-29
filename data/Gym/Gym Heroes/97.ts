import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Quiz #1"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	cameoDexIds: [15, 71, 94, 98, 125, 130, 134, 139],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274233,
				tcgplayer: 83879
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83879,
				cardmarket: 274233
			}
		}
	],
}

export default card
