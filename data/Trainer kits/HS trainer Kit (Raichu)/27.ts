import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Pokémon Collector",
		fr: "Communication Pokémon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Trainer",
	set: Set,
	effect: {
		fr: "Choisissez 1 des Pokémon dans votre main, montrez-le à votre adversaire et placez-le sur le dessus de votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-la à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Supporter",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279122,
				tcgplayer: 88219,
			},
		},
	],

}

export default card
