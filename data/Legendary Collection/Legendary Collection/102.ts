import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Pokémon Breeder"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274867
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274867,
				tcgplayer: 88207
			}
		}
	],

	retreat: 0
}

export default card
