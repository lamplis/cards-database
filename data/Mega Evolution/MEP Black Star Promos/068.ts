import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink),
	name: {
		en: "Makuhita",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [296],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
			},
			damage: "10"
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
			},
			damage: "30"
		},
	],

	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 879250,
				tcgplayer: 686275
			}
		}
	]
}

export default card
