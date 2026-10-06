import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
    name: {
        en: "Psychic Energy",
        fr: "Énergie Psy",
        es: "Energía Psíquica",
        it: "Energia Psico",
        pt: "Energia Psíquica",
        de: "Psycho-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
    	{
    		type: "normal",
    		stamp: ["player-rewards-program"],
    		thirdParty: {
    			cardmarket: 894242,
    		},
    	},
    	{
    		type: "holo",
    		stamp: ["player-rewards-program"],
    		thirdParty: {
    			cardmarket: 894243,
    		},
    	},
    ],

}

export default card
