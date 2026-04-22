import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Potion Energy",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274866,
				tcgplayer: 88351
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
