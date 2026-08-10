import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},
			damage: 20
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force"
			},
			damage: 40
		},
	],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297253,
				tcgplayer: 152839
			}
		},
	],

}

export default card