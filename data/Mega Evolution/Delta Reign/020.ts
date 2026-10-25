import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050350_P_BUBA_tiGp.jpg",

	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 90,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Gather Strength",
			fr: "Pouvoir Collecté",
		},
		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Fire", "Colorless"],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 30,
		},
	],
	weaknesses: [{
		type: "Water",
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
