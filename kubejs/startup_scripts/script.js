// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
//processing
//event.create('hammer_iron', 'pickaxe').tier('iron').maxDamage(250)
event.create('wooden_form').displayName('Wooden Form').maxDamage(64)
event.create('stone_mortar').displayName('Stone Mortar').maxDamage(64)
event.create('iron_mortar').displayName('Iron Mortar').maxDamage(220)
event.create('sifter').displayName('Sifter').maxDamage(1550)

event.create('rick').displayName('Pet Coal').unstackable().burnTime(60000).rarity('EPIC').tooltip('Named Rick')	

//coins
//quest coins
event.create('copper_coin').displayName('Copper Coin').rarity('Uncommon')
event.create('iron_coin').displayName('Iron Coin').rarity('Uncommon')
event.create('gold_coin').displayName('Gold Coin').rarity('Rare')
event.create('diamond_coin').displayName('Diamond Coin').rarity('Epic')
//dimensional coins
event.create('coin_aether').displayName('Aether Coin').rarity('Rare')
event.create('coin_undergarden').displayName('Undergarden Coin').rarity('Rare')
event.create('coin_twilight').displayName('Twilight Coin').rarity('Rare')
event.create('coin_bumblezone').displayName('Bumblezone Coin').rarity('Rare')
event.create('coin_icaria').displayName('Icaria Coin').rarity('Rare')
event.create('coin_end').displayName('End Coin').rarity('Uncommon')
event.create('coin_nether').displayName('Nether Coin').rarity('Uncommon')
//task coins
event.create('coin_engineer').displayName('Engineer`s Coin')
event.create('coin_food').displayName('Food Coin')
event.create('coin_gathering').displayName('Gathering Coin')
event.create('coin_exploration').displayName('Exploration Coin')
event.create('coin_gear').displayName('Gear Coin')
event.create('coin_magic').displayName('Magic Coin')
event.create('coin_monster').displayName('Monster Coin')
//loot coin
event.create('coin_dungeon').displayName('Dungeon Coin')
//??? coin
event.create('coin_black').displayName('Black Market Coin')
//minecolony coin
event.create('proofofwork').displayName('Proof Of Work').rarity('Rare')
//vouchers
event.create('voucher_weapon').displayName('Weapon Exchange Voucher').rarity('Rare')
event.create('voucher_weapon_fragment').displayName('Weapon Exchange Voucher Fragment').rarity('Uncommon')
event.create('voucher_resource').displayName('Resource Exchange Voucher').rarity('Uncommon')
//essences
event.create('essence_monster').displayName('Monster Essence').rarity('Uncommon')
event.create('essence_monster_raw').displayName('Raw Monster Essence').rarity('Uncommon')
event.create('essence_earth').displayName('Earth Essence').rarity('Uncommon')

event.create('key_magic').displayName('Magic Vault Key').rarity('Rare')

event.create('dust_experience').displayName('Experience Dust').tooltip('Not for eating')
event.create('dust_alchemical').displayName('Alchemy Powder').tooltip('Not for experiments')
event.create('scraps').displayName('Scraps')

event.create('portable_dissolver').displayName('Portable Experience Dissolver').maxDamage(480).rarity('Rare')
event.create('portable_transmutator').displayName('Portable Transmutation Device').maxDamage(480).rarity('Rare')
event.create('portable_salvager').displayName('Portable Mini Salvager').maxDamage(480).rarity('Rare')

event.create('scroll_exp').displayName('Experience Scroll')

event.create('spawnercore').displayName('Spawner Core').rarity('Uncommon')

//exchange coins
event.create('coin_01').displayName('Coin').tooltip('Acquired by selling valuable materials')
event.create('coin_02').displayName('Couple of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_03').displayName('Stack of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_04').displayName('Pile of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_05').displayName('Dozen of Coins').tooltip('Acquired by selling valuable materials')
event.create('coin_06').displayName('Bunch of Coins').tooltip('Acquired by selling valuable materials')


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

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'RAD 3'; });
