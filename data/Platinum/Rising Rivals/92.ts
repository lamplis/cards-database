import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lucian's Assignment",
		fr: "La mission de Lucio",
		de: "Lucians Auftrag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Déplacez autant de cartes Énergie attachées à 1 de vos Pokémon que vous le voulez sur un autre de vos Pokémon.",
		de: "Entferne eine beliebige Anzahl Energiekarten von 1 deiner Pokémon und lege sie an 1 anderes deiner Pokémon an.",
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278666,
				tcgplayer: 86891
			}
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278666,
				tcgplayer: 86891
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 449863,
				tcgplayer: 123189
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868767,
				tcgplayer: 480073
			}
		}
	],

}

export default card
