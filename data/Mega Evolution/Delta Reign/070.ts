import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Morpeko-Deck.png",

	name: {
		en: "Morpeko",
		fr: "Morpeko",
	},

	category: "Pokemon",
	dexId: [877],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		effect: {
			en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Darkness"],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 30,
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
