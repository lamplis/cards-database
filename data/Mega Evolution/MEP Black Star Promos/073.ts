import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Méga-Ectoplasma-ex"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 350,
	stage: "Stage2",
	evolveFrom: {
		fr: "Spectrum"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Dissimulation Obscure"
			},
			effect: {
				fr: "Si l'un de vos Pokémon {D} est mis K.O. par les dégâts d'une attaque de l'un des Pokémon-ex de votre adversaire, cette personne récupère une carte Récompense de moins. L'effet de Dissimulation Obscure n'est pas cumulable."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Bourrasque du Néant"
			},
			damage: "230",
			effect: {
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc."
			}
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Ultimateinudog",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891721,
				tcgplayer: 696608
			}
		}
	],
}

export default card
