// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

/* event.create('roguefp').displayName('Rogue Fingerprint').tooltip('Used to choose your Specialization path')
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
event.create('mark_brigand').displayName('III. Mark of the Brigand')*/

//arrows



//////////////////////end
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'RAD 3'; });