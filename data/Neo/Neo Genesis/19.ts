import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metal Energy*"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance).\nMetal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)",
		de: "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't , whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance).\nMetal Energy provides  Energy. (Doesn't count as a basic Energy card.)",
		fr: "Les dégâts infligés au Pokémon sur lequel Énergie Métal est attachée sont réduits de 10 (avant application de la Faiblesse et de la Résistance). Si le Pokémon sur lequel Énergie Métal est attachée n'est pas {M}, chaque fois qu'il inflige des dégâts à un Pokémon, réduisez ces dégâts de 10 (après application de la Faiblesse et de la Résistance).\n\nÉnergie Métal fournit une Énergie {M}. (N'est pas considérée comme une carte Énergie de base.)"
	},

	thirdParty: {
		cardmarket: 274419,
		tcgplayer: 87368
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
