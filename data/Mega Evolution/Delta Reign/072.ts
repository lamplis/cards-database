import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050387_P_KURIMUGAN_Pgay.jpg",

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	category: "Pokemon",
	dexId: [621],
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Fire", "Water"],
		name: {
			en: "Drag Off",
			fr: "Traîne",
		},
		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
		},
		damage: 40,
		},
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
		},
		damage: 80,
		},
	],
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
