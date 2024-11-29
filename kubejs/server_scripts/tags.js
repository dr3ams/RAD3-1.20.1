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
	
	event.get('rad3:coin_quest')
		.add('kubejs:copper_coin')
		.add('kubejs:iron_coin')
		.add('kubejs:gold_coin')
		.add('kubejs:diamond_coin')
		
	event.get('rad3:coin_dimension')
		.add('kubejs:coin_aether')
		.add('kubejs:coin_undergarden')	
		.add('kubejs:coin_twilight')
		.add('kubejs:coin_bumblezone')	
		.add('kubejs:coin_icaria')
		.add('kubejs:coin_end')	
		.add('kubejs:coin_nether')
		
	event.get('rad3:coin_task')
		.add('kubejs:coin_engineer')
		.add('kubejs:coin_food')	
		.add('kubejs:coin_gathering')
		.add('kubejs:coin_exploration')
		.add('kubejs:coin_gear')
		.add('kubejs:coin_magic')
		.add('kubejs:coin_monster')
		
	event.get('rad3:coin_loot')
		.add('kubejs:coin_dungeon')
		.add('kubejs:coin_exploration')
		.add('kubejs:coin_gear')		
})