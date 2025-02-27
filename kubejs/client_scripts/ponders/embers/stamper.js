Ponder.registry((e) => {
    e.create(['embers:stamper', 'embers:stamp_base']).scene('stamper_one', "Stamper Basics", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([4, 1, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });
        scene.world.setBlocks([4, 2, 2], "embers:fluid_extractor");
        scene.world.showSection([4, 2, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([4, 2, 2], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([4, 3, 2], "embers:caminite_lever");
        scene.world.showSection([4, 3, 2], Facing.DOWN);
        scene.world.modifyBlock([4, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false); 
        scene.world.setBlocks([3, 2, 2], "embers:fluid_pipe");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([3, 2, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 2
        });
        scene.world.setBlocks([2, 2, 2], "embers:stamp_base");
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.setBlocks([2, 4, 2], "embers:stamper");
        scene.world.showSection([2, 4, 2], Facing.DOWN);
        const topStamper = util.select.fromTo(2, 4, 2, 2, 4, 2)
        const bottomStamper = util.select.fromTo(2, 2, 2, 2, 2, 2)

        scene.idle(10);

        scene.text(80, "The Stamper is a combination machine that stamps liquids into items.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The top block is the Stamper itself and needs Ember power to operate.", [2, 4, 2])


        scene.overlay.showOutline(PonderPalette.GREEN, "block", topStamper, 80)

        scene.idle(40);

        scene.showControls(35, [3, 6, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 5, 2], "embers:ember_receiver");
        scene.world.showSection([2, 5, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 5, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom block is the Stamper Base that receives fluids such as molten metals.", [2, 2, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomStamper, 80)

        scene.idle(40);

        scene.showControls(35, [4, 4, 2], "down").rightClick()
        
        scene.idle(40);

        scene.world.modifyBlock([4, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false);
        scene.effects.indicateRedstone([2, 2, 2]);

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 1500
        });
        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 14500
        });
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "The Stamper requires a Stamp to operate depending on the recipe.")

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "up").rightClick().withItem('embers:ingot_stamp')

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 4, 2], (nbt) => {
            nbt.stamp.Items = [{ id: "embers:ingot_stamp", Count: 1}]
        });

        const frontCenter = util.grid.at(2, 2, 2)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const ingot = scene.world.createItemEntity(frontCenterTop, util.vector.of(-0.1, 0.1, -0.1), "minecraft:iron_ingot")
        scene.idle(40);
        const ingot2 = scene.world.createItemEntity(frontCenterTop, util.vector.of(-0.1, 0.1, -0.15), "minecraft:iron_ingot")

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "By default, the Stamper spits out items in-world...")

        scene.idle(15);
        scene.world.removeEntity(ingot);
        scene.world.removeEntity(ingot2);

        scene.idle(15);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:bin');
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:bin", true);
        scene.world.showSection([2, 1, 2], Facing.EAST);
        
        scene.idle(40);

        scene.text(80, "But a Bin beneath the Stamper Base will catch all Stamped items.");

        scene.idle(30);

        scene.showControls(35, [2, 1, 2], "up").withItem('minecraft:iron_ingot');
        
        scene.idle(80);
        
        scene.addLazyKeyframe();

        scene.text(80, "For some recipes such as the Iron Aspectus, the Stamper Base itself will need an item as well.");

        scene.idle(30);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:ember_shard');
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.inventory.Items = [{ id: "embers:ember_shard", Count: 1}]
        });

        scene.idle(40);

        scene.showControls(35, [2, 1, 2], "up").withItem('embers:iron_aspectus');

        scene.idle(80);
    });

});