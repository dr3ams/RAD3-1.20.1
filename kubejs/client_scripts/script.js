// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
	event.hide('greekfantasy:wooden_spear')
event.hide('greekfantasy:stone_spear')
event.hide('greekfantasy:iron_spear')

  event.hide('greekfantasy:golden_sapling')
  event.hide('greekfantasy:winged_sandals')
})

ClientEvents.lang('en_us', event => { event.add("jade.modName.kubejs", "RAD 3"); });