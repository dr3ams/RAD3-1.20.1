// Priority: 0
// Spawner XP: bonus = baseBonusXP - breaks * decayPerBreak, never below 0.
// Commands (op): /rad3 spawner_xp info [player] | reset <player> | set <player> <count> | debug

const SPAWNER_XP = {
    enabled: true,          // master switch
    debug: false,           // console logging (also toggled by /rad3 spawner_xp debug)
    baseBonusXP: 125,        // XP points on the 1st spawner
    decayPerBreak: 5,       // XP lost per spawner already broken
    maxTrackedBreaks: 25    // counter stops here (also where the pitch bottoms out)
}

const SPAWNER_XP_KEY = 'rad3SpawnerBreaks'

function spawnerXpBonusFor(breaks) {
    return Math.max(0, SPAWNER_XP.baseBonusXP - breaks * SPAWNER_XP.decayPerBreak)
}

function spawnerXpReply(ctx, msg) {
    let p = ctx.source.player
    if (p) p.tell(Text.of(msg))
    else console.log('[SpawnerXP] ' + String(msg).replace(/§./g, ''))
}

BlockEvents.broken('minecraft:spawner', event => {
    const { player, level } = event
    if (!SPAWNER_XP.enabled) return
    if (!player || level.isClientSide()) return

    // Silk touch (Apotheosis spawner moving) doesn't count
    let tool = player.mainHandItem
    if (tool.enchantments && tool.enchantments['minecraft:silk_touch']) return

    let breaks = player.persistentData.getInt(SPAWNER_XP_KEY)
    let bonus = spawnerXpBonusFor(breaks)
    let newBreaks = Math.min(breaks + 1, SPAWNER_XP.maxTrackedBreaks)
    player.persistentData.putInt(SPAWNER_XP_KEY, newBreaks)

    if (bonus > 0) player.giveExperiencePoints(bonus)

    // Pitch goes 1.5 -> 0.5 as the counter fills: bright at first, dull once drained
    let pitch = 1.5 - breaks / SPAWNER_XP.maxTrackedBreaks
    player.playSound('minecraft:entity.experience_orb.pickup', 0.8, pitch)

    if (bonus > 0) player.setStatusMessage(`§b+${bonus} bonus XP §8(${newBreaks}/${SPAWNER_XP.maxTrackedBreaks})`)

    if (SPAWNER_XP.debug) console.log(`[SpawnerXP] ${player.username} broke spawner #${newBreaks} -> +${bonus} XP`)
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    function doInfo(ctx, target) {
        if (!target) { spawnerXpReply(ctx, '§cNo player specified.'); return 0 }
        let breaks = target.persistentData.getInt(SPAWNER_XP_KEY)
        spawnerXpReply(ctx, `§b[SpawnerXP] §f${target.username}§7: broken §f${breaks}§7/${SPAWNER_XP.maxTrackedBreaks}, next bonus §f${spawnerXpBonusFor(breaks)} XP§7, enabled: §f${SPAWNER_XP.enabled}§7, debug: §f${SPAWNER_XP.debug}`)
        return 1
    }

    event.register(Commands.literal('rad3')
        .then(Commands.literal('spawner_xp')
            .requires(src => src.hasPermission(2))

            .then(Commands.literal('info')
                .executes(ctx => doInfo(ctx, ctx.source.player))
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .executes(ctx => doInfo(ctx, Arguments.PLAYER.getResult(ctx, 'player')))
                )
            )

            .then(Commands.literal('reset')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .executes(ctx => {
                        let target = Arguments.PLAYER.getResult(ctx, 'player')
                        target.persistentData.putInt(SPAWNER_XP_KEY, 0)
                        spawnerXpReply(ctx, `§b[SpawnerXP] §7Reset counter for §f${target.username}`)
                        return 1
                    })
                )
            )

            .then(Commands.literal('set')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('count', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            let target = Arguments.PLAYER.getResult(ctx, 'player')
                            let count = Math.max(0, Math.min(Arguments.INTEGER.getResult(ctx, 'count'), SPAWNER_XP.maxTrackedBreaks))
                            target.persistentData.putInt(SPAWNER_XP_KEY, count)
                            spawnerXpReply(ctx, `§b[SpawnerXP] §7Set §f${target.username}§7 to §f${count}§7 breaks`)
                            return 1
                        })
                    )
                )
            )

            .then(Commands.literal('debug')
                .executes(ctx => {
                    SPAWNER_XP.debug = !SPAWNER_XP.debug
                    spawnerXpReply(ctx, `§b[SpawnerXP] §7Debug logging: §f${SPAWNER_XP.debug}`)
                    return 1
                })
            )
        )
    )
})