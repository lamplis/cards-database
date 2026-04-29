import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste télé",
		de: "TV Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Draw 3 cards. Then discard any 1 card from your hand.",
		fr: "Piochez 3 cartes. Ensuite, défaussez une carte de votre main.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90084,
				cardmarket: 277442
			},
		},
	],

}

export default card
