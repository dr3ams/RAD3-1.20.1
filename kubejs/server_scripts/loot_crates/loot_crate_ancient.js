// ==========================================================================
// 1. RECIPE REGISTRY SECTION
// ==========================================================================
// ServerEvents.recipes handles the registration of all crafting table patterns.
ServerEvents.recipes(event => {
    // Register a "Shaped" recipe (items must be in the exact order shown).
    // The first argument is the item to be created (Output).
    // The second array is a 3x3 grid representation of the crafting table.
    event.shaped('kubejs:skeleton_key', [
        ' G ', // Top row: Gold in the middle, empty sides.
        ' G ', // Middle row: Gold in the middle, empty sides.
        ' H '  // Bottom row: Mimic Heart (custom item) in the middle.
    ], {
        // Here we define what the letters in the grid above stand for.
        G: 'minecraft:gold_ingot',
        H: 'kubejs:mimic_heart'
    })
})

// ==========================================================================
// 2. MAIN LOOT CRATE INTERACTION LOGIC
// ==========================================================================
// ItemEvents.rightClicked triggers whenever a player right-clicks while holding an item.
ItemEvents.rightClicked('kubejs:ancient_crate', event => {
    
    // --- STEP 1: SAFETY CHECKS ---
    // Strict check: if the item being used isn't our specific crate, stop the script.
    if (event.item.id != 'kubejs:ancient_crate') return;
    
    // Minecraft triggers right-click for BOTH hands. 'MAIN_HAND' ensures we only run logic once.
    if (event.hand != 'MAIN_HAND') return; 

    // Create "shortcuts" (constants) for parts of the Minecraft engine we need.
    const { player, level, server, item } = event;

    // --- STEP 2: COOLDOWN AND KEY VERIFICATION ---
    // Get the item held in the "Off-hand" (the left hand by default).
    let offhandItem = player.offHandItem; 
    
    // Check if that off-hand item is our custom Skeleton Key.
    let hasKey = offhandItem.id == 'kubejs:skeleton_key'; 
    
    // level.time returns the total ticks the world has existed.
    let currentTime = level.time; 
    
    // Logic for players NOT using a key:
    if (!hasKey && player.persistentData.lastCrateOpen) {
        // Subtract the last time they opened a crate from the current time.
        let timePassed = currentTime - player.persistentData.lastCrateOpen;
        
        // 100 ticks equals 5 real-world seconds.
        if (timePassed < 100) { 
            // Math.ceil rounds up to show a clean number of seconds left.
            let remain = Math.ceil((100 - timePassed) / 20); 
            // Display a yellow warning above the hotbar.
            player.setStatusMessage(`§eWait ${remain}s or use a Skeleton Key!`); 
            return; // Cancel the opening process.
        }
    }

    // --- STEP 3: STATISTICS LOGGING ---
    // We store data on the player's NBT (internal save data) so it persists through death/logout.	
	if (!player.persistentData.stats) player.persistentData.stats = { rituals: 0, chaos: 0, wishes: 0, ancient: 0 };
    player.persistentData.stats.ancient++;
    player.persistentData.totalCratesOpened = (player.persistentData.totalCratesOpened || 0) + 1;

    // --- STEP 4: LUCK MULTIPLIERS ---
    let envLuck = 0;
    // Check the level's weather state.
    if (level.isRaining()) envLuck += 0.05; 
    // Check if the game time is between sunset and sunrise.
    if (level.isNight()) envLuck += 0.05;   

    // Get the amplifier of the 'Luck' potion effect (if present). Amplifier starts at 0 for Level 1.
    let luckLevel = player.getEffect('minecraft:luck') ? player.getEffect('minecraft:luck').amplifier + 1 : 0;
    
    // Calculate the 'roll'. This is a float between 0.0 and roughly 1.25 (with max luck).
    let roll = Utils.random.nextDouble() + (luckLevel * 0.05) + envLuck + (hasKey ? 0.1 : 0);

    // --- STEP 5: THE TRAP (MIMIC) BRANCH ---
    // There is a 15% base chance (roll < 0.15) that the crate is a monster.
    if (roll < 0.15) {
        // Sound: Scary Enderman scream at a low pitch (0.5).
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.enderman.scream', 'hostile', 1.0, 0.5);
        // Visual: Burst of flames at the player's feet.
        level.spawnParticles('minecraft:flame', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 50, 0.1);
        // Mechanic: An explosion that doesn't break blocks (none) or hurt the player directly.
        level.explode(player, player.x, player.y, player.z, 1.0, false, "none");

        // Spawn a Husk entity to represent the Mimic.
        let mimic = level.createEntity('minecraft:husk');
        mimic.x = player.x; mimic.y = player.y; mimic.z = player.z; 
        mimic.customName = "Crate Mimic"; 
        mimic.maxHealth = 40; // Double standard mob health (standard is 20).
        mimic.health = 40; 
        mimic.addTag('is_mimic'); // This tag is checked by mimic_drops.js for rewards.
        // NBT Modification: generic.movement_speed 0.4 makes it significantly faster than a zombie.
        mimic.mergeNbt({Attributes:[{Name:"minecraft:generic.movement_speed", Base:0.4}]});
        mimic.spawn(); 

        player.setStatusMessage("§4THE CRATE WAS A TRAP!");
        // Update cooldown timestamp even if they were trapped.
        if (!hasKey) player.persistentData.lastCrateOpen = currentTime; 
        item.count--; // Remove the crate item used.
        return; // Exit script: no loot is given for traps.
    }

    // --- STEP 6: THE JACKPOT CHAIN ---
    // Independent 10% chance to duplicate the crate.
    if (Utils.random.nextDouble() < 0.10) {
        player.give(Item.of('kubejs:loot_crate', 2)); // Add 2 more crates to inventory.
        // Amethyst chime sound for a magical feel.
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.chime', 'players', 1.0, 1.5);
        player.displayClientMessage(Text.gold("✨ LUCKY STREAK: 2 Free Crates! ✨"), true);
    }

    // --- STEP 7: LOOT POOL DEFINITIONS ---
    // We define three arrays containing the Registry IDs of the items.
    let commonPool = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:copper_ingot', 'minecraft:coal', 'minecraft:lapis_lazuli'];
    let rarePool = ['minecraft:diamond', 'minecraft:emerald', 'minecraft:amethyst_shard', 'minecraft:golden_apple'];
    let legendaryPool = ['minecraft:netherite_scrap', 'minecraft:enchanted_golden_apple', 'minecraft:nether_star', 'minecraft:totem_of_undying'];

    // Check the dimension ID (e.g., "minecraft:the_nether").
    let dim = level.dimension.toString();
    if (dim.includes("the_nether")) {
        // Swap arrays for Nether-themed items.
        commonPool = ['minecraft:blaze_powder', 'minecraft:nether_quartz', 'minecraft:magma_cream'];
        rarePool = ['minecraft:ghast_tear', 'minecraft:ancient_debris', 'minecraft:wither_skeleton_skull'];
        legendaryPool = ['minecraft:netherite_ingot', 'minecraft:music_disc_pigstep', 'minecraft:netherite_upgrade_smithing_template'];
    } 
    else if (dim.includes("the_end")) {
        // Swap arrays for End-themed items.
        commonPool = ['minecraft:ender_pearl', 'minecraft:chorus_fruit'];
        rarePool = ['minecraft:shulker_shell', 'minecraft:dragon_breath', 'minecraft:phantom_membrane'];
        legendaryPool = ['minecraft:netherite_ingot', 'minecraft:shulker_box', 'minecraft:enchanted_golden_apple'];
    }

    // Determine the Rarity Tier based on the 'roll' value.
    let rarity = 'common';
    if (roll > 0.98) rarity = 'legendary'; // Highest tier.
    else if (roll > 0.85) rarity = 'rare';      // Second tier.

    let selectedId = '';
    let amount = 1;

    // Pick a random index from the chosen pool using Utils.random.nextInt.
    if (rarity === 'legendary') {
        selectedId = legendaryPool[Utils.random.nextInt(0, legendaryPool.length)];
        amount = 1; 
    } else if (rarity === 'rare') {
        selectedId = rarePool[Utils.random.nextInt(0, rarePool.length)];
        amount = Utils.random.nextInt(1, 3); // 1 to 2 items.
    } else {
        selectedId = commonPool[Utils.random.nextInt(0, commonPool.length)];
        amount = Utils.random.nextInt(2, 6); // 2 to 5 items.
    }

    // --- STEP 8: FEEDBACK (VISUALS & SOUNDS) ---
    if (rarity === 'legendary') {
        // Global server broadcast for legendary items.
        server.tell([Text.green(player.name), ' found ', Text.gold('LEGENDARY LOOT'), ' in an Ancient Crate!']);
        // Create the Loot Beam (10 layers of vertical particles).
        for (let i = 0; i < 10; i++) {
            level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + (i * 0.5), player.z, 0.2, 0.1, 0.2, 10, 0.1);
            level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + (i * 0.5), player.z, 0.1, 0.1, 0.1, 5, 0.05);
        }
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0);
    } else if (rarity === 'rare') {
        // Green sparkles for rare items.
        level.spawnParticles('minecraft:happy_villager', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 20, 0.1);
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.player.levelup', 'players', 0.5, 1.2);
    } else {
        // Simple item sound for common loot.
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.pickup', 'players', 1.0, 1.0);
    }

    // --- STEP 9: REWARD DELIVERY ---
    // Physically add the item to the player's inventory.
    player.give(Item.of(selectedId, amount));
    // Display the item name found in the Status Bar (split(':') removes 'minecraft:').
    player.setStatusMessage(`§aFound ${amount}x ${selectedId.split(':')[1]}!`);
    
    // Final check for the Skeleton Key to handle consumption or cooldown start.
    if (!hasKey) {
        player.persistentData.lastCrateOpen = currentTime; 
    } else {
        offhandItem.count--; // Reduce Skeleton Key count by 1.
        player.displayClientMessage(Text.aqua("Skeleton Key used! Cooldown bypassed."), true);
    }
    
    // Reduce the count of the Loot Crate stack in the main hand.
    item.count--;
})