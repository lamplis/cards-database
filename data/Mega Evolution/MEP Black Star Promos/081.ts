import { Card } from '../../../interfaces'
import Set from '../MEP Black Star Promos'

const card: Card = {
	name: {
		fr: "Méga-Amphinobi-ex"
	},
	set: Set,
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 350,
	stage: "Stage2",
	evolveFrom: {
		fr: "Croâporal"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Shuriken Mortel"
			},
			effect: {
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez défausser une carte Énergie {W} de base de votre main pour utiliser ce talent. Placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Hélice Ninja"
			},
			damage: "120+",
			effect: {
				fr: "Vous pouvez ajouter à votre main une Énergie {W} attachée à ce Pokémon et infliger 80 dégâts supplémentaires avec cette attaque."
			}
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 885516,
				tcgplayer: 704879
			}
		},
		{
        	type: 'lenticular',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 885517,
        		tcgplayer: 704880
        	}
        }
	],
}

export default card
