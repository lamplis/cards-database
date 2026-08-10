import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Chenipan"
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Tit'Sieste"
			},
			effect: {
				fr: "Soignez 20 dégâts à ce Pokémon."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Ronge"
			},
			damage: "20"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297232,
				tcgplayer: 152850
			}
		},
	],

}

export default card
