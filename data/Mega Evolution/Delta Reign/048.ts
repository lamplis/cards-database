import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/M6-034076-Enamorus.png",

	name: {
		en: "Enamorus",
		fr: "Amovénus",
	},

	category: "Pokemon",
	dexId: [905],
	hp: 120,
	types: ["Psychic"],
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
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
		name: {
			en: "Rising Heart",
			fr: "Cœur Montant",
		},
		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: "100+",
		},
	],
	weaknesses: [{
		type: "Metal",
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
