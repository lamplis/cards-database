import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Low Pressure System",
		fr: "Système à basse pression",
		de: "Tiefdrucksystem"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Each Grass and Lightning Pokémon in play (both yours and your opponent’s) gets +10 HP.",
		fr: "Chaque Pokémon Plante et Électrique en jeu (les vôtres et ceux de votre adversaire) obtient 10 PV de plus.",
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86847,
				cardmarket: 277459
			},
		},
	],

}

export default card
