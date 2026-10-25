import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/093-Mega-Golurk-ex.jpg",

	name: {
		en: "Mega Golurk ex",
		fr: "Méga-Golemastoc-ex",
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [623],
	hp: 350,
	types: ["Psychic"],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},
	stage: "Stage1",
	suffix: "ex",
	abilities: [{
		type: "Ability",
		name: {
			en: "Power Limiter",
			fr: "Limiteur de Puissance",
		},
		effect: {
			en: "This Pokémon can't attack unless you have 10 or more cards in your hand.",
			fr: "Ce Pokémon ne peut pas attaquer à moins que vous ayez 10 cartes ou plus dans votre main.",
		},
	}],
	attacks: [
		{
		cost: ["Psychic", "Psychic"],
		name: {
			en: "Goliath Punch",
			fr: "Poing de Goliath",
		},
		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
		},
		damage: 300,
		},
	],
	weaknesses: [{
		type: "Darkness",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
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
