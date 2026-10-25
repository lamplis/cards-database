import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/101-Aarune.jpg",

	name: {
		en: "Aarune",
		fr: "Aarune",
	},

	rarity: "Ultra Rare",
	category: "Trainer",
	effect: {
		en: "Search your deck for up to 3 Supporter or Stadium cards in any combination, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 3 cartes Supporter ou Stade, dans n'importe quelle combinaison, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
	},
	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
