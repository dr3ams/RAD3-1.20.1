Ponder.registry((e) => {
    e.create(['embers:copper_cell', 'embers:crystal_cell', 'embers:ember_dial']).scene('power_storage_scene_one', "Storing Power", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:copper_cell");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        
        scene.idle(10);

        scene.text(80, "Ember power can be stored in multiple ways.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(80, "A Copper Cell stores 24,000 Ember power, and retains its power when broken.", [2, 1, 2])

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(120, "Its power level can be read using an Ember Dial.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:ember_dial')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:ember_dial");
        scene.world.showSection([2, 1, 1], Facing.DOWN);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:ember_dial").with("facing", "north"), false); 

        scene.idle(60);

        scene.addLazyKeyframe();
        
        scene.text(120, "A Comparator can be attached to get its power level as a redstone signal.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('minecraft:comparator')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 0], "minecraft:comparator");
        scene.world.showSection([2, 1, 0], Facing.SOUTH);
        scene.world.modifyBlock([2, 1, 0], () => Block.id("minecraft:comparator").with("powered", true).with("facing", "south"), false); 
        scene.idle(7);
        scene.effects.indicateRedstone([2, 1, 0]);

        scene.idle(80);
        scene.world.hideSection([2, 1, 2], Facing.UP);
        scene.world.hideSection([2, 1, 0], Facing.UP);
        scene.world.hideSection([2, 1, 1], Facing.UP);

        scene.addLazyKeyframe();

        scene.text(80, "For more power storage, a Crystal Cell stores 64,000 Ember power.")

        scene.idle(40);
        
        scene.world.setBlocks([2, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 0], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 1], "minecraft:air", false);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:crystal_cell')
        
        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "crystal_cell", 3)
        global.showPonderLayer(scene, 0, 3);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "To insert and extract power, you'll need a Mechanical Core on the bottom.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:mechanical_core')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core");
        scene.world.showSection([2, 2, 2], Facing.UP);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:mechanical_core").with("facing", "up"), false);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.world.setBlocks([2, 2, 1], "minecraft:hopper");
        scene.world.showSection([2, 2, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 2, 1], () => Block.id("minecraft:hopper").with("facing", "south"), false);

        scene.text(80, "To upgrade the Crystal Cells's storage capacity, insert Ember fuel items using a Hopper or Pipe.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:ember_crystal')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 3, 2], (nbt) => {
            nbt["embers:ember_capacity"] = 200000
        });

        scene.idle(80);

        scene.text(80, "The maximum storage of the Crystal Cell is 1,440,000 Ember.")

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 3, 2], (nbt) => {
            nbt["embers:ember_capacity"] = 1440000
        });
        scene.idle(100);
        scene.addLazyKeyframe();
    });
});