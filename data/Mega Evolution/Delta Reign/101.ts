import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-063-urnu7.png",

	name: {
		en: "Delicious Rice Ball",
		fr: "Onigiri Délicieux",
	},

	category: "Trainer",
	effect: {
		en: "Heal 30 damage from your Active Pokémon. Heal 30 more damage for each Delicious Rice Ball card in your discard pile (not including this card).",
		fr: "Soignez 30 dégâts de votre Pokémon Actif. Soignez 30 dégâts supplémentaires pour chaque carte Onigiri Délicieux dans votre pile de défausse (cette carte-ci exclue).",
	},
	trainerType: "Item",
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
