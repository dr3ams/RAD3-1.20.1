BlockEvents.rightClicked(event => {
    const { player, item, server, hand, block } = event;

    // 1. Only run if the player is holding the pass and clicking a block
    if (item.id !== 'lrdynamicdungeon:dungeon_pass') return;

    // 2. Record the count before the interaction happens
    let countBefore = item.count;

    // 3. Wait 1 tick (0.05 seconds) 
    // This lets the mod process the right-click and generate the dungeon first
    server.scheduleInTicks(10, () => {
        let currentItem = player.getHeldItem(hand);
        
        // 4. If the item is gone or the count decreased, the mod used it successfully
        if (currentItem.count < countBefore || currentItem.id !== 'lrdynamicdungeon:dungeon_pass') {
            
            // Clear the loot memory string
            player.persistentData.putString('openedChests', '');
                                   
            // Play a subtle sound to confirm the script synced
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.experience_orb.pickup', 'players', 0.5, 1.0);
        }
    });
});