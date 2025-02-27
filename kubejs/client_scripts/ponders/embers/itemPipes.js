Ponder.registry((e) => {
    e.create(['embers:item_pipe', 'embers:item_extractor']).scene('item_pipes_one', "Item Pipes Basics", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "minecraft:chest");
        scene.world.showSection([4, 1, 2], Facing.DOWN);
        scene.idle(10);

        scene.text(80, "Item Pipes are a simple yet powerful way to move items around.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(120, "Item Extractors export from connected inventories, while Item Pipes move items along.")

        scene.world.setBlocks([1, 1, 2], "minecraft:chest");
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:item_extractor')
        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:item_pipe')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:item_extractor");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.setBlocks([2, 1, 2], "embers:item_pipe");
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

        scene.text(80, "Make sure your Item Extractor has a redstone signal to extract!", [3, 2, 2])

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

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.setBlocks([4, 1, 3], "minecraft:chest");
        scene.world.showSection([4, 1, 3], Facing.NORTH);
        scene.world.setBlocks([3, 1, 3], "embers:item_extractor");
        scene.world.showSection([3, 1, 3], Facing.NORTH);
        scene.world.setBlocks([3, 2, 3], "embers:caminite_lever");
        scene.world.showSection([3, 2, 3], Facing.NORTH);
        scene.world.modifyBlock([3, 2, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 
        scene.world.setBlocks([2, 1, 3], "embers:item_pipe");
        scene.world.showSection([2, 1, 3], Facing.NORTH);
        scene.world.setBlocks([1, 1, 3], "minecraft:chest");
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
        scene.world.setBlocks([3, 1, 3], "embers:item_extractor", false);
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
        scene.world.setBlocks([2, 1, 3], "embers:item_pipe", false);
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

        scene.world.setBlocks([2, 1, 1], "embers:item_pipe");
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.setBlocks([2, 1, 0], "minecraft:chest");
        scene.world.showSection([2, 1, 0], Facing.SOUTH);
        scene.world.setBlocks([1, 1, 2], "embers:item_pipe");
        scene.world.showSection([1, 1, 2], Facing.EAST);
        scene.world.setBlocks([0, 1, 2], "minecraft:chest");
        scene.world.showSection([0, 1, 2], Facing.EAST);
        scene.world.setBlocks([2, 1, 3], "embers:item_pipe");
        scene.world.showSection([2, 1, 3], Facing.NORTH);
        scene.world.setBlocks([2, 1, 4], "minecraft:chest");
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
        scene.text(120, "When an item in a pipe reaches an intersection, it will prioritize going forward.")

        scene.idle(80);

        scene.showControls(35, [4, 2, 2], "down").withItem('embers:ember_crystal');

        scene.idle(40);

        scene.showControls(35, [0, 2, 2], "down").withItem('embers:ember_crystal');

        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.world.setBlocks([1, 1, 2], "minecraft:air");
        scene.world.setBlocks([0, 1, 2], "minecraft:air");
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.connection4 = 0
        });

        scene.text(80, "If an item reaches a T-intersection, it will distribute items round-robin.")

        scene.idle(80);

        scene.showControls(35, [4, 2, 2], "down").withItem('embers:ember_crystal');

        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").withItem('embers:ember_crystal');
        scene.showControls(35, [2, 2, 4], "down").withItem('embers:ember_crystal');

        scene.idle(80);

        scene.addLazyKeyframe();
    });

    e.create(['embers:item_pipe', 'embers:item_extractor', 'embers:item_transfer']).scene('item_pipes_two', "Filtering Outputs", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 1, 2], "minecraft:chest");
        scene.world.showSection([4, 1, 2], Facing.SOUTH);
        scene.world.setBlocks([3, 1, 2], "embers:item_extractor");
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.setBlocks([2, 1, 2], "embers:item_pipe");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.setBlocks([1, 1, 2], "embers:item_pipe");
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.world.setBlocks([0, 1, 2], "embers:item_pipe");
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

        scene.text(80, "Item Transfers can be used to filter the outputs of Item Pipes.")

        scene.idle(30);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:item_transfer')

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
        scene.world.setBlocks([2, 2, 2], "embers:item_transfer");
        scene.world.setBlocks([1, 2, 2], "embers:item_transfer");
        scene.world.setBlocks([0, 2, 2], "embers:item_transfer");
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.showSection([0, 2, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down"), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down"), false); 
        scene.world.modifyBlock([0, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down"), false); 

        scene.idle(80);

        scene.showControls(35, [1, 4, 2], "down").rightClick().withItem('minecraft:chest')

        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "minecraft:chest");
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.setBlocks([1, 3, 2], "minecraft:chest");
        scene.world.showSection([1, 3, 2], Facing.DOWN);
        scene.world.setBlocks([0, 3, 2], "minecraft:chest");
        scene.world.showSection([0, 3, 2], Facing.DOWN);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Filters can be set by right clicking an Item Transfer with an item...", [1, 2, 2])

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "right").rightClick().withItem('embers:ember_shard')
        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:ember_crystal')
        scene.showControls(35, [0, 2, 2], "left").rightClick().withItem('embers:ember_grit')

        scene.idle(40);

        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down").with("filter", true), false); 
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down").with("filter", true), false); 
        scene.world.modifyBlock([0, 2, 2], () => Block.id("embers:item_transfer").with("facing", "down").with("filter", true), false); 

        scene.idle(40);

        scene.text(100, "Letting only the filtered item into the attached inventory.", [0, 3, 2])

        scene.idle(40);

        scene.showControls(35, [4, 2, 2], "down").withItem('embers:ember_grit')

        scene.idle(40);
        
        scene.showControls(35, [0, 4, 2], "down").withItem('embers:ember_grit')

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.setBlocks([4, 1, 2], "minecraft:air");
        scene.world.setBlocks([3, 2, 2], "minecraft:air");
        scene.world.setBlocks([3, 1, 2], "embers:item_pipe");
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection5 = 0
            nbt.connection4 = 2
        });
        scene.text(120, "Since Item Pipes are an inventory, other mods can be used to filter extract from another inventory into them.")

        scene.idle(80);

        scene.showControls(35, [4, 2, 2], "down").rightClick().withItem('goldenhopper:golden_hopper');

        scene.idle(40);

        scene.world.setBlocks([4, 1, 2], "goldenhopper:golden_hopper");
        scene.world.modifyBlock([4, 1, 2], () => Block.id("goldenhopper:golden_hopper").with("facing", "west"), false); 
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.connection5 = 3
            nbt.connection4 = 2
        });
        scene.idle(80);
    });
    e.create(['embers:item_pipe', 'embers:item_extractor', 'embers:bin', 'embers:item_dial', 'embers:item_dropper', 'embers:item_vacuum']).scene('item_pipes_three', "Item Transfer Utilities", (scene, util) => {

        scene.showBasePlate();

        scene.idle(10);

        scene.text(80, "There are serveral utility blocks involved with storing and moving around items.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(120, "Bins are inventories that hold a stack of one item type, and pickup items dropped on them.")

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:bin')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:bin");
        scene.world.showSection([3, 1, 2], Facing.DOWN);

        scene.idle(40);
        
        const bin = util.grid.at(3, 1, 2)
        const binTop = util.vector.topOf(bin)

        const emberShard = scene.world.createItemEntity(binTop, util.vector.of(0, -0.4, 0), "embers:ember_shard");
        
        scene.idle(5);
        
        scene.world.removeEntity(emberShard);

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "embers:ember_crystal", Count: 64}]
        });

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Item Dials give a readout of items in the attached inventory.", [3, 1, 2])

        scene.idle(40);

        scene.showControls(35, [3, 2, 1], "down").rightClick().withItem('embers:item_dial')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 1], "embers:item_dial");
        scene.world.showSection([3, 1, 1], Facing.SOUTH);
        scene.world.modifyBlock([3, 1, 1], () => Block.id("embers:item_dial").with("facing", "north"), false); 

        scene.idle(60);

        scene.addLazyKeyframe();
        
        scene.text(120, "A Comparator can be attached to get its power level as a redstone signal.")

        scene.idle(40);

        scene.showControls(35, [3, 2, 0], "down").rightClick().withItem('minecraft:comparator')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 0], "minecraft:comparator");
        scene.world.showSection([3, 1, 0], Facing.SOUTH);
        scene.world.modifyBlock([3, 1, 0], () => Block.id("minecraft:comparator").with("powered", true).with("facing", "south"), false); 
        scene.idle(7);
        scene.effects.indicateRedstone([3, 1, 0]);

        scene.idle(50);

        scene.world.hideSection([3, 1, 1], Facing.UP);
        scene.world.hideSection([3, 1, 0], Facing.UP);

        scene.idle(30);


        scene.world.setBlocks([3, 1, 1], "minecraft:air", false);
        scene.world.setBlocks([3, 1, 0], "minecraft:air", false);
        
        scene.idle(40)

        scene.addLazyKeyframe();

        scene.world.setBlocks([3, 2, 2], "embers:item_extractor");
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([3, 2, 2], (nbt) => {
            nbt.connection1 = 2
            nbt.connection2 = 4
            nbt.connection0 = 3
        });
        scene.world.setBlocks([3, 2, 1], "embers:caminite_lever");
        scene.world.showSection([3, 2, 1], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.world.setBlocks([3, 3, 2], "embers:item_pipe");
        scene.world.showSection([3, 3, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([3, 3, 2], (nbt) => {
            nbt.connection4 = 2
            nbt.connection0 = 2
        });
        scene.world.setBlocks([2, 3, 2], "embers:item_pipe");
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([2, 3, 2], (nbt) => {
            nbt.connection4 = 2
            nbt.connection5 = 2
        });
        scene.world.setBlocks([1, 3, 2], "embers:item_pipe");
        scene.world.showSection([1, 3, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection5 = 2
        });
        scene.text(80, "Item Droppers spit out items into the world.")

        scene.idle(40);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:item_dropper')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:item_dropper");
        scene.world.showSection([1, 2, 2], Facing.UP);
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection0 = 2
        });

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.inventory.Items =  [{ Slot: 0, id: "", Count: 0}]
        });

        const dropperEmberShard = scene.world.createItemEntity([1, 2.2, 2], util.vector.of(0, -0.4, 0), "embers:ember_shard");
        scene.idle(1);
        const dropperEmberShard1 = scene.world.createItemEntity([1, 2.2, 2], util.vector.of(0, -0.4, 0), "embers:ember_shard");
        scene.idle(1);
        const dropperEmberShard2 = scene.world.createItemEntity([1, 2.2, 2], util.vector.of(0, -0.4, 0), "embers:ember_shard");
        scene.idle(1);
        const dropperEmberShard3 = scene.world.createItemEntity([1, 2.2, 2], util.vector.of(0, -0.4, 0), "embers:ember_shard");
        scene.idle(1);
        const dropperEmberShard4 = scene.world.createItemEntity([1, 2.2, 2], util.vector.of(0, -0.4, 0), "embers:ember_shard");

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.world.removeEntity(dropperEmberShard);
        scene.world.removeEntity(dropperEmberShard1);
        scene.world.removeEntity(dropperEmberShard2);
        scene.world.removeEntity(dropperEmberShard3);
        scene.world.removeEntity(dropperEmberShard4);
        
        scene.world.setBlocks([3, 2, 1], "minecraft:air");
        scene.world.setBlocks([3, 2, 2], "embers:item_pipe");
        scene.world.modifyBlockEntityNBT([3, 2, 2], (nbt) => {
            nbt.connection1 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([1, 2, 2], "minecraft:air");
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection0 = 0
        });
        scene.world.hideSection([1, 2, 2], Facing.UP);
        scene.text(80, "Item Vacuums suck up items from world...")

        scene.idle(40);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:item_vacuum')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:item_vacuum");
        scene.world.showSection([1, 2, 2], Facing.UP);
        scene.world.modifyBlock([1, 2, 2], () => Block.id("embers:item_vacuum").with("facing", "down"), false); 
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection0 = 2
        });

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.inventory.Items =  [{ Slot: 0, id: "", Count: 0}]
        });

        scene.idle(20);

        const vacuumEmberShardStatic = scene.world.createItemEntity([1, 1, 2], util.vector.of(0, 0, 0), "embers:ember_shard");
        
        scene.idle(20);

        scene.text(80, "Provided they have a redstone signal.")

        scene.idle(40);

        scene.showControls(35, [0, 3, 2], "down").rightClick().withItem('minecraft:redstone_block')
        
        scene.idle(40);

        scene.world.setBlocks([0, 2, 2], "minecraft:redstone_block");
        scene.world.showSection([0, 2, 2], Facing.EAST);
        scene.world.removeEntity(vacuumEmberShardStatic);
        const vacuumEmberShardSucked = scene.world.createItemEntity([1, 1, 2], util.vector.of(0, 1, 0), "embers:ember_shard");
        scene.idle(2);
        scene.world.removeEntity(vacuumEmberShardSucked);

        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.inventory.Items =  [{ Slot: 0, id: "embers:ember_shard", Count: 64}]
        });
        scene.idle(80);
    });

});