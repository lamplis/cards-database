import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Desert Shaman",
		de: "Wüsten -Schamane"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "Mische die Karte auf deiner Hand in dein Deck und ziehe bis zu 4 Karten. Dein Gegner geht genau so vor."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84782
			}
		},
		{
			type: 'reverse'
		},
		{
			type: 'normal',
			stamp: ['kevin-nguyen']
		}
	]
}

export default card
