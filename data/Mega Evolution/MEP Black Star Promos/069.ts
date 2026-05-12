import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink)
	name: {
		en: "Chikorita",
		fr: "Germignon"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [152],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Tranch'Herbe",
			},
			damage: "20",
		},
	],

	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886615
			}
		},
		{
			type: "V1",
			cardmarketLabels: ["Cosmos Holo"],
			thirdParty: {
				cardmarket: 879255,
				tcgplayer: 686342
			}
		}
	]
}

export default card
