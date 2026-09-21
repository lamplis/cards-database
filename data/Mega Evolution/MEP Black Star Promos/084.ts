import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		de: "Moruda",
		es: "Dhelmise",
		it: "Dhelmise",
		pt: "Dhelmise",
		'es-mx': "Dhelmise",
	},
	set: Set,

	dexId: [781],

	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894263,
				tcgplayer: 706137

			}
		}
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Ancre Vengeresse"
			},
			damage: "30+",
			effect: {
				fr: "Si vous avez au moins 4 Pokémon ayant le talent Cachette en Douce dans votre pile de défausse, cette attaque inflige 140 dégâts supplémentaires."
			}
		},
	],
}

export default card
