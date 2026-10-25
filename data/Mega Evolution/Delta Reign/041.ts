import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050366_P_TAIKAIDEN_Pgay.jpg",

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
	},

	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Wattrel",
		fr: "Zapétrel",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Lightning"],
		name: {
			en: "Raid",
			fr: "Razzia Obscure",
		},
		effect: {
			en: "If this Pokémon evolved from Wattrel this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Zapétrel pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: "30+",
		},
		{
		cost: ["Lightning", "Colorless"],
		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
		},
		damage: 70,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
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
