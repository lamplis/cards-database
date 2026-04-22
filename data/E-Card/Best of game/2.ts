import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	dexId: [107],
	set: Set,

	name: {
		en: "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "While seeming to do nothing, it fires punches in lightning-fast volleys that are impossible to see."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Jab"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Special Punch"
		},

		damage: 40
	}],

	variants: [
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 275421,
				tcgplayer: 86098
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			thirdParty: {
				cardmarket: 275412
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			size: "jumbo",
			thirdParty: {
				cardmarket: 283082
			}
		},
		{
			type: "V3",
			cardmarketLabels: ["Maree", "Attention Oversized Card", "Not Tournament Legal"],
			thirdParty: {
				cardmarket: 362861
			}
		},
		{
			type: "V3",
			cardmarketLabels: ["Eee", "Attention Oversized Card", "Not Tournament Legal"],
			thirdParty: {
				cardmarket: 362863
			}
		}
	]
}

export default card
