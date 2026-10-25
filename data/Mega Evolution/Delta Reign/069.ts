import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/08/ME06_EN_69.png",

	name: {
		en: "Mega Malamar ex",
		fr: "Méga-Sepiatroce-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [687],
	hp: 320,
	types: ["Darkness"],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
		cost: ["Darkness", "Darkness"],
		name: {
			en: "Psychic Marionettes",
			fr: "Marionnettes Psy",
		},
		effect: {
			en: "This attack does 70 damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chacun des Pokémon de Banc de votre adversaire.",
		},
		damage: "70×",
		},
		{
		cost: ["Darkness", "Darkness", "Darkness"],
		name: {
			en: "Eerie Pulse",
			fr: "Pouls Sinistre",
		},
		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 200,
		},
	],
	weaknesses: [{
		type: "Grass",
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
