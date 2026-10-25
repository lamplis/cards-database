import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050352_P_KOTASU_tiGp.jpg",

	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	category: "Pokemon",
	dexId: [324],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Fire", "Colorless"],
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
		},
		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 30,
		},
		{
		cost: ["Fire", "Fire", "Colorless"],
		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
		},
		effect: {
			en: "During your next turn, this Pokémon can't use Combustion Blast.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Explo-Combustion.",
		},
		damage: 120,
		},
	],
	weaknesses: [{
		type: "Water",
		value: "×2",
	}],
	retreat: 3,
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
