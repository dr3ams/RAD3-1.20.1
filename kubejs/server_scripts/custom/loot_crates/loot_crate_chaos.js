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
        server.tell([Text.green(player.name), ' found ', Text.lightPurple('LEGENDARY LOOT'), '!']);
		for (let i = 0; i < 10; i++) {
            level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + (i * 0.5), player.z, 0.2, 0.1, 0.2, 10, 0.1);
            level.spawnParticles('minecraft:enchanted_hit', true, player.x, player.y + (i * 0.5), player.z, 0.1, 0.1, 0.1, 5, 0.05);
        }
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0);
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

    // Deliver the items and show a status message above the hotbar.
    player.give(Item.of(item, count));
    player.setStatusMessage(`§a[${rarity}§a] Found ${count}x ${item.split(':')[1]}`);
}

// ==========================================================================
// CHAOS THEME SELECTOR
// ==========================================================================
const chaosThemes = [
    { name: 'Horde', mob: 'minecraft:zombie', loot: 'minecraft:iron_block' },
    { name: 'Archery', mob: 'minecraft:skeleton', loot: 'minecraft:spectral_arrow' },
    { name: 'Venom', mob: 'minecraft:spider', loot: 'minecraft:spider_eye' },
    { name: 'Desert', mob: 'minecraft:husk', loot: 'minecraft:gold_block' },
    { name: 'Wither', mob: 'minecraft:wither_skeleton', loot: 'minecraft:wither_skeleton_skull' }
];

// ==========================================================================
// MAIN CRATE INTERACTIONS
// ==========================================================================
ItemEvents.rightClicked(event => {
    const { player, level, item, server, hand } = event;
    if (hand != 'MAIN_HAND' || item.id != 'kubejs:chaos_crate') return;
	
	if (!global.checkCrateCooldown(player, 5000)) return;
	
	global.setCrateCooldown(player, server);
    item.count--;
    
    // Pick a random theme for this specific opening
    let theme = chaosThemes[Utils.random.nextInt(0, chaosThemes.length)];
    let chaosId = `chaos_${player.uuid}_${level.time}`;
    
    // Store theme data on the player so we know what loot to give later
    player.persistentData.activeChaosId = chaosId;
    player.persistentData.chaosKillsNeeded = 3;
    player.persistentData.chaosLoot = theme.loot; 

    player.displayClientMessage(Text.darkRed(`CHAOS UNLEASHED: Slay the 3 ${theme.name} Guardians!`), true);
    
    for(let i=0; i<3; i++) {
        let m = level.createEntity(theme.mob);
        // Random offset so they don't spawn inside each other
        m.setPosition(player.x + Utils.random.nextInt(-3, 3), player.y, player.z + Utils.random.nextInt(-3, 3));
        
        m.addTag('chaos_mob');
        m.addTag(chaosId);
        m.setGlowing(true);
        m.maxHealth = 40; // Make them tougher
        m.health = 40;
        m.customName = `${theme.name} Guardian`;
        m.spawn();
    }
});

// ==========================================================================
// CHAOS KILL TRACKER & DYNAMIC LOOT
// ==========================================================================
EntityEvents.death(event => {
    const { entity, source, server, level } = event;
    
    if (entity.tags.contains('chaos_mob') && source.player) {
        let player = source.player;
        let chaosId = player.persistentData.activeChaosId;

        if (entity.tags.contains(chaosId)) {
            player.persistentData.chaosKillsNeeded--;

            if (player.persistentData.chaosKillsNeeded <= 0) {
                // 1. Give the Theme Specific Reward
                let rewardItem = player.persistentData.chaosLoot || 'minecraft:diamond';
                player.give(Item.of(rewardItem, 1));
                
                // 2. Give the Universal Tiered Loot (The part I missed!)
                giveTieredLoot(player, server);
                
                // 3. Update Statistics
                if (!player.persistentData.stats) player.persistentData.stats = { chaos: 0 };
                player.persistentData.stats.chaos++;
                if (!player.persistentData.totalCratesOpened) player.persistentData.totalCratesOpened = 0;
                player.persistentData.totalCratesOpened++;
                
                // 4. Cleanup and Feedback
                player.tell(Text.gold("§6Challenge Complete! All Guardians defeated."));
                player.persistentData.activeChaosId = null;
                level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0);
            } else {
                player.setStatusMessage(`§eGuardians remaining: ${player.persistentData.chaosKillsNeeded}`);
            }
        }
    }
});

