import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fastwave",
				de: "Rasende Schallwelle"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861
			}
		}
	]
}

export default card
