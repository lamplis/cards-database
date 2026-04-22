import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		de: "Kampfenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants:[
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275035,
				tcgplayer: 85437
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
