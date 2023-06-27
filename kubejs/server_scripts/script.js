// priority: 0

console.info('New recipes script is loading...')

ServerEvents.recipes(event => {
	// Change recipes here
	
	  event.remove({output: 'oreberriesreplanted:iron_oreberry_bush'})
  event.remove({output: 'oreberriesreplanted:gold_oreberry_bush'})
  event.remove({output: 'oreberriesreplanted:copper_oreberry_bush'})
  event.remove({output: 'oreberriesreplanted:zinc_oreberry_bush'})

  event.remove({output: 'waystones:waystone'})
  event.remove({output: 'waystones:mossy_waystone'})
  event.remove({output: 'waystones:sandy_waystone'})
  event.remove({output: 'waystones:sharestone'})
  event.remove({output: 'waystones:bound_scroll'})
  event.remove({output: 'waystones:warp_scroll'})
  event.remove({output: 'waystones:warp_plate'})
  event.remove({output: 'waystones:warp_stone'})

  event.remove({output: 'gag:time_sand_pouch'})
  event.remove({output: 'gag:escape_rope'})
  event.remove({output: 'gag:hearthstone'})
  event.remove({output: 'gag:sacred_salt'})
  event.remove({output: 'gag:sacred_salve'})
  event.remove({output: 'gag:sacred_balm'})
  event.remove({output: 'villagertools:cure'})
  event.remove({output: 'villagertools:badge'})
  event.remove({output: 'villagertools:key'})
  event.remove({output: 'villagertools:lure'})
  event.remove({output: 'villagertools:gears'})
  event.remove({output: 'villagertools:bribe'})
  event.remove({output: 'villagertools:restock'})
  event.remove({output: 'villagertools:forget'})
  event.remove({output: 'villagertools:contract'})
  event.remove({output: 'villagertools:darkness'})
  event.remove({output: 'villagertools:guard'})
  event.remove({output: 'villagertools:knowledge'})
  event.remove({mod: 'gateways'})

  event.remove({output: 'greekfantasy:golden_sapling'})
  event.remove({output: 'greekfantasy:winged_sandals'})

	event.remove({output: 'usefulhats:wing_helmet'})
	event.remove({output: 'usefulhats:straw_hat'})
	event.remove({output: 'usefulhats:shulker_helmet'})
	event.remove({output: 'usefulhats:chopping_hat'})
	event.remove({output: 'usefulhats:ender_helmet'})
	event.remove({output: 'usefulhats:halo'})
	event.remove({output: 'usefulhats:mining_hat'})
	event.remove({output: 'usefulhats:lucky_hat'})

	event.shaped('minecraft:diamond', [
    'DDD',
    'DDD',
    'DDD'
	], {
    D: 'kubejs:diamond_nugget'
	})
	
	event.shaped('minecraft:emerald', [
    'EEE',
    'EEE',
    'EEE'
	], {
    E: 'kubejs:emerald_nugget'
	})
	
	event.shaped('kubejs:coin_02', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_01'
	})
	event.shapeless('9x kubejs:coin_01', ['kubejs:coin_02'])
	
	event.shaped('kubejs:coin_03', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_02'
	})
	event.shapeless('9x kubejs:coin_02', ['kubejs:coin_03'])
	
	
	event.shaped('kubejs:coin_04', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_03'
	})
	event.shapeless('9x kubejs:coin_03', ['kubejs:coin_04'])
	
	event.shaped('kubejs:coin_05', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_04'
	})
	event.shapeless('9x kubejs:coin_04', ['kubejs:coin_05'])
	
	event.shaped('kubejs:coin_06', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_05'
	})
	event.shapeless('9x kubejs:coin_05', ['kubejs:coin_06'])	


})

	MoreJSEvents.wandererTrades((event) => {
// change to "MoreJSEvents.wandererTrades" in 1.19

    const trade1 = event.addTrade(1, 'minecraft:lapis_ore', 'kubejs:coin_01');
	trade1.maxUses(1);
	
	const trade2 = event.addTrade(1, 'minecraft:redstone_ore', 'kubejs:coin_01');
	const trade3 = event.addTrade(1, 'minecraft:gold_ore', 'kubejs:coin_01');
	const trade4 = event.addTrade(1, 'undergarden:depthrock_gold_ore', 'kubejs:coin_01');
	const trade5 = event.addTrade(1, 'randomite:randomite_ore', 'kubejs:coin_01');
	const trade6 = event.addTrade(1, 'minecraft:deepslate_emerald_ore', 'kubejs:coin_01');
	const trade7 = event.addTrade(1, 'minecraft:diamond_ore', 'kubejs:coin_01');
	const trade8 = event.addTrade(1, 'undergarden:depthrock_diamond_ore', 'kubejs:coin_01');

    // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
    // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
	});

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})