// ============================================================
//  RAD3 — HUNGER SYSTEM TOOLTIPS  [CLIENT SCRIPT]
// ============================================================
//  IMPORTANT: Keep FOOD_REGISTRY in sync with hunger_system.js
// ============================================================

const TOOLTIP_CONFIG = {
    colorHeader: '§6',
    colorEffect: '§b',
    colorXP:     '§a',
    colorRandom: '§d',
    colorDim:    '§7',
    indent:      '  ',
    xpMin: 3,
    xpMax: 15,
};

// ============================================================
//  FOOD REGISTRY  (client copy — sync with hunger_system.js)
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
    'miners_delight:pasta_with_veggieballs':  { effects: [{ effect: 'minecraft:haste',            duration: 600,  amplifier: 0 }]                      },
    'miners_delight:cave_soup':               { effects: [{ effect: 'minecraft:night_vision',     duration: 1200, amplifier: 0 }], randomBonus: true  },
    'miners_delight:vegan_hamburger':         { effects: [{ effect: 'minecraft:jump_boost',       duration: 400,  amplifier: 0 }]                      },
    'miners_delight:vegan_steak_and_potatoes':{ effects: [{ effect: 'minecraft:resistance',       duration: 600,  amplifier: 0 }]                      },
    'miners_delight:takoyaki':                { effects: [{ effect: 'minecraft:water_breathing',  duration: 800,  amplifier: 0 }], randomBonus: true  },
    'miners_delight:bowl_of_stuffed_squid':   { effects: [{ effect: 'minecraft:dolphins_grace',   duration: 600,  amplifier: 0 }]                      },
    'miners_delight:noodle_soup_cup':         { effects: [{ effect: 'minecraft:speed',            duration: 200,  amplifier: 0 }]                      },
    'miners_delight:beef_stew_cup':           { effects: [{ effect: 'minecraft:strength',         duration: 300,  amplifier: 0 }]                      },
    'miners_delight:chicken_soup_cup':        { effects: [{ effect: 'minecraft:regeneration',     duration: 200,  amplifier: 0 }]                      },
    'miners_delight:bone_broth_cup':          { effects: [{ effect: 'minecraft:absorption',       duration: 400,  amplifier: 0 }]                      },
    'miners_delight:cave_soup_cup':           { effects: [{ effect: 'minecraft:night_vision',     duration: 600,  amplifier: 0 }]                      },
    'miners_delight:bat_soup_cup':            { effects: [{ effect: 'minecraft:night_vision',     duration: 400,  amplifier: 0 }], randomBonus: true  },

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
//  HELPERS
// ============================================================

function ticksToString(ticks) {
    let totalSec = Math.floor(ticks / 20);
    let min = Math.floor(totalSec / 60);
    let sec = totalSec % 60;
    if (min > 0 && sec > 0) return `${min}m ${sec}s`;
    if (min > 0) return `${min}m`;
    return `${sec}s`;
}

function effectDisplayName(effectId) {
    let name = effectId.split(':')[1] || effectId;
    return name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}


// ============================================================
//  TOOLTIP INJECTION
// ============================================================
ItemEvents.tooltip(event => {
    const C = TOOLTIP_CONFIG;

    Object.keys(FOOD_REGISTRY).forEach(itemId => {
        let entry      = FOOD_REGISTRY[itemId];
        let hasEffects = entry.effects && entry.effects.length > 0;
        let hasRandom  = !!entry.randomBonus;

        let lines = [ C.colorHeader + 'On Eat:' ];

        if (hasEffects) {
            entry.effects.forEach(e => {
                lines.push(
                    C.indent + C.colorEffect
                    + effectDisplayName(e.effect)
                    + ' ' + C.colorDim + '(' + ticksToString(e.duration) + ')'
                );
            });
        }

        // XP range — always shown for registered foods
        lines.push(
            C.indent + C.colorXP + '+' + C.xpMin + C.colorDim + '–' + C.colorXP + C.xpMax + ' XP '
            + C.colorDim + 'on eat'
        );

        if (hasRandom) {
            lines.push(C.indent + C.colorRandom + '✦ ' + C.colorDim + 'random bonus effect');
        }

        event.add(itemId, lines);
    });
});