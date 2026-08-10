import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Échange"
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	effect: {
		fr: "Échangez un de vos Pokémon Actifs avec un Pokémon de votre Banc."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279123,
				tcgplayer: 86780,
			},
		},
	],

}

export default card
