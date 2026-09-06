import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior",
		fr: "Majaspic"
	},

	illustrator: "LINNE",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [497],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				fr: "Ordre Majestueux",
			},
			damage: "20x",
			effect: {
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				fr: "Enroulement Solaire",
			},
			damage: "100+",
			effect: {
				fr: "Si Encouragement d'Écho est dans votre pile de défausse, cette attaque inflige 150 dégâts supplémentaires.",
			},
		},
	],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 879303
			}
		},
		{
			type: "V1",
			cardmarketLabels: ["Masterball Reverse", "Pokeball Reverse"],
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 877543,
				tcgplayer: 685494
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo', 'staff'],
			thirdParty: {
				tcgplayer: 685498
			}
		},
		{
			type: "V1",
			cardmarketLabels: ["Masterball Reverse", "Pokeball Reverse"],
		}
	]
}

export default card
