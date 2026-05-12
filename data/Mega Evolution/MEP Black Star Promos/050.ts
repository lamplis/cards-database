import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Gruikui"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Flammèche"
			},
			damage: "40",
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
	retreat: 2,
	regulationMark: "J",
	illustrator: "Saboteri",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886619,
				tcgplayer: 699874
			}
		}
	],
}

export default card
