ItemEvents.tooltip(event => {
    // 1. Original Living Branch
    event.addAdvanced('kubejs:living_branch', (item, advanced, text) => {
		text.add(1, Text.of('Pulses with the heartbeat of the forest.').green().italic())
        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for mechanics.').gray()])
        } else {
            text.add(2, Text.of('§6Mechanics:'))
            text.add(3, Text.of(' • §eTransmutation:§f Works on Wood, Dirt, Cobblestonea and Stone Bricks').white())
            text.add(4, Text.of(' • §2Fuel:§f Consumes §fBone Meal§f from inventory.').white())
        }
    })

    // 2. Branch of Bridging
    event.addAdvanced('kubejs:living_branch_bridging', (item, advanced, text) => {
        text.add(1, Text.of('The air thickens where this branch is pointed.').gray().italic())
        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for mechanics.').gray()])
        } else {
            text.add(2, Text.of('§6Mechanics:'))
            text.add(3, Text.of(' • §eSky-Walking:§f Places 5 horizontal persistent leaves.').white())
            text.add(4, Text.of(' • §bPrecision:§f Stops automatically if it hits a solid block.').white())
            text.add(5, Text.of(' • §2Fuel:§f Consumes §f1 Bone Meal§f per 5-block burst.').white())
        }
    })

    // 3. Buzzing Branch
    event.addAdvanced('kubejs:buzzing_living_branch', (item, advanced, text) => {
        text.add(1, Text.of('You can hear a faint humming vibrating from the wood.').gray().italic())
        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for mechanics.').gray()])
        } else {
            text.add(2, Text.of('§6Mechanics:'))
            text.add(3, Text.of(' • §eSwarm:§f Summons 3 Guardian Bees to defend the user.').white())
            text.add(4, Text.of(' • §bLoyalty:§f Bees teleport to stay within range.').white())
            text.add(5, Text.of(' • §dLifespan:§f Bees vanish after 60 seconds').white())
            text.add(6, Text.of(' • §2Fuel:§f Consumes §fBone Meal§f from inventory').white())
        }
    })
	
	
	    event.addAdvanced('kubejs:gamblers_coin', (item, advanced, text) => {
        text.add(1, Text.of('Weighty, gold-plated, and unpredictable.').yellow().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for details').gold())
        } else {
            text.add(2, Text.of('§6Abilities:'))
            text.add(3, Text.of(' • Right-Click: Flip for massive Luck or Bad Luck.').white())
            text.add(4, Text.of(' • Fuel: Consumes 1 Gold Ingot per flip.').gray())
        }
    })
	event.addAdvanced('kubejs:echo_extractor', (item, assistant, text) => {
        text.add(1, Text.of("A brass-bound device that hums with the frequency of stolen time.").gray().italic());

        if (!event.shift) {
            text.add(2, Text.of("Hold [Shift] for mechanics.").yellow());
        } else {
            text.add(2, Text.of("Mechanics:").white());
            text.add(3, Text.of(" §6Right-Click:§r Drains essence from targeted resonant blocks"));
            text.add(4, Text.of(" §bEcho Discovery:§r Grants a §dSealed Tome§r containing themed loot"));
            text.add(5, Text.of(" §2Cost:§r Induces heavy slowness and triggers a 20s cooldown"));
            text.add(6, Text.of(" §4Backfire:§r Low Expertise increases the chance of a §cTemporal Backfire§r"));
			text.add(7, Text.of(" §4Failure:§r Has a 5% permanent chance to fail"));
        }
    })
	
    event.addAdvanced('kubejs:sealed_tome', (item, assistant, text) => {
        // Line 1: Lore
        text.add(1, Text.of("A book filled with whispers of a forgotten era").gray().italic());

        if (!event.shift) {
            text.add(2, Text.of("Hold [Shift] to sense the contents.").yellow());
        } else {
            text.add(2, Text.of("Mechanics:").white());

            // Determine Theme from NBT
            let themeId = (item.nbt && item.nbt.theme) ? item.nbt.theme : "unknown";
            // Capitalize for display
            let displayTheme = themeId.charAt(0).toUpperCase() + themeId.slice(1);

            text.add(3, Text.of(` 1. §bResonance:§r This tome contains §e${displayTheme}§r echoes.`));
            text.add(4, Text.of(" 2. §6Usage:§r Right-click to break the seal and claim the contents."));
            text.add(5, Text.of(" 3. §dReward:§r May contain rare artifacts or materials from this theme."));
        }
    });
	
	const dice = [
        { id: 'kubejs:d6', lore: 'A simple wooden cube with carved pips.', faces: 6 },
        { id: 'kubejs:d10', lore: 'A sharp, double-pyramid favored by fate-seekers.', faces: 10 },
        { id: 'kubejs:d12', lore: 'A complex geometric shape humming with energy.', faces: 12 },
        { id: 'kubejs:d20', lore: 'The ultimate arbiter of fate.', faces: 20 }
    ]

    dice.forEach(die => {
        event.addAdvanced(die.id, (item, advanced, text) => {
            text.add(1, Text.gray(die.lore).italic())
            if (!event.shift) {
                text.add(2, Text.white('Hold [Shift] for mechanics.'))
            } else {
                text.add(2, Text.gold('Mechanics:'))
                text.add(3, Text.of(' • ').white().append(Text.gold(`Chaos Roll: `).append(Text.white(`Rolls 1-${die.faces}.`))))
                text.add(4, Text.of(' • ').white().append(Text.aqua('Outcome: ').append(Text.white('Triggers a random effect based on the result.'))))
                text.add(5, Text.of(' • ').white().append(Text.lightPurple('Lifespan: ').append(Text.white('1 Durability per use.'))))
                text.add(6, Text.of(' • ').white().append(Text.darkGreen('Cost: ').append(Text.white('5 Experience Levels.'))))
            }
        })
    })
///END	
})