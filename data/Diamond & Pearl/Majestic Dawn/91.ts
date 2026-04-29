import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
		de: "Helixfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		en: "Play Helix Fossil as if it were a Colorless Basic Pokémon. (Helix Fossil counts as a Trainer card as well, but if Helix Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Helix Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Helix Fossil from play. (This doesn't count as a Knocked Out Pokémon.)",
		fr: "Jouez Fossile Nautile comme si c'était un Pokémon de base Colorless. (Fossile Nautile compte aussi comme une carte Dresseur mais si Fossile Nautile est mise K.O, elle compte comme un Pokémon K.O.) Fossile Nautile ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Nautile. (Cela ne compte pas comme un Pokémon K.O).",
		de: "Spiele Helixfossil wie ein -Basis-Pokémon. (Helixfossil zählt gleichzeitig als Trainerkarte, aber wenn Helixfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Helixfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Helixfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278140,
				tcgplayer: 86057
			}
		},
		{
			type: "reverse"
		}
	]
}

export default card
