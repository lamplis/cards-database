import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEE-003019-Pawmi.png",

	name: {
		en: "Pawmi",
		fr: "Pohm",
	},

	category: "Pokemon",
	dexId: [921],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Lightning"],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: "10+",
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
