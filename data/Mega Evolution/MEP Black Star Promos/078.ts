import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Toxel",
		de: "Toxel",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		'es-mx': "Toxel",
	},
	set: Set,

	dexId: [848],

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
			},
			effect: {
			}
		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
			},
			damage: "20"
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Mina Nakai",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 888609,
				tcgplayer: 694692
			}
		}
	],
}

export default card
