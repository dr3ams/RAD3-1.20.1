MoreJSEvents.villagerTrades(event => {
//ENDEROLOGIST

	event.removeVanillaTrades("morevillagers:enderian", 5) //have to remove a whole trade level to get rid of dragon head trade
	event.addTrade("morevillagers:enderian", 5, Item.of("minecraft:emerald", 12), "minecraft:shulker_shell")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		})
	event.addTrade("morevillagers:enderian", 5, [Item.of("minecraft:emerald", 32), "minecraft:rabbit_foot"], "endrem:evil_eye")
	.transform((offer, entity, random) => {
		offer.maxUses = 12 //kinda weird but this is what the cleric trade has
		})
	
//ENGINEER
	
	event.addTrade("morevillagers:engineer", 1, Item.of("minecraft:slime_block", 3), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 2
	})
	event.addTrade("morevillagers:engineer", 1, Item.of("minecraft:honey_block", 2), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 2
	})
	event.addTrade("morevillagers:engineer", 1, Item.of("minecraft:emerald", 4), TradeItem.of("supplementaries:cog_block", 4, 8))
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 2
	})
	
	event.addTrade("morevillagers:engineer", 2, Item.of("minecraft:quartz", 12), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:engineer", 2, Item.of("minecraft:emerald", 3), "supplementaries:wrench")
	.transform((offer, entity, random) => {
		offer.maxUses = 3
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:engineer", 2, "minecraft:emerald", "quark:iron_rod")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	
	event.addTrade("morevillagers:engineer", 3, Item.of("minecraft:emerald", 5), "quark:redstone_randomizer")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	event.addTrade("morevillagers:engineer", 3, "minecraft:emerald", "ntrials:copper_bulb")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	
	event.addTrade("morevillagers:engineer", 4, "minecraft:sculk_sensor", "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 30
	})
	event.addTrade("morevillagers:engineer", 4, "aether_redux:sentry_chip", "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
		offer.villagerExperience = 30
	})
	event.addTrade("morevillagers:engineer", 4, Item.of("minecraft:emerald", 4), "supplementaries:turn_table")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:engineer", 4, Item.of("minecraft:emerald", 7), "supplementaries:spring_launcher")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	
	event.addTrade("morevillagers:engineer", 5, Item.of("minecraft:emerald", 10), "quark:crafter")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
	})
	event.addTrade("morevillagers:engineer", 5, Item.of("minecraft:emerald", 16), "quark:ender_watcher")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("morevillagers:engineer", 5, Item.of("minecraft:emerald", 8), "aether_redux:logicator")
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	
//MINER

	event.addTrade("morevillagers:miner", 1, "minecraft:emerald", Item.of("spelunkery:nephrite", 16))
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 1
	})
	event.addTrade("morevillagers:miner", 1, "minecraft:emerald", Item.of("spelunkery:rock_salt_block", 16))
	.transform((offer, entity, random) => {
		offer.maxUses = 8
		offer.villagerExperience = 1
	})
	event.addTrade("morevillagers:miner", 1, [Item.of("spelunkery:rough_lazurite", 16), "minecraft:emerald"], Item.of("minecraft:lapis_lazuli", 24))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	
	event.addTrade("morevillagers:miner", 2, TradeItem.of("embers:raw_lead", 8, 16), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	event.addTrade("morevillagers:miner", 2, TradeItem.of("embers:raw_silver", 6, 14), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:miner", 2, [Item.of("spelunkery:rough_cinnabar", 16), "minecraft:emerald"], Item.of("minecraft:redstone", 32))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	
	event.addTrade("morevillagers:miner", 3, TradeItem.of("minecraft:emerald", 2, 6), "minecraft:obsidian")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("morevillagers:miner", 3, Item.of("spelunkery:rough_emerald", 8), Item.of("minecraft:emerald", 7))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	event.addTrade("morevillagers:miner", 3, Item.of("spelunkery:rough_diamond", 8), Item.of("minecraft:diamond", 7))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	
	event.addTrade("morevillagers:miner", 4, "minecraft:tnt", "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("morevillagers:miner", 4, "minecraft:emerald", "minecraft:sculk")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:miner", 4, "minecraft:emerald", TradeItem.of("landsoficaria:sliver", 1, 3))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	event.addTrade("morevillagers:miner", 4, TradeItem.of("minecraft:emerald", 15, 20), "spelunkery:obsidian_hammer_and_chisel")
	.transform((offer, entity, random) => {
		offer.maxUses = 3
		offer.villagerExperience = 30
	})
	
	event.addTrade("morevillagers:miner", 5, Item.of("spelunkery:glowstick", 16), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
	})
	event.addTrade("morevillagers:miner", 5, [Item.of("minecraft:emerald", 16), "minecraft:diamond"], "celestial_core:treasure_fragment")
	.transform((offer, entity, random) => {
		offer.maxUses = 2
	})
	event.addTrade("morevillagers:miner", 5, Item.of("minecraft:emerald", 3), TradeItem.of("spelunkery:mineomite", 2, 8))
	.transform((offer, entity, random) => {
		offer.maxUses = 8
	})
	event.addTrade("morevillagers:miner", 5, TradeItem.of("minecraft:emerald", 48, 64), "spelunkery:compression_blast_miner")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})

//NETHEROLOGIST

	event.addTrade("morevillagers:netherian", 1, Item.of("nethersdelight:strider_slice", 14), "minecraft:emerald") //per butcher chicken
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 2
	})
	event.addTrade("morevillagers:netherian", 1, Item.of("nethersdelight:hoglin_loin", 7), "minecraft:emerald") //per butcher pork
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 2
	})
	event.addTrade("morevillagers:netherian", 1, Item.of("farmersdelight:ham", 4), "minecraft:emerald") //per butcher rabbit
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 2
	})

	event.addTrade("morevillagers:netherian", 2, Item.of("nethersdelight:propelpearl", 3), "minecraft:emerald")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	event.addTrade("morevillagers:netherian", 2, "nethersdelight:hoglin_hide", Item.of("minecraft:emerald", 4))
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 20
	})
	event.addTrade("morevillagers:netherian", 2, "minecraft:emerald", Item.of("nethersdelight:hoglin_sirloin", 5)) //per butcher cooked pork
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})
	event.addTrade("morevillagers:netherian", 2, "minecraft:emerald", Item.of("farmersdelight:smoked_ham", 2)) 
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 5
	})

	event.addTrade("morevillagers:netherian", 3, ["minecraft:blaze_rod", "minecraft:emerald"], "nethersdelight:nether_skewer")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 10
	})
	event.addTrade("morevillagers:netherian", 3, Item.of("minecraft:emerald", 6), "nethersdelight:hoglin_trophy")
	.transform((offer, entity, random) => {
		offer.maxUses = 4
		offer.villagerExperience = 20
	})


	event.addTrade("morevillagers:netherian", 4, Item.of("minecraft:emerald", 3), "nethersdelight:strider_moss_stew")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	event.addTrade("morevillagers:netherian", 4, Item.of("minecraft:emerald", 4), "nethersdelight:magma_gelatin")
	.transform((offer, entity, random) => {
		offer.maxUses = 16
		offer.villagerExperience = 15
	})
	
	event.addTrade("morevillagers:netherian", 5, Item.of("minecraft:emerald", 5), "nethersdelight:grilled_strider")
	.transform((offer, entity, random) => {
		offer.maxUses = 12
	})
	event.addTrade("morevillagers:netherian", 5, Item.of("minecraft:emerald", 10), "nethersdelight:stuffed_hoglin")
	.transform((offer, entity, random) => {
		offer.maxUses = 1
	})

///END	
})