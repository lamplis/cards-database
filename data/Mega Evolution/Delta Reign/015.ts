import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEM-006017-Smoliv.png",

	name: {
		en: "Smoliv",
		fr: "Olivini",
	},

	category: "Pokemon",
	dexId: [928],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
		},
		damage: 20,
		},
	],
	weaknesses: [{
		type: "Fire",
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
