import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Goupelin"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 160,
	stage: "Stage2",
	evolveFrom: {
		fr: "Roussil"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Magie Flamboyante"
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez défausser une carte Énergie {R} de base de votre main pour utiliser ce talent. Piochez des cartes jusqu'à en avoir 7 en main."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Tempête Énergisée"
			},
			damage: "30×",
			effect: {
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à tous les Pokémon."
			}
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Souichirou Gunjima",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884752,
				tcgplayer: 694679

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884753,
				tcgplayer: 694680

			}
		}
	],
}

export default card
