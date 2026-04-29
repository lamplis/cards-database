import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Pokémon Trader"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274868
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274868,
				tcgplayer: 88242
			}
		}
	],

	retreat: 0
}

export default card
