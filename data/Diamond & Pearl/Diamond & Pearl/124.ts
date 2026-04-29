import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
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
				cardmarket: 277623,
				tcgplayer: 85463
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
