import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Oran Berry",
		fr: "Baie Oran",
		de: "Sinelbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Oran à un de vos Pokémon qui n'a pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nN'importe quand entre deux tours, si le Pokémon auquel cette carte est attachée possède au moins deux marqueurs de dégât, retirez-les lui. Ensuite, défaussez Baie Oran.",
		de: "At any time between turns, if the Pokémon this card is attached to has at least 2 damage counters on it, remove 2 damage counters from it. Then discard Oran Berry."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275733,
				tcgplayer: 87888
			}
		},
		{
			type: "reverse"
		},
		{
			type: "V2",
			cardmarketLabels: ["Attach Oran Berry To Of Your Pokmon That", "Doesnt Already Have A Pokmon Tool Attached To", "That Pokmon Is Knocked Our Discard This Card"],
			thirdParty: {
				cardmarket: 280582
			}
		}
	]
}

export default card
