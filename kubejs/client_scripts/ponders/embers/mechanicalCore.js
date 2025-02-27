Ponder.registry((e) => {
    e.create('embers:mechanical_core').scene('mechanical_core_scene_one', "Adding More Access Points", (scene) => {

        scene.showBasePlate();

        global.createPonderEmbersMultiblock(scene, "ember_bore", 1)

        scene.world.showSection([3, 1, 1, 1, 1, 3], Facing.DOWN);

        scene.world.setBlocks([2, 2, 2], "minecraft:hopper");
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "Mechanical Cores act as interfaces for allowing more connections to a machine.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Larger machines may only have one port despite needing multiple inputs and outputs.", [2, 2, 2])
        scene.world.hideSection([2, 2, 2], Facing.UP);

        scene.idle(100);
        
        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core", false);

        scene.text(80, "A Mechanical Core turns that one port into many.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:mechanical_core')
        
        scene.idle(40);

        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(100, "Any item, ember, or fluid inserted into the Mechanical Core will be inserted into the machine itself.", [2, 2, 2])

        scene.idle(30);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "minecraft:hopper", false);
        scene.world.showSection([3, 2, 2], Facing.WEST);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("minecraft:hopper").with("facing", "west"), false); 

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:coal')

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").withItem('minecraft:coal')

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Up to 3 Mechanical Cores can be chained together.")

        scene.world.hideSection([3, 2, 2], Facing.EAST);

        scene.idle(20);

        scene.world.setBlocks([2, 2, 1], "embers:mechanical_core", false);
        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:mechanical_core").with("facing", "north"), false); 
        scene.world.showSection([2, 2, 1], Facing.SOUTH);

        scene.idle(20);

        scene.world.setBlocks([2, 2, 0], "embers:mechanical_core", false);
        scene.world.modifyBlock([2, 2, 0], () => Block.id("embers:mechanical_core").with("facing", "north"), false); 
        scene.world.showSection([2, 2, 0], Facing.SOUTH);

        scene.idle(20);

        scene.world.setBlocks([2, 3, 0], "minecraft:hopper", false);
        scene.world.showSection([2, 3, 0], Facing.DOWN);

        scene.addLazyKeyframe();

        scene.idle(40);

        scene.showControls(35, [2, 4, 0], "down").rightClick().withItem('minecraft:coal')

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").withItem('minecraft:coal')

        scene.idle(60);
        
    });

});