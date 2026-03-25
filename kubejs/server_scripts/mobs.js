EntityEvents.spawned(event => {
    if (event.level.clientSide) return

    const { entity, level } = event
    const mobId = entity.type

    const milestoneMobs = [
        'hmag:ghost', 'mowziesmobs:naga', 'minecraft:phantom',
        'creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll',
        'creatures_of_petrichor:shade', 'creatures_of_petrichor:vengeful_gravestone',
        'creatures_of_petrichor:specter', 'creatures_of_petrichor:wandering_lantern'
    ]

    if (!milestoneMobs.includes(mobId)) return

    // Skip pack members entirely — they are already handled by the leader's spawn
    if (entity.tags.contains('is_pack_member')) return

    // 50% random spawn chance
    if (Math.random() > 0.50) {
        //console.log(`[DEBUG-SPAWN] FAILED: ${mobId} lost the 50% random roll.`)
        event.cancel()
        return
    }

    //console.log(`[DEBUG-SPAWN] Match found! Checking milestones for: ${mobId}`)

    // Milestone check — nearest player within 256 blocks
    let player = level.getNearestPlayer(entity, 256)

    if (!player) {
        //console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - No player within 256 blocks.`)
        event.cancel()
        return
    }

    //console.log(`[DEBUG-STAGES] Checking player: ${player.name.string}. Stages found: [${player.stages.getAll()}]`)

    if (!player.stages.has('milestone_nether')) {
        //console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - Player ${player.name.string} is missing 'milestone_nether'`)
        event.cancel()
        return
    }

    // Direwolf pack logic
    if (mobId === 'creatures_of_petrichor:direwolf') {
        if (!level.canSeeSky(entity.blockPosition())) {
            //console.log(`[DEBUG-SPAWN] CANCELLED: Direwolf - No sky.`)
            event.cancel()
            return
        }

        // Tag the leader BEFORE spawning pack members to prevent re-entry
        entity.addTag('is_pack_member')

        let packSize = Math.floor(Math.random() * 3) + 3 // 3–5 total (leader + 2–4 members)
        //console.log(`[DEBUG-SPAWN] PACK: Spawning ${packSize} total wolves.`)

        for (let i = 0; i < packSize - 1; i++) {
            let member = level.createEntity('creatures_of_petrichor:direwolf')
            if (!member) {
                console.log(`[DEBUG-SPAWN] WARN: createEntity returned null for pack member ${i + 1}, skipping.`)
                continue
            }
            member.setPos(
                entity.x + (Math.random() * 4 - 2),
                entity.y,
                entity.z + (Math.random() * 4 - 2)
            )
            member.addTag('is_pack_member')
            member.spawn()
        }
    }

    // Chunk limits — 1 per 3x3 chunk area
    const limitOnePerArea = [
        'hmag:ghost', 'mowziesmobs:naga', 'minecraft:phantom',
        'creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll',
        'creatures_of_petrichor:haunt', 'creatures_of_petrichor:shade',
        'creatures_of_petrichor:vengeful_gravestone', 'creatures_of_petrichor:specter',
        'creatures_of_petrichor:wandering_lantern'
    ]

    if (limitOnePerArea.includes(mobId)) {
        let count = 0

        let areaX = Math.floor((entity.blockX >> 4) / 3)
        let areaZ = Math.floor((entity.blockZ >> 4) / 3)

        level.getEntitiesWithin(entity.boundingBox.inflate(64)).forEach(e => {
            if (e.type === mobId && e !== entity) {
                let eAreaX = Math.floor((e.blockX >> 4) / 3)
                let eAreaZ = Math.floor((e.blockZ >> 4) / 3)
                if (eAreaX === areaX && eAreaZ === areaZ) count++
            }
        })

        if (count >= 1) {
            //console.log(`[DEBUG-SPAWN] CANCELLED: ${mobId} - 3x3 Area already occupied.`)
            event.cancel()
            return
        }
    }

    console.log(`[DEBUG-SPAWN] SUCCESS: ${mobId} spawned at [${entity.blockX} ${entity.blockY} ${entity.blockZ}] near ${player.name.string}`)

    const needsHealthBuff = ['creatures_of_petrichor:direwolf', 'creatures_of_petrichor:cursed_doll']
    if (needsHealthBuff.includes(mobId)) {
        entity.maxHealth = entity.maxHealth + 10
        entity.health = entity.maxHealth
        //console.log(`[DEBUG-SPAWN] BUFFED: ${mobId} +10 HP`)
    }
})