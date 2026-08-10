import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growl",
				fr: "Rugissement"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance)."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297242,
				tcgplayer: 152831
			}
		},
	],

}

export default card