import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Méga-Zygarde-ex"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 310,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Onde de Gaïa"
			},
			damage: "200",
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			}
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Zéro Annihilant"
			},
			effect: {
				fr: "Pour chacun des Pokémon de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts à ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			}
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "takuyoa",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873310,
				tcgplayer: 695311
			}
		},
		{
        	type: 'lenticular',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 873311,
        		tcgplayer: 696460
        	}
        },
		{
			type: "V2",
			cardmarketLabels: ["30!"],
			thirdParty: {
				cardmarket: 873311
			}
		}
	],
}

export default card
