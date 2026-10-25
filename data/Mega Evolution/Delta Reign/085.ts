import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/M6-059076-Tornadus.png",

	name: {
		en: "Tornadus",
		fr: "Boréas",
	},

	category: "Pokemon",
	dexId: [641],
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			en: "Incarnate Union",
			fr: "Union des Incarnations",
		},
		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all {C} Energy in the cost of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
		},
	}],
	attacks: [
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Corkscrew Dive",
			fr: "Plongée Tire-Bouchon",
		},
		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à avoir 6 cartes en main.",
		},
		damage: 70,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
	}],
	retreat: 1,
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
