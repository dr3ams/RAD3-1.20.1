Ponder.registry((e) => {
    e.create('embers:mechanical_pump').scene('mechanical_pump_scene_one', "Pumping Fluids", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:mechanical_pump");
        scene.world.setBlocks([2, 2, 2], "embers:mechanical_pump");
        const bottomPump = util.select.fromTo(2, 1, 2, 2, 1, 2)
        const topPump = util.select.fromTo(2, 2, 2, 2, 2, 2)
        
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:mechanical_pump").with("half", "upper"), false);

        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.setBlocks([1, 0, 2], "minecraft:water", false);
        scene.world.setBlocks([2, 0, 2], "minecraft:water", false);
        scene.world.setBlocks([3, 0, 2], "minecraft:water", false);

        scene.idle(10)

        scene.text(80, "The Mechanical Pump slowly picks up fluids in world.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom portion of the Pump receives Ember power.", [2, 1, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomPump, 80)

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:ember_receiver");
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:ember_receiver").with("facing", "north"), false);
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Fluids such as water can be extracted from the top portion of the Pump.", [2, 2, 2])
        scene.overlay.showOutline(PonderPalette.GREEN, "block", topPump, 80)

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('embers:fluid_extractor')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([3, 2, 2], (nbt) => {
            nbt.connection2 = 2
            nbt.connection4 = 3
            nbt.connection1 = 4
        });
        scene.world.setBlocks([3, 2, 1], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([3, 2, 1], (nbt) => {
            nbt.connection3 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([3, 1, 1], "embers:fluid_vessel");
        scene.world.setBlocks([3, 3, 2], "embers:caminite_lever");
        scene.world.modifyBlock([3, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        scene.world.showSection([3, 1, 1], Facing.DOWN);
        scene.idle(3);

        scene.world.showSection([3, 2, 1], Facing.DOWN);
        scene.idle(2);
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.idle(2);
        scene.world.showSection([3, 3, 2], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [3, 4, 2], "down").rightClick()

        scene.idle(40);

        scene.world.modifyBlock([3, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([3, 3, 2]);

        scene.world.modifyBlockEntityNBT([3, 1, 1], (nbt) => {
            nbt.FluidName = 'minecraft:water'
            nbt.Amount = 16000
        });
    });
});