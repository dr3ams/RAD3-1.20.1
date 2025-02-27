Ponder.registry((e) => {
    e.create(['embers:mini_boiler', 'embers:steam_bucket', 'embers:dwarven_gas_bucket']).scene('gasses_scene_one', "Boiling Fluids", (scene) => {

        scene.showBasePlate();
        
        scene.world.setBlocks([2, 1, 3], "embers:mechanical_pump");
        scene.world.setBlocks([2, 2, 3], "embers:mechanical_pump");
        
        scene.world.modifyBlock([2, 2, 3], () => Block.id("embers:mechanical_pump").with("half", "upper"), false);

        scene.world.showSection([2, 1, 3], Facing.DOWN);
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.world.setBlocks([1, 0, 3], "minecraft:water", false);
        scene.world.setBlocks([2, 0, 3], "minecraft:water", false);
        scene.world.setBlocks([3, 0, 3], "minecraft:water", false);

        scene.world.setBlocks([2, 1, 1], "embers:ember_activator");
        scene.world.setBlocks([2, 2, 1], "embers:ember_activator");

        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:ember_activator").with("half", "upper"), false);
        scene.world.showSection([2, 1, 1], Facing.DOWN);
        scene.world.showSection([2, 2, 1], Facing.DOWN);

        scene.idle(10)

        scene.text(80, "The Mini Boiler heats up fluids and turns them into gas.")

        scene.idle(100);
        
        scene.text(80, "Due to a bug in pondering, it will be represented by a Solidified Metal block.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Unlike many other machines, the Mini Boiler does not accept Ember power...")

        scene.idle(40);

        scene.showControls(35, [1, 2, 1], "down").rightClick().withItem('embers:mini_boiler')
        
        scene.idle(40);
        
        scene.world.setBlocks([1, 1, 1], "embers:solidified_metal", false);
        scene.world.showSection([1, 1, 1], Facing.SOUTH);

        scene.idle(20);
        
        scene.text(80, "It must be attached to a machine that produces or consumes Ember Power.", [1, 1, 1]);

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.text(80, "Fluids such as water can be inserted into the side.", [1, 1, 1])

        scene.idle(40);

        scene.showControls(35, [1, 3, 3], "down").rightClick().withItem('embers:fluid_extractor')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 3], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 2, 3], (nbt) => {
            nbt.connection1 = 4
            nbt.connection5 = 3
            nbt.connection0 = 2
        });
        scene.world.setBlocks([1, 1, 3], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([1, 1, 3], (nbt) => {
            nbt.connection2 = 2
            nbt.connection1 = 2
        });
        scene.world.setBlocks([1, 1, 2], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection3 = 2
            nbt.connection2 = 2
        });
        scene.world.setBlocks([1, 3, 3], "embers:caminite_lever");
        scene.world.modifyBlock([1, 3, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);

        scene.world.showSection([1, 2, 3], Facing.DOWN);
        scene.world.showSection([1, 1, 3], Facing.DOWN);
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        
        scene.idle(3);
        scene.world.showSection([1, 3, 3], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [1, 4, 3], "down").rightClick()

        scene.idle(40);

        scene.world.modifyBlock([1, 3, 3], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 3, 3]);
        
        scene.idle(40);

        scene.showControls(35, [1, 3, 1], "down").withItem('embers:steam_bucket');

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Gasses can be extracted from the top of the Mini Boiler...", [1, 2, 1])

        scene.idle(40);

        scene.showControls(35, [1, 3, 1], "down").rightClick().withItem('embers:fluid_extractor')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 1], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 2, 1], (nbt) => {
            nbt.connection2 = 4
            nbt.connection4 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([0, 2, 1], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([0, 2, 1], (nbt) => {
            nbt.connection5 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([0, 1, 1], "embers:fluid_vessel");
        scene.world.setBlocks([1, 2, 0], "embers:caminite_lever");
        scene.world.modifyBlock([1, 2, 0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false);

        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.world.showSection([1, 2, 1], Facing.DOWN);
        scene.world.showSection([0, 2, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([1, 2, 0], Facing.DOWN);

        scene.idle(40);

        scene.text(80, "But cannot be stored in Fluid Vessels.", [0, 1, 1])

        scene.idle(40);

        scene.showControls(35, [1, 3, 0], "down").rightClick()

        scene.idle(40);

        scene.world.modifyBlock([1, 2, 0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 2, 0]);

        scene.particles.simple(20, "poof", [0, 2, 1]).density(6).withinBlockSpace();
        scene.idle(40);
    
        scene.addLazyKeyframe();

        scene.text(120, "Venting the gas may be needed as the Mini Boiler may explode with too much pressure!");

        scene.idle(30);

        scene.world.hideSection([0, 1, 1], Facing.UP);
        scene.world.hideSection([1, 2, 1], Facing.UP);
        scene.world.hideSection([0, 2, 1], Facing.UP);
        scene.world.hideSection([1, 2, 0], Facing.UP);
        
        scene.idle(80);

        scene.playSound("embers:block.mini_boiler.rupture", 1)
        scene.particles.simple(5, "explosion", [1, 2, 1]).density(3).withinBlockSpace();
        scene.world.setBlocks([1, 1, 1], "air");
        scene.world.modifyBlockEntityNBT([1, 1, 2], (nbt) => {
            nbt.connection2 = 0
        });

        scene.idle(80);
    });

    e.create(['embers:mini_boiler', 'embers:steam_bucket', 'embers:dwarven_gas_bucket', 'embers:catalytic_plug', 'embers:wildfire_stirling']).scene('gasses_scene_two', "Usesing Gasses", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:melter");
        scene.world.setBlocks([2, 2, 2], "embers:melter");
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:melter").with("half", "upper"), false);
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "Gasses can be used to upgrade your machines and produce Dawnstone with less Neptunium.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Steam and Dwarven Gas provide the same usage for upgrades...")

        scene.idle(30);
        const leftCenter = util.grid.at(1, 1, 1)
        const leftCenterTop = util.vector.topOf(leftCenter)
        const rightCenter = util.grid.at(3, 1, 1)
        const rightCenterTop = util.vector.topOf(rightCenter)

        const steam = scene.world.createItemEntity(leftCenterTop, util.vector.of(0, 0.4, 0), "embers:steam_bucket")
        const dwarvenGas = scene.world.createItemEntity(rightCenterTop, util.vector.of(0, 0.4, 0), "embers:dwarven_gas_bucket")
        scene.idle(70);

        scene.text(80, "But Dwarven Gas burns x5 longer with x0.5 more intensity.", [3, 1, 1])

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.world.removeEntity(steam);
        scene.world.removeEntity(dwarvenGas);

        scene.text(80, "Up to 2 Catalytic Plugs can be added to a machine to double its speed.")

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:catalytic_plug')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:catalytic_plug");
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:catalytic_plug").with("facing", "north"), false); 
        scene.world.showSection([2, 1, 1], Facing.SOUTH);

        scene.idle(20);

        scene.showControls(35, [2, 2, 1], "down").withItem('embers:steam_bucket')
      
        scene.idle(60);

        scene.text(80, "It takes in gasses from the back.", [2, 1, 1])

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.world.hideSection([2, 1, 1], Facing.NORTH);

        scene.text(80, "The Wildfire Stirling reduces Ember power cost by half for each connected.")

        scene.idle(30);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:wildfire_stirling')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:wildfire_stirling", false);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:wildfire_stirling").with("facing", "north"), false); 
        scene.world.showSection([2, 1, 1], Facing.SOUTH);

        scene.idle(120);

        scene.addLazyKeyframe();
        
        scene.world.hideSection([2, 1, 1], Facing.NORTH);

        scene.text(80, "Both upgrades have reduced efficiency if attached through more than one Mechanical Core.")

        scene.idle(120);
        scene.world.setBlocks([3, 1, 2], "embers:mechanical_core");
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:mechanical_core").with("facing", "east"), false); 
        scene.world.showSection([3, 1, 2], Facing.WEST);

        scene.idle(3);

        scene.world.setBlocks([2, 1, 1], "embers:mechanical_core", false);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:mechanical_core").with("facing", "north"), false); 
        scene.world.showSection([2, 1, 1], Facing.SOUTH);

        scene.idle(20);

        scene.world.setBlocks([2, 2, 1], "embers:wildfire_stirling", false);
        scene.world.modifyBlock([2, 2, 1], () => Block.id("embers:wildfire_stirling").with("facing", "down"), false); 
        scene.world.showSection([2, 2, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.setBlocks([3, 2, 2], "embers:wildfire_stirling");
        scene.world.modifyBlock([3, 2, 2], () => Block.id("embers:wildfire_stirling").with("facing", "down"), false); 
        scene.world.showSection([3, 2, 2], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.hideSection([3, 1, 1, 2, 2, 2], Facing.UP);

        scene.text(120, "Dwarven Gas can also substitute Molten Gold in Dawnstone Mixing, giving x3 more Dawnstone per Neptunium.")

        scene.idle(40);

        scene.world.setBlocks([2, 1, 2], "embers:mixer_centrifuge", false);
        scene.world.setBlocks([2, 2, 2], "embers:mixer_centrifuge", false);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("embers:mixer_centrifuge").with("half", "upper"), false); 
        scene.world.showSection([2, 1, 2], Facing.WEST);
        scene.world.showSection([2, 2, 2], Facing.WEST);
        scene.idle(100);
    });
});