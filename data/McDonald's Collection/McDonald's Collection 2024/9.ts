import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		it: "Umbreon",
		pt: "Umbreon",
		de: "Nachtara"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 110,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Blindside",
				fr: "Angle Mort"
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			}
		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Mirage",
				fr: "Mirage Lunaire"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 80
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802831,
				tcgplayer: 614378
			}
		}
	]
}

export default card

