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
		
		const mapfragment = event.addTrade(1, '7x kubejs:map_fragment', 'kubejs:map_scroll_structure');
		mapfragment.maxUses(2);
		
		const mapfragment2 = event.addTrade(1, '5x kubejs:map_fragment', 'kubejs:map_scroll_biome');
		mapfragment2.maxUses(2);
    
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
//BUTCHER

	event.removeVanillaTrades("minecraft:butcher", 4)
	event.removeVanillaTrades("minecraft:butcher", 5)
	
	event.addTrade("minecraft:butcher", 3, Item.of("minecraft:emerald", 2), "farmersdelight:dog_food")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	event.addTrade("minecraft:butcher", 3, Item.of("minecraft:emerald", 3), "farmersdelight:noodle_soup")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 5
	})
	event.addTrade("minecraft:butcher", 3, Item.of("minecraft:emerald", 3), "farmersdelight:barbecue_stick")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	event.addTrade("minecraft:butcher", 3, Item.of("minecraft:emerald", 3), "farmersdelight:chicken_sandwich")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 5
	})
	event.addTrade("minecraft:butcher", 3, Item.of("minecraft:emerald", 4), "farmersdelight:hamburger")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 5
	})
	
	event.addTrade("minecraft:butcher", 4, Item.of("minecraft:emerald", 5), "farmersdelight:bacon_and_eggs")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 10
	})
	event.addTrade("minecraft:butcher", 4, Item.of("minecraft:emerald", 6), "farmersdelight:pasta_with_mutton_chop")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:butcher", 4, Item.of("minecraft:emerald", 6), "farmersdelight:pasta_with_meatballs")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:butcher", 4, Item.of("minecraft:emerald", 6), "farmersdelight:steak_and_potatoes")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:butcher", 4, Item.of("minecraft:emerald", 7), "farmersdelight:roasted_mutton_chops")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 20
	})
	
	event.addTrade("minecraft:butcher", 5, Item.of("minecraft:emerald", 9), "fruitsdelight:orange_marinated_pork")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:butcher", 5, Item.of("minecraft:emerald", 9), "fruitsdelight:lychee_chicken")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:butcher", 5, Item.of("minecraft:emerald", 12), "farmersdelight:shepherds_pie_block")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:butcher", 5, Item.of("minecraft:emerald", 14), "farmersdelight:honey_glazed_ham_block")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:butcher", 5, Item.of("minecraft:emerald", 14), "farmersdelight:roast_chicken_block")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	

//CARTOGRAPHER	
	
/////////////////////
///////////////////// LEVEL 2 TRADES
/////////////////////

	//We also can use TradeItem if we want to have a random range for the costs.
    //This will randomly pick the cost between 24 and 48

    const trade_catacombs = VillagerUtils.createStructureMapTrade(Item.of("kubejs:map_fragment", 5), "betterarcheology:catacombs").displayName("Nearest Catacombs")
    event.addTrade("minecraft:cartographer", 2, trade_catacombs)
		 .transform((offer, entity, random) => {
            offer.maxUses = 2
			offer.villagerExperience = 25
        })
	
	const trade_archeologist_camp = VillagerUtils.createStructureMapTrade(Item.of("kubejs:map_fragment", 5), "betterarcheology:archeologist_camp_grassy").displayName("Nearest Archeologist Camp")
    event.addTrade("minecraft:cartographer", 2, trade_archeologist_camp)
		 .transform((offer, entity, random) => {
            offer.maxUses = 2
			offer.villagerExperience = 25
        })
	
	const trade_small_dungeon = VillagerUtils.createStructureMapTrade(Item.of("kubejs:map_fragment", 3), "betterdungeons:small_dungeon").displayName("Nearest Small Dungeon")
    event.addTrade("minecraft:cartographer", 2, trade_small_dungeon)
		 .transform((offer, entity, random) => {
            offer.maxUses = 5
			offer.villagerExperience = 10
        })
		
	const trade_merchant_campsite = VillagerUtils.createStructureMapTrade(TradeItem.of("kubejs:map_fragment", 5, 9), "dungeons_arise:merchant_campsite")
    event.addTrade("minecraft:cartographer", 2, trade_merchant_campsite)
		 .transform((offer, entity, random) => {
            offer.maxUses = 1
			offer.villagerExperience = 25
        })
					
	//We can also use # to search for a tag. This works for structures and biomes.
	//When creating a map trade we can further modify it. You can find possible map markers here
	
	const trade_desert = VillagerUtils.createBiomeMapTrade("kubejs:map_fragment", "minecraft:desert")
        .displayName("Desert")
        .marker("banner_yellow")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_desert)
		 .transform((offer, entity, random) => {
            offer.maxUses = 3
			offer.villagerExperience = 25
        })
					

    const trade_ati_underground = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 7), "#ati_underground")
        .displayName("Nearest Underground Point of Interest")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_ati_underground)
		
    const trade_ati_small = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 5), "#ati_small")
        .displayName("Nearest Point of Interest")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_ati_small)
		
    const trade_town = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 8), "#towns_and_towers:town")
        .displayName("Nearest Town")
        .marker("banner_brown")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 2, trade_town)
			
/////////////////////	
///////////////////// LEVEL 3 TRADES	
/////////////////////
		
    const trade_ati_medium = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 5), "#ati_medium")
        .displayName("Nearest Point of Interest")
        .marker("banner_cyan")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_ati_medium)
		
    const trade_desert_pyramid = VillagerUtils.createBiomeMapTrade("kubejs:map_scroll_structure", "#minecraft:desert_pyramid")
        .displayName("Desert Pyramid")
        .marker("banner_orange")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_desert_pyramid)
		 .transform((offer, entity, random) => {
            offer.maxUses = 1
			offer.villagerExperience = 25
        })
			
	const trade_ancient_city = VillagerUtils.createBiomeMapTrade("kubejs:map_scroll_structure", "#minecraft:ancient_city")
        .displayName("Nearest Ancinet City")
        .marker("banner_black")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_ancient_city)
		 .transform((offer, entity, random) => {
            offer.maxUses = 1
			offer.villagerExperience = 25
        })
		
    const trade_village = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 5), "#minecraft:village")
        .displayName("Nearest Village")
        .marker("banner_blue")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_village)
		
	//We can use an array with two values when we want to have two inputs for the trade
	const trade_stronghold = VillagerUtils.createStructureMapTrade([Item.of("minecraft:diamond", 20), Item.of("kubejs:map_scroll_structure", 2)],"minecraft:stronghold")
    event.addTrade("minecraft:cartographer", 3, trade_stronghold)
		 .transform((offer, entity, random) => {
            offer.maxUses = 1
			offer.villagerExperience = 45
        })
			
	const trade_jungle = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 5), "minecraft:jungle")
        .displayName("Jungle")
        .marker("banner_green")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_jungle)
		 .transform((offer, entity, random) => {
            offer.maxUses = 1
			offer.villagerExperience = 35
        })
			
	const trade_dark_forest = VillagerUtils.createBiomeMapTrade(Item.of("kubejs:map_fragment", 5), "minecraft:dark_forest")
        .displayName("Dark Forest")
        .marker("banner_green")
        .noPreview()
        .scale(4)
    event.addTrade("minecraft:cartographer", 3, trade_dark_forest)
		 .transform((offer, entity, random) => {
            offer.maxUses = 3
			offer.villagerExperience = 35
        })
		
/////////////////////
///////////////////// LEVEL 4 TRADES	
/////////////////////

	const trade_monster_maze = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 5), Item.of("kubejs:map_fragment", 5)],
        "dungeons_enhanced:monster_maze"
    )
	event.addTrade("minecraft:cartographer", 4, trade_monster_maze)

	const trade_creeping_crypt = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 5), "kubejs:map_scroll_structure"],
        "nova_structures:creeping_crypt"
    )
	event.addTrade("minecraft:cartographer", 4, trade_creeping_crypt)
	
	const trade_plague_asylum = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 5), "kubejs:map_scroll_structure"],
        "dungeons_arise:plague_asylum"
    )
	event.addTrade("minecraft:cartographer", 4, trade_plague_asylum)
	
	const trade_foundry = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:emerald", 20), "kubejs:map_scroll_structure"],
        "dungeons_arise:foundry"
    )
	event.addTrade("minecraft:cartographer", 4, trade_foundry)

/////////////////////
///////////////////// LEVEL 5 TRADES
/////////////////////	

	const trade_scorched_mines = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 5), "kubejs:map_scroll_structure"],
        "dungeons_arise:scorched_mines"
    )
	event.addTrade("minecraft:cartographer", 5, trade_scorched_mines)

	const trade_ancient_vessel = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:emerald", 10), Item.of("kubejs:map_fragment", 5)],
        "ati_structures:ancient_vessel"
    )
	event.addTrade("minecraft:cartographer", 5, trade_ancient_vessel)

	const trade_warden_monument = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:emerald", 10), Item.of("kubejs:map_fragment", 5)],
        "ati_structures:warden_monument"
    )
	event.addTrade("minecraft:cartographer", 5, trade_warden_monument)

	const trade_lich_prison = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 3), "kubejs:map_scroll_structure"],
        "graveyard:lich_prison"
    )
	event.addTrade("minecraft:cartographer", 5, trade_lich_prison)
	
	const trade_mining_system = VillagerUtils.createStructureMapTrade(
        [Item.of("minecraft:diamond", 3), "kubejs:map_scroll_structure"],
        "dungeons_arise:mining_system"
    )
	event.addTrade("minecraft:cartographer", 5, trade_mining_system)

//FARMER

	event.removeVanillaTrades("minecraft:farmer", 3)
	event.removeVanillaTrades("minecraft:farmer", 4)
	event.removeVanillaTrades("minecraft:farmer", 5)
	
	event.addTrade("minecraft:farmer", 2, Item.of("minecraft:melon", 4), "minecraft:emerald") //melon trade lowered to apprentice to make room for meals
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 10
	})

	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", Item.of("supplementaries:pancake", 3))
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 10
	})
	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", "minecraft:cake") //cake trade lowered to journeyman
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", "farmersdelight:mixed_salad")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 10
	})
	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", "farmersdelight:fruit_salad")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 10
	})
	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", "farmersdelight:apple_pie")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:farmer", 3, "minecraft:emerald", "farmersdelight:sweet_berry_cheesecake")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 2), "farmersdelight:horse_feed")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 3), "farmersdelight:pumpkin_soup")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 3), "farmersdelight:fried_rice")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 3), "farmersdelight:ratatouille")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 4), "fruitsdelight:mangosteen_cake")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 5), "fruitsdelight:fig_pudding")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 20
	})
	
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 6), "farmersdelight:mushroom_rice")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 7), "farmersdelight:vegetable_noodles")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 8), "farmersdelight:stuffed_pumpkin_block")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 10), "fruitsdelight:pineapple_fried_rice")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	
//FISHERMAN
	
	event.removeVanillaTrades("minecraft:fisherman", 4)
	event.removeVanillaTrades("minecraft:fisherman", 5)
	
	event.addTrade("minecraft:fisherman", 2, Item.of("quark:crab_leg", 4), "minecraft:emerald") //several trades lowered to apprentice/journeyman to make room for meals
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 10
	})
	event.addTrade("minecraft:fisherman", 2, Item.of("hmag:savagefang_meat", 3), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	
	event.addTrade("minecraft:fisherman", 3, Item.of("minecraft:tropical_fish", 6), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:fisherman", 3, Item.of("minecraft:pufferfish", 4), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	
	event.addTrade("minecraft:fisherman", 4, "minecraft:emerald", "farmersdelight:fish_stew")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:fisherman", 4, Item.of("minecraft:emerald", 2), "farmersdelight:baked_cod_stew")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:fisherman", 4, Item.of("minecraft:emerald", 3), "miners_delight:takoyaki")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 15
	})
	event.addTrade("minecraft:fisherman", 4, Item.of("minecraft:emerald", 4), "farmersdelight:grilled_salmon")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 15
	})
	
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 5), "miners_delight:glow_ink_pasta")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 5), "farmersdelight:squid_ink_pasta")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 7), "oceansdelight:cabbage_wrapped_elder_guardian")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
	})
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 8), "farmersdelight:rice_roll_medley_block")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 8), "miners_delight:stuffed_squid")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
	})
	event.addTrade("minecraft:fisherman", 5, Item.of("minecraft:emerald", 10), "oceansdelight:guardian_soup")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})
	
//LEATHERWORKER

	event.addTrade("minecraft:leatherworker", 1, Item.of("minecraft:emerald", 10), "sophisticatedbackpacks:backpack")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:leatherworker", 1, "minecraft:emerald", "sophisticatedbackpacks:upgrade_base")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	
	event.addTrade("minecraft:leatherworker", 2, Item.of("minecraft:emerald", 15), "sophisticatedbackpacks:copper_backpack")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 20
	})
	event.addTrade("minecraft:leatherworker", 2, "minecraft:emerald", "minecraft:bundle")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 15
	})
	
	event.addTrade("minecraft:leatherworker", 3, Item.of("minecraft:emerald", 20), "sophisticatedbackpacks:iron_backpack")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 20
	})
	
	event.addTrade("minecraft:leatherworker", 4, Item.of("minecraft:emerald", 30), "sophisticatedbackpacks:gold_backpack")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 20
	})
	
	event.addTrade("minecraft:leatherworker", 5, Item.of("minecraft:emerald", 40), "sophisticatedbackpacks:diamond_backpack")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})


//LIBRARIAN
	
	event.addTrade("minecraft:librarian", 2,[Item.of("kubejs:book_ancient", 3), Item.of("minecraft:emerald", 5)],Item.of("kubejs:map_fragment", 4))	
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 10
		})
	
	event.addTrade("minecraft:librarian", 3,[Item.of("kubejs:map_fragment", 8), Item.of("minecraft:emerald", 10)],"kubejs:map_scroll_biome")	
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 15
		})
	
	event.addTrade("minecraft:librarian", 4, Item.of("kubejs:map_scroll_biome", 1), "kubejs:map_fragment")
	
	event.addTrade("minecraft:librarian", 5,[Item.of("kubejs:map_fragment", 8), Item.of("minecraft:emerald", 20)],"kubejs:map_scroll_structure")	
	.transform((offer, entity, random) => {
		offer.maxUses = 1
		offer.villagerExperience = 15
		})
	
///END	
})