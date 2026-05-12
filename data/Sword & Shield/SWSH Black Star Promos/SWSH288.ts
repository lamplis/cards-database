import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,
	illustrator: "Yuu Nishida",

	name: {
		fr: "Morpeko V-UNION",
		de: "Morpeko V-UNION",
		es: "Morpeko V-UNIÓN",
		pt: "Morpeko V-UNIÃO",
		it: "Morpeko V UNIONE",
		en: "Morpeko V-UNION"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "V-UNION",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "All You Can Eat",
				pt: "Comilança",
				fr: "Gain Union"
			},
			effect: {
				en: "Draw cards until you have 10 cards in your hand.",
				pt: "Compre cartas até ter 10 cartas na sua mão.",
				fr: "Attachez jusqu'à 2 cartes Énergie {L} de votre pile de défausse à ce Pokémon."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Buffet à Volonté"
			},
			effect: {
				fr: "Piochez des cartes jusqu'à en avoir 10 en main."
			}
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Roue Éclatante"
			},
			damage: "100×",
			effect: {
				fr: "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 100 dégâts pour chaque carte défaussée de cette façon."
			}
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Boule de Foudre"
			},
			damage: "160"
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	regulationMark: "E",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 682978,
				tcgplayer: 477066
			}
		},
	],
}

export default card
