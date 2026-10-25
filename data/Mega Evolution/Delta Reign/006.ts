import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050344_P_MITSUHANI_tiGp.jpg",

	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	category: "Pokemon",
	dexId: [415],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Grass"],
		name: {
			en: "Fade Away",
			fr: "Évanouissement",
		},
		effect: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
			fr: "Ajoutez ce Pokémon et toutes les cartes qui lui sont attachées à votre main.",
		},
		damage: 10,
		},
		{
		cost: ["Grass"],
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
		type: "Fire",
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
