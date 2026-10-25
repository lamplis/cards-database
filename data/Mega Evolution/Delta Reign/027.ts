import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050357_P_PURURIRU_tiGp.jpg",

	name: {
		en: "Frillish",
		fr: "Viskuse",
	},

	category: "Pokemon",
	dexId: [592],
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 10,
		},
	],
	weaknesses: [{
		type: "Lightning",
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
