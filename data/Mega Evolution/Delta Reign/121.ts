import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/092-Raikou-ex.jpg",

	name: {
		en: "Raikou ex",
		fr: "Raikou-ex",
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [243],
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
		cost: ["Lightning"],
		name: {
			en: "Gather Lightning",
			fr: "Collecte Électrique",
		},
		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for a {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte Énergie {L} et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		},
		{
		cost: ["Lightning", "Lightning", "Colorless"],
		name: {
			en: "Power Rush",
			fr: "Ruée Puissante",
		},
		effect: {
			en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 200,
		},
	],
	weaknesses: [{
		type: "Fighting",
		value: "×2",
	}],
	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
