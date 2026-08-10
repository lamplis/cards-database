import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Échange d'Énergie"
	},

	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon."
	},

	trainerType: "Supporter",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279101,
				tcgplayer: 84427,
			},
		},
	],

}

export default card
