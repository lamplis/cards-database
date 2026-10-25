import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/M6-046076-Sableye.png",

	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	category: "Pokemon",
	dexId: [302],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Lure Out",
			fr: "Leurre",
		},
		effect: {
			en: "Reveal the top 5 cards of your opponent's deck. You may choose any number of Basic Pokémon you find there and put them onto their Bench. Your opponent shuffles the other cards back into their deck.",
			fr: "Révélez les 5 cartes du dessus du deck de votre adversaire. Vous pouvez choisir le nombre voulu de Pokémon de base que vous y trouvez et les placer sur son Banc. Votre adversaire mélange les autres cartes avec son deck.",
		},
		},
		{
		cost: ["Darkness", "Colorless"],
		name: {
			en: "Sinister Eyes",
			fr: "Regard Sinistre",
		},
		effect: {
			en: "Put 5 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 5 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
		},
		},
	],
	weaknesses: [{
		type: "Grass",
		value: "×2",
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
