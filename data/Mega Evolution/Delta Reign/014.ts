import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/09/me06-en-014-819x1114-1790066106716.png",

	name: {
		en: "Meowscarada ex",
		fr: "Miascarade-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [908],
	hp: 320,
	types: ["Grass"],
	evolveFrom: {
		en: "Floragato",
		fr: "Matourgeon",
	},
	stage: "Stage2",
	suffix: "ex",
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Magical Bullet",
			fr: "Balle Magique",
		},
		effect: {
			en: "This attack also does 120 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120,
		},
	],
	weaknesses: [{
		type: "Fire",
		value: "×2",
	}],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
