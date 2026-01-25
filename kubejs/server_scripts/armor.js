ServerEvents.recipes(event => {
    // Helper function to define armor sets
    // Format: [OutputID, MaterialID, BaseArmorID]
    const armorProgression = [
        // Main
        ['minecraft:iron', 'minecraft:iron_ingot', 'minecraft:leather'],
        ['minecraft:diamond', 'minecraft:diamond', 'minecraft:iron'],
        ['minecraft:netherite', 'minecraft:netherite_ingot', 'minecraft:diamond'],
        
        // Netherite
        ['l2complements:eternium', 'l2complements:eternium_ingot', 'minecraft:netherite'],
        ['cataclysm:cursium', 'cataclysm:cursium_ingot', 'minecraft:netherite'], 
        ['cataclysm:ignitium', 'cataclysm:ignitium_ingot', 'minecraft:netherite'],

        // Sculkium/Shulker
        ['l2complements:sculkium', 'l2complements:sculkium_ingot', 'minecraft:diamond'],
        ['l2complements:shulkerate', 'l2complements:shulkerate_ingot', 'minecraft:iron'],

        // Ocean
        ['celestial_core:ocean', 'celestial_core:ocean_ingot', 'minecraft:iron'],
        ['aquaculture:neptunium', 'aquaculture:neptunium_ingot', 'celestial_core:ocean'],
        ['l2complements:poseidite', 'l2complements:poseidite_ingot', 'celestial_core:ocean'],
		['l2complements:poseidite', 'l2complements:poseidite_ingot', 'aquaculture:neptunium'],

        // Gold
        ['minecraft:golden', 'minecraft:gold_ingot', 'minecraft:leather'],
        ['celestial_core:virtual_gold', 'celestial_core:virtual_gold_ingot', 'minecraft:golden'],
        ['celestial_core:sakura', 'celestial_core:sakura_steel', 'minecraft:golden'],
        ['l2complements:totemic_gold', 'l2complements:totemic_gold_ingot', 'minecraft:golden'],

        // Undergarden
        ['undergarden:cloggrum', 'undergarden:cloggrum_ingot', 'minecraft:leather'],
        ['undergarden:froststeel', 'undergarden:froststeel_ingot', 'undergarden:cloggrum'],
        ['undergarden:utherium', 'undergarden:utherium_crystal', 'undergarden:cloggrum'],

        // Aether
        ['aether:zanite', 'aether:zanite_gemstone', 'minecraft:leather'],
        ['deep_aether:skyjade', 'deep_aether:skyjade', 'minecraft:leather'],
        ['aether:gravitite', 'aether:enchanted_gravitite', 'aether:zanite'],
        ['aether:gravitite', 'aether:enchanted_gravitite', 'deep_aether:skyjade'],
        ['ancient_aether:valkyrum', 'ancient_aether:valkyrum', 'aether:zanite'],
		['ancient_aether:valkyrum', 'ancient_aether:valkyrum', 'deep_aether:skyjade'],
        ['deep_aether:stratus', 'deep_aether:stratus_ingot', 'aether:gravitite'],

        // Icaria Path (Aeternae Hide branch)
        ['landsoficaria:chalkos', 'landsoficaria:chalkos_ingot', 'landsoficaria:aeternae_hide'],
        ['landsoficaria:kassiteros', 'landsoficaria:kassiteros_ingot', 'landsoficaria:aeternae_hide'],
        ['landsoficaria:orichalcum', 'landsoficaria:orichalcum_ingot', 'landsoficaria:chalkos'],
        ['landsoficaria:orichalcum', 'landsoficaria:orichalcum_ingot', 'landsoficaria:kassiteros'],
        ['landsoficaria:vanadiumsteel', 'landsoficaria:vanadiumsteel_ingot', 'landsoficaria:orichalcum']
    ];

    const pieces = [
        { slot: 'helmet',     pattern: ['ABA', 'A A', '   '] },
        { slot: 'chestplate', pattern: ['A A', 'ABA', 'AAA'] },
        { slot: 'leggings',   pattern: ['ABA', 'A A', 'A A'] },
        { slot: 'boots',      pattern: ['ABA', '   ', '   '] }
//        { slot: 'gloves',     pattern: ['   ', 'ABA', '   '] }
    ];

    armorProgression.forEach(tier => {
        let [output, material, base] = tier;

        pieces.forEach(piece => {
            let outputItem = `${output}_${piece.slot}`;
            let baseItem = `${base}_${piece.slot}`;

            // Check if the items actually exist to prevent errors if a mod is missing
            if (Item.exists(outputItem) && Item.exists(baseItem)) {
                
                // Remove existing recipe
                event.remove({ output: outputItem });

                // Add new progressive recipe
                event.shaped(Item.of(outputItem), piece.pattern, {
                    A: material,
                    B: baseItem
                })
                .modifyResult((grid, result) => {
                    const item = grid.find(baseItem);
                    return result.withNBT(item.nbt);
                });
            }
        });
    });
});