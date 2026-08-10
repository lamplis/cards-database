import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du Prof. Orme"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Supporter",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279121,
				tcgplayer: 88393,
			},
		},
	],

}

export default card
