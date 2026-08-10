import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Poké Ball"
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279110,
				tcgplayer: 86779,
			},
		},
	],

}

export default card
