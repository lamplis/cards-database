import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Mysterious Fossil"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 10,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274874,
				tcgplayer: 87668
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87668,
				cardmarket: 274874
			}
		}
	],

	retreat: 0
}

export default card
