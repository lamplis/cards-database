import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Refresh",
				de: "Blätterheilung"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon.",
				de: "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
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
