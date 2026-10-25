import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEZ-006019-Zorua.png",

	name: {
		en: "Zorua",
		fr: "Zorua",
	},

	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 10,
		},
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Scratch",
			fr: "Griffe",
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
