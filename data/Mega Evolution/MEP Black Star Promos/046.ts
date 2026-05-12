import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Germignon"
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
				"Colorless",
			],
			name: {
				fr: "Tranch'Herbe"
			},
			damage: "30"
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
				cardmarket: 886615,
				tcgplayer: 699870
			}
		}
	],
}

export default card
