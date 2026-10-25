import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/07/096-Talonflame-ex.jpg",

	name: {
		en: "Talonflame ex",
		fr: "Flambusard-ex",
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [663],
	hp: 280,
	types: ["Colorless"],
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	stage: "Stage2",
	suffix: "ex",
	abilities: [{
		type: "Ability",
		name: {
			en: "Excitedive",
			fr: "Excitation",
		},
		effect: {
			en: "If this Pokémon is in your hand and you have a {C} Mega Evolution Pokémon in play, you may use this Ability. Put this Pokémon onto your Bench.",
			fr: "Si ce Pokémon est dans votre main et que vous avez un Pokémon Méga-Évolution {C} en jeu, vous pouvez utiliser ce talent. Placez ce Pokémon sur votre Banc.",
		},
	}],
	attacks: [
		{
		cost: ["Colorless", "Colorless"],
		name: {
			en: "Claw Hunt",
			fr: "Chasse Griffe",
		},
		effect: {
			en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck jusqu'à 2 cartes et les ajouter à votre main. Mélangez ensuite votre deck.",
		},
		damage: 150,
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
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
