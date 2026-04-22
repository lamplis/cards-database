import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Hideout",
		de: "Rocket's Hideout*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		de: "Each Pokémon with Dark of Rocket's in its name (both yours an your opponent's) gets +20 HP."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276379,
				tcgplayer: 88771
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
