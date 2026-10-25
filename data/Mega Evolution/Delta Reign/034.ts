import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050413_P_ROTOMU_eufs-1.jpg",

	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	category: "Pokemon",
	dexId: [479],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Lightning", "Colorless"],
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
		},
		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 50,
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
