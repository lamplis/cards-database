import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-008-c3t2t.png",

	name: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			en: "Punk Out",
			fr: "Poudre d'Escampette",
		},
		effect: {
			en: "If your opponent has any Pokémon ex in play, this Pokémon's Retreat Cost is 0.",
			fr: "Si votre adversaire a au moins un Pokémon-ex en jeu, le Coût de Retraite de ce Pokémon est de 0.",
		},
	}],
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10,
		},
	],
	weaknesses: [{
		type: "Fire",
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
