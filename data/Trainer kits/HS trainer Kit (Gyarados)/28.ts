import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Échangez un de vos Pokémon Actifs avec un Pokémon de votre Banc."
	},

	trainerType: "Item",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279123,
				tcgplayer: 89719,
			},
		},
	],

}

export default card
