import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050339_P_HERAKUROSU_tiGp.jpg",

	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	category: "Pokemon",
	dexId: [214],
	hp: 130,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
		},
		effect: {
			en: "Draw 2 cards from your deck.",
			fr: "Piochez 2 cartes de votre deck.",
		},
		damage: 20,
		},
		{
		cost: ["Grass", "Grass", "Colorless"],
		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
		},
		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
		},
		damage: 130,
		},
	],
	weaknesses: [{
		type: "Fire",
		value: "×2",
	}],
	retreat: 3,
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
