import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050374_P_SANDOPAN_Pgay.jpg",

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},

	category: "Pokemon",
	dexId: [28],
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},
	stage: "Stage1",
	abilities: [{
		type: "Ability",
		name: {
			en: "Counterattack Quills",
			fr: "Contre-Piquants",
		},
		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],
	attacks: [
		{
		cost: ["Fighting"],
		name: {
			en: "Digging Claw",
			fr: "Griffe Excavatrice",
		},
		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 60,
		},
	],
	weaknesses: [{
		type: "Grass",
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
