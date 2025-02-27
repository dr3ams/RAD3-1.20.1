Ponder.registry((e) => {
    e.create(['embers:fluid_pipe', 'embers:fluid_extractor']).scene('fluid_pipes_one', "Fluid Pipes Basics", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([4, 1, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });
        scene.idle(10);

        scene.text(80, "Fluid Pipes are a simple yet powerful way to move fluids around.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(120, "Fluid Extractors export from connected inventories, while Fluid Pipes move fluids along.")

        scene.world.setBlocks([1, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([1, 1, 2], Facing.DOWN);

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:fluid_extractor')
        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:fluid_pipe')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:fluid_extractor");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.setBlocks([2, 1, 2], "embers:fluid_pipe");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection5 = 3
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 3
        });

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Fluid Extractor has a redstone signal to extract!", [3, 2, 2])

        scene.idle(30);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('embers:caminite_lever')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "embers:caminite_lever");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false); 

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection1 = 4
        });

        scene.idle(40);

        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([3, 2, 2]);

        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 0
        });
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.FluidName = ""
            nbt.Amount = 0
        });
        scene.world.setBlocks([4, 1, 3], "embers:fluid_vessel");
        scene.world.showSection([4, 1, 3], Facing.NORTH);
        scene.world.setBlocks([3, 1, 3], "embers:fluid_extractor");
        scene.world.showSection([3, 1, 3], Facing.NORTH);
        scene.world.setBlocks([3, 2, 3], "embers:caminite_lever");
        scene.world.showSection([3, 2, 3], Facing.NORTH);
        scene.world.modifyBlock([3, 2, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        scene.world.setBlocks([2, 1, 3], "embers:fluid_pipe");
        scene.world.showSection([2, 1, 3], Facing.NORTH);
        scene.world.setBlocks([1, 1, 3], "embers:fluid_vessel");
        scene.world.showSection([1, 1, 3], Facing.NORTH);
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection3 = 2
        });
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection3 = 2
        });
                
        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.connection5 = 3
            nbt.connection2 = 2
            nbt.connection1 = 4
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([2, 1, 3], (nbt) => {
            nbt.connection5 = 2
            nbt.connection2 = 2
            nbt.connection4 = 3
        });


        scene.text(80, "Adjacent pipes can be disconnected with the Tinker's Hammer.")

        scene.idle(30);

        scene.showControls(35, [3, 2, 3], "down").rightClick().withItem('embers:tinker_hammer')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 3], "minecraft:air", false);
        scene.world.setBlocks([3, 1, 3], "embers:fluid_extractor", false);
        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.connection5 = 3
            nbt.connection1 = 4
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection3 = 0
        });

        scene.idle(40);
        
        scene.showControls(35, [2, 2, 3], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 3], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 3], "embers:fluid_pipe", false);
        scene.world.modifyBlockEntityNBT([2, 1, 3], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 3
        });
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection3 = 0
        });

        scene.idle(50);

        scene.world.hideSection([4, 1, 3], Facing.UP);
        scene.world.hideSection([3, 1, 3], Facing.UP);
        scene.world.hideSection([3, 2, 3], Facing.UP);
        scene.world.hideSection([2, 1, 3], Facing.UP);
        scene.world.hideSection([1, 1, 3], Facing.UP);

        scene.idle(30);

        scene.world.setBlocks([4, 1, 3], "minecraft:air", false);
        scene.world.setBlocks([3, 1, 3], "minecraft:air", false);
        scene.world.setBlocks([3, 2, 3], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 3], "minecraft:air", false);
        scene.world.setBlocks([1, 1, 3], "minecraft:air", false);
        scene.world.hideSection([1, 1, 2], Facing.UP);
        
        scene.idle(40)

        scene.world.setBlocks([1, 1, 2], "minecraft:air", false);

        scene.addLazyKeyframe();
        
        scene.world.setBlocks([2, 1, 1], "embers:fluid_pipe");
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.setBlocks([2, 1, 0], "embers:fluid_vessel");
        scene.world.showSection([2, 1, 0], Facing.SOUTH);
        scene.world.setBlocks([1, 1, 2], "embers:fluid_pipe");
        scene.world.showSection([1, 1, 2], Facing.EAST);
        scene.world.setBlocks([0, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([0, 1, 2], Facing.EAST);
        scene.world.setBlocks([2, 1, 3], "embers:fluid_pipe");
        scene.world.showSection([2, 1, 3], Facing.NORTH);
        scene.world.setBlocks([2, 1, 4], "embers:fluid_vessel");
        scene.world.showSection([2, 1, 4], Facing.NORTH);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection3 = 2
            nbt.connection2 = 2
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 3
        });
        scene.world.modifyBlockEntityNBT([2, 1, 1], (nbt) => {
            nbt.connection3 = 2
            nbt.connection2 = 3
        });
        scene.world.modifyBlockEntityNBT([2, 1, 3], (nbt) => {
            nbt.connection2 = 2
            nbt.connection3 = 3
        });
        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", false), false); 

        scene.text(120, "When fluids in a pipe reach an intersection, they will prioritize going forward.")

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick();

        scene.idle(40);

        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        
        scene.effects.indicateRedstone([3, 2, 2]);

        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 0
        });
        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });
        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.world.setBlocks([1, 1, 2], "minecraft:air");
        scene.world.setBlocks([0, 1, 2], "minecraft:air");
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection4 = 0
        });
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", false), false); 
        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 16000
        });

        scene.text(80, "If fluids reach a T-intersection, it will distribute fluids round-robin.")

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick();

        scene.idle(40);

        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        
        scene.effects.indicateRedstone([3, 2, 2]);

        scene.world.modifyBlockEntityNBT([4, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 0
        });
        scene.world.modifyBlockEntityNBT([2, 1, 0], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 10000
        });
        scene.world.modifyBlockEntityNBT([2, 1, 4], (nbt) => {
            nbt.FluidName = "embers:molten_iron"
            nbt.Amount = 10000
        });
        scene.idle(80);
    });

    e.create(['embers:fluid_pipe', 'embers:fluid_extractor', 'embers:fluid_transfer']).scene('fluid_pipes_two', "Filtering Outputs", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([4, 1, 2], Facing.SOUTH);
        scene.world.setBlocks([3, 1, 2], "embers:fluid_extractor");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.setBlocks([2, 1, 2], "embers:fluid_pipe");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.setBlocks([1, 1, 2], "embers:fluid_pipe");
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.world.setBlocks([0, 1, 2], "embers:fluid_pipe");
        scene.world.showSection([0, 1, 2], Facing.DOWN);
        scene.world.setBlocks([3, 2, 2], "embers:caminite_lever");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection5 = 3
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.connection5 = 2
        });
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection1 = 4
        });
        scene.idle(10);

        scene.text(80, "Fluid Transfers can be used to filter the outputs of Fluid Pipes.")

        scene.idle(30);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:fluid_transfer')

        scene.idle(80);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection1 = 3
        });
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection1 = 3
        });
        scene.world.modifyBlockEntityNBT([0, 1, 2], (nbt) => {
            nbt.connection1 = 3
        });
        scene.world.setBlocks([2, 2, 2], "embers:fluid_transfer");
        scene.world.setBlocks([1, 2, 2], "embers:fluid_transfer");
        scene.world.setBlocks([0, 2, 2], "embers:fluid_transfer");
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.showSection([0, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down"), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down"), false); 
        scene.world.modifyBlock([0, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down"), false); 

        scene.idle(80);

        scene.showControls(35, [1, 4, 2], "down").rightClick().withItem('embers:fluid_vessel')

        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "embers:fluid_vessel");
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.setBlocks([1, 3, 2], "embers:fluid_vessel");
        scene.world.showSection([1, 3, 2], Facing.DOWN);
        scene.world.setBlocks([0, 3, 2], "embers:fluid_vessel");
        scene.world.showSection([0, 3, 2], Facing.DOWN);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Filters can be set by right clicking an Fluid Transfer with a bucket of or vessel fluid...", [1, 2, 2])

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "right").rightClick().withItem('embers:molten_gold_bucket')
        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:molten_copper_bucket')
        scene.showControls(35, [0, 2, 2], "left").rightClick().withItem('aquaculture:molten_neptunium_bucket')

        scene.idle(40);

        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down").with("filter", true), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down").with("filter", true), false); 
        scene.world.modifyBlock([0, 2, 2], () => Block.id("embers:fluid_transfer").with("facing", "down").with("filter", true), false); 

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.filter = { FluidName: "embers:molten_gold", Amount: 1000}
        });
        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.filter = { FluidName: "embers:molten_copper", Amount: 1000}
        });
        scene.world.modifyBlockEntityNBT([0, 2, 2], (nbt) => {
            nbt.filter = { FluidName: "aquaculture:molten_neptunium", Amount: 1000}
        });
        scene.idle(40);

        scene.text(100, "Letting only the filtered fluid into the attached inventory.", [0, 3, 2])

        scene.idle(40);

        scene.showControls(35, [4, 2, 2], "down").withItem('aquaculture:molten_neptunium_bucket')

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([0, 3, 2], (nbt) => {
            nbt.FluidName = "aquaculture:molten_neptunium"
            nbt.Amount = 16000
        });

        scene.idle(80);

    });
    e.create(['embers:fluid_pipe', 'embers:fluid_extractor', 'embers:fluid_vessel', 'embers:fluid_dial', 'embers:reservoir', 'embers:caminite_ring', 'embers:caminite_gauge', 'embers:caminite_valve']).scene('fluid_pipes_three', "Fluid Storage", (scene, util) => {

        scene.showBasePlate();

        scene.idle(10);

        scene.text(80, "There are serveral solutions for storing fluids.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(120, "Vessels are inventories that hold 16 Buckets of one fluid type, and retain their contents when broken.")

        scene.idle(30);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:fluid_vessel')

        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:fluid_vessel");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        
        scene.idle(40);
 
        scene.idle(5);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.FluidName = "embers:molten_dawnstone"
            nbt.Amount = 16000
        });

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Fluid Dials give a readout fluids in the attached inventory.", [2, 1, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:fluid_dial')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:fluid_dial");
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:fluid_dial").with("facing", "north"), false); 
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        
        scene.idle(60);

        scene.addLazyKeyframe();
        
        scene.text(120, "A Comparator can be attached to get its power level as a redstone signal.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('minecraft:comparator')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 0], "minecraft:comparator");
        scene.world.showSection([2, 1, 0], Facing.DOWN);
        scene.world.modifyBlock([2, 1, 0], () => Block.id("minecraft:comparator").with("powered", true).with("facing", "south"), false); 
        scene.idle(7);
        scene.effects.indicateRedstone([2, 1, 0]);

        scene.idle(80);

        scene.world.hideSection([2, 1, 1], Facing.UP);
        scene.world.hideSection([2, 1, 0], Facing.UP);
        scene.world.hideSection([2, 1, 2], Facing.UP);

        scene.idle(30);

        scene.addLazyKeyframe();
        
        scene.world.setBlocks([2, 1, 1], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 0], "minecraft:air", false);
        scene.world.setBlocks([2, 1, 2], "minecraft:air", false);

        scene.text(120, "For more fluid storage, a Reservoir stores 40 Buckets per Caminite Ring.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:reservoir')
        
        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "reservoir", 1);
        global.showPonderLayer(scene, 0, 1);

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:caminite_ring')

        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "caminite_ring", 2);
        global.showPonderLayer(scene, 0, 2);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            console.log(nbt)
            nbt.FluidName = "aquaculture:molten_neptunium"
            nbt.Amount = 40000
        });

        scene.addLazyKeyframe();
        
        scene.text(80, "Fluids can be pumped in and out from the bottom port using a Mechanical Core...", [2, 1, 2])

        scene.idle(40);

        scene.showControls(35, [2, 1, 2], "up").rightClick().withItem('embers:mechanical_core')
        
        scene.idle(60);

        scene.text(80, "However a Caminite valve makes this more convenient, adding ports to the side.")

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:caminite_valve')
        
        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "caminite_valve", 3);
        global.showPonderLayer(scene, 0, 3);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            console.log(nbt)
            nbt.FluidName = "aquaculture:molten_neptunium"
            nbt.Amount = 80000
        });

        scene.idle(40);

        scene.addLazyKeyframe();
        
        scene.text(80, "Caminite Gauges are decorative, and show the fluids inside of the Reservoir.")

        scene.idle(40);

        scene.showControls(35, [2, 5, 2], "down").rightClick().withItem('embers:caminite_gauge')
        
        scene.idle(40);
        
        global.createPonderEmbersMultiblock(scene, "caminite_gauge", 4);
        global.showPonderLayer(scene, 0, 4);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            console.log(nbt)
            nbt.FluidName = "aquaculture:molten_neptunium"
            nbt.Amount = 120000
        });

        scene.idle(40);

        scene.showControls(35, [2, 6, 2], "down").rightClick().withItem('embers:caminite_gauge')
        
        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "caminite_gauge", 5);
        global.showPonderLayer(scene, 0, 5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            console.log(nbt)
            nbt.FluidName = "aquaculture:molten_neptunium"
            nbt.Amount = 160000
        });
        scene.idle(80);
    });
});