import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		de: "Felori",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		'es-mx': "Sprigatito",
	},
	set: Set,

	dexId: [906],

	rarity: "Promo",
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
