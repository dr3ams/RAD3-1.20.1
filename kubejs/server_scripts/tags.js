ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	
	event.removeAllTagsFrom('skilltree:copper_nugget')
	
	
	event.get('rad3:mortars')
		.add('kubejs:stone_mortar')
		.add('kubejs:iron_mortar')
		 
	event.get('farmersdelight:tools/pickaxes')
	.add('minecraft:iron_pickaxe')
	.add('minecraft:golden_pickaxe')
	.add('minecraft:diamond_pickaxe')
	.add('minecraft:netherite_pickaxe')
	
	event.get('forge:ash').add('bonfires:ash_pile')
})