import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050389_P_JIXYARANGO_Pgay.jpg",

	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	category: "Pokemon",
	dexId: [783],
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Lightning", "Fighting"],
		name: {
			en: "Double Smash",
			fr: "Double Broiement",
		},
		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
		},
		damage: "70×",
		},
	],
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
