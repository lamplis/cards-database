import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/ME06_EN_103_webp.jpg",

	name: {
		en: "Zinnia's Trust",
		fr: "Confiance d'Amaryllis",
	},

	category: "Trainer",
	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, move an Energy from your previous Active Pokémon to your new Active Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, déplacez une Énergie de votre précédent Pokémon Actif vers votre nouveau Pokémon Actif.",
	},
	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

}

export default card
