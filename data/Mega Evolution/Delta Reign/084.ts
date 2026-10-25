import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	image: "https://www.pokebeach.com/news/2026/08/ME06_EN_84.png",

	name: {
		en: "Mega Rayquaza ex",
		fr: "Méga-Rayquaza-ex",
	},

	rarity: "Double rare",
	category: "Pokemon",
	dexId: [384],
	hp: 280,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "ex",
	abilities: [{
		type: "Ability",
		name: {
			en: "Champion's Roar",
			fr: "Rugissement du Souverain",
		},
		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may use this Ability. Look at the top 4 cards of your deck and attach a Basic Energy card you find there to this Pokémon. Shuffle the remaining cards and put them on the bottom of your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez utiliser ce talent. Regardez les 4 cartes du dessus de votre deck et attachez une carte Énergie de base que vous y trouvez à ce Pokémon. Mélangez les cartes restantes et placez-les en dessous de votre deck.",
		},
	}],
	attacks: [
		{
		cost: ["Fire", "Lightning", "Colorless"],
		name: {
			en: "Storm Emeralda",
			fr: "Tempête Émeraude",
		},
		effect: {
			en: "This attack does 50 damage for each {R} Energy and each {L} Energy attached to all of your Pokémon in play.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie {R} et chaque Énergie {L} attachées à tous vos Pokémon en jeu.",
		},
		damage: "50×",
		},
	],
	weaknesses: [{
		type: "Lightning",
		value: "×2",
	}],
	resistances: [{
		type: "Fighting",
		value: "-30",
	}],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
	],

}

export default card
