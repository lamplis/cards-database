import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-068-p3uci.png",

	name: {
		en: "Aarune",
		fr: "Aarune",
	},

	category: "Trainer",
	effect: {
		en: "Search your deck for up to 3 Supporter or Stadium cards in any combination, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 3 cartes Supporter ou Stade, dans n'importe quelle combinaison, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
	},
	trainerType: "Supporter",
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
