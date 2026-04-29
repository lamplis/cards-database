import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		de: "Kampfenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277414,
				tcgplayer: 85441
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
