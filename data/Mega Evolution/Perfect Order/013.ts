import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [662],

	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		'es-mx': "Fletchinder",
		de: "Dartignis",
		it: "Fletchinder",
		pt: "Fletchinder"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			'es-mx': "Llama",
			de: "Flackern",
			it: "Fiammata",
			pt: "Chama"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 877425,
				tcgplayer: 684404
			}
		},
		{
			type: "reverse"
		}
	],

}

export default card
