import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050381_P_NIDOKUIN_Pgay.jpg",

	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},

	category: "Pokemon",
	dexId: [31],
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	stage: "Stage2",
	abilities: [{
		type: "Ability",
		name: {
			en: "Motherly Summon",
			fr: "Appel Maternel",
		},
		effect: {
			en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
		},
	}],
	attacks: [
		{
		cost: ["Darkness", "Colorless", "Colorless"],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		effect: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 150,
		},
	],
	weaknesses: [{
		type: "Fighting",
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
