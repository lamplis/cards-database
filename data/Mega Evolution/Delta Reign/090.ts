import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/06/m6-064-y23wa.png",

	name: {
		en: "Adventuring Lantern",
		fr: "Lanterne Aventure",
	},

	category: "Trainer",
	effect: {
		en: "Search your deck for a Basic {R} Energy card and a Basic {L} Energy card, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie {R} de base et une carte Énergie {L} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
	},
	trainerType: "Item",
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
