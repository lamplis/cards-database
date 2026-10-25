import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050409_T_DENSETSUNOKAIKOU_3dM6.jpg",

	name: {
		en: "Legendary Ocean Trench",
		fr: "Fosse Océanique Légendaire",
	},

	category: "Trainer",
	effect: {
		en: "You can't play this card by itself. You must combine 2 different Legendary Ocean Trench cards from your hand to play them as 1 Stadium card.\n\nWhenever a Pokémon in play is healed (both yours and your opponent's), double the amount of damage healed.",
		fr: "Vous ne pouvez pas jouer cette carte seule. Vous devez associer 2 cartes Fosse Océanique Légendaire différentes de votre main pour les jouer comme 1 carte Stade.\n\nChaque fois qu'un Pokémon en jeu est soigné (le vôtre ou celui de votre adversaire), doublez la quantité de dégâts soignés.",
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
