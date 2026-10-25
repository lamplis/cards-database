import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/100-Emcee.jpg",

	name: {
		en: "Emcee's Hype",
		fr: "Engouement de la MC",
	},

	rarity: "Ultra Rare",
	category: "Trainer",
	effect: {
		en: "Draw 2 cards. If your opponent has 3 or fewer Prize cards remaining, draw 2 more cards.",
		fr: "Piochez 2 cartes. S'il reste 3 cartes Récompense ou moins à votre adversaire, piochez 2 cartes supplémentaires.",
	},
	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
