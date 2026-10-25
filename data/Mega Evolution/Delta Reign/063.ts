import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Darkrai-Deck.png",

	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	category: "Pokemon",
	dexId: [491],
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Shadow Cloak",
			fr: "Cape d'Ombre",
		},
		effect: {
			en: "Search your deck for up to 2 Basic {D} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {D} de base et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Darkness", "Darkness", "Colorless"],
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
		},
		damage: 110,
		},
	],
	weaknesses: [{
		type: "Grass",
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
