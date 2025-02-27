Ponder.registry((e) => {
    const createTranslocator = (type) => {
    e.create(`translocators:${type}_translocator`).scene("translocator_scene", "Using Translocators", (scene) => {
            
        scene.showBasePlate();

            scene.world.setBlocks([1, 1, 2], "minecraft:chest");
            scene.world.setBlocks([3, 1, 2], "minecraft:chest");
            scene.world.showSection([1, 1, 2], Facing.DOWN);
            scene.world.showSection([3, 1, 2], Facing.DOWN);
        
            scene.idle(10);

            scene.text(
                90,
                "Translocators are versatile devices to transfer items and fluids between inventories."
            );
            
            scene.world.showSection([2, 1, 2], Facing.DOWN);
        
            scene.idle(110);

            scene.world.setBlocks([2, 1, 2], "minecraft:iron_block", true);

            scene.text(
                120,
                "Since they are placed in the same block space, they do not render correctly here and will be represented by the Iron Block.",
                [2, 2, 2]
            );

            scene.idle(140);

            scene.addLazyKeyframe();

            scene.text(
                90,
                "To select which inventory to insert into, right click its respective Translocator nub.",
                [2, 2, 2]
            );
            scene.showControls(60, [2, 2, 2], "down").rightClick();

            scene.idle(110);

            scene.text(
                90,
                "They can also be filtered by right clicking on the main part.",
                [2, 2, 2]
            );

            scene.showControls(60, [2, 2, 2], "down").rightClick();

            scene.idle(110);

            scene.addLazyKeyframe();

            scene.text(
                90,
                "Translocators can be upgraded with Glowstone Dust to transfer stacks at a time.",
                [2, 2, 2]
            );

            scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("minecraft:glowstone_dust");

            scene.idle(40);

            scene.world.setBlocks([2, 1, 2], "minecraft:glowstone", true);

            scene.idle(80);

            scene.addLazyKeyframe();

            scene.world.setBlocks([2, 1, 2], "minecraft:iron_block", false);

            scene.text(
                160,
                "Adding a Neptunium Ingot puts it in regulate mode. It will maintain a certain amount of items set in the filter in the inventory it's attached to.",
                [2, 2, 2]
            );
            scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("aquaculture:neptunium_ingot");

            scene.idle(40);

            scene.world.setBlocks([2, 1, 2], "aquaculture:neptunium_block", true);

            scene.idle(140);

            scene.addLazyKeyframe();

            scene.world.setBlocks([2, 1, 2], "minecraft:iron_block", false);

            scene.text(
                90,
                "They can also be upgraded with Redstone Dust for redstone control.",
                [2, 2, 2]
            );
            scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("minecraft:redstone_dust");

            scene.idle(40);

            scene.world.setBlocks([2, 1, 2], "minecraft:redstone_block", true);

            scene.idle(80);

            scene.addLazyKeyframe();

            scene.world.setBlocks([2, 1, 2], "minecraft:iron_block", false);

            scene.text(
                90,
                "Finally, adding an Iron Ingot makes the Translocator emit a redstone signal to the inventory if it can't insert.",
                [2, 2, 2]
            );
            scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("minecraft:iron_ingot");

            scene.idle(120);

            scene.addLazyKeyframe();
        });
    }
    createTranslocator('fluid');
    createTranslocator('item');
});
