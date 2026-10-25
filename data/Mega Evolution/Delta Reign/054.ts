import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/M6-040076-Landorus.png",

	name: {
		en: "Landorus",
		fr: "Démétéros",
	},

	category: "Pokemon",
	dexId: [645],
	hp: 130,
	types: ["Fighting"],
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
		cost: ["Fighting", "Colorless", "Colorless"],
		name: {
			en: "Gaia Crush",
			fr: "Anéantissement de Gaïa",
		},
		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
		},
		damage: 110,
		},
	],
	weaknesses: [{
		type: "Grass",
		value: "×2",
	}],
	retreat: 2,
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
