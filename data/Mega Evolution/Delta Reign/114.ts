import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/114-Eevee.jpg",

	name: {
		en: "Eevee",
		fr: "Evoli",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Nap",
			fr: "Tit'Sieste",
		},
		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
		},
		},
		{
		cost: ["Colorless"],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 10,
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
			type: "holo"
		},
	],

}

export default card
