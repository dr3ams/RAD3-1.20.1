const SECRET_MESSAGES = [
    "§bYour prize is in another castle...§r",
    "§bCoordinates: X: 402, Z: -1152§r",
    "§bProperty of the Global Bee Initiative§r",
    "§bThe detonator was just the beginning.§r",
    "§bSector 7: Underground Bunker Entry 04§r",
    "§bTrust the Glowing bees. They know the way.§r",
    "§bEmergency extraction scheduled for 2025.§r",
    "§bThe battery surge... it changed my DNA.§r",
    "§bSubject 04: If the Jar breaks, do not run.§r",
    "§bLOG: The flare didn't reveal a wall. It was a tooth.§r",
    "§bRemember: The rust on the key is alive.§r",
    "§bDATA: Despawn timer bypass failed. Protocol 9 engaged.§r"
];

ItemEvents.rightClicked(event => {
    const { player, item, level, server } = event;

    //  UNSTABLE BATTERY: Speed surge with a Hunger penalty
    if (item.id == 'kubejs:unstable_battery') {
        player.potionEffects.add('speed', 600, 2); // 30 seconds
        player.potionEffects.add('haste', 600, 2);
        player.potionEffects.add('hunger', 600, 2); // Penalty
		player.swing()
		level.spawnParticles('minecraft:glow', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05)
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.beacon.activate', 'players', 1.0, 1.0);
        item.count--;
    }

    // EMERGENCY FLARE: Reveal nearby mobs
    if (item.id == 'kubejs:emergency_flare') {
        let targets = level.getEntities().filter(e => e.living && e.distanceToEntity(player) < 20 && e.uuid != player.uuid);
        targets.forEach(entity => {
            entity.potionEffects.add('glowing', 1200, 0); // 60 seconds
        });
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.firework_rocket.launch', 'players', 1.0, 1.0);
		level.spawnParticles('minecraft:flame', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05)
		player.swing()
        item.count--;
    }

    // JAR OF DISTRACTION: The Bee Mechanic
    if (item.id == 'kubejs:bee_jar') {
        for (let i = 0; i < 3; i++) {
            let bee = level.createEntity('minecraft:bee');
            bee.x = player.x;
            bee.y = player.y + 1;
            bee.z = player.z;
			bee.addTag('guardian_bee');
            bee.spawn();
			
            // Using your Glowing timer logic: 15 seconds (300 ticks)
            bee.potionEffects.add('glowing', 300, 0);
        }
		player.swing()
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.glass.break', 'players', 1.0, 1.0);
        item.count--;
    }

	// ENCODED DATA SLATE: Random chance for loot/XP or flavor text
    if (item.id == 'kubejs:data_slate') {
        item.count--;
        let slateChance = Math.random();

        if (slateChance < 0.3) {
            player.setStatusMessage(Text.red("Decryption Failed: Data Corrupted"));
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.iron_trapdoor.close', 'players', 1.0, 2.0);
        } else if (slateChance < 0.9) {
            player.giveExperiencePoints(50);
            player.setStatusMessage(Text.aqua("Decryption Success: Experience Extracted"));
			level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.experience_orb.pickup', 'players', 1.0, 1.0);
        } else {
            // Pick random message
            let randomMsg = SECRET_MESSAGES[Math.floor(Math.random() * SECRET_MESSAGES.length)];
            
            // Create the official-looking paper
            let customPaper = Item.of('minecraft:paper')
                .withName(Text.of(randomMsg).italic(false))
                .withLore([Text.of("§7[Decrypted Data Segment]").italic(true)]);
            
			player.swing()
            player.give(customPaper);
            player.setStatusMessage(Text.green("Decryption Success: Secure Coordinates Found"));
			level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.enchantment_table.use', 'players', 1.0, 1.0);
        }
    }
	// SENTRY REMOTE
    if (item.id == 'kubejs:sentry_remote') {
        player.potionEffects.add('glowing', 200, 0); // 10 sec timer
        let hostiles = level.getEntities().filter(e => e.monster && e.distanceToEntity(player) < 10);
        hostiles.forEach(m => {
            m.potionEffects.add('slowness', 200, 10);
        });
		level.spawnParticles('minecraft:large_smoke', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05)
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.sonic_boom', 'players', 1.0, 1.0);
        item.count--;
    }

// --- MAGNETIC GRAPPLE (With Particle Line) ---
    if (item.id == 'kubejs:magnetic_grapple') {
        let hit = player.rayTrace(20);
        if (hit.block) {
            let target = hit.block;
            let dx = target.x - player.x;
            let dy = target.y - player.y;
            let dz = target.z - player.z;
            let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance > 1.0) {
                // 1. Physics
				player.swing()
                player.setMotion(dx / distance * 1.5, (dy / distance * 1.5) + 0.5, dz / distance * 1.5);
                player.hurtMarked = true; 
                player.fallDistance = 0;

                // 2. Draw the "Grapple Line" using Particles
                // We create a particle every 0.5 blocks between player and target
                for (let i = 0; i < distance; i += 0.5) {
                    let pX = player.x + (dx * (i / distance));
                    let pY = (player.y + 1) + (dy * (i / distance)); // Start from player eye level
                    let pZ = player.z + (dz * (i / distance));
                    
                    // 'crit' or 'electric_spark' looks like a high-tension cable
                    level.spawnParticles('minecraft:crit', true, pX, pY, pZ, 0, 0, 0, 1, 0);
                }
				
				level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.fishing_bobber.throw', 'players', 1.0, 1.0);
				// Increase damage
                let newDamage = item.damageValue + 1;
                
                // Check if the item should break
                if (newDamage >= item.maxDamage) {
                    item.count--; // Remove the item
					level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.break', 'players', 1.0, 1.0);
                    player.setStatusMessage(Text.red("Grapple cable snapped!"));
                } else {
                    item.damageValue = newDamage;
                }
            }
            event.cancel();
        } else {
            player.setStatusMessage(Text.red("Out of range! (Max 20 blocks)"));
        }
    }
	
    // THERMAL PASTE
    if (item.id == 'kubejs:thermal_paste') {
        let block = player.rayTrace(4).block;
        if (block && (block.id.contains('iron_bars') || block.id.contains('iron_trapdoor'))) {
            block.set('minecraft:air');
			player.swing()
            level.spawnParticles('minecraft:flame', true, block.x, block.y, block.z, 0.5, 0.5, 0.5, 10, 0.1);
			level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.lava.extinguish', 'players', 1.0, 1.0);
            item.count--;
        }
    }
	
	// RUSTY KEY
    if (item.id == 'kubejs:rusty_key') {
        let block = player.rayTrace(4).block;
        if (block && (block.id.contains('iron_door'))) {
            block.set('minecraft:air');
        block.set('minecraft:air'); // "Breaks" the door/lock
		player.swing()
		level.spawnParticles('minecraft:crit', true, block.x, block.y, block.z, 0.5, 0.5, 0.5, 10, 0.1);
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.iron_door.open', 'players', 1.0, 1.0);
        item.count--;
        event.cancel();
		}
    }	

if (item.id == 'kubejs:echo_locator') {
        let found = false;
        let range = 20;
        let px = player.x;
        let py = player.y;
        let pz = player.z;

        // 1. Scan and store only the COORDINATES
        let targets = [];
        for (let x = -range; x <= range; x++) {
            for (let y = -8; y <= 8; y++) {
                for (let z = -range; z <= range; z++) {
                    let block = level.getBlock(Math.floor(px + x), Math.floor(py + y), Math.floor(pz + z));
                    if (block.id.contains('chest') || block.id.contains('barrel') || block.id.contains('shulker_box')) {
                        targets.push({
                            x: block.x + 0.5,
                            y: block.y + 0.5,
                            z: block.z + 0.5
                        });
                    }
                }
            }
        }

        if (targets.length > 0) {
            found = true;
            targets.forEach(target => {
				
				player.swing()
				
                // Calculate distance for the timing
                let dx = target.x - px;
                let dy = target.y - (py + 1);
                let dz = target.z - pz;
                let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

				// WAVE SPEED: Lower = Faster. 1.5 is a nice 'cinematic' speed.
                let speedMultiplier = 8;

                // --- THE HIT (Visible through walls) ---
                server.scheduleInTicks(Math.floor(distance * speedMultiplier), (callback) => {
                    // Sonic Boom is large and visible through blocks.
                    level.spawnParticles('minecraft:sonic_boom', true, target.x, target.y, target.z, 10, 0, 2, 0, 0);
					level.spawnParticles('minecraft:flash', true, target.x, target.y, target.z, 1, 0, 0, 0, 0);
                    // sound
					level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.chime', 'players', 1.5, 1.1);
                });

				// --- THE TRAIL (Smoother spacing) ---
                // i += 0.5 makes it much denser/smoother
                for (let i = 0; i < distance; i += 0.5) {
                    let trailDelay = Math.floor(i * speedMultiplier);
                    let ratio = i / distance;
                    let lx = px + (dx * ratio);
                    let ly = (py + 1) + (dy * ratio);
                    let lz = pz + (dz * ratio);

                    server.scheduleInTicks(trailDelay, (callback) => {
                        // Using 'soul_fire_flame' for a bright blue high-vis trail
						// ARGUMENT ORDER: (ID, override, x, y, z, count, dx, dy, dz, speed)
                        level.spawnParticles('minecraft:soul_fire_flame', true, lx, ly, lz, 50, 0, 0, 0, 0);
                    });
                }
            });
        }

        // 3. Feedback and Durability Logic
        if (found) {
			level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.beacon.activate', 'players', 1.0, 1.0);
            player.setStatusMessage(Text.of("§b[Scanner]: §rInitializing sonar sweep..."));
            
            let newDamage = item.damageValue + 1;
            if (newDamage >= item.maxDamage) {
                item.count--;
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.break', 'players', 1.0, 1.0);
            } else {
                item.damageValue = newDamage;
            }
        } else {
			level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.note_block.didgeridoo', 'players', 1.0, 0.8);
            player.setStatusMessage(Text.gray("Scanning... No signals found."));
        }
        event.cancel();
    }

    // --- KINETIC DAMPENER  ---
	if (item.id == 'kubejs:kinetic_dampener') {
        let currentTime = level.time;
        // Use persistentData for reliable storage
        let lastUsed = player.persistentData.lastDampenerTime || 0;
        let cooldownTicks = 20; // 1 Seconds

        if (currentTime - lastUsed < cooldownTicks) {
            let remaining = Math.ceil((cooldownTicks - (currentTime - lastUsed)) / 20);
            player.setStatusMessage(Text.of(`§c[System]: §7Recharging... (${remaining}s)`));
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.iron_trapdoor.close', 'players', 0.5, 2.0);
            event.cancel();
            return; // Stop the script here
        }

        // Success: Store the time in persistentData
        player.persistentData.lastDampenerTime = currentTime;
        
        // --- ACTIVATION LOGIC ---
        player.motionX = 0;
        player.motionY = 0;
        player.motionZ = 0;
        player.fallDistance = 0;

		player.swing();
        player.potionEffects.add('minecraft:levitation', 2, 255, false, false);
        player.potionEffects.add('minecraft:slow_falling', 20, 0, false, false);
        
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.conduit.deactivate', 'players', 1.0, 1.5);
        player.setStatusMessage(Text.of("§b[System]: §fBuffer Engaged"));

        // Visual Feedback Loop
        for (let t = 0; t <= 20; t += 2) {
            server.scheduleInTicks(t, callback => {
                level.spawnParticles('minecraft:snowflake', true, player.x, player.y + 0.1, player.z, 3, 0.2, 0, 0.2, 0.05);
                if (t % 6 == 0) {
                    level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.beacon.ambient', 'players', 0.3, 2.0);
                }
            });
        }

        let newDamage = item.damageValue + 1;
        if (newDamage >= item.maxDamage) {
            item.count--; // Break the item
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.break', 'players', 1.0, 1.0);
        } else {
            item.setDamageValue(newDamage); // Use setter for reliability
        }
		
        event.cancel();
    }


    // --- SCAVENGER'S MAGNET ---
    if (item.id == 'kubejs:scavenger_magnet') {
        let items = level.getEntities().filter(e => e.type == 'minecraft:item' && e.distanceToEntity(player) < 12);
        if (items.length > 0) {
            items.forEach(ent => {
                // Direct property assignment for entities as well
                ent.motionX = (player.x - ent.x) * 0.2;
                ent.motionY = ((player.y + 1) - ent.y) * 0.2;
                ent.motionZ = (player.z - ent.z) * 0.2;
            });
			player.swing();
            level.spawnParticles('minecraft:enchant', true, player.x, player.y + 1, player.z, 20, 0.5, 0.5, 0.5, 0.1);
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.armor.equip_chain', 'players', 0.5, 1.5);
            item.damageValue++;
        }
        event.cancel();
    }

// --- TRANSLOCATION COIL  ---
    if (item.id == 'kubejs:translocation_coil') {
        let currentTime = level.time;
        let lastUsed = player.persistentData.lastCoilTime || 0;
        let cooldownTicks = 20; 

        if (currentTime - lastUsed < cooldownTicks) {
            player.setStatusMessage(Text.of("§c[System]: §7Coil Overheated..."));
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.iron_trapdoor.close', 'players', 0.5, 2.0);
            event.cancel();
            return;
        }

        let ray = player.rayTrace(30);
        let hX = ray.hitX;
        let hY = ray.hitY;
        let hZ = ray.hitZ;

        // Find targets using raw coordinate math to avoid obfuscation errors
        let target = level.getEntities().filter(e => {
            if (!e.living || e.uuid == player.uuid) return false;
            
            // Raw distance math: sqrt(dx^2 + dy^2 + dz^2)
            let dx = e.x - hX;
            let dy = e.y - hY;
            let dz = e.z - hZ;
            let distToRay = Math.sqrt(dx*dx + dy*dy + dz*dz);
            
            // Check if entity is within 25 blocks of player AND 2.5 blocks of ray hit
            return e.distanceToEntity(player) < 30 && distToRay < 2.5;
        })[0];

        if (target) {
            player.persistentData.lastCoilTime = currentTime;
            
            let pX = player.x; let pY = player.y; let pZ = player.z;
            let pYaw = player.yaw; let pPitch = player.pitch;
			
			player.swing();
            level.spawnParticles('minecraft:reverse_portal', true, pX, pY + 1, pZ, 40, 0.2, 0.2, 0.2, 0.1);
            level.spawnParticles('minecraft:reverse_portal', true, target.x, target.y + 1, target.z, 40, 0.2, 0.2, 0.2, 0.1);

            player.teleportTo(level.dimension, target.x, target.y, target.z, pYaw, pPitch);
            target.teleportTo(level.dimension, pX, pY, pZ, target.yaw, target.pitch);

            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.enderman.teleport', 'players', 1.0, 1.2);

			let newDamage = item.damageValue + 5;
			if (newDamage >= item.maxDamage) {
				item.count--; // Break the item
				level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.break', 'players', 1.0, 1.0);
			} else {
				item.setDamageValue(newDamage); // Use setter for reliability
			}

        } else {
            player.setStatusMessage(Text.red("No target locked or too far"));
        }
		

		
        event.cancel();
    }
});

// Logic for the Bee Despawn
LevelEvents.tick(event => {
    if (event.server.tickCount % 20 != 0) return;

    let activeOwners = new Set(); // Track players who have active bees

    event.level.getEntities().filter(e => e.tags.contains('guardian_bee')).forEach(bee => {
        
        // 1. LIFESPAN CHECK
        if (!bee.potionEffects.isActive('minecraft:glowing')) {
            bee.discard();
            return;
        }

        // 2. LEASH & PLAYER TRACKING
        let ownerTag = bee.tags.find(t => t.startsWith('owner_'));
        if (ownerTag) {
            let uuid = ownerTag.split('_')[1];
            let owner = event.server.getPlayer(uuid);
            
            if (owner) {
                activeOwners.add(owner); // Mark this player as "active"
                
                if (bee.distanceToEntity(owner) > 12) {
                    bee.teleportTo(owner.x, owner.y + 2, owner.z);
                }
            } else {
                bee.discard();
            }
        }
    });

    // 3. PLAYER PARTICLES (Indication of summoned bees)
    activeOwners.forEach(owner => {
        event.level.spawnParticles(
            'minecraft:falling_nectar', 
            true, 
            owner.x, owner.y + 1, owner.z, 
            0.6, 0.8, 0.6, // Spread
            5, // Count
            0.05 // Speed
        );
    });
	

//END	
});	

ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:charged_stinger') {
        event.player.heal(10);
        event.player.potionEffects.add('nausea', 100, 0);
		event.player.potionEffects.add('glowing', 600, 0);
		event.player.potionEffects.add('speed', 600, 0);
    }
});

// BIOSCAN SYRINGE (Entity Interaction)
ItemEvents.entityInteracted(event => {
    let player = event.player;
    let target = event.target;
    let item = event.item;

    if (item.id == 'kubejs:bioscan_syringe' && target.type == 'minecraft:bee' && target.potionEffects.isActive('glowing')) {
        target.discard();
        player.give('kubejs:charged_stinger');
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.experience_orb.pickup', 'players', 1.0, 1.5);
        item.count--;
        event.cancel();
    }
});