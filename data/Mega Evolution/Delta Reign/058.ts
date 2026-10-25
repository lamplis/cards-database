import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050382_P_ITOMARU_Pgay.jpg",

	name: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	category: "Pokemon",
	dexId: [167],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Darkness"],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		},
		{
		cost: ["Colorless", "Colorless", "Colorless"],
		name: {
			en: "Bug Out",
			fr: "Essaimage",
		},
		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Révélez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez et qui a l'attaque Essaimage. Mélangez ensuite les Pokémon révélés avec votre deck. Défaussez les autres cartes.",
		},
		damage: "50×",
		},
	],
	weaknesses: [{
		type: "Fighting",
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
