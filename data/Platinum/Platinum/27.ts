import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [487],

	hp: 100,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
				de: "Beharken"
			},
			effect: {
				en: "You may switch Giratina with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Giratina avec 1 de vos Pokémon de Banc.",
				de: "Du kannst Giratina gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Broken-space Blow",
				fr: "Coup espace-brisé",
				de: "Raumzerfetzschlag"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, put the Defending Pokémon and all cards attached to in the Lost Zone instead of the discard pile.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, legt dein Gegner dieses Pokémon und alle Karten, die an es angelegt sind, nicht auf den Ablagestapel, sondern ins Nirgendwo."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	variants:[
		{
			type:"normal",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85735
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85735
			}
		}
	],

}

export default card
