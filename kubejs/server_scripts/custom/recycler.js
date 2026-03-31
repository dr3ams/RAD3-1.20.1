// Priority: 0

/**
 * ITEM RECYCLER SCRIPT - GRANULAR XP EDITION
 * Logic: Loops through every item in a stack individually.
 * Results: Summed and applied after the loop completes.
 */

// ============================================================
// --- CONFIG BLOCK --- Edit all tunable values here
// ============================================================
const RECYCLER_CONFIG = {

    // Chance per item to yield 1 XP on a successful recycle
    xpChance: 0.60,

    // Cooldown ticks on a clean run (30 = 1.5s)
    cooldownNormal: 30,

    // Cooldown ticks when any jam occurs (200 = 10s)
    cooldownJam: 200,

    // --- VALUABLE ITEMS ---
    // Items in this list trigger the jackpot roll (mastery.jackpot chance per item).
    // On jackpot: jackpotItemChance → one random item from valuableRewards, else → jackpotXpBonus XP.
    valuableItems: [
        'minecraft:diamond',
        'minecraft:netherite_ingot',
        'minecraft:netherite_scrap',
        'kubejs:gem_shard'
    ],
    valuableRewards: [
        'apotheosis:rare_material',
        'apotheosis:epic_material',
        'kubejs:gem_shard',
        'minecraft:diamond'
    ],

    // Base jackpot chance at Novice rank — scales up per rank in the mastery table
    valuableChance: 0.01,

    // When jackpot triggers: chance to give an item vs jackpotXpBonus XP
    // 0.5 = 50/50, 1.0 = always item, 0.0 = always XP
    jackpotItemChance: 0.5,

    // XP bonus when jackpot resolves to XP instead of an item
    jackpotXpBonus: 50,

    // --- UNCOMMON ITEMS ---
    // Items in this list trigger a bonus roll (mastery.uncommon chance per item).
    // On success: uncommonItemChance → one random item from uncommonRewards, else → uncommonXpBonus XP.
    uncommonItems: [
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'minecraft:emerald',
        'minecraft:lapis_lazuli',
        'minecraft:quartz',
        'undergarden:cloggrum_ingot'
    ],
    uncommonRewards: [
        'apotheosis:common_material',
        'apotheosis:uncommon_material',
        'minecraft:iron_nugget',
        'minecraft:gold_nugget',
        'apotheosis:gem_dust'
    ],

    // Base bonus chance at Novice rank — scales up per rank in the mastery table
    uncommonChance: 0.08,

    // When uncommon bonus triggers: chance to give an item vs uncommonXpBonus XP
    // 0.5 = 50/50, 1.0 = always item, 0.0 = always XP
    uncommonItemChance: 0.5,

    // XP bonus when uncommon resolves to XP instead of an item
    uncommonXpBonus: 25
}
// ============================================================

NetworkEvents.dataReceived('sync_recycler_stats', event => {
    const { data } = event
    global.recyclerData = {
        count: data.count,
        xp: data.xp
    }
})

function syncRecyclerStats(player) {
    player.sendData('sync_recycler_stats', {
        count: player.persistentData.recycledCount || 0,
        xp: player.persistentData.totalRecycledXP || 0
    })
}

PlayerEvents.loggedIn(event => {
    syncRecyclerStats(event.player)
})

ItemEvents.rightClicked('kubejs:item_recycler', event => {
    const { player, hand, level } = event

    // --- 1. PRE-FLIGHT CHECKS ---
    if (level.isClientSide()) return
    if (hand != 'MAIN_HAND') return
    if (player.getCooldowns().isOnCooldown(Item.of('kubejs:item_recycler').item)) return

    let offhandItem = player.offHandItem
    if (offhandItem.empty) {
        player.tell('§cNothing in offhand to recycle!')
        return
    }

    // --- 2. MASTERY SYSTEM ---
    if (!player.persistentData.recycledCount) player.persistentData.recycledCount = 0
    if (!player.persistentData.totalRecycledXP) player.persistentData.totalRecycledXP = 0

    let countBefore = player.persistentData.recycledCount

    // Default stats for "Novice" — both bonus chances pull from config base values
    let mastery = {
        tier: "Novice",
        fail: 0.10,
        jackpot:  RECYCLER_CONFIG.valuableChance,
        uncommon: RECYCLER_CONFIG.uncommonChance
    }

    // Rank Thresholds                                                             fail   jackpot  uncommon
    if      (countBefore >= 100000) { mastery = { tier: "Grandmaster", fail: 0.010, jackpot: 0.060, uncommon: 0.200 } }
    else if (countBefore >= 75000)  { mastery = { tier: "Mythic",      fail: 0.020, jackpot: 0.055, uncommon: 0.180 } }
    else if (countBefore >= 50000)  { mastery = { tier: "Legend",      fail: 0.030, jackpot: 0.050, uncommon: 0.160 } }
    else if (countBefore >= 40000)  { mastery = { tier: "Elite",       fail: 0.035, jackpot: 0.045, uncommon: 0.140 } }
    else if (countBefore >= 30000)  { mastery = { tier: "Artisan",     fail: 0.040, jackpot: 0.040, uncommon: 0.130 } }
    else if (countBefore >= 20000)  { mastery = { tier: "Master",      fail: 0.045, jackpot: 0.035, uncommon: 0.120 } }
    else if (countBefore >= 15000)  { mastery = { tier: "Professional",fail: 0.050, jackpot: 0.030, uncommon: 0.110 } }
    else if (countBefore >= 10000)  { mastery = { tier: "Specialist",  fail: 0.060, jackpot: 0.025, uncommon: 0.105 } }
    else if (countBefore >= 5000)   { mastery = { tier: "Expert",      fail: 0.070, jackpot: 0.020, uncommon: 0.100 } }
    else if (countBefore >= 3000)   { mastery = { tier: "Craftsman",   fail: 0.080, jackpot: 0.015, uncommon: 0.095 } }
    else if (countBefore >= 1000)   { mastery = { tier: "Journeyman",  fail: 0.090, jackpot: 0.012, uncommon: 0.090 } }

    // --- 3. ITEM TIER IDENTIFICATION ---
    let inputID = offhandItem.id
    let stackSize = offhandItem.count

    let isValuable = RECYCLER_CONFIG.valuableItems.includes(inputID)
    let isUncommon = !isValuable && RECYCLER_CONFIG.uncommonItems.includes(inputID)

    // --- 4. SIMULATION COUNTERS ---
    let totalXPGained = 0
    let valuableRewardsGained = []
    let uncommonRewardsGained = []
    let jamCount = 0

    // --- 5. CORE REWARD CALCULATION (GRANULAR LOOP) ---
    for (let i = 0; i < stackSize; i++) {
        // Roll for jam
        if (Math.random() < mastery.fail) {
            jamCount++
        } else {
            // Roll for XP
            if (Math.random() < RECYCLER_CONFIG.xpChance) {
                totalXPGained += 1
            }

            // Roll for Valuable jackpot
            if (isValuable && Math.random() < mastery.jackpot) {
                if (Math.random() < RECYCLER_CONFIG.jackpotItemChance) {
                    let pool = RECYCLER_CONFIG.valuableRewards
                    valuableRewardsGained.push(pool[Math.floor(Math.random() * pool.length)])
                } else {
                    totalXPGained += RECYCLER_CONFIG.jackpotXpBonus
                }
            }

            // Roll for Uncommon bonus (same pattern as valuable)
            if (isUncommon && Math.random() < mastery.uncommon) {
                if (Math.random() < RECYCLER_CONFIG.uncommonItemChance) {
                    let pool = RECYCLER_CONFIG.uncommonRewards
                    uncommonRewardsGained.push(pool[Math.floor(Math.random() * pool.length)])
                } else {
                    totalXPGained += RECYCLER_CONFIG.uncommonXpBonus
                }
            }
        }
    }

    // --- 6. APPLY RESULTS ---

    // Process XP
    if (totalXPGained > 0) {
        player.giveExperiencePoints(totalXPGained)
        player.persistentData.totalRecycledXP += totalXPGained
        player.setStatusMessage(Text.green(`+${totalXPGained} XP extracted from stack`))
    }

    // Process Valuable jackpot rewards
    if (valuableRewardsGained.length > 0) {
        valuableRewardsGained.forEach(id => player.give(Item.of(id)))
        player.tell(`§d§lJACKPOT! §fExtracted §e${valuableRewardsGained.length}x §fbonus material from the residue!`)
        player.playSound('minecraft:ui.toast.challenge_complete', 0.5, 2.0)
    }

    // Process Uncommon bonus rewards
    if (uncommonRewardsGained.length > 0) {
        uncommonRewardsGained.forEach(id => player.give(Item.of(id)))
        player.tell(`§6[+] §fRecovered §e${uncommonRewardsGained.length}x §fresidual material.`)
    }

    // --- 7. MACHINE JAM / COOLDOWN LOGIC ---
    if (jamCount > 0) {
        player.addItemCooldown('kubejs:item_recycler', RECYCLER_CONFIG.cooldownJam)
        player.tell(`§4[!] The machine jammed §l${jamCount}§r§4 times! Clearing gears... (10s)`)
        player.playSound('minecraft:entity.zombie.break_wooden_door', 0.5, 0.5)
        player.playSound('minecraft:block.anvil.land', 0.5, 0.5)
    } else {
        player.addItemCooldown('kubejs:item_recycler', RECYCLER_CONFIG.cooldownNormal)
    }

    // --- 8. DATA UPDATING & LEVEL UP LOGIC ---
    let successCount = stackSize - jamCount
    let countAfter = countBefore + successCount
    player.persistentData.recycledCount = countAfter
    syncRecyclerStats(player)

    const thresholds = [
        { limit: 1000,   name: "§bJourneyman" },
        { limit: 3000,   name: "§9Craftsman" },
        { limit: 5000,   name: "§3Expert" },
        { limit: 10000,  name: "§aSpecialist" },
        { limit: 15000,  name: "§2Professional" },
        { limit: 20000,  name: "§5Master" },
        { limit: 30000,  name: "§6Artisan" },
        { limit: 40000,  name: "§eElite" },
        { limit: 50000,  name: "§cLegend" },
        { limit: 75000,  name: "§4Mythic" },
        { limit: 100000, name: "§d§lGrandmaster" }
    ]

    thresholds.forEach(t => {
        if (countBefore < t.limit && countAfter >= t.limit) {
            player.tell("§b---------------------------------")
            player.tell(`§d§lCONGRATULATIONS! §fYou have reached the rank of ${t.name}§f!`)
            player.tell("§7Your efficiency has improved and your jackpot potential is higher")
            player.tell("§b---------------------------------")
            player.playSound('minecraft:ui.toast.challenge_complete', 1.0, 1.0)
            player.playSound('minecraft:entity.player.levelup', 1.0, 0.5)
            level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1, player.z, 1, 1, 1, 50, 0.1)
        }
    })

    // --- 9. FINALIZE OPERATION ---
    level.spawnParticles('minecraft:large_smoke', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05)
    player.playSound('minecraft:block.grindstone.use', 1.0, 0.8)
    player.playSound('minecraft:entity.experience_bottle.throw', 0.5, 1.5)

    let recycledName = offhandItem.displayName
    offhandItem.setCount(0)

    player.tell(Text.of(`§b[${mastery.tier}] §fProcessed: ${stackSize}x ${recycledName.string} §7(${successCount} Successes)`))
})

// --- JOURNAL SCRIPT ---
ItemEvents.rightClicked('kubejs:recycling_journal', event => {
    const { player } = event
    let total = player.persistentData.recycledCount || 0
    let totalXP = player.persistentData.totalRecycledXP || 0

    let tier = "§fNovice"
    let nextGoal = 1000
    let failRate = "10%"
    let jackpotRate = "1%"
    let uncommonRate = "8%"

    if      (total >= 100000) { tier = "§d§lGrandmaster"; nextGoal = null;   failRate = "1%";   jackpotRate = "6%";   uncommonRate = "20%" }
    else if (total >= 75000)  { tier = "§4Mythic";        nextGoal = 100000; failRate = "2%";   jackpotRate = "5.5%"; uncommonRate = "18%" }
    else if (total >= 50000)  { tier = "§cLegend";        nextGoal = 75000;  failRate = "3%";   jackpotRate = "5%";   uncommonRate = "16%" }
    else if (total >= 40000)  { tier = "§eElite";         nextGoal = 50000;  failRate = "3.5%"; jackpotRate = "4.5%"; uncommonRate = "14%" }
    else if (total >= 30000)  { tier = "§6Artisan";       nextGoal = 40000;  failRate = "4%";   jackpotRate = "4%";   uncommonRate = "13%" }
    else if (total >= 20000)  { tier = "§5Master";        nextGoal = 30000;  failRate = "4.5%"; jackpotRate = "3.5%"; uncommonRate = "12%" }
    else if (total >= 15000)  { tier = "§2Professional";  nextGoal = 20000;  failRate = "5%";   jackpotRate = "3%";   uncommonRate = "11%" }
    else if (total >= 10000)  { tier = "§aSpecialist";    nextGoal = 15000;  failRate = "6%";   jackpotRate = "2.5%"; uncommonRate = "10.5%" }
    else if (total >= 5000)   { tier = "§3Expert";        nextGoal = 10000;  failRate = "7%";   jackpotRate = "2%";   uncommonRate = "10%" }
    else if (total >= 3000)   { tier = "§9Craftsman";     nextGoal = 5000;   failRate = "8%";   jackpotRate = "1.5%"; uncommonRate = "9.5%" }
    else if (total >= 1000)   { tier = "§bJourneyman";    nextGoal = 3000;   failRate = "9%";   jackpotRate = "1.2%"; uncommonRate = "9%" }

    player.tell(Text.of("§b--- Recycling Mastery Journal ---").bold())
    player.tell(Text.of(`§7Current Rank: ${tier}`))
    if (nextGoal !== null) {
        let remaining = nextGoal - total
        player.tell(Text.of(`§7Next Tier in: §a${remaining.toLocaleString()} §7items.`))
    } else {
        player.tell(Text.of("§7Rank: §d§lMAXED OUT"))
    }
    player.tell(Text.of(`§7Total Items Processed: §e${total.toLocaleString()}`))
    player.tell(Text.of(`§7Total Experience Gained: §a${totalXP.toLocaleString()} XP`))
    player.tell(Text.of("§8> §7Current Failure Rate: §c" + failRate))
    player.tell(Text.of("§8> §7Valuable Jackpot Rate: §d" + jackpotRate))
    player.tell(Text.of("§8> §7Uncommon Bonus Rate:  §6" + uncommonRate))
    player.tell(Text.of("§b------------------------------"))
    player.playSound('minecraft:item.book.page_turn', 1.0, 1.0)
})