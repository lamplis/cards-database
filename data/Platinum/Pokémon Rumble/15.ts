import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Rattata"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [1],

	dexId: [19],
	cameoDexIds: [1],

	hp: 30,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants:[
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88620,
				cardmarket: 278856
			}
		}
	]
}

export default card
