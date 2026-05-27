import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 30
		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Sensation Lunatique"
			},
			damage: "60+",
			effect: {
				fr: "Tournez 1 de vos cartes Récompense (actuellement face cachée) face découverte. Si la carte Récompense est un Pokémon, cette attaque inflige 60 dégâts supplémentaires. (Cette carte Récompense reste face découverte pour le reste de la partie.)"
			}
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "When exposed to the moon's aura, the rings on its body glow faintly and it's filled with a mysterious power.",
	},

	thirdParty: {
		cardmarket: 289816
	}
}

export default card
