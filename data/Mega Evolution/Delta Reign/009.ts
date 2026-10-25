import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/009-Virizion.jpg",

	name: {
		en: "Virizion",
		fr: "Viridium",
	},

	category: "Pokemon",
	dexId: [640],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
		},
		{
		cost: ["Grass", "Grass", "Colorless"],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 110,
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
