import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050370_P_GOBITTO_Pgay.jpg",

	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	category: "Pokemon",
	dexId: [622],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Psychic", "Psychic"],
		name: {
			en: "Light Punch",
			fr: "Poing Léger",
		},
		damage: 50,
		},
	],
	weaknesses: [{
		type: "Darkness",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
	}],
	retreat: 3,
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
