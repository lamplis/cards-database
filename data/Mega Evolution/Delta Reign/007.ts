import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050345_P_BIKUIN_tiGp.jpg",

	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	category: "Pokemon",
	dexId: [416],
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 40,
		},
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Clean Hit",
			fr: "Coup Net",
		},
		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: "80+",
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
