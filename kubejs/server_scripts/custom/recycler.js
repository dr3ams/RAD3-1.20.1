// Priority: 0

/**
 * ITEM RECYCLER SCRIPT - GRANULAR XP EDITION
 * Logic: Loops through every item in a stack individually.
 * Results: Summed and applied after the loop completes.
 */

ItemEvents.rightClicked('kubejs:item_recycler', event => {
    const { player, hand, level } = event

    // --- 1. PRE-FLIGHT CHECKS ---
    if (level.isClientSide()) return 
    if (hand != 'MAIN_HAND') return
    if (player.getCooldowns().isOnCooldown(Item.of('kubejs:item_recycler').item)) return

    let offhandItem = player.offHandItem
    if (offhandItem.empty) {
        player.tell('§cNothing in offhand to recycle!')
        return
    }

    // --- 2. COST VALIDATION (REMOVED) ---
    /*
    if (player.totalExperience < 1) {
        player.tell('§cYou need at least 1 Experience Point to power the Recycler!')
        return
    }
    */

    // --- 3. MASTERY SYSTEM ---
    if (!player.persistentData.recycledCount) player.persistentData.recycledCount = 0
    if (!player.persistentData.totalRecycledXP) player.persistentData.totalRecycledXP = 0 
    
    let countBefore = player.persistentData.recycledCount
	// Default stats for a "Novice"							   
    let mastery = { tier: "Novice", fail: 0.10, jackpot: 0.01 }

    // Rank Thresholds
    if (countBefore >= 100000) { mastery = { tier: "Grandmaster", fail: 0.01, jackpot: 0.06 } }
    else if (countBefore >= 75000) { mastery = { tier: "Mythic", fail: 0.02, jackpot: 0.055 } }
    else if (countBefore >= 50000) { mastery = { tier: "Legend", fail: 0.03, jackpot: 0.05 } }
    else if (countBefore >= 40000) { mastery = { tier: "Elite", fail: 0.035, jackpot: 0.045 } }
    else if (countBefore >= 30000) { mastery = { tier: "Artisan", fail: 0.04, jackpot: 0.04 } }
    else if (countBefore >= 20000) { mastery = { tier: "Master", fail: 0.045, jackpot: 0.035 } }
    else if (countBefore >= 15000) { mastery = { tier: "Professional", fail: 0.05, jackpot: 0.03 } }
    else if (countBefore >= 10000) { mastery = { tier: "Specialist", fail: 0.06, jackpot: 0.025 } }
    else if (countBefore >= 5000)  { mastery = { tier: "Expert", fail: 0.07, jackpot: 0.02 } }
    else if (countBefore >= 3000)  { mastery = { tier: "Craftsman", fail: 0.08, jackpot: 0.015 } }
    else if (countBefore >= 1000)  { mastery = { tier: "Journeyman", fail: 0.09, jackpot: 0.012 } }

    // --- 4. RECYCLE TABLES (When you recycle specific item - gives specific loot) ---
    /*
    const recycleTable = {
        'minecraft:iron_ingot': { reward: 'apotheosis:common_material', ratio: 1 },
        'minecraft:gold_ingot': { reward: 'apotheosis:uncommon_material', ratio: 1 },
        'minecraft:diamond': { reward: 'apotheosis:rare_material', ratio: 1 },
        'minecraft:netherite_ingot': { reward: 'apotheosis:epic_material', ratio: 1 },
        'ars_nouveau:mana_gem': { reward: 'apotheosis:gem_dust', ratio: 2 },
        'undergarden:cloggrum_ingot': { reward: 'apotheosis:common_material', ratio: 1 }
    }
	//default items to give for recycling								  
    const junkPool = [
        'apotheosis:gem_dust',
        'minecraft:iron_nugget',
        'minecraft:gold_nugget'
    ];
    */

    let inputID = offhandItem.id
    let stackSize = offhandItem.count
    let isValuable = (inputID.includes('diamond') || inputID.includes('netherite') || inputID.includes('gem'))

    // Simulation Counters
    let totalXPGained = 0
    let totalGemsGained = 0
    let jamCount = 0

    // --- 5. RECIPE IDENTIFICATION (for specific drops) ---
    /*
    let inputTags = offhandItem.tags.toArray()
    let recipe = recycleTable[inputID]
    if (!recipe) {
        for (let tag of inputTags) {
            let tagString = `#${tag.location.toString()}`
            if (recycleTable[tagString]) { recipe = recycleTable[tagString]; break }
        }
    }
    */

    // --- 6. CORE REWARD CALCULATION (GRANULAR LOOP) ---
    for (let i = 0; i < stackSize; i++) {
		// Roll for individual item Jam									   
        if (Math.random() < mastery.fail) {
            jamCount++
        } else {
            // Roll for individual XP (70% chance)
            if (Math.random() < 0.70) {
                totalXPGained += 1
            }

            // Roll for individual Jackpot (only for valuable items)
            if (isValuable && Math.random() < mastery.jackpot) {
                if (Math.random() < 0.5) {
                    totalGemsGained += 1
                } else {
                    totalXPGained += 10 // Jackpot XP bonus
                }
            }
        }
    }

    // --- 7. APPLY RESULTS ---
	// Process XP			 
    if (totalXPGained > 0) {
        player.giveExperiencePoints(totalXPGained)
        player.persistentData.totalRecycledXP += totalXPGained
        player.setStatusMessage(Text.green(`+${totalXPGained} XP extracted from stack`))
		player.tell(`§a+${totalXPGained} XP extracted from materials.`)
    }

	// Process Gems			   
    if (totalGemsGained > 0) {
        for (let j = 0; j < totalGemsGained; j++) {
            player.give(Item.of('kubejs:gem_shard'))
        }
        player.tell(`§d§lJACKPOT! §fYou extracted §e${totalGemsGained}x Gems§f from the residue!`)
        player.playSound('minecraft:ui.toast.challenge_complete', 0.5, 2.0)
    }

    // --- 8. MACHINE JAM / COOLDOWN LOGIC ---
    if (jamCount > 0) {
		// If any item jammed, apply the 10s (200 tick) penalty													   
        player.addItemCooldown('kubejs:item_recycler', 200)
        player.tell(`§4[!] The machine jammed §l${jamCount}§r§4 times! Clearing gears... (10s)`)
        player.playSound('minecraft:entity.zombie.break_wooden_door', 0.5, 0.5)
        player.playSound('minecraft:block.anvil.land', 0.5, 0.5)
    } else {
		// Standard operational cooldown (1.5s)									   
        player.addItemCooldown('kubejs:item_recycler', 30)
    }

    // --- 9. DATA UPDATING & LEVEL UP LOGIC ---
    let countAfter = countBefore + stackSize 
    player.persistentData.recycledCount = countAfter 

    const thresholds = [
        { limit: 1000, name: "§bJourneyman" },
        { limit: 3000, name: "§9Craftsman" },
        { limit: 5000, name: "§3Expert" },
        { limit: 10000, name: "§aSpecialist" },
        { limit: 15000, name: "§2Professional" },
        { limit: 20000, name: "§5Master" },
        { limit: 30000, name: "§6Artisan" },
        { limit: 40000, name: "§eElite" },
        { limit: 50000, name: "§cLegend" },
        { limit: 75000, name: "§4Mythic" },
        { limit: 100000, name: "§d§lGrandmaster" }
    ]

    thresholds.forEach(t => {
        if (countBefore < t.limit && countAfter >= t.limit) {
            player.tell("§b---------------------------------")
            player.tell(`§d§lCONGRATULATIONS! §fYou have reached the rank of ${t.name}§f!`)
            player.tell("§7Your efficiency has improved and your jackpot potential is higher")
            player.tell("§b---------------------------------")
            player.playSound('minecraft:ui.toast.challenge_complete', 1.0, 1.0)
            player.playSound('minecraft:entity.player.levelup', 1.0, 0.5)
            level.spawnParticles('minecraft:totem_of_undying', true, player.x, player.y + 1, player.z, 1, 1, 1, 50, 0.1)
        }
    })

    // --- 10. FINALIZE OPERATION ---
    level.spawnParticles('minecraft:large_smoke', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 10, 0.05)
    player.playSound('minecraft:block.grindstone.use', 1.0, 0.8)
    player.playSound('minecraft:entity.experience_bottle.throw', 0.5, 1.5)

    let recycledName = offhandItem.displayName
    offhandItem.setCount(0) 
    
    player.tell(Text.of(`§b[${mastery.tier}] §fProcessed: ${stackSize}x ${recycledName.string} §7(${stackSize - jamCount} Successes)`))
	

    event.cancel() 
})

// --- JOURNAL SCRIPT ---
ItemEvents.rightClicked('kubejs:recycling_journal', event => {
    const { player } = event
    let total = player.persistentData.recycledCount || 0
    let totalXP = player.persistentData.totalRecycledXP || 0 
    
    let tier = "§fNovice"; 
	let nextGoal = 1000; 
	let failRate = "10%"; 
	let jackpotRate = "1%"
    
    if (total >= 100000) { tier = "§d§lGrandmaster"; nextGoal = "MAX"; failRate = "1%"; jackpotRate = "6%" } 
    else if (total >= 75000) { tier = "§4Mythic"; nextGoal = 100000; failRate = "2%"; jackpotRate = "5.5%" }
    else if (total >= 50000) { tier = "§cLegend"; nextGoal = 75000; failRate = "3%"; jackpotRate = "5%" }
    else if (total >= 40000) { tier = "§eElite"; nextGoal = 50000; failRate = "3.5%"; jackpotRate = "4.5%" }
    else if (total >= 30000) { tier = "§6Artisan"; nextGoal = 40000; failRate = "4%"; jackpotRate = "4%" }
    else if (total >= 20000) { tier = "§5Master"; nextGoal = 30000; failRate = "4.5%"; jackpotRate = "3.5%" }
    else if (total >= 15000) { tier = "§2Professional"; nextGoal = 20000; failRate = "5%"; jackpotRate = "3%" }
    else if (total >= 10000) { tier = "§aSpecialist"; nextGoal = 15000; failRate = "6%"; jackpotRate = "2.5%" }
    else if (total >= 5000) { tier = "§3Expert"; nextGoal = 10000; failRate = "7%"; jackpotRate = "2%" }
    else if (total >= 3000) { tier = "§9Craftsman"; nextGoal = 5000; failRate = "8%"; jackpotRate = "1.5%" }
    else if (total >= 1000) { tier = "§bJourneyman"; nextGoal = 3000; failRate = "9%"; jackpotRate = "1.2%" }

    player.tell(Text.of("§b--- Recycling Mastery Journal ---").bold())
    player.tell(Text.of(`§7Current Rank: ${tier}`))
    player.tell(Text.of(`§7Total Items Processed: §e${total.toLocaleString()}`))
    player.tell(Text.of(`§7Total Experience Gained: §a${totalXP.toLocaleString()} XP`))
    if (nextGoal !== "MAX") {
        let remaining = nextGoal - total
        player.tell(Text.of(`§7Next Tier in: §a${remaining.toLocaleString()} §7items.`))
    }
    player.tell(Text.of("§8> §7Current Failure Rate: §c" + failRate))
    player.tell(Text.of("§8> §7Current Jackpot Rate: §d" + jackpotRate))
    player.tell(Text.of("§b------------------------------"))
    player.playSound('minecraft:item.book.page_turn', 1.0, 1.0)
})