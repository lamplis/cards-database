import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "MEP 101",
		fr: "MEP 101"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895604
			}
		},
		{
			type: "V2",
			cardmarketLabels: ["Pokemon Center", "Stamped Version"],
			thirdParty: {
				cardmarket: 895605
			}
		}
	]
}

export default card
