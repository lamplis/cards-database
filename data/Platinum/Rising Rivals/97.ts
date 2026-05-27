import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Underground Expedition",
		fr: "Expédition souterraine",
		de: "Expedition ins Unterirdische"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the 4 cards from the bottom of your deck. Choose any 2 cards there and put them into your hand. Put the remaining cards back on the bottom of your deck in any order.",
		fr: "Regardez les 4 cartes du dessous de votre deck. Choisissez-en 2 parmi les 4 et placez-les dans votre main. Replacez les cartes restantes au-dessous de votre deck dans n'importe quel ordre.",
		de: "Schau dir die untersten 4 Karten deines Decks an. Wähle 2 Karten, die du dort gefunden hast, und nimm sie auf die Hand. Lege die restlichen Karten in beliebiger Reihenfolge unter dein Deck zurück."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278671,
		tcgplayer: 90156
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		}
	]
}

export default card
