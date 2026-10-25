import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050394_P_CHIRUTARISU_Pgay.jpg",

	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	category: "Pokemon",
	dexId: [334],
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},
	stage: "Stage1",
	abilities: [{
		type: "Ability",
		name: {
			en: "Cotton Carrier",
			fr: "Porteur de Coton",
		},
		effect: {
			en: "Your Basic Pokémon in play have no Retreat Cost.",
			fr: "Vos Pokémon de base en jeu n'ont pas de Coût de Retraite.",
		},
	}],
	attacks: [
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Wing Flap",
			fr: "Battement d'Ailes",
		},
		damage: 80,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
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
