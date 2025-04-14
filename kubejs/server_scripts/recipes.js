// priority: 0

console.info("New recipes script is loading...");

const removals = [
  "minecraft:reinforced_deepslate",
  "gag:time_sand_pouch",
  "gag:escape_rope",
  "gag:hearthstone",
  "gag:sacred_salt",
  "gag:sacred_salve",
  "gag:sacred_balm",
  
  "minecraft:chainmail_helmet",
  "minecraft:chainmail_boots",
  "minecraft:chainmail_leggings",
  "minecraft:chainmail_chestplate",
  
//  "sophisticatedbackpacks:stack_upgrade_starter_tier",
//  "sophisticatedbackpacks:stack_upgrade_tier_1",
//  "sophisticatedbackpacks:stack_upgrade_tier_2",
//  "sophisticatedbackpacks:stack_upgrade_tier_3",
//  "sophisticatedbackpacks:stack_upgrade_tier_4",
//  "sophisticatedbackpacks:backpack",
  "sophisticatedbackpacks:copper_backpack",
  "sophisticatedbackpacks:iron_backpack",
  "sophisticatedbackpacks:gold_backpack",
  "sophisticatedbackpacks:diamond_backpack",
  "sophisticatedbackpacks:crafting_upgrade",
  "sophisticatedstorage:crafting_upgrade",
  "sophisticatedbackpacks:battery_upgrade",
  "sophisticatedbackpacks:magnet_upgrade",
  "sophisticatedstorage:magnet_upgrade",
  "ars_nouveau:source_berry_pie",
  "ars_nouveau:glyph_animate_block",
  "ars_nouveau:creative_spell_book",
  "ars_nouveau:whirlisprig_charm",
  "ars_nouveau:rune",
  "ars_nouveau:portal",
  "ars_nouveau:magic_fire",
  "ars_nouveau:enchanters_sword",
  "ars_nouveau:ritual_awakening",
  "ars_nouveau:ritual_disintegration",
  "ars_nouveau:ritual_containment",
  "ars_nouveau:ritual_flowering",
  "ars_nouveau:novice_spell_book",
  "starbunclemania:star_battery",
  "starbunclemania:star_sword",
  "ars_creo:starbuncle_wheel",
  "tomeofblood:novice_tome_of_blood",
  "tomeofblood:apprentice_tome_of_blood",
  "tomeofblood:archmage_tome_of_blood",
  "bloodmagic:daggerofsacrifice",
  "ars_instrumentum:fake_wilden_tribute",
  "l2complements:eternal",
  "l2complements:invincible",
  "l2hostility:flaming_thorn",
  "ars_trinkets:essence_lotus_3",
  "ars_trinkets:essence_lotus_4",
  "ars_trinkets:essence_lotus_5",
  "ars_trinkets:essence_lotus_6",
  "ars_trinkets:essence_lotus_7",
  "ars_trinkets:essence_lotus_8",
  "ars_trinkets:essence_lotus_9",
  "ars_trinkets:essence_lotus_10",
  "ars_trinkets:mana_stone_3",
  "ars_trinkets:mana_stone_4",
  "ars_trinkets:mana_stone_5",
  "ars_trinkets:mana_stone_5",
  "ars_trinkets:mana_stone_6",
  "ars_trinkets:mana_stone_7",
  "ars_trinkets:mana_stone_8",
  "ars_trinkets:mana_stone_9",
  "ars_trinkets:mana_stone_10",
  "ars_trinkets:monocle_1",
  "ars_trinkets:monocle_2",
  "ars_trinkets:monocle_3",
  "ars_trinkets:monocle_4",
  "ars_trinkets:monocle_5",
  "ars_trinkets:monocle_6",
  "ars_trinkets:monocle_7",
  "ars_trinkets:monocle_8",
  "ars_trinkets:monocle_9",
  "ars_trinkets:monocle_10",
  "ars_trinkets:eternal_rune",
  "ars_trinkets:life_rune_greater",
  "ars_trinkets:death_rune_greater",
  "ars_trinkets:warrior_rune_greater",
  "ars_trinkets:mage_rune_greater",
  "ars_trinkets:life_rune",
  "ars_trinkets:death_rune",
  "ars_trinkets:warrior_rune",
  "ars_trinkets:mage_rune",
  "ars_trinkets:life_rune_lesser",
  "ars_trinkets:death_rune_lesser",
  "ars_trinkets:warrior_rune_lesser",
  "ars_trinkets:mage_rune_lesser",
  "ars_trinkets:glyph_aura",
  "ars_trinkets:glyph_soul_inspector",
  "ars_trinkets:glyph_devour_soul",
  "ars_trinkets:mana_core_1",
  "ars_trinkets:mana_core_2",
  "ars_trinkets:mana_core_3",
  "ars_trinkets:mana_core_4",
  "ars_trinkets:mana_core_5",
  "ars_trinkets:mana_core_6",
  "ars_trinkets:mana_core_7",
  "ars_trinkets:mana_core_8",
  "ars_trinkets:copper_essence",
  "ars_trinkets:iron_essence",
  "ars_trinkets:silver_essence",
  "ars_trinkets:gold_essence",
  "ars_trinkets:crystal_essence",
  "ars_trinkets:green_essence",
  "ars_trinkets:red_essence",
  "ars_trinkets:white_essence",
  "ars_trinkets:yellow_essence",
  "ars_trinkets:purple_essence",
  "celestial_artifacts:flight_ring",
  "nameless_trinkets:ethereal_wings",
  "nameless_trinkets:fragile_cloud",
  "nameless_trinkets:missing_page",
  "nameless_trinkets:reverse_card",
  "nameless_trinkets:experience_battery",
  "nameless_trinkets:broken_ankh",
  "nameless_trinkets:experience_magnet",
  "nameless_trinkets:broken_magnet",
//  "nameless_trinkets:super_magnet",
  "nameless_trinkets:what_magnet",
  "nameless_trinkets:callus",
  "nameless_trinkets:speed_force",
  "nameless_trinkets:vampire_blood",
  "nameless_trinkets:lucky_rock",
  "nameless_trinkets:puffer_fish_liver",
  "nameless_trinkets:rage_mind",
  "nameless_trinkets:tick",
  "nameless_trinkets:blindfold",
  "nameless_trinkets:explosion_proof_jacket",
  "nameless_trinkets:cracked_crown",
  "nameless_trinkets:gods_crown",
  "nameless_trinkets:ghast_eye",
  "nameless_trinkets:wooden_stick",
  "nameless_trinkets:blaze_nucleus",
  "nameless_trinkets:ice_cube",
  "nameless_trinkets:sigil_of_baphomet",
  "nameless_trinkets:creeper_sense",
  "nameless_trinkets:fertilizer",
  "nameless_trinkets:tear_of_the_sea",
  "nameless_trinkets:amphibious_hands",
  "nameless_trinkets:gills",
//  "nameless_trinkets:true_heart_of_the_sea",
  "nameless_trinkets:moon_stone",
  "nameless_trinkets:sleeping_pills",
  "nameless_trinkets:spider_legs",
  "nameless_trinkets:reforger",
  "nameless_trinkets:electric_paddle",
  "nameless_trinkets:fractured_nullstone",
  "nameless_trinkets:miners_soul",
  "nameless_trinkets:pocket_lightning_rod",
  "nameless_trinkets:scarab_amulet",
  "nameless_trinkets:fate_emerald",
  "nameless_trinkets:light_gloves",
  "nameless_trinkets:dragons_eye",
  "nameless_trinkets:four_leaf_clover",
  "nameless_trinkets:nelumbo",
  "nameless_trinkets:dark_nelumbo",
  "nameless_trinkets:dubious_dust",
  "nameless_trinkets:ultimate_dust",
  "nameless_trinkets:glowing_dust",
  "tombstone:book_of_recycling",
  "toms_storage:ts.open_crate",
  "toms_storage:ts.inventory_proxy",
  "toms_storage:ts.wireless_terminal",
  "toms_storage:ts.adv_wireless_terminal",
  "toms_storage:ts.trim",
  "toms_storage:ts.level_emitter",
  "toms_storage:ts.adv_wireless_terminal",
  "skilltree:copper_ring",
  "skilltree:iron_ring",
  "skilltree:golden_ring",
  "celestial_artifacts:gold_ring", 
  "celestial_artifacts:amethyst_ring", 
  "celestial_artifacts:diamond_ring", 
  "celestial_artifacts:flight_ring", 
  "celestial_artifacts:netherite_ring", 
  "celestial_artifacts:ring_of_life",
  "celestial_artifacts:knight_shelter",
  "celestial_artifacts:angel_heart",
  "celestial_artifacts:angel_pearl",
  "celestial_artifacts:holy_talisman",
  "celestial_artifacts:holy_sword",
  "celestial_artifacts:bearing_stamen",
  "mining_dimension:teleporter",
  "apotheotic_additions:sacrificial_shelf",
  "apotheotic_additions:wavebinders_shelf",
  "apotheotic_additions:void_shelf",
  "apotheotic_additions:terra_shelf",
  "regions_unexplored:raw_redstone_block",
  "levelhearts:heart_piece",
  "levelhearts:heart_container",
  "dimdungeons:item_portal_key",
  "dimdungeons:item_blank_build_key",
  "bonfires:large_titanite_shard",
  "bonfires:titanite_chunk",
  "bonfires:titanite_slab",
  "naturesaura:rf_converter",
  "aether_redux:veridium_lantern",
  "supplementaries:altimeter",
  "regions_unexplored:ash"
];


const upgradeMap = new Map([
  [
    "sophisticatedbackpacks:pickup_upgrade",
    "sophisticatedstorage:pickup_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_pickup_upgrade",
    "sophisticatedstorage:advanced_pickup_upgrade",
  ],
  [
    "sophisticatedbackpacks:filter_upgrade",
    "sophisticatedstorage:filter_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_filter_upgrade",
    "sophisticatedstorage:advanced_filter_upgrade",
  ],
  [
    "sophisticatedbackpacks:magnet_upgrade",
    "sophisticatedstorage:magnet_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_magnet_upgrade",
    "sophisticatedstorage:advanced_magnet_upgrade",
  ],
  [
    "sophisticatedbackpacks:feeding_upgrade",
    "sophisticatedstorage:feeding_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_feeding_upgrade",
    "sophisticatedstorage:advanced_feeding_upgrade",
  ],
  [
    "sophisticatedbackpacks:compacting_upgrade",
    "sophisticatedstorage:compacting_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_compacting_upgrade",
    "sophisticatedstorage:advanced_compacting_upgrade",
  ],
  [
    "sophisticatedbackpacks:void_upgrade", 
    "sophisticatedstorage:void_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_void_upgrade",
    "sophisticatedstorage:advanced_void_upgrade",
  ],
  [
    "sophisticatedbackpacks:smelting_upgrade",
    "sophisticatedstorage:smelting_upgrade",
  ],
  [
    "sophisticatedbackpacks:auto_smelting_upgrade",
    "sophisticatedstorage:auto_smelting_upgrade",
  ],
  [
    "sophisticatedbackpacks:smoking_upgrade",
    "sophisticatedstorage:smoking_upgrade",
  ],
  [
    "sophisticatedbackpacks:auto_smoking_upgrade",
    "sophisticatedstorage:auto_smoking_upgrade",
  ],
  [
    "sophisticatedbackpacks:blasting_upgrade",
    "sophisticatedstorage:blasting_upgrade",
  ],
  [
    "sophisticatedbackpacks:auto_blasting_upgrade",
    "sophisticatedstorage:auto_blasting_upgrade",
  ],
  [
    "sophisticatedbackpacks:crafting_upgrade",
    "sophisticatedstorage:crafting_upgrade",
  ],
  [
    "sophisticatedbackpacks:stonecutter_upgrade",
    "sophisticatedstorage:stonecutter_upgrade",
  ],
  [
    "sophisticatedbackpacks:jukebox_upgrade",
    "sophisticatedstorage:jukebox_upgrade",
  ],
  [
    "sophisticatedbackpacks:pump_upgrade",
    "sophisticatedstorage:pump_upgrade",
  ],
  [
    "sophisticatedbackpacks:advanced_pump_upgrade",
    "sophisticatedstorage:advanced_pump_upgrade",
  ],
  [
    "sophisticatedbackpacks:xp_pump_upgrade",
    "sophisticatedstorage:xp_pump_upgrade",
  ]
]);

ServerEvents.recipes((event) => {
  // Change recipes here
  removals.forEach((element) => {
    event.remove({ output: element });
  });
  event.remove({ input: "ars_instrumentum:fake_wilden_tribute" });

  upgradeMap.forEach((key, value) => {
    event.shapeless(Item.of(key), [Item.of(value)]);
    event.shapeless(Item.of(value), [Item.of(key)]);
  });

//  function shapedStarRecipe(OutputItem, item1, item2, item3) {
//    event.shaped(OutputItem, ["BPB", "PCP", "BPB"], {
//      B: item1,
//      P: item2,
//      C: item3,
//    });
//  }

  function backpackUpgrade(backpackBig, backpackSmall, ingredient, corners) {
    var setup = corners ? "MMM" : " M ";
    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: backpackBig,
        },
      ],
      key: {
        B: {
          item: backpackSmall,
        },
        M: {
          tag: ingredient,
        },
      },
      pattern: [setup, "MBM", setup],
      result: {
        item: backpackBig,
      },
    });
  }

  backpackUpgrade(
    "sophisticatedbackpacks:copper_backpack",
    "sophisticatedbackpacks:backpack",
    "forge:storage_blocks/copper",
    true
  );
  backpackUpgrade(
    "sophisticatedbackpacks:iron_backpack",
    "sophisticatedbackpacks:copper_backpack",
    "forge:storage_blocks/iron",
    false
  );
  backpackUpgrade(
    "sophisticatedbackpacks:iron_backpack",
    "sophisticatedbackpacks:backpack",
    "forge:storage_blocks/iron",
    true
  );
  backpackUpgrade(
    "sophisticatedbackpacks:gold_backpack",
    "sophisticatedbackpacks:iron_backpack",
    "forge:storage_blocks/gold",
    true
  );
  backpackUpgrade(
    "sophisticatedbackpacks:diamond_backpack",
    "sophisticatedbackpacks:gold_backpack",
    "forge:storage_blocks/diamond",
    true
  );

//  event.shapeless("sophisticatedbackpacks:upgrade_base", ["#curios:bundle"]);
//  shapedStarRecipe(
//    Item.of("sophisticatedbackpacks:stack_upgrade_starter_tier", 3),
//    "#forge:storage_blocks/copper",
//    "sophisticatedbackpacks:backpack",
//    "sophisticatedbackpacks:upgrade_base"
//  );
//  shapedStarRecipe(
//    Item.of("sophisticatedbackpacks:stack_upgrade_tier_1", 3),
//    "#forge:storage_blocks/iron",
//    "sophisticatedbackpacks:stack_upgrade_starter_tier",
//    "sophisticatedbackpacks:copper_backpack"
//  );
//  shapedStarRecipe(
//    Item.of("sophisticatedbackpacks:stack_upgrade_tier_2", 3),
//    "#forge:storage_blocks/gold",
//    "sophisticatedbackpacks:stack_upgrade_tier_1",
//    "sophisticatedbackpacks:iron_backpack"
//  );
//  shapedStarRecipe(
//    Item.of("sophisticatedbackpacks:stack_upgrade_tier_3", 3),
//    "#forge:storage_blocks/diamond",
//    "sophisticatedbackpacks:stack_upgrade_tier_2",
//    "sophisticatedbackpacks:gold_backpack"
//  );
//  shapedStarRecipe(
//   Item.of("sophisticatedbackpacks:stack_upgrade_tier_4", 3),
//    "#forge:storage_blocks/netherite",
//    "sophisticatedbackpacks:stack_upgrade_tier_3",
//    "sophisticatedbackpacks:diamond_backpack"
//  );

  event.shapeless("sophisticatedbackpacks:crafting_upgrade", [
    "minecraft:crafting_table",
    "sophisticatedbackpacks:upgrade_base",
  ]);
  event.shapeless("sophisticatedstorage:crafting_upgrade", [
    "minecraft:crafting_table",
    "sophisticatedstorage:upgrade_base",
  ]);

  event.replaceInput(
    { output: "sophisticatedbackpacks:copper_backpack" },
    "minecraft:copper_ingot",
    "#forge:storage_blocks/copper"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:iron_backpack" },
    "minecraft:iron_ingot",
    "#forge:storage_blocks/iron"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:gold_backpack" },
    "minecraft:gold_ingot",
    "#forge:storage_blocks/gold"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:diamond_backpack" },
    "minecraft:diamond",
    "#forge:storage_blocks/diamond"
  );
  
  event.replaceInput(
    { output: "sophisticatedbackpacks:stack_upgrade_tier_1" },
    "#forge:storage_blocks/iron",
	"aether_redux:refined_sentrite_block"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:stack_upgrade_tier_2" },
    "#forge:storage_blocks/gold",
	"undergarden:cloggrum_block"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:stack_upgrade_tier_3" },
    "#forge:storage_blocks/diamond",
	"cataclysm:void_stone"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_2" },
    "#forge:storage_blocks/iron",
	"aether_redux:refined_sentrite_block"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_3" },
    "#forge:storage_blocks/gold",
	"undergarden:cloggrum_block"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_4" },
    "#forge:storage_blocks/diamond",
	"cataclysm:void_stone"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_2" },
    "#forge:ingots/iron",
	"aether_redux:refined_sentrite"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_3" },
    "#forge:ingots/gold",
	"undergarden:cloggrum_ingot"
  );
  event.replaceInput(
    { output: "sophisticatedstorage:stack_upgrade_tier_4" },
    "#forge:gems/diamond",
	"cataclysm:void_infused_end_stone_bricks"
  );
  
  event.replaceInput(
    { output: "sophisticatedbackpacks:everlasting_upgrade" },
    "minecraft:nether_star",
    "l2complements:eternium_nugget"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:inception_upgrade" },
    "minecraft:nether_star",
    "l2hostility:miracle_ingot"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:anvil_upgrade" },
    "minecraft:diamond",
    "l2complements:eternium_nugget"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:xp_pump_upgrade" },
    "minecraft:ender_eye",
    "spelunkery:carved_nephrite"
  );
  event.replaceInput(
    { output: "sophisticatedbackpacks:xp_pump_upgrade" },
    "minecraft:redstone",
    "spelunkery:cinnabar"
  );
  event.shapeless(
  Item.of('sophisticatedbackpacks:magnet_upgrade', 1),
  [
    'sophisticatedbackpacks:pickup_upgrade',
    'spelunkery:item_magnet'
  ]);
  event.shapeless(
  Item.of('sophisticatedstorage:magnet_upgrade', 1),
  [
    'sophisticatedstorage:pickup_upgrade',
    'spelunkery:item_magnet'
  ]);
  
  
  event.replaceInput(
    { output: "l2hostility:ring_of_life" },
    "l2hostility:undying",
    "l2hostility:protection"
  );
  event.replaceInput(
    { output: "apotheosis:inert_trident" },
    "minecraft:heart_of_the_sea",
    "aquaculture:neptunium_ingot"
  );
  event.replaceInput(
    { output: "celestial_artifacts:life_bracelet" },
    "minecraft:ghast_tear",
    "l2hostility:regenerate"
  );
  event.replaceInput(
    { output: "celestial_artifacts:freeze_ring" },
    "celestial_artifacts:diamond_ring",
    "aether:ice_ring"
  );
  event.replaceInput(
    { output: "celestial_artifacts:nether_fire" },
    "celestial_artifacts:netherite_ring",
    "minecraft:netherite_ingot"
  );
  event.replaceInput(
    { output: "l2complements:diffusion_wand" },
    "l2complements:storm_core",
    "hmag:fortune_crystal_plus"
  );
  event.replaceInput(
    { output: "nameless_trinkets:true_heart_of_the_sea" },
    "nameless_trinkets:ultimate_dust",
    "celestial_artifacts:guardian_eye"
  );
  event.replaceInput(
    { output: "nameless_trinkets:super_magnet" },
    "nameless_trinkets:glowing_dust",
    "spelunkery:raw_magnetite"
  );
  event.replaceInput(
    { output: "regions_unexplored:ash" },
    "minecraft:gunpowder",
    "#forge:ash"
  );
  event.replaceInput(
    { output: "bosses_of_mass_destruction:brimstone_nectar" },
    "minecraft:netherite_scrap",
    "minecraft:honey_bottle"
  );
  event.replaceInput(
    { output: "bosses_of_mass_destruction:brimstone_nectar" },
    "minecraft:ghast_tear",
    "l2complements:cursed_droplet"
  );
 
  event.shaped('celestial_artifacts:bearing_stamen', [
    'EBE',
    'PFP',
    'SNS'
	], {
    E: 'l2complements:life_essence',
	B: 'minecraft:spore_blossom',
	F: 'bosses_of_mass_destruction:crystal_fruit',
	P: 'hmag:mysterious_petal',
	S: 'farmersdelight:rich_soil',
	N: 'hmag:cubic_nucleus'
  });
  event.shaped('celestial_artifacts:knight_shelter', [
    'FHF',
    'GSG',
    'TGT'
	], {
    F: 'celestial_core:midnight_fragment',
	H: 'mowziesmobs:wrought_helmet',
	S: 'hmag:ancient_shield',
	G: 'l2complements:totemic_gold_ingot',
	T: 'l2hostility:tank'
  });
  event.shaped('celestial_artifacts:angel_heart', [
    'GGG',
    'WSW',
    'TDR'
	], {
	G: 'l2complements:totemic_gold_ingot',
	T: 'l2hostility:protection',
	D: 'l2hostility:dispell',
	R: 'l2hostility:regenerate',
	W: 'celestial_core:soaring_wings',
	S: 'celestial_core:pure_nether_star'
  });
  event.shaped('celestial_artifacts:angel_pearl', [
    'GGG',
    'WPW',
    'RSK'
	], {
	G: 'l2complements:totemic_gold_ingot',
	P: 'hmag:endless_pearl',
	R: 'l2hostility:growth',
	K: 'l2hostility:killer_aura',
	W: 'celestial_core:soaring_wings',
	S: 'celestial_core:pure_nether_star'
  });
  event.shaped('celestial_artifacts:holy_talisman', [
    'CNC',
    'WSW',
    'PTP'
	], {
	T: 'minecraft:totem_of_undying',
	P: 'l2hostility:protection',
	C: 'l2hostility:tank',
	W: 'l2hostility:weakness',
	S: 'minecraft:nether_star',
	N: 'aether:iron_pendant'
  });
  event.shaped('celestial_artifacts:holy_sword', [
    'NRN',
    'WSW',
    'LDL'
	], {
	S: 'ancient_aether:valkyrum_sword',
	W: 'celestial_core:soaring_wings',
	L: 'celestial_core:light_fragment',
	N: 'celestial_core:midnight_fragment',
	R: 'l2hostility:reflect',
	D: 'l2hostility:drain'
  });
  event.shaped('celestial_artifacts:guardian_eye', [
    'SES',
    'EGE',
    'SES'
	], {
    E: 'celestial_core:ocean_essence',
	S: 'hmag:ancient_stone',
	G: 'l2complements:guardian_eye'
  });
  event.shaped('nameless_trinkets:gods_crown', [
    'EHE',
    'GGG',
    'GCG'
	], {
    E: 'l2complements:sun_membrane',
	G: 'celestial_core:virtual_gold_ingot',
	H: 'celestial_core:heart_fragment',
	C: 'nameless_trinkets:cracked_crown'
  });
  event.shaped('l2hostility:flaming_thorn', [
    ' F ',
    ' T ',
    ' E '
	], {
    F: 'l2complements:soul_flame',
	T: 'bosses_of_mass_destruction:void_thorn',
	E: 'bosses_of_mass_destruction:blazing_eye'
  });
  event.shaped('minecraft:dragon_head', [
    'ESS',
    'SBB',
    'SSS'
	], {
    E: 'minecraft:ender_eye',
	S: 'quark:dragon_scale',
	B: 'minecraft:dragon_breath'
  });
  event.shaped('ars_nouveau:novice_spell_book', [
    'GGG',
    'PBP',
    'GGG'
	], {
	G: 'minecraft:gold_nugget',
	P: 'minecraft:purple_dye',
	B: 'minecraft:book'
  });
	
	event.shaped(
  Item.of('cataclysm:black_steel_fence', 3), [
    'IRI',
    'IRI'
	], {
	I: 'cataclysm:black_steel_ingot',
	R: 'buildersaddition:iron_rod'
  });
  event.shaped(
  Item.of('cataclysm:black_steel_wall', 6), [
    'BBB',
    'BBB'
	], {
	B: 'cataclysm:black_steel_block'
  });
  event.shaped(
  Item.of('cataclysm:frosted_stone_bricks', 8), [
    'BBB',
	'BSB',
    'BBB'
	], {
	B: 'minecraft:stone_bricks',
	S: 'minecraft:snowball'
  });
  event.shaped(
  Item.of('cataclysm:void_infused_end_stone_bricks', 8), [
    'VBB',
	'BBB',
    'BBB'
	], {
	B: 'minecraft:end_stone_bricks',
	V: 'cataclysm:void_stone'
  });
  event.shaped(
  Item.of('cataclysm:polished_obsidian', 4), [
    'BB',
    'BB'
	], {
	B: 'cataclysm:obsidian_bricks'
  });

  event.stonecutting('cataclysm:black_steel_wall', 'cataclysm:black_steel_block')
  event.stonecutting('cataclysm:polished_obsidian', 'cataclysm:obsidian_bricks')
  event.stonecutting('cataclysm:polished_obsidian', 'minecraft:obsidian')
  event.stonecutting('cataclysm:blackstone_pillar', 'minecraft:blackstone')
  event.stonecutting('cataclysm:blackstone_pillar', 'minecraft:polished_blackstone')
  event.stonecutting('cataclysm:blackstone_pillar', 'minecraft:polished_blackstone_bricks')
  event.stonecutting('cataclysm:void_lantern_block', 'cataclysm:void_stone')
  event.stonecutting('cataclysm:void_crystal', 'cataclysm:void_stone')
  event.stonecutting('cataclysm:pointed_icicle', 'minecraft:ice')
	
	event.shaped(
    Item.of('undergarden:catalyst'),
    [
        'ABA',
        'CDE',
        'AFA'
    ],
    {
        D: 'undergarden:regalium_crystal',
        F: 'undergarden:gloomgourd_pie',
        A: 'undergarden:utherium_crystal',
        C: 'undergarden:brute_tusk',
        E: 'undergarden:glitterkelp',
        B: 'undergarden:raw_gwibling'
    }
)

  event.shaped('mining_dimension:teleporter', [
    'ABC',
    'DEF',
    'GHI'
	], {
    A: 'bloodmagic:infusedslate',
	B: 'celestial_core:earth_core',
	C: 'undergarden:regalium_crystal',
	D: 'bloodmagic:lavacrystal',
	E: 'minecraft:netherite_pickaxe',
	F: 'embers:dawnstone_ingot',
	G: 'spelunkery:compression_blast_miner',
	H: 'ars_nouveau:earth_essence',
	I: 'embers:ember_bore'
  });	
  event.shaped('mining_dimension:teleporter', [
    'ABC',
    'DEF',
    'GHI'
	], {
    A: 'l2complements:sculkium_ingot',
	B: 'celestial_core:earth_core',
	C: 'undergarden:utherium_crystal',
	D: 'l2complements:explosion_shard',
	E: 'minecraft:netherite_pickaxe',
	F: 'cataclysm:black_steel_ingot',
	G: 'cataclysm:amethyst_crab_shell',
	H: 'aether_redux:gravitite_ingot',
	I: 'hmag:ancient_stone'
  });	
  
    event.shaped('kubejs:essence_monster_raw', [
		'AAA',
		'AAA',
		'AAA'
    ],{
	A: 'kubejs:essence_monster'
	});
  
  event.blasting('cataclysm:black_steel_ingot', 'graveyard:dark_iron_ingot');
  event.blasting('aquaculture:neptunium_ingot', 'aquaculture:neptunes_bounty');
  
  event.shapeless(
  Item.of('tombstone:essence_of_undeath', 1),
  [
    '2x #forge:ash',
    'celestial_core:death_essence',
    'minecraft:glass_bottle'
  ]);
  event.shapeless(
  Item.of('minecraft:heart_of_the_sea', 1),
  [
    'celestial_core:ocean_essence',
    'celestial_core:heart_fragment'
  ]);
  event.shapeless(
  Item.of('minecraft:shulker_shell', 1),
  [
    'celestial_core:shulker_scrap'
  ]);
  event.shapeless(
  Item.of('minecraft:obsidian', 8),
  [
    'celestial_core:ocean_essence',
    'celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('minecraft:gunpowder', 8),
  [
    'celestial_core:death_essence',
    'celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('minecraft:sand', 16),
  [
    'celestial_core:ocean_essence',
    'celestial_core:death_essence'
  ]);
  event.shapeless(
  Item.of('aether:phoenix_helmet', 1),
  [
    'aether:obsidian_helmet',
    '4x celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('aether:phoenix_chestplate', 1),
  [
    'aether:obsidian_chestplate',
    '4x celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('aether:phoenix_leggings', 1),
  [
    'aether:obsidian_leggings',
    '4x celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('aether:phoenix_boots', 1),
  [
    'aether:obsidian_boots',
    '4x celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('aether:phoenix_gloves', 1),
  [
    'aether:obsidian_gloves',
    '4x celestial_core:fire_essence'
  ]);
  event.shapeless(
  Item.of('nameless_trinkets:nelumbo', 1),
  [
    'celestial_core:ocean_essence',
    'nameless_trinkets:dark_nelumbo'
  ]);
  event.shapeless(
  Item.of('nameless_trinkets:dark_nelumbo', 1),
  [
    'celestial_core:fire_essence',
	'nameless_trinkets:nelumbo'
  ]);
  event.shapeless(
  Item.of('dimdungeons:item_portal_key', 1),
  [
    'minecraft:name_tag',
	'minecraft:blaze_rod',
	'2x l2hostility:miracle_powder'
  ]);
  event.shapeless(
  Item.of('dimdungeons:item_blank_build_key', 1),
  [
    'minecraft:obsidian',
	'minecraft:diamond',
	'spelunkery:portal_fluid_bottle'
  ]);
  event.shapeless(
  Item.of('bonfires:large_titanite_shard', 1),
  [
    '2x bonfires:titanite_shard',
	'aether:ambrosium_shard'
  ]);
  event.shapeless(
  Item.of('bonfires:titanite_chunk', 1),
  [
    '2x bonfires:large_titanite_shard',
	'landsoficaria:sliver'
  ]);
  event.shapeless(
  Item.of('bonfires:titanite_slab', 1),
  [
    '2x bonfires:titanite_chunk',
	'undergarden:forgotten_ingot'
  ]);
  event.shapeless(
  Item.of('aether_redux:gravitite_ingot', 1),
  [
	'aether:enchanted_gravitite'
  ]);
  
  event.shaped('apotheotic_additions:sacrificial_shelf', [
    'GBG',
    'SSS',
    'GBG'
	], {
	G: 'minecraft:gold_block',
	B: 'bloodmagic:weakbloodshard',
	S: 'bloodmagic:etherealslate'
  });
  event.shaped('apotheotic_additions:wavebinders_shelf', [
    'GPG',
    'OSO',
    'GPG'
	], {
	G: 'minecraft:gold_block',
	P: 'l2complements:poseidite_ingot',
	S: 'l2complements:storm_core',
	O: 'celestial_core:ocean_essence'
  });
  event.shaped('apotheotic_additions:void_shelf', [
    'GVG',
    'ECE',
    'GVG'
	], {
	G: 'minecraft:gold_block',
	E: 'l2complements:void_eye',
	C: 'celestial_artifacts:nebula_cube',
	V: 'celestial_core:void_essence'
  });
  event.shaped('apotheotic_additions:terra_shelf', [
    'GGG',
    'IBI',
    'GGG'
	], {
	G: 'naturesaura:gold_powder',
	B: 'apotheosis:beeshelf',
	I: 'naturesaura:infused_iron'
  });


  function compressRecipe(item1, item2, reversed) {
    event.shaped(item1, ["AAA", "AAA", "AAA"], { A: item2 });
    if (reversed) {
      event.shapeless(Item.of(item2, 9), [item1]);
    }
  }

  compressRecipe("kubejs:coin_02", "kubejs:coin_01", true);
  compressRecipe("kubejs:coin_03", "kubejs:coin_02", true);
  compressRecipe("kubejs:coin_04", "kubejs:coin_03", true);
  compressRecipe("kubejs:coin_05", "kubejs:coin_04", true);
  compressRecipe("kubejs:coin_06", "kubejs:coin_05", true);

  event.shapeless("ars_nouveau:ritual_awakening", [
    "ars_nouveau:green_archwood_log",
    "ars_nouveau:red_archwood_sapling",
    "ars_nouveau:blue_archwood_sapling",
    "ars_nouveau:green_archwood_sapling",
    "ars_nouveau:purple_archwood_sapling",
    "ars_elemental:yellow_archwood_sapling",
    "3x ars_nouveau:source_gem",
  ]);
  event.shapeless("ars_nouveau:ritual_containment", [
    "ars_nouveau:purple_archwood_log",
    "ars_nouveau:manipulation_essence",
    "3x ars_nouveau:mob_jar",
  ]);
  event.shapeless("ars_nouveau:ritual_flowering", [
    "ars_nouveau:green_archwood_log",
    "6x #minecraft:flowers",
    "ars_nouveau:earth_essence",
  ]);


  let ars_nouveau = event.recipes.ars_nouveau;

  ars_nouveau.enchanting_apparatus(
    [
      "ars_nouveau:source_gem",
      "ars_nouveau:magebloom_crop",
      "ars_nouveau:magebloom",
      "minecraft:diamond",
      "#minecraft:saplings",
      "#minecraft:saplings",
      "#minecraft:saplings",
      "#forge:seeds",
    ],
    "ars_nouveau:whirlisprig_shards",
    "ars_nouveau:whirlisprig_charm"
  );

  ars_nouveau.enchanting_apparatus(
    [
      "minecraft:netherite_ingot",
      "minecraft:gold_block",
      "minecraft:gold_block",
      "ars_nouveau:source_gem_block",
      "ars_nouveau:source_gem_block",
    ],
    "minecraft:diamond_sword",
    "ars_nouveau:enchanters_sword"
  );

	event.shaped('kubejs:portable_dissolver', [
    'EGE',
    'GRG',
    'ALA'
	], {
    E: 'kubejs:dust_experience',
	G: 'minecraft:glass',
	R: 'minecraft:repeater',
	A: 'minecraft:amethyst_shard',
	L: 'minecraft:lapis_lazuli'
	})

	event.shapeless('2x kubejs:dust_experience', [
    'kubejs:portable_dissolver',
    'kubejs:scroll_exp'
	]).damageIngredient(Item.of('kubejs:portable_dissolver'))
  
	event.shapeless('kubejs:dust_experience', [
    'kubejs:portable_dissolver',
    'minecraft:experience_bottle'
	]).damageIngredient(Item.of('kubejs:portable_dissolver'))
  
	event.shapeless('2x kubejs:dust_experience', [
    'kubejs:portable_dissolver',
    'minecraft:lapis_lazuli'
	]).damageIngredient(Item.of('kubejs:portable_dissolver'))
  
	event.shapeless('kubejs:dust_experience', [
    'kubejs:portable_dissolver',
    'minecraft:amethyst_block'
	]).damageIngredient(Item.of('kubejs:portable_dissolver'))
  
	event.shapeless('2x kubejs:dust_experience', [
    'kubejs:portable_dissolver',
    'kubejs:spawnercore'
	]).damageIngredient(Item.of('kubejs:portable_dissolver'))


	event.shaped('kubejs:portable_transmutator', [
    'EGE',
    'GRG',
    'ALA'
	], {
    E: 'kubejs:dust_alchemical',
	G: 'minecraft:glass',
	R: 'minecraft:comparator',
	A: 'minecraft:amethyst_shard',
	L: 'minecraft:lapis_lazuli'
	})
	
	event.shapeless('2x kubejs:dust_alchemical', [
    'kubejs:portable_transmutator',
    'minecraft:ender_pearl'
	]).damageIngredient(Item.of('kubejs:portable_transmutator'))
  
	event.shapeless('2x kubejs:dust_alchemical', [
    'kubejs:portable_transmutator',
    'minecraft:blaze_powder'
	]).damageIngredient(Item.of('kubejs:portable_transmutator'))
  
	event.shapeless('2x kubejs:dust_alchemical', [
    'kubejs:portable_transmutator',
    'apotheosis:gem_dust'
	]).damageIngredient(Item.of('kubejs:portable_transmutator'))
    
	event.shapeless('2x kubejs:dust_alchemical', [
    'kubejs:portable_transmutator',
    'kubejs:spawnercore'
	]).damageIngredient(Item.of('kubejs:portable_transmutator'))
  
  
  	event.shaped('kubejs:portable_salvager', [
    'EGE',
    'GRG',
    'ALA'
	], {
    E: 'kubejs:scraps',
	G: 'minecraft:glass',
	R: 'minecraft:comparator',
	A: 'minecraft:amethyst_shard',
	L: 'minecraft:lapis_lazuli'
	})
	
	event.shaped('kubejs:sifter', [
    'TTT',
    'SSS',
    'TTT'
	], {
    S: 'minecraft:string',
	T: 'minecraft:stick'
	})
	
	event.shapeless('kubejs:sifted_dust', [
    'kubejs:sifter',
    'spelunkery:dust_block'
	]).damageIngredient(Item.of('kubejs:sifter'))
	
	event.shapeless('2x kubejs:scraps', [
    'kubejs:portable_salvager',
    'minecraft:ender_pearl'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
	
	event.shapeless('kubejs:scraps', [
    'kubejs:portable_salvager',
    'minecraft:raw_copper_block'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
  
	event.shapeless('2x kubejs:scraps', [
    'kubejs:portable_salvager',
    'minecraft:blaze_powder'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
  
	event.shapeless('2x kubejs:scraps', [
    'kubejs:portable_salvager',
    'apotheosis:gem_dust'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
  
  	event.shapeless('kubejs:scraps', [
    'kubejs:portable_salvager',
    'minecraft:gold_block'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
  
	event.shapeless('2x kubejs:scraps', [
    'kubejs:portable_salvager',
    'kubejs:spawnercore'
	]).damageIngredient(Item.of('kubejs:portable_salvager'))
////////////////	END
});
    
