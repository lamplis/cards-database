import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Muplodocus"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 160,
	stage: "Stage2",
	evolveFrom: {
		fr: "Colimucus"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Glissade Gluante"
			},
			effect: {
				fr: "Lorsque le Pokémon Actif de votre adversaire bat en retraite, votre adversaire lance une pièce. Si c'est pile, les Énergies pour son Coût de Retraite ne sont pas défaussées, et le Pokémon n'est pas échangé. L'effet de Glissade Gluante n'est pas cumulable."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				fr: "Draco-Choc"
			},
			damage: "160",
			effect: {
				fr: "Défaussez la carte du dessus de votre deck."
			}
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "okayamatakatoshi",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884758,
				tcgplayer: 694688

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884759,
				tcgplayer: 694689

			}
		}
	],
}

export default card
