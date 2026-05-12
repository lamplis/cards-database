import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Larméléon"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pistolet à O"
			},
			damage: "40"
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Saboteri",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886623,
				tcgplayer: 699878
			}
		}
	],
}

export default card
