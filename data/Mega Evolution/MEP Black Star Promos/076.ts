import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Nostenfer"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 130,
	stage: "Stage2",
	evolveFrom: {
		fr: "Nosferalto"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Manigances Nocturnes"
			},
			effect: {
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte. Mélangez votre deck, puis placez cette carte sur le dessus de votre deck."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Onde Sonore Toxique"
			},
			damage: "80",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné."
			}
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Apios",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884756,
				tcgplayer: 694686

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884757,
				tcgplayer: 694687

			}
		}
	],
}

export default card
