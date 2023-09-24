EntityEvents.death("minecraft:ender_dragon", event => {
    const {entity, level, server} = event;
    if (server.persistentData.contains('dragonkilled')) return;
    server.persistentData.dragonkilled = 1.0;
});

PlayerEvents.tick(event => {
    const { player, level, server } = event;

    if (player.level.getTime() % 100 != 0) return;

    let dimension = String(level.getDimension());
    let currentPos = player.getBlock().pos;

    if (dimension == 'minecraft:the_end' && (currentPos.x > 250 || currentPos.x < -250 || currentPos.z > 250 || currentPos.z < -250) && !(server.persistentData.contains('dragonkilled'))) {
        player.teleportTo("minecraft:the_end", 0, 66, 0, 0, 0);
        player.tell("§5§l§oThe lingering powers of the ender dragon tether you to the island, killing it or its shadow will release it's grasp.");
    }
});