// priority: 0
// startup_scripts/class_focuses.js
//
// Operation notes:
//  - 'addition'       flat value
//  - 'multiply_base'  multiplies the attribute's BASE value only (good for speed, attack_speed, healing_received)
//  - 'multiply_total' multiplies the final value incl. gear (use this for armor and damage; -1 = hard zero)

let FOCUS_UUID = '1bc873d2-5603-4f79-9c7e-0bf796abbf99';

let CLASS_FOCUSES = [
    {
        id: 'berserker_focus',
        name: 'Way of the Berserker',
        texture: 'kubejs:item/berserkerfp',
        attrs: [
            // upsides
            ['minecraft:generic.attack_damage', 0.6, 'multiply_total'],
            ['minecraft:generic.attack_speed', 0.25, 'multiply_base'],
            ['attributeslib:life_steal', 0.12, 'addition'],
            ['attributeslib:crit_damage', 0.5, 'addition'],
            ['betterparagliders:base_melee_stamina_reduction', 0.5, 'addition'],
            // drawbacks
            ['minecraft:generic.max_health', -6, 'addition'],
            ['minecraft:generic.armor', -0.5, 'multiply_total'],
            ['attributeslib:healing_received', -0.5, 'multiply_base'],
            ['shieldinghealth:attribute.shieldinghealth.shield_value', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    },
    {
        id: 'shadow_focus',
        name: 'Way of the Shadow',
        texture: 'kubejs:item/shadowfp',
        attrs: [
            // upsides
            ['attributeslib:crit_chance', 0.25, 'addition'],
            ['attributeslib:crit_damage', 0.75, 'addition'],
            ['attributeslib:dodge_chance', 0.2, 'addition'],
            ['minecraft:generic.movement_speed', 0.2, 'multiply_base'],
            ['combatroll:count', 1, 'addition'],
            ['betterparagliders:sprinting_stamina_reduction', 0.5, 'addition'],
			['betterparagliders:one_handed_stamina_reduction', 0.2, 'addition'],
            // drawbacks
            ['minecraft:generic.max_health', -8, 'addition'],
            ['minecraft:generic.armor', -0.5, 'multiply_total'],
            ['attributeslib:healing_received', -0.3, 'multiply_base'],
            ['shieldinghealth:attribute.shieldinghealth.shield_value', -0.5, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    },
	{
        id: 'blood_pact_focus',
        name: 'Blood Pact',
        texture: 'kubejs:item/bloodpactfp',
        attrs: [
            // upsides
            ['attributeslib:life_steal', 0.3, 'addition'],
            ['attributeslib:overheal', 0.25, 'addition'],
            ['minecraft:generic.attack_damage', 0.3, 'multiply_total'],
            ['attributeslib:crit_damage', 0.4, 'addition'],
            // drawbacks
            // not -100%: Apotheosis life steal is also reduced by healing_received
            ['attributeslib:healing_received', -0.5, 'multiply_base'],
            ['minecraft:generic.max_health', -4, 'addition'],
            ['minecraft:generic.armor', -0.25, 'multiply_total'],
            ['shieldinghealth:attribute.shieldinghealth.shield_value', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    },
    {
        id: 'wayfarer_focus',
        name: 'Way of the Wayfarer',
        texture: 'kubejs:item/wayfarerfp',
        attrs: [
            // upsides
            ['minecraft:generic.movement_speed', 0.2, 'multiply_base'],
			['minecraft:generic.luck', 1, 'addition'],
            ['forge:swim_speed', 0.3, 'addition'],
            ['forge:step_height_addition', 0.5, 'addition'],
            ['betterparagliders:sprinting_stamina_reduction', 0.8, 'addition'],
            ['betterparagliders:swimming_stamina_reduction', 0.8, 'addition'],
            ['attributeslib:experience_gained', 0.5, 'multiply_base'],
            // drawbacks
            ['minecraft:generic.attack_damage', -0.75, 'multiply_total'],
			['shieldinghealth:attribute.shieldinghealth.shield_value', -1, 'multiply_total'],
            ['attributeslib:arrow_damage', -0.75, 'multiply_total'],
            ['betterparagliders:base_melee_stamina_reduction', -20, 'addition'],
            ['minecraft:generic.max_health', -6, 'addition'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    },
    {
        id: 'delver_focus',
        name: 'Way of the Delver',
        texture: 'kubejs:item/delverfp',
        attrs: [
            // upsides
            ['attributeslib:mining_speed', 1.5, 'multiply_base'],
            ['forge:block_reach', 3, 'addition'],
            ['minecraft:generic.luck', 3, 'addition'],
            ['minecraft:generic.armor', 4, 'addition'],
            // drawbacks
            ['minecraft:generic.attack_damage', -0.5, 'multiply_total'],
            ['attributeslib:arrow_damage', -0.5, 'multiply_total'],
            ['minecraft:generic.movement_speed', -0.15, 'multiply_base'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    },
    {
        id: 'last_stand_focus',
        name: 'Last Stand',
        texture: 'kubejs:item/laststandfp',
        attrs: [
            // upsides (the big one is the low-HP power-up in the dynamic script)
            ['minecraft:generic.armor', 4, 'addition'],
            ['minecraft:generic.armor_toughness', 2, 'addition'],
            ['attributeslib:dodge_chance', 0.1, 'addition'],
            // drawbacks
            ['minecraft:generic.max_health', -8, 'addition'],
            ['attributeslib:healing_received', -0.5, 'multiply_base'],
            ['shieldinghealth:attribute.shieldinghealth.shield_value', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.max_mana', -1, 'multiply_total'],
            ['ars_nouveau:ars_nouveau.perk.mana_regen', -1, 'multiply_total']
        ]
    }
];

StartupEvents.registry('item', event => {
    CLASS_FOCUSES.forEach(f => {
        let curio = CuriosJSCapabilityBuilder.create();
        f.attrs.forEach(a => {
            curio = curio.addAttribute(a[0], FOCUS_UUID, a[1], a[2]);
        });

        event.create(f.id)
            .maxStackSize(1)
            .tag('curios:an_focus')
            .tag('rad3:artifacts')
            .displayName(f.name)
            .rarity('Uncommon')
            .texture(f.texture)
            .attachCuriosCapability(curio);
    });
});

let GAMBLER = {
    boons: 3,               // positive rolls
    banes: 3,               // negative rolls
    jackpotChance: 0.05,    // +1 boon
    snakeEyesChance: 0.05,  // +1 bane
    rerollOnEquip: false,   // false = rolled once, then sealed in the item's NBT
    pool: {
        boons: [
            { a: 'attributeslib:crit_chance',        min: 0.10, max: 0.35, op: 'addition' },
            { a: 'attributeslib:crit_damage',        min: 0.25, max: 1.00, op: 'addition' },
            { a: 'attributeslib:dodge_chance',       min: 0.10, max: 0.30, op: 'addition' },
            { a: 'attributeslib:life_steal',         min: 0.05, max: 0.15, op: 'addition' },
            { a: 'attributeslib:experience_gained',  min: 0.25, max: 1.00, op: 'multiply_base' },
            { a: 'attributeslib:mining_speed',       min: 0.50, max: 1.50, op: 'multiply_base' },
            { a: 'minecraft:generic.attack_damage',  min: 0.20, max: 0.80, op: 'multiply_base' },
            { a: 'minecraft:generic.movement_speed', min: 0.10, max: 0.30, op: 'multiply_base' },
            { a: 'minecraft:generic.max_health',     min: 4,    max: 12,   op: 'addition' },
            { a: 'minecraft:generic.armor',          min: 3,    max: 8,    op: 'addition' },
            { a: 'attributeslib:healing_received',   min: 0.30, max: 0.80, op: 'multiply_base' },
            { a: 'betterparagliders:sprinting_stamina_reduction', min: 3, max: 8, op: 'addition' }
        ],
        banes: [
            { a: 'minecraft:generic.max_health',     min: -10,  max: -4,    op: 'addition' },
            { a: 'minecraft:generic.armor',          min: -0.7, max: -0.3,  op: 'multiply_base' },
            { a: 'minecraft:generic.attack_damage',  min: -0.5, max: -0.2,  op: 'multiply_base' },
            { a: 'minecraft:generic.movement_speed', min: -0.25, max: -0.1, op: 'multiply_base' },
            { a: 'attributeslib:healing_received',   min: -0.7, max: -0.3,  op: 'multiply_base' },
            { a: 'ars_nouveau:ars_nouveau.perk.max_mana',  min: -1, max: -0.5, op: 'multiply_total' },
            { a: 'ars_nouveau:ars_nouveau.perk.mana_regen', min: -1, max: -0.5, op: 'multiply_total' },
            { a: 'shieldinghealth:attribute.shieldinghealth.shield_value', min: -1, max: -0.5, op: 'multiply_total' },
            { a: 'combatroll:count',                 min: -1,   max: -1,    op: 'multiply_total' }
        ]
    }
};

// Pick `count` distinct entries; `used` stops the same attribute rolling twice on one item
function gamblerPick(list, count, used) {
    let out = [];
    let left = list.slice();
    while (out.length < count && left.length > 0) {
        let i = Math.floor(Math.random() * left.length);
        let e = left.splice(i, 1)[0];
        if (used[e.a]) continue;
        used[e.a] = true;
        let v = e.min + Math.random() * (e.max - e.min);
        out.push({ a: e.a, o: e.op, v: Math.round(v * 100) / 100 });
    }
    return out;
}

function gamblerRoll() {
    let used = {};
    let jackpot = Math.random() < GAMBLER.jackpotChance;
    let snake = Math.random() < GAMBLER.snakeEyesChance;
    let boons = gamblerPick(GAMBLER.pool.boons, GAMBLER.boons + (jackpot ? 1 : 0), used);
    let banes = gamblerPick(GAMBLER.pool.banes, GAMBLER.banes + (snake ? 1 : 0), used);
    return { Gambler: { Rolls: boons.concat(banes), Jackpot: jackpot, SnakeEyes: snake } };
}

// Rolls are stored as ONE JSON string in the item NBT (key GamblerData).
// Only stack.nbt / stack.setNbt are used: raw vanilla methods (getTag, mergeNbt) are not available here.
function gamblerRead(stack) {
    let n = stack.nbt;
    if (n == null) return null;
    let m = /GamblerData:'([^']*)'/.exec(String(n));
    if (!m) return null;
    try { return JSON.parse(m[1]); } catch (e) { return null; }
}

function gamblerHasRoll(stack) {
    return gamblerRead(stack) != null;
}

function gamblerEnsureRolled(slotContext, stack) {
    try {
        let entity = slotContext.entity();
        if (!entity || entity.level.isClientSide()) return;
        if (!GAMBLER.rerollOnEquip && gamblerHasRoll(stack)) return;

        let g = gamblerRoll().Gambler;
        stack.setNbt({ GamblerData: JSON.stringify({ j: g.Jackpot, s: g.SnakeEyes, r: g.Rolls }) });

        let msg = g.Jackpot ? '§6★ JACKPOT! The dice have been cast.'
                : g.SnakeEyes ? '§c☠ Snake eyes... The dice have been cast.'
                : '§6The dice have been cast.';
        try {
            entity.displayClientMessage(Text.of(msg), true);
            entity.playSound('minecraft:block.amethyst_block.chime', 1.0, 1.2);
        } catch (e2) {}
    } catch (e) {
        console.error('Gambler focus roll failed: ' + e);
    }
}

StartupEvents.registry('item', event => {
    event.create('gambler_focus')
        .maxStackSize(1)
        .tag('curios:an_focus')
        .tag('rad3:artifacts')
        .displayName('Way of the Gambler')
        .rarity('Uncommon')
        .texture('kubejs:item/gamblerfp')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => {
                    gamblerEnsureRolled(slotContext, newStack);
                })
                .addAttribute(
                    "minecraft:generic.luck",
                    "7d2f8a1e-4c3b-4e9a-9a51-0c6d2b8f3a11",
                    3,
                    'addition'
                )
                .modifyAttribute(ctx => {
                    try {
                        let { slotContext, UUID, stack, modifiers } = ctx;
                        let g = gamblerRead(stack);
                        if (!g) return;
                        for (let i = 0; i < g.r.length; i++) {
                            ctx.modify(g.r[i].a, UUID, g.r[i].v, g.r[i].o);
                        }
                    } catch (e) {
                        console.error('Gambler focus modifyAttribute failed: ' + e);
                    }
                })
        )
})
