import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
		de: "Darkrai & Cresselia LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [488, 491],
	hp: 150,

	types: [
		"Darkness",
		"Psychic"
	],

	suffix: "Legend",

	attacks: [
		{
			name: {
				fr: "Crise perdue",
				de: "Nirgendwo-Krise",
			},
			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Darkrai & Cresselia LÉGENDE.",
				de: "Wähle 2 an Darkrai- & Cresselia-LEGENDE angelegte Energiekarten und lege sie ins Nirgendwo. Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle daran angelegten Karten nicht auf den Ablagestapel, sondern ins Nirgendwo.",
			},
			damage: 100,
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
		},
		{
			name: {
				de: "Mondeinladung",
				fr: "Invitation lunaire",
			},
			effect: {
				de: "Verschiebe beliebig viele Schadensmarken von Pokémon deines Gegners in beliebiger Verteilung auf andere gegnerische Pokémon.",
				fr: "Retirez autant de marqueurs de dégât que vous le voulez aux Pokémon de votre adversaire et attribuez-les comme bon vous semble aux autres Pokémon de votre adversaire.",
			},
			cost: [
				"Psychic",
			],
		},
	],

	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84705,
				cardmarket: 279629
			}
		},
		{
			type: "holo",
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 211448
			}
		},
	],

}

export default card
