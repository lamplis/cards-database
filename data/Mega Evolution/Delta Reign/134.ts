import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/105-Nitro-R-Energy.jpg",

	name: {
		en: "Nitro Fire Energy",
		fr: "Énergie Fire Nitro",
	},

	rarity: "Ultra Rare",
	category: "Energy",
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {R} Energy.\n\nIf this card is discarded by an effect of an attack used by the {R} Pokémon this card is attached to, put this card into your hand after that attack's damage and effects.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {R}.\n\nSi cette carte est défaussée par un effet d'une attaque utilisée par le Pokémon {R} auquel cette carte est attachée, placez cette carte dans votre main après les dégâts et les effets de cette attaque.",
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
