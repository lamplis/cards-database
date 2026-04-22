import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Cynthia's Guidance",
		fr: "Les conseils de Cynthia",
		de: "Cynthias Hilfe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Replacez les autres cartes au-dessus du deck. Ensuite, mélangez votre deck.",
		de: "Schau dir die obersten 7 Karten deines Decks an, wähle 1 davon und nimm sie auf deine Hand. Lege die anderen Karten zurück auf dein Deck. Mische dein Deck danach.",
	},

	trainerType: "Supporter",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278827
			}
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "player-reward"
		},
		{
			type: "V2",
			cardmarketLabels: ["Ee Soe", "Seo"],
			thirdParty: {
				cardmarket: 449368
			}
		}
	]
}

export default card
