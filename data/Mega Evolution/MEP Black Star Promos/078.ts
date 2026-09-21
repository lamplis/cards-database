import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Toxel",
		fr: "Toxizap",
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
				fr: "Appel à la Famille"
			},
			effect: {
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
			}
		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Coup de Pied de Garnement"
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
