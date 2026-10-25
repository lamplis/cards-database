import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050349_P_UINDEI_tiGp.jpg",

	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Fire", "Colorless", "Colorless"],
		name: {
			en: "Energetic Fang",
			fr: "Croc Énergique",
		},
		effect: {
			en: "If your opponent has 4 or fewer Prize cards remaining, this attack does 90 more damage.",
			fr: "S'il reste 4 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: "90+",
		},
		{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
		},
		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
		},
		damage: 200,
		},
	],
	weaknesses: [{
		type: "Water",
		value: "×2",
	}],
	retreat: 4,
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
