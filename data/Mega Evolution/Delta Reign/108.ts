import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/081-Electivire.jpg",

	name: {
		en: "Electivire",
		fr: "Élekable",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [466],
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30,
		},
		{
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
		name: {
			en: "Voltage Hammer",
			fr: "Marteau Voltage",
		},
		effect: {
			en: "Discard any number of Basic Energy from this Pokémon. This attack does 60 damage for each Energy discarded in this way.",
			fr: "Défaussez le nombre voulu de cartes Énergie de base de ce Pokémon. Cette attaque inflige 60 dégâts pour chaque Énergie défaussée de cette façon.",
		},
		damage: "60×",
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
			type: "holo"
		},
	],

}

export default card
