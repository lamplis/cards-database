import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		de: "Elektroenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277625,
				tcgplayer: 86767
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
