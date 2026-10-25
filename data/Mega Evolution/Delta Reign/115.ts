import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/086-Azurill.jpg",

	name: {
		en: "Azurill",
		fr: "Azurill",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [298],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
		name: {
			en: "Charge",
			fr: "Chargeur",
		},
		effect: {
			en: "Search your deck for an Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie et attachez-la à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
		},
	],
	weaknesses: [{
		type: "Fighting",
		value: "×2",
	}],
	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
