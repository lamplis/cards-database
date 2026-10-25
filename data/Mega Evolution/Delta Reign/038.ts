import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEE-004019-Pawmo.png",

	name: {
		en: "Pawmo",
		fr: "Pohmotte",
	},

	category: "Pokemon",
	dexId: [922],
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		en: "Pawmi",
		fr: "Pohm",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Lightning"],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 40,
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
