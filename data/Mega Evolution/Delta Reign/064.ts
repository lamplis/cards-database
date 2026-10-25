import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEZ-004019-Purrloin.png",

	name: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	category: "Pokemon",
	dexId: [509],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Dig Claws",
			fr: "Creuse-Griffes",
		},
		damage: 20,
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
