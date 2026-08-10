import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink)
	name: {
		en: "N's Zekrom",
		fr: "Zekrom de N"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [644],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Déchiquetage",
			},
			damage: "70",
			effect: {
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Tonnerre Saccageur",
			},
			damage: "250",
			effect: {
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			},
		},
	],

	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873702,
				tcgplayer: 680480
			}
		},
		{
			type: "V2",
			thirdParty: {
				tcgplayer: 680481
			}
		},
		{
			type: "V2",
			cardmarketLabels: ["Pokemon Center", "Stamped Version"],
			thirdParty: {
				cardmarket: 873704
			}
		}
	]
}

export default card
