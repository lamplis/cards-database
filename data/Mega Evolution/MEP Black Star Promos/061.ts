import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Poussacha"
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
				"Colorless",
			],
			name: {
				fr: "Feuillage"
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
				cardmarket: 891892
			}
		}
	],
}

export default card
