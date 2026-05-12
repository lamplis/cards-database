import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Bend",
				de: "Gedankenverbiegung"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83598,
				cardmarket: 278861
			}
		}
	]
}

export default card
