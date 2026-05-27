import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Volkner's Philosophy",
		fr: "La Philosophie de Tanguy",
		de: "Volkners Philosophie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. You may discard a card from your hand. Then, draw cards until you have 6 cards in your hand. (If you can't draw any cards, you can't play this card.)",
		fr: "Vous pouvez défausser une carte de votre main. Ensuite, piochez des cartes jusqu'à ce que vous ayez 6 cartes en main. (Si vous ne pouvez pas piocher de cartes, vous ne pouvez pas jouer cette carte.)",
		de: "Du kannst 1 Karte von deiner Hand auf deinen Ablagestapel legen. Danach ziehe so viele Karten, bis du 6 Karten auf der Hand hast. (Wenn du keine Karten ziehen kannst, kannst du diese Karte nicht spielen.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278672,
		tcgplayer: 90406
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
