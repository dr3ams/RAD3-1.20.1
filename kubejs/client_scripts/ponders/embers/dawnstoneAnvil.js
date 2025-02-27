Ponder.registry((e) => {
    e.create(['embers:dawnstone_anvil', 'embers:isolated_materia', 'embers:ancient_motive_core']).scene('dawnstone_anvil_scene_one', "Dawnstone Anvil Basics", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:dawnstone_anvil");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(100, "The Dawnstone Anvil is a tool for upgrading, repairing, and breaking down tools and armors.")

        scene.idle(120);
        
        scene.addLazyKeyframe();

        scene.text(80, "To start, place the tool you want to work on top of it.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('minecraft:iron_sword')
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }]
        });

        scene.idle(20);

        scene.addLazyKeyframe();

        scene.text(100, "To break down the item into its repair material, hold right click on it with the Tinker's Hammer.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(60);

        scene.text(80, "This may take a while to do manually...")

        scene.idle(40);
        const center = util.grid.at(2, 1, 2)
        const centerTop = util.vector.topOf(center)
        const ingot = scene.world.createItemEntity(centerTop, util.vector.of(0.1, 0.1, -0.1), "minecraft:iron_ingot")
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "", Count: 0 }]
        });
        
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.removeEntity(ingot);

        scene.text(100, "Tools can be repaired using their repair material, or Isolated Materia.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('aquaculture:neptunium_pickaxe')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "aquaculture:neptunium_pickaxe", Count: 1 }]
        });

        scene.idle(40);
        
        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:isolated_materia')

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "aquaculture:neptunium_pickaxe", Count: 1 }, { Slot: 1, id: "embers:isolated_materia", Count: 1 }]
        });

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:tinker_hammer')

        scene.idle(40);
        const pickaxe = scene.world.createItemEntity(centerTop, util.vector.of(0.1, 0.1, -0.1), "aquaculture:neptunium_pickaxe")
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "", Count: 0 }]
        });
        
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.removeEntity(pickaxe);

        scene.text(100, "Tools and Armors can be upgraded to receive Heat by using an Ancient Motive Core.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('minecraft:iron_sword')
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }]
        });

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:ancient_motive_core')
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }, { Slot: 1, id: "embers:ancient_motive_core", Count: 1 }]
        });

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:tinker_hammer')

        scene.idle(40);

        const sword = scene.world.createItemEntity(centerTop, util.vector.of(0.1, 0.1, -0.1), "minecraft:iron_sword")
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "", Count: 0 }]
        });
        
        scene.idle(80);

        scene.addLazyKeyframe();
        scene.text(100, "As you use the tool more, the Heat bar on the tooltip will fill up.", [3, 1, 2])

        scene.idle(120);
        
        scene.world.removeEntity(sword);

        scene.text(100, "The Inferno Forge can be used to upgrade the Heat level once filled. You can then add upgrades in the same way.")

        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }, { Slot: 1, id: "embers:intelligent_apparatus", Count: 1 }]
        });

        scene.idle(80);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:tinker_hammer')

        scene.idle(80);

    });

    e.create(['embers:dawnstone_anvil', 'embers:automatic_hammer']).scene('dawnstone_anvil_scene_two', "Automatic Hammering", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:dawnstone_anvil");
        scene.world.setBlocks([2, 2, 3], "embers:automatic_hammer");
        scene.world.setBlocks([2, 2, 4], "embers:archaic_bricks");
        scene.world.setBlocks([2, 1, 4], "embers:archaic_bricks");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.world.showSection([2, 2, 4], Facing.DOWN);
        scene.world.showSection([2, 1, 4], Facing.DOWN);
        scene.idle(10);

        scene.text(100, "The Automatic Hammer is an upgrade for the Dawnstone Anvil that hammers for you.")

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.text(80, "It requires Ember power in order to run.", [2, 2.5, 3])

        scene.idle(40);

        scene.showControls(35, [2, 4, 3], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 3], "embers:ember_receiver");
        scene.world.modifyBlock([2, 3, 3], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 3, 3], Facing.DOWN);
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(100, "Place your tool and any other items on the Dawnstone Anvil like usual.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('minecraft:iron_sword')
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }]
        });

        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:ancient_motive_core')
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "minecraft:iron_sword", Count: 1 }, { Slot: 1, id: "embers:ancient_motive_core", Count: 1 }]
        });
        scene.idle(40);
        
        scene.addLazyKeyframe();

        scene.text(80, "Send a redstone pulse to trigger the Automatic Hammer.")

        scene.idle(40);

        scene.showControls(35, [2, 4, 4], "down").rightClick().withItem('embers:caminite_lever')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 4], "embers:caminite_lever");
        scene.world.modifyBlock([2, 3, 4], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        scene.world.showSection([2, 3, 4], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [2, 4, 4], "down").rightClick()

        scene.idle(40);

        scene.world.modifyBlock([2, 3, 4], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([2, 3, 4]);
        const center = util.grid.at(2, 1, 2)
        const centerTop = util.vector.topOf(center)
        scene.world.createItemEntity(centerTop, util.vector.of(0.1, 0.1, -0.1), "minecraft:iron_sword")
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{ Slot: 0, id: "", Count: 0 }]
        });
        
        scene.idle(80);

    });
    e.create(['embers:dawnstone_anvil', 'embers:inferno_forge']).scene('inferno_forge_scene_one', "Upgrading Heat Level", (scene, util) => {

        scene.showBasePlate();

        global.createPonderEmbersMultiblock(scene, "inferno_forge", 2)
        global.createPonderEmbersMultiblock(scene, "inferno_forge", 3)
        
        scene.world.modifyBlock([3, 3, 3], () => Block.id('embers:inferno_forge_edge').with("edge", "southeast").with("half", "upper"), false);
        scene.world.modifyBlock([2, 3, 3], () => Block.id('embers:inferno_forge_edge').with("edge", "south").with("half", "upper"), false);
        scene.world.modifyBlock([1, 3, 3], () => Block.id('embers:inferno_forge_edge').with("edge", "southwest").with("half", "upper"), false);
    
        scene.world.modifyBlock([3, 3, 2], () => Block.id('embers:inferno_forge_edge').with("edge", "east").with("half", "upper"), false); 
        scene.world.modifyBlock([2, 3, 2], () => Block.id('embers:inferno_forge').with("half", "upper").with("axis", "z"), false);
        scene.world.modifyBlock([1, 3, 2], () => Block.id('embers:inferno_forge_edge').with("edge", "west").with("half", "upper"), false);
    
        scene.world.modifyBlock([3, 3, 1], () => Block.id('embers:inferno_forge_edge').with("edge", "northeast").with("half", "upper"), false);
        scene.world.modifyBlock([2, 3, 1], () => Block.id('embers:inferno_forge_edge').with("edge", "north").with("half", "upper"), false);
        scene.world.modifyBlock([1, 3, 1], () => Block.id('embers:inferno_forge_edge').with("edge", "northwest").with("half", "upper"), false);
        scene.world.showSection([3, 3, 3, 1, 2, 1], Facing.DOWN);
        
        scene.idle(10);

        scene.text(80, "The Inferno Forge upgrades the Heat level of tools and armor that have full Heat.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The bottom of the Inferno Forge receives Ember power.", [2, 1, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:ember_receiver");
        scene.world.modifyBlock([2, 1, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 1, 2], Facing.UP);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "To start, right click the hatch on the top to open.", [2, 4, 2])

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick()
        
        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.text(80, "Make sure the heat bar on your item is filled, and toss it in alongside some Ember items.")

        scene.idle(40)

        scene.showControls(35, [2, 5, 2], "down").withItem('minecraft:iron_sword')

        scene.idle(40)

        const forge = util.grid.at(2, 3, 2)
        const forgeTop = util.vector.topOf(forge)

        const ironSword = scene.world.createItemEntity(forgeTop, util.vector.of(0, -0.4, 0), "minecraft:iron_sword");

        scene.idle(5)
        
        scene.world.removeEntity(ironSword);
        
        scene.idle(40)

        scene.showControls(35, [2, 5, 2], "down").withItem('embers:ember_crystal')

        scene.idle(40)

        const emberShard = scene.world.createItemEntity(forgeTop, util.vector.of(0, -0.4, 0), "embers:ember_shard");
        
        scene.idle(5)

        scene.world.removeEntity(emberShard);

        scene.idle(60);

        
        scene.addLazyKeyframe();

        scene.text(80, "To begin the upgrade, close the hatch.")

        scene.idle(30);

        scene.showControls(35, [2, 4, 2], "down").rightClick()
        
        scene.idle(80);

        scene.text(80, "Once finished, the hatch will automatically open.")

        scene.idle(40);

        scene.world.createItemEntity([2, 4, 2], util.vector.of(0, -0.4, 0), "minecraft:iron_sword");

        scene.idle(40);

        scene.text(80, "If successful, the item will have its Heat level bar, and heat level raised by 1.", [2, 4, 2])

        scene.idle(100);

        scene.text(80, "Them more Ember items you supply, the higher the chance the upgrade will be successful.")

    });

});