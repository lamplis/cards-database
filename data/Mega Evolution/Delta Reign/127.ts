import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/099-Custom-Vest.jpg",

	name: {
		en: "Customized Vest",
		fr: "Veste Personnalisée",
	},

	rarity: "Ultra Rare",
	category: "Trainer",
	effect: {
		en: "The Pokémon this card is attached to (excluding any Mega Evolution Pokémon ex) takes 60 less damage from attacks from your opponent's Mega Evolution Pokémon ex.",
		fr: "Le Pokémon auquel cette carte est attachée (à l'exception des Pokémon Méga-Évolution-ex) subit 60 dégâts de moins provenant des attaques des Pokémon Méga-Évolution-ex de votre adversaire.",
	},
	trainerType: "Tool",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
