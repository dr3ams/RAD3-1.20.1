ItemEvents.rightClicked('kubejs:echo_crate', event => {
    const { player, level, item, server, hand } = event;
    if (hand != 'MAIN_HAND') return;

	if (!global.checkCrateCooldown(player, 5000)) return;

    // --- 1. SEARCH FOR NOISE (Mobs within 12 blocks) ---
    let nearbyMobs = level.getEntities().filter(entity => 
        entity.living && 
        entity.uuid != player.uuid && 
        entity.distanceToEntity(player) < 12 &&
        !entity.tags.contains('pet')
    );

    // --- 2. SEARCH FOR HARMONY (Jukeboxes) ---
    let isHarmonized = false;
    for (let x = -10; x <= 10; x++) {
        for (let y = -5; y <= 5; y++) {
            for (let z = -10; z <= 10; z++) {
                let block = level.getBlock(player.blockX + x, player.blockY + y, player.blockZ + z);
                if (block.id == 'minecraft:jukebox' && block.properties.has_record == 'true') {
                    isHarmonized = true;
                    break;
                }
            }
        }
    }

    // --- 3. THE SONIC PULSE (5% CHANCE) ---
    if (Utils.random.nextDouble() < 0.05) {
        level.spawnParticles('minecraft:sonic_boom', true, player.x, player.y + 1, player.z, 0, 0, 0, 1, 0);
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.sonic_boom', 'players', 1.0, 1.0);
        
        // Find ALL living entities within 8 blocks and blast them back
        level.getEntities().filter(e => e.living && e.uuid != player.uuid && e.distanceToEntity(player) < 8).forEach(target => {
            // Calculate knockback direction away from the player
            let dx = target.x - player.x;
            let dz = target.z - player.z;
            target.knockback(1.5, -dx, -dz); // Powerful 1.5 strength knockback
            target.attack(2.0); // Small 1-heart "concussion" damage
        });
        
        player.displayClientMessage(Text.darkAqua("⚡ SONIC PULSE RELEASED ⚡"), true);
    }

    // --- 4. LOGIC GATES ---
    if (nearbyMobs.length > 0 && !isHarmonized) {
        player.setStatusMessage("§3The vibrations are too chaotic to open...");
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.tendril_clicks', 'players', 1.0, 1.0);
        level.spawnParticles('minecraft:sculk_soul', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05);
        return;
    }

    // --- 5. SUCCESSFUL OPENING ---
	global.setCrateCooldown(player, server);
    item.count--;
    if (!player.persistentData.stats) player.persistentData.stats = { rituals: 0, chaos: 0, wishes: 0, ancient: 0, echo: 0 };
    player.persistentData.stats.echo = (player.persistentData.stats.echo || 0) + 1;

    if (isHarmonized) {
        let rewards = ['minecraft:echo_shard', 'minecraft:disc_fragment_5', 'minecraft:sculk_sensor', 'minecraft:recovery_compass', 'minecraft:music_disc_5'];
        let loot = rewards[Utils.random.nextInt(0, rewards.length)];
        player.give(loot);
        player.setStatusMessage("§bHarmonized: Found " + loot.split(':')[1]);
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.warden.attack_impact', 'players', 0.8, 1.2);
    } else {
		let simpleLoot = ['minecraft:amethyst_shard', 'minecraft:quartz', 'minecraft:glowstone_dust'];
        let picked = simpleLoot[Utils.random.nextInt(0, simpleLoot.length)];
		player.give(Item.of(picked, Utils.random.nextInt(2, 5)));
        player.setStatusMessage("§7Quiet Opening: Found Minerals");
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.amethyst_block.chime', 'players', 1.0, 1.2);
    }
});