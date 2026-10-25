import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050383_P_ARIADOSU_Pgay.jpg",

	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	category: "Pokemon",
	dexId: [168],
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Sharp Poison",
			fr: "Poison Aigu",
		},
		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 4 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
		},
		},
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Covert Needle",
			fr: "Aiguille Secrète",
		},
		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de base.",
		},
		damage: 80,
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
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

}

export default card
