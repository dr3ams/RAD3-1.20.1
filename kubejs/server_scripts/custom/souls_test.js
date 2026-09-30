ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('soultest')
            .requires(s => s.hasPermission(2))
            // 1. /soultest set <amount> -> Instantly sets captured souls & syncs client
            .then(Commands.literal('set')
                .then(Commands.argument('amount', Arguments.INTEGER.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player
                        let amount = Arguments.INTEGER.getResult(ctx, 'amount')
                        let oldTotal = player.persistentData.getInt('totalSoulsCaptured') || 0

                        player.persistentData.putInt('totalSoulsCaptured', amount)
                        syncSoulStats(player)
                        checkMasteryRankUp(player, oldTotal, amount)

                        player.tell(`§a[SoulTest] Total souls set to: §e${amount}`)
                        return 1
                    })
                )
            )
            // 2. /soultest filljar -> Maxes out the souls in your held Soul Jar
            .then(Commands.literal('filljar')
                .executes(ctx => {
                    let player = ctx.source.player
                    let jar = player.mainHandItem.id == 'kubejs:soul_jar' ? player.mainHandItem : player.offHandItem

                    if (jar.id != 'kubejs:soul_jar') {
                        player.tell('§cHold a Soul Jar in either hand!')
                        return 0
                    }

                    let total = player.persistentData.getInt('totalSoulsCaptured') || 0
                    let mastery = getSoulMastery(total)
                    let maxCap = SOUL_CONFIG.capacity + mastery.capacityBonus

                    setSoulCount(jar, maxCap)
                    player.tell(`§a[SoulTest] Jar filled to maximum capacity: §d${maxCap}/${maxCap}`)
                    return 1
                })
            )
            // 3. /soultest simulate_rankup -> Triggers the rank-up effect directly
            .then(Commands.literal('simulate_rankup')
                .executes(ctx => {
                    let player = ctx.source.player
                    let total = player.persistentData.getInt('totalSoulsCaptured') || 0
                    checkMasteryRankUp(player, 0, total > 0 ? total : 500)
                    return 1
                })
            )
    )
})