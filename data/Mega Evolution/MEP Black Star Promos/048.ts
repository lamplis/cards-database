import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Kaiminus"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Morsure"
			},
			damage: "50"
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
				cardmarket: 886617,
				tcgplayer: 699872
			}
		}
	],
}

export default card
