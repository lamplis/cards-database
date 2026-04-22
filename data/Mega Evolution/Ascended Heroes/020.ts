import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [4],

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		'es-mx': "Charmander",
		de: "Glumanda",
		it: "Charmander",
		pt: "Charmander"
	},

	illustrator: "Orca",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			'es-mx': "Garras de Fuego",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			pt: "Garras de Fogo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",


	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869631,
			tcgplayer: 675832
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870169,
			tcgplayer: 676869
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870170,
			tcgplayer: 677009
		}
	},
		{
			type: "V3",
			cardmarketLabels: ["Cosmos Holo"],
			thirdParty: {
				cardmarket: 870111
			}
		}
],
}

export default card
