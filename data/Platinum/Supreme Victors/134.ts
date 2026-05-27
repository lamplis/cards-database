import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Battle Tower",
		fr: "Tour de Combat",
		de: "Duellturm"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Whenever any player plays any Pokémon from his or her hand to Level-Up 1 of his or her Pokémon, remove 4 damage counters from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLorsque n'importe quel joueur joue un Pokémon de sa main pour faire passer 1 de ses Pokémon au Niveau Supérieur, retirez 4 marqueurs de dégât à ce Pokémon.",
		de: "Immer wenn ein Spieler eine Pokémon-Karte von seiner Hand spielt, um ein Level-Up durchzuführen, entferne 4 Schadensmarken von diesem Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278825
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
