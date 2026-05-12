import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	dexId: [500],

	name: {
		en: "Mega Emboar ex",
		fr: "Méga-Roitiflam-ex",
		es: "Mega-Emboar ex",
		'es-mx': "Mega-Emboar ex",
		de: "Mega-Flambirex-ex",
		it: "Mega Emboar-ex",
		pt: "Mega Emboar ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 380,
	types: ["Fire"],
	stage: "Stage2",

	evolveFrom: {
		en: "Pignite",
		de: "Ferkokel",
		es: "Pignite",
		fr: "Grotichon",
		it: "Pignite",
		pt: "Pignite",
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Crimson Blast",
			fr: "Explosion Écarlate",
			es: "Estallido Carmesí",
			'es-mx': "Explosión Carmesí",
			de: "Feuerrote Explosion",
			it: "Vermiglioscoppio",
			pt: "Explosão Carmim"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 320
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873719,
				tcgplayer: 692119
			}
		},
		{
			type: "V2",
			cardmarketLabels: ["Attention: Oversized Card", "Not Tournament Legal"],
			thirdParty: {
				cardmarket: 873720
			}
		},
		{
        	type: 'lenticular',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 873720,
        		tcgplayer: 692116
        	}
        }
	]
}

export default card
