import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/078-Growlithe.jpg",

	name: {
		en: "Growlithe",
		fr: "Caninos",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Roar",
			fr: "Hurlement",
		},
		effect: {
			en: "Switch your opponent's Active Pokémon with 1 of their Benched Pokémon. (Your opponent chooses which Benched Pokémon to switch.)",
			fr: "Échangez le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le Pokémon de Banc à échanger.)",
		},
		},
		{
		cost: ["Fire", "Colorless", "Colorless"],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 50,
		},
	],
	weaknesses: [{
		type: "Water",
		value: "×2",
	}],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
