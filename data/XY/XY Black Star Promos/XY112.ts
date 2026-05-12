import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Black Star Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Precognitive Dream",
				fr: "Rêve Prémonitoire"
			},
			effect: {
				en: "Draw 3 cards. This Pokémon is now Asleep.",
				fr: "Piochez 3 cartes. Ce Pokémon est maintenant Endormi."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tête de Fer"
			},
			damage: "30×",
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
			}
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	thirdParty: {
		cardmarket: 289787
	}
}

export default card
