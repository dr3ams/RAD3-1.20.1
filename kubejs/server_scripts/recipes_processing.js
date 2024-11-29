// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('recipes_processing loading...')
ServerEvents.recipes(event => {
		

	event.remove({output: 'minecraft:blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
    'III',
    'IFI',
	'BBB'
	], {
    I: 'embers:iron_plate',
	F: "minecraft:furnace",
	B: 'minecraft:bricks'
	})	
	
	event.shaped('kubejs:stone_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'minecraft:flint'
	})
	
	event.shaped('kubejs:iron_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'minecraft:iron_ingot'
	})
	
	event.shapeless('minecraft:flint', [
	'minecraft:gravel',
	'#rad3:mortars'
	]).damageIngredient('#rad3:mortars')
	
	

	
	
	event.remove({output: 'minecraft:emerald', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:diamond', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:redstone', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:lapis_lazuli', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:netherite_scrap', type: 'minecraft:smelting'})
	
	event.remove({id: 'minecraft:bread'})
	
	
})