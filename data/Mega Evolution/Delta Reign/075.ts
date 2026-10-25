import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/ME06_EN_75_webp.jpg",

	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},

	category: "Pokemon",
	dexId: [784],
	hp: 160,
	types: ["Dragon"],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",
	abilities: [{
		type: "Ability",
		name: {
			en: "Scale Beat",
			fr: "Battement d'Écailles",
		},
		effect: {
			en: "Once during your turn, you may look at the top 6 cards of your deck and attach any number of Basic Energy cards you find there to your Dragon Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck et attacher le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon Dragon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		},
	}],
	attacks: [
		{
		cost: ["Lightning", "Fighting", "Colorless"],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 170,
		},
	],
	retreat: 2,
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
