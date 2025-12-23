// ==========================================================================
// WISHING WELL CRATE
// ==========================================================================
ItemEvents.rightClicked('kubejs:wishing_crate', event => {
    // 1. Extract ALL necessary variables from the event
    const { player, item, server, level, hand } = event;
    
    if (hand != 'MAIN_HAND') return;

    let offhand = player.offHandItem;
    let offerings = ['minecraft:diamond', 'minecraft:emerald', 'minecraft:netherite_ingot'];

	if (!global.checkCrateCooldown(player, 5000)) return;

    if (offerings.includes(offhand.id)) {

		global.setCrateCooldown(player, server);
        item.count--;
        offhand.count--;
        
        if (!player.persistentData.stats) player.persistentData.stats = { rituals: 0, chaos: 0, wishes: 0, ancient: 0 };
        player.persistentData.stats.wishes++;
        player.persistentData.totalCratesOpened = (player.persistentData.totalCratesOpened || 0) + 1;

        if (Utils.random.nextDouble() < 0.6) {
            // 2. DEFINE the reward first
            let gearPool = [
                Item.of('minecraft:diamond_sword').enchant('minecraft:sharpness', 5),
                Item.of('minecraft:diamond_pickaxe').enchant('minecraft:efficiency', 5),
                Item.of('minecraft:diamond_chestplate').enchant('minecraft:protection', 4),
                Item.of('minecraft:diamond_leggings').enchant('minecraft:protection', 4)
            ];
            
            let reward = gearPool[Utils.random.nextInt(0, gearPool.length)];
            
            // 3. DEFINE the rewardName variable immediately after the reward
            let rewardName = reward.hoverName;

            // 4. GIVE the reward
            player.give(reward);

            // 5. RUN your particle effect (now 'level' and 'rewardName' are safe to use)
            for (let i = 0; i < 10; i++) {
                level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + (i * 0.5), player.z, 0.2, 0.1, 0.2, 10, 0.1);
                level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + (i * 0.5), player.z, 0.1, 0.1, 0.1, 5, 0.05);
            }
            
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.chime', 'players', 1.0, 0.8);
            
            // Use getString() to ensure it displays correctly in the status bar
            player.setStatusMessage(`§bThe Well granted your wish: ${rewardName.getString()}`);
            
        } else {
            player.displayClientMessage(Text.gray("The Well remains silent and takes your offering..."), true);
            level.spawnParticles('minecraft:large_smoke', true, player.x, player.y + 1, player.z, 0.3, 0.3, 0.3, 20, 0.05);
        }
    } else {
        player.setStatusMessage("§bThe Well demands a Diamond, Emerald, or Netherite.");
    }
});

