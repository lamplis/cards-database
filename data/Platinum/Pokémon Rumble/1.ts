import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Venusaur"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [147],

	dexId: [3],
	cameoDexIds: [147],

	hp: 140,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Ivysaur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain"
			},
			effect: {
				en: "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 4,


	variants:[
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90320,
				cardmarket: 278842
			}
		}
	]
}

export default card
