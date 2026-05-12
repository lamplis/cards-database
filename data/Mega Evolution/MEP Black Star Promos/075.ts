import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Pharamp"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 160,
	stage: "Stage2",
	evolveFrom: {
		fr: "Lainergie"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Pulsation Synchronisée"
			},
			effect: {
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, les attaques utilisées par ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair Aveuglant"
			},
			damage: "140",
			effect: {
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Aveuglant."
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
	regulationMark: "J",
	illustrator: "Taiga Kasai",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884754,
				tcgplayer: 694681

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884755,
				tcgplayer: 694682

			}
		}
	],
}

export default card
