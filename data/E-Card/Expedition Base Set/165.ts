import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		de: "Wasserenergie"
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
				cardmarket: 275040,
				tcgplayer: 90505
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
