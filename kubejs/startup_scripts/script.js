// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
	event.create('roguefp').displayName('Rogue Fingerprint').tooltip('Used to choose your Specialization path')
event.create('wizardfp').displayName('Wizard Fingerprint').tooltip('Used to choose your Specialization path')
event.create('fighterfp').displayName('Fighter Fingerprint').tooltip('Used to choose your Specialization path')
event.create('crafterfp').displayName('Crafter Fingerprint').tooltip('Used to choose your Specialization path')

//fighter archetype
//1st mark fighter
event.create('mark_paladin').displayName('I. Mark of the Paladin')
event.create('mark_blackguard').displayName('I. Mark of the Blackguard')
event.create('mark_warrior').displayName('I. Mark of the Warrior')
event.create('mark_barbarian').displayName('I. Mark of the Barbarian')
event.create('mark_warlord').displayName('I. Mark of the Warlord')
//2nd mark fighter
event.create('mark_crusader').displayName('II. Mark of the Crusader')
event.create('mark_hexblade').displayName('II. Mark of the Hexblade')
event.create('mark_mercenary').displayName('II. Mark of the Mercenary')
event.create('mark_savage').displayName('II. Mark of the Savage')
event.create('mark_marshal').displayName('II. Mark of the Marshal')
//3rd mark fighter
event.create('mark_templar').displayName('III. Mark of the Templar')
event.create('mark_deathknight').displayName('III. Mark of the Death Knight')
event.create('mark_champion').displayName('III. Mark of the Champion')
event.create('mark_berserker').displayName('III. Mark of the Berserker')
event.create('mark_commander').displayName('III. Mark of the Commander')

//crafter archetype
//1st mark crafter
event.create('mark_miner').displayName('I. Mark of the Miner')
event.create('mark_alchemist').displayName('I. Mark of the Alchemist')
event.create('mark_explorer').displayName('I. Mark of the Explorer')
event.create('mark_huntsman').displayName('I. Mark of the Huntsman')
event.create('mark_farmer').displayName('I. Mark of the Farmer')
//2nd mark crafter
event.create('mark_spelunker').displayName('II. Mark of the Spelunker')
event.create('mark_enchanter').displayName('II. Mark of the Enchanter')
event.create('mark_wanderer').displayName('II. Mark of the Wanderer')
event.create('mark_tracker').displayName('II. Mark of the Tracker')
event.create('mark_rancher').displayName('II. Mark of the Rancher')
//3rd mark crafter
event.create('mark_cavemaster').displayName('III. Mark of the Cavemaster')
event.create('mark_thaumaturge').displayName('III. Mark of the Thaumaturge')
event.create('mark_pathfinder').displayName('III. Mark of the Pathfinder')
event.create('mark_pursuer').displayName('III. Mark of the Pursuer')
event.create('mark_agrarian').displayName('III. Mark of the Agrarian')
	
//wizard archetype
//1st mark wizard
event.create('mark_elementalist').displayName('I. Mark of the Elementalist')
event.create('mark_tamer').displayName('I. Mark of the Tamer')
event.create('mark_mage').displayName('I. Mark of the Mage')
event.create('mark_healer').displayName('I. Mark of the Healer')
event.create('mark_battlemage').displayName('I. Mark of the Battlemage')
//2nd mark wizard
event.create('mark_sorcerer').displayName('II. Mark of the Sorcerer')
event.create('mark_summoner').displayName('II. Mark of the Summoner')
event.create('mark_warlock').displayName('II. Mark of the Warlock')
event.create('mark_spiritualist').displayName('II. Mark of the Spiritualist')
event.create('mark_spellblade').displayName('II. Mark of the Spellblade')
//3rd mark wizard
event.create('mark_masterlementalist').displayName('III. Mark of the Master Elementalist')
event.create('mark_beastmaster').displayName('III. Mark of the Beastmaster')
event.create('mark_archmage').displayName('III. Mark of the Archmage')
event.create('mark_shaman').displayName('III. Mark of the Shaman')
event.create('mark_warmage').displayName('III. Mark of the Warmage')

//rogue archetype
//1st mark rogue
event.create('mark_archer').displayName('I. Mark of the Archer')
event.create('mark_shadow').displayName('I. Mark of the Shadow')
event.create('mark_pirate').displayName('I. Mark of the Pirate')
event.create('mark_pitfighter').displayName('I. Mark of the Pitfighter')
event.create('mark_thief').displayName('I. Mark of the Thief')
//2nd mark rogue
event.create('mark_arbalester').displayName('II. Mark of the Arbalester')
event.create('mark_assasin').displayName('II. Mark of the Assasin')
event.create('mark_corsair').displayName('II. Mark of the Corsair')
event.create('mark_gladiator').displayName('II. Mark of the Gladiator')
event.create('mark_bandit').displayName('II. Mark of the Bandit')
//3rd mark rogue
event.create('mark_sniper').displayName('III. Mark of the Sniper')
event.create('mark_nightblade').displayName('III. Mark of the Nightblade')
event.create('mark_captain').displayName('III. Mark of the Captain')
event.create('mark_underdog').displayName('III. Mark of the Underdog')
event.create('mark_brigand').displayName('III. Mark of the Brigand')

//arrows
event.create('arrow_down').displayName('Green Arrow Down Icon')
event.create('arrow_down_yellow').displayName('Yellow Arrow Down Icon')

event.create('arrow_up').displayName('Arrow Up Icon')
event.create('arrow_up_yellow').displayName('Yellow Arrow Up Icon')

event.create('arrow_left').displayName('Arrow Left Icon')
event.create('arrow_left_yellow').displayName('Yellow Arrow Left Icon')

event.create('arrow_45').displayName('Green Arrow 45 Icon')
event.create('arrow_45_yellow').displayName('Yellow Arrow 45 Icon')

event.create('arrow_right').displayName('Arrow Right Icon')
event.create('arrow_right_yellow').displayName('Yellow Arrow Right Icon')

//coins
event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests')
event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired through quests')
event.create('monster_coin').displayName('Monster Coin')
event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired through completing Nether chapter quests')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('emerald_nugget').displayName('Emerald Nugget')
  
event.create('coin_01').displayName('Coin').tooltip('Acquired by selling valuable materials')
event.create('coin_02').displayName('Couple of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_03').displayName('Stack of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_04').displayName('Pile of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_05').displayName('Dozen of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_06').displayName('Bunch of Coins').tooltip('Acquired by selling valuable materials')

event.create('coin_q_1').displayName('Quest Coin').tooltip('Acquired by doing quests')
event.create('coin_q_2').displayName('Quest Coin').tooltip('Acquired by doing quests')

event.create('defence').displayName('defence')
event.create('armorpen').displayName('armorpen')
event.create('backstab').displayName('backstab')
event.create('parry').displayName('parry')
event.create('dualwield').displayName('dualwield')

event.create('star').displayName('Star').glow(true)
event.create('medal').displayName('Medal').glow(true)
event.create('heart').displayName('Heart')
event.create('heart-half').displayName('Half Heart')
event.create('caution').displayName('Caution')
event.create('chest').displayName('Chest')
event.create('chest2').displayName('Chest 2')
event.create('fire').displayName('Fire')
event.create('forbid').displayName('Stop')
event.create('help').displayName('Help')
event.create('key').displayName('Key')
event.create('key_01d').displayName('Old Key')
event.create('lightning').displayName('Lightning')
event.create('lock').displayName('Lock')
event.create('lock-2').displayName('Lock Unlocked')
event.create('mark').displayName('Mark')
event.create('skull').displayName('Skull')
event.create('skull2').displayName('Skull')
event.create('skull3').displayName('Skull')
event.create('ace').displayName('Ace of Spades')
event.create('armour').displayName('Kit')
event.create('bleed').displayName('Bleed')
event.create('book2').displayName('Book')
event.create('book3').displayName('Book')
event.create('book4').displayName('Book')
event.create('book_02f').displayName('Book')
event.create('book_04g').displayName('Book')
event.create('campfire').displayName('Fake Campfire')
event.create('dice').displayName('Dice')
event.create('letter').displayName('Letter')
event.create('magnifier').displayName('Magnifying Glass')
event.create('manuscript').displayName('Manuscript')
event.create('map').displayName('Treasure Map')
event.create('mine').displayName('Mine')
event.create('ruby').displayName('Fake Ruby')
event.create('scroll').displayName('Scroll')
event.create('scroll2').displayName('Scroll')
event.create('scroll_01c').displayName('Scroll')
event.create('magicscroll').displayName('Magic Scroll')
event.create('slash').displayName('Slashing')
event.create('spellbook_01d').displayName('Spellbook')
event.create('spyglass').displayName('Spyglass')
event.create('levelup').displayName('Level Up')
event.create('shield').displayName('Shield')
event.create('ring').displayName('Ring')
event.create('amulet').displayName('Amulet')
event.create('rucksack').displayName('Rucksack')
event.create('bomb').displayName('Bomb')
event.create('dodge').displayName('Dodge')
event.create('scaling').displayName('Scaling')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})