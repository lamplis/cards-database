import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
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
				cardmarket: 277410,
				tcgplayer: 85462
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
