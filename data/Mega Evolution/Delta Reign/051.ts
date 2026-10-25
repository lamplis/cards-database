import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050375_P_IWAKU_Pgay.jpg",

	name: {
		en: "Onix",
		fr: "Onix",
	},

	category: "Pokemon",
	dexId: [95],
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80,
		},
	],
	weaknesses: [{
		type: "Grass",
		value: "×2",
	}],
	retreat: 4,
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
