import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Création de Ramoloss"
	},
	set: Set,
	rarity: "Black Star Promo",
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
				fr: "Tête de Crétin"
			},
			effect: {
				fr: "Ce Pokémon ne peut pas être Confus."
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
				fr: "Super Psy"
			},
			damage: "50"
		},
	],
}

export default card
