import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/M6-047076-Inkay.png",

	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Knock Off",
			fr: "Sabotage",
		},
		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 10,
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
