Ponder.registry((e) => {
    e.create('embers:mixer_centrifuge').scene('mixer_centrifuge_scene_one', "Mixing Fluids", (scene, util) => {

        scene.showBasePlate();
        scene.world.setBlocks([3, 1, 2], "embers:mixer_centrifuge");
        scene.world.setBlocks([3, 2, 2], "embers:mixer_centrifuge");
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:mixer_centrifuge").with("half", "upper"), false);
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        const bottomMixer = util.select.fromTo(3, 1, 2, 3, 1, 2)
        const topMixer = util.select.fromTo(3, 2, 2, 3, 2, 2)
        
        scene.idle(10);

        scene.text(100, "The Mixer Centrifuge combines up to 3 different fluids to make alloys and special mixes.")

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.text(80, "The top portion of the Mixer receives Ember power.", [3, 2, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", topMixer, 80)

        scene.idle(40);

        scene.showControls(35, [3, 4, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([3, 3, 2], "embers:ember_receiver");
        scene.world.modifyBlock([3, 3, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([3, 3, 2], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom portion of the Mixer can receive a different fluid in each face.", [3, 1, 2])
        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomMixer, 80)

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:fluid_pipe')
        scene.showControls(35, [2, 2, 2], "left").rightClick().withItem('embers:fluid_pipe')
        scene.showControls(35, [3, 1, 2], "up").rightClick().withItem('embers:fluid_pipe')

        scene.idle(40);

        scene.world.setBlocks([0, 1, 3], "embers:fluid_vessel");
        scene.world.setBlocks([0, 1, 2], "embers:fluid_vessel");
        scene.world.setBlocks([0, 1, 1], "embers:fluid_vessel");
        scene.world.setBlocks([1, 1, 3], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 1, 3], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 3
            nbt.connection5 = 2
        });
        scene.world.setBlocks([1, 1, 2], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 3
            nbt.connection5 = 2
        });
        scene.world.setBlocks([1, 1, 1], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 1, 1], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 3
            nbt.connection5 = 2
        });
        scene.world.setBlocks([2, 1, 3], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([2, 1, 3], (nbt) => {
            nbt.connection4 = 2
            nbt.connection5 = 2
        });
        scene.world.setBlocks([2, 1, 2], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection4 = 2
            nbt.connection5 = 3
        });
        scene.world.setBlocks([2, 1, 1], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([2, 1, 1], (nbt) => {
            nbt.connection4 = 2
            nbt.connection5 = 2
        });
        scene.world.setBlocks([3, 1, 3], "embers:fluid_pipe"); 
        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.connection2 = 3
            nbt.connection4 = 2
        });
        scene.world.setBlocks([3, 1, 1], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([3, 1, 1], (nbt) => {
            nbt.connection3 = 3
            nbt.connection4 = 2
        });
        scene.world.setBlocks([1, 2, 3], "embers:caminite_lever");
        scene.world.setBlocks([1, 2, 2], "embers:caminite_lever");
        scene.world.setBlocks([1, 2, 1], "embers:caminite_lever");
        scene.world.modifyBlock([1, 2, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false); 
        scene.world.modifyBlock([1, 2, 1], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        for (let z = 0; z < 4; z++) {
            for (let x = 0; x < 4; x++) {
                // Fade in all but Mixer block
                if (!(x == 3 && z == 2)) scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 1; z < 4; z++) {
            scene.world.showSection([1, 2, z], Facing.DOWN);
            scene.idle(2);
        }            

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "In this example, we will be making Molten Dawnstone.")

        scene.idle(40);

        scene.showControls(20, [0, 2, 3], "down").rightClick().withItem('embers:molten_gold_bucket')
        scene.idle(30);
        scene.world.modifyBlockEntityNBT([0, 1, 3], (nbt) => {
            nbt.FluidName = 'embers:molten_gold'
            nbt.Amount = 16000
        });
        scene.idle(20);
        scene.showControls(20, [0, 2, 2], "left").rightClick().withItem('embers:molten_copper_bucket')
        scene.idle(30);
        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.FluidName = 'embers:molten_copper'
            nbt.Amount = 16000
        });
        scene.idle(20);
        scene.showControls(20, [0, 2, 1], "up").rightClick().withItem('aquaculture:molten_neptunium_bucket')
        scene.idle(30);
        scene.world.modifyBlockEntityNBT([0, 1, 1], (nbt) => {
            nbt.FluidName = 'aquaculture:molten_neptunium'
            nbt.Amount = 16000
        });
        scene.idle(40);


        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "right").rightClick().withItem('aquaculture:neptunium_ingot')

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Fluid Extractors have a redstone signal to extract!")

        scene.idle(30);

        scene.showControls(35, [1, 3, 3], "down").rightClick()

        scene.idle(40);


        scene.world.modifyBlock([1, 2, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        scene.world.modifyBlock([1, 2, 1], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 2, 3]);
        scene.effects.indicateRedstone([1, 2, 2]);
        scene.effects.indicateRedstone([1, 2, 0]);

        scene.world.modifyBlockEntityNBT([0, 1, 3], (nbt) => {
            nbt.FluidName = 'embers:molten_gold'
            nbt.Amount = 13000
        });
        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.FluidName = 'embers:molten_copper'
            nbt.Amount = 13000
        });
        scene.world.modifyBlockEntityNBT([0, 1, 1], (nbt) => {
            nbt.FluidName = 'aquaculture:molten_neptunium'
            nbt.Amount = 13000
        });
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "Once alloyed, fluids can be extracted through the top of the Mixer.")


        scene.overlay.showOutline(PonderPalette.GREEN, "block", topMixer, 80)

        scene.idle(40);

        scene.showControls(35, [4, 3, 2], "down").rightClick().withItem('embers:fluid_extractor')
        
        scene.idle(40);

        scene.world.setBlocks([4, 2, 2], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([4, 2, 2], (nbt) => {
            nbt.connection2 = 2
            nbt.connection4 = 3
            nbt.connection1 = 4
        });
        scene.world.setBlocks([4, 2, 1], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([4, 2, 1], (nbt) => {
            nbt.connection3 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([4, 1, 1], "embers:fluid_vessel");
        scene.world.setBlocks([4, 3, 2], "embers:caminite_lever");
        scene.world.modifyBlock([4, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        scene.world.showSection([4, 1, 1], Facing.DOWN);
        scene.idle(3);

        scene.world.showSection([4, 2, 1], Facing.DOWN);
        scene.idle(2);
        scene.world.showSection([4, 2, 2], Facing.DOWN);
        scene.idle(2);
        scene.world.showSection([4, 3, 2], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [4, 4, 2], "down").rightClick()

        scene.idle(40);

        scene.world.modifyBlock([4, 3, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([4, 3, 2]);

        scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
            nbt.FluidName = 'embers:molten_dawnstone'
            nbt.Amount = 16000
        });
    });

});