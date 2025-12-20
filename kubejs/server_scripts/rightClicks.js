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
	if(event.item=='kubejs:detonator') {
        event.server.runCommandSilent(`/summon minecraft:tnt ${event.entity.x.toString()} ${event.entity.y.toString()} ${event.entity.z.toString()} {Fuse:40}`);
        if(event.item) {
            event.item.count--;
        }
        event.cancel();
    }
})


ItemEvents.rightClicked( event => {
		
	const p = event.player

	if(event.item=='kubejs:book_ancient') {

		// Math.random() generates a number R such that 0.0 <= R < 1.0
		let roll = Math.random(); 

		// Total Chance: 70% (Range: 0.000 to < 0.65)
		if (roll < 0.70) {
			p.give('minecraft:paper');
		} 
		// Total Chance: 20% (Range: 0.65 to < 0.85)
		else if (roll < 0.85) {
			p.give('minecraft:string');
		}   
		// Total Chance: 10% (Range: 0.99 to < 1.000)
		else {
			p.give('minecraft:leather');
		}
        
        if(event.item) {
            event.item.count--;
        }

        event.cancel();
    }	
	//
	
	if(event.item=='kubejs:book_old') {
		
		p.give('minecraft:paper');
        
        if(event.item) {
            event.item.count--;
        }
		
        event.cancel();
    }
		//
	if(event.item=='kubejs:canned_food') {

		// Math.random() generates a number R such that 0.0 <= R < 1.0
		let roll = Math.random(); 

		// Total Chance: 65% (Range: 0.000 to < 0.65)
		if (roll < 0.65) {
			p.give('minecraft:cooked_cod');
		} 
		// Total Chance: 20.0% (Range: 0.65 to < 0.85)
		else if (roll < 0.85) {
			p.give('minecraft:cooked_porkchop');
		} 
		// Total Chance: 9.0% (Range: 0.85 to < 0.94)
		else if (roll < 0.94) {
			p.give('minecraft:rotten_flesh');
		} 
		// Total Chance: 5.0% (Range: 0.94 to < 0.99)
		else if (roll < 0.99) {
			p.give('minecraft:iron_nugget');
		} 
		// Total Chance: 1.0% (Range: 0.99 to < 1.000)
		else {
			p.give('minecraft:iron_ingot');
		}
        
        if(event.item) {
            event.item.count--;
        }

        event.cancel();
    }
})

ItemEvents.rightClicked( event => {
    const { player, item } = event;

	if(event.item=='kubejs:lost_bag') {
    // We'll calculate the roll using KubeJS Utils
    // Utils.random.nextDouble() returns a value between 0.0 and 1.0
    let roll = Utils.random.nextDouble();

    // Helper variable to hold our result
    let lootItem = '';
    let min = 1;
    let max = 1;

    // --- LOOT LOGIC ---
    if (roll < 0.30) {
        lootItem = 'minecraft:paper'; min = 1; max = 3;
    } 
    else if (roll < 0.50) {
        lootItem = 'minecraft:book'; min = 1; max = 2;
    }
    else if (roll < 0.65) {
        lootItem = 'minecraft:feather'; min = 1; max = 4;
    }
    else if (roll < 0.80) {
        lootItem = 'minecraft:coal'; min = 1; max = 6;
    }
    else if (roll < 0.89) {
        lootItem = 'minecraft:lapis_lazuli'; min = 1; max = 3;
    }
    else if (roll < 0.94) {
        lootItem = 'minecraft:gunpowder'; min = 1; max = 2;
    }
    else if (roll < 0.98) {
        lootItem = 'minecraft:gold_ingot'; min = 1; max = 2;
    }
    else if (roll < 0.99) {
        lootItem = 'spelunkery:diamond_shard'; min = 1; max = 1;
    }
    else {
        lootItem = 'minecraft:emerald'; min = 1; max = 1;
    }

    // --- GIVE ITEM ---
    // Calculate final amount using KubeJS native random
    let finalAmount = min === max ? min : Utils.random.nextInt(min, max + 1);
    
    player.give(Item.of(lootItem, finalAmount));

    // Consumes the item used to click
    item.count--;
    
    // Play sound and show a quick message
    player.setStatusMessage(`You found ${finalAmount}x ${lootItem.split(':')[1]}!`);
	}
})

