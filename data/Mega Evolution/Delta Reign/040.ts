import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050365_P_KAIDEN_Pgay.jpg",

	name: {
		en: "Wattrel",
		fr: "Zapétrel",
	},

	category: "Pokemon",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
		},
		damage: 10,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
	}],
	retreat: 1,
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
