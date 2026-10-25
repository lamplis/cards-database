import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-005-gjt59.png",

	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	category: "Pokemon",
	dexId: [332],
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Linear Attack",
			fr: "Attaque Linéaire",
		},
		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		},
		{
		cost: ["Grass"],
		name: {
			en: "Punishing Needle",
			fr: "Aiguille Punitive",
		},
		effect: {
			en: "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
		},
		damage: "10+",
		},
	],
	weaknesses: [{
		type: "Fire",
		value: "×2",
	}],
	retreat: 2,
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
