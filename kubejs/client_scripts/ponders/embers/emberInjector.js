Ponder.registry((e) => {
    e.create(['embers:ember_injector','embers:iron_crystal_seed', 'embers:lead_crystal_seed', 'embers:gold_crystal_seed', 'embers:silver_crystal_seed','embers:copper_crystal_seed']).scene('ember_injector_scene_one', "Growing Crystal Seesd", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:ember_injector");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Ember Injector is a device that enables Crystal Seeds to grow into metals.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Place a Crystal Seed of any type on the side the Ember Injector is facing.", [2, 2, 2])

        scene.idle(40);

        scene.showControls(35, [2, 3, 2], "down").rightClick().withItem('embers:iron_crystal_seed')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 2], "embers:iron_crystal_seed"); 
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(20);

        scene.text(80, "These can be found in world inside of small ruins, or purchased from the Shady Wizard.", [2, 2.5, 2])

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The Ember Injector needs Ember power to operate, and can receive it from any side.", [2, 1, 2])

        scene.idle(40);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "embers:ember_receiver");
        scene.world.modifyBlock([2, 1, 1], () => Block.id("embers:ember_receiver").with("facing", "north"), false);
        scene.world.showSection([2, 1, 1], Facing.SOUTH);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(80, "As it receives Ember power, the Crystal Seed shards will slowly grow...", [2, 2.5, 2])

        scene.idle(40);
        
        for (let z = 1; z <= 10; z++) {
            scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
                nbt.size = nbt.size +100
                console.log(nbt.size)
            });
            scene.idle(10);
        }
        
        scene.idle(40);

        scene.text(80, "And drop its corresponding metal nuggets in the world.")

        const frontCenter = util.grid.at(2, 2, 2)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const nugget = scene.world.createItemEntity(frontCenterTop, util.vector.of(-0.1, 0.1, -0.1), "minecraft:iron_nugget")
        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.size = 0
        });
        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "As the Crystal Seed refines, it will drop more and more nuggets with every cycle.")

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.size = 1000
            nbt.xp = 999999999 
        });

        scene.idle(100);

        scene.text(80, "Its level will not be saved when broken, so keep it in a safe permanent place.", [2, 2.5, 2]).colored(PonderPalette.RED)

        scene.idle(100);

    });
});