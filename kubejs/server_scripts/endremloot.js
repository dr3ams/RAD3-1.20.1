//priority: -1

LootJS.modifiers((event) => {


	// removing eyes from chest loot
	event.addLootTypeModifier(LootType.CHEST)
		.removeLoot("endrem:black_eye")
		.removeLoot("endrem:cold_eye")
		.removeLoot("endrem:corrupted_eye")
		.removeLoot("endrem:lost_eye")
		.removeLoot("endrem:nether_eye")
		.removeLoot("endrem:old_eye")
		.removeLoot("endrem:rogue_eye")
		.removeLoot("endrem:cursed_eye")
		.removeLoot("endrem:magical_eye");
		
	// removing eyes from mobs
	event.addLootTypeModifier(LootType.ENTITY)
		.removeLoot("endrem:guardian_eye")
		.removeLoot("endrem:magical_eye")
		.removeLoot("endrem:wither_eye")
		.removeLoot("endrem:witch_pupil")
		.removeLoot("endrem:undead_soul");
		
	// adding eyes back to chests
	// black eye minecraft shipwreck, buried treasure, dungeons arise undead pirate ship, illager galley, illager corsair, dungeons enhanced pirate ship, bumblezone pirate ship
	event.addLootTableModifier("the_bumblezone:structures/pirate_ship/captain").randomChance(0.3).addLoot("endrem:black_eye");
	event.addLootTableModifier("dungeons_arise:chests/illager_corsair/illager_corsair_treasure").randomChance(0.3).addLoot("endrem:black_eye");
	event.addLootTableModifier("dungeons_arise:chests/illager_galley/illager_galley_treasure").randomChance(0.3).addLoot("endrem:black_eye");
	event.addLootTableModifier("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_treasure").randomChance(0.3).addLoot("endrem:black_eye");
	event.addLootTableModifier("dungeons_enhanced:chests/pirate_ship").randomChance(0.1).addLoot("endrem:black_eye");
	event.addLootTableModifier("minecraft:chests/shipwreck_treasure").randomChance(0.05).addLoot("endrem:black_eye");
	event.addLootTableModifier("minecraft:chests/buried_treasure").randomChance(0.3).addLoot("endrem:black_eye");
	// corrupted eye graveyard structures (also nameless hanged but that's not here)
	event.addLootTableModifier("graveyard:chests/crypt_loot").randomChance(0.1).addLoot("endrem:corrupted_eye");
	event.addLootTableModifier("graveyard:chests/large_graveyard_loot").randomChance(0.1).addLoot("endrem:corrupted_eye");
	event.addLootTableModifier("graveyard:chests/medium_graveyard_loot").randomChance(0.1).addLoot("endrem:corrupted_eye");
	event.addLootTableModifier("graveyard:chests/small_graveyard_loot").randomChance(0.05).addLoot("endrem:corrupted_eye");
	event.addLootTableModifier("graveyard:chests/bone_loot").randomChance(0.005).addLoot("endrem:corrupted_eye");
	event.addLootTableModifier("graveyard:chests/flesh_loot").randomChance(0.005).addLoot("endrem:corrupted_eye");
	// rogue eye roguelike dungeons
	event.addLootTableModifier("dungeoncrawl:chests/stage_1").randomChance(0.00001).addLoot("endrem:rogue_eye");
	event.addLootTableModifier("dungeoncrawl:chests/stage_2").randomChance(0.0001).addLoot("endrem:rogue_eye");
	event.addLootTableModifier("dungeoncrawl:chests/stage_3").randomChance(0.001).addLoot("endrem:rogue_eye");
	event.addLootTableModifier("dungeoncrawl:chests/stage_4").randomChance(0.01).addLoot("endrem:rogue_eye");
	event.addLootTableModifier("dungeoncrawl:chests/stage_5").randomChance(0.1).addLoot("endrem:rogue_eye");
	// exotic eye minecraft ocean ruins, hopo underwater ruins, underwater city, better ocean monument, cataclysm acropolis, dungeons enhanced elder temple, sunken shrine, better archeology underwater, dungeons arise typhon
	event.addLootTableModifier("betterarcheology:archeology/chest_underwater").randomChance(0.1).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("hopo:chests/coral").randomChance(0.2).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("dungeons_arise:chests/typhon/typhon_treasure").randomChance(0.2).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("dungeons_enhanced:chests/elders_temple/main").randomChance(0.2).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("dungeons_enhanced:chests/sunken_shrine").randomChance(0.1).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("betteroceanmonuments:chests/upper_side_chamber").randomChance(0.3).addLoot("endrem:exotic_eye");
	event.addLootTableModifier("cataclysm:chests/acropolis_treasure").randomChance(0.3).addLoot("endrem:exotic_eye");
	// nether eye aether dungeons
	event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_reward").randomChance(0.3).addLoot("endrem:nether_eye"); //not sure if this one or the ancient aether one is used
	event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_reward").randomChance(0.3).addLoot("endrem:nether_eye");
	event.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_reward").randomChance(0.3).addLoot("endrem:nether_eye");
	event.addLootTableModifier("lost_aether_content:chests/platinum_treasure_loot").randomChance(0.3).addLoot("endrem:nether_eye");
	event.addLootTableModifier("deep_aether:chests/dungeon/brass/brass_dungeon_reward").randomChance(0.3).addLoot("endrem:nether_eye");
	event.addLootTableModifier("ancient_aether:chests/dungeon/laboratory/sentry_laboratory_reward").randomChance(0.3).addLoot("endrem:nether_eye");
	event.addLootTableModifier("ancient_aether:chests/dungeon/bronze/bronze_dungeon_reward").randomChance(0.3).addLoot("endrem:nether_eye");
	// magical eye minecraft mansion, takesapillage bastille, dungeons arise illager fort, corsair, galley
	event.addLootTableModifier("revampedvillages:mansion_treasure").randomChance(0.05).addLoot("endrem:magical_eye");
	event.addLootTableModifier("takesapillage:chests/bastille/church").randomChance(0.1).addLoot("endrem:magical_eye");
	event.addLootTableModifier("dungeons_arise:chests/illager_fort/illager_fort_treasure").randomChance(0.1).addLoot("endrem:magical_eye");
	event.addLootTableModifier("dungeons_arise:chests/illager_corsair/illager_corsair_treasure").randomChance(0.1).addLoot("endrem:magical_eye");
	event.addLootTableModifier("dungeons_arise:chests/illager_galley/illager_galley_treasure").randomChance(0.1).addLoot("endrem:magical_eye");
	//killing the nether gauntlet spawns a chest
	event.addLootTableModifier("bosses_of_mass_destruction:chests/gauntlet").addLoot("endrem:lost_eye");
	
	// adding eyes back to mobs
	event.addEntityLootModifier("minecraft:evoker").randomChance(0.1).killedByPlayer().addLoot("endrem:magical_eye");
	event.addEntityLootModifier("minecraft:illusioner").randomChance(0.05).killedByPlayer().addLoot("endrem:magical_eye");
	event.addEntityLootModifier("friendsandfoes:iceologer").randomChance(0.05).killedByPlayer().addLoot("endrem:magical_eye");
	event.addEntityLootModifier("ars_nouveau:wilden_boss").killedByPlayer().addLoot("endrem:magical_eye");
	event.addEntityLootModifier("minecraft:elder_guardian").randomChance(0.3).killedByPlayer().addLoot("endrem:guardian_eye");
	event.addEntityLootModifier("minecraft:wither").killedByPlayer().addLoot("endrem:wither_eye");
	event.addEntityLootModifier("cataclysm:ancient_remnant").killedByPlayer().addLoot("endrem:old_eye");
	event.addEntityLootModifier("cataclysm:maledictus").killedByPlayer().addLoot("endrem:cursed_eye");
	event.addEntityLootModifier("cataclysm:the_leviathan").killedByPlayer().addLoot("endrem:exotic_eye");
	event.addEntityLootModifier("cataclysm:scylla").killedByPlayer().addLoot("endrem:exotic_eye");
	event.addEntityLootModifier("cataclysm:netherite_monstrosity").killedByPlayer().addLoot("endrem:lost_eye");
	event.addEntityLootModifier("cataclysm:the_harbinger").killedByPlayer().addLoot("endrem:lost_eye");
	event.addEntityLootModifier("bosses_of_mass_destruction:lich").killedByPlayer().addLoot("endrem:cold_eye");
	event.addEntityLootModifier("graveyard:lich").killedByPlayer().addLoot("endrem:corrupted_eye");
	// witch pupil from women
	event.addEntityLootModifier("minecraft:witch").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:ender_executor").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:kobold").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:melty_monster").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:cursed_doll").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:jack_frost").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:hornet").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:dullahan").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:banshee").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:alraune").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:redcap").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:slime_girl").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:crimson_slaughterer").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:snow_canine").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:harpy").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:necrotic_reaper").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:dodomeki").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:imp").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:glaryad").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:jiangshi").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("hmag:nightwalker").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	event.addEntityLootModifier("cataclysm:cindaria").randomChance(0.01).killedByPlayer().addLoot("endrem:witch_pupil");
	// undead soul from undead, i decided against bosses
	event.addEntityLootModifier("cataclysm:aptrgangr").randomChance(0.1).killedByPlayer().addLoot("endrem:undead_soul");
	event.addEntityLootModifier("cataclysm:kobolediator").randomChance(0.1).killedByPlayer().addLoot("endrem:undead_soul");
	event.addEntityLootModifier("cataclysm:wadjet").randomChance(0.1).killedByPlayer().addLoot("endrem:undead_soul");
	event.addEntityLootModifier("hmag:lich").randomChance(0.1).killedByPlayer().addLoot("endrem:undead_soul");
	// thank you zarchyar
	event.addLootTypeModifier([LootType.ENTITY]).matchEntity((entity) => {entity.isUndeadMob(true);}).randomChance(0.005).killedByPlayer().addLoot("endrem:undead_soul");

});