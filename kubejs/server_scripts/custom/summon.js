// ============================================================
//  SUMMONING SYSTEM  —  KubeJS 1.20.1
//  Stat scaling, multi-type summons, journal, AI, management
// ============================================================

const SUMMON_CONFIG = {

    // --- Lifespan & Cooldown (ticks; 20t = 1s) ---
    lifespan:  2400,   // 2 minutes
    cooldown:  20,   // 2 minutes

    // --- Stat Scaling ---
    // Final stat = (playerStat * statMult) + (expLevel * expMult)
    healthStatMult:  0.5,   // multiplier on player's max health
    attackStatMult:  0.3,   // multiplier on player's attack damage
    expHealthMult:   0.4,   // bonus HP per exp level
    expAttackMult:   0.15,  // bonus ATK per exp level

    // --- AI / Leash ---
    leashDistance:  20,
    aggroRange:     24,
    tickInterval:   20,

    // ----------------------------------------------------------------
    //  SUMMON REGISTRY
    //  Add new summons here — no other code changes needed.
    //    item      – summoning item id
    //    entity    – entity type to spawn
    //    tag       – unique entity tag (must be globally unique)
    //    maxCount  – max simultaneous per player
    //    nameColor – § colour code
    //    name      – display name
    //    particles – particle effect shown on owner
    //    sound     – summon sound
    //    nbt       – extra NBT (optional)
    //    postSpawn – function(entity, stats) for custom setup (optional)
    // ----------------------------------------------------------------
    summons: {

        'kubejs:summon_wolf': {
            entity:    'minecraft:wolf',
            tag:       'summoned_wolf',
            maxCount:  2,
            nameColor: '§a',
            name:      '🐺 Spirit Wolf',
            particles: 'minecraft:enchant',
            sound:     'minecraft:entity.wolf.howl',
            nbt:       { Angry: 1 },
        },

        'kubejs:summon_skeleton': {
            entity:    'minecraft:skeleton',
            tag:       'summoned_skeleton',
            maxCount:  1,
            nameColor: '§7',
            name:      '💀 Bone Archer',
            particles: 'minecraft:witch',
            sound:     'minecraft:entity.skeleton.ambient',
            nbt:       {},
        },

        'kubejs:summon_iron_golem': {
            entity:    'minecraft:iron_golem',
            tag:       'summoned_golem',
            maxCount:  1,
            nameColor: '§6',
            name:      '⚙ Iron Guardian',
            particles: 'minecraft:cloud',
            sound:     'minecraft:entity.iron_golem.repair',
            nbt:       {},
        },

        'kubejs:summon_blaze': {
            entity:    'minecraft:blaze',
            tag:       'summoned_blaze',
            maxCount:  1,
            nameColor: '§c',
            name:      '🔥 Bound Blaze',
            particles: 'minecraft:flame',
            sound:     'minecraft:entity.blaze.ambient',
            nbt:       {},
        },

    },
};

// ============================================================
//  HELPERS
// ============================================================

function getAttr(player, attrName) {
    try { return player.getAttribute(attrName).getValue(); }
    catch (e) { return 0; }
}

function computeStats(player) {
    const maxHp = getAttr(player, 'minecraft:generic.max_health');
    const atk   = getAttr(player, 'minecraft:generic.attack_damage');
    const lvl   = player.xpLevel;

    return {
        health: Math.max(4,  Math.round((maxHp * SUMMON_CONFIG.healthStatMult + lvl * SUMMON_CONFIG.expHealthMult) * 10) / 10),
        attack: Math.max(2,  Math.round((atk   * SUMMON_CONFIG.attackStatMult + lvl * SUMMON_CONFIG.expAttackMult) * 10) / 10),
    };
}

function getActiveSummons(level, def, playerUuid) {
    return level.getEntities().filter(e =>
        e.tags.contains(def.tag)
     && e.tags.contains(`owner_${playerUuid}`)
     && e.potionEffects.isActive('minecraft:glowing')
    );
}

function applyStats(entity, stats) {
    try { entity.getAttribute('minecraft:generic.max_health').setBaseValue(stats.health); entity.health = stats.health; } catch (e) {}
    try { entity.getAttribute('minecraft:generic.attack_damage').setBaseValue(stats.attack); } catch (e) {}
}

// ============================================================
//  SUMMONING — right-click
// ============================================================

ItemEvents.rightClicked(event => {
    const { item, player, level } = event;
    const def = SUMMON_CONFIG.summons[item.id];

    // ── Journal ──────────────────────────────────────────────
    if (item.id === 'kubejs:summoning_journal') {
        const stats = computeStats(player);
        const lvl   = player.xpLevel;
        const maxHp = Math.round(getAttr(player, 'minecraft:generic.max_health') * 10) / 10;
        const atk   = Math.round(getAttr(player, 'minecraft:generic.attack_damage') * 10) / 10;

        player.setStatusMessage(
            `§5§l── Summoning Journal ──\n` +
            `§7Your Stats: §aHP §f${maxHp}  §cATK §f${atk}  §bXP Lv §f${lvl}\n` +
            `§7HP Mult: §a${SUMMON_CONFIG.healthStatMult} §7+ §b${SUMMON_CONFIG.expHealthMult}§7/lvl\n` +
            `§7ATK Mult: §c${SUMMON_CONFIG.attackStatMult} §7+ §b${SUMMON_CONFIG.expAttackMult}§7/lvl\n` +
            `§eYour summons → HP §f${stats.health}  §cATK §f${stats.attack}\n` +
            `§7Lifespan: §f${SUMMON_CONFIG.lifespan / 20}s   Cooldown: §f${SUMMON_CONFIG.cooldown / 20}s`
        );
        return;
    }

    if (!def) return;
    if (player.cooldowns.isOnCooldown(item)) return;

    // Cap check
    if (getActiveSummons(level, def, player.uuid).length >= def.maxCount) {
        player.setStatusMessage(`§c${def.name} §7— max active (${def.maxCount}) already out!`);
        return;
    }

    const stats = computeStats(player);

    let summon = level.createEntity(def.entity);
    summon.x = player.x + (Math.random() - 0.5) * 2;
    summon.y = player.y;
    summon.z = player.z + (Math.random() - 0.5) * 2;

    summon.addTag(def.tag);
    summon.addTag('summoned_entity');
    summon.addTag(`owner_${player.uuid}`);

    summon.potionEffects.add('minecraft:glowing', SUMMON_CONFIG.lifespan, 0, false, false);

    summon.customName = `${def.nameColor}${def.name}`;
    summon.setCustomNameVisible(true);

    if (def.nbt && Object.keys(def.nbt).length > 0) summon.mergeNbt(def.nbt);

    summon.spawn();
    applyStats(summon, stats);

    if (def.postSpawn) def.postSpawn(summon, stats);

    player.cooldowns.addCooldown(item, SUMMON_CONFIG.cooldown);
    player.setStatusMessage(
        `${def.nameColor}${def.name} §asummoned! §7(HP §f${stats.health} §7ATK §f${stats.attack}§7)`
    );
    level.playSound(null, player.blockX, player.blockY, player.blockZ, def.sound, 'players', 1.0, 1.0);
    item.count--;
});

// ============================================================
//  SUMMON AI — retaliate when owner is hit
// ============================================================

EntityEvents.hurt(event => {
    const { entity, source, level } = event;
    if (!entity.isPlayer()) return;

    const attacker = source.actual;
    if (!attacker || attacker.isPlayer()) return;

    level.getEntities()
        .filter(e =>
            e.tags.contains('summoned_entity')
         && e.tags.contains(`owner_${entity.uuid}`)
         && e.distanceToEntity(entity) < SUMMON_CONFIG.aggroRange
        )
        .forEach(s => s.setTarget(attacker));
});

// ============================================================
//  SUMMON MANAGEMENT — leash, lifespan, particles
// ============================================================

LevelEvents.tick(event => {
    if (event.server.tickCount % SUMMON_CONFIG.tickInterval !== 0) return;

    const activeOwners = new Map(); // uuid -> { owner, particles: Set }

    event.level.getEntities()
        .filter(e => e.tags.contains('summoned_entity'))
        .forEach(summon => {

            // 1. Lifespan
            if (!summon.potionEffects.isActive('minecraft:glowing')) {
                summon.discard();
                return;
            }

            // 2. Find owner UUID from tag
            let ownerUuid = null;
            const tagIter = summon.tags.iterator();
            while (tagIter.hasNext()) {
                const t = tagIter.next();
                if (t.startsWith('owner_')) { ownerUuid = t.replace('owner_', ''); break; }
            }
            if (!ownerUuid) { summon.discard(); return; }

            const owner = event.server.getPlayer(ownerUuid);
            if (!owner) { summon.discard(); return; }

            // 3. Leash
            if (summon.distanceToEntity(owner) > SUMMON_CONFIG.leashDistance) {
                summon.teleportTo(owner.x, owner.y, owner.z);
            }

            // 4. Mirror owner's crosshair target (if entity & not player)
            const ownerTarget = owner.getTarget ? owner.getTarget() : null;
            if (ownerTarget && !ownerTarget.isPlayer() && summon.getTarget && !summon.getTarget()) {
                summon.setTarget(ownerTarget);
            }

            // 5. Collect particle type
            let particleType = 'minecraft:enchant';
            for (const [, d] of Object.entries(SUMMON_CONFIG.summons)) {
                if (summon.tags.contains(d.tag)) { particleType = d.particles; break; }
            }
            //if (!activeOwners.has(ownerUuid)) activeOwners.set(ownerUuid, { owner, particles: new Set() });
            //activeOwners.get(ownerUuid).particles.add(particleType);
        });

    // 6. Particles on active owners
    //activeOwners.forEach(({ owner, particles }) => {
    //    particles.forEach(p => {
    //        event.level.spawnParticles(p, true, owner.x, owner.y + 1, owner.z, 0.4, 0.8, 0.4, 4, 0.05);
    //    });
    //});
});