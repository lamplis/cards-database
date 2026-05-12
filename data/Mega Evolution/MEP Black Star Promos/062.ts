import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Chochodile"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 90,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Lance-Flammes"
			},
			damage: "70",
			effect: {
				fr: "Défaussez une Énergie de ce Pokémon."
			}
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Saboteri",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891893
			}
		}
	],
}

export default card
