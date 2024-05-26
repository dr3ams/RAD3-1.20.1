// priority: 0

console.info("New recipes script is loading...");

const removals = [
  "gag:time_sand_pouch",
  "gag:escape_rope",
  "gag:hearthstone",
  "gag:sacred_salt",
  "gag:sacred_salve",
  "gag:sacred_balm",
  "sophisticatedbackpacks:stack_upgrade_starter_tier",
  "sophisticatedbackpacks:stack_upgrade_tier_1",
  "sophisticatedbackpacks:stack_upgrade_tier_2",
  "sophisticatedbackpacks:stack_upgrade_tier_3",
  "sophisticatedbackpacks:stack_upgrade_tier_4",
  "sophisticatedbackpacks:backpack",
  "sophisticatedbackpacks:copper_backpack",
  "sophisticatedbackpacks:iron_backpack",
  "sophisticatedbackpacks:gold_backpack",
  "sophisticatedbackpacks:diamond_backpack",
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
  "starbunclemania:star_battery",
  "starbunclemania:star_sword",
  "ars_creo:starbuncle_wheel",
  "tomeofblood:novice_tome_of_blood",
  "tomeofblood:apprentice_tome_of_blood",
  "tomeofblood:archmage_tome_of_blood",
  "ars_instrumentum:fake_wilden_tribute",
  "l2complements:eternal",
  "l2complements:invincible",
  "occultism:miner_debug_unspecialized",
  "sophisticatedbackpacks:crafting_upgrade",
  "sophisticatedstorage:crafting_upgrade",
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
  "toms_storage:ts.trim",
  "toms_storage:ts.open_crate",
  "toms_storage:ts.inventory_proxy",
  "toms_storage:ts.wireless_terminal",
  "toms_storage:ts.adv_wireless_terminal",
  "toms_storage:ts.trim",
  "toms_storage:ts.level_emitter",
  "toms_storage:ts.adv_wireless_terminal",
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
  ["sophisticatedbackpacks:void_upgrade", "sophisticatedstorage:void_upgrade"],
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
  ["sophisticatedbackpacks:pump_upgrade", "sophisticatedstorage:pump_upgrade"],
  [
    "sophisticatedbackpacks:advanced_pump_upgrade",
    "sophisticatedstorage:advanced_pump_upgrade",
  ],
  [
    "sophisticatedbackpacks:xp_pump_upgrade",
    "sophisticatedstorage:xp_pump_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/botanist_workbench_upgrade",
    "sophisticatedstorage:chipped/botanist_workbench_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/glassblower_upgrade",
    "sophisticatedstorage:chipped/glassblower_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/carpenters_table_upgrade",
    "sophisticatedstorage:chipped/carpenters_table_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/loom_table_upgrade",
    "sophisticatedstorage:chipped/loom_table_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/mason_table_upgrade",
    "sophisticatedstorage:chipped/mason_table_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/alchemy_bench_upgrade",
    "sophisticatedstorage:chipped/alchemy_bench_upgrade",
  ],
  [
    "sophisticatedbackpacks:chipped/tinkering_table_upgrade",
    "sophisticatedstorage:chipped/tinkering_table_upgrade",
  ],
]);

ServerEvents.recipes((event) => {
  // Change recipes here
  removals.forEach((element) => {
    event.remove({ output: element });
  });
  event.remove({ input: "ars_instrumentum:fake_wilden_tribute" });

  function shapedStarRecipe(OutputItem, item1, item2, item3) {
    event.shaped(OutputItem, ["BPB", "PCP", "BPB"], {
      B: item1,
      P: item2,
      C: item3,
    });
  }

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

  event.shapeless("sophisticatedbackpacks:upgrade_base", ["#curios:bundle"]);
  shapedStarRecipe(
    Item.of("sophisticatedbackpacks:stack_upgrade_starter_tier", 3),
    "#forge:storage_blocks/copper",
    "sophisticatedbackpacks:backpack",
    "sophisticatedbackpacks:upgrade_base"
  );
  shapedStarRecipe(
    Item.of("sophisticatedbackpacks:stack_upgrade_tier_1", 3),
    "#forge:storage_blocks/iron",
    "sophisticatedbackpacks:stack_upgrade_starter_tier",
    "sophisticatedbackpacks:copper_backpack"
  );
  shapedStarRecipe(
    Item.of("sophisticatedbackpacks:stack_upgrade_tier_2", 3),
    "#forge:storage_blocks/gold",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "sophisticatedbackpacks:iron_backpack"
  );
  shapedStarRecipe(
    Item.of("sophisticatedbackpacks:stack_upgrade_tier_3", 3),
    "#forge:storage_blocks/diamond",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:gold_backpack"
  );
  shapedStarRecipe(
    Item.of("sophisticatedbackpacks:stack_upgrade_tier_4", 3),
    "#forge:storage_blocks/netherite",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:diamond_backpack"
  );

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
    { output: "l2hostility:ring_of_life" },
    "l2hostility:undying",
    "l2hostility:protection"
  );

  upgradeMap.forEach((key, value) => {
    event.shapeless(Item.of(key), [Item.of(value)]);
    event.shapeless(Item.of(value), [Item.of(key)]);
  });

  function compressRecipe(item1, item2, reversed) {
    event.shaped(item1, ["AAA", "AAA", "AAA"], { A: item2 });
    if (reversed) {
      event.shapeless(Item.of(item2, 9), [item1]);
    }
  }

  compressRecipe("minecraft:diamond", "kubejs:diamond_nugget", true);
  compressRecipe("minecraft:emerald", "kubejs:emerald_nugget", true);
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

  event.recipes.create.mixing("ars_nouveau:source_berry_pie", [
    "farmersdelight:pie_crust",
    "minecraft:sugar",
    "3x ars_nouveau:sourceberry_bush",
    "#forge:eggs",
    "ars_nouveau:magebloom",
  ]);

  let ars_nouveau = event.recipes.ars_nouveau;

  ars_nouveau.enchanting_apparatus(
    [
      "#forge:planks",
      "create:shaft",
      "#forge:planks",
      "create:shaft",
      "#forge:planks",
      "create:shaft",
      "#forge:planks",
      "create:shaft",
    ],
    "ars_nouveau:starbuncle_charm",
    "ars_creo:starbuncle_wheel"
  );

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


});
    