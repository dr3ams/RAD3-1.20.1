Ponder.registry((e) => {
    e.create('embers:pressure_refinery').scene('pressure_refinery_scene_one', "Generating Tier 2 Ember Power", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 2, 2], "embers:pressure_refinery");
        scene.world.setBlocks([2, 3, 2], "embers:pressure_refinery");

        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:pressure_refinery").with("half", "upper"), false);

        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        let topRefinery = util.select.fromTo(2, 3, 2, 2, 3, 2)
        let bottomRefinery = util.select.fromTo(2, 2, 2, 2, 2, 2)

        scene.idle(10);

        scene.text(120, "The Pressure Refinery turns Ember Crystals into Ember Power at up to x4 the Ember Activator.")

        scene.idle(140);

        scene.addLazyKeyframe();

        scene.text(60, "The block below the Refinery is the multiplier block.", [2, 1, 2])

        scene.idle(80);

        scene.text(60, "At minimum, it multiplies power production by x1.5...")

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('minecraft:oxidized_copper')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "minecraft:oxidized_copper");
        scene.world.showSection([2, 1, 2], Facing.EAST);

        scene.idle(40);

        scene.text(100, "And at maximum, x4. See JEI for the list of multiplier blocks.")
        
        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('aquaculture:neptunium_block')

        scene.idle(40);

        scene.world.hideSection([2, 1, 2], Facing.EAST);
        
        scene.idle(20);
        
        scene.world.setBlocks([2, 1, 2], "aquaculture:neptunium_block", false);
        scene.world.showSection([2, 1, 2], Facing.EAST);
        
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom portion of the Pressure Refinery receives Ember Crystals & Shards...", [2, 2, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomRefinery, 80)

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "minecraft:hopper");
        scene.world.modifyBlock([3, 2, 2], () => Block.id("minecraft:hopper").with("facing", "west"), false); 
        scene.world.showSection([3, 2, 2], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('embers:ember_crystal')

        scene.idle(40);

        const hopper = util.grid.at(3, 5, 2)
        const hopperTop = util.vector.topOf(hopper)

        const emberShard = scene.world.createItemEntity(hopperTop, util.vector.of(0, -0.4, 0), "embers:ember_shard");
        scene.idle(5);
        const emberCrystal = scene.world.createItemEntity(hopperTop, util.vector.of(0, -0.4, 0), "embers:ember_crystal");
        scene.idle(5);
        const emberCluster = scene.world.createItemEntity(hopperTop, util.vector.of(0, -0.4, 0), "embers:ember_crystal_cluster");
        
        scene.idle(30);

        scene.world.removeEntity(emberShard);
        scene.world.removeEntity(emberCrystal);
        scene.world.removeEntity(emberCluster);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "As well as a constant supply of water.", [2, 2, 2])
        
        scene.world.setBlocks([0, 0, 2], "minecraft:water", false);
        scene.world.setBlocks([0, 0, 1], "minecraft:water", false);
        scene.world.setBlocks([0, 0, 0], "minecraft:water", false);

        scene.idle(40);

        scene.showControls(35, [0, 3, 1], "down").rightClick().withItem('embers:mechanical_pump')
        
        scene.idle(40);

        scene.world.setBlocks([0, 1, 1], "embers:mechanical_pump");
        scene.world.setBlocks([0, 2, 1], "embers:mechanical_pump");
        scene.world.modifyBlock([0, 2, 1], () => Block.id("embers:mechanical_pump").with("half", "upper"), false);
        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.world.showSection([0, 2, 1], Facing.DOWN);
        
        scene.idle(5);

        scene.world.setBlocks([1, 2, 2], "embers:fluid_pipe");
        scene.world.setBlocks([1, 2, 1], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 2, 1], (nbt) => {
            nbt.connection3 = 2
            nbt.connection4 = 3
            nbt.connection1 = 4
        });
        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.connection2 = 2
            nbt.connection5 = 3
        });

        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.showSection([1, 2, 1], Facing.DOWN);
        
        scene.idle(10);

        scene.world.setBlocks([1, 3, 1], "embers:caminite_lever");
        scene.world.modifyBlock([1, 3, 1], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        scene.world.showSection([1, 3, 1], Facing.DOWN);
        
        scene.idle(40);
        
        scene.showControls(35, [1, 4, 1], "down").rightClick()

        scene.idle(40);
        scene.world.modifyBlock([1, 3, 1], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 3, 1]);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Finally, the multiplier block must be surrounded by lava or fire.", [2, 2, 2])

        scene.world.setBlocks([2, 0, 1], "minecraft:netherrack", false);
        scene.world.setBlocks([3, 0, 2], "minecraft:netherrack", false);
        scene.world.setBlocks([2, 0, 3], "minecraft:netherrack", false);
        scene.world.setBlocks([1, 0, 2], "minecraft:netherrack", false);

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('minecraft:flint_and_steel')

        scene.world.showSection([2, 1, 1], Facing.DOWN);
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 1, 3], Facing.DOWN);
        scene.world.showSection([1, 1, 2], Facing.DOWN);

        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "minecraft:fire");
        scene.world.setBlocks([3, 1, 2], "minecraft:fire");
        scene.world.setBlocks([2, 1, 3], "minecraft:fire");
        scene.world.setBlocks([1, 1, 2], "minecraft:fire");

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "Ember can be extracted from the top using an Ember Emitter.")

        scene.overlay.showOutline(PonderPalette.GREEN, "block", topRefinery, 80)

        scene.idle(40);

        scene.showControls(35, [2, 5, 2], "down").rightClick().withItem('embers:ember_emitter')
        
        scene.idle(40);

        scene.world.setBlocks([2, 4, 2], "embers:ember_emitter");
        scene.world.modifyBlock([2, 4, 2], () => Block.id("embers:ember_emitter").with("facing", "up"), false); 

        scene.world.showSection([2, 4, 2], Facing.DOWN);

        scene.idle(60);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Ember Emitter has a redstone signal to extract!", [2, 4.5, 2])

        scene.idle(30);

        scene.showControls(35, [2, 5, 1], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([2, 4, 1], "embers:caminite_lever");

        scene.world.modifyBlock([2, 4, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 
        scene.world.modifyBlock([2, 4, 2], () => Block.id("embers:ember_emitter").with("facing", "up").with("front", true), false); 
        scene.world.showSection([2, 4, 1], Facing.SOUTH);

        scene.idle(40);

        scene.world.modifyBlock([2, 4, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([2, 4, 1]);

    });
});