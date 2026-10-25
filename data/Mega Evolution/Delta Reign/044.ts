import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/ME06_EN_44.jpg",

	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	category: "Pokemon",
	dexId: [97],
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Psychic"],
		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental",
		},
		effect: {
			en: "This attack does 20 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
		},
		damage: "20×",
		},
		{
		cost: ["Psychic", "Colorless"],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 50,
		},
	],
	weaknesses: [{
		type: "Darkness",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
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
