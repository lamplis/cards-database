import { Card } from '../../../interfaces'
import Set from '../Play! Pokémon Prize Pack Series 01'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Grama",
		de: "Pflanze-Energie"
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
				cardmarket: 697220,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 835853,
			},
		},
	]
}

export default card
