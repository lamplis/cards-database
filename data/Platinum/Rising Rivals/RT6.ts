import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Charon's Choice",
		fr: "Le choix de Pluton",
		de: "Charons Wahl"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, put this card into your hand instead of discarding it. Search your deck for any Rotom and switch it with any Rotom you have in play. Any cards attached to Rotom and damage counters on it are now on the new Pokémon. (Remove all Special Conditions and effects from Rotom.) Put Rotom on top of your deck. Shuffle your deck afterward.",
		fr: "Cherchez n'importe quel Motisma dans votre deck et échangez-le avec n'importe quel Motisma que vous avez en jeu. Toutes les cartes attachées à Motisma ainsi que ses marqueurs de dégât se trouvent désormais sur le nouveau Pokémon. (Retirez à Motisma tous ses États Spéciaux et tous ses effets). Placez Motisma au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer beliebigen Rotom-Karte und tausche sie gegen 1 deiner Rotom im Spiel aus. Alle an Rotom angelegten Karten und Schadensmarken werden auf das neue Pokémon übertragen. (Entferne alle Speziellen Zustände und anderen Effekte von Rotom.) Lege Rotom auf dein Deck. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278574
	},

	variants: [
		{
			type: "reverse",
			foil: "cracked-ice"
		}
	]
}

export default card
