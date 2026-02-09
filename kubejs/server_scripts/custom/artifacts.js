ItemEvents.rightClicked(event => {
    const { player, level, item, target, hand, server } = event;

    // --- ARTIFACT 2: GAMBLER'S COIN ---
    if (item.id == 'kubejs:gamblers_coin') {
        if (player.cooldowns.isOnCooldown(item)) return;

        // Find and Consume Fuel
        let consumed = false;
        player.inventory.allItems.forEach(stack => {
            if (!consumed && stack.id == 'minecraft:gold_ingot') {
                stack.count--;
                consumed = true;
            }
        });

        if (!consumed) {
            player.setStatusMessage("§6Needs a Gold Ingot!");
            return;
        }

        player.cooldowns.addCooldown(item, 100);
        player.playSound('minecraft:block.iron_door.close', 0.5, 2.0);
        level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1.5, player.z, 0.1, 0.5, 0.1, 10, 0.1);

        server.scheduleInTicks(10, callback => {
            if (Math.random() < 0.01) {
                player.setStatusMessage("§b§l!!! JACKPOT !!!");
                player.give(Item.of('minecraft:diamond'));
                player.playSound('minecraft:ui.toast.challenge_complete', 1.0, 1.0);
            } else if (Math.random() < 0.5) {
                player.setStatusMessage("§6§lHEADS!");
                player.potionEffects.add('minecraft:luck', 600, 2);
                level.spawnParticles('minecraft:wax_off', true, player.x, player.y + 1.2, player.z, 0.4, 0.4, 0.4, 15, 0.1);
            } else {
                player.setStatusMessage("§0§lTAILS...");
                player.potionEffects.add('minecraft:unluck', 400, 1);
                level.spawnParticles('minecraft:smoke', true, player.x, player.y + 1.2, player.z, 0.4, 0.4, 0.4, 15, 0.05);
            }

            let nbt = item.nbt || {};
            nbt.Damage = (nbt.Damage || 0) + 1;
            item.nbt = nbt;
            if (item.nbt.Damage >= 25) { item.count--; player.playSound('minecraft:entity.iron_golem.damage', 1.0, 2.0); }
        });
    }
})

ItemEvents.rightClicked(event => {
    const { player, level, item, target, hand, server } = event;
    if (hand != 'MAIN_HAND') return;

    // --- HELPER: CONSUME BONE MEAL ---
    function consumeFuel() {
        let consumed = false;
        player.inventory.allItems.forEach(stack => {
            if (!consumed && stack.id == 'minecraft:bone_meal') {
                stack.count--;
                consumed = true;
            }
        });
        return consumed;
    }

    // --- 1. ORIGINAL LIVING BRANCH (Transmutation) ---
	if (item.id == 'kubejs:living_branch') {
        if (!target || !target.block || player.cooldowns.isOnCooldown(item)) return;
        if (!consumeFuel()) { player.setStatusMessage("§2Needs Bone Meal!"); return; }

        player.cooldowns.addCooldown(item, 5);
        let block = target.block;
        let id = block.id;

        let changed = false;
        if (id.contains('log') || id.contains('wood')) { block.set('minecraft:moss_block'); changed = true; } 
        else if (id == 'minecraft:stone_bricks') { block.set('minecraft:mossy_stone_bricks'); changed = true; } 
        else if (id == 'minecraft:cobblestone') { block.set('minecraft:mossy_cobblestone'); changed = true; } 
        else if (id == 'minecraft:dirt') { block.set('minecraft:grass_block'); changed = true; }

        if (changed) {
            level.spawnParticles('minecraft:happy_villager', true, block.x + 0.5, block.y + 1, block.z + 0.5, 0.5, 0.5, 0.5, 5, 0.05);
            player.playSound('minecraft:block.moss.place', 1.0, 1.5);
            
            // DAMAGE LOGIC
            let nbt = item.nbt || {};
            nbt.Damage = (nbt.Damage || 0) + 1;
            item.nbt = nbt;
            if (nbt.Damage >= 64) {
                item.count--;
                player.playSound('minecraft:entity.item.break', 1.0, 1.0); 
				player.setStatusMessage("§cThe branch has withered away.");
            }
        }
    }

// --- 2. BRANCH OF BRIDGING (Horizontal Lock) ---
    if (item.id == 'kubejs:living_branch_bridging') {
        if (player.cooldowns.isOnCooldown(item)) return;
        if (!target || !target.block) return; 

        // 1. Determine Horizontal Direction ONLY
        let dx = 0; let dz = 0;
        let rotation = (player.yaw % 360 + 360) % 360;

        // We ignore pitch and strictly use horizontal yaw
        if (rotation >= 315 || rotation < 45) dz = 1;      // South
        else if (rotation >= 45 && rotation < 135) dx = -1;  // West
        else if (rotation >= 135 && rotation < 225) dz = -1; // North
        else if (rotation >= 225 && rotation < 315) dx = 1;  // East

        let blocksPlaced = 0;
        let fuelConsumed = false;

        // 2. Scan and Place up to 5 blocks on the SAME Y-LEVEL
        for (let i = 1; i <= 5; i++) {
            let nx = target.block.x + (dx * i);
            let ny = target.block.y; // Locked to the block's Y level
            let nz = target.block.z + (dz * i);

            if (level.getBlock(nx, ny, nz).id == 'minecraft:air') {
                if (!fuelConsumed) {
                    if (!consumeFuel()) { 
                        player.setStatusMessage("§2Needs Bone Meal!"); 
                        break; 
                    }
                    fuelConsumed = true;
                    player.cooldowns.addCooldown(item, 10); 
                }

                server.runCommandSilent(`setblock ${nx} ${ny} ${nz} minecraft:oak_leaves[persistent=true] replace`);
                level.spawnParticles('minecraft:happy_villager', true, nx + 0.5, ny + 0.5, nz + 0.5, 0.2, 0.2, 0.2, 3, 0.05);
                blocksPlaced++;
            } else {
                if (i == 1) player.setStatusMessage("§cPath blocked!");
                break; 
            }
        }

        if (blocksPlaced > 0) {
            player.playSound('minecraft:block.azalea.place', 1.0, 1.2);
            item.damageValue++;
            if (item.damageValue >= item.maxDamage) {
                item.count--;
                player.playSound('minecraft:entity.item.break', 1.0, 1.0);
				player.setStatusMessage("§cThe Bridging Branch has shattered!");
            }
        }
    }

// --- 3. BUZZING BRANCH (Fixed Durability) ---
    if (item.id == 'kubejs:buzzing_living_branch') {
        if (player.cooldowns.isOnCooldown(item)) return;
        if (!consumeFuel()) { player.setStatusMessage("§6Needs Bone Meal!"); return; }

        player.cooldowns.addCooldown(item, 200);
        
        for (let i = 0; i < 3; i++) {
            let bee = level.createEntity('minecraft:bee');
            bee.x = player.x; bee.y = player.y + 2; bee.z = player.z;
            
            bee.addTag('guardian_bee');
            bee.addTag(`owner_${player.uuid}`); 
            
            // Lifespan & Buffs
            bee.potionEffects.add('minecraft:glowing', 1200, 0, false, false);
            bee.potionEffects.add('minecraft:strength', 1200, 1, false, true);
            bee.potionEffects.add('minecraft:regeneration', 1200, 0, false, true);

            bee.mergeNbt({HasStung: 0});
            bee.spawn();
        }
        
		player.setStatusMessage("§6The Swarm protects you for 1 minute!");
        player.playSound('minecraft:block.beehive.exit', 1.0, 1.0);
        
        // --- UPDATED DURABILITY LOGIC ---
        // item.damageValue works for Registered maxDamage. 
        // We must manually check if it exceeds the limit.
        item.setDamageValue(item.getDamageValue() + 1);
        
        if (item.getDamageValue() >= item.getMaxDamage()) {
            item.setCount(0); // Break the item
            player.playSound('minecraft:entity.item.break', 1.0, 1.0);
            player.setStatusMessage("§cThe Buzzing Branch has shattered!");
        }
    }
// end	
});

// --- BEE PROTECTOR AI ---
EntityEvents.hurt(event => {
    const { entity, source, level } = event;

    // If player is hit, send bees to attack
    if (entity.isPlayer()) {
        let attacker = source.actual;
        if (!attacker || attacker.isPlayer()) return;

        level.getEntities().filter(e => e.type == 'minecraft:bee' && e.tags.contains('guardian_bee')).forEach(bee => {
            if (bee.distanceToEntity(entity) < 20) {
                bee.setTarget(attacker);
            }
        });
    }

    // If a Guardian Bee hits something, don't let it lose its stinger
    if (source.actual && source.actual.type == 'minecraft:bee' && source.actual.tags.contains('guardian_bee')) {
        source.actual.mergeNbt({HasStung: 0});
    }
});

// --- BEE MANAGEMENT (LEASH, LIFESPAN, & PLAYER PARTICLES) ---
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
