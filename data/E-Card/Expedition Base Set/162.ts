import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		de: "Pflanzenenergie"
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
				cardmarket: 275037,
				tcgplayer: 85873
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
