// priority: 0
// server_scripts/class_focuses_dynamic.js
// OPTIONAL conditional mechanics. Delete this file to keep only the static stats.
//   Blood Pact : burns in direct daylight, constant hunger
//   Last Stand : big power-up while at or below the HP threshold
//   Delver     : night vision while underground
// Every call is wrapped in try/catch; a failure logs once and the script goes quiet instead of crashing.

let FOCUS_DYN = {
    enabled: true,
    interval: 20,                 // ticks between checks
    bloodPact: { burn: true, burnSeconds: 3, hunger: true },
    lastStand: { hpThreshold: 12, effects: [        // 12 HP = 6 hearts
        ['minecraft:strength', 2],
        ['minecraft:resistance', 3],
        ['minecraft:speed', 1]
    ] },
    delver: { maxY: 20, nightVision: true }
};

let FocusCuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
let focusDynFailed = false;

function focusDynFail(where, e) {
    if (!focusDynFailed) {
        focusDynFailed = true;
        console.error('Class focus dynamic script disabled after error in ' + where + ': ' + e);
    }
}

// Returns an object { id: true } for every focus id worn in a curios slot
function focusWornIds(player) {
    let worn = {};
    FocusCuriosApi.getCuriosInventory(player).ifPresent(inv => {
        let it = inv.getCurios().values().iterator();
        while (it.hasNext()) {
            let stacks = it.next().getStacks();
            for (let i = 0; i < stacks.getSlots(); i++) {
                worn[String(stacks.getStackInSlot(i).id)] = true;
            }
        }
    });
    return worn;
}

LevelEvents.tick(event => {
    if (!FOCUS_DYN.enabled || focusDynFailed) return;
    if (event.server.tickCount % FOCUS_DYN.interval !== 0) return;

    event.level.getEntities().filter(e => e.isPlayer()).forEach(p => {
        try {
            let worn = focusWornIds(p);

            // --- BLOOD PACT ---
            if (worn['kubejs:blood_pact_focus']) {
                if (FOCUS_DYN.bloodPact.hunger) {
                    p.potionEffects.add('minecraft:hunger', FOCUS_DYN.interval * 5, 0, false, false);
                }
                if (FOCUS_DYN.bloodPact.burn && event.level.isDay() && p.block.canSeeSky) {
                    p.setSecondsOnFire(FOCUS_DYN.bloodPact.burnSeconds);
                }
            }

            // --- LAST STAND ---
            if (worn['kubejs:last_stand_focus'] && p.health <= FOCUS_DYN.lastStand.hpThreshold) {
                FOCUS_DYN.lastStand.effects.forEach(fx => {
                    p.potionEffects.add(fx[0], FOCUS_DYN.interval * 3, fx[1], false, true);
                });
            }

            // --- DELVER ---
            if (worn['kubejs:delver_focus'] && FOCUS_DYN.delver.nightVision
                && p.y < FOCUS_DYN.delver.maxY && !p.block.canSeeSky) {
                p.potionEffects.add('minecraft:night_vision', 400, 0, false, false);
            }
        } catch (e) {
            focusDynFail('player loop', e);
        }
    });
});
