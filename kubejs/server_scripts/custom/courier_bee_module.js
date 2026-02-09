// --- COURIER BEE MODULE (Buzzing Branch Logic) ---

// 1. Handling the "Arrival" and Chat Message
EntityEvents.spawned('minecraft:bee', event => {
    const { entity, level, server } = event

    if (entity.tags.contains('messenger_bee')) {
        let player = level.getNearestPlayer(entity.x, entity.y, entity.z, 16, false)
        
        if (player) {
            // Using § for formatting
            player.tell(Text.of("§b[Post-Bee]§r §7§oBzzzt! New mail has arrived in your §b§nMailbox§r§7§o!§r"))
            server.runCommandSilent(`playsound minecraft:entity.bee.loop_aggressive ambient ${player.username} ${entity.x} ${entity.y} ${entity.z} 1 1.5`)
        }
    }
})

// 2. Handling the Despawning (Reusing Buzzing Branch Logic)
LevelEvents.tick(event => {
    const { level } = event
    
    // We iterate through all entities to find our tagged bees
    level.getEntities().forEach(ent => {
        if (ent.type === 'minecraft:bee' && ent.tags.contains('messenger_bee')) {
            
            // Reusing your Glowing effect timer logic
            if (!ent.potionEffects.isActive('minecraft:glowing')) {
                
                // Visual "Poof"
                level.spawnParticles('minecraft:cloud', true, ent.x, ent.y + 0.5, ent.z, 0.2, 0.2, 0.2, 10, 0.05)
                
                // Remove the bee
                ent.discard()
            }
        }
    })
})