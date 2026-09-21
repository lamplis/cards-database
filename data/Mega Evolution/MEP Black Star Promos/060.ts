import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
		de: "Froxy",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		'es-mx': "Froakie",
	},
	set: Set,

	dexId: [656],

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Écras'Face"
			},
			damage: "20"
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
				cardmarket: 891891
			}
		}
	],
}

export default card
