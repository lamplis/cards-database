import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Miasma Valley",
		fr: "Vallée miasme",
		de: "Gifthauchtal"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Whenever any player puts a Basic Pokémon (excluding Grass or Psychic Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
		fr: "Lorsqu'1 joueur place un Pokémon de base (Pokémon {G} ou {P} exclus) de sa main vers son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Whenever any player puts a Basic Pokémon (excluding  or  Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278532,
		tcgplayer: 87435
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
