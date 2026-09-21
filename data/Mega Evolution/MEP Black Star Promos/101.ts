import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
		de: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		'es-mx': "Nidorina",
	},
	set: Set,

	dexId: [30],

	rarity: "Promo",
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
