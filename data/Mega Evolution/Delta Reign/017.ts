import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/mem-008-g2x8w.png",

	name: {
		en: "Arboliva",
		fr: "Arboliva",
	},

	category: "Pokemon",
	dexId: [930],
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		en: "Dolliv",
		fr: "Olivado",
	},
	stage: "Stage2",
	abilities: [{
		type: "Ability",
		name: {
			en: "Oil Slip",
			fr: "Glissade Huileuse",
		},
		effect: {
			en: "Once during your turn, you may switch your opponent's Active Pokémon with 1 of their Benched Pokémon. (Your opponent chooses which Benched Pokémon to switch.)",
			fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le Pokémon de Banc à échanger.)",
		},
	}],
	attacks: [
		{
		cost: ["Grass", "Colorless"],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
		},
		damage: 100,
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
