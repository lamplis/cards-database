import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050376_P_HAGANERU_Pgay.jpg",

	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 190,
	types: ["Fighting"],
	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",
	abilities: [{
		type: "Ability",
		name: {
			en: "High Density Armor",
			fr: "Armure Résistante",
		},
		effect: {
			en: "If this Pokémon has full HP, it takes 60 less damage from attacks from your opponent's Pokémon.",
			fr: "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques des Pokémon de votre adversaire.",
		},
	}],
	attacks: [
		{
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
		name: {
			en: "Hard Swing",
			fr: "Gnon Vigoureux",
		},
		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 150,
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
