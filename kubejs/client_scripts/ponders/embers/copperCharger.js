Ponder.registry((e) => {
    e.create(['embers:copper_charger', 'embers:ember_siphon', 'embers:ember_jar', 'embers:ember_cartridge', 'embers:ember_bulb']).scene('charger_one', "Charging ", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 2, 2], "embers:copper_charger");
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Copper Charger fills portable Ember containers with Ember Power.")

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

        scene.text(80, "It can charge Mantle Bulbs, Jars, and Cartridges.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:ember_cartridge')

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.inventory.Items = [{ id: "embers:ember_cartridge", Count: 1}]
        });

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(120, "The Copper Charger will invert its behavior and discharge items when an Ember Siphon is placed below it.")

        scene.idle(15);

        scene.idle(15);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:ember_siphon');
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:ember_siphon", true);
        scene.world.showSection([2, 1, 2], Facing.SOUTH);
        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:ember_emitter');
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:ember_emitter", true);
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:ember_emitter").with("facing", "north"), false);
        
        scene.idle(40);
        
    });

});