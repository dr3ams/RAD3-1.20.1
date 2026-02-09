EntityEvents.spawned(event => {
    // 1. Only run on the server side
    if (event.level.clientSide) return

    const { entity, level } = event
    
    // In 1.20.1, .type IS the string ID (e.g., "minecraft:zombie")
    const mobId = entity.type 

    // This should now show the correct ID in the console!
    //console.log(`[DEBUG-EVENT] Something spawned: ${mobId}`)

    const milestoneMobs = [
        'hmag:ghost', 'mowziesmobs:naga', 'minecraft:phantom',
        'creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll',
        'creatures_of_petrichor:haunt', 'creatures_of_petrichor:shade',
        'creatures_of_petrichor:vengeful_gravestone', 'creatures_of_petrichor:specter',
        'creatures_of_petrichor:wandering_lantern'
    ]

    if (!milestoneMobs.includes(mobId)) return

	// RANDOM SPAWN CHANCE (50% Chance to even attempt the spawn)
    // Math.random() gives a number between 0 and 1. 0.20 = 20%
    if (Math.random() > 0.50) {
        console.log(`[DEBUG-SPAWN] FAILED: ${mobId} lost the 50% random roll.`)
        event.cancel()
        return
    }

    console.log(`[DEBUG-SPAWN] Match found! Checking milestones for: ${mobId}`)

	// MILESTONE CHECK
    let player = level.getNearestPlayer(entity, 256)
    
    if (!player) {
        console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - No player within 256 blocks.`)
        event.cancel()
        return
    }

    // This line prints the actual stages the player has
    console.log(`[DEBUG-STAGES] Checking player: ${player.name.string}. Stages found: [${player.stages.getAll()}]`)

    if (!player.stages.has('milestone_nether')) {
        console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - Player ${player.name.string} is missing 'milestone_nether'`)
        event.cancel()
        return
    }

    // 3. DIREWOLF PACK LOGIC
    if (mobId == 'creatures_of_petrichor:direwolf') {
        if (!level.canSeeSky(entity.blockPosition())) {
            console.log(`[DEBUG-SPAWN] CANCELLED: Direwolf - No sky.`)
            event.cancel()
            return
        }

        if (!entity.tags.contains('is_pack_member')) {
			//Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
            let packSize = Math.floor(Math.random() * (5 - 3 + 1) + 3)
            console.log(`[DEBUG-SPAWN] PACK: Spawning ${packSize} total wolves.`)
            for (let i = 0; i < packSize - 1; i++) {
                let member = entity.block.createEntity(mobId)
                member.addTag('is_pack_member')
                member.spawn()
            }
            entity.addTag('is_pack_member')
        }
    }

// 4. CHUNK LIMITS (1 per 3x3 chunk area)
    const limitOnePerArea = ['hmag:ghost', 'mowziesmobs:naga', 'minecraft:phantom', 'creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll',
        'creatures_of_petrichor:haunt', 'creatures_of_petrichor:shade', 'creatures_of_petrichor:vengeful_gravestone', 'creatures_of_petrichor:specter',
        'creatures_of_petrichor:wandering_lantern']
    if (limitOnePerArea.includes(mobId)) {
        let count = 0
        
        // Normalize to a 3x3 grid (Divide by 3)
        let areaX = Math.floor((entity.blockX >> 4) / 3)
        let areaZ = Math.floor((entity.blockZ >> 4) / 3)

        // Only check entities within 64 blocks for performance
        level.getEntitiesWithin(entity.boundingBox.inflate(64)).forEach(e => {
            if (e.type == mobId) {
                let eAreaX = Math.floor((e.blockX >> 4) / 3)
                let eAreaZ = Math.floor((e.blockZ >> 4) / 3)
                if (eAreaX == areaX && eAreaZ == areaZ) count++
            }
        })

        if (count > 1) {
            console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - 3x3 Area already occupied.`)
            event.cancel()
            return
        }
    }

    // FINAL SUCCESS & BUFFS
	
    console.log(`[DEBUG-SPAWN] SUCCESS: ${mobId} spawned at [${entity.blockX} ${entity.blockY} ${entity.blockZ}] near ${player.name.string}`);

    const needsHealthBuff = ['creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll']
    if (needsHealthBuff.includes(mobId)) {
        entity.maxHealth = entity.maxHealth + 10
        entity.health = entity.maxHealth
        console.log(`[DEBUG-SPAWN] BUFFED: ${mobId} +10 HP`)
    }
})