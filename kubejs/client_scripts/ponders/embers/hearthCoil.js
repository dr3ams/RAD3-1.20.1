Ponder.registry((e) => {
    e.create('embers:hearth_coil').scene('hearth_coil_scene_one', "Smelting Using Heat", (scene, util) => {

        scene.showBasePlate();
        
        global.createPonderEmbersMultiblock(scene, "hearth_coil", 3)

        global.showPonderLayer(scene, 0, 3);

        scene.idle(10);

        scene.text(80, "The Hearth Coil smelts items dropped on top of it using Ember Power.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "To supply Ember Power and take smelted items out, you'll need a Mechanical Core.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:mechanical_core')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core");
        scene.world.showSection([2, 2, 2], Facing.UP);

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "When given Ember power, the top of the coil will heat up.", [2, 4.2, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", [3, 4, 1, 1, 4, 3], 80)
        
        scene.idle(40);

        scene.particles.simple(580, "small_flame", [3, 4, 1]).density(2).motion([0, 0.01, 0]).area([1, 5, 3]).scale(2.1);
        
        scene.idle(60);

        scene.text(80, "Items that need smelting can then be dropped on top of the Coil.")

        scene.idle(40);

        scene.showControls(35, [2, 5, 2], "down").withItem('minecraft:cobblestone')
        
        scene.idle(40);

        const coil = util.grid.at(2, 4, 2)
        const coilTop = util.vector.topOf(coil)

        const cobbleOne = scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");
        scene.idle(5);
        const cobbleTwo = scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");
        scene.idle(5);
        const cobbleThree = scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");
        
        scene.idle(80);


        scene.addLazyKeyframe();

        scene.world.removeEntity(cobbleOne);
        scene.world.removeEntity(cobbleTwo);
        scene.world.removeEntity(cobbleThree);

        scene.text(100, "Smelted items will be stored in the Hearth Coil and can be extracted from the bottom.")

        scene.world.setBlocks([0, 1, 2], "minecraft:chest");
        scene.world.showSection([0, 1, 2], Facing.DOWN);
        scene.idle(30);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:item_extractor')
        scene.showControls(35, [0, 3, 2], "down").rightClick().withItem('embers:item_pipe')

        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:item_extractor");
        scene.world.setBlocks([0, 2, 2], "embers:item_pipe");
        
        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.connection5 = 3
            nbt.connection4 = 2
        });
        scene.world.modifyBlockEntityNBT([0, 2, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection0 = 3
        });
        scene.world.showSection([1, 2, 2], Facing.EAST);
        scene.world.showSection([0, 2, 2], Facing.EAST);

        scene.idle(60);
        
        scene.addLazyKeyframe();

        scene.text(80, "Make sure your Item Extractor has a redstone signal to extract!", [1, 3, 2])

        scene.idle(30);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([1, 2, 1], "embers:caminite_lever");
        scene.world.modifyBlock([1, 2, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 

        scene.world.modifyBlockEntityNBT([1, 2, 2], (nbt) => {
            nbt.connection2 = 4
        });

        scene.world.showSection([1, 2, 1], Facing.SOUTH);
        scene.idle(40);

        scene.world.modifyBlock([1, 2, 1], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 2, 1]);
        
        scene.showControls(35, [0, 2, 2], "down").withItem('minecraft:stone')

        scene.idle(80);
    });

    e.create(['embers:hearth_coil']).scene('hearth_coil_scene_two', "Managing Hearth Heat", (scene, util) => {

        scene.showBasePlate();
        
        global.createPonderEmbersMultiblock(scene, "hearth_coil", 3)

        global.showPonderLayer(scene, 0, 3);

        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core");
        scene.world.showSection([2, 2, 2], Facing.UP);
        scene.idle(10);

        scene.text(80, "Unlike many Ember Machines, the Hearth Coil will continue to draw power even if no items are smelting.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "It is recommended to shut off the Hearth Coil automatically using a Clockwork Attenuator.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:clockwork_attenuator')
        
        scene.idle(40);
        scene.world.setBlocks([2, 2, 1], "embers:clockwork_attenuator");
        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:clockwork_attenuator").with("facing", "north"), false); 

        scene.world.showSection([2, 2, 1], Facing.SOUTH);
        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Using a Pressure Plate, you can detect when items are on top of the Hearth Coil to turn it on.")

        scene.idle(30);

        scene.showControls(35, [2, 5, 2], "down").rightClick().withItem('minecraft:oak_pressure_plate')
        scene.world.hideSection([0, 3, 2], Facing.DOWN);
        scene.world.hideSection([0, 3, 1], Facing.DOWN);

        scene.idle(40);
        scene.world.setBlocks([2, 4, 2], "minecraft:oak_pressure_plate");
        scene.world.showSection([2, 4, 2], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([1, 4, 2], "minecraft:redstone_wire");
        scene.world.modifyBlock([1, 4, 2], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side"), false); 
        scene.world.showSection([1, 4, 2], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([0, 3, 2], "embers:archaic_bricks");
        scene.world.showSection([0, 3, 2], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([0, 4, 2], "minecraft:redstone_wire");
        scene.world.modifyBlock([0, 4, 2], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side"), false); 
        scene.world.showSection([0, 4, 2], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([0, 3, 1], "minecraft:redstone_wall_torch");
        scene.world.modifyBlock([0, 3, 1], () => Block.id("minecraft:redstone_wall_torch").with("facing", "north"), false); 
        scene.world.showSection([0, 3, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([0, 1, 1], "embers:archaic_bricks");
        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([0, 2, 1], "minecraft:redstone_wire");
        scene.world.modifyBlock([0, 2, 1], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "15"), false); 
        scene.world.showSection([0, 2, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([1, 1, 1], "embers:archaic_bricks");
        scene.world.showSection([1, 1, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([1, 2, 1], "minecraft:redstone_wire");
        scene.world.modifyBlock([1, 2, 1], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "14"), false); 
        scene.world.showSection([1, 2, 1], Facing.DOWN);
        scene.idle(40);

        const coil = util.grid.at(2, 4, 2)
        const coilTop = util.vector.topOf(coil)

        scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");
        scene.idle(5);

        scene.world.modifyBlock([1, 4, 2], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "15"), false)
        scene.world.modifyBlock([0, 4, 2], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "14"), false);
        scene.world.modifyBlock([0, 3, 1], () => Block.id("minecraft:redstone_wall_torch").with("facing", "north").with("lit", false), false);  
        scene.world.modifyBlock([0, 2, 1], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "0"), false); 
        scene.world.modifyBlock([1, 2, 1], () => Block.id("minecraft:redstone_wire").with("east", "side").with("west", "side").with("power", "0"), false);

        scene.particles.simple(80, "small_flame", [3, 4, 1]).density(2).motion([0, 0.01, 0]).area([1, 5, 3]).scale(2.1);

        scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");
        scene.idle(5);
        scene.world.createItemEntity(coilTop, util.vector.of(0, -0.4, 0), "minecraft:cobblestone");

        scene.idle(80);
    });

    e.create(['embers:hearth_coil', 'embers:heat_insulation', 'embers:char_instiller', 'embers:atmospheric_bellows']).scene('hearth_coil_scene_three', "Hearth Coil Upgrades", (scene) => {

        scene.showBasePlate();
        
        global.createPonderEmbersMultiblock(scene, "hearth_coil", 3)

        global.showPonderLayer(scene, 0, 3);

        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core");
        scene.world.showSection([2, 2, 2], Facing.UP);
        scene.idle(10);

        scene.text(80, "The Hearth Coil has three upgrades that modify the behavior of the machine.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(120, "Heat Insulation reduces the cooling speed of the Hearth Coil by 30% while increasing the max heat significantly per upgrade.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:heat_insulation')
        
        scene.idle(40);
        scene.world.setBlocks([2, 2, 1], "embers:heat_insulation");
        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:heat_insulation").with("facing", "north"), false); 

        scene.world.showSection([2, 2, 1], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.hideSection([2, 2, 1], Facing.NORTH);

        scene.text(120, "The Char Instiller limits the Hearth Coil to smoking recipes, but doubles the speed.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:char_instiller')
        
        scene.world.setBlocks([2, 2, 1], "embers:char_instiller", false);
        scene.idle(40);

        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:char_instiller").with("facing", "south"), false); 

        scene.world.showSection([2, 2, 1], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.world.hideSection([2, 2, 1], Facing.NORTH);

        scene.text(120, "The Atmospheric Bellows limits the Hearth Coil to blasting recipes, but doubles the speed.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:atmospheric_bellows')
        
        scene.world.setBlocks([2, 2, 1], "embers:atmospheric_bellows", false);
        scene.idle(40);

        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:atmospheric_bellows").with("facing", "south"), false); 

        scene.world.showSection([2, 2, 1], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.text(100, "Both the Atmospheric Bellows and Char Instiller are incompatible with each other.")
        scene.idle(100);
    });
});