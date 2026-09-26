import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d'Alola",
		de: "Alola-Kokowei",
		it: "Exeggutor di Alola",
		es: "Exeggutor de Alola",
		pt: "Exeggutor de Alola",
		'es-mx': "Exeggutor de Alola",
	},

	illustrator: "yuu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [103],

	evolveFrom: {
		en: "Exeggcute",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Scale Up",
		},

		effect: {
			en: "If this Pokémon has 6 or more {G} Energy attached, it gets +250 HP.",
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895609,
				tcgplayer: 713262
			}
		}
	],
}

export default card
