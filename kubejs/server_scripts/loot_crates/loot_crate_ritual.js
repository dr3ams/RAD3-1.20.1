// ==========================================================================
// LOOT & BROADCAST FUNCTION
// ==========================================================================
// This function determines what loot is given and if a server-wide announcement is needed.


function giveTieredLoot(player, server) {
    let roll = Utils.random.nextDouble();
    let rarity = 'Common';
    let item = 'minecraft:iron_ingot';
    let count = 1;

	// Determine the Rarity Tier based on a 0.0 - 1.0 roll.
    if (roll > 0.95) {
        rarity = '§dLEGENDARY';
        let pool = ['minecraft:netherite_ingot', 'minecraft:nether_star', 'minecraft:totem_of_undying'];
        item = pool[Utils.random.nextInt(0, pool.length)];
		// GLOBAL BROADCAST: Let everyone know a player found top-tier loot.
        server.tell([Text.gold('[Ritual] '), Text.green(player.name), ' found ', Text.lightPurple('LEGENDARY LOOT'), '!']);
    } else if (roll > 0.75) {
        rarity = '§bRARE';
        let pool = ['minecraft:diamond', 'minecraft:emerald', 'minecraft:golden_apple'];
        item = pool[Utils.random.nextInt(0, pool.length)];
        count = Utils.random.nextInt(1, 3);
    } else {
        rarity = '§7Common';
        let pool = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:lapis_lazuli'];
        item = pool[Utils.random.nextInt(0, pool.length)];
        count = Utils.random.nextInt(2, 5);
    }
    player.give(Item.of(item, count));
    player.setStatusMessage(`§a[${rarity}§a] Found ${count}x ${item.split(':')[1]}`);
}

// ==========================================================================
// RITUAL CRATE
// ==========================================================================
ItemEvents.rightClicked('kubejs:ritual_crate', event => {
    const { player, level, item, server, hand } = event;
    if (hand != 'MAIN_HAND') return;

	if (!global.checkCrateCooldown(player, 5000)) return;

    let blockAtFeet = level.getBlock(player.blockX, player.blockY, player.blockZ);
    let isDeep = blockAtFeet.id == 'minecraft:water' && player.y < 0;
    let isHigh = player.y > 200 && !level.isRaining();

    // SUCCESSFUL RITUAL
    if (isDeep || isHigh) {
        if (!player.persistentData.stats) player.persistentData.stats = { rituals: 0, chaos: 0, wishes: 0, ancient: 0 };
        player.persistentData.stats.rituals++;
        player.persistentData.totalCratesOpened = (player.persistentData.totalCratesOpened || 0) + 1;
        
        giveTieredLoot(player, server); // Uses the restored function we wrote earlier
        item.count--;
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.experience_orb.pickup', 'players', 1.0, 1.0);
    } 
    // FAILED RITUAL - GHOST CHANCE
    else {
        if (Utils.random.nextDouble() < 0.10) {
			global.setCrateCooldown(player, server);
            item.count--;
            let ghost = level.createEntity('minecraft:vex');
            ghost.setPosition(player.x, player.y + 1, player.z);
            ghost.customName = "Ritual Wraith";
            ghost.addTag('ritual_ghost');
            ghost.spawn();
            
            player.setStatusMessage("§7A restless spirit was disturbed...");
            level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.vex.charge', 'hostile', 1.0, 0.5);
        } else {
            player.setStatusMessage("§cThe ritual fails here. Find §bDeep Water§c or §eHigh Peaks§c.");
        }
    }
});