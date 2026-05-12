import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Ouistempo"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				fr: "Tapotige"
			},
			damage: "40"
		},
	],
	weaknesses: [
		{
			type: "Fire",
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
				cardmarket: 886621,
				tcgplayer: 699876
			}
		}
	],
}

export default card
