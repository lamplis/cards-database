import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
		de: "Palkia & Dialga LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [483, 484],
	hp: 160,

	types: [
		"Water",
		"Metal"
	],

	suffix: "Legend",

	attacks: [
		{
			name: {
				fr: "Disparition soudaine",
				de: "Plötzliche Tilgung",
			},
			effect: {
				fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l’autre moitié de Palkia & Dialga LÉGENDE.",
				de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dein Gegner nimmt das gewählte Pokémon und alle an es angelegten Karten auf seine Hand zurück.",
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
		},
		{
			name: {
				de: "Zeitherrschaft",
				fr: "Contrôle temporel",
			},
			effect: {
				de: "Lege alle -Energien, die an Palkia- und Dialga-LEGENDE angelegt sind, auf deinen Ablagestapel. Füge die obersten 2 Karten vom Deck deines Gegner seinen Preiskarten hinzu.",
				fr: "Défaussez toutes les cartes Énergie Métal attachées à Palkia & Dialga LÉGENDE. Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense.",
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
		},
	],

	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87914,
				cardmarket: 279631
			}
		},
		{
			type: "holo",
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 211449
			}
		},
	],

}

export default card
