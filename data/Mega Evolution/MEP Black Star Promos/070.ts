import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink),
	name: {
		en: "Tyrunt",
		fr: "Ptyranidur"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [696],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Coléreux"
			},
			damage: "20×",
			effect: {
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon."
			}
		},
	],

	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 879262,
				tcgplayer: 685562
			}
		},
		{
			type: "V2",
			thirdParty: {
				tcgplayer: 685563
			}
		},
		{
			type: "V2",
			cardmarketLabels: ["Pokemon Center", "Stamped Version"],
			thirdParty: {
				cardmarket: 879272
			}
		}
	]
}

export default card
