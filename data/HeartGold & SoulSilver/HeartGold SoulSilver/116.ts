import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,

	cameoDexIds: [250],

	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279088,
				tcgplayer: 85464
			}
		}
	],

	hp: 0,

}

export default card
