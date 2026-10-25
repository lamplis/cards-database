import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050418_P_KENTAROSU_eufs.jpg",

	name: {
		en: "Tauros",
		fr: "Tauros",
	},

	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Raging Horns",
			fr: "Cornes Furieuses",
		},
		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: "50+",
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
