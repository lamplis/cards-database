import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Création de Flagadoss"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894262,
				tcgplayer: 706129

			}
		}
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "À Fond"
			},
			damage: "50+",
			effect: {
				fr: "Si vous n'avez aucune carte dans votre main, cette attaque inflige 160 dégâts supplémentaires."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Psykoud'Boul"
			},
			damage: "110"
		},
	],
}

export default card
