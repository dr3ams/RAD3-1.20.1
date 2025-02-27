Ponder.registry((e) => {
    e.create(['embers:ember_emitter', 'embers:ember_receiver']).scene('power_transmission_scene_one', "Transporting Ember Power", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([3, 1, 2], "embers:ember_activator");
        scene.world.setBlocks([3, 2, 2], "embers:ember_activator");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.showSection([3, 2, 2], Facing.DOWN);

        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:ember_activator").with("half", "upper"), false);

        scene.world.setBlocks([1, 1, 2], "embers:copper_cell");
        scene.world.showSection([1, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "Once Ember power is generated, there are a few ways to transport it around.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(120, "Ember can be extracted from a generator such as the Ember Activator using an Ember Emitter...", [3, 1, 2])

        scene.idle(40);

        scene.showControls(35, [3, 4, 2], "down").rightClick().withItem('embers:ember_emitter')
        
        scene.idle(40);

        scene.world.setBlocks([3, 3, 2], "embers:ember_emitter");
        scene.world.showSection([3, 3, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 3, 2], () => Block.id("embers:ember_emitter").with("facing", "up"), false); 

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "And can be inserted using an Ember Receptor.", [1, 1, 2])

        scene.idle(40);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:ember_receiver");
        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false); 

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "With everything in place, link the Emitter to the Receptor with your Tinker's Hammer.")

        scene.idle(40);

        scene.showControls(35, [3, 4, 2], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(60);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:tinker_hammer')

        scene.idle(80);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Ember Emitter has a redstone signal to extract!", [3, 3, 2])

        scene.idle(30);

        scene.showControls(35, [3, 4, 1], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([3, 3, 1], "embers:caminite_lever");
        scene.world.showSection([3, 3, 1], Facing.SOUTH);

        scene.world.modifyBlock([3, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 
        scene.world.modifyBlock([3, 3, 2], () => Block.id("embers:ember_emitter").with("facing", "up").with("front", true), false); 

        scene.idle(40);

        scene.world.modifyBlock([3, 3, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 
        
        scene.effects.indicateRedstone([3, 3, 1]);

    }),
    e.create(['embers:ember_emitter', 'ember_receiver', "embers:ember_ejector", "embers:ember_funnel", "embers:ember_relay", "embers:mirror_relay", "embers:beam_splitter"]).scene('power_transmission_scene_two', "Ember Transportation Upgrades", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "embers:copper_cell");
        scene.world.showSection([4, 1, 2], Facing.DOWN);
        scene.world.setBlocks([3, 1, 2], "embers:ember_emitter");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:ember_emitter").with("facing", "west").with("right", true), false); 

        scene.world.setBlocks([3, 2, 2], "embers:caminite_lever");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false);

        scene.world.setBlocks([1, 1, 2], "embers:ember_receiver");
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.world.modifyBlock([1, 1, 2], () => Block.id("embers:ember_receiver").with("facing", "east"), false); 
        scene.world.setBlocks([0, 1, 2], "embers:copper_cell");
        scene.world.showSection([0, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "Basic Ember Emitters and Receptors aren't the only options for transporting power.")

        scene.idle(40);

        scene.world.hideSection([3, 1, 2], Facing.UP);
        scene.world.hideSection([3, 2, 2], Facing.UP);
        scene.world.hideSection([1, 1, 2], Facing.UP);

        scene.idle(30);

        scene.world.setBlocks([3, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([3, 2, 2], "minecraft:air", false);
        scene.world.setBlocks([1, 1, 2], "minecraft:air", false);

        scene.idle(20)
        
        scene.addLazyKeyframe();

        scene.text(120, "The transfer rate of Ember can be improved by x10 by using Ember Ejectors and Funnels.")

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:ember_ejector')
        scene.showControls(35, [1, 2, 2], "down").rightClick().withItem('embers:ember_funnel')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:ember_ejector");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:ember_ejector").with("facing", "west").with("right", true), false);

        scene.world.setBlocks([3, 2, 2], "embers:caminite_lever");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false);

        scene.world.setBlocks([1, 1, 2], "embers:ember_funnel");
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.world.modifyBlock([1, 1, 2], () => Block.id("embers:ember_funnel").with("facing", "east"), false); 

        scene.idle(70);

        scene.world.hideSection([4, 1, 2], Facing.UP);
        scene.world.hideSection([3, 1, 2], Facing.UP);
        scene.world.hideSection([3, 2, 2], Facing.UP);
        scene.world.hideSection([1, 1, 2], Facing.UP);
        scene.world.hideSection([0, 1, 2], Facing.UP);

        scene.idle(30);

        scene.addLazyKeyframe();

        scene.world.setBlocks([4, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([3, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([3, 2, 2], "minecraft:air", false);
        scene.world.setBlocks([1, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([0, 1, 2], "minecraft:air", false);

        scene.text(120, "Ember Relays and Mirror Relays extend the distance of Ember power bursts, preventing power loss.")

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:ember_relay')
        scene.showControls(35, [1, 2, 2], "down").rightClick().withItem('embers:mirror_relay')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:ember_relay");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.setBlocks([1, 1, 2], "embers:mirror_relay");
        scene.world.showSection([1, 1, 2], Facing.DOWN);

        scene.idle(60);

        scene.world.hideSection([3, 1, 2], Facing.UP);
        scene.world.hideSection([1, 1, 2], Facing.UP);

        scene.idle(30);

        scene.addLazyKeyframe();

        scene.world.setBlocks([3, 1, 2], "minecraft:air", false);
        scene.world.setBlocks([1, 1, 2], "minecraft:air", false);

        scene.text(120, "Beam Splitters can take in two inputs and send out two outputs.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:beam_splitter')

        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:beam_splitter");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.idle(60);

        scene.text(80, "The larger ports act as Ember Emitters, and the smaller ones as Ember Receptors.", [2, 1, 2])

        scene.idle(120);

        scene.addLazyKeyframe();
    });
});