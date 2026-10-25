import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/ME06_EN_79_webp.jpg",

	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},

	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			en: "Energy Present",
			fr: "Cadeau d'Énergie",
		},
		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 6 cards of your deck, choose an Energy card you find there, reveal it, and put it into your hand. Shuffle the remaining cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 6 cartes du dessus de votre deck, choisir une carte Énergie que vous y trouvez, la montrer, puis l'ajouter à votre main. Mélangez les cartes restantes et placez-les en dessous de votre deck.",
		},
	}],
	attacks: [
		{
		cost: ["Colorless"],
		name: {
			en: "Beat",
			fr: "Bataille",
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
