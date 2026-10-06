import { Card } from '../../../interfaces'
import Set from '../Play! Pokémon Prize Pack Series 01'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		es: "Energía Metálica",
		it: "Energia Metallo",
		pt: "Energia de Metal",
		de: "Metall-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 697227,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 835852,
			},
		},
	]
}

export default card
