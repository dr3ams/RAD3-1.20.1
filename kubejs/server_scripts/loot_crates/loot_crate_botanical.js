ItemEvents.rightClicked('kubejs:botanical_crate', event => {
    const { player, level, item, hand } = event;
    if (hand != 'MAIN_HAND') return;

    let nbt = item.nbt || {};
    let stage = nbt.growthStage || 0;

	if (!global.checkCrateCooldown(player, 5000)) return;

    if (player.offHandItem.id == 'minecraft:bone_meal') {
        player.offHandItem.count--;
        
        // --- 1. GROWTH CHANCE ---
        if (Utils.random.nextDouble() < 0.6) {
            stage++;
            item.nbt = { growthStage: stage };
            
            level.spawnParticles('minecraft:happy_villager', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 15, 0.05);
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:item.bone_meal.use', 'players', 1.0, 1.0);
            
            // --- 2. LUSH CLEARING EVENT (5% Chance on successful growth) ---
            if (Utils.random.nextDouble() < 0.05) {
                player.displayClientMessage(Text.green("The crate's energy overflows into the earth!"), true);
                
                // Scan a 3x3 area under the player
                for (let x = -2; x <= 2; x++) {
                    for (let z = -2; z <= 2; z++) {
                        let block = level.getBlock(player.blockX + x, player.blockY - 1, player.blockZ + z);
                        // If it's dirt or grass, turn it to moss and add flowers
                        if (block.id == 'minecraft:grass_block' || block.id == 'minecraft:dirt') {
                            block.set('minecraft:moss_block');
                            if (Utils.random.nextDouble() < 0.3) {
                                level.getBlock(player.blockX + x, player.blockY, player.blockZ + z).set('minecraft:flowering_azalea');
                            }
                        }
                    }
                }
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.enchantment_table.use', 'players', 0.8, 1.2);
            }

            if (stage < 3) {
                player.setStatusMessage(`§2The vines tighten... (Stage ${stage}/3)`);
            }
        } else {
            player.setStatusMessage("§6The vines resist the fertilizer...");
            level.spawnParticles('minecraft:smoke', true, player.x, player.y + 1, player.z, 0.2, 0.2, 0.2, 5, 0.02);
        }

        // --- 3. THE BLOOM ---
        if (stage >= 3) {
			global.setCrateCooldown(player, server);
            item.count--;
            player.setStatusMessage("§aThe Crate has fully bloomed!");
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.flowering_azalea.break', 'players', 1.0, 0.8);
            
            let rewards = ['minecraft:spore_blossom', 'minecraft:enchanted_golden_apple', 'minecraft:moss_block', 'minecraft:cherry_sapling', 'minecraft:mangrove_propagule', 'minecraft:heart_of_the_sea'];
            player.give(Item.of(rewards[Utils.random.nextInt(0, rewards.length)], Utils.random.nextInt(1, 2)));
        }
        
    } else {
        player.setStatusMessage("§eNeeds Bone Meal in Off-Hand to fertilize.");
    }
});