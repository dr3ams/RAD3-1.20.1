// server_scripts/turret_logic.js
const TURRET_TAG = 'kubejs:turret';
const TURRET_RANGE = 16.0;
const SHOOT_EVERY = 40; 
const TURRET_LIFE = 1200;

ItemEvents.rightClicked('kubejs:turret_item', event => {
    const { player, level, item } = event;
    if (level.isClientSide()) return;

    const hit = player.rayTrace(5.0);
    if (hit.type !== 'BLOCK') return;

    const x = hit.block.x;
    const y = hit.block.y;
    const z = hit.block.z;

    level.getServer().scheduleInTicks(1, () => {
        const turret = level.createEntity('minecraft:armor_stand');
        if (!turret) return;

        turret.setPosition(x + 0.5, y + 1.0, z + 0.5);
        turret.addTag(TURRET_TAG);
        
        // Use standard NBT methods to store the time
        turret.nbt.putLong('turret_spawn_tick', level.time);

        turret.nbt.merge({
            PersistenceRequired: 1,
            NoGravity: 1,
            Marker: 1, 
            Invisible: 0,
            CustomNameVisible: 1
        });

        turret.customName = Text.of('§6Sentry §7(60s)'); //
        turret.spawn();

        // Sound syntax
        level.playSound(null, x, y, z, 'minecraft:block.iron_door.open', 'players', 1.0, 1.5);
        player.displayClientMessage(Text.of('§aTurret Deployed!').green(), true); //

        if (!player.isCreative()) {
            item.damageValue++;
            if (item.damageValue >= item.maxDamage) item.count = 0;
        }
    });
});

LevelEvents.tick(event => {
    const { level, server } = event;
    // Run every 10th tick (fixed: was !== which skips the 10th tick)
    if (level.isClientSide() || server.tickCount % 10 !== 0) return;
    // ^^^ Change to === 0 so it runs ON every 10th tick

    level.getEntities()
        .filter(e => e.type === 'minecraft:armor_stand' && e.tags.contains(TURRET_TAG))
        .forEach(turret => {
            const spawnTick = turret.nbt.getLong('turret_spawn_tick');
            if (spawnTick === 0) {
                turret.nbt.putLong('turret_spawn_tick', level.time);
                return;
            }

            const age = level.time - spawnTick;

            if (age >= TURRET_LIFE) {
                level.spawnParticles('minecraft:large_smoke', true, turret.x, turret.y + 1, turret.z, 0.2, 0.2, 0.2, 5, 0.05);
                turret.discard();
                return;
            }

            if (age % 20 === 0) {
                let secs = Math.floor((TURRET_LIFE - age) / 20);
                turret.customName = Text.of(`§6Sentry §7(${secs}s)`);
            }

            // SHOOT_EVERY=4 here since we only run every 10th tick (4 × 10 = 40 real ticks)
            if (age % 4 === 0) {
                let target = level.getEntities().filter(e =>
                    e.living &&
                    e.alive &&
                    !e.player &&
                    e.distanceToEntity(turret) < TURRET_RANGE
                ).first();

                if (target) {
                    let dx = target.x - turret.x;
                    let dy = (target.y + target.eyeHeight * 0.5) - (turret.y + 1.5);
                    let dz = target.z - turret.z;

                    // BUG FIX: was turret.block.createEntity — must use level
                    let arrow = level.createEntity('minecraft:arrow');
                    arrow.setPos(turret.x, turret.y + 1.5, turret.z);
                    arrow.shoot(dx, dy, dz, 2.0, 1.0);
                    arrow.nbt.merge({ pickup: 0 });
                    arrow.spawn();

                    level.playSound(null, turret.x, turret.y, turret.z, 'minecraft:entity.skeleton.shoot', 'blocks', 1.0, 1.2);
                }
            }
        });
});