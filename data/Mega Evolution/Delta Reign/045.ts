import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/ME06_EN_45.jpg",

	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	category: "Pokemon",
	dexId: [487],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Psychic", "Psychic", "Colorless"],
		name: {
			en: "Chaos Crawler",
			fr: "Reptation du Chaos",
		},
		effect: {
			en: "Prevent all damage from attacks done to this Pokémon during your opponent's next turn. You can't use this attack if any of your Pokémon used Chaos Crawler during your last turn.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. Vous ne pouvez pas utiliser cette attaque si l'un de vos Pokémon a utilisé Reptation du Chaos pendant votre dernier tour.",
		},
		damage: 120,
		},
	],
	weaknesses: [{
		type: "Darkness",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
	}],
	retreat: 3,
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
