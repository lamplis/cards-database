import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/ME06_EN_95-1.avif",

	name: {
		en: "Legendary Pyroduct",
		fr: "Pyroduct Légendaire",
	},

	category: "Trainer",
	effect: {
		en: "You can't play this card by itself. You must combine 2 different Legendary Pyroduct cards from your hand to play them as 1 Stadium card.\n\nEvolution Pokémon in play (both yours and your opponent's) have no Abilities.",
		fr: "Vous ne pouvez pas jouer cette carte seule. Vous devez associer 2 cartes Pyroduct Légendaire différentes de votre main pour les jouer comme 1 carte Stade.\n\nLes Pokémon Évolutifs en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
	},
	trainerType: "Stadium",
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

}

export default card
