import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/055-Nidoran.jpg",

	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Find a Friend",
			fr: "Ami Cherché",
		},
		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Darkness"],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10,
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
