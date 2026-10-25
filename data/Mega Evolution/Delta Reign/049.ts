import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050373_P_SANDO_Pgay.jpg",

	name: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	category: "Pokemon",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Fighting"],
		name: {
			en: "Ascension",
			fr: "Ascension",
		},
		effect: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte qui évolue de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		},
		},
	],
	weaknesses: [{
		type: "Grass",
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
