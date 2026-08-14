import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Création de Bastiodon"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894264,
				tcgplayer: 706133

			}
		}
	],
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Rempart Antique"
			},
			effect: {
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à chacun de vos Pokémon par les attaques des Pokémon de votre adversaire auxquels 2 Énergies ou moins sont attachées."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Enfoncement"
			},
			damage: "160"
		},
	],
}

export default card
