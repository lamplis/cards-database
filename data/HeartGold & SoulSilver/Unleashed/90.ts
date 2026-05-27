import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (haut)",
		de: "Entei & Raikou LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba 樋口 真嗣 + 江場 左知子",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [244, 243],
	hp: 140,

	types: [
		"Fire",
		"Lightning",
	],

	suffix: "Legend",
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	attacks: [
		{
			name: {
				en: "Detonation Spin",
				de: "Explosionswirbel",
				fr: "Détonations en pagaille"
			},
			damage: 90,
			effect: {
				en: "Discard a Fire Energy attached to Entei & Raikou LEGEND.",
				de: "Lege 1 an Entei & Raikou-LEGENDE angelegte -Energie auf deinen Ablagestapel.",
				fr: "Défaussez une carte Énergie {R} attachée à Entei & Raikou LÉGENDE."
			},
			cost: [
				"Fire",
				"Colorless",
			]
		},
		{
			name: {
				en: "Thunder Fall",
				de: "Donnerfall",
				fr: "Cascatonnerre"
			},
			effect: {
				en: "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). This attack's damage isn't affected by Weakness or Resistance.",
				de: "Lege alle an Entei & Raikou-LEGENDE angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon (deinen und denen deines Gegners), das NICHT über Poké-Power verfügt, 80 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert.",
				fr: "Défaussez toutes les cartes Énergie attachées à Entei & Raikou LÉGENDE. Cette attaque inflige 80 dégâts à chaque Pokémon ayant des Poké-Powers (les vôtres et ceux de votre adversaire). Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse et la Résistance."
			},
			cost: [
				"Lightning",
				"Colorless",
			]
		},
	],

	thirdParty: {
		cardmarket: 279246
	}
}

export default card
