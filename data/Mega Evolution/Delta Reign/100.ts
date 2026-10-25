import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/m6-066-z82ch.png",

	name: {
		en: "Mega Rayquaza Cap",
		fr: "Casquette Méga-Rayquaza",
	},

	category: "Trainer",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Delta Gift",
			fr: "Cadeau Delta",
		},
		effect: {
			en: "For each of your Pokémon in play that has a Mega Rayquaza Cap attached to it, search your deck for a Basic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Pour chacun de vos Pokémon en jeu auquel une Casquette Méga-Rayquaza est attachée, cherchez dans votre deck une carte Énergie de base et attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
		},
		},
	],
	effect: {
		en: "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		fr: "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.)",
	},
	trainerType: "Tool",
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
