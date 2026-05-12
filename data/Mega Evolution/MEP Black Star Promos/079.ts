import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Reptincel"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 110,
	stage: "Stage1",
	evolveFrom: {
		fr: "Salamèche"
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Crachage de Feu Régulier"
			},
			damage: "40"
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Teeziro",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 888607,
				tcgplayer: 694693
			}
		}
	],
}

export default card
