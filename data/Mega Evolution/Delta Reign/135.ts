import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/107-Mega-Golisopod-ex.jpg",

	name: {
		en: "Mega Golisopod ex",
		fr: "Méga-Sarmuraï-ex",
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [768],
	hp: 340,
	types: ["Grass"],
	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
		},
		effect: {
			en: "This attack does 160 more damage if your opponent's Active Pokémon has any damage counters on it.",
			fr: "Cette attaque inflige 160 dégâts supplémentaires si au moins un marqueur de dégâts est placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: "60+",
		},
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Quatro Hold",
			fr: "Prise Quadruple",
		},
		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
		},
		damage: 160,
		},
	],
	weaknesses: [{
		type: "Fire",
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
