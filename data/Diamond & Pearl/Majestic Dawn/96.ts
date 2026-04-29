import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Recover Energy",
		fr: "Énergie guérison",
		de: "Erhol-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "Recover Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove all Special Conditions from that Pokémon.",
		fr: "Énergie guérison fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui tous ses États Spéciaux.",
		de: "Erhol-Energie liefert {C}-Energie. Wenn du diese Karte von deiner Hand an 1 deiner Pokémon anlegst, entferne alle Speziellen Zustände von diesem Pokémon."
	},

	energyType: "Special",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278145,
				tcgplayer: 88651
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
