import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Fennekin",
		fr: "Feunnec",
		de: "Fynx",
		es: "Fennekin",
		it: "Fennekin",
		pt: "Fennekin",
		'es-mx': "Fennekin",
	},
	set: Set,

	dexId: [653],

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Griffe"
			},
			damage: "30"
		},
	],
	weaknesses: [
		{
			type: "Water",
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
				cardmarket: 891890
			}
		}
	],
}

export default card
