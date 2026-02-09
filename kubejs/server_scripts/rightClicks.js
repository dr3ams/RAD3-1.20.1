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

ItemEvents.rightClicked(event => {
    const { item, player, level } = event;

    if (item == 'kubejs:detonator') {
        // This spawns the TNT in the EXACT level/dimension the player is in
        //let tnt = level.spawnLightning(player.x, player.y, player.z, true); // (Placeholder logic check)
        
        // Correct KubeJS Entity Spawning:
        let tntEntity = level.createEntity('minecraft:tnt');
        tntEntity.x = player.x;
        tntEntity.y = player.y;
        tntEntity.z = player.z;
        tntEntity.mergeNbt({Fuse: 40});
        tntEntity.spawn();

        // Feedbacks
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.tnt.primed', 'players', 1.0, 1.0);
        
        item.count--;
        event.cancel();
    }
});


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
    const { player, item, server } = event;

	if(item.id=='kubejs:lost_bag') {
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
	// ORE BAG
ItemEvents.rightClicked( event => {
    const { player, item, server, level } = event;	
	
	if (item.id == 'kubejs:ore_bag') {
    let roll = Utils.random.nextDouble();
    let lootItem = '';
    let min = 1;
    let max = 1;

    // Weight distribution for the new ores
    if (roll < 0.25) {
        lootItem = 'minecraft:coal_ore'; min = 2; max = 5;
    } 
    else if (roll < 0.45) {
        lootItem = 'minecraft:iron_ore'; min = 1; max = 3;
    } 
    else if (roll < 0.60) {
        lootItem = 'minecraft:copper_ore'; min = 2; max = 4;
    } 
    else if (roll < 0.70) {
        lootItem = 'minecraft:redstone_ore'; min = 1; max = 3;
    } 
    else if (roll < 0.80) {
        lootItem = 'minecraft:lapis_ore'; min = 1; max = 2;
    } 
    else if (roll < 0.87) {
        lootItem = 'embers:silver_ore'; min = 1; max = 2;
    } 
    else if (roll < 0.93) {
        lootItem = 'embers:lead_ore'; min = 1; max = 2;
    } 
    else if (roll < 0.97) {
        lootItem = 'minecraft:gold_ore'; min = 1; max = 2;
    } 
    else if (roll < 0.99) {
        lootItem = 'minecraft:diamond_ore'; min = 1; max = 1;
    } 
    else {
        lootItem = 'minecraft:emerald_ore'; min = 1; max = 1;
    }

    let finalAmount = min === max ? min : Utils.random.nextInt(min, max + 1);
    
    player.give(Item.of(lootItem, finalAmount));
    level.spawnParticles('minecraft:large_smoke', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05);
    
    // Formats the message to be more readable (e.g., "iron_ore" becomes "iron ore")
    let itemName = lootItem.split(':')[1].replace('_', ' ');
    player.setStatusMessage(`You found ${finalAmount}x ${itemName}!`);
	
	item.count--;
}	
///	
})

ItemEvents.rightClicked(event => {
    const { player, item, level } = event;

    if (item.id == 'kubejs:mage_bag') {
        let roll = Utils.random.nextDouble();

        let lootItem = '';
        let min = 1;
        let max = 1;

        if (roll < 0.25) { // 25%
            lootItem = 'minecraft:sculk_vein'; min = 2; max = 6;
        } 
        else if (roll < 0.45) { // 20%
            lootItem = 'apotheosis:gem_dust'; min = 1; max = 3;
        }
        else if (roll < 0.60) { // 15%
            lootItem = 'kubejs:gem_shard'; min = 2; max = 4;
        }
        else if (roll < 0.72) { // 12%
            lootItem = 'minecraft:ender_pearl'; min = 1; max = 2;
        }
        else if (roll < 0.82) { // 10%
            lootItem = 'apotheosis:uncommon_material'; min = 1; max = 2;
        }
        else if (roll < 0.90) { // 8%
            lootItem = 'hmag:evil_crystal_fragment'; min = 1; max = 1;
        }
        else if (roll < 0.95) { // 5%
            lootItem = 'fantasy_armor:moon_crystal'; min = 1; max = 1;
        }
        else if (roll < 0.98) { // 3%
            lootItem = 'apotheosis:warden_tendril'; min = 1; max = 1;
        }
        else { // 2% Jackpot
            lootItem = 'minecraft:echo_shard'; min = 1; max = 1;
        }

        // --- GIVE ITEM ---
        let finalAmount = min === max ? min : Utils.random.nextInt(min, max + 1);
        let lootStack = Item.of(lootItem, finalAmount);
        player.give(lootStack);

		let itemName = lootItem.split(':')[1].replace('_', ' ');
		player.setStatusMessage(Text.red(`You found ${finalAmount}x ${itemName}!`));
        
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.bundle.drop_contents', 'players', 1.0, 0.8);
        level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 12, 0.1);

        item.count--;
        event.cancel();
    }
});

ItemEvents.rightClicked(event => {
const { player, item, level } = event;

    // --- REAGENT BOX LOGIC ---
    if (item.id == 'kubejs:reagent_box') {
        let roll = Utils.random.nextDouble();
        let lootItem = '';
        let min = 1;
        let max = 1;

        // Shared Magical Reagents Pool
        const magicReagents = [
            'ars_nouveau:water_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:earth_essence', 
			'ars_nouveau:magebloom_fiber', 'ars_nouveau:source_gem', 'bloodmagic:reagentholding', 
            'bloodmagic:reagentbinding', 'bloodmagic:reagentwater', 'bloodmagic:reagentlava', 
            'bloodmagic:reagentvoid', 'bloodmagic:reagentgrowth', 'bloodmagic:reagentfastminer', 
            'bloodmagic:reagentmagnetism', 'bloodmagic:reagentair'
        ];

        // --- LOOT TABLE CALCULATION ---
        if (roll < 0.25) { // 25% - Common Reagents
            lootItem = magicReagents[Math.floor(Math.random() * magicReagents.length)];
            min = 1; max = 2;
        } 
        else if (roll < 0.45) { // 20%
            lootItem = 'ars_nouveau:air_essence'; min = 1; max = 2;
        }
        else if (roll < 0.60) { // 15%
            lootItem = 'ars_nouveau:abjuration_essence'; min = 1; max = 2;
        }
        else if (roll < 0.72) { // 12%
            lootItem = 'bloodmagic:reagentsight'; min = 1; max = 2;
        }
        else if (roll < 0.82) { // 10%
            lootItem = 'bloodmagic:reagentbloodlight'; min = 1; max = 2;
        }
        else if (roll < 0.90) { // 8%
            lootItem = 'bloodmagic:reagentsuppression'; min = 1; max = 1;
        }
        else if (roll < 0.95) { // 5%
            lootItem = 'bloodmagic:reagentteleposition'; min = 1; max = 1;
        }
        else if (roll < 0.98) { // 3%
            lootItem = 'bloodmagic:tauoil'; min = 1; max = 1;
        }
        else { // 2% Jackpot
            lootItem = 'ars_nouveau:conjuration_essence'; min = 1; max = 1;
        }

        // --- GIVE ITEM & FEEDBACK ---
        let finalAmount = min === max ? min : Utils.random.nextInt(min, max + 1);
        let lootStack = Item.of(lootItem, finalAmount);
        player.give(lootStack);

        // Formats "minecraft:sculk_vein" to "sculk vein" for the message
        let displayID = lootItem.includes(':') ? lootItem.split(':')[1] : lootItem;
        let cleanName = displayID.replace(/_/g, ' ');
        player.setStatusMessage(Text.red(`You found ${finalAmount}x ${cleanName}!`));
        
        // --- VISUALS ---
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.bundle.drop_contents', 'players', 1.0, 0.8);
        level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 12, 0.1);

        item.count--;
        event.cancel();
    }
});

ItemEvents.rightClicked(event => {

    const { player, item, level } = event;
    
	if (item.id == 'kubejs:gemcutters_pouch') {

        const dungeonGems = [
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/midas"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/midas"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:undergarden/decay"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/mageslayer"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_nether/blood_lord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:undergarden/undergarden"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:undergarden/decay"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_end/mageslayer"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/blood_lord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:undergarden/undergarden"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:modded/archmage"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/archmage"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_nether/inferno"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:undergarden/undergarden"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/ars_mana"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/ars_mana"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/lunar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:aether/zanite_alchemist"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:aether/zanite_alchemist"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/ballast"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/guardian"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/combatant"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/brawlers"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/guardian"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/warlord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/lightning"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:curios/reinforced"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/combatant"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:curios/reinforced"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/brawlers"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/warlord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:curios/twisted"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/samurai"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/splendor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/breach"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/tyrannical"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/ballast"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/slipstream"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/lunar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/samurai"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/slipstream"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/splendor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/tyrannical"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:aether/zanite_alchemist"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:crafted/wroughtnaut"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/breach"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/lightning"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/solar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/solar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/heartland"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/earth"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:overworld/royalty"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:overworld/royalty"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:overworld/earth"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_end/endersurge"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"skilltree:ruby_4"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"skilltree:ruby_3"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:curios/twisted"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/endersurge"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/armor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/cataclysm"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/cataclysm"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheotic_additions:modded/armor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"skilltree:jade_3"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"skilltree:jade_2"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheotic_additions:modded/armor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:modded/heartland"}')
        ];

        let lootStack = dungeonGems[Math.floor(Math.random() * dungeonGems.length)];
        player.give(lootStack);

        player.setStatusMessage(Text.aqua("A rare gem has been extracted."));
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.bundle.drop_contents', 'players', 1.0, 1.2);
        level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 12, 0.1);

        item.count--;
        event.cancel();
    }
		
	    if (item.id == 'kubejs:gemcutters_pouch_greater') {

        const greaterGems = [
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:modded/cataclysm"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:aether/zanite_alchemist"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:aether/zanite_alchemist"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:heirloom"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:curios/vitalic"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"skilltree:jade_5"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:heirloom"},gem:"apotheotic_additions:modded/archmage"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:heirloom"},gem:"apotheotic_additions:modded/ars_mana"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:modded/ars_mana"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:modded/archmage"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/samurai"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/solar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/tyrannical"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:modded/armor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/solar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/tyrannical"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:crafted/harbringer"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:curios/reinforced"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:curios/reinforced"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/archmage"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:modded/armor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/warlord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/warlord"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/splendor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/splendor"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:crafted/remnant"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:crafted/frostmaw"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:modded/heartland"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"skilltree:jade_4"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:curios/twisted"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:curios/twisted"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:curios/twisted"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:bumblezone/bee_queen"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/samurai"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/lunar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/brawlers"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/lightning"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/slipstream"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/slipstream"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/lunar"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:curios/reinforced"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheotic_additions:artifact"},gem:"apotheotic_additions:crafted/cornelia"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/breach"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/brawlers"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/ballast"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/ballast"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/brawlers"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/lightning"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/combatant"}'),
            Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/guardian"}')
        ];

        let lootStack = greaterGems[Math.floor(Math.random() * greaterGems.length)];
        player.give(lootStack);
        player.setStatusMessage(Text.lightPurple("An elite gem has been extracted."));
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.break', 'players', 1.0, 0.8);

        item.count--;
        event.cancel();

    }
});

ItemEvents.rightClicked(event => {

    const { player, item, level } = event;
	
	if (event.item == 'kubejs:unidentified_glyph_scroll') {
		let glyphs = [
			"ars_nouveau:glyph_snare", "ars_nouveau:glyph_summon_wolves", "ars_nouveau:glyph_dispel",
			"ars_nouveau:glyph_touch", "ars_nouveau:glyph_pickup", "ars_nouveau:glyph_rotate",
			"ars_nouveau:glyph_ignite", "ars_nouveau:glyph_phantom_block", "ars_nouveau:glyph_cut",
			"ars_nouveau:glyph_leap", "ars_nouveau:glyph_fell", "ars_nouveau:glyph_interact",
			"ars_nouveau:glyph_place_block", "ars_nouveau:glyph_harvest", "ars_nouveau:glyph_freeze",
			"ars_nouveau:glyph_summon_steed", "ars_nouveau:glyph_self", "ars_nouveau:glyph_rune",
			"ars_nouveau:glyph_pull", "ars_nouveau:glyph_delay", "ars_nouveau:glyph_projectile",
			"ars_nouveau:glyph_light", "ars_nouveau:glyph_toss", "ars_nouveau:glyph_evaporate",
			"ars_nouveau:glyph_launch", "ars_nouveau:glyph_harm", "ars_nouveau:glyph_amplify",
			"ars_nouveau:glyph_bounce", "ars_nouveau:glyph_sensitive", "ars_nouveau:glyph_redstone_signal",
			"ars_nouveau:glyph_gust", "ars_nouveau:glyph_break", "ars_nouveau:glyph_craft",
			"ars_nouveau:glyph_underfoot", "toomanyglyphs:glyph_lay_on_hands", "toomanyglyphs:glyph_ray"
		];

		let lootItem = glyphs[Utils.random.nextInt(glyphs.length)];

		player.give(Item.of(lootItem, 1));

		level.spawnParticles('minecraft:enchant', true, player.x, player.y + 1, player.z, 0.5, 1, 0.5, 20, 0.1);
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.sonic_boom', 'players', 0.7, 1.2);
		
		item.count--;

		let displayName = lootItem.split(':')[1].replace('glyph_', '').replace('_', ' ');
		player.setStatusMessage(Text.of(`You deciphered the scroll: `).white().append(Text.of(displayName).lightPurple().italic()));
	}
	
	if (event.item == 'kubejs:unidentified_glyph_scroll_2') {
		let glyphs = [
			"ars_nouveau:glyph_invisibility", "ars_nouveau:glyph_fortune", "ars_nouveau:glyph_name",
			"ars_nouveau:glyph_dampen", "ars_nouveau:glyph_gravity", "ars_nouveau:glyph_conjure_water",
			"ars_nouveau:glyph_smelt", "ars_nouveau:glyph_exchange", "ars_nouveau:glyph_ender_inventory",
			"ars_nouveau:glyph_aoe", "ars_nouveau:glyph_wind_shear", "ars_nouveau:glyph_slowfall",
			"ars_nouveau:glyph_extract", "ars_nouveau:glyph_cold_snap", "ars_nouveau:glyph_grow",
			"ars_elemental:glyph_discharge", "ars_nouveau:glyph_firework", "ars_nouveau:glyph_crush",
			"ars_nouveau:glyph_pierce", "ars_nouveau:glyph_sense_magic", "ars_nouveau:glyph_explosion",
			"ars_nouveau:glyph_flare", "ars_nouveau:glyph_accelerate", "ars_nouveau:glyph_extend_time",
			"ars_nouveau:glyph_decelerate", "ars_nouveau:glyph_duration_down", "ars_nouveau:glyph_heal",
			"ars_nouveau:glyph_infuse", "toomanyglyphs:glyph_chaining", "toomanyglyphs:glyph_amplify_two",
			"ars_elemental:glyph_bubble_shield", "ars_elemental:glyph_poison_spores", "ars_elemental:glyph_charm",
			"ars_elemental:glyph_watery_grave", "ars_elemental:glyph_phantom_grasp", 
			"starbunclemania:glyph_pickup_fluid", "starbunclemania:glyph_place_fluid"
		];

    let lootItem = glyphs[Utils.random.nextInt(glyphs.length)];
    
    player.give(Item.of(lootItem, 1));
    
    level.spawnParticles('minecraft:witch', true, player.x, player.y + 1, player.z, 0.7, 1.2, 0.7, 25, 0.1);
    level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.illusioner.cast_spell', 'players', 0.8, 1.0);
    
    item.count--;

    let displayName = lootItem.split(':')[1].replace('glyph_', '').replace('_', ' ');
    player.setStatusMessage(Text.of(`Deciphered rare scroll: `).gold().append(Text.of(displayName).lightPurple().italic().bold()));
	}
	
	if (event.item == 'kubejs:unidentified_glyph_scroll_3') {
		let glyphs = [
			"ars_nouveau:glyph_split", "ars_nouveau:glyph_blink", "ars_nouveau:glyph_glide",
			"ars_nouveau:glyph_fangs", "ars_nouveau:glyph_intangible", "ars_nouveau:glyph_burst",
			"ars_nouveau:glyph_summon_undead", "ars_nouveau:glyph_summon_decoy", "ars_nouveau:glyph_hex",
			"ars_nouveau:glyph_wither", "ars_nouveau:glyph_lightning", "ars_nouveau:glyph_wall",
			"ars_nouveau:glyph_summon_vex", "ars_nouveau:glyph_orbit", "ars_nouveau:glyph_linger",
			"toomanyglyphs:glyph_amplify_three", "ars_elemental:glyph_life_link"
		];

    let lootItem = glyphs[Utils.random.nextInt(glyphs.length)];
    
    player.give(Item.of(lootItem, 1));
    
    level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1, player.z, 0.8, 1.5, 0.8, 40, 0.15);
    level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.totem.use', 'players', 0.6, 1.4);
    
    item.count--;

    let displayName = lootItem.split(':')[1].replace('glyph_', '').replace('_', ' ');
	player.setStatusMessage(Text.of(`You deciphered a Master Scroll: `).white().append(Text.of(displayName).lightPurple().italic()));
}
});