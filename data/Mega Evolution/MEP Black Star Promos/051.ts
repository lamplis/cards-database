import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Moustillon"
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
				fr: "Coqui-Lame"
			},
			damage: "10+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
			}
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
				cardmarket: 886620,
				tcgplayer: 699875
			}
		}
	],
}

export default card
