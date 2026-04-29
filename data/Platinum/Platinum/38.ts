import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Energy Blow",
				fr: "Coup d'énergie",
				de: "Energieschlag"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Shaymin.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Shaymin.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Shaymin angelegte Energie zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aromatherapy",
				fr: "Aromathérapi",
				de: "Aromakur"
			},
			effect: {
				en: "Remove 2 damage counters from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von jedem deiner Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89106
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 125077
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89106
			}
		}
	],

}

export default card
