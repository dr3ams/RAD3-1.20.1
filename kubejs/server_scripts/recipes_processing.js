// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('recipes_processing loading...')
ServerEvents.recipes(event => {
		
	event.shaped('kubejs:hammer_iron', [
    'III',
    'III',
	' S '
	], {
    I: 'minecraft:iron_ingot',
	S: "minecraft:stick"
	})

	event.shaped('create:iron_sheet', [
    'H  ',
    'II ',
	'II '
	], {
    I: 'minecraft:iron_ingot',
	H: "kubejs:hammer_iron"
	}).damageIngredient('kubejs:hammer_iron')

	event.remove({output: 'minecraft:blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
    'III',
    'IFI',
	'BBB'
	], {
    I: 'create:iron_sheet',
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
	B: 'create:iron_sheet'
	})
	
	event.shapeless('minecraft:flint', [
	'minecraft:gravel',
	'#rad3:mortars'
	]).damageIngredient('#rad3:mortars')
	
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.shaped('create:andesite_alloy', [
	'ZA ',
	'AZ ',
	'   '
	], {
	Z: 'create:zinc_ingot',
	A: 'minecraft:andesite'
	})
	
		
	event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
	event.smelting('7x minecraft:iron_nugget', 'minecraft:raw_iron')
	event.remove({output: 'create:zinc_ingot', type: 'minecraft:smelting'})
	//event.smelting('7x create:zinc_nugget', 'create:raw_zinc')
	
	event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:smelting'})
	event.smelting('7x minecraft:gold_nugget', 'minecraft:raw_gold')
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:smelting'})
	event.smelting('7x create:copper_nugget', 'minecraft:raw_copper')
	
	event.remove({output: 'minecraft:emerald', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:diamond', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:redstone', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:lapis_lazuli', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:netherite_scrap', type: 'minecraft:smelting'})
	
	event.remove({id: 'minecraft:bread'})
	//event.remove({id: 'vintagedelight:oat_bread'})
	
	event.replaceInput({}, 'immersive_aircraft:propeller', 'create:propeller');
	
})