import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu",
		es: "Snivy",
		it: "Snivy",
		pt: "Snivy",
		'es-mx': "Snivy",
	},
	set: Set,

	dexId: [495],

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 60,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Fouet Lianes"
			},
			damage: "20"
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
				cardmarket: 886618,
				tcgplayer: 699873
			}
		}
	],
}

export default card
