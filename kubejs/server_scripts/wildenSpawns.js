const spawns = [
    ["#minecraft:is_overworld", "wilden_hunter"],
    ["#minecraft:is_overworld", "wilden_stalker"],
    ["#forge:is_cold/overworld", "wilden_guardian"],
  ];
  
  ServerEvents.highPriorityData(event => {
    spawns.forEach(([biomes, wilden]) => {
      event.addJson(`ars_nouveau:forge/biome_modifier/${wilden}_spawn`, {
        type: "forge:add_spawns",
        biomes: biomes,
        spawners: {
          type: `ars_nouveau:${wilden}`,
          maxCount: 1,
          minCount: 1,
          weight: 5,
        }
      });
    });
  });