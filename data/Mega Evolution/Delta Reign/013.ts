import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/me06-en-013-819x1114-1790066106716_006_vVDK.webp",

	name: {
		en: "Floragato",
		fr: "Matourgeon",
	},

	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		en: "Sprigatito",
		fr: "Poussacha",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Grass", "Grass"],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 60,
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
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

}

export default card
