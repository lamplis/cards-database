import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Jolteon-Deck.png",

	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	category: "Pokemon",
	dexId: [135],
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Lightning"],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30,
		},
		{
		cost: ["Lightning", "Lightning", "Lightning"],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
		},
		damage: 220,
		},
	],
	weaknesses: [{
		type: "Fighting",
		value: "×2",
	}],
	retreat: 0,
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
