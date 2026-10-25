import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/Sharpedo-Deck.jpg",

	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	category: "Pokemon",
	dexId: [319],
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 60,
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
