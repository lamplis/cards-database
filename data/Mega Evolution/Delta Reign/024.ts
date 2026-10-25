import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050354_P_KUITARAN_tiGp.jpg",

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
	},

	category: "Pokemon",
	dexId: [631],
	hp: 110,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Fire"],
		name: {
			en: "Destructive Flame",
			fr: "Flamme Destructrice",
		},
		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 30,
		},
	],
	weaknesses: [{
		type: "Water",
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
