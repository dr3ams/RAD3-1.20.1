Ponder.registry((e) => {
    e.create(['embers:cinder_plinth']).scene('plinth_one', "Cinder Plinth Basics", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 2, 2], "embers:cinder_plinth");
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Cinder Plinth turns any item in the game into Ash.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "It needs Ember power to operate, and can receive it from any side.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "embers:ember_receiver");
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(80, "It accepts any item, but inserting a trash item such as Cobblestone is recommended.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('minecraft:cobblestone')

        scene.idle(40);

        const frontCenter = util.grid.at(2, 2, 2)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const ash = scene.world.createItemEntity(frontCenterTop, util.vector.of(-0.1, 0.4, -0.1), "embers:ash")

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "By default, the Cinder Plinth spits out items in-world...")

        scene.idle(15);
        scene.world.removeEntity(ash);

        scene.idle(15);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:bin');
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:bin", true);
        scene.world.showSection([2, 1, 2], Facing.SOUTH);

        scene.idle(40);

        scene.text(80, "But a Bin beneath it will catch all the Ash.");

        scene.idle(30);

        scene.showControls(35, [2, 1, 2], "up").withItem('embers:ash');
        
        scene.idle(80);

    });

});