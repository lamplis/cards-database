import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
		de: "Team Flare-Rüpel"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Discard an Energy attached to your opponent's Active Pokémon. You may play only 1 Supporter card during your turn (before your attack).",
		fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire."
	},

	thirdParty: {
		cardmarket: 288508
	}
}

export default card
