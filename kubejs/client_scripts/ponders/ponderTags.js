Ponder.tags((e) => {

  const emberMachines = [
    "embers:mechanical_core",
    "embers:ember_bore",
    "embers:atmospheric_gauge",
    "embers:field_chart",
    "embers:melter",
    "embers:geologic_separator",
    "embers:stamper",
    "embers:stamp_base",
    "embers:hearth_coil",
    "embers:heat_insulation",
    "embers:char_instiller",
    "embers:atmospheric_bellows",
    "embers:mixer_centrifuge",
    "embers:alchemy_tablet",
    "embers:alchemy_pedestal",
    "embers:beam_cannon",
    "embers:mnemonic_inscriber",
    "embers:entropic_enumerator",
    "embers:codebreaking_slate",
    "embers:cinder_plinth",
    "embers:mini_boiler",
    "embers:steam_bucket",
    "embers:dwarven_gas_bucket",
    "embers:catalytic_plug",
    "embers:wildfire_stirling",
    "embers:dawnstone_anvil",
    "embers:automatic_hammer",
    "embers:isolated_materia",
    "embers:ancient_motive_core",
    "embers:inferno_forge",
    "embers:ember_injector",
    "embers:iron_crystal_seed",
  ];

  e.createTag(
    "rad3:ember_machines",
    "embers:alchemy_tablet",
    "Ember Machines",
    "Ember machines, upgrades, and other constructs",
    emberMachines
  );

  const emberPower = [
    "embers:ember_activator",
    "embers:ember_emitter",
    "embers:ember_receptor",
    "embers:ember_ejector",
    "embers:ember_funnel",
    "embers:ember_relay",
    "embers:mirror_relay",
    "embers:beam_splitter",
    "embers:copper_cell",
    "embers:crystal_cell",
    "embers:ember_dial",
    "embers:heat_exchanger",
    "embers:pressure_refinery",
    "embers:ignem_reactor",
    "embers:catalysis_chamber",
    "embers:combustion_chamber",
  ];
  e.createTag(
    "rad3:ember_power",
    "embers:copper_cell",
    "Ember Power",
    "Components used for generating, transporting, and storing Ember power",
    emberPower
  );
  const emberPowerGen = [
    "embers:ember_activator",
    "embers:heat_exchanger",
    "embers:pressure_refinery",
    "embers:ignem_reactor",
    "embers:catalysis_chamber",
    "embers:combustion_chamber",
  ];
  e.createTag(
    "rad3:ember_power_gen",
    "embers:pressure_refinery",
    "Ember Power Generation",
    "Ember power generation options",
    emberPowerGen
  );

  const emberItemTransport = [
    "embers:bin",
    "embers:item_pipe",
    "embers:item_extractor",
    "embers:item_transfer",
    "embers:item_dial",
    "embers:item_dropper",
    "embers:item_vacuum",
    "translocators:item_translocator",
  ];
  e.createTag(
    "rad3:ember_item_transport",
    "embers:bin",
    "Item Transport",
    "Components for transporting items",
    emberItemTransport
  );

  const emberFluids = [
    "embers:fluid_vessel",
    "embers:fluid_pipe",
    "embers:fluid_extractor",
    "embers:fluid_transfer",
    "embers:fluid_dial",
    "embers:reservoir",
    "embers:caminite_ring",
    "embers:caminite_gauge",
    "embers:caminite_valve",
    "embers:mechanical_pump",
    "translocators:fluid_translocator",
    "embers:melter",
    "embers:geologic_separator",
    "embers:stamper",
    "embers:stamp_base",
    "embers:mixer_centrifuge",
    "embers:mini_boiler",
    "embers:steam_bucket",
    "embers:dwarven_gas_bucket",
    "embers:catalytic_plug",
    "embers:wildfire_stirling",
  ];
  e.createTag(
    "rad3:ember_fluid_management",
    "embers:fluid_vessel",
    "Fluid Management",
    "Components used for transporting, managing, or creating fluids",
    emberFluids
  );

});
