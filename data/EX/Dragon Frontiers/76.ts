import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Island Hermit",
		fr: "L'ermite de l'île",
		de: "Insel-Eremit"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Choisissez jusqu'à 2 de vos cartes Récompense et retournez-les. (Ces cartes restent retournées jusqu'à la fin de la partie.) Piochez 2 cartes.",
		de: "Wähle bis zu 2 deiner Preise und decke sie auf. (Diese Karten werden nicht wieder verdeckt.) Ziehe 2 Karten.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277281,
				tcgplayer: 86291
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
