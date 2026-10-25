import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/079-Magmortar-1.jpg",

	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [467],
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",
	abilities: [{
		type: "Ability",
		name: {
			en: "Buddy Boost",
			fr: "Coup de Pouce",
		},
		effect: {
			en: "Once during your turn, you may attach up to 1 Basic {R} Energy and up to 1 Basic {L} Energy from your hand to your Magmortar or Electivire in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez attacher au maximum une Énergie {R} de base et au maximum une Énergie {L} de base de votre main à votre Maganon ou à votre Élekable, de la manière que vous voulez.",
		},
	}],
	attacks: [
		{
		cost: ["Fire", "Fire", "Colorless"],
		name: {
			en: "Heat Stamp",
			fr: "Tampon de Chaleur",
		},
		damage: 80,
		},
	],
	weaknesses: [{
		type: "Water",
		value: "×2",
	}],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
