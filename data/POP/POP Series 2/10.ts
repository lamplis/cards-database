import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon",
		de: "Pokémon Park*"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "Once during each player’s turn, when that player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88231,
				cardmarket: 277441
			},
		},
	],

}

export default card
