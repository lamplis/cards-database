import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "React Energy",
		fr: "Énergie réaction",
		de: "Reaktions-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "React Energy provides Colorless Energy.",
		de: "Reaktions-Energie liefert {C}-Energie.",
		fr: "Énergie réaction fournit une Énergie Incolore.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276959,
				tcgplayer: 88649
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
