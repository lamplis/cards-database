import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [235],

	hp: 80,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Live Painting",
				fr: "Toile Vivante"
			},
			effect: {
				en: "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
				fr: "Montrez autant de cartes Énergie de base que vous le voulez de votre main. Cette attaque inflige 30 dégâts supplémentaires pour chaque type d'Énergie de base montrée de cette façon."
			},
			damage: "30+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670480,
				tcgplayer: 281500
			}
		}
	]
}

export default card

