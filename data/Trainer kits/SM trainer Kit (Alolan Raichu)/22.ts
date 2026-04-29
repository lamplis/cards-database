import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
				de: "Psychoknall"
			},
			effect: {
				en: "This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "10×"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				de: "Kopfnuss"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Écho",
			},
			damage: "60",
			effect: {
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Bec-Canon",
			},
			damage: "100",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire et maintenant Brûlé.",
			},
		},
	],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297256,
				tcgplayer: 152875
			}
		},
	],

}

export default card