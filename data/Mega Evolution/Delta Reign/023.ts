import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/ME06_EN_23_webp.jpg",

	name: {
		en: "Heat Rotom ex",
		fr: "Motisma Chaleur-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [479],
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Reheat",
			fr: "Réchauffe",
		},
		effect: {
			en: "This attack does 30 damage for each Basic {R} Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie {R} de base dans votre pile de défausse. Mélangez ensuite ces cartes Énergie avec votre deck.",
		},
		damage: "30×",
		},
		{
		cost: ["Fire", "Fire", "Colorless"],
		name: {
			en: "Strong Flare",
			fr: "Flamboiement Intense",
		},
		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 170,
		},
	],
	weaknesses: [{
		type: "Water",
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
