import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/mem-018-2bbja.png",

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [906],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: "10+",
		},
	],
	weaknesses: [{
		type: "Fire",
		value: "×2",
	}],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
