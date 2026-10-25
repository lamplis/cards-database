import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/MEZ-005019-Liepard.png",

	name: {
		en: "Liepard",
		fr: "Léopardus",
	},

	category: "Pokemon",
	dexId: [510],
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Pursuit Claw",
			fr: "Griffe Poursuite",
		},
		effect: {
			en: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: "20×",
		},
		{
		cost: ["Darkness", "Colorless", "Colorless"],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 90,
		},
	],
	weaknesses: [{
		type: "Grass",
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
