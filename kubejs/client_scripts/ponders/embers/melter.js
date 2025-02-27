Ponder.registry((e) => {
    e.create('embers:melter').scene('melter_scene_one', "Liquifying Items", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:melter");
        scene.world.setBlocks([2, 2, 2], "embers:melter");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        const bottomMelter = util.select.fromTo(2, 1, 2, 2, 1, 2)
        const topMelter = util.select.fromTo(2, 2, 2, 2, 2, 2)
        
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:melter").with("half", "upper"), false);

        scene.idle(10);

        scene.text(80, "The Melter breaks down items, primarily metals, into their liquid form.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom portion of the Melter receives Ember power.", [2, 1, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomMelter, 80)

        scene.idle(40);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:ember_receiver");
        scene.world.showSection([3, 1, 2], Facing.WEST);
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:ember_receiver").with("facing", "east"), false);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Items can be inserted into the top portion of the Melter.", [2 ,2, 2])
        scene.overlay.showOutline(PonderPalette.GREEN, "block", topMelter, 80)

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "minecraft:hopper");
        scene.world.showSection([3, 2, 2], Facing.WEST);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("minecraft:hopper").with("facing", "west"), false); 

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('aquaculture:neptunium_ingot')

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "Once melted down, fluids can be extracted through the top of the Melter.")

        scene.world.setBlocks([0, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([0, 1, 2], Facing.DOWN);
        scene.overlay.showOutline(PonderPalette.GREEN, "block", topMelter, 80)

        scene.idle(40);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:fluid_extractor')
        scene.showControls(35, [0, 3, 2], "down").rightClick().withItem('embers:fluid_pipe')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:fluid_extractor");
        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.setBlocks([0, 2, 2], "embers:fluid_pipe");
        scene.world.showSection([0, 2, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.connection5 = 3
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([0, 2, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection0 = 3
        });

        scene.idle(60);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Fluid Extractor has a redstone signal to extract!", [1, 3, 2])

        scene.idle(30);

        scene.showControls(35, [1, 4, 2], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([1, 3, 2], "embers:caminite_lever");
        scene.world.showSection([1, 3, 2], Facing.DOWN);
        scene.world.modifyBlock([1, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false); 

        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.connection1 = 4
        });

        scene.idle(40);

        scene.world.modifyBlock([1, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 3, 2]);

        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.FluidName = 'aquaculture:molten_neptunium'
            nbt.Amount = 16000
        });
    });
    e.create(['embers:melter', 'embers:geologic_separator']).scene('melter_scene_two', "Melter Metals and Byproducts", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:melter");
        scene.world.setBlocks([2, 2, 2], "embers:melter");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:melter").with("half", "upper"), false);

        scene.idle(10);

        scene.text(80, "When processing raw ore with the Melter, you'll get more metal compared to a Furnace.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Ore blocks will multiply your yield by x2.6...", [2, 1, 1])

        scene.world.setBlocks([2, 1, 1], "minecraft:iron_ore");
        scene.world.showSection([2, 1, 1], Facing.DOWN);
        
        scene.idle(100);

        scene.text(80, "While raw ore multiplies your yield by x1.3...", [2, 2, 1])
        
        const frontCenter = util.grid.at(2, 1, 1)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const ore = scene.world.createItemEntity(frontCenterTop, util.vector.of(0, 0.4, 0), "minecraft:raw_iron")
        
        scene.idle(120);

        scene.addLazyKeyframe();
        
        scene.world.hideSection([2, 1, 1], Facing.UP);

        scene.world.removeEntity(ore);

        scene.text(100, "Placing a Geologic Separator next to the base of the Melter will give raw ore an additional output.")

        scene.idle(30);

        scene.world.setBlocks([2, 1, 1], "minecraft:air", false);
        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:geologic_separator')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:geologic_separator");
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:geologic_separator").with("facing", "south"), false); 
        scene.world.showSection([2, 1, 1], Facing.DOWN);
        
        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('minecraft:raw_iron')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 1, 1], (nbt) => {
            nbt.FluidName = 'embers:molten_copper'
            nbt.Amount = 1000
        });
        scene.text(100, "Each type of ore gives a different output. See JEI for the specifics.", [2, 1, 1])
        
        scene.idle(120);
    });
});