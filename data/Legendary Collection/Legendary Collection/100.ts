import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Full Heal Energy"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274865,
				tcgplayer: 85585
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85585,
				cardmarket: 274865
			}
		}
	],

	retreat: 0
}

export default card
