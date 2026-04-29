import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [255],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Focus Energy",
				fr: "Puissance",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, Torchic's Fire Shard attack's base damage is 80.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Écharde de feu de Poussifeu sont de 80.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Flemmlis Angriff Feuerscherben 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Shard",
				fr: "Écharde de feu",
				de: "Feuerscherben"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	variants:[
		{
			type:"normal",
			thirdParty: {
				cardmarket: 278520,
				tcgplayer: 89961
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278520,
				tcgplayer: 89961
			}
		}
	],

}

export default card
