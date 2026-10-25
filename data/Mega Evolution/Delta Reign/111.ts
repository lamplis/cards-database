import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/084-Groudon.jpg",

	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [383],
	hp: 150,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Fighting", "Colorless"],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 40,
		},
		{
		cost: ["Fighting", "Fighting", "Colorless"],
		name: {
			en: "Brutal Lands",
			fr: "Terres Brutales",
		},
		effect: {
			en: "If a Stadium that has \"Legendary\" in its name is in play, this attack does 170 more damage.",
			fr: "Si un Stade qui a « Légendaire » dans son nom est en jeu, cette attaque inflige 170 dégâts supplémentaires.",
		},
		damage: "100+",
		},
	],
	weaknesses: [{
		type: "Grass",
		value: "×2",
	}],
	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
