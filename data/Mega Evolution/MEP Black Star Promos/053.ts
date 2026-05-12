import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Flambino"
	},
	set: Set,
	rarity: "Black Star Promo",
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
				fr: "Double Pied"
			},
			damage: "20x",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
			}
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
				cardmarket: 886622,
				tcgplayer: 699877
			}
		}
	],
}

export default card
