import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEM-007017-Dolliv.png",

	name: {
		en: "Dolliv",
		fr: "Olivado",
	},

	category: "Pokemon",
	dexId: [929],
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		en: "Smoliv",
		fr: "Olivini",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
		},
		damage: 40,
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
