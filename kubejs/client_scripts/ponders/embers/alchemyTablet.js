Ponder.registry((e) => {
    e.create(['embers:alchemy_tablet', "embers:alchemy_pedestal", "embers:beam_cannon"]).scene('alchemy_tablete_scene_one', "Setting Up Alchemy", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:alchemy_tablet");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.idle(10);

        scene.text(80, "The alchemy process is a complex way to craft the highest tier of items in Embers.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "To start, place an Alchemy Pedestal for each needed ingredient around the Tablet.")

        scene.idle(30);

        scene.showControls(35, [4, 2, 1], "down").rightClick().withItem('embers:alchemy_pedestal')
        
        scene.idle(40);

        scene.world.setBlocks([4, 1, 1], "embers:alchemy_pedestal", true);
        scene.world.showSection([4, 1, 1], Facing.DOWN);
        scene.world.setBlocks([4, 2, 1], "embers:alchemy_pedestal", false);
        scene.world.showSection([4, 2, 1], Facing.DOWN);
        scene.world.modifyBlock([4, 2, 1], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 
        scene.idle(10);
        scene.world.setBlocks([3, 1, 3], "embers:alchemy_pedestal", true);
        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.world.setBlocks([3, 2, 3], "embers:alchemy_pedestal", false);
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 3], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 
        scene.idle(10);
        scene.world.setBlocks([1, 1, 3], "embers:alchemy_pedestal", true);
        scene.world.showSection([1, 1, 3], Facing.DOWN);
        scene.world.setBlocks([1, 2, 3], "embers:alchemy_pedestal", false)
        scene.world.showSection([1, 2, 3], Facing.DOWN);;
        scene.world.modifyBlock([1, 2, 3], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 
        scene.idle(10);
        scene.world.setBlocks([0, 1, 1], "embers:alchemy_pedestal", true);
        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.world.setBlocks([0, 2, 1], "embers:alchemy_pedestal", false);
        scene.world.showSection([0, 2, 1], Facing.DOWN);
        scene.world.modifyBlock([0, 2, 1], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Additionally, a Beam Cannon will need to point to the Tablet and be supplied with Ember Power.")

        scene.idle(30);

        scene.showControls(35, [2, 5, 2], "down").rightClick().withItem('embers:beam_cannon')
        
        scene.idle(40);

        scene.world.setBlocks([2, 4, 2], "embers:beam_cannon", true);
        scene.world.showSection([2, 4, 2], Facing.UP);
        scene.world.modifyBlock([2, 4, 2], () => Block.id("embers:beam_cannon").with("facing", "down"), false); 

        scene.idle(40);

        scene.showControls(35, [2, 6, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 5, 2], "embers:ember_receiver", true);
        scene.world.showSection([2, 5, 2], Facing.SOUTH);
        scene.world.modifyBlock([2, 5, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false); 

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "You will also need a way to send a redstone signal to the Beam Cannon to trigger the craft.")

        scene.idle(30);

        scene.showControls(35, [2, 5, 2], "down").rightClick().withItem('embers:caminite_button')
        
        scene.idle(40);

        scene.world.setBlocks([2, 4, 1], "embers:caminite_button", true);
        scene.world.showSection([2, 4, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 4, 1], () => Block.id("embers:caminite_button").with("facing", "north").with("face", "wall"), false); 
        scene.world.modifyBlock([2, 4, 2], () => Block.id("embers:beam_cannon").with("facing", "down").with("front", "true"), false); 

        scene.idle(40);
    });

    e.create('embers:alchemy_tablet').scene('alchemy_tablete_scene_two', "The Alchemical Process", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:alchemy_tablet");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.world.setBlocks([4, 1, 1], "embers:alchemy_pedestal", true);
        scene.world.showSection([4, 1, 1], Facing.DOWN);
        scene.world.setBlocks([4, 2, 1], "embers:alchemy_pedestal", false);
        scene.world.showSection([4, 2, 1], Facing.DOWN);
        scene.world.modifyBlock([4, 2, 1], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 

        scene.world.setBlocks([3, 1, 3], "embers:alchemy_pedestal", true);
        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.world.setBlocks([3, 2, 3], "embers:alchemy_pedestal", false);
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.world.modifyBlock([3, 2, 3], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 

        scene.world.setBlocks([1, 1, 3], "embers:alchemy_pedestal", true);
        scene.world.showSection([1, 1, 3], Facing.DOWN);
        scene.world.setBlocks([1, 2, 3], "embers:alchemy_pedestal", false);
        scene.world.showSection([1, 2, 3], Facing.DOWN);
        scene.world.modifyBlock([1, 2, 3], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 

        scene.world.setBlocks([0, 1, 1], "embers:alchemy_pedestal", true);
        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.world.setBlocks([0, 2, 1], "embers:alchemy_pedestal", false);
        scene.world.showSection([0, 1, 1], Facing.DOWN);
        scene.world.modifyBlock([0, 2, 1], () => Block.id("embers:alchemy_pedestal").with("half", "upper"), false); 

        scene.world.setBlocks([2, 4, 2], "embers:beam_cannon", true);
        scene.world.showSection([2, 4, 2], Facing.DOWN);
        scene.world.modifyBlock([2, 4, 2], () => Block.id("embers:beam_cannon").with("facing", "down").with("front", "true"), false); 

        scene.world.setBlocks([2, 4, 1], "embers:caminite_button", true);
        scene.world.showSection([2, 4, 1], Facing.DOWN);
        scene.world.modifyBlock([2, 4, 1], () => Block.id("embers:caminite_button").with("facing", "north").with("face", "wall"), false); 

        scene.idle(10);

        scene.text(80, "The alchemical process requires some experimentation. It's recommended to start with a cheap recipe.")

        scene.idle(100);

        scene.text(80, "In this example, we will be crafting an Intelligent Apparatus.")

        scene.idle(30);

        const frontCenter = util.grid.at(2, 0, 1)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const apparatus = scene.world.createItemEntity(frontCenterTop, util.vector.of(0, 0.4, 0), "embers:intelligent_apparatus")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(100, "In JEI you can see the recipe may contain a Copper, Lead, and Silver Aspectus.")

        scene.world.removeEntity(apparatus);

        scene.idle(30);

        const frontLeft = util.grid.at(3, 0, 1)
        const frontLeftTop = util.vector.topOf(frontLeft)
        const frontRight = util.grid.at(1, 0, 1)
        const frontRightTop = util.vector.topOf(frontRight)

        const copperAspectus = scene.world.createItemEntity(frontLeftTop, util.vector.of(0, 0.4, 0), "embers:copper_aspectus");
        const leadAspectus = scene.world.createItemEntity(frontCenterTop, util.vector.of(0, 0.4, 0), "embers:lead_aspectus");
        const silverAspectus = scene.world.createItemEntity(frontRightTop, util.vector.of(0, 0.4, 0), "embers:silver_aspectus");
        
        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Place an Aspectus on each of the Alchemy Pedestals at random. One of them will be a duplicate.");
        
        scene.world.removeEntity(copperAspectus);
        scene.world.removeEntity(leadAspectus);
        scene.world.removeEntity(silverAspectus);

        scene.idle(30);

        scene.showControls(35, [4, 2, 1], "down").rightClick().withItem('embers:silver_aspectus');
        scene.showControls(35, [3, 2, 3], "down").rightClick().withItem('embers:copper_aspectus');
        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('embers:lead_aspectus');
        scene.showControls(35, [0, 2, 1], "down").rightClick().withItem('embers:lead_aspectus');

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:lead_aspectus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:silver_aspectus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([1, 1, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:lead_aspectus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([0, 1, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:lead_aspectus", Count: 1}] 
        });
        
        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "Next, place the recipe items on each one of the pedestals...");

        scene.idle(30);

        scene.showControls(35, [4, 3, 1], "down").rightClick().withItem('embers:archaic_circuit');
        scene.showControls(35, [3, 3, 3], "down").rightClick().withItem('embers:archaic_circuit');
        scene.showControls(35, [1, 3, 3], "down").rightClick().withItem('minecraft:copper_ingot');
        scene.showControls(35, [0, 3, 1], "down").rightClick().withItem('minecraft:copper_ingot');

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([4, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:archaic_circuit", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([3, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:archaic_circuit", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([1, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "minecraft:copper_ingot", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([0, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "minecraft:copper_ingot", Count: 1}] 
        });

        scene.idle(30);

        scene.text(80, "And the catalyst on the Exchange Tablet.");

        scene.idle(30);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('embers:copper_plate');

        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:copper_plate", Count: 1}] 
        });

        scene.idle(40);

        scene.addLazyKeyframe();

        scene.text(80, "With everything placed, give the Beam Cannon a redstone Signal.", [2, 5, 2]);

        scene.idle(30);

        scene.showControls(35, [2, 5, 1], "down").rightClick()

        scene.idle(40);

        const TICK_LENGTH = 100;
        const start = [2, 4, 2];
        const end = [2, 2, 2];

        scene.playSound("embers:block.alchemy.start", 1)
        scene.playSound("embers:block.beam_cannon.fire", 1)
        scene.playSound("embers:block.alchemy.loop", 1)
        scene.particles.simple(TICK_LENGTH, "small_flame", start).density(10).motion([0.1, -0.1, 0.1]).area(end).scale(2.1);
        scene.idle(TICK_LENGTH + 5);
        scene.playSound("embers:block.alchemy.fail", 1)
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:alchemical_waste", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([4, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });
        scene.world.modifyBlockEntityNBT([1, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });

        scene.idle(40);

        scene.text(140, "If the recipe is incorrect, the catalyst will turn to Alchemical Waste and random items on the pedestals will be consumed.");

        scene.idle(160);

        scene.addLazyKeyframe();

        scene.text(120, "Right clicking with the Alchemical Waste in your hand will give you hints on where the Aspecti go.", [2, 2, 2]);

        scene.idle(30);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem("embers:alchemical_waste")
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });
        scene.idle(110);

        scene.text(80, "Glowing dots indicate an Aspectus is paired with the correct item...");

        scene.idle(100);

        scene.text(80, "While pale dots indicate the Aspectus exists in the recipe, but is paired with the incorrect item.");
        
        scene.idle(120);
        
        scene.addLazyKeyframe();

        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:copper_aspectus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([1, 1, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:silver_aspectus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([0, 1, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:silver_aspectus", Count: 1}] 
        });
        
        scene.world.modifyBlockEntityNBT([4, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:archaic_circuit", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([1, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "minecraft:copper_ingot", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:copper_plate", Count: 1}] 
        });

        scene.text(80, "With your new guess, give the Beam Cannon another go.", [2, 5, 2]);

        scene.idle(30);

        scene.showControls(35, [2, 5, 1], "down").rightClick()

        scene.idle(70);

        scene.text(100, "Note: Alchemy recipes are randomized per world, so this configuration may not work for you!");

        scene.playSound("embers:block.alchemy.start", 1)
        scene.playSound("embers:block.beam_cannon.fire", 1)
        scene.playSound("embers:block.alchemy.loop", 1)
        scene.particles.simple(TICK_LENGTH, "small_flame", start).density(10).motion([0.1, -0.1, 0.1]).area(end).scale(2.1);
        scene.idle(TICK_LENGTH + 5);
        scene.playSound("embers:block.alchemy.success", 1)
        
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "embers:intelligent_apparatus", Count: 1}] 
        });
        scene.world.modifyBlockEntityNBT([4, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });
        scene.world.modifyBlockEntityNBT([3, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });
        scene.world.modifyBlockEntityNBT([0, 2, 1], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });
        scene.world.modifyBlockEntityNBT([1, 2, 3], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "", Count: 0}] 
        });

        scene.idle(40);

        scene.text(140, "If the recipe is correct, all the pedestal items will be consumed, and you'll have your item!");

        scene.idle(40);
    });
    e.create(["embers:alchemy_tablet","embers:mnemonic_inscriber", "embers:entropic_enumerator", "embers:codebreaking_slate"]).scene('alchemy_tablete_scene_three', "Alchemy Hints", (scene, util) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "embers:alchemy_tablet");
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "Figuring out alchemy recipes can be tedious, but luckily there are tools to help.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "A Codebreaking Slate should be one of the first items you make.")

        scene.idle(30);
        const frontCenter = util.grid.at(2, 1, 2)
        const frontCenterTop = util.vector.topOf(frontCenter)
        
        const slate = scene.world.createItemEntity(frontCenterTop, util.vector.of(0, 0.4, 0), "embers:codebreaking_slate")
        
        scene.idle(70);

        scene.text(80, "It stores multiple Alchemical Wastes, with a UI that makes tracking attempts easy.")

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.world.removeEntity(slate);
        
        scene.text(80, "The Mnemonic Inscriber can be attached to your Exchange Tablet and filled with paper.")

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:mnemonic_inscriber')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:mnemonic_inscriber");
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:mnemonic_inscriber").with("facing", "east"), false); 
        scene.world.showSection([3, 1, 2], Facing.WEST);

        scene.idle(20);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('minecraft:paper')
      
        scene.idle(40);
        scene.world.modifyBlockEntityNBT([3, 1, 2], (nbt) => {
            nbt.inventory.Items = [{Slot: 0, id: "minecraft:paper", Count: 1}] 
        });

        scene.text(80, "After a successful alchemy recipe, it will inscribe the recipe in paper for your records.", [3, 1, 2])

        scene.idle(120);

        scene.addLazyKeyframe();

        scene.world.hideSection([3, 1, 2], Facing.EAST);

        scene.text(80, "The Entropic Enumerator allows two Aspecti to be attached to the incorrect item...")

        scene.idle(30);

        scene.showControls(35, [3, 2, 2], "down").rightClick().withItem('embers:entropic_enumerator')
        
        scene.idle(40);

        scene.world.setBlocks([3, 1, 2], "embers:entropic_enumerator", false);
        scene.world.modifyBlock([3, 1, 2], () => Block.id("embers:entropic_enumerator").with("facing", "east"), false); 
        scene.world.showSection([3, 1, 2], Facing.WEST);

        scene.idle(40);

        scene.text(80, "But has a set chance to fail the recipe, correct or incorrect.")

        scene.idle(120);

        scene.addLazyKeyframe();
        
        scene.world.hideSection([3, 1, 2], Facing.EAST);

        scene.text(120, "The alchemy process is based on the game Mastermind. If all else fails, there are places you can find solvers...")

        scene.idle(120);
    });
});