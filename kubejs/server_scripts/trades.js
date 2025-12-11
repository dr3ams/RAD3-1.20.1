MoreJSEvents.wandererTrades((event) => {
    
        const trade1 = event.addTrade(1, 'minecraft:lapis_ore', 'kubejs:coin_01');
        trade1.maxUses(1);
        
        const trade2 = event.addTrade(1, 'minecraft:redstone_ore', 'kubejs:coin_01');
		trade2.maxUses(1);
		
        const trade3 = event.addTrade(1, 'minecraft:gold_ore', 'kubejs:coin_01');
		trade3.maxUses(1);
        const trade4 = event.addTrade(1, 'undergarden:depthrock_gold_ore', 'kubejs:coin_01');
		trade4.maxUses(1);
        //const trade5 = event.addTrade(1, 'randomite:randomite_ore', 'kubejs:coin_01');
		//trade5.maxUses(1);
        const trade6 = event.addTrade(1, 'minecraft:deepslate_emerald_ore', 'kubejs:coin_01');
		trade6.maxUses(1);
        const trade7 = event.addTrade(1, 'minecraft:diamond_ore', 'kubejs:coin_01');
		trade7.maxUses(1);
    
        // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
        // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
		
		// We can use an array with two values when we want to have two inputs for the trade
		//event.addTrade(2,
        //[Item.of("minecraft:diamond", 10), "minecraft:emerald"],
        //"minecraft:stick"
		
		// This will randomly pick the cost between 3 and 10
		//event.addTrade(2, TradeItem.of("minecraft:diamond", 3, 10), "minecraft:stick")
		
		
////END	
})


MoreJSEvents.villagerTrades(event => {
	
/////////////////////
///////////////////// LEVEL 1 TRADES
/////////////////////

	//We also can use TradeItem if we want to have a random range for the costs.
    //This will randomly pick the cost between 24 and 48

    const trade_catacombs = VillagerUtils.createStructureMapTrade("minecraft:emerald", "betterarcheology:catacombs").displayName("Nearest Catacombs")
    event.addTrade("minecraft:cartographer", 1, trade_catacombs)
	
	const trade_archeologist_camp = VillagerUtils.createStructureMapTrade("minecraft:emerald", "betterarcheology:archeologist_camp_grassy").displayName("Nearest Archeologist Camp")
    event.addTrade("minecraft:cartographer", 1, trade_archeologist_camp)
	
	const trade_small_dungeon = VillagerUtils.createStructureMapTrade("minecraft:emerald", "betterdungeons:small_dungeon").displayName("Nearest Small Dungeon")
    event.addTrade("minecraft:cartographer", 1, trade_small_dungeon)

    const trade_village_jungle = VillagerUtils.createStructureMapTrade("minecraft:emerald", "nova_structures:village_jungle")
    event.addTrade("minecraft:cartographer", 1, trade_village_jungle)
	
	const trade_village_swamp = VillagerUtils.createStructureMapTrade("minecraft:emerald", "nova_structures:village_swamp")
    event.addTrade("minecraft:cartographer", 1, trade_village_swamp)
	
	const trade_merchant_campsite = VillagerUtils.createStructureMapTrade(TradeItem.of("minecraft:emerald", 5, 9), "dungeons_arise:merchant_campsite")
    event.addTrade("minecraft:cartographer", 1, trade_merchant_campsite)
			
	//We can also use # to search for a tag. This works for structures and biomes.
	//When creating a map trade we can further modify it. You can find possible map markers here
    const trade_forest = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#minecraft:is_forest")
        .displayName("Nearest Forest")
        .marker("banner_green")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 1, trade_forest)
	
	const trade_desert = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "minecraft:desert")
        .displayName("Desert")
        .marker("banner_yellow")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 1, trade_desert)


/////////////////////
///////////////////// LEVEL 2 TRADES
/////////////////////
	
   	const trade_illager_fort = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "minecraft:paper"],
        "dungeons_arise:illager_fort"
    )
	event.addTrade("minecraft:cartographer", 2, trade_illager_fort)
	
	const trade_illager_campsite = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:illager_campsite"
    )
	event.addTrade("minecraft:cartographer", 2, trade_illager_campsite)
	
	const trade_bandit_village = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:bandit_village"
    )
	event.addTrade("minecraft:cartographer", 2, trade_bandit_village)
	
	const trade_pillager_camp = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "takesapillage:pillager_camp"
    )
	event.addTrade("minecraft:cartographer", 2, trade_pillager_camp)

    const trade_ati_underground = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#ati_underground")
        .displayName("Nearest Underground Point of Interest")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_ati_underground)

    const trade_ati_small = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#ati_small")
        .displayName("Nearest Point of Interest")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_ati_small)

    const trade_town = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#towns_and_towers:town")
        .displayName("Nearest Town")
        .marker("banner_brown")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_town)
	
/////////////////////	
///////////////////// LEVEL 3 TRADES	
/////////////////////

    const trade_ati_medium = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#ati_medium")
        .displayName("Nearest Point of Interest")
        .marker("banner_cyan")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_ati_medium)

    const trade_desert_pyramid = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#minecraft:desert_pyramid")
        .displayName("Desert Pyramid")
        .marker("banner_orange")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_desert_pyramid)
	
	const trade_ancient_city = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#minecraft:ancient_city")
        .displayName("Nearest Ancinet City")
        .marker("banner_black")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_ancient_city)

    const trade_village = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "#minecraft:village")
        .displayName("Nearest Village")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_village)

	//We can use an array with two values when we want to have two inputs for the trade
	const trade_stronghold = VillagerUtils.createStructureMapTrade(["minecraft:diamond", "minecraft:paper"],"minecraft:stronghold")
    event.addTrade("minecraft:cartographer", 3, trade_stronghold)
	
	const trade_jungle = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "minecraft:jungle")
        .displayName("Jungle")
        .marker("banner_green")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 1, trade_jungle)

	const trade_sunflower_plains = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "minecraft:sunflower_plains")
        .displayName("Sunflower Plains")
        .marker("banner_yellow")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 1, trade_sunflower_plains)	
	
	const trade_dark_forest = VillagerUtils.createBiomeMapTrade("5x minecraft:emerald", "minecraft:dark_forest")
        .displayName("Dark Forest")
        .marker("banner_green")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 1, trade_dark_forest)

/////////////////////
///////////////////// LEVEL 4 TRADES	
/////////////////////

	const trade_monster_maze = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_enhanced:monster_maze"
    )
	event.addTrade("minecraft:cartographer", 4, trade_monster_maze)

	const trade_mushroom_village = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:mushroom_village"
    )
	event.addTrade("minecraft:cartographer", 4, trade_mushroom_village)

	const trade_creeping_crypt = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "nova_structures:creeping_crypt"
    )
	event.addTrade("minecraft:cartographer", 4, trade_creeping_crypt)
	
	const trade_plague_asylum = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:plague_asylum"
    )
	event.addTrade("minecraft:cartographer", 4, trade_plague_asylum)
	
	const trade_foundry = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:foundry"
    )
	event.addTrade("minecraft:cartographer", 4, trade_foundry)

/////////////////////
///////////////////// LEVEL 5 TRADES
/////////////////////	

	const trade_scorched_mines = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:scorched_mines"
    )
	event.addTrade("minecraft:cartographer", 5, trade_scorched_mines)

	const trade_end_city = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "minecraft:end_city"
    )
	event.addTrade("minecraft:cartographer", 5, trade_end_city)

	const trade_ancient_vessel = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "ati_structures:ancient_vessel"
    )
	event.addTrade("minecraft:cartographer", 5, trade_ancient_vessel)

	const trade_warden_monument = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "ati_structures:warden_monument"
    )
	event.addTrade("minecraft:cartographer", 5, trade_warden_monument)

	const trade_lich_prison = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "graveyard:lich_prison"
    )
	event.addTrade("minecraft:cartographer", 5, trade_lich_prison)
	
	const trade_mining_system = VillagerUtils.createStructureMapTrade(
        ["minecraft:diamond", "8x minecraft:paper"],
        "dungeons_arise:mining_system"
    )
	event.addTrade("minecraft:cartographer", 5, trade_mining_system)
	
	
	
	
///END	
})