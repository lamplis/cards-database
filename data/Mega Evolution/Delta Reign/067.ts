import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/mez-007-h4js4.png",

	name: {
		en: "Zoroark ex",
		fr: "Zoroark-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [571],
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Riotous Beating",
			fr: "Méchante Raclée",
		},
		effect: {
			en: "This attack does 20 damage for each Pokémon you have in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
		},
		damage: "20×",
		},
		{
		cost: ["Darkness", "Colorless", "Colorless"],
		name: {
			en: "Slash Down",
			fr: "Tranche Descendant",
		},
		effect: {
			en: "During your next turn, this Pokémon can't use Slash Down.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tranche Descendant.",
		},
		damage: 210,
		},
	],
	weaknesses: [{
		type: "Grass",
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
