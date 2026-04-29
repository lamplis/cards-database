import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		de: "Pliprin"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [394],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
		de: "Plinfa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	variants:[
		{
			type:"normal",
			thirdParty: {
				cardmarket: 278480,
				tcgplayer: 88371
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278480,
				tcgplayer: 88371
			}
		}
	],

}

export default card
