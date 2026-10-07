/**
 * SOUL SYSTEM - TOOLTIPS (CLIENT SCRIPT)
 * Client-side only - tooltips don't exist on the server, and server/client
 * script contexts don't share state, so this stays a separate file.
 */

// Init global sync data
if (!global.soulData) {
    global.soulData = { totalCaptured: 0 }
}

NetworkEvents.dataReceived('sync_soul_stats', event => {
    global.soulData = {
        totalCaptured: event.data.totalCaptured || 0
    }
})

// Which random attribute the player rolled (unique per player, so unlike the
// perks it has to be synced separately rather than derived from totalCaptured alone)
if (!global.soulAttrData) {
    global.soulAttrData = { secondAttribute: '' }
}

NetworkEvents.dataReceived('sync_soul_attr_test', event => {
    global.soulAttrData = {
        secondAttribute: event.data.secondAttribute || ''
    }
})

// Duplicated from ATTR_CONFIG.<x>.perTier in soul_system.js - keep in sync by hand
const ATTR_PERTIER_CLIENT = {
    maxHealth: [
        { at: 100,  value: 1 },
        { at: 200,  value: 2 },
        { at: 350,  value: 3 },
        { at: 500,  value: 4 },
        { at: 750,  value: 5 },
        { at: 1000, value: 6 },
        { at: 1500, value: 7 },
        { at: 2000, value: 8 }
    ],
    secondAttribute: [
        { at: 350,  value: 0.01 },
        { at: 500,  value: 0.02 },
        { at: 750,  value: 0.03 },
        { at: 1000, value: 0.04 },
        { at: 1500, value: 0.05 },
        { at: 2000, value: 0.05 }
    ]
}

function getAttrTierValue(total, perTierList) {
    let value = 0
    perTierList.forEach(tier => {
        if (total >= tier.at) value = tier.value
    })
    return value
}

// Duplicated from soul_system.js's mastery table - keep these two in sync manually,

// Same unlockAt/baseChance/chancePerCapture/maxChance shape as SOUL_CONFIG in soul_system.js -
// keep these two in sync manually if you tune the numbers on the server side.
const SOUL_PERKS_CLIENT = {
    ghostlyAftermath:  { label: 'Ghostly Aftermath',  unlockAt: 100,  baseChance: 0.10, chancePerCapture: 0.0005, maxChance: 0.50 },
    ectoplasmicTear:   { label: 'Ectoplasmic Tear',   unlockAt: 200,  baseChance: 0.05, chancePerCapture: 0.0001, maxChance: 0.25 },
    denseExtraction:   { label: 'Dense Extraction',   unlockAt: 500,  baseChance: 0.20, chancePerCapture: 0.0003, maxChance: 0.60 },
    artifactResonance: { label: 'Artifact Resonance', unlockAt: 1000, baseChance: 0.05, chancePerCapture: 0.0005, maxChance: 0.25 }
}

function getPerkChanceClient(total, perk) {
    if (total < perk.unlockAt) return 0
    let extra = (total - perk.unlockAt) * perk.chancePerCapture
    return Math.min(perk.baseChance + extra, perk.maxChance)
}

// Same consolidation as the server's getSoulMastery() - tier stats AND all four perk
// chances come out of one call, instead of being computed separately at each use site.
function getSoulMasteryClient(total) {
    let mastery = { tier: "§fNovice", captureMult: 1.00, conserveChance: 0, capacityBonus: 0 }

    if      (total >= 2000) { mastery = { tier: "§d§lSoul Warden",  captureMult: 2.00, conserveChance: 50, capacityBonus: 200 } }
    else if (total >= 1500) { mastery = { tier: "§5Reaper",        captureMult: 1.85, conserveChance: 45, capacityBonus: 150 } }
    else if (total >= 1000) { mastery = { tier: "§9Soulbound",     captureMult: 1.70, conserveChance: 40, capacityBonus: 100 } }
    else if (total >= 750)  { mastery = { tier: "§3Necromancer",   captureMult: 1.55, conserveChance: 35, capacityBonus: 75 } }
    else if (total >= 500)  { mastery = { tier: "§aSpirit Tamer",  captureMult: 1.40, conserveChance: 30, capacityBonus: 50 } }
    else if (total >= 350)  { mastery = { tier: "§2Wraithcaller",  captureMult: 1.30, conserveChance: 25, capacityBonus: 35 } }
    else if (total >= 200)  { mastery = { tier: "§6Ghostwalker",   captureMult: 1.20, conserveChance: 20, capacityBonus: 20 } }
    else if (total >= 100)  { mastery = { tier: "§eSoulcatcher",   captureMult: 1.15, conserveChance: 15, capacityBonus: 10 } }
    else if (total >= 50)   { mastery = { tier: "§bApprentice",    captureMult: 1.10, conserveChance: 10, capacityBonus: 5 } }
    else if (total >= 10)   { mastery = { tier: "§fInitiate",      captureMult: 1.05, conserveChance: 5,  capacityBonus: 3 } }

    mastery.ghostlyAftermathChance  = getPerkChanceClient(total, SOUL_PERKS_CLIENT.ghostlyAftermath)
    mastery.ectoplasmicTearChance   = getPerkChanceClient(total, SOUL_PERKS_CLIENT.ectoplasmicTear)
    mastery.denseExtractionChance   = getPerkChanceClient(total, SOUL_PERKS_CLIENT.denseExtraction)
    mastery.artifactResonanceChance = getPerkChanceClient(total, SOUL_PERKS_CLIENT.artifactResonance)

    return mastery
}

const SOUL_MASTERY_THRESHOLDS = [10, 50, 100, 200, 350, 500, 750, 1000, 1500, 2000]
const SOUL_BASE_CAPACITY = 10 // must match SOUL_CONFIG.capacity in soul_system.js

// Locked: "🔒 Ghostly Aftermath (unlocks at 100 souls)"
// Unlocked: "Ghostly Aftermath: 42% (caps at 75%)" - takes the pre-computed chance, no recalculation
function perkLine(perk, chance, total) {
    if (total < perk.unlockAt) {
        return Text.of(`  §8🔒 ${perk.label} §8(unlocks at ${perk.unlockAt} souls)`)
    }
    let pct = Math.round(chance * 100)
    let cap = Math.round(perk.maxChance * 100)
    return Text.of(`  §7${perk.label}: §f${pct}% §8(caps at ${cap}%)`)
}

ItemEvents.tooltip(event => {

    // --- SOUL JAR ---
    event.addAdvanced(['kubejs:soul_jar'], (item, advanced, text) => {

        let count = item.nbt ? item.nbt.getInt('soul_count') : 0

        text.add(Text.of('Your Mastery Stats:').white())

        let total = global.soulData.totalCaptured
        let mastery = getSoulMasteryClient(total) // computed once, used for both the stats block and the perk list below

        if (total === 0) {
            text.add(Text.of('§7No souls captured yet').italic())
        } else {
            let capacity = SOUL_BASE_CAPACITY + mastery.capacityBonus

            text.add([Text.of('§7Rank: '), Text.of(mastery.tier)])
            text.add([Text.of('§7Jar Capacity: '), Text.of(`§f${count}/${capacity}`)])

            let nextGoal = SOUL_MASTERY_THRESHOLDS.find(t => t > total)
            if (nextGoal) {
                let prevGoal = 0
                for (let g of SOUL_MASTERY_THRESHOLDS) { if (g <= total) prevGoal = g }

                let pct = (total - prevGoal) / (nextGoal - prevGoal)
                let progress = pct * 10
                let barColor = pct < 0.3 ? "§c" : (pct < 0.7 ? "§e" : "§a")

                let bar = ""
                for (let i = 0; i < 10; i++) {
                    bar += (i < progress) ? `${barColor}|` : "§8."
                }
                text.add([Text.of('§7Next Rank: '), Text.of(`§8[${bar}§8] §f${total}/${nextGoal}`)])
            } else {
                text.add(Text.of('§d§lMAX RANK REACHED').italic())
            }

            text.add([Text.of('§7Capture Bonus: '), Text.of(`§dx${mastery.captureMult}`)])
            text.add([Text.of('§7Conserve Chance: '), Text.of(`§d${mastery.conserveChance}%`)])
        }

        if (!event.isShift()) {
            text.add(Text.of('Hold [Shift] for mechanics').gray())
        } else {
            text.add(Text.of(' '))
            text.add(Text.of('• §6Chance to capture a soul on a killing blow.').white())
            text.add(Text.of('• §bRight-click in main hand to release one trapped soul.').white())
            text.add(Text.of('• §2Sneak+Right-click to view full mastery stats in chat.').gray())
            text.add(Text.of('• §dCapacity and capture chance grow with mastery rank.').gray())
			text.add(Text.of('• §dPerks and attributes unlock as mastery rank increase.').gray())
            text.add(Text.of(' '))
            text.add(Text.of('Mastery Attributes §8(requires carrying the jar):').white())
            if (total < 100) {
                text.add(Text.of('  §8🔒 Max Health §8(unlocks at 100 souls)'))
            } else {
                let hp = getAttrTierValue(total, ATTR_PERTIER_CLIENT.maxHealth)
                text.add(Text.of(`  §7Max Health: §f+${hp / 2} hearts §8(caps at +4 hearts)`))
            }
            if (total < 350) {
                text.add(Text.of('  §8🔒 Second Attribute §8(unlocks at 350 souls)'))
            } else if (!global.soulAttrData.secondAttribute) {
                text.add(Text.of('  §8🔒 Second Attribute §8(syncing...)'))
            } else {
                let pct = getAttrTierValue(total, ATTR_PERTIER_CLIENT.secondAttribute)
                let rawName = global.soulAttrData.secondAttribute.includes(':')
                    ? global.soulAttrData.secondAttribute.split(':')[1].split('.').pop()
                    : global.soulAttrData.secondAttribute
                let label = rawName.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                text.add(Text.of(`  §7${label}: §f+${Math.round(pct * 100)}% §8(caps at +5%)`))
            }
            text.add(Text.of(' '))
            text.add(Text.of('Mastery Perks §8(chance keeps rising):').white())
            text.add(perkLine(SOUL_PERKS_CLIENT.ghostlyAftermath, mastery.ghostlyAftermathChance, total))
            text.add(perkLine(SOUL_PERKS_CLIENT.ectoplasmicTear, mastery.ectoplasmicTearChance, total))
            text.add(perkLine(SOUL_PERKS_CLIENT.denseExtraction, mastery.denseExtractionChance, total))
            text.add(perkLine(SOUL_PERKS_CLIENT.artifactResonance, mastery.artifactResonanceChance, total))
        }
    })

    // --- DISENCHANT BOOKS & TOMES ---
    event.addAdvanced('kubejs:book_of_disenchant_lesser', (item, advanced, text) => {
        text.add(1, Text.of('Crude parchment stained with lead ink. The pages feel unusually cold.').gray().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for mechanics').gray())
        } else {
            text.add(2, Text.of(' '))
            text.add(3, Text.of('• §6Right-click in Main Hand with target item in Offhand.').white())
            text.add(4, Text.of('• §bEffect: Strips 1-2 random enchantments onto separate books.').white())
            text.add(5, Text.of('• §2Cost 2 Souls from a Soul Jar in inventory. ').gray())
			text.add(6, Text.of('• §cFail chance: 35%').gray())
        }
    })

    event.addAdvanced('kubejs:book_of_disenchant_greater', (item, advanced, text) => {
        text.add(1, Text.of('Bound in stiff pigskin. The ritual steps are carved with surgical precision.').gray().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for mechanics').gray())
        } else {
            text.add(2, Text.of(' '))
            text.add(3, Text.of('• §6Right-click in Main Hand with target item in Offhand.').white())
            text.add(4, Text.of('• §bEffect: Strips exactly 2 enchantments onto separate books.').white())
            text.add(5, Text.of('• §2Cost 4 Souls from a Soul Jar in inventory.').gray())
			text.add(6, Text.of('• §cFail chance: 20%').gray())
        }
    })

    event.addAdvanced('kubejs:tome_of_soul_unraveling', (item, advanced, text) => {
        text.add(1, Text.of('Bound in cold, hairless hide. It smells faintly of ozone and unraveling magic.').gray().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for mechanics').gray())
        } else {
            text.add(2, Text.of(' '))
            text.add(3, Text.of('• §6Right-click in Main Hand with target item in Offhand.').white())
            text.add(4, Text.of('• §bEffect: Strips ALL enchantments onto a single combined book.').white())
            text.add(5, Text.of('• §2Cost 6 Souls from a Soul Jar in inventory.').gray())
            text.add(6, Text.of('• §dTome is consumed on use.').gray())
        }
    })

    event.addAdvanced('kubejs:tome_of_scattered_souls', (item, advanced, text) => {
        text.add(1, Text.of('Its parchment pages tremble in your hands, whispering in a dozen fractured voices.').gray().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for mechanics').gray())
        } else {
            text.add(2, Text.of(' '))
            text.add(3, Text.of('• §6Right-click in Main Hand with target item in Offhand.').white())
            text.add(4, Text.of('• §bEffect: Strips ALL enchantments onto individual separate books.').white())
            text.add(5, Text.of('• §2Cost 8 Souls from a Soul Jar in inventory.').gray())
            text.add(6, Text.of('• §dTome is consumed on use.').gray())
        }
    })
})