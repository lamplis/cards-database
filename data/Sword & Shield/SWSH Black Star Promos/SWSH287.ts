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

	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "V-UNION",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Union Gain",
				pt: "Conquista de União",
				fr: "Gain Union"
			},
			effect: {
				en: "Attach up to 2 {L} Energy cards from your discard pile to this Pokémon.",
				pt: "Ligue até 2 cartas de Energia {L} da sua pilha de descarte a este Pokémon.",
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

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "E"
}

export default card
