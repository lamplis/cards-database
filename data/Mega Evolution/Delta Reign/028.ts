import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/050358_P_BURUNGERU_tiGp.jpg",

	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	category: "Pokemon",
	dexId: [593],
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},
	stage: "Stage1",
	abilities: [{
		type: "Ability",
		name: {
			en: "Deep Sea Draw",
			fr: "Pioche Abyssale",
		},
		effect: {
			en: "You may use this Ability once during your turn. Draw a card. If you do, you may then put a card from your hand on the bottom of your deck.",
			fr: "Vous pouvez utiliser ce talent une fois pendant votre tour. Piochez une carte. Dans ce cas, vous pouvez ensuite placer une carte de votre main en dessous de votre deck.",
		},
	}],
	attacks: [
		{
		cost: ["Water", "Colorless", "Colorless"],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 100,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
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
