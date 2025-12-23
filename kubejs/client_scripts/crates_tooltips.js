ItemEvents.tooltip(event => {
    // --- 1. ANCIENT LOOT CRATE ---
	event.addAdvanced('kubejs:ancient_crate', (item, advanced, text) => {
        text.add(1, Text.of('A weathered chest bound in rusted iron.').gray().italic())

        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for mechanics.').gray()])
        } else {
            text.add(2, Text.of('§6Mechanics:'))
            text.add(3, Text.of(' • 5-second cooldown (Bypass with §bSkeleton Key§f).').white())
            text.add(4, Text.of(' • 15% chance to be a §cCrate Mimic§f trap.').white())
            
            text.add(5, Text.of('§dSpecial Features:'))
            text.add(6, Text.of(' • §eJackpot Chain:§f 10% chance to find 2 bonus crates inside.').white())
            text.add(7, Text.of(' • §bDimensional Loot:§f Rewards scale with your dimension.').white())
         
            text.add(8, [Text.of('§2Luck Bonus: §fRain, Night, and Luck potions boost rolls.')])
        }
    })

    // --- 2. RITUAL CRATE ---
    event.addAdvanced('kubejs:ritual_crate', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for details.').gray()])
        } else {
            text.add(1, Text.of('• Must be opened in specific environments.').white())
            text.add(2, Text.of('• Valid: Deep Water (Y < 0) or High Peaks (Y > 200).').aqua())
            text.add(3, Text.of('• Improper use may disturb restless spirits.').darkGray())
        }
    })

    // --- 3. CHAOS CRATE ---
    event.addAdvanced('kubejs:chaos_crate', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for details.').gray()])
        } else {
            text.add(1, Text.of('• Contains the essence of imprisoned Guardians.').white())
            text.add(2, Text.of('• Summon 3 themed mobs; slay them to claim the prize.').red())
            text.add(3, Text.of('• Rewards include theme-specific rare materials.').gold())
        }
    })

    // --- 4. WISHING WELL ---
    event.addAdvanced('kubejs:wishing_crate', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for details.').gray()])
        } else {
            text.add(1, Text.of('• Requires a sacrifice to function.').white())
            text.add(2, Text.of('• Hold a Diamond, Emerald, or Netherite in Off-Hand.').gold())
        }
    })

	event.addAdvanced('kubejs:botanical_crate', (item, advanced, text) => {
        let stage = (item.nbt && item.nbt.growthStage) ? item.nbt.growthStage : 0;
        
        text.add(1, Text.of('Wrapped in thick, ancient vines.').darkGreen().italic())
        
        if (event.isShift()) {
            text.add(2, Text.of('§2Growth Rules:'))
            text.add(3, Text.of(' • Hold §fBone Meal§r in your §eOff-Hand§r while using.').white())
            text.add(4, Text.of(' • Must reach §aStage 3§r to bloom into loot.').white())
            text.add(5, Text.of(` • Current Growth: §6${stage}/3`).yellow())
        } else {
            text.add(2, [Text.of('Current Growth: ').gray(), Text.of(`${stage}/3`).green()])
            text.add(3, [Text.of('Hold ').gray(), Text.of('[Shift]').gold()])
        }
    })

    // --- 5. SUPPORT ITEMS (Keys & Hearts) ---
	event.addAdvanced('kubejs:skeleton_key', (item, advanced, text) => {
			text.add(1, Text.of('A master-work of locksmithing.').gray().italic())

			if (!event.isShift()) {
				text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('to see use.').gray()])
			} else {
				text.add(2, Text.of('§bFunctions:'))
				text.add(3, Text.of(' • Instantly unlocks Ancient Crates.').white())
				text.add(4, Text.of(' • Consumed upon use. Hold in Off-Hand.').gray())
			}
	})

	event.addAdvanced('kubejs:echo_crate', (item, advanced, text) => {
        text.add(1, Text.of('Hyper-sensitive crystalline structure.').gray().italic())
        if (event.isShift()) {
            text.add(2, Text.of('§3Acoustic Rules:'))
            text.add(3, Text.of(' • Cannot open if hostile vibrations (mobs) are near.').white())
            text.add(4, Text.of(' • §bHarmony:§f Jukebox music overrides mob noise and boosts loot.').white())
            text.add(5, Text.of(' • §dChance to release a Sonic Pulse that repels enemies.').darkPurple())
        } else {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold()])
        }
    })

    event.addAdvanced('kubejs:mimic_heart', (item, advanced, text) => {
        if (event.isShift()) {
            text.add(1, Text.of('• A pulsing organ harvested from a Crate Mimic.').darkRed())
            text.add(2, Text.of('• Essential for reforging Broken Keys.').white())
        }
    })
	
	// --- ECTOPLASM (GHAST TEARS) ---
    event.addAdvanced('minecraft:ghast_tear', (item, advanced, text) => {
        text.add(1, Text.of('Restless residue from a Ritual Wraith.').gray().italic())

        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for lore.').gray()])
        } else {
            text.add(2, Text.of('§dOccult Properties:'))
            text.add(3, Text.of(' • Harvested from spirits summoned by failed rituals.').white())
            text.add(4, Text.of(' • Can be used as a high-tier catalyst in occult crafting.').white())
            text.add(5, Text.of(' • Radiates a cold, ethereal energy.').aqua())
        }
	//END	
    })
})	