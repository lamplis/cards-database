import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/08/ME06_EN_97.png",

	name: {
		en: "Legendary Summit",
		fr: "Sommet Légendaire",
	},

	category: "Trainer",
	effect: {
		en: "You can't play this card by itself. You must combine 2 different Legendary Summit cards from your hand to play them as 1 Stadium card.\n\nWhen Knocked Out by damage from an opponent's attack, both players' {C} Pokémon give up 1 fewer Prize card.",
		fr: "Vous ne pouvez pas jouer cette carte seule. Vous devez associer 2 cartes Sommet Légendaire différentes de votre main pour les jouer comme 1 carte Stade.\n\nLorsqu'ils sont mis K.O. par les dégâts d'une attaque de l'adversaire, les Pokémon {C} des deux joueurs rapportent une carte Récompense de moins.",
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
