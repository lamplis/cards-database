import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050393_P_CHIRUTTO_Pgay.jpg",

	name: {
		en: "Swablu",
		fr: "Tylton",
	},

	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Run Around",
			fr: "Course Effrénée",
		},
		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
		},
		},
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20,
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
