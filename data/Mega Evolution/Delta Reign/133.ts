import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/104-Aromatic-G-Energy.jpg",

	name: {
		en: "Aromatic Grass Energy",
		fr: "Énergie Grass Aromatique",
	},

	rarity: "Ultra Rare",
	category: "Energy",
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {G} Energy.\n\nThe {G} Pokémon this card is attached to gets +20 HP.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {G}.\n\nLe Pokémon {G} auquel cette carte est attachée a + 20 PV.",
	},
	energyType: "Special",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
