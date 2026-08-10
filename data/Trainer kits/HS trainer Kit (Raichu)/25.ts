import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Méthode d'entraînement du Prof. Orme"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279121,
				tcgplayer: 88191,
			},
		},
	],

}

export default card
