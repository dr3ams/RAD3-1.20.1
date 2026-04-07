// ============================================================
//  RAD3 — HUNGER SYSTEM 
// ============================================================
//
//  ── SYSTEM OVERVIEW ─────────────────────────────────────────
//
//  This script ties two separate Minecraft values — foodLevel
//  and saturationLevel — to a four-tier buff/penalty system
//  that affects stamina, health, and combat roll speed.
//
//  HUNGER vs SATURATION — how Minecraft actually works:
//
//  foodLevel    (0–20 int)   — the VISIBLE hunger bar. Only
//                              starts dropping after saturation
//                              is fully drained. Any food fills
//                              it instantly.
//
//  saturationLevel (0–20.0)  — an INVISIBLE buffer that drains
//                              FIRST. Cheap food (bread) gives
//                              ~1–2 sat. Quality cooked meals
//                              (Farmer's/Miner's Delight) give
//                              8–12+ sat. Resets to 0 once the
//                              hunger bar starts falling.
//
//  Practical result: a player with full hunger bars can have
//  zero saturation if they only ate cheap food. Our ZERO and
//  LOW tiers use foodLevel (the visible bar) because at those
//  levels saturation is always already 0. MID and HIGH use
//  saturation to reward players who cook quality meals.
//
//  ── WHAT EACH TIER DOES ─────────────────────────────────────
//
//  ZERO  — Visibly starving (bar nearly empty)
//            • Idle stamina regen heavily penalised
//            • Sprint and melee stamina costs increased
//            • Shield heart regen slowed
//
//  LOW   — Fed on cheap food (bar full, saturation empty)
//            • Minor combat roll recharge bonus only
//
//  MID   — Saturation ≥ 8 (one good cooked meal)
//            • Stamina Idle regen
//            • Melee stamina reduction bonus
//            • +1 heart (2 HP)
//            • Full combat roll recharge bonus
//
//  HIGH  — Saturation ≥ 16 (quality Delight dish)
//            • Stamina Idle regen more
//            • Melee + sprint stamina reduction
//            • Faster rolls than MID
//            • Shielding heart bonus
//
//  ── ON-EAT SYSTEM ───────────────────────────────────────────
//
//  Every food in FOOD_REGISTRY grants on eat:
//    • A fixed potion effect (thematically matched)
//    • Random XP between xpMin–xpMax (CONFIG)
//    • Optional: a weighted-random bonus effect (randomBonus)
//
// ============================================================

// ============================================================
//  CONFIG
// ============================================================
const HUNGER_CONFIG = {

    // --- Tick rate ---
    checkInterval: 60,              // ticks between checks (40 = 2s)

    // ── TIER THRESHOLDS ───────────────────────────────────────
    //
    // ZERO: foodLevel at or below this → visibly starving
    //   foodLevel is 0–20 integer (each bar = 2 points)
    zeroHungerLevel:  8,            

    // LOW→MID boundary: saturation must be at least this to escape LOW
    lowSatThreshold:  6.0,         

    // MID: saturation at or above this
    midSatThreshold:  12.0,          

    // HIGH: saturation at or above this
    highSatThreshold: 18.0,         

    // ── STAMINA VALUES (from paraglider-player-states.toml) ──
    //
    // Base idle regen staminaDelta = +10/tick (every 30 ticks)
    // Base running staminaDelta    = -5/tick
    // ParCool actions              = -15 to -20 per action
    // betterparagliders attrs are additive bonuses on top of those.

    // --- Better Paragliders attribute names ---
    idleRegenAttr:    'betterparagliders:idle_stamina_regen',
    sprintDrainAttr:  'betterparagliders:sprinting_stamina_reduction',
    meleeDrainAttr:   'betterparagliders:base_melee_stamina_reduction',

    // ── ZERO tier — visibly starving penalties ────────────────
    zeroIdleRegenPenalty:    -5,
    // Base sprint drain is -5/tick. 
    zeroSprintPenalty:       -5,
    // Base melee cost configured at 0.7× in toml.
    zeroMeleePenalty:        -2.0,
    // Shield regen penalty: heavily slows shield heart recovery when starving.
    zeroShieldRegenPenalty:  1000,

    // ── MID tier bonuses ──────────────────────────────────────
    midIdleRegenBonus:      3,
    // Melee reduction: reduces the drain from melee.
    midMeleeReductionBonus: 0.2,
    // +1 heart (2.0 HP points)
    midHPBonus:             2.0,
    // Roll recharge: higher = rolls come back faster
    midRollBonus:           4.0,

    // ── HIGH tier bonuses (stacks with MID, replaces where noted) ─
    highIdleRegenBonus:      6,
    // Melee reduction on top
    highMeleeReductionBonus: 0.5,
    // Sprint reduction: less stamina lost while running
    highSprintReductionBonus: 1.0,
    // Faster rolls than MID
    highRollBonus:           7.0,
    // Shield value from Shielding Health mod 
    highShieldBonus:         2.0,

    // --- Bonus attribute names ---
    rollAttr:        'combatroll:recharge',
    HPAttr:          'minecraft:generic.max_health',
    shieldAttr:      'shieldinghealth:attribute.shieldinghealth.shield_value',
    shieldRegenAttr: 'shieldinghealth:attribute.shieldinghealth.shield_regen',

    // --- Modifier names (unique keys for apply + remove) ---
    regenModName:        'rad3:hunger_regen',
    sprintModName:       'rad3:hunger_sprint',
    meleeModName:        'rad3:hunger_melee',
    shieldRegenModName:  'rad3:hunger_shield_regen',
    HPModName:           'rad3:wellfed_hp',
    rollModName:         'rad3:wellfed_roll',
    shieldModName:       'rad3:wellfed_shield',

    // --- persistentData key for tier tracking ---
    tierKey:            'rad3_hunger_tier',
    // Stores the server tick when the last tier message was sent.
    // Prevents chat spam when saturation oscillates near a threshold.
    tierMsgCooldownKey: 'rad3_hunger_tier_msg_tick',

    // --- Tier message cooldown ---
    tierMsgCooldown: 2400,	  

    // --- Messages ---
    showXPMessage:      true,
    showRandomMessage:  true,
    showTierMessages:   true,

    // --- XP ---
    xpMin: 3,
    xpMax: 15,

    // --- Debug mode ---
    debugMode: true,

    // ── RANDOM EFFECT POOL ────────────────────────────────────
    randomEffectsPool: [
        { effect: 'minecraft:speed',           duration: 600,  amplifier: 0, weight: 20 },
        { effect: 'minecraft:haste',            duration: 600,  amplifier: 0, weight: 20 },
        { effect: 'minecraft:jump_boost',       duration: 400,  amplifier: 0, weight: 15 },
        { effect: 'minecraft:regeneration',     duration: 200,  amplifier: 0, weight: 15 },
        { effect: 'minecraft:absorption',       duration: 800,  amplifier: 0, weight: 12 },
        { effect: 'minecraft:strength',         duration: 400,  amplifier: 0, weight: 10 },
        { effect: 'minecraft:resistance',       duration: 400,  amplifier: 0, weight: 8  },
        { effect: 'minecraft:luck',             duration: 1200, amplifier: 0, weight: 5  },
        { effect: 'minecraft:night_vision',     duration: 1200, amplifier: 0, weight: 4  },
        { effect: 'minecraft:fire_resistance',  duration: 800,  amplifier: 0, weight: 3  },
        { effect: 'minecraft:slow_falling',     duration: 600,  amplifier: 0, weight: 3  },
        { effect: 'minecraft:haste',            duration: 400,  amplifier: 1, weight: 2  },
        { effect: 'minecraft:strength',         duration: 300,  amplifier: 1, weight: 1  },
    ],
};

// ============================================================
//  FOOD REGISTRY
// ============================================================
//  Sync with: kubejs/client_scripts/hunger_tooltips.js
// ============================================================
const FOOD_REGISTRY = {

    // ── Farmer's Delight ─────────────────────────────────────
    'farmersdelight:hamburger':               { effects: [{ effect: 'minecraft:strength',        duration: 400,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:bacon_sandwich':          { effects: [{ effect: 'minecraft:haste',            duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:dumplings':               { effects: [{ effect: 'minecraft:regeneration',     duration: 200,  amplifier: 0 }]                      },
    'farmersdelight:stuffed_potato':          { effects: [{ effect: 'minecraft:resistance',       duration: 800,  amplifier: 0 }]                      },
    'farmersdelight:cabbage_rolls':           { effects: [{ effect: 'minecraft:absorption',       duration: 600,  amplifier: 0 }]                      },
    'farmersdelight:kelp_roll':               { effects: [{ effect: 'minecraft:water_breathing',  duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:kelp_roll_slice':         { effects: [{ effect: 'minecraft:water_breathing',  duration: 200,  amplifier: 0 }]                      },
    'farmersdelight:beef_stew':               { effects: [{ effect: 'minecraft:strength',         duration: 600,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:chicken_soup':            { effects: [{ effect: 'minecraft:regeneration',     duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:vegetable_soup':          { effects: [{ effect: 'minecraft:absorption',       duration: 800,  amplifier: 0 }]                      },
    'farmersdelight:fish_stew':               { effects: [{ effect: 'minecraft:dolphins_grace',   duration: 600,  amplifier: 0 }]                      },
    'farmersdelight:fried_rice':              { effects: [{ effect: 'minecraft:haste',            duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:pumpkin_soup':            { effects: [{ effect: 'minecraft:slow_falling',     duration: 600,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:baked_cod_stew':          { effects: [{ effect: 'minecraft:water_breathing',  duration: 600,  amplifier: 0 }]                      },
    'farmersdelight:noodle_soup':             { effects: [{ effect: 'minecraft:speed',            duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:pasta_with_meatballs':    { effects: [{ effect: 'minecraft:strength',         duration: 600,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:pasta_with_mutton_chop':  { effects: [{ effect: 'minecraft:regeneration',     duration: 400,  amplifier: 1 }], randomBonus: true  },
    'farmersdelight:mushroom_rice':           { effects: [{ effect: 'minecraft:night_vision',     duration: 800,  amplifier: 0 }]                      },
    'farmersdelight:vegetable_noodles':       { effects: [{ effect: 'minecraft:jump_boost',       duration: 400,  amplifier: 0 }]                      },
    'farmersdelight:steak_and_potatoes':      { effects: [{ effect: 'minecraft:strength',         duration: 800,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:ratatouille':             { effects: [{ effect: 'minecraft:luck',             duration: 1200, amplifier: 0 }], randomBonus: true  },
    'farmersdelight:squid_ink_pasta':         { effects: [{ effect: 'minecraft:night_vision',     duration: 1200, amplifier: 0 }], randomBonus: true  },
    'farmersdelight:grilled_salmon':          { effects: [{ effect: 'minecraft:dolphins_grace',   duration: 800,  amplifier: 0 }]                      },
    'farmersdelight:roast_chicken':           { effects: [{ effect: 'minecraft:regeneration',     duration: 400,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:stuffed_pumpkin':         { effects: [{ effect: 'minecraft:resistance',       duration: 800,  amplifier: 0 }], randomBonus: true  },
    'farmersdelight:shepherds_pie':           { effects: [{ effect: 'minecraft:absorption',       duration: 1200, amplifier: 0 }], randomBonus: true  },
    'farmersdelight:rice_roll_medley_block':  { effects: [{ effect: 'minecraft:luck',             duration: 800,  amplifier: 0 }], randomBonus: true  },

    // ── Miner's Delight ──────────────────────────────────────
    'miners_delight:pasta_with_veggieballs':   { effects: [{ effect: 'minecraft:haste',           duration: 600,  amplifier: 0 }]                      },
    'miners_delight:cave_soup':                { effects: [{ effect: 'minecraft:night_vision',    duration: 1200, amplifier: 0 }], randomBonus: true  },
    'miners_delight:vegan_hamburger':          { effects: [{ effect: 'minecraft:jump_boost',      duration: 400,  amplifier: 0 }]                      },
    'miners_delight:vegan_steak_and_potatoes': { effects: [{ effect: 'minecraft:resistance',      duration: 600,  amplifier: 0 }]                      },
    'miners_delight:takoyaki':                 { effects: [{ effect: 'minecraft:water_breathing', duration: 800,  amplifier: 0 }], randomBonus: true  },
    'miners_delight:bowl_of_stuffed_squid':    { effects: [{ effect: 'minecraft:dolphins_grace',  duration: 600,  amplifier: 0 }]                      },
    'miners_delight:noodle_soup_cup':          { effects: [{ effect: 'minecraft:speed',           duration: 200,  amplifier: 0 }]                      },
    'miners_delight:beef_stew_cup':            { effects: [{ effect: 'minecraft:strength',        duration: 300,  amplifier: 0 }]                      },
    'miners_delight:chicken_soup_cup':         { effects: [{ effect: 'minecraft:regeneration',    duration: 200,  amplifier: 0 }]                      },
    'miners_delight:bone_broth_cup':           { effects: [{ effect: 'minecraft:absorption',      duration: 400,  amplifier: 0 }]                      },
    'miners_delight:cave_soup_cup':            { effects: [{ effect: 'minecraft:night_vision',    duration: 600,  amplifier: 0 }]                      },
    'miners_delight:bat_soup_cup':             { effects: [{ effect: 'minecraft:night_vision',    duration: 400,  amplifier: 0 }], randomBonus: true  },

    // ── Ocean's Delight ──────────────────────────────────────
    'oceansdelight:cabbage_wrapped_elder_guardian': { effects: [{ effect: 'minecraft:resistance',      duration: 1200, amplifier: 1 }], randomBonus: true },
    'oceansdelight:bowl_of_guardian_soup':          { effects: [{ effect: 'minecraft:water_breathing', duration: 1200, amplifier: 0 }], randomBonus: true },

    // ── Nether's Delight ─────────────────────────────────────
    'nethersdelight:plate_of_stuffed_hoglin_snout': { effects: [{ effect: 'minecraft:fire_resistance', duration: 1200, amplifier: 0 }], randomBonus: true },
    'nethersdelight:plate_of_stuffed_hoglin_roast': { effects: [{ effect: 'minecraft:strength',        duration: 800,  amplifier: 1 }], randomBonus: true },
    'nethersdelight:grilled_strider':               { effects: [{ effect: 'minecraft:fire_resistance', duration: 800,  amplifier: 0 }]                     },

    // ── ADD YOUR OWN ENTRIES BELOW ───────────────────────────
    // 'modid:item_name': {
    //     effects: [{ effect: 'minecraft:effect_name', duration: 600, amplifier: 0 }],
    //     randomBonus: true,
    // },
};

// ============================================================
//  TIER DEFINITIONS
//  0 = ZERO, 1 = LOW, 2 = MID, 3 = HIGH
// ============================================================
const TIERS = {
    ZERO: 0,
    LOW:  1,
    MID:  2,
    HIGH: 3,
};

function getTierMessages(tier) {
    if (tier === TIERS.ZERO) return [
        '§c✖ Eat something! §7Stamina recovery halted, actions cost more.',
        '§c✖ Hunger gnaws at you — §7stamina drains faster. Eat something!',
    ];
    if (tier === TIERS.LOW) return [
        '§e● Fed. §7No bonuses active — cook a proper meal for stamina benefits.',
    ];
    if (tier === TIERS.MID) return [
        '§a✦ Well-Fed! §7Combat stamina improved — §a+1 heart, faster rolls§7.',
        '§a✦ Nourished! §7You feel stronger — §astamina and health boosted§7.',
    ];
    if (tier === TIERS.HIGH) return [
        '§6★ Peak Nourishment! §7All stamina bonuses active — §6shield, speed, recovery§7.',
        '§6★ A feast worthy of an adventurer! §7You are at your absolute peak.',
    ];
    return null;
}

// ============================================================
//  HELPERS
// ============================================================

function applyMod(player, attrName, modName, value) {
    player.removeAttribute(attrName, modName);
    player.modifyAttribute(attrName, modName, value, 'addition');
}

function removeMod(player, attrName, modName) {
    player.removeAttribute(attrName, modName);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function attrVal(player, attrName) {
    try { return Math.round(player.getAttribute(attrName).getValue() * 1000) / 1000; }
    catch(e) { return '?'; }
}

function rollRandomEffect() {
    let pool = HUNGER_CONFIG.randomEffectsPool;
    if (!pool || pool.length === 0) return null;
    let total = pool.reduce((sum, e) => sum + (e.weight || 1), 0);
    let roll  = Math.random() * total;
    let cumulative = 0;
    for (let i = 0; i < pool.length; i++) {
        cumulative += (pool[i].weight || 1);
        if (roll < cumulative) return pool[i];
    }
    return pool[pool.length - 1];
}

function effectDisplayName(effectId) {
    let name = effectId.split(':')[1] || effectId;
    return name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Determine current tier from BOTH foodLevel and saturationLevel.
 *
 * foodLevel    = player.foodData.foodLevel      (0–20 integer, visible bar)
 * saturation   = player.foodData.saturationLevel (0.0–20.0 float, invisible)
 *
 * HIGH and MID use saturation
 * ZERO uses foodLevel
 * LOW is everything in between
 */
function getTier(foodLevel, saturation) {
    if (foodLevel <= HUNGER_CONFIG.zeroHungerLevel)      return TIERS.ZERO;
    if (saturation >= HUNGER_CONFIG.highSatThreshold)    return TIERS.HIGH;
    if (saturation >= HUNGER_CONFIG.midSatThreshold)     return TIERS.MID;
    return TIERS.LOW;
}

// ============================================================
//  SATURATION TICK — attribute modifiers per tier
// ============================================================
LevelEvents.tick(event => {
    if (event.server.tickCount % HUNGER_CONFIG.checkInterval !== 0) return;

    event.level.players.forEach(player => {
        let foodLevel   = player.foodData.foodLevel;
        let saturation  = player.foodData.saturationLevel;
        let currentTier = getTier(foodLevel, saturation);
        let initialized = player.persistentData.contains(HUNGER_CONFIG.tierKey);
        let lastTier    = player.persistentData.getInt(HUNGER_CONFIG.tierKey);

        // ── Step 1: clear ALL managed modifiers ──────────────
        removeMod(player, HUNGER_CONFIG.idleRegenAttr,   HUNGER_CONFIG.regenModName);
        removeMod(player, HUNGER_CONFIG.sprintDrainAttr, HUNGER_CONFIG.sprintModName);
        removeMod(player, HUNGER_CONFIG.meleeDrainAttr,  HUNGER_CONFIG.meleeModName);
        removeMod(player, HUNGER_CONFIG.shieldRegenAttr, HUNGER_CONFIG.shieldRegenModName);
        removeMod(player, HUNGER_CONFIG.HPAttr,          HUNGER_CONFIG.HPModName);
        removeMod(player, HUNGER_CONFIG.rollAttr,        HUNGER_CONFIG.rollModName);
        removeMod(player, HUNGER_CONFIG.shieldAttr,      HUNGER_CONFIG.shieldModName);

        // ── Step 2: apply tier modifiers ─────────────────────

        if (currentTier === TIERS.ZERO) {
            // Visibly starving — punish stamina and shield recovery
            applyMod(player, HUNGER_CONFIG.idleRegenAttr,   HUNGER_CONFIG.regenModName,       HUNGER_CONFIG.zeroIdleRegenPenalty);
            applyMod(player, HUNGER_CONFIG.sprintDrainAttr, HUNGER_CONFIG.sprintModName,      HUNGER_CONFIG.zeroSprintPenalty);
            applyMod(player, HUNGER_CONFIG.meleeDrainAttr,  HUNGER_CONFIG.meleeModName,       HUNGER_CONFIG.zeroMeleePenalty);
            applyMod(player, HUNGER_CONFIG.shieldRegenAttr, HUNGER_CONFIG.shieldRegenModName, HUNGER_CONFIG.zeroShieldRegenPenalty);

        } else if (currentTier === TIERS.LOW) {
            // Fed but cheap food — just roll recharge, no stamina bonus
            applyMod(player, HUNGER_CONFIG.rollAttr, HUNGER_CONFIG.rollModName, HUNGER_CONFIG.midRollBonus * 2);

        } else if (currentTier === TIERS.MID) {
            // Quality meal — stamina recovery, more HP, better rolls
            applyMod(player, HUNGER_CONFIG.idleRegenAttr,  HUNGER_CONFIG.regenModName,  HUNGER_CONFIG.midIdleRegenBonus);
            applyMod(player, HUNGER_CONFIG.meleeDrainAttr, HUNGER_CONFIG.meleeModName,  HUNGER_CONFIG.midMeleeReductionBonus);
            applyMod(player, HUNGER_CONFIG.HPAttr,         HUNGER_CONFIG.HPModName,     HUNGER_CONFIG.midHPBonus);
            applyMod(player, HUNGER_CONFIG.rollAttr,       HUNGER_CONFIG.rollModName,   HUNGER_CONFIG.midRollBonus);

        } else if (currentTier === TIERS.HIGH) {
            // Peak nourishment — all bonuses, shield heart added
            applyMod(player, HUNGER_CONFIG.idleRegenAttr,   HUNGER_CONFIG.regenModName,  HUNGER_CONFIG.highIdleRegenBonus);
            applyMod(player, HUNGER_CONFIG.meleeDrainAttr,  HUNGER_CONFIG.meleeModName,  HUNGER_CONFIG.highMeleeReductionBonus);
            applyMod(player, HUNGER_CONFIG.sprintDrainAttr, HUNGER_CONFIG.sprintModName, HUNGER_CONFIG.highSprintReductionBonus);
			applyMod(player, HUNGER_CONFIG.HPAttr,          HUNGER_CONFIG.HPModName,     HUNGER_CONFIG.midHPBonus);
            applyMod(player, HUNGER_CONFIG.rollAttr,        HUNGER_CONFIG.rollModName,   HUNGER_CONFIG.highRollBonus);
            applyMod(player, HUNGER_CONFIG.shieldAttr,      HUNGER_CONFIG.shieldModName, HUNGER_CONFIG.highShieldBonus);
        }

        // ── Step 3: tier transition message ──────────────────
        if (HUNGER_CONFIG.showTierMessages && (!initialized || currentTier !== lastTier)) {
            let now          = event.server.tickCount;
            let lastMsgTick  = player.persistentData.getLong(HUNGER_CONFIG.tierMsgCooldownKey);
            let cooledDown   = (now - lastMsgTick) >= HUNGER_CONFIG.tierMsgCooldown;

            if (cooledDown) {
                let msgs = getTierMessages(currentTier);
                if (msgs) player.tell(randomFrom(msgs));
                player.persistentData.putLong(HUNGER_CONFIG.tierMsgCooldownKey, now);
            }

            // Always update stored tier even if message was suppressed,
            // so the next transition is detected correctly.
            player.persistentData.putInt(HUNGER_CONFIG.tierKey, currentTier);
        }

        // ── Step 4: debug readout ─────────────────────────────
        if (HUNGER_CONFIG.debugMode) {
            let tierLabel = currentTier === TIERS.ZERO ? '§cZERO'
                          : currentTier === TIERS.LOW   ? '§eLOW'
                          : currentTier === TIERS.MID   ? '§aMID'
                          : '§6HIGH';

            let hungerStr = `§7Food:§f${foodLevel} Sat:§f${Math.round(saturation*10)/10}`;

            if (currentTier === TIERS.ZERO) {
                player.setStatusMessage(
                    `${hungerStr} ${tierLabel} §8| §7Regen:§c${attrVal(player, HUNGER_CONFIG.idleRegenAttr)} Sprint:§c${attrVal(player, HUNGER_CONFIG.sprintDrainAttr)} Melee:§c${attrVal(player, HUNGER_CONFIG.meleeDrainAttr)}`
                );
            } else if (currentTier === TIERS.LOW) {
                player.setStatusMessage(
                    `${hungerStr} ${tierLabel} §8| §7Roll:§e${attrVal(player, HUNGER_CONFIG.rollAttr)}`
                );
            } else if (currentTier === TIERS.MID) {
                player.setStatusMessage(
                    `${hungerStr} ${tierLabel} §8| §7Regen:§a${attrVal(player, HUNGER_CONFIG.idleRegenAttr)} HP:§a${attrVal(player, HUNGER_CONFIG.HPAttr)} Roll:§a${attrVal(player, HUNGER_CONFIG.rollAttr)}`
                );
            } else {
                player.setStatusMessage(
                    `${hungerStr} ${tierLabel} §8| §7Regen:§6${attrVal(player, HUNGER_CONFIG.idleRegenAttr)} Sprint:§6${attrVal(player, HUNGER_CONFIG.sprintDrainAttr)} Shield:§6${attrVal(player, HUNGER_CONFIG.shieldAttr)} §7Roll:§e${attrVal(player, HUNGER_CONFIG.rollAttr)} HP:§a${attrVal(player, HUNGER_CONFIG.HPAttr)}`
                );
            }
        }
    });
});

// ============================================================
//  FOOD EATEN — fixed effects + random XP + random bonus
// ============================================================
ItemEvents.foodEaten(event => {
    let entry = FOOD_REGISTRY[event.item.id];
    if (!entry) return;

    let player = event.player;

    // 1. Fixed potion effects
    if (entry.effects) {
        entry.effects.forEach(e => {
            player.potionEffects.add(e.effect, e.duration, e.amplifier, true, true);
        });
    }

    // 2. Random XP
    let xp = randomInt(HUNGER_CONFIG.xpMin, HUNGER_CONFIG.xpMax);
    player.giveExperiencePoints(xp);
    if (HUNGER_CONFIG.showXPMessage) {
        player.setStatusMessage(`§7+§a${xp} XP §7from a quality meal`);
    }

    // 3. Random bonus effect
    if (entry.randomBonus) {
        let rolled = rollRandomEffect();
        if (rolled) {
            player.potionEffects.add(rolled.effect, rolled.duration, rolled.amplifier, true, true);
            if (HUNGER_CONFIG.showRandomMessage) {
                player.setStatusMessage(
                    `§d✦ Inspired! §7You feel §d${effectDisplayName(rolled.effect)}§7...`
                );
            }
        }
    }
});