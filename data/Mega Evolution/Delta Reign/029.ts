import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/m6-021-z2agd.png",

	name: {
		en: "Wishiwashi ex",
		fr: "Froussardine-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [746],
	hp: 260,
	types: ["Water"],
	stage: "Basic",
	suffix: "ex",
	abilities: [{
		type: "Ability",
		name: {
			en: "Ocean Gain",
			fr: "Gain Océanique",
		},
		effect: {
			en: "You may use this Ability once during your turn if this Pokémon is in the Active Spot. Heal 50 damage from this Pokémon.",
			fr: "Vous pouvez utiliser ce talent une fois pendant votre tour si ce Pokémon est sur le Poste Actif. Soignez 50 dégâts de ce Pokémon.",
		},
	}],
	attacks: [
		{
		cost: ["Water", "Water", "Water", "Colorless"],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 220,
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
			type: "holo"
		},
	],

}

export default card
