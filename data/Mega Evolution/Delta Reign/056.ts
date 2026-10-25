import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050380_P_NIDORINA_Pgay.jpg",

	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	category: "Pokemon",
	dexId: [30],
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 60,
		},
	],
	weaknesses: [{
		type: "Fighting",
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
