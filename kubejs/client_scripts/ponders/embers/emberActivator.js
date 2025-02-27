Ponder.registry((e) => {
    e.create('embers:ember_activator').scene('ember_activator_scene_one', "Generating Ember Power", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:ember_activator");
        scene.world.setBlocks([2, 2, 2], "embers:ember_activator");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:ember_activator").with("half", "upper"), false);

        scene.idle(10);

        scene.text(80, "The Ember Activator turns Ember Crystals into Ember Power.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom portion of the Activator receives Ember Crystals & Shards.", [2, 1, 2])

        let topActivator = util.select.fromTo(2, 2, 2, 2, 2, 2)

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "minecraft:hopper");
        scene.world.showSection([3, 1, 2], Facing.WEST);
        scene.world.modifyBlock([3, 1, 2], () => Block.id("minecraft:hopper").with("facing", "west"), false); 

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:ember_crystal')

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

        scene.text(120, "Ember can be extracted from the top using an Ember Emitter.")

        scene.overlay.showOutline(PonderPalette.GREEN, "block", topActivator, 80)

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:ember_emitter')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "embers:ember_emitter");
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_emitter").with("facing", "up"), false); 

        scene.idle(60);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Ember Emitter has a redstone signal to extract!", [2, 3, 2])

        scene.idle(30);

        scene.showControls(35, [2, 4, 1], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([2, 3, 1], "embers:caminite_lever");
        scene.world.showSection([2, 3, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_emitter").with("facing", "up").with("front", true), false); 

        scene.idle(40);

        scene.world.modifyBlock([2, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([2, 3, 1]);

    });
    e.create(['embers:ember_activator', 'embers:heat_exchanger']).scene('ember_activator_scene_two', "Turning Ember Grit Into Ember Power", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:ember_activator");
        scene.world.setBlocks([2, 2, 2], "embers:ember_activator");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:ember_activator").with("half", "upper"), false);

        scene.idle(10);

        scene.text(80, "Normally the Ember Activator cannot use the Ember Grit your bore produces.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(100, "Placing a Heat Exchanger next to the base of the Ember Activator lets it consume Ember Grit for 300 Ember....")

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:heat_exchanger')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:heat_exchanger");
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:heat_exchanger").with("facing", "south"), false); 

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:ember_grit')
        
        scene.idle(40);

        scene.text(100, "At the cost of multiplying all output by 0.9.")

        scene.idle(80);
    });
});