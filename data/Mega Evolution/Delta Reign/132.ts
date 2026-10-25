import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/106-Bubbly-W-Energy.jpg",

	name: {
		en: "Bubbly Water Energy",
		fr: "Énergie Water Pétillante",
	},

	rarity: "Ultra Rare",
	category: "Energy",
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {W} Energy.\n\nThe {W} Pokémon this card is attached to recovers from all Special Conditions, and it can't be affected by any Special Conditions.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {W}.\n\nLe Pokémon {W} auquel cette carte est attachée guérit de tous les États Spéciaux, et il ne peut être affecté par aucun État Spécial.",
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
