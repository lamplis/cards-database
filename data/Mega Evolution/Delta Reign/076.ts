import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050391_P_MOTOTOKAGE_Pgay.jpg",

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
	},

	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30,
		},
		{
		cost: ["Grass", "Darkness", "Colorless"],
		name: {
			en: "Breakthrough",
			fr: "Percée",
		},
		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 110,
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
