import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050360_P_EREBU_Pgay.jpg",

	name: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	category: "Pokemon",
	dexId: [125],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Lightning", "Lightning", "Colorless"],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
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
