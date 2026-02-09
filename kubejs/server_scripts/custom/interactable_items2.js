// Define the helper ONCE at the top of the file to avoid redeclaration errors
const sendFortuneMessage = (player, msg) => player.setStatusMessage(Text.aqua(msg));

ItemEvents.rightClicked(event => {
    const { item, player, level } = event;

    // --- FORTUNE COOKIE ---
    if (item.id == 'kubejs:fortune_cookie') {
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.generic.eat', 'players', 1.0, 1.2);
        
        let roll = Math.floor(Math.random() * 12);

        switch (roll) {
            case 0: // THE JACKPOT
                player.give('minecraft:diamond');
                sendFortuneMessage(player, "The ruins yield their finest spark.");
                level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1, player.z, 30, 0.5, 0.5, 0.5, 0.1);
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.player.levelup', 'players', 1.0, 1.0);
                break;
            case 1: // SPEED BOOST
                player.potionEffects.add('minecraft:speed', 1200, 1);
                sendFortuneMessage(player, "Your steps become as light as air.");
                level.spawnParticles('minecraft:cloud', true, player.x, player.y, player.z, 20, 0.3, 0.1, 0.3, 0.05);
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.horse.gallop', 'players', 0.8, 1.5);
                break;
            case 2: // THE CURSE (Bad Omen)
                player.potionEffects.add('minecraft:bad_omen', 6000, 0);
                sendFortuneMessage(player, "Your hunger for wealth draws eyes from the dark.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.heartbeat', 'players', 1.0, 0.5);
                break;
            case 3: // NIGHT VISION
                player.potionEffects.add('minecraft:night_vision', 2400, 0);
                sendFortuneMessage(player, "Shadows retreat before your gaze.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.beacon.activate', 'players', 0.5, 2.0);
                break;
            case 4: // RESISTANCE
                player.potionEffects.add('minecraft:resistance', 1200, 0);
                sendFortuneMessage(player, "You feel remarkably... solid.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.anvil.land', 'players', 0.3, 1.8);
                break;
            case 5: // POISONED COOKIE
                player.potionEffects.add('minecraft:hunger', 600, 1);
                player.potionEffects.add('minecraft:nausea', 200, 0);
                sendFortuneMessage(player, "That cookie was past its expiration date.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.zombie.converted_to_drowned', 'players', 0.5, 0.8);
                break;
            case 6: // MAGNETIC SCRAP
                player.give(Item.of('minecraft:iron_ingot', 3));
                sendFortuneMessage(player, "Scraps of the old world cling to you.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.shield.block', 'players', 0.6, 1.2);
                break;
            case 7: // HEAVY BURDEN (Slowness)
                player.potionEffects.add('minecraft:slowness', 600, 2);
                sendFortuneMessage(player, "The gravity of your sins pulls hard.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.anvil.use', 'players', 0.5, 0.5);
                break;
            case 8: // BEACON (Glowing)
                player.potionEffects.add('minecraft:glowing', 1200, 0);
                sendFortuneMessage(player, "You are a beacon in the wasteland.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.chime', 'players', 1.0, 1.0);
                break;
            case 9: // VOLATILE (Explosion)
                level.explode(player, player.x, player.y, player.z, 0, false, "none");
                sendFortuneMessage(player, "A volatile recipe.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.generic.explode', 'players', 0.8, 1.5);
                break;
            case 10: // MINER'S HASTE
                player.potionEffects.add('minecraft:haste', 2400, 1);
                sendFortuneMessage(player, "The stone yearns to be broken.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.armor.equip_gold', 'players', 1.0, 1.2);
                break;
            case 11: // FEEBLE STRENGTH
                player.potionEffects.add('minecraft:weakness', 1200, 0);
                sendFortuneMessage(player, "Your strength fades like a dying ember.");
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.skeleton.ambient', 'players', 0.5, 0.8);
                break;
        }

        item.count--;
        event.cancel();
    }
});

ItemEvents.rightClicked(event => {
    const { item, player, level } = event;

    // --- BERSERKER'S DRAUGHT ---
    if (item.id == 'kubejs:berserk_draught') {
        player.potionEffects.add('minecraft:speed', 400, 2);
        player.potionEffects.add('minecraft:strength', 400, 1);
        player.potionEffects.add('minecraft:hunger', 600, 1);
        
        player.setStatusMessage(Text.aqua("Berserker's Draught: You feel a surge of primal power."));
        player.swing();
        level.spawnParticles('minecraft:flame', true, player.x, player.y + 1, player.z, 0.3, 0.3, 0.3, 8, 0.05);
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.player.attack.knockback', 'players', 1.0, 0.5);
        
        item.count--;
        event.cancel();
    }

// --- BOTTLED ICE (Area Freeze + Entity Slowness) ---
    if (item.id == 'kubejs:bottled_ice') {
        let ray = player.rayTrace(5);
        let targetBlock = ray.block;
        let targetEntity = ray.entity;

        // SCENARIO A: Hitting an Entity
        if (targetEntity && targetEntity.living) {
            // Apply Slowness IV 
            targetEntity.potionEffects.add('minecraft:slowness', 40, 3);
            
            player.setStatusMessage(Text.aqua("Bottled Ice: The creature is flash-frozen!"));
            player.swing();
            
            // Visuals at the entity's position
            level.spawnParticles('minecraft:snowflake', true, targetEntity.x, targetEntity.y + 1, targetEntity.z, 0.5, 0.5, 0.5, 20, 0.05);
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.glass.break', 'players', 1.0, 1.2);
            
            item.count--;
            event.cancel();
        }
        // SCENARIO B: Hitting Liquid (Water or Lava)
        else if (targetBlock && (targetBlock.id == 'minecraft:water' || targetBlock.id == 'minecraft:lava')) {
            let radius = 2; // 5x5 area
            
            for (let x = -radius; x <= radius; x++) {
                for (let z = -radius; z <= radius; z++) {
                    let currentBlock = targetBlock.offset(x, 0, z);
                    if (currentBlock.id == 'minecraft:water') {
                        currentBlock.set('minecraft:ice');
                    } else if (currentBlock.id == 'minecraft:lava') {
                        currentBlock.set('minecraft:obsidian');
                    }
                }
            }
            
            player.setStatusMessage(Text.aqua("Bottled Ice: A massive frost surge spreads!"));
            player.swing();
            
            level.spawnParticles('minecraft:snowflake', true, targetBlock.x, targetBlock.y + 0.5, targetBlock.z, 2.0, 0.2, 2.0, 45, 0.05);
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.glass.break', 'players', 1.0, 1.2);
            
            item.count--;
            event.cancel();
        }
    }
	
///
});

ItemEvents.rightClicked(event => {
    const { item, player, level } = event;

    // --- VOID CORE (30 Second Tunneling) ---
    if (item.id == 'kubejs:void_core') {
        // Apply Glowing for 30 seconds (600 ticks) as our timer
        player.potionEffects.add('minecraft:glowing', 600, 0, false, false);
        
        player.setStatusMessage(Text.aqua("Void Core: Reality begins to crumble around you..."));
        player.swing();
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.heartbeat', 'players', 1.0, 0.5);
        
        item.count--;
        event.cancel();
    }
});

// The "Tick" event that actually destroys the blocks
PlayerEvents.tick(event => {
    const { player, level } = event;

    // Only run this if the player has the Glowing effect (our timer)
    // AND we only check every 2 ticks to save performance
    if (player.potionEffects.isActive('minecraft:glowing') && level.time % 2 == 0) {
        let radius = 1; // 1 block in each direction = 3x3 area
        
        for (let x = -radius; x <= radius; x++) {
            for (let y = 0; y <= 2; y++) { // Destroys 3 blocks high so player can walk
                for (let z = -radius; z <= radius; z++) {
                    let block = player.block.offset(x, y, z);
                    
                    // Safety check: Don't destroy Bedrock or Air
                    if (block.id != 'minecraft:air' && block.id != 'minecraft:bedrock' && !block.hasTag('minecraft:wither_immune')) {
                        block.set('minecraft:air');
                        
                        // Optional: Spawn particles to show the "void" eating blocks
                        if (Math.random() < 0.1) {
                            level.spawnParticles('minecraft:ash', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.2, 0.2, 0.2, 1, 0.01);
                        }
                    }
                }
            }
        }
    }
});
