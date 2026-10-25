import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050388_P_JIXYARAKO_Pgay.jpg",

	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	category: "Pokemon",
	dexId: [782],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Lightning", "Fighting"],
		name: {
			en: "Hard Head",
			fr: "Tête Dure",
		},
		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30,
		},
	],
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
