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
///END	
})