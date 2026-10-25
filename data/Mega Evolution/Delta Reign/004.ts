import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-004-achcu.png",

	name: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	category: "Pokemon",
	dexId: [331],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: "10+",
		},
	],
	weaknesses: [{
		type: "Fire",
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
