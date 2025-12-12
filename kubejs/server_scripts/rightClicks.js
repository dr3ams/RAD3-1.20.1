ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:scroll_exp') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/experience add ${event.player.username} 20 points`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }

//END	
})

ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:spawnercore') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/experience add ${event.player.username} 25 points`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
})

ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:scroll_exp_great') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/experience add ${event.player.username} 200 points`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
})


ItemEvents.rightClicked( event => {
	
	const p = event.player
	
    if(event.item=='kubejs:quest_crate') {

		// Math.random() generates a number R such that 0.0 <= R < 1.0
		let roll = Math.random(); 

		// Total Chance: 65% (Range: 0.000 to < 0.65)
		if (roll < 0.65) {
			p.give('minecraft:paper');
		} 
		// Total Chance: 20.0% (Range: 0.65 to < 0.85)
		else if (roll < 0.85) {
			p.give('minecraft:copper_ingot');
		} 
		// Total Chance: 9.0% (Range: 0.85 to < 0.94)
		else if (roll < 0.94) {
			p.give('minecraft:iron_ingot');
		} 
		// Total Chance: 5.0% (Range: 0.94 to < 0.99)
		else if (roll < 0.99) {
			p.give('minecraft:gold_ingot');
		} 
		// Total Chance: 1.0% (Range: 0.99 to < 1.000)
		else {
			p.give('minecraft:diamond');
		}
        
        if(event.item) {
            event.item.count--;
        }

        event.cancel();
    }
})

