import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Zarude-Deck.png",

	name: {
		en: "Zarude",
		fr: "Zarude",
	},

	category: "Pokemon",
	dexId: [893],
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 20,
		},
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Special Whip",
			fr: "Fouet Spécial",
		},
		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 150 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: "50+",
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
