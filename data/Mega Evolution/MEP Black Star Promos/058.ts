import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Marisson"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Dard-Nuée"
			},
			damage: "10x",
			effect: {
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face."
			}
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Saboteri",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891889
			}
		}
	],
}

export default card
