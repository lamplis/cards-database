import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050367_P_SURIPU_Pgay.jpg",

	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	category: "Pokemon",
	dexId: [96],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Psychic"],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 10,
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
