import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050417_P_MIRAIDON_eufs-1.jpg",

	name: {
		en: "Miraidon",
		fr: "Miraidon",
	},

	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Lightning", "Colorless"],
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
		},
		damage: 50,
		},
		{
		cost: ["Lightning", "Lightning", "Colorless"],
		name: {
			en: "Flash Bolt",
			fr: "Éclair Flash",
		},
		effect: {
			en: "During your next turn, this Pokémon can't use Flash Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Flash.",
		},
		damage: 120,
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
