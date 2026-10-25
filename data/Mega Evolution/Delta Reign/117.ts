import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/117-Kecleon.jpg",

	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [352],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Colorful Whip",
			fr: "Fouet Coloré",
		},
		effect: {
			en: "Reveal any number of Pokémon from your hand. This attack does 30 damage for each type of Pokémon you revealed in this way.",
			fr: "Montrez le nombre voulu de Pokémon de votre main. Cette attaque inflige 30 dégâts pour chaque type de Pokémon montré de cette façon.",
		},
		damage: "30×",
		},
	],
	weaknesses: [{
		type: "Fighting",
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
