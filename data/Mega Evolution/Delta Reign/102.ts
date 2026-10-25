import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050408_T_FUUTORANNOSHIXYUGIXYOU_3dM6.jpg",

	name: {
		en: "Tate & Liza's Training",
		fr: "Entraînement de Lévy et Tatia",
	},

	category: "Trainer",
	effect: {
		en: "Draw 2 cards. Then, if a Stadium with \"Legendary\" in its name is in play, put this card into your hand instead of discarding it.",
		fr: "Piochez 2 cartes. Ensuite, si un Stade qui a « Légendaire » dans son nom est en jeu, ajoutez cette carte à votre main au lieu de la défausser.",
	},
	trainerType: "Supporter",
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
