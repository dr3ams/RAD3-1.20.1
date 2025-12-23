// Global Helper Function for the 5-second timer
global.checkCrateCooldown = (player, cooldownMillis) => {
    let now = new Date().getTime();
    let lastOpen = player.persistentData.lastCrateOpen || 0;

    if (now - lastOpen < cooldownMillis) {
        let secondsLeft = Math.ceil((cooldownMillis - (now - lastOpen)) / 1000);
        // Action bar message so it doesn't clutter chat
        player.setStatusMessage(`§cStabilizing: ${secondsLeft}s...`);
        return false; 
    }

    return true; 
};

// Call this only when the crate successfully opens
global.setCrateCooldown = (player, server) => {
    player.persistentData.lastCrateOpen = new Date().getTime();

    // --- NEW: THE VISUAL/AUDIO NOTIFIER ---
    // We schedule a task to run 5 seconds (100 ticks) after the opening
    server.scheduleInTicks(100, (callback) => {
        if (player.isAlive()) {
            // Tell the player they are ready
            player.displayClientMessage(Text.of("§a✔ Crate Energy Stabilized").bold(), true);
            
            // Play a subtle "recharge" sound (Experience Orbs/Chime)
            player.playSound('minecraft:block.amethyst_block.chime', 0.5, 1.5);
            
            // Spawn a small burst of green particles at the player's feet
            player.level.spawnParticles('minecraft:happy_villager', true, player.x, player.y + 0.2, player.z, 0.3, 0.1, 0.3, 5, 0.05);
        }
    });
};