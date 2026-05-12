import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Feunnec"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Appel à la Famille"
			},
			effect: {
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
			}
		},
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Crachage de Feu Régulier"
			},
			damage: "10"
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
	illustrator: "satoma",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888506,
				tcgplayer: 694694
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 889722,
				tcgplayer: 694695
			}
		}
	],
}

export default card
