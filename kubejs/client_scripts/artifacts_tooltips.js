ItemEvents.tooltip(event => {
    // 1. Original Living Branch
    event.addAdvanced('kubejs:living_branch', (item, advanced, text) => {
		text.add(1, Text.of('Pulses with the heartbeat of the forest.').green().italic())
        if (!event.isShift()) {
            text.add(2, [Text.of('Hold ').gray(), Text.of('[Shift] ').gold(), Text.of('for mechanics.').gray()])
        } else {
            text.add(2, Text.of('§6Mechanics:'))
            text.add(3, Text.of(' • §eTransmutation:§f Works on Wood, Dirt, Cobblestone and Stone Bricks').white())
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
	
	event.addAdvanced('kubejs:gamble_coin', (item, advanced, text) => {
				
			text.add(1, Text.of('§71. Hold this coin in your §fmainhand').white()),
			text.add(2, Text.of('§72. §6Gold Ingot §7and a bit of §4EXP §7required to spin').white()),
			text.add(3, Text.of('§73. §fRight-click §7to spin').white()),
			text.add(4, Text.of('').white()),
			text.add(5, Text.of('§8• Cooldown: 5s between spins.').white()),
			text.add(6, Text.of('§8• Spin limit resets periodically').white())
	})
	
	
	event.addAdvanced('lrdynamicdungeon:dungeon_pass', (item, advanced, text) => {
			text.add(Text.of(''));
			text.add(Text.of('§7Single-use entry to the dungeon'));
			text.add(Text.of('§7Can be found as loot or bought for Dungeon or Raid Coin'));
			text.add(Text.of(''));
			text.add(Text.of('§8Use §7/raidstats §8to view your rank & stats'));
			text.add(Text.of('§8Use §7/raidhelp §8for system info'));
    });
	
	event.addAdvanced('kubejs:entropic_cent', (item, advanced, text) => {
        text.add(1, Text.of('Weighty, gold-plated, and unpredictable.').yellow().italic())
        if (!event.isShift()) {
            text.add(2, Text.of('Hold [Shift] for details').gold())
        } else {
            text.add(2, Text.of(' • Right-Click: Flip for massive Luck or Bad Luck.').white())
            text.add(3, Text.of(' • Consumes 1 Gold Block per flip.').gray())
        }
    })
	
		const tooltipData = [
        {
            id: 'kubejs:rusty_key',
            lore: 'An old key covered in thick, orange rust',
            mechanics: [
                '§6• Can be used to force open iron doors',
                '§2• The key is fragile and will break after one use'
            ]
        },
        {
            id: 'kubejs:unstable_battery',
            lore: 'It hums with a dangerous, flickering orange light',
            mechanics: [
                '§b• Grants massive Speed and Haste for 30 seconds',
                '§2• Causes extreme exhaustion (Hunger) after the surge',
                '§6• Right-click to consume and activate'
            ]
        },
        {
            id: 'kubejs:emergency_flare',
            lore: 'Standard issue for underground exploration',
            mechanics: [
                '§6• Ignites a bright light at your location',
                '§b• Reveals nearby hidden entities through walls',
                '§d• Burns out after 60 seconds'
            ]
        },
        {
            id: 'kubejs:bee_jar',
            lore: 'You can hear an angry buzzing inside',
            mechanics: [
                '§b• Releases 3-4 aggressive bees on impact.',
                '§d• Bees use a specialized lifespan and will despawn.',
                '§6• Perfect for creating a quick distraction.'
            ]
        },
        {
            id: 'kubejs:data_slate',
            lore: 'Some data is readable',
            mechanics: [
                '§6• Attempt to decrypt by right-clicking',
                '§2• Has a 40% chance to fail and wipe the data',
                '§b• May reveal secret coordinates or XP'
            ]
        },
		{
            id: 'kubejs:sentry_remote',
            lore: 'A cracked screen showing "Protocol: FREEZE"',
            mechanics: [
                '§b• Emits a pulse that freezes hostile movements',
                '§6• Affects all monsters in a 10-block radius',
                '§d• Powered by Aetheric cloud energy'
            ]
        },
        {
            id: 'kubejs:bioscan_syringe',
            lore: 'Used to extract samples from biological anomalies',
            mechanics: [
                '§2• Right-click a Glowing Bee to harvest energy',
                '§6• Yields a Charged Stinger upon success',
                '§d• The host is consumed during extraction'
            ]
        },
        {
            id: 'kubejs:magnetic_grapple',
            lore: 'An industrial winch modified for urban climbing.',
            mechanics: [
                '§6• Pulls the user toward the targeted block',
                '§2• High risk of mechanical failure (Durability)',
                '§b• Maximum effective range: 20 blocks'
            ]
        },
        {
            id: 'kubejs:thermal_paste',
            lore: 'Highly corrosive chemical compound',
            mechanics: [
                '§2• Instantly dissolves Iron Bars and Trapdoors',
                '§6• Consumed on contact with metal',
                '§b• Warning: Do not apply to skin'
            ]
        },
        {
            id: 'kubejs:echo_locator',
            lore: '"I can hear the loot breathing..."',
            mechanics: [
                '§b• Pings the location of nearby storage containers',
                '§6• Effective through solid walls and floors'
            ]
        },
        {
            id: 'kubejs:kinetic_dampener',
            lore: 'Laws of physics? More like suggestions',
            mechanics: [
                '§b• Instantly halts all vertical and horizontal velocity',
                '§6• Resets fall distance to prevent impact damage',
                '§2• High energy drain per use'
            ]
        },
        {
            id: 'kubejs:scavenger_magnet',
            lore: 'Because bending down is too much work',
            mechanics: [
                '§b• Pulsates to pull nearby loose items toward you',
                '§6• 12-block effective radius',
                '§2• Uses magnetic resonance to attract loot'
            ]
        },
        {
            id: 'kubejs:translocation_coil',
            lore: "I'd rather be there, and you'd rather be here",
            mechanics: [
                '§d• Swaps positions with a targeted living entity',
                '§b• Maximum range: 25 blocks',
                '§c• Warning: Extremely high durability cost'
            ]
        },
		{
            id: 'kubejs:berserk_draught',
            lore: "A violent tonic that numbs pain and fuels rage",
            mechanics: [
                '§F• Grants §bSpeed§f and §eStrength§f buffs',
                '§b• High §cHunger§f loss after 20 seconds'
            ]
        },
		{
            id: 'kubejs:bottled_ice',
            lore: "A glass flask containing a shard of true-ice",
            mechanics: [
                '§f• Effective against liquids or entities',
                '§b• Must be thrown directly at a liquid'
            ]
        },
		{
            id: 'kubejs:dungeon_recall',
            lore: "A pulsating artifact that remembers where you started",
            mechanics: [
                '§f• Teleports user to the dungeon entry coordinates',
                '§2• Consumable (1 use)',
                '§8• Only functions within the Raid dimension'
            ]
        },
		{
            id: 'kubejs:ice_shard',
            lore: "The frozen shard from an ancient ice elemental",
            mechanics: [
                '§6• Immobilizes all nearby enemies',
                '§e• 8 blocks radius',
                '§d• Effect lasts 3 seconds',
                '§2• Consumable (1 use)',
                '§8• Only functions within the Raid dimension'
            ]
        },
		{
            id: 'kubejs:kill_multiplier',
            lore: "Time is a suggestion, and the Void suggests you hurry",
            mechanics: [
                '§6• Only functions within the Raid dimension',
                '§e• Multiplies all kill scores',
                '§d• Effect lasts for 45 seconds',
                '§2• Does not affect chest loot scores',
                '§8• Consumable (1 use)'
            ]
        },
		{
			id: 'kubejs:void_core',
			lore: "It pulses with a gravity that feels like a question you can't answer.",
			mechanics: [
				'§6• §fEmits a powerful §eGlowing§f aura upon use.',
				'§b• §fWhile glowing, §dStone§f, §dSands§f, and §dEarth§f are erased',
				'§2• Crouch [Shift] to stabilize the core and prevent destruction',
				'§e• Does not affect player-made structures or precious materials',
				'§d• The aura dissipates after 30 seconds.',
				'§8• ! Handle with extreme caution !'
			]
		}
    ];

    tooltipData.forEach(item => {
        event.addAdvanced(item.id, (stack, advanced, text) => {
            // Line 0 is the Item Name. Line 1 is our Italicized Lore.
            text.add(1, Text.of(item.lore).italic().gray());

            if (!event.shift) {
                text.add(2, Text.of("Hold [Shift] to see more info").yellow());
            } else {
                item.mechanics.forEach((m, index) => {
                    // Start adding from line 3 onwards
                    text.add(2 + index, Text.of(m).white());
                });
            }
        });
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