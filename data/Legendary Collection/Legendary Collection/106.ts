import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Challenge!"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274871,
				tcgplayer: 84160
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84160,
				cardmarket: 274871
			}
		}
	],

	retreat: 0
}

export default card
