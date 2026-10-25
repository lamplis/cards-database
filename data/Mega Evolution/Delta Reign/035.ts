import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/35-Thundurus.jpg",

	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},

	category: "Pokemon",
	dexId: [642],
	hp: 120,
	types: ["Lightning"],
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
		cost: ["Lightning", "Colorless", "Colorless"],
		name: {
			en: "Thunder Edge",
			fr: "Tranchant Tonnerre",
		},
		effect: {
			en: "Ignore all effects on your opponent's Active Pokémon for this attack's damage.",
			fr: "Ignorez tous les effets sur le Pokémon Actif de votre adversaire pour les dégâts de cette attaque.",
		},
		damage: 90,
		},
	],
	weaknesses: [{
		type: "Fighting",
		value: "×2",
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
