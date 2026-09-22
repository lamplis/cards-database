import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Slowpoke",
	},
	set: Set,

	dexId: [79],

	rarity: "Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898176,
				tcgplayer: 706130
			}
		}
	],
	abilities: [
		{
			type: "Ability",
			name: {
			},
			effect: {
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
			},
			damage: "50"
		},
	],
}

export default card
