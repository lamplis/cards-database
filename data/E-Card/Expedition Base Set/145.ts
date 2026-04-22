import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pokémon Nurse",
		fr: "Infirmière Pokémon",
		de: "Pokémon-Krankenschwester"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez tous les marqueurs de dégâts d'un de vos Pokémon. Défaussez -vous ensuite de toutes les cartes Énergie qui lui sont attachées, s'il en possède.",
		de: "Entferne alle Schadensmarken von einem deiner Pokémon. Lege dann alle an es angelegten Energiekarten auf deinen Ablagestapel.",
	},


	variants:[
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275020
			}
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		}
	]
}

export default card
