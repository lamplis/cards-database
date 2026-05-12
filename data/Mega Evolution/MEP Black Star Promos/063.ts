import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Coiffeton"
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
			],
			name: {
				fr: "Cru-Ailes"
			},
			damage: "30"
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
				cardmarket: 891894
			}
		}
	],
}

export default card
