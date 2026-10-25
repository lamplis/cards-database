import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/003-Masquerain.jpg",

	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},

	category: "Pokemon",
	dexId: [284],
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},
	stage: "Stage1",
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Scary Patterns",
			fr: "Motifs Effrayants",
		},
		effect: {
			en: "The Defending Pokémon can't attack during your next turn.",
			fr: "Le Pokémon Défenseur ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 30,
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
