LootJS.modifiers((event) => {

	// keeping this as an example for future use
    //event.addBlockLootModifier(['occultism:silver_ore', 'occultism:silver_ore_deepslate'])
    //    .replaceLoot('occultism:raw_silver', 'embers:raw_silver', true)
    //    .replaceLoot('occultism:silver_ore', 'embers:silver_ore', true)
    //    .replaceLoot('occultism:silver_ore_deepslate', 'embers:deepslate_silver_ore', true);
	

	const lootsize = 9; // amount of unique item stacks that will be allowed to generate from a loot table (item stacks can an item with a count so a stack of 6 bones for instance)
				
	// blanket banning chest loot items
	event.addLootTypeModifier(LootType.CHEST)
		.removeLoot("aether:life_shard")
		.removeLoot("nameless_trinkets:ethereal_wings")
		.removeLoot("nameless_trinkets:fragile_cloud")
		.removeLoot("nameless_trinkets:missing_page")
		.removeLoot("nameless_trinkets:reverse_card")
		.removeLoot("nameless_trinkets:experience_battery")
		.removeLoot("nameless_trinkets:broken_ankh")
		.removeLoot("nameless_trinkets:experience_magnet")
		.removeLoot("nameless_trinkets:broken_magnet")
		.removeLoot("nameless_trinkets:super_magnet")
		.removeLoot("nameless_trinkets:what_magnet")
		.removeLoot("nameless_trinkets:callus")
		.removeLoot("nameless_trinkets:speed_force")
		.removeLoot("nameless_trinkets:vampire_blood")
		.removeLoot("nameless_trinkets:lucky_rock")
		.removeLoot("nameless_trinkets:puffer_fish_liver")
		.removeLoot("nameless_trinkets:rage_mind")
		.removeLoot("nameless_trinkets:tick")
		.removeLoot("nameless_trinkets:blindfold")
		.removeLoot("nameless_trinkets:explosion_proof_jacket")
		.removeLoot("nameless_trinkets:cracked_crown")
		.removeLoot("nameless_trinkets:gods_crown")
		.removeLoot("nameless_trinkets:ghast_eye")
		.removeLoot("nameless_trinkets:wooden_stick")
		.removeLoot("nameless_trinkets:blaze_nucleus")
		.removeLoot("nameless_trinkets:ice_cube")
		.removeLoot("nameless_trinkets:sigil_of_baphomet")
		.removeLoot("nameless_trinkets:creeper_sense")
		.removeLoot("nameless_trinkets:fertilizer")
		.removeLoot("nameless_trinkets:tear_of_the_sea")
		.removeLoot("nameless_trinkets:amphibious_hands")
		.removeLoot("nameless_trinkets:gills")
		.replaceLoot("nameless_trinkets:true_heart_of_the_sea", "minecraft:heart_of_the_sea")
		.removeLoot("nameless_trinkets:moon_stone")
		.removeLoot("nameless_trinkets:sleeping_pills")
		.removeLoot("nameless_trinkets:spider_legs")
		.removeLoot("nameless_trinkets:reforger")
		.removeLoot("nameless_trinkets:electric_paddle")
		.removeLoot("nameless_trinkets:fractured_nullstone")
		.removeLoot("nameless_trinkets:miners_soul")
		.removeLoot("nameless_trinkets:pocket_lightning_rod")
		.removeLoot("nameless_trinkets:scarab_amulet")
		.removeLoot("nameless_trinkets:fate_emerald")
		.removeLoot("nameless_trinkets:light_gloves")
		.removeLoot("nameless_trinkets:dragons_eye")
		.removeLoot("nameless_trinkets:four_leaf_clover")
		.removeLoot("nameless_trinkets:nelumbo")
		.removeLoot("nameless_trinkets:dark_nelumbo")
		.replaceLoot("minecraft:gold_ingot", LootEntry.of("minecraft:gold_nugget").limitCount([1, 5]))
		.replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 5]))
		.replaceLoot("minecraft:diamond", "spelunkery:rough_diamond_shard")
		.replaceLoot("hmag:diamond_fragment", "spelunkery:rough_diamond_shard")
		.replaceLoot("minecraft:emerald", "spelunkery:emerald_shard")
		.replaceLoot("minecraft:diamond_pickaxe", "spelunkery:rough_diamond")
		.replaceLoot("minecraft:diamond_sword", "spelunkery:rough_diamond")
		.replaceLoot("minecraft:diamond_chestplate", "spelunkery:rough_diamond")
		.replaceLoot("minecraft:diamond_leggings", "spelunkery:rough_diamond")
		.replaceLoot("aether:diamond_gloves", "spelunkery:rough_diamond")
		.replaceLoot("minecraft:diamond_axe", "spelunkery:rough_diamond")
		.replaceLoot("simplyswords:diamond_longsword", "spelunkery:rough_diamond")
		.replaceLoot("simplyswords:diamond_twinblade", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_rapier", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_katana", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_sai", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_spear", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_glaive", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_warglaive", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_cutlass", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_cutlass", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_claymore", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_greathammer", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_greataxe", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_chakram", "spelunkery:rough_diamond") 
		.replaceLoot("simplyswords:diamond_scythe", "spelunkery:rough_diamond")
		.replaceLoot("simplyswords:diamond_halberd", "spelunkery:rough_diamond")
		.replaceLoot("simplyswords:diamond_longsword", "spelunkery:rough_diamond");
		
	
	// Blanket banning specific loot from mobs
	event.addLootTypeModifier(LootType.ENTITY)
		.removeLoot("bonfires:ash_pile");

	// Adding monster essence drops to entities killed by players
	event.addLootTypeModifier(LootType.ENTITY)
		.killedByPlayer()
		.addLoot(LootEntry.of("kubejs:essence_monster")
		.when((c) => c.randomChance(0.05))
		.limitCount([0, 1]));

	// Replacing HMaG drops with Spelunkery items
	event.addLootTypeModifier(LootType.ENTITY).replaceLoot("hmag:diamond_fragment", "spelunkery:diamond_shard", true);
	event.addLootTypeModifier(LootType.ENTITY).replaceLoot("hmag:emerald_fragment", "spelunkery:emerald_shard", true );
	event.addLootTypeModifier(LootType.ENTITY).replaceLoot("hmag:copper_nugget", "spelunkery:copper_nugget", true);

	// Adding Great Soul to boss drops
	event.addEntityLootModifier("minecraft:ender_dragon").killedByPlayer().addLoot("kubejs:great_soul");
//	event.addEntityLootModifier("minecraft:warden").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("minecraft:wither").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:ancient_remnant").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:ender_guardian").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:ignis").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:maledictus").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:netherite_monstrosity").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:scylla").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:the_harbinger").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("cataclysm:the_leviathan").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("bosses_of_mass_destruction:gauntlet").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("bosses_of_mass_destruction:lich").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("bosses_of_mass_destruction:obsidilith").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("bosses_of_mass_destruction:void_blossom").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("graveyard:lich").killedByPlayer().addLoot("kubejs:great_soul");
	event.addEntityLootModifier("ars_nouveau:wilden_boss").killedByPlayer().addLoot("kubejs:great_soul");
	
	// Requiring silk touch to pick up brewing stand
	event.addBlockLootModifier("minecraft:brewing_stand")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(
			LootEntry.of("minecraft:brewing_stand").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))),
            LootEntry.of("minecraft:blaze_powder").when((c) => c.randomChance(0.5)).limitCount([1, 3])
		);
	
	// Adding earth essence from mining various blocks
	event.addBlockLootModifier("minecraft:gravel")
		.addAlternativesLoot(
			LootEntry.of("kubejs:essence_earth").when((c) => c.randomChance(0.05)).limitCount([0, 1])
		);
    event.addBlockLootModifier("minecraft:coal_ore").randomChance(0.1).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:iron_ore").randomChance(0.1).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:copper_ore").randomChance(0.1).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:redstone_ore").randomChance(0.2).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:gold_ore").randomChance(0.2).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:lapis_ore").randomChance(0.2).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:emerald_ore").randomChance(0.3).addLoot("kubejs:essence_earth");
	event.addBlockLootModifier("minecraft:diamond_ore").randomChance(0.3).addLoot("kubejs:essence_earth");
	
	// Adding drops to spawners
	event.addBlockLootModifier("minecraft:spawner").addLoot("kubejs:coin_dungeon");
	event.addBlockLootModifier("minecraft:spawner").addLoot("kubejs:spawnercore");
	
	// GLOBAL mastery chest loot
	event.addLootTypeModifier([LootType.CHEST])
		.addLoot(
			LootEntry.of("kubejs:junk").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
			LootEntry.of("kubejs:scroll_exp").when((c) => c.randomChance(0.1)).limitCount([1, 1])
		);
		
	event.addLootTypeModifier([LootType.CHEST])
		.hasAnyStage("enchanter")
		.addLoot(
			LootEntry.of("kubejs:dust_experience").when((c) => c.randomChance(0.3)).limitCount([1, 2]),
				);
		
	event.addLootTypeModifier([LootType.CHEST])
		.hasAnyStage("alchemist")
		.addLoot(
			LootEntry.of("kubejs:dust_alchemical").when((c) => c.randomChance(0.3)).limitCount([1, 2]),
				);	
				
	event.addLootTypeModifier([LootType.CHEST])
		.hasAnyStage("scavenger")
		.addLoot(
			LootEntry.of("kubejs:scraps").when((c) => c.randomChance(0.3)).limitCount([1, 2]),
				);

	// OVERWORLD-SPECIFIC custom chest loot
	event.addLootTypeModifier([LootType.CHEST])
		.anyDimension("minecraft:overworld")
		.addLoot(
			LootEntry.of("kubejs:coin_dungeon").when((c) => c.randomChance(0.2)).limitCount([1, 1])
		);

		event.addLootTypeModifier([LootType.CHEST])
		.anyDimension("minecraft:overworld")
		.replaceLoot("apotheosis:gem", "kubejs:gem_shard");


	// OVERWORLD-QUEST custom chest loot
	event.addLootTypeModifier([LootType.CHEST])
		.anyDimension("minecraft:overworld")
		.hasAnyStage("sidestory_crate")
		.anyStructure(["nova_structures:undead_crypt", "dungeons_enhanced:monster_maze"], false) 
		.addLoot(
			LootEntry.of("kubejs:quest_crate").when((c) => c.randomChance(0.2)).limitCount([1, 1])
		);

	// NETHER-SPECIFIC custom chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.anyDimension("minecraft:the_nether")
		.addLoot(
			LootEntry.of("kubejs:coin_nether").when((c) => c.randomChance(0.6)).limitCount([1, 1]),
			LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
			LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
			LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
			LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2])
		);

	// END-SPECIFIC custom chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.anyDimension("minecraft:the_end")
		.addLoot(
			LootEntry.of("kubejs:coin_end").when((c) => c.randomChance(0.6)).limitCount([1, 1])
		);
	
	// AETHER-SPECIFIC custom chest loot
	event.addLootTypeModifier([LootType.CHEST])
		.anyDimension("aether:the_aether")
		.addLoot(
			LootEntry.of("kubejs:coin_aether").when((c) => c.randomChance(0.6)).limitCount([1, 1])
		);

	// UNDERGARDEN-SPECIFIC custom chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.anyDimension("undergarden:undergarden")
		.addLoot(
			LootEntry.of("kubejs:coin_undergarden").when((c) => c.randomChance(0.7)).limitCount([1, 1])
		);

	// ICARIA-SPECIFIC custom chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.anyDimension("landsoficaria:icaria")
		.addLoot(
			LootEntry.of("kubejs:coin_icaria").when((c) => c.randomChance(0.6)).limitCount([1, 1])
		);

	// BUMBLEZONE-SPECIFIC custom chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.anyDimension("the_bumblezone:the_bumblezone")
		.addLoot(
			LootEntry.of("kubejs:coin_bumblezone").when((c) => c.randomChance(0.7)).limitCount([1, 1])
		);

	// LOOT LIMITER - MUST BE AT THE END
	let lootlist = new Array();
	event.addLootTypeModifier(LootType.CHEST)
		.apply((context)=>{
			if (context.lootSize() > lootsize) {
	
				lootlist = [];
				context.forEachLoot((loot) =>{
					lootlist.push(loot);
				})
	
				context.removeLoot(ItemFilter.ALWAYS_TRUE);
					
				while (lootlist.length > lootsize){
					let index = Math.floor(Math.random() * lootlist.length);
					lootlist.splice(index,1);
				}
				lootlist.forEach(item =>{
					context.addLoot(item);
				})
			}
		});
		
	/// EOF

});
