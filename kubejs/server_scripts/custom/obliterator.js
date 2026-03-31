EntityEvents.hurt(event => {
    const { source, entity, damage } = event;

    if (source.player && source.player.mainHandItem.id == 'kubejs:obliterator') {
        entity.health = 0;
        
        entity.kill();

        let p = source.player;
        p.level.spawnLightning(entity.x, entity.y, entity.z, true);
    }
});