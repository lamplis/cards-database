import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050340_P_AMETAMA_tiGp.jpg",

	name: {
		en: "Surskit",
		fr: "Arakdo",
	},

	category: "Pokemon",
	dexId: [283],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Multiply",
			fr: "Multiplication",
		},
		effect: {
			en: "Search your deck for up to 2 Surskit and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Arakdo, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Grass"],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 10,
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
