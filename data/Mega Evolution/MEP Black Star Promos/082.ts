import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Création de Miraidon"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894261,
				tcgplayer: 706135

			}
		}
	],
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Câble Photonique"
			},
			effect: {
				fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, déplacez jusqu'à 2 cartes Énergie {L} de base de ce Pokémon vers l'un de vos Pokémon de Banc."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				fr: "Fatal-Foudre"
			},
			damage: "90",
			effect: {
				fr: "Ce Pokémon s'inflige aussi 30 dégâts."
			}
		},
	],
}

export default card
