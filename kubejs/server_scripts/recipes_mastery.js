// priority: 0

console.info("Masteries recipes script is loading...");

ServerEvents.recipes((event) => {
  // ──────────────────────────────────────────────
  // SHAPELESS RECIPES  (tool damages on use)
  // Each entry: [ingredient, output_count, output_item]
  // Tool item is the key of each group below.
  // ──────────────────────────────────────────────

  // enchanter — converts items into dust_experience
  const DISSOLVER = [
    ['kubejs:scroll_exp',           2, 'kubejs:dust_experience'],
    ['minecraft:experience_bottle', 1, 'kubejs:dust_experience'],
    ['minecraft:lapis_lazuli',      2, 'kubejs:dust_experience'],
    ['minecraft:amethyst_block',    1, 'kubejs:dust_experience'],
    ['kubejs:spawnercore',          2, 'kubejs:dust_experience'],
    ['shieldinghealth:power_token', 5, 'kubejs:dust_experience'],
  ];

  // alchemy — converts items into dust_alchemical
  const TRANSMUTATOR = [
    ['minecraft:ender_pearl',       2, 'kubejs:dust_alchemical'],
    ['minecraft:blaze_powder',      2, 'kubejs:dust_alchemical'],
    ['apotheosis:gem_dust',         2, 'kubejs:dust_alchemical'],
    ['kubejs:spawnercore',          2, 'kubejs:dust_alchemical'],
    ['shieldinghealth:power_token', 5, 'kubejs:dust_alchemical'],
  ];

  // salvaging — converts items into scraps
  const SALVAGER = [
    ['minecraft:ender_pearl',       2, 'kubejs:scraps'],
    ['minecraft:raw_copper_block',  1, 'kubejs:scraps'],
    ['minecraft:blaze_powder',      2, 'kubejs:scraps'],
    ['apotheosis:gem_dust',         2, 'kubejs:scraps'],
    ['minecraft:gold_block',        1, 'kubejs:scraps'],
    ['kubejs:spawnercore',          2, 'kubejs:scraps'],
    ['shieldinghealth:power_token', 5, 'kubejs:scraps'],
  ];

  // ──────────────────────────────────────────────
  // SHAPED RECIPES
  // ──────────────────────────────────────────────

  const SHAPED = [
    {
      output: 'kubejs:portable_dissolver',
      pattern: ['EGE', 'GRG', 'ALA'],
      key: { E: 'kubejs:dust_experience', G: 'minecraft:glass', R: 'minecraft:repeater', A: 'minecraft:amethyst_shard', L: 'minecraft:lapis_lazuli' }
    },
    {
      output: 'kubejs:portable_transmutator',
      pattern: ['EGE', 'GRG', 'ALA'],
      key: { E: 'kubejs:dust_alchemical', G: 'minecraft:glass', R: 'minecraft:comparator', A: 'minecraft:amethyst_shard', L: 'minecraft:lapis_lazuli' }
    },
    {
      output: 'kubejs:portable_salvager',
      pattern: ['EGE', 'GRG', 'ALA'],
      key: { E: 'kubejs:scraps', G: 'minecraft:glass', R: 'minecraft:comparator', A: 'minecraft:amethyst_shard', L: 'minecraft:lapis_lazuli' }
    },
    {
      output: 'kubejs:sifter',
      pattern: ['TTT', 'SSS', 'TTT'],
      key: { S: 'minecraft:string', T: 'minecraft:stick' }
    },
  ];

  for (const r of SHAPED) {
    event.shaped(r.output, r.pattern, r.key);
  }

  // sifter — processes dust blocks
  const SIFTER = [
    ['spelunkery:dust_block',       1, 'kubejs:sifted_dust'],
  ];

  // register all groups
  const SHAPELESS_GROUPS = [
    ['kubejs:portable_dissolver',   DISSOLVER],
    ['kubejs:portable_transmutator',TRANSMUTATOR],
    ['kubejs:portable_salvager',    SALVAGER],
    ['kubejs:sifter',               SIFTER],
  ];

  for (const [tool, recipes] of SHAPELESS_GROUPS) {
    for (const [ingredient, count, output] of recipes) {
      event.shapeless(`${count}x ${output}`, [tool, ingredient])
           .damageIngredient(Item.of(tool));
    }
  }

  // ──────────────────────────────────────────────
  // END
  // ──────────────────────────────────────────────
});