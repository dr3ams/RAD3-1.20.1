EntityEvents.death(event => {
    const { entity, level, source } = event;

    if (entity.tags.contains('is_mimic')) {
        
        // 1. Drop the Heart
        let heart = Item.of('minecraft:heart_of_the_sea');
        entity.block.popItem(heart);

        // 2. Chance for Key Fragment
        if (Utils.random.nextDouble() < 0.25) {
            entity.block.popItem(Item.of('minecraft:iron_nugget').withName('7Broken Skeleton Key'));
        }

        // 3. THE "DROP EFFECT"        
        // Burst of particles to highlight the loot
        level.spawnParticles('minecraft:enchanted_hit', true, entity.x, entity.y + 0.5, entity.z, 0.5, 0.5, 0.5, 30, 0.2);

        // 4. Feedback
        if (source.actual && source.actual.player) {
            source.actual.setStatusMessage("6The Mimic's heart shatters the curse!");
        }
    }
	
	// GHOST DROPS (From Ritual Crate)
    if (entity.tags.contains('ritual_ghost')) {
        // 50% chance for Ectoplasm (useful for higher-tier keys later!)
        if (Utils.random.nextDouble() < 0.50) {
            entity.block.popItem('minecraft:ghast_tear'); // Using Ghast Tear as placeholder for Ectoplasm
        }
    }
});