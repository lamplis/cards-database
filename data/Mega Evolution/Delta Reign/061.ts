import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Carvanha-Deck.jpg",

	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	category: "Pokemon",
	dexId: [318],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: "20+",
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
