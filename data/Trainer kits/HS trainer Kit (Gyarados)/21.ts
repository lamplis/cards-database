import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie"
	},

	illustrator: "Wataru Kawahara",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279101,
				tcgplayer: 85260,
			},
		},
	],

}

export default card
