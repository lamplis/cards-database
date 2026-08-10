import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Léviator"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [26],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Magicarpe"
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Hydro-éclaboussure"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
			},
			damage: "30×"
		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Ultralaser"
			},
			effect: {
				en: "Discard all Energy attached to Raichu.",
				fr: "Défaussez une carte Énergie attachée au Pokémon Défenseur."
			},
			damage: 100
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279118,
				tcgplayer: 88521,
			},
		},
	],

}

export default card
