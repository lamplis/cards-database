import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "High Pressure System",
		fr: "Système à haute pression",
		de: "Hochdrucksystem"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Each player pays Colorless less to retreat his or her Fire and Water Pokémon.",
		fr: "Chaque joueur ne paye pas de Incolore pour faire battre en retraite ses Pokémon Feu et Eau.",
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86077,
				cardmarket: 277458
			},
		},
	],

}

export default card
