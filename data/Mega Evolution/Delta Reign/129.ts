import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/098-Pokemon-Catcher.jpg",

	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},

	rarity: "Ultra Rare",
	category: "Trainer",
	effect: {
		en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
	},
	trainerType: "Item",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
