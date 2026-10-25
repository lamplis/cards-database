import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/04/05463_4.png",

	name: {
		en: "Grisham",
		fr: "Grisham",
	},

	category: "Trainer",
	effect: {
		en: "Heal 50 damage from each Pokémon in play (both yours and your opponent's).",
		fr: "Soignez 50 dégâts de chacun des Pokémon en jeu (les vôtres et ceux de votre adversaire).",
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
