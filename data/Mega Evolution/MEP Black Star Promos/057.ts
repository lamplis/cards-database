import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou",
		de: "Hydropi",
		es: "Mudkip",
		it: "Mudkip",
		pt: "Mudkip",
		'es-mx': "Mudkip",
	},
	set: Set,

	dexId: [258],

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Coud'Boue"
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
				cardmarket: 891888
			}
		}
	],
}

export default card
