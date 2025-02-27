Ponder.registry((e) => {
    e.create('embers:ember_bore').scene('ember_bore_scene_one', "Drilling for Ember", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([4, 0, 0], "minecraft:bedrock", false);
        scene.world.setBlocks([3, 0, 0], "minecraft:bedrock", false);
        scene.world.setBlocks([2, 0, 0], "minecraft:bedrock", false);
        scene.world.setBlocks([1, 0, 0], "minecraft:bedrock", false);
        scene.world.setBlocks([0, 0, 0], "minecraft:bedrock", false);


        scene.world.setBlocks([4, 0, 1], "minecraft:bedrock", false);
        scene.world.setBlocks([3, 0, 1], "minecraft:bedrock", false);
        scene.world.setBlocks([2, 0, 1], "minecraft:bedrock", false);
        scene.world.setBlocks([1, 0, 1], "minecraft:bedrock", false);
        scene.world.setBlocks([0, 0, 1], "minecraft:bedrock", false);

        scene.world.setBlocks([4, 0, 2], "minecraft:bedrock", false);
        scene.world.setBlocks([3, 0, 2], "minecraft:bedrock", false);
        scene.world.setBlocks([2, 0, 2], "minecraft:bedrock", false);
        scene.world.setBlocks([1, 0, 2], "minecraft:bedrock", false);
        scene.world.setBlocks([0, 0, 2], "minecraft:bedrock", false);

        scene.world.setBlocks([4, 0, 3], "minecraft:bedrock", false);
        scene.world.setBlocks([3, 0, 3], "minecraft:bedrock", false);
        scene.world.setBlocks([2, 0, 3], "minecraft:bedrock", false);
        scene.world.setBlocks([1, 0, 3], "minecraft:bedrock", false);
        scene.world.setBlocks([0, 0, 3], "minecraft:bedrock", false);

        scene.world.setBlocks([4, 0, 4], "minecraft:bedrock", false);
        scene.world.setBlocks([3, 0, 4], "minecraft:bedrock", false);
        scene.world.setBlocks([2, 0, 4], "minecraft:bedrock", false);
        scene.world.setBlocks([1, 0, 4], "minecraft:bedrock", false);
        scene.world.setBlocks([0, 0, 4], "minecraft:bedrock", false);

        global.createPonderEmbersMultiblock(scene, "ember_bore", 1)
        global.showPonderLayer(scene, 0, 1);

        scene.idle(10);

        scene.text(80, "The Ember Bore mines Ember Shards, Crystals, and Grit using Furnace fuels.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "To start mining Ember, place the bore, making sure it touches at least 3 blocks of Bedrock.", [0, 1, 4])

        scene.idle(100);

        scene.text(80, "Other recipes may have different requirements, so check JEI for info.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "To put fuels in and take items out of the Bore, you'll need a Mechanical Core.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:mechanical_core')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 2], "embers:mechanical_core");
        scene.world.showSection([2, 2, 2], Facing.DOWN);
         
        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(100, "Any Furnace fuel can be used to power the bore. They can be supplied using a Hopper or Item Pipe.")

        scene.idle(30);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "minecraft:hopper");
        scene.world.showSection([3, 2, 2], Facing.WEST);
        scene.world.modifyBlock([3, 2, 2], () => Block.id("minecraft:hopper").with("facing", "west"), false); 

        scene.idle(40);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('minecraft:coal')
        scene.world.hideSection([0, 1, 2], Facing.NORTH);
        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(120, "Ember Shards, Crystals, and Grit can be piped out of the Mechanical Core using an Item Extractor and Item Pipe.")

        scene.world.setBlocks([0, 1, 2], "minecraft:chest");
        scene.world.showSection([0, 1, 2], Facing.DOWN);
                scene.world.showSection([0, 1, 2], Facing.DOWN);
        scene.idle(30);

        scene.showControls(35, [1, 3, 2], "down").rightClick().withItem('embers:item_extractor')
        scene.showControls(35, [0, 3, 2], "down").rightClick().withItem('embers:item_pipe')

        scene.idle(40);

        scene.world.setBlocks([1, 2, 2], "embers:item_extractor");
        scene.world.showSection([1, 2, 2], Facing.DOWN);
        scene.world.setBlocks([0, 2, 2], "embers:item_pipe");
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

        scene.text(80, "Make sure your Item Extractor has a redstone signal to extract!", [1, 3, 2])

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

    });

    e.create(['embers:ember_bore', 'embers:excavation_buckets']).scene('ember_bore_scene_two', "Ember Bore Upgrades", (scene) => {

        scene.showBasePlate();

        global.createPonderEmbersMultiblock(scene, "ember_bore", 2)
        global.showPonderLayer(scene, 0, 2);
        scene.world.setBlocks([2, 3, 2], "embers:mechanical_core");
        scene.world.showSection([2, 3, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "With the Excavation Buckets upgrade, the Ember Bore can dig for Gravel and Flint or Snow.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(80, "Connect the upgrade to any port on the Mechanical Core to start.")

        scene.idle(30);

        scene.showControls(35, [2, 4, 1], "down").rightClick().withItem('embers:excavation_buckets')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 1], "embers:excavation_buckets", false);
        scene.world.showSection([2, 3, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 3, 1], () => Block.id("embers:excavation_buckets").with("facing", "north"), false); 

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Make sure at least 5 of the blades are touching the block you want to mine.", [1, 1, 3])

        scene.idle(30);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('minecraft:gravel')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 1], "minecraft:gravel", true);
        scene.world.showSection([3, 1, 1], Facing.SOUTH);
        scene.world.setBlocks([2, 1, 1], "minecraft:gravel", true);
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.setBlocks([1, 1, 1], "minecraft:gravel", true);
        scene.world.showSection([1, 1, 1], Facing.SOUTH);

        scene.world.setBlocks([3, 1, 2], "minecraft:gravel", true);
        scene.world.showSection([3, 1, 2], Facing.SOUTH);
        scene.world.setBlocks([2, 1, 2], "minecraft:gravel", true);
        scene.world.showSection([2, 1, 2], Facing.SOUTH);
        scene.world.setBlocks([1, 1, 2], "minecraft:gravel", true);
        scene.world.showSection([1, 1, 2], Facing.SOUTH);

        scene.world.setBlocks([3, 1, 3], "minecraft:gravel", true);
        scene.world.showSection([3, 1, 3], Facing.SOUTH);
        scene.world.setBlocks([2, 1, 3], "minecraft:gravel", true);
        scene.world.showSection([2, 1, 3], Facing.SOUTH);
        scene.world.setBlocks([1, 1, 3], "minecraft:gravel", true);
        scene.world.showSection([1, 1, 3], Facing.SOUTH);

        scene.idle(40);

    });

    e.create(['embers:ember_bore', 'embers:atmospheric_gauge', 'embers:field_chart']).scene('ember_bore_scene_three', "Finding Ember Deposits", (scene) => {

        scene.showBasePlate();

        scene.text(80, "Not every place you drill for Ember will give you equal yield.")

        scene.idle(100);

        scene.addLazyKeyframe();
        
        scene.text(80, "The Atmospheric Gauge is a placeable item that measures the current Ember Density of a position.")
        
        scene.idle(30);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:atmospheric_gauge')
        
        scene.idle(80);

        scene.world.setBlocks([2, 1, 2], "embers:atmospheric_gauge", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("embers:atmospheric_gauge").with("facing", "up"), false);

        scene.idle(70);

        scene.world.hideSection([2, 1, 2], Facing.UP);
        
        scene.idle(10);

        scene.addLazyKeyframe();
        
        scene.text(100, "The Field Chart is an advanced block that shows Ember Density in a large area.")
        
        scene.idle(30);

        scene.world.setBlocks([2, 1, 2], "minecraft:air", false);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:field_chart')
        
        scene.idle(40);

        global.createPonderEmbersMultiblock(scene, "field_chart", 1)
        global.showPonderLayer(scene, 0, 1);
        scene.idle(60);

    });
});