import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Pokémon Communication",
		fr: "Communication Pokémon"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Choisissez 1 des Pokémon dans votre main, montrez-le à votre adversaire et placez-le sur le dessus de votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-la à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279100,
				tcgplayer: 88221,
			},
		},
	],

}

export default card
