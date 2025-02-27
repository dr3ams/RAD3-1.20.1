Ponder.registry((e) => {
    e.create(['embers:ignem_reactor', 'embers:catalysis_chamber', 'embers:combustion_chamber']).scene('ignem_reactor_scene_one', "Generating Tier 3 Ember Power", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 2, 2], "embers:ignem_reactor");
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Ignem Reactor turns Ember Crystals into Ember Power at up to x13 the Ember Activator.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(60, "It requires an adjacent Combustion Chamber and Catalysis Chamber.")

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:catalysis_chamber')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:catalysis_chamber");
        scene.world.setBlocks([3, 2, 2], "embers:catalysis_chamber");
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:catalysis_chamber").with("connection", "top_west"), false);

        scene.world.showSection([3, 1, 2], Facing.WEST);
        scene.world.showSection([3, 2, 2], Facing.WEST);

        scene.idle(40);

        scene.showControls(35, [1, 2, 2], "down").rightClick().withItem('embers:combustion_chamber')
        
        scene.idle(40);

        scene.world.setBlocks([1, 1, 2], "embers:combustion_chamber");
        scene.world.setBlocks([1, 2, 2], "embers:combustion_chamber");
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:combustion_chamber").with("connection", "top_east"), false);

        scene.world.showSection([1, 1, 2], Facing.EAST);
        scene.world.showSection([1, 2, 2], Facing.EAST);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "The Combustion and Catalysis Chambers both require their own items to run the Reactor.", [3, 1, 2])

        scene.idle(100);

        scene.text(80, "At minimum, they multiply power production by x2 each...")

        scene.idle(40);

        scene.showControls(60, [4, 1, 2], "right").withItem('embers:ember_grit')
        scene.showControls(60, [1, 1, 2], "left").withItem('minecraft:coal')

        scene.idle(80);

        scene.text(80, "And at maximum, x6. See JEI for the list of chamber inputs.")
        
        scene.idle(40);

        scene.showControls(60, [4, 1, 2], "right").withItem('society:aquamagical_dust')
        scene.showControls(60, [1, 1, 2], "left").withItem('alexscaves:uranium_rod')

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The Ignem Reactor itself receives Ember Crystals & Shards.", [2, 2.5, 2])

        scene.idle(40);

        scene.showControls(35, [2, 3, 3], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 3], "minecraft:hopper");
        scene.world.modifyBlock([2, 2, 3], () => Block.id("minecraft:hopper").with("facing", "north"), false); 
        scene.world.showSection([2, 2, 3], Facing.NORTH);

        scene.idle(40);

        scene.showControls(35, [2, 3, 3], "down").rightClick().withItem('embers:ember_crystal')

        scene.idle(40);

        const hopper = util.grid.at(2, 5, 3)
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

        scene.text(120, "Ember can be extracted from the top using an Ember Ejector.")

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:ember_ejector')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "embers:ember_ejector");
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_ejector").with("facing", "up"), false); 
        scene.world.showSection([2, 3, 2], Facing.DOWN);

        scene.idle(60);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Ember Ejector has a redstone signal to extract!", [2, 3.5, 2])

        scene.idle(30);

        scene.showControls(35, [2, 4, 1], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([2, 3, 1], "embers:caminite_lever");

        scene.world.modifyBlock([2, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_ejector").with("facing", "up").with("front", true), false); 
        scene.world.showSection([2, 3, 1], Facing.SOUTH);

        scene.idle(40);

        scene.world.modifyBlock([2, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([2, 3, 1]);

        scene.addLazyKeyframe();

        scene.text(80, "Unlike other Ember generators, the Ignem Reactor and Chambers can waste fuels and inputs.")

        scene.idle(100);

        scene.text(100, "Instead of piping items in, try inserting them one at a time when you need power using a dropper or other means.")
        
        scene.world.hideSection([2, 2, 3], Facing.EAST);

        scene.idle(40);
        
        scene.showControls(35, [2, 3, 3], "down").rightClick().withItem('minecraft:dropper')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 3], "minecraft:dropper", false);
        scene.world.showSection([3, 1, 3], Facing.EAST);
        scene.world.setBlocks([2, 2, 3], "minecraft:dropper", false);
        scene.world.showSection([2, 2, 3], Facing.EAST);
        scene.world.setBlocks([1, 1, 3], "minecraft:dropper", false);
        scene.world.showSection([1, 1, 3], Facing.EAST);
        
        scene.idle(80);

        scene.text(80, "Using Redstone, you can automate this process and preserve rare ingredients.")
        
        scene.idle(80);

    });

});