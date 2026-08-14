import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Création de Zarude"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895779,
				tcgplayer: 706193
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 895780,
				tcgplayer: 706199
			}
		}
	],
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Soulève Corne"
			},
			damage: "30",
			effect: {
				fr: "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			}
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Fouet Sombre"
			},
			damage: "100+",
			effect: {
				fr: "Si au moins une Énergie {D} Sombre est attachée à vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires."
			}
		},
	],
}

export default card
