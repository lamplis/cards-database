import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/mee-005-b5ju8.png",

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
	},

	category: "Pokemon",
	dexId: [923],
	hp: 150,
	types: ["Lightning"],
	evolveFrom: {
		en: "Pawmo",
		fr: "Pohmotte",
	},
	stage: "Stage2",
	abilities: [{
		type: "Ability",
		name: {
			en: "Power Plant Touch",
			fr: "Toucher de Centrale",
		},
		effect: {
			en: "Once during your turn, you may attach a Basic {L} Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon.",
		},
	}],
	attacks: [
		{
		cost: ["Lightning", "Colorless"],
		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
		},
		damage: 100,
		},
	],
	weaknesses: [{
		type: "Fighting",
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
