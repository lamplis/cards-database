import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/10/ME06_EN_26.jpg",

	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	category: "Pokemon",
	dexId: [382],
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
		cost: ["Water", "Colorless"],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 40,
		},
		{
		cost: ["Water", "Water", "Colorless"],
		name: {
			en: "Savage Whirlpool",
			fr: "Tourbillon Sauvage",
		},
		effect: {
			en: "If there is a Stadium in play with \"Legendary\" in its name, this attack also does 50 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si un Stade en jeu a « Légendaire » dans son nom, cette attaque inflige aussi 50 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	retreat: 3,
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
