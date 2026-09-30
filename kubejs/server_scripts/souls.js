// Priority: 0

/**
 * SOUL CAPTURE & DISENCHANTMENT SCRIPT
 *
 * Capture souls from kills - hold the Soul Jar in your OFFHAND when you land
 * the killing blow on a listed entity, chance to store a soul in the jar.
 *
 * Right-click the jar in your MAIN HAND to release one soul (ghost effect),
 * or sneak + right-click to check your jar/mastery stats.
 *
 * Disenchant gear by holding a Book/Tome in MAIN HAND and the enchanted item
 * in OFFHAND, then right-clicking. A Soul Jar with enough souls just needs to
 * be somewhere in your inventory. Strips enchants onto books, keeps the item.
 *
 * Mastery: the more souls you've EVER captured (lifetime total), the better
 * your capture chance gets, AND the better your chance to not spend souls on
 * a successful disenchant. One table drives both.
 */

// ============================================================
// --- CONFIG BLOCK --- Edit all tunable values here
// ============================================================
const SOUL_CONFIG = {

    // Max souls the jar can hold
    capacity: 10,

    // Which entities drop souls and their BASE capture chance
    // (this gets multiplied by your mastery bonus below)
    sources: {
        'minecraft:zombie':          0.10,
        'minecraft:skeleton':        0.10,
        'minecraft:wither_skeleton': 0.06,
        'minecraft:evoker':          0.08,
        'minecraft:warden':          0.15
        // TODO: verify every entity ID in JEI before shipping, add more as needed; adjust chances
    },

    disenchantItems: {
        'kubejs:book_of_disenchant_lesser': {
            soulCost: 1,
            mode: 'random',      // strips 1..maxRandomStrip enchants
            maxRandomStrip: 2,
            consumesItem: false, // book survives, only souls are spent
            failChance: 0.35    // 20% chance the whole ritual fizzles - nothing extracted, souls still spent
        },
        'kubejs:book_of_disenchant_greater': {
            soulCost: 2,
            mode: 'guaranteed',  // strips exactly guaranteedCount (or fewer if item has less)
            guaranteedCount: 2,
            consumesItem: false,
            failChance: 0.20     // pricier tier, more reliable - 10% fail chance
        },
        'kubejs:tome_of_soul_unraveling': {
            soulCost: 4,
            mode: 'all_combined', // strips every enchantment onto ONE combined book
            consumesItem: true    // tome is used up, does not come back
        },
        'kubejs:tome_of_scattered_souls': {
            soulCost: 8,
            mode: 'all_separate', // strips every enchantment, but onto SEPARATE books
            consumesItem: true
        }
    },

    // --- The four mastery perks below ALL follow the same shape:
    // unlockAt         = lifetime souls needed before the perk can trigger at all
    // baseChance       = trigger chance the moment it unlocks
    // chancePerCapture = how much the chance grows per soul captured after unlocking
    // maxChance        = hard cap, so it keeps climbing but never becomes guaranteed
    // getPerkChance() below turns these into an actual chance for any given total.
    // Numbers are a starting guess - balance-test and adjust freely.

    // Ghostly Aftermath: successful capture has a chance to grant a brief defensive buff.
    ghostlyAftermath: {
        unlockAt: 100,
        baseChance: 0.10,
        chancePerCapture: 0.0005,
        maxChance: 0.65,
        durationTicks: 600, // 30s
        effects: ['minecraft:resistance']
    },

    // Ectoplasmic Tear: successful capture has a chance to also drop a bonus item in the world.
    ectoplasmicTear: {
        unlockAt: 200,
        baseChance: 0.05,
        chancePerCapture: 0.0001,
        maxChance: 0.25,
        drops: ['minecraft:gold_nugget', 'minecraft:bone', 'minecraft:rotten_flesh', 'kubejs:gem_shard']
    },

    // Dense Extraction: killing a listed entity has a chance to deposit a bonus batch of souls.
    denseExtraction: {
        unlockAt: 500,
        baseChance: 0.20,
        chancePerCapture: 0.0003,
        maxChance: 0.60,
        entities: ['minecraft:warden', 'minecraft:evoker'],
        minBonus: 3,
        maxBonus: 5
    },

    // Artifact Resonance: a conserved disenchant has a chance to also manifest a bonus item.
    artifactResonance: {
        unlockAt: 1000,
        baseChance: 0.05,
        chancePerCapture: 0.0005,
        maxChance: 0.25,
        rewards: ['apotheosis:epic_material', 'minecraft:nether_star', 'kubejs:gem_shard']
    }
}
// ============================================================


// ============================================================
// --- MASTERY TABLE --- keyed off TOTAL souls ever captured.
// Same rank-table pattern as the recycler script.
// captureMult    = multiplier on the base capture chance in sources{}
// conserveChance = chance a successful disenchant refunds its soul cost
// capacityBonus  = extra soul slots added on top of SOUL_CONFIG.capacity
// ============================================================
function getSoulMastery(totalCaptured) {
    let mastery = { tier: "Novice", captureMult: 1.00, conserveChance: 0.00, capacityBonus: 0 }

    if      (totalCaptured >= 2000) { mastery = { tier: "§d§lSoul Warden",  captureMult: 2.00, conserveChance: 0.50, capacityBonus: 200 } }
    else if (totalCaptured >= 1500) { mastery = { tier: "§5Reaper",        captureMult: 1.85, conserveChance: 0.45, capacityBonus: 150 } }
    else if (totalCaptured >= 1000) { mastery = { tier: "§9Soulbound",     captureMult: 1.70, conserveChance: 0.40, capacityBonus: 100 } }
    else if (totalCaptured >= 750)  { mastery = { tier: "§3Necromancer",   captureMult: 1.55, conserveChance: 0.35, capacityBonus: 75 } }
    else if (totalCaptured >= 500)  { mastery = { tier: "§aSpirit Tamer",  captureMult: 1.40, conserveChance: 0.30, capacityBonus: 50 } }
    else if (totalCaptured >= 350)  { mastery = { tier: "§2Wraithcaller",  captureMult: 1.30, conserveChance: 0.25, capacityBonus: 35 } }
    else if (totalCaptured >= 200)  { mastery = { tier: "§6Ghostwalker",   captureMult: 1.20, conserveChance: 0.20, capacityBonus: 20 } }
    else if (totalCaptured >= 100)  { mastery = { tier: "§eSoulcatcher",   captureMult: 1.15, conserveChance: 0.15, capacityBonus: 10 } }
    else if (totalCaptured >= 50)   { mastery = { tier: "§bApprentice",    captureMult: 1.10, conserveChance: 0.10, capacityBonus: 5 } }
    else if (totalCaptured >= 10)   { mastery = { tier: "§fInitiate",      captureMult: 1.05, conserveChance: 0.05, capacityBonus: 3 } }

    // --- Perk chances - each is 0 until its unlockAt, then climbs from baseChance
    // toward maxChance as totalCaptured grows. Computed once here so every call site
    // (capture hook, disenchant hook, stats screen) just reads a ready number instead
    // of re-deriving it. See the SOUL_CONFIG.<perk> blocks above for the raw numbers.
    mastery.ghostlyAftermathChance  = getPerkChance(totalCaptured, SOUL_CONFIG.ghostlyAftermath)
    mastery.ectoplasmicTearChance   = getPerkChance(totalCaptured, SOUL_CONFIG.ectoplasmicTear)
    mastery.denseExtractionChance   = getPerkChance(totalCaptured, SOUL_CONFIG.denseExtraction)
    mastery.artifactResonanceChance = getPerkChance(totalCaptured, SOUL_CONFIG.artifactResonance)

    return mastery
}

// Turns a perk's unlockAt/baseChance/chancePerCapture/maxChance config into an actual
// chance for this player's lifetime total. Returns 0 before the perk is unlocked.
function getPerkChance(totalCaptured, perkConfig) {
    if (totalCaptured < perkConfig.unlockAt) return 0
    let extra = (totalCaptured - perkConfig.unlockAt) * perkConfig.chancePerCapture
    return Math.min(perkConfig.baseChance + extra, perkConfig.maxChance)
}

// "§8🔒 Ghostly Aftermath (unlocks at 100 souls)" before unlock,
// "§7Ghostly Aftermath: §f42% §8(caps at 75%)" after, so the climb stays visible.
// Takes the already-computed chance from mastery, doesn't recalculate anything.
function perkStatusLine(name, perkConfig, chance, total) {
    if (total < perkConfig.unlockAt) {
        return `§8🔒 ${name} §8(unlocks at ${perkConfig.unlockAt} souls)`
    }
    let pct = Math.round(chance * 100)
    let cap = Math.round(perkConfig.maxChance * 100)
    return `§7${name}: §f${pct}% §8(caps at ${cap}%)`
}


// --- HELPERS: read/write the soul count stored in the jar's NBT ---
function getSoulCount(jar) {
    let nbt = jar.nbt
    return nbt ? nbt.getInt('soul_count') : 0
}

function setSoulCount(jar, count) {
    jar.setNbt({ soul_count: count }) // setNbt accepts a plain object directly, no need to build an NBT string
}

// Simple shuffle helper used when picking random enchants to strip
function shuffleArray(arr) {
    let a = arr.slice()
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = a[i]
        a[i] = a[j]
        a[j] = temp
    }
    return a
}

// Turns 'minecraft:wither_skeleton' into 'Wither Skeleton', same for enchant ids
function formatId(id) {
    let str = String(id) // force a real JS string - entity.type/enchant ids can come through as
                          // Java Strings, whose .charAt() returns a Java char, not a JS string
    let name = str.includes(':') ? str.split(':')[1] : str
    return name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

// Mastery rank thresholds, used to draw the progress bar in the sneak-click stats screen.
// Keep this in sync with the cutoffs inside getSoulMastery() above.
const MASTERY_THRESHOLDS = [10, 50, 100, 200, 350, 500, 750, 1000, 1500, 2000]

// Builds a 10-segment "[||||....]" style progress bar between two thresholds
function buildProgressBar(current, prevGoal, nextGoal) {
    let pct = (current - prevGoal) / (nextGoal - prevGoal)
    let progress = pct * 10
    let barColor = pct < 0.3 ? "§c" : (pct < 0.7 ? "§e" : "§a")
    let bar = ""
    for (let i = 0; i < 10; i++) {
        bar += (i < progress) ? `${barColor}|` : "§8."
    }
    return bar
}

// --- LEVEL UP & PERK UNLOCK ANNOUNCEMENT ---
function checkMasteryRankUp(player, previousTotal, newTotal, level) {
    let oldRank = getSoulMastery(previousTotal)
    let newRank = getSoulMastery(newTotal)

    // 1. Check for Perk Unlocks
    const PERK_LIST = [
        { key: 'ghostlyAftermath',  name: 'Ghostly Aftermath',  cfg: SOUL_CONFIG.ghostlyAftermath,  desc: 'Chance for a protective ward on capture' },
        { key: 'ectoplasmicTear',   name: 'Ectoplasmic Tear',   cfg: SOUL_CONFIG.ectoplasmicTear,   desc: 'Chance to tear physical loot from the void' },
        { key: 'denseExtraction',   name: 'Dense Extraction',   cfg: SOUL_CONFIG.denseExtraction,   desc: 'Improved soul harvests from boss-tier entities' },
        { key: 'artifactResonance', name: 'Artifact Resonance', cfg: SOUL_CONFIG.artifactResonance, desc: 'Conserved rituals manifest rare artifacts' }
    ]

    let unlockedPerks = []
    PERK_LIST.forEach(perk => {
        if (previousTotal < perk.cfg.unlockAt && newTotal >= perk.cfg.unlockAt) {
            unlockedPerks.push(perk)
        }
    })

    // 2. Main Rank-Up Trigger
    if (oldRank.tier !== newRank.tier) {
        let multText = `x${newRank.captureMult.toFixed(2)}`
        let conserveText = `${Math.round(newRank.conserveChance * 100)}%`

        player.tell(Text.of("§b---------------------------------"))
        player.tell(Text.of(`§d§lMASTERY ATTAINED! §fYou have reached §r${newRank.tier}§f!`))
        player.tell(Text.of(`§7Jar Capacity: §f+${newRank.capacityBonus} §8| §7Capture Rate: §f${multText} §8| §7Conserve: §f${conserveText}`))

        // If a perk unlocked at this exact threshold, announce it inside the banner
        if (unlockedPerks.length > 0) {
            unlockedPerks.forEach(p => {
                player.tell(Text.of(` §6✦ Perk Unlocked: §e${p.name}§r §7- ${p.desc}`))
            })
        }
        player.tell(Text.of("§b---------------------------------"))

        // Audio & Visual Effects
        player.playSound('minecraft:ui.toast.challenge_complete', 0.8, 1.2)
        player.playSound('minecraft:entity.player.levelup', 1.0, 0.7)
        player.level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1, player.z, 0.8, 0.8, 0.8, 40, 0.1)
    } 
    // Fallback: in case a perk unlocks at a soul count that isn't a tier boundary
    else if (unlockedPerks.length > 0) {
        unlockedPerks.forEach(p => {
            player.tell(Text.of("§b---------------------------------"))
            player.tell(Text.of(`§6§l✦ PERK AWAKENED: §e${p.name}§r!`))
            player.tell(Text.of(`§7${p.desc}`))
            player.tell(Text.of("§b---------------------------------"))
        })
        player.playSound('minecraft:ui.toast.challenge_complete', 0.8, 1.4)
    }
}

// --- SYNC TO CLIENT --- tooltips run client-side and can't read persistentData
// directly, so push the mastery-relevant number over, same pattern as recycler.js.
function syncSoulStats(player) {
    player.sendData('sync_soul_stats', {
        totalCaptured: player.persistentData.totalSoulsCaptured || 0
    })
}

PlayerEvents.loggedIn(event => {
    syncSoulStats(event.player)
})


// ============================================================
// --- 1. SOUL CAPTURE ---
// Must be holding the Soul Jar in your OFFHAND when the kill lands.
// ============================================================
EntityEvents.death(event => {
    const { entity, source, level } = event // NOTE: verify EntityEvents.death exposes `level` - used by Ectoplasmic Tear below
    let killer = source.actual // matches the convention already used in example.js's guard AI hooks
    if (!killer || !killer.isPlayer()) return

    let jar = killer.offHandItem
    if (jar.id != 'kubejs:soul_jar') return // not holding the jar, nothing happens

    let baseChance = SOUL_CONFIG.sources[entity.type]
    if (!baseChance) return // this entity doesn't drop souls

    if (!killer.persistentData.totalSoulsCaptured) killer.persistentData.totalSoulsCaptured = 0
    let totalSouls = killer.persistentData.totalSoulsCaptured // single source of truth - same property every other hook reads
    let mastery = getSoulMastery(totalSouls)

    let count = getSoulCount(jar)
    let capacity = SOUL_CONFIG.capacity + mastery.capacityBonus
    if (count >= capacity) {
		killer.tell(Text.of(`The Soul Jar hums violently—it cannot contain more essence. (${count}/${capacity})`).gray().italic())
		return
    }

    let chance = baseChance * mastery.captureMult
    if (Math.random() > chance) return // roll failed, no soul this time

    // Dense Extraction: boss-tier kills have a (growing) chance to deposit a bonus batch
    let soulsRolled = 1
    let denseTriggered = false
    if (SOUL_CONFIG.denseExtraction.entities.includes(entity.type) && Math.random() < mastery.denseExtractionChance) {
        let d = SOUL_CONFIG.denseExtraction
        soulsRolled += d.minBonus + Math.floor(Math.random() * (d.maxBonus - d.minBonus + 1))
        denseTriggered = true
    }

    let newCount = Math.min(count + soulsRolled, capacity) // clamp to capacity, can't overfill
    let soulsGained = newCount - count
    setSoulCount(jar, newCount)
	
    let newTotal = totalSouls + soulsGained
    killer.persistentData.totalSoulsCaptured = newTotal

    syncSoulStats(killer)

	// --- MASTERY LEVEL UP ANNOUNCEMENT ---
	checkMasteryRankUp(killer, totalSouls, newTotal)

    if (denseTriggered) {
        killer.tell(Text.of(`§5§l✦ Dense Extraction Perk! §d+${soulsGained} souls §7from a boss-tier kill!`))
    }
    killer.tell(Text.of(`§d✦ A cold wind rushes into the jar. Captured ${soulsGained > 1 ? soulsGained + ' souls' : 'a soul'} from §f${formatId(entity.type)}§d! §7(${newCount}/${capacity}) §8[${mastery.tier}§8]`))

    // Ghostly Aftermath: capture has a (growing) chance to grant a brief defensive buff
    if (Math.random() < mastery.ghostlyAftermathChance) {
        let fx = SOUL_CONFIG.ghostlyAftermath
        fx.effects.forEach(effectId => {
            killer.potionEffects.add(effectId, fx.durationTicks, 0, false, true)
        })
        killer.tell(Text.of('§7✦ Ghostly Aftermath Perk: A protective chill wraps around you...').italic())
    }

    // Ectoplasmic Tear: (growing) chance to also pull a bonus item into the world
    if (Math.random() < mastery.ectoplasmicTearChance) {
        let tear = SOUL_CONFIG.ectoplasmicTear
        let dropId = tear.drops[Math.floor(Math.random() * tear.drops.length)]
        level.spawnItem(Item.of(dropId), killer.x, killer.y + 1, killer.z) // NOTE: verify spawnItem() is the right level method in-game
        killer.tell(Text.of('§7✦ Ectoplasmic Tear Perk: The magical vacuum tears something loose from the void...').italic())
    }
})


// ============================================================
// --- 2. SOUL JAR INTERACTION (main hand only) ---
// Plain right-click: release one soul (ghost effect).
// Sneak + right-click: check jar contents and mastery rank.
// ============================================================
ItemEvents.rightClicked('kubejs:soul_jar', event => {
    const { player, hand, level, item } = event

    if (level.isClientSide()) return
    if (hand != 'MAIN_HAND') return // avoid double-firing when the jar is also in offhand

    let count = getSoulCount(item)

    // --- Sneak = show stats, don't consume anything ---
    if (player.isCrouching()) {
        if (!player.persistentData.totalSoulsCaptured) player.persistentData.totalSoulsCaptured = 0
        let total = player.persistentData.totalSoulsCaptured
        let mastery = getSoulMastery(total)
        let capacity = SOUL_CONFIG.capacity + mastery.capacityBonus

        // Find surrounding thresholds for the progress bar
        let nextGoal = MASTERY_THRESHOLDS.find(t => t > total)
        let prevGoal = 0
        for (let g of MASTERY_THRESHOLDS) { if (g <= total) prevGoal = g }

        player.tell(Text.of("§b--- Soul Jar Journal---").bold())
        player.tell(`§7Souls stored: §f${count}/${capacity} §8(base ${SOUL_CONFIG.capacity} +${mastery.capacityBonus})`)
        player.tell(`§7Mastery Rank: ${mastery.tier}`)

        if (nextGoal) {
            let bar = buildProgressBar(total, prevGoal, nextGoal)
            player.tell(`§7Next Rank: §8[${bar}§8] §f${total}/${nextGoal}`)
        } else {
            player.tell("§d§lMAX RANK REACHED")
        }

        player.tell(`§7Capture Bonus: §fx${mastery.captureMult}  §7Conserve Chance: §f${Math.round(mastery.conserveChance * 100)}%`)
        player.tell(`§7Lifetime souls captured: §e${total.toLocaleString()}`)

        player.tell(`§6✦ Perks §8(chance keeps rising with mastery):`)
        player.tell(perkStatusLine('Ghostly Aftermath', SOUL_CONFIG.ghostlyAftermath, mastery.ghostlyAftermathChance, total))
        player.tell(perkStatusLine('Ectoplasmic Tear', SOUL_CONFIG.ectoplasmicTear, mastery.ectoplasmicTearChance, total))
        player.tell(perkStatusLine('Dense Extraction', SOUL_CONFIG.denseExtraction, mastery.denseExtractionChance, total))
        player.tell(perkStatusLine('Artifact Resonance', SOUL_CONFIG.artifactResonance, mastery.artifactResonanceChance, total))

        player.tell("§b------------------------")
        return
    }

    // --- Normal click = release one soul ---
    if (count <= 0) {
        player.tell('§7The jar is empty.')
        return
    }

    count--
    setSoulCount(item, count)

    // Cheap "ghost" effect - swap for a real mob later with EntityJS if wanted
    level.spawnParticles('minecraft:soul', true, player.x, player.y + 1, player.z, 0.3, 0.6, 0.3, 20, 0.05)
    player.playSound('minecraft:entity.vex.ambient', 0.6, 0.8)
    player.tell(`§7A pale spirit rises from the jar and dissolves into ash...`)
})


// Spends (or, per mastery's conserveChance, doesn't spend) the soul cost for a disenchant
// attempt. Used for both a successful extraction AND a failed one - the ritual still
// costs its souls either way, only the failChance roll decides whether it does anything.
function resolveSoulSpend(player, jar, jarSlot, count, config, mastery) {
    if (Math.random() < mastery.conserveChance) {
        player.tell(`§d✦ [${mastery.tier}§d✦] Your mastery over souls spared the jar - no souls spent! §7(${count} left)`)

        // Artifact Resonance: conserving souls has a (growing) chance to manifest a bonus item
        if (Math.random() < mastery.artifactResonanceChance) {
            let pool = SOUL_CONFIG.artifactResonance.rewards
            let rewardId = pool[Math.floor(Math.random() * pool.length)]
            player.give(Item.of(rewardId))
            player.tell(Text.of(`§6§l✦ ARTIFACT RESONANCE! §fThe spared souls converge into §e${formatId(rewardId)}§f!`))
            player.playSound('minecraft:ui.toast.challenge_complete', 0.5, 2.0)
        }
    } else {
        let remaining = count - config.soulCost
        setSoulCount(jar, remaining)
        player.inventory.setStackInSlot(jarSlot, jar) // NOTE: quick-verify this call exists; if not, jar.setNbt() above may already persist on its own
        player.tell(`§7-The ritual consumes ${config.soulCost} souls... §8(${remaining} left)`)
    }
}

// ============================================================
// --- 3. DISENCHANTING (right-click, no crafting table) ---
// Hold the Book/Tome in MAIN HAND, the enchanted item in OFFHAND, right-click.
// The Soul Jar just needs to be SOMEWHERE in your inventory with enough souls -
// you don't have to hold it.
// ============================================================
ItemEvents.rightClicked(event => {
    const { item, player, hand, level } = event

    if (level.isClientSide()) return
    if (hand != 'MAIN_HAND') return

    let config = SOUL_CONFIG.disenchantItems[item.id]
    if (!config) return // not a disenchant item, ignore

    let target = player.offHandItem
    if (target.empty || target.id == item.id) {
        player.tell('§7Hold the item to disenchant in your offhand.')
        return
    }

    // Find a soul jar anywhere in the main inventory (36 slots, 0-35) with enough charge
    let jarSlot = -1
    for (let i = 0; i < 36; i++) {
        let stack = player.inventory.getStackInSlot(i)
        if (stack.id == 'kubejs:soul_jar' && getSoulCount(stack) >= config.soulCost) {
            jarSlot = i
            break
        }
    }
    if (jarSlot == -1) {
        player.tell(`§cNeed a Soul Jar with at least ${config.soulCost} souls in your inventory.`)
        return
    }

    let jar = player.inventory.getStackInSlot(jarSlot)
    let count = getSoulCount(jar)

    let enchants = Object.entries(target.enchantments || {})
    if (enchants.length == 0) {
        player.tell('§7That item has no enchantments.')
        return
    }

    // Mastery is needed either way (success or failure both spend/conserve souls), so compute it up front
    if (!player.persistentData.totalSoulsCaptured) player.persistentData.totalSoulsCaptured = 0
    let mastery = getSoulMastery(player.persistentData.totalSoulsCaptured)

    // --- Ritual failure roll - only lesser/greater have failChance set, tomes default to 0 ---
    let failChance = config.failChance || 0
    if (Math.random() < failChance) {
        player.tell(Text.of('§c✦ The ritual falters! §7No enchantments were extracted.').italic())
        resolveSoulSpend(player, jar, jarSlot, count, config, mastery)
        if (config.consumesItem) {
            item.setCount(item.count - 1)
        }
        player.playSound('minecraft:entity.villager.no', 0.7, 0.8)
        return // target item is untouched - nothing stripped, nothing given
    }

    // --- Decide which enchants get stripped based on the book's mode ---
    let toStrip = []
    if (config.mode == 'random') {
        let n = 1 + Math.floor(Math.random() * config.maxRandomStrip)
        toStrip = shuffleArray(enchants).slice(0, Math.min(n, enchants.length))
    } else if (config.mode == 'guaranteed') {
        toStrip = shuffleArray(enchants).slice(0, Math.min(config.guaranteedCount, enchants.length))
    } else {
        toStrip = enchants // 'all_combined' or 'all_separate' - both strip everything
    }

    // Give the player enchanted book(s) for what's being stripped.
    // 'all_combined' merges everything onto ONE book. Every other mode
    // (random, guaranteed, all_separate) gives a separate book per enchant.
    // enchant() returns a NEW stack rather than mutating in place - must capture it.
    if (config.mode == 'all_combined') {
        let book = Item.of('minecraft:enchanted_book')
        toStrip.forEach(entry => {
            book = book.enchant(entry[0], entry[1])
        })
        player.give(book)
    } else {
        toStrip.forEach(entry => {
            let book = Item.of('minecraft:enchanted_book')
            book = book.enchant(entry[0], entry[1])
            player.give(book)
        })
    }

    // There's no removeEnchantment() on ItemStack in this KubeJS version, so instead:
    // wipe ALL enchants off the item, then re-apply only the ones NOT being stripped.
    // Same enchant()-returns-a-copy issue applies here, so reassign target each time too.
    let stripIds = toStrip.map(entry => entry[0])
    let keep = enchants.filter(entry => !stripIds.includes(entry[0]))

    if (target.nbt) target.nbt.remove('Enchantments')
    keep.forEach(entry => {
        target = target.enchant(entry[0], entry[1])
    })

    // Write the (possibly reassigned) target back into the offhand slot to be safe,
    // in case enchant() really did give us a disconnected copy rather than mutating live.
    player.offHandItem = target

    // --- Mastery: chance to not spend the souls at all (same helper the failure path above uses) ---
    resolveSoulSpend(player, jar, jarSlot, count, config, mastery)

    // Consume the book/tome if it's a single-use item (tome). Reusable books aren't touched.
    if (config.consumesItem) {
        item.setCount(item.count - 1)
    }

    // List exactly what got stripped, not just a count
    let strippedList = toStrip.map(entry => `${formatId(entry[0])} ${entry[1]}`).join('§7, §f')
    player.tell(`§aStripped: §f${strippedList}`)
    player.playSound('minecraft:entity.wither.ambient', 0.5, 1.6)
})