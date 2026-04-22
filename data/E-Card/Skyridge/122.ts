import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crystal Shard",
		de: "Kristallscherbe"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "So lange diese Karte an ein Pokémon angelegt ist, ist der Typ (Farbe) dieses Pokémon . Greift das Pokémon an, lege diese Karte am Ende des Zuges auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84519
			}
		},
		{
			type: 'reverse'
		}
	]
}

export default card
