import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050355_P_MANTAIN_tiGp.jpg",

	name: {
		en: "Mantine",
		fr: "Démanta",
	},

	category: "Pokemon",
	dexId: [226],
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Raising Waves",
			fr: "Vagues Montantes",
		},
		effect: {
			en: "Each player shuffles their hand into their deck and draws 4 cards.",
			fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		},
		},
		{
		cost: ["Water", "Colorless"],
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
		},
		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
		},
		damage: 30,
		},
	],
	weaknesses: [{
		type: "Lightning",
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
