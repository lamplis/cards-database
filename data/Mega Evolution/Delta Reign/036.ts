import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/Pincurchin-Delta-Reign.jpg",

	name: {
		en: "Pincurchin",
		fr: "Wattapik",
	},

	category: "Pokemon",
	dexId: [871],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
		},
		effect: {
			en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
		},
		damage: "20×",
		},
	],
	weaknesses: [{
		type: "Fighting",
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
