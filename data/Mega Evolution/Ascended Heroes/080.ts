import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [175],

	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		'es-mx': "Togepi",
		de: "Togepi",
		it: "Togepi",
		pt: "Togepi"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			'es-mx': "Destructor",
			de: "Klaps",
			it: "Botta",
			pt: "Pancada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",


	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869691,
			tcgplayer: 675892
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			tcgplayer: 676914
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			tcgplayer: 677054
		}
	},
		{
			type: "V1",
			cardmarketLabels: ["Energy Reverse", "Pokeball Reverse"],
			thirdParty: {
				cardmarket: 870259
			}
		},
		{
			type: "V2",
			cardmarketLabels: ["Pokeball Reverse"],
			thirdParty: {
				cardmarket: 870260
			}
		}
],
}

export default card
