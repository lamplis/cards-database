import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Opermine"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Double Pioche"
			},
			effect: {
				fr: "Piochez deux cartes."
			}
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Griffe"
			},
			damage: "30"
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Shimaris Yukichi",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898177,
				tcgplayer: 706131
			}
		}
	],
}

export default card
