import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/112-Zinnia-Trust.jpg",

	name: {
		en: "Zinnia's Trust",
		fr: "Confiance d'Amaryllis",
	},

	rarity: "Special illustration rare",
	category: "Trainer",
	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, move an Energy from your previous Active Pokémon to your new Active Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, déplacez une Énergie de votre précédent Pokémon Actif vers votre nouveau Pokémon Actif.",
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
