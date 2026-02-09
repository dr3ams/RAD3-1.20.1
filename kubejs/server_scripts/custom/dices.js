ItemEvents.rightClicked('kubejs:d6', e => rollDice(e, 6))
ItemEvents.rightClicked('kubejs:d10', e => rollDice(e, 10))
ItemEvents.rightClicked('kubejs:d12', e => rollDice(e, 12))
ItemEvents.rightClicked('kubejs:d20', e => rollDice(e, 20))

const playEffect = (level, player, type) => {
    const { x, y, z } = player
    switch (type) {
        case 'fail':
            level.spawnParticles('minecraft:large_smoke', true, x, y + 1, z, 0.5, 0.5, 0.5, 15, 0.05)
            player.playSound('entity.warden.tendril_clicks', 1.0, 0.5)
            break
        case 'standard':
            level.spawnParticles('minecraft:electric_spark', true, x, y + 1, z, 0.3, 0.3, 0.3, 10, 0.1)
            player.playSound('block.amethyst_block.step', 0.8, 1.2)
            break
        case 'magic':
            level.spawnParticles('minecraft:enchant', true, x, y + 1, z, 0.5, 0.5, 0.5, 30, 0.2)
            player.playSound('block.enchantment_table.use', 1.0, 1.0)
            break
        case 'legendary':
            level.spawnParticles('minecraft:totem_of_undying', true, x, y + 1, z, 1.0, 1.0, 1.0, 100, 0.3)
            player.playSound('ui.toast.challenge_complete', 1.0, 1.0)
            break
    }
}

const rollDice = (event, maxFaces) => {
    const { player, level, server, item } = event
    
    // Cost Check
    if (player.xpLevel < 5) {
        player.setStatusMessage('§2You need 5 levels to roll!')
        return
    }
    player.addXPLevels(-5)

    // 1. Calculate the "Die Roll" (Visual Message)
    let dieResult = Math.floor(Math.random() * maxFaces) + 1
    
    // 2. Pick the random outcome from the list of 100
    let randomOutcome = Math.floor(Math.random() * 100) + 1
    
    server.tell([Text.white('The Die lands on: '), Text.gold(dieResult.toString())])
    player.tell(`§7(Chaos Outcome triggered: ${randomOutcome}/100)`)

    // 3. Trigger the outcome (Logic defined below)
	level.spawnParticles('minecraft:witch', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 20, 0.1)
	player.playSound('block.enchantment_table.use', 1.0, 1.0)
    triggerOutcome(randomOutcome, player, level, server, item)
	
    
    // 4. Durability Logic
    item.damageValue++
    if (item.damageValue >= item.maxDamage) {
        item.count-- // Breaks the item
        player.playSound('entity.item.break')
        player.tell('§cYour die has shattered into dust!')
    }
    
    player.swing()
}

// --- 4. THE FULL 100 OUTCOMES ---
	function triggerOutcome(num, player, level, server, item) {
		// INTERNAL HELPERS (Fixing the crashes)
		const applyEffect = (id, duration, amp) => {
			let modId = id.split(':')[0]
			// Check if mod exists OR if it's vanilla minecraft
			if (Platform.isLoaded(modId) || modId === 'minecraft') {
				player.potionEffects.add(id, duration, amp)
			} else {
				console.warn(`Skipping effect ${id} because mod ${modId} is not installed.`)
			}
		}

	function createAndSpawn(level, type, x, y, z, callback) {
		let entity = level.createEntity(type)
		entity.setPosition(x, y, z)
		if (callback) callback(entity)
		entity.spawn()
	}

switch (num) {
        // --- 1-20: BASE WORLD ---
        case 1: 
			playEffect(level, player, 'fail')
            player.tell('§4Critical Failure! §7The die rejects your existence...')
            applyEffect('minecraft:glowing', 100, 0)
            server.scheduleInTicks(100, c => { level.explode(player, player.x, player.y, player.z, 2, false, "none") }); break
        case 2: player.tell('§8Darkness falls...'); applyEffect('minecraft:blindness', 200, 0); break
        case 3: player.tell('§fLosing touch with the ground...'); applyEffect('minecraft:levitation', 100, 1); break
        case 4: player.tell('§eThe sky\'s wrath!'); level.spawnLightning(player.x, player.y, player.z, true); break
        case 5: 
            playEffect(level, player, 'fail')
            player.tell('§2A meager offering...'); player.give(Item.of('minecraft:rotten_flesh')); break
        case 6: player.tell('§cYour stomach growls...'); applyEffect('minecraft:hunger', 400, 1); break
        case 7: player.tell('§7Your legs feel like lead...'); applyEffect('minecraft:slowness', 200, 2); break
        case 8: player.tell('§bGills manifest...'); applyEffect('minecraft:water_breathing', 1200, 0); break
        case 9: player.tell('§6Cooling skin...'); applyEffect('minecraft:fire_resistance', 1200, 0); break
        case 10: player.tell('§eGlint of wealth!'); player.give(Item.of('minecraft:gold_ingot')); break
        case 11: player.tell('§aSpring in your step!'); applyEffect('minecraft:jump_boost', 600, 2); break
        case 12: player.tell('§dCells knitting together...'); applyEffect('minecraft:regeneration', 400, 1); break
        case 13: 
			playEffect(level, player, 'standard')
            player.tell('§bManifesting carbon...')
            applyEffect('minecraft:glowing', 200, 0)
            server.scheduleInTicks(200, c => { player.give(Item.of('minecraft:diamond')) }); break
        case 14: player.tell('§fPiercing the veil...'); applyEffect('minecraft:night_vision', 2400, 0); break
        case 15: player.tell('§eRapid strikes!'); applyEffect('minecraft:haste', 1200, 1); break
        case 16: player.tell('§2Village riches!'); player.give(Item.of('minecraft:emerald_block')); break
        case 17: player.tell('§8Hardened skin...'); applyEffect('minecraft:resistance', 600, 2); break
        case 18: player.tell('§dProtective aura...'); applyEffect('minecraft:absorption', 600, 4); break
        case 19: // Bee Timer (using your memorized Glowing effect logic)
            player.tell('§eThe swarm arrives...')
            applyEffect('minecraft:glowing', 300, 0)
            level.spawn('minecraft:bee', b => {
                b.setPosition(player.x, player.y + 1, player.z)
                b.addPotionEffect({type: 'minecraft:glowing', duration: 300, amplifier: 0})
                server.scheduleInTicks(300, c => { b.discard() })
            }); break
        case 20: player.tell('§6§lSUCCESS! §eForged in the depths...'); player.give(Item.of('minecraft:netherite_scrap')); break

        // --- 21-40: UTILITY & CHAOS ---
        case 21: player.tell('§fFading from sight...'); applyEffect('minecraft:invisibility', 600, 0); break
        case 22: player.tell('§bGravity Flip!'); applyEffect('minecraft:levitation', 40, 20); break
        case 23: 
            player.tell('§7Constructing a guardian...')
            level.spawn('minecraft:iron_golem', g => { g.setPosition(player.x, player.y, player.z) }); break
        case 24: player.tell('§6Forbidden fruit...'); player.give(Item.of('minecraft:golden_apple')); break
        case 25: player.tell('§4Arms feel heavy...'); applyEffect('minecraft:mining_fatigue', 600, 2); break
        case 26: player.tell('§cInternal combustion!'); player.setRemainingFireTicks(200); break
        case 27: player.tell('§dThe world shifts...'); applyEffect('minecraft:glowing', 100, 0)
                 server.scheduleInTicks(100, c => { player.teleportTo(level.spawnLocation.x, level.spawnLocation.y, level.spawnLocation.z) }); break
        case 28: player.tell('§5Ender essence...'); player.give(Item.of('minecraft:ender_pearl', 4)); break
        case 29: 
			playEffect(level, player, 'magic')
			player.tell('§1The ocean calls...'); 
			applyEffect('minecraft:conduit_power', 1200, 0); break
        case 30: player.tell('§2Nature Graces You.'); player.give(Item.of('minecraft:oak_sapling', 64)); break
        case 31: player.tell('§4A dark omen...'); applyEffect('minecraft:bad_omen', 1200, 0); break
        case 32: 
			playEffect(level, player, 'fail')
            player.tell('§cIgnition!'); 
            level.spawn('minecraft:tnt', tnt => { tnt.setPosition(player.x, player.y, player.z) }); break
        case 33: player.tell('§5Echoes of the Past...'); applyEffect('minecraft:glowing', 200, 0)
                 server.scheduleInTicks(200, c => { player.addItemCooldown(item, 1000) }); break
        case 34: player.tell('§eCheating death!'); player.give(Item.of('minecraft:totem_of_undying')); break
        case 35: player.tell('§aA local legend!'); applyEffect('minecraft:hero_of_the_village', 1200, 0); break
        case 36: player.tell('§7Density Increase...'); applyEffect('minecraft:slowness', 400, 5); break
        case 37: player.tell('§dLiquid knowledge...'); player.give(Item.of('minecraft:experience_bottle', 16)); break
        case 38: player.tell('§6Midas Touch?'); applyEffect('minecraft:glowing', 100, 0)
                 server.scheduleInTicks(100, c => { player.give(Item.of('minecraft:raw_gold_block')) }); break
        case 39: player.tell('§dExtra Knowledge.'); player.give(Item.of('minecraft:experience_bottle', 16)); break
        case 40: player.tell('§d§lFATE OVERLOAD! §eA rare gem found...'); player.give(Item.of('apotheosis:gem', '{gem:"apotheosis:core/guardian"}')); break

        // --- 41-50: ARS NOUVEAU ---
        case 41: player.tell('§5Sour taste...'); player.give(Item.of('ars_nouveau:source_berry', 16)); break
        case 42: player.tell('§bMental clarity...'); applyEffect('ars_nouveau:mana_regen', 600, 1); break
        case 43: 
			playEffect(level, player, 'magic')
            player.tell('§bA Starbuncle appears...'); 
            level.spawn('ars_nouveau:starbuncle', s => {
                s.setPosition(player.x, player.y, player.z)
                server.scheduleInTicks(400, c => { s.discard() })
            }); break
        case 44: player.tell('§dGlimmering gems...'); player.give(Item.of('ars_nouveau:experience_gem', 8)); break
        case 45: player.tell('§5Arcane focus...'); applyEffect('ars_nouveau:spell_damage', 600, 0); break
        case 46: player.tell('§bCondensed source...'); player.give(Item.of('ars_nouveau:source_gem')); break
        case 47: player.tell('§5Arcane Surge!'); applyEffect('ars_nouveau:recovery', 400, 0); break
        case 48: player.tell('§4A wilden stalks you...'); 
            level.spawn('ars_nouveau:wilden_stalker', w => { w.setPosition(player.x + 5, player.y, player.z) }); break
        case 49: player.tell('§fEmpty pages...'); player.give(Item.of('ars_nouveau:blank_parchment', 4)); break
        case 50: 
			playEffect(level, player, 'magic')
			player.tell('§dGift of the Archmage.'); 
			player.give(Item.of('ars_nouveau:greater_experience_gem')); break

        // --- 51-60: UNDERGARDEN ---
        case 51: player.tell('§2Corruption spreading...'); applyEffect('undergarden:decay', 200, 0); break
        case 52: player.tell('§aUnderground food...'); player.give(Item.of('undergarden:underbeans', 12)); break
        case 53: player.tell('§2Rotwalker Ambush!'); 
            level.spawn('undergarden:rotwalker', r => { r.setPosition(player.x + 2, player.y, player.z) }); break
        case 54: player.tell('§7Dull metal...'); player.give(Item.of('undergarden:cloggrum_ingot', 2)); break
        case 55: player.tell('§fDefying gravity...'); applyEffect('undergarden:featherweight', 600, 0); break
        case 56: player.tell('§bCold steel...'); player.give(Item.of('undergarden:froststeel_ingot')); break
        case 57: player.tell('§aGloomper Leap!'); applyEffect('minecraft:glowing', 100, 0)
                 server.scheduleInTicks(100, c => { applyEffect('minecraft:jump_boost', 400, 4) }); break
        case 58: player.tell('§5Utheric energy...'); player.give(Item.of('undergarden:utheric_shard', 4)); break
        case 59: player.tell('§fGlow in the dark...'); applyEffect('minecraft:glowing', 600, 0); break
        case 60: 
			playEffect(level, player, 'magic')
			player.tell('§3Forgotten Spoils.'); 
			player.give(Item.of('undergarden:forgotten_ingot')); break

        // --- 61-70: BUMBLEZONE ---
        case 61: player.tell('§eSweet crystals...'); player.give(Item.of('the_bumblezone:glistering_honey_crystal', 2)); break
        case 62: player.tell('§Wrath of the Hive!...'); applyEffect('the_bumblezone:wrath_of_the_hive', 400, 0); break
        case 63: player.tell('§eBumblezone Rift...'); applyEffect('minecraft:glowing', 200, 0)
                 server.scheduleInTicks(200, c => { player.teleportTo('the_bumblezone:the_bumblezone', player.x, 100, player.z) }); break
        case 64: player.tell('§6Liquid gold...'); player.give(Item.of('the_bumblezone:honey_bucket')); break
        case 65: player.tell('§ePollen clouds...'); player.give(Item.of('the_bumblezone:pollen_puff', 8)); break
        case 66: // Busy Worker Bee
            player.tell('§eA busy worker...'); 
            level.spawn('minecraft:bee', b => {
                b.setPosition(player.x, player.y + 1, player.z)
                b.addPotionEffect({type: 'minecraft:glowing', duration: 600, amplifier: 0})
                server.scheduleInTicks(600, c => { b.discard() })
            }); break
        case 67: player.tell('§eNectar of kings...'); player.give(Item.of('the_bumblezone:royal_jelly_bottle')); break
        case 68: player.tell('§6Honey Shield.'); applyEffect('minecraft:absorption', 1200, 2); break
        case 69: player.tell('§eSharp defense...'); player.give(Item.of('the_bumblezone:bee_stinger', 4)); break
        case 70: player.tell('§eFragmented honey...'); player.give(Item.of('the_bumblezone:honey_crystal_shards', 16)); break

        // --- 71-80: ICARIA & AETHER ---
        case 71: player.tell('§bCelestial dust...'); player.give(Item.of('aether:ambrosium_shard', 8)); break
        case 72: player.tell('§9Dizzying heights...'); applyEffect('aether:inebriation', 200, 0); break
        case 73: player.tell('§bFeather-light...'); applyEffect('minecraft:slow_falling', 600, 1); break
        case 74: player.tell('§9Cloud metal...'); player.give(Item.of('aether:zanite_gemstone')); break
        case 75: player.tell('§aGifts of the Labyrinth...'); player.give(Item.of('icaria:laurel_wreath')); break
        case 76: player.tell('§8Refined oil...'); player.give(Item.of('immersive_aircraft:fuel', 8)); break
        case 77: player.tell('§7Airship Support...'); applyEffect('minecraft:levitation', 60, 0); break
        case 78: player.tell('§7Spinning blades...'); player.give(Item.of('immersive_aircraft:propeller')); break
        case 79: player.tell('§cIncoming Payload!'); 
            level.spawn('minecraft:tnt', tnt => { tnt.setPosition(player.x, player.y + 5, player.z) }); break
        case 80: player.tell('§7Wooden frame...'); player.give(Item.of('immersive_aircraft:hull')); break

        // --- 81-90: TECH & CATACLYSM ---
        case 81: player.tell('§eIncreased focus...'); applyEffect('minecraft:haste', 2400, 1); break
        case 82: player.tell('§8Mechanical heart...'); player.give(Item.of('immersive_aircraft:engine')); break
        case 83: player.tell('§bGyro-Stabilization...'); applyEffect('minecraft:slow_falling', 600, 0); break
        case 84: player.tell('§7Steam pressure...'); player.give(Item.of('immersive_aircraft:boiler')); break
        case 85: player.tell('§6Cargo Drop.'); player.give(Item.of('minecraft:chest')); player.give(Item.of('minecraft:iron_ingot', 8)); break
        case 86: player.tell('§8Withering touch...'); applyEffect('minecraft:wither', 100, 0); break
        case 87: player.tell('§7Molten scrap...'); player.give(Item.of('cataclysm:iron_chunk', 4)); break
        case 88: player.tell('§4Ignis Breath.'); player.setRemainingFireTicks(400); break
        case 89: player.tell('§cRemnants of the forge...'); player.give(Item.of('cataclysm:burning_ashes')); break
        case 90: player.tell('§1The Abyss bites...'); applyEffect('minecraft:glowing', 150, 0)
                 server.scheduleInTicks(150, c => { applyEffect('minecraft:blindness', 200, 0); player.attack(6) }); break

        // --- 91-100: THE LEGENDARY ECHOES ---
        case 91: player.tell('§5Echoes of the void...'); player.give(Item.of('cataclysm:void_fragment')); break
        case 92: player.tell('§cMonstrous power!'); applyEffect('minecraft:strength', 600, 3); break
        case 93: player.tell('§1Deepling Spawn!'); 
            level.spawn('cataclysm:deepling', d => { d.setPosition(player.x + 3, player.y, player.z) }); break
        case 94: player.tell('§bOcean treasures...'); player.give(Item.of('cataclysm:crystallized_coral_fragments', 2)); break
        case 95: player.tell('§5Monstrosity\'s Might.'); applyEffect('minecraft:resistance', 1200, 2); break
        case 96: player.tell('§5Abyssal spawn...'); player.give(Item.of('cataclysm:abyssal_egg')); break
        case 97:
			playEffect(level, player, 'legendary')	
			player.tell('§dDimensional Breach!'); applyEffect('minecraft:glowing', 100, 0)
            server.scheduleInTicks(100, c => { player.teleportTo('minecraft:the_end', player.x, 100, player.z) }); break
        case 98: 
			playEffect(level, player, 'legendary')
			player.tell('§6§lRELIC UNEARTHED!'); 
			player.give(Item.of('relics:relic_case')); break
        case 99: player.tell('§b§lFATE BENDER!'); player.give(Item.of('ars_nouveau:source_gem_block')); break
        case 100: 
			playEffect(level, player, 'legendary')
            player.tell('§d§lGOD OF THE DIE!'); 
            applyEffect('minecraft:regeneration', 2400, 4)
            player.give(Item.of('cataclysm:infernal_forge')); break

        default:
            player.tell(`§7Resonance Level: ${num}`);
            applyEffect('minecraft:speed', 200, 0); break
    }
}

/////////////////////////
///////////////////////// UNFINISHED DICE ///
/////////////////////////

// --- UPDATED HELPER FOR BROKEN EFFECTS ---
const playBrokenEffect = (level, player, type) => {
    const { x, y, z } = player
    
    switch (type) {
        case 'fail':
            level.spawnParticles('minecraft:large_smoke', true, x, y + 1, z, 0.5, 0.5, 0.5, 15, 0.05)
            player.playSound('minecraft:entity.warden.tendril_clicks', 1.0, 0.5) 
            break
        case 'standard':
            level.spawnParticles('minecraft:electric_spark', true, x, y + 1, z, 0.3, 0.3, 0.3, 10, 0.1)
            player.playSound('minecraft:block.amethyst_block.step', 0.8, 1.2)
            break
        case 'magic':
            level.spawnParticles('minecraft:enchant', true, x, y + 1, z, 0.5, 0.5, 0.5, 30, 0.2)
            player.playSound('minecraft:block.enchantment_table.use', 1.0, 1.0)
            break
        case 'legendary':
            level.spawnParticles('minecraft:totem_of_undying', true, x, y + 1, z, 1.0, 1.0, 1.0, 100, 0.3)
            player.playSound('minecraft:ui.toast.challenge_complete', 1.0, 1.0)
            break
        case 'glitch':
            level.spawnParticles('minecraft:crit', true, x, y + 1, z, 0.1, 0.1, 0.1, 3, 0.05)
            player.playSound('minecraft:block.iron_trapdoor.close', 0.2, 1.8)
            break
    }
}

function triggerUnfinishedOutcome(num, player, level, server) {
    // Baseline sound for every single roll
    playBrokenEffect(level, player, 'glitch')

    switch (num) {
        // --- 1-20: BASE WORLD GLITCHES ---
        case 1: player.tell('§4Critical Jam! §7§kERR_001 §r§7A puff of black smoke escapes.'); playBrokenEffect(level, player, 'fail'); break
        case 2: player.tell('§8The die feels freezing cold. The gears are seized.'); playBrokenEffect(level, player, 'fail'); break
        case 3: player.tell('§fA faint tug on your soul... but the tether snaps.'); playBrokenEffect(level, player, 'standard'); break
        case 4: player.tell('§eA yellow spark flies out and singes your glove.'); playBrokenEffect(level, player, 'standard'); break
        case 5: player.tell('§7*Clack* ...Internal §kRESONANCE§r §7gears are grinding.'); playBrokenEffect(level, player, 'fail'); break
        case 6: player.tell('§cThe die hums at a frequency that makes your teeth ache.'); playBrokenEffect(level, player, 'fail'); break
        case 7: player.tell('§7The air smells of ozone and old parchment.'); playBrokenEffect(level, player, 'standard'); break
        case 8: player.tell('§bA blue glimmer appears in your palm, then dissolves.'); playBrokenEffect(level, player, 'standard'); break
        case 9: player.tell('§6The die is vibrating so hard it\'s difficult to hold.'); playBrokenEffect(level, player, 'fail'); break
        case 10: player.tell('§7A hollow vibration echoes through your bones.'); playBrokenEffect(level, player, 'standard'); break
        case 11: player.tell('§aYou hear a phantom sheep bleat in the distance.'); playBrokenEffect(level, player, 'standard'); break
        case 12: player.tell('§dThe die whispers: "§kHE-LP-ME§r§d" ...then goes silent.'); playBrokenEffect(level, player, 'magic'); break
        case 13: player.tell('§bCarbon atoms attempt to align... §kNULL_DIAMOND'); playBrokenEffect(level, player, 'standard'); break
        case 14: player.tell('§fA flicker of light appears in your peripheral vision.'); playBrokenEffect(level, player, 'standard'); break
        case 15: player.tell('§eThe die spins for 10 seconds straight, then falls over.'); playBrokenEffect(level, player, 'fail'); break
        case 16: player.tell('§2You hear a distant "Hrmm"... but nobody is there.'); playBrokenEffect(level, player, 'standard'); break
        case 17: player.tell('§8Weight increased by §k999§r§8% for a microsecond.'); playBrokenEffect(level, player, 'fail'); break
        case 18: player.tell('§dAn arcane aura flickers like a dying candle.'); playBrokenEffect(level, player, 'magic'); break
        case 19: player.tell('§eBuzzing... §7The ghost of a bee passes through you.'); playBrokenEffect(level, player, 'standard'); break
        case 20: player.tell('§6§lSUCCESS? §7The reward port is rusted shut.'); playBrokenEffect(level, player, 'magic'); break

        // --- 21-40: UTILITY & CHAOS TEASES ---
        case 21: player.tell('§fGravity feels... optional for a microsecond.'); playBrokenEffect(level, player, 'standard'); break
        case 22: player.tell('§bThe die tries to flip, but it has no momentum.'); playBrokenEffect(level, player, 'fail'); break
        case 23: player.tell('§7The shadow of a golem looms behind you... then vanishes.'); playBrokenEffect(level, player, 'standard'); break
        case 24: player.tell('§6The taste of gold fills your mouth. It\'s bitter.'); playBrokenEffect(level, player, 'standard'); break
        case 25: player.tell('§4System Error: §7Motivation.exe not found.'); playBrokenEffect(level, player, 'fail'); break
        case 26: player.tell('§cYou feel a sudden warmth, like a nearby candle.'); playBrokenEffect(level, player, 'fail'); break
        case 27: player.tell('§dCoordinates: §k0, 0, 0 §r§7...Teleportation failed.'); playBrokenEffect(level, player, 'magic'); break
        case 28: player.tell('§5The smell of the End. Cold and empty.'); playBrokenEffect(level, player, 'magic'); break
        case 29: player.tell('§1Distant waves... but your feet remain dry.'); playBrokenEffect(level, player, 'standard'); break
        case 30: player.tell('§2A leaf falls from the sky. It isn\'t real.'); playBrokenEffect(level, player, 'standard'); break
        case 31: player.tell('§7Fine dust spills from the cracks. It\'s just sand.'); playBrokenEffect(level, player, 'fail'); break
        case 32: player.tell('§c*Ssssss* ...False alarm. No explosion.'); playBrokenEffect(level, player, 'fail'); break
        case 33: player.tell('§5A purple glow suggests magic, but it\'s just a reflection.'); playBrokenEffect(level, player, 'magic'); break
        case 34: player.tell('§eYou felt lucky for a second. It passed.'); playBrokenEffect(level, player, 'standard'); break
        case 35: player.tell('§aA "Common" feeling of disappointment.'); playBrokenEffect(level, player, 'standard'); break
        case 36: player.tell('§7Density increase... but only for the die.'); playBrokenEffect(level, player, 'fail'); break
        case 37: player.tell('§dThe taste of experience... it tastes like blue.'); playBrokenEffect(level, player, 'magic'); break
        case 38: player.tell('§6Midas Touch? No, just Midas Dust.'); playBrokenEffect(level, player, 'standard'); break
        case 39: player.tell('§dKnowledge is power. Too bad you didn\'t get any.'); playBrokenEffect(level, player, 'standard'); break
        case 40: player.tell('§d§lFATE OVERLOAD! §r§7...Internal fuse has blown.'); playBrokenEffect(level, player, 'magic'); break

        // --- 41-50: ARS NOUVEAU ECHOES ---
        case 41: player.tell('§5A sour berry scent wafts from the die.'); playBrokenEffect(level, player, 'standard'); break
        case 42: player.tell('§bMental clarity: §7You realized this die is broken.'); playBrokenEffect(level, player, 'magic'); break
        case 43: player.tell('§bStarbuncle chittering detected. Signal lost.'); playBrokenEffect(level, player, 'standard'); break
        case 44: player.tell('§dGlimmering gems... §7actually just shiny rocks.'); playBrokenEffect(level, player, 'standard'); break
        case 45: player.tell('§5Arcane focus... §7the die is focusing on you.'); playBrokenEffect(level, player, 'magic'); break
        case 46: player.tell('§bSource energy detected... §kLEAKING'); playBrokenEffect(level, player, 'magic'); break
        case 47: player.tell('§5Arcane Surge! §7...Nevermind, it was a hiccup.'); playBrokenEffect(level, player, 'standard'); break
        case 48: player.tell('§4A wilden howl echoes from the die.'); playBrokenEffect(level, player, 'fail'); break
        case 49: player.tell('§fBlank parchment... §7the die has no script.'); playBrokenEffect(level, player, 'standard'); break
        case 50: player.tell('§dThe Archmage ignores your request.'); playBrokenEffect(level, player, 'magic'); break

        // --- 51-60: UNDERGARDEN ECHOES ---
        case 51: player.tell('§2Corruption spreading... §7it\'s just ink.'); playBrokenEffect(level, player, 'fail'); break
        case 52: player.tell('§aUnderground beans? §7More like under-powered.'); playBrokenEffect(level, player, 'standard'); break
        case 53: player.tell('§2Rotwalker Ambush... §7they forgot to show up.'); playBrokenEffect(level, player, 'fail'); break
        case 54: player.tell('§7Dull metal clinking inside.'); playBrokenEffect(level, player, 'fail'); break
        case 55: player.tell('§fYou feel lighter, but your jump is the same.'); playBrokenEffect(level, player, 'standard'); break
        case 56: player.tell('§bThe die is covered in frost.'); playBrokenEffect(level, player, 'standard'); break
        case 57: player.tell('§aA Gloomper jump... §7you just tripped.'); playBrokenEffect(level, player, 'fail'); break
        case 58: player.tell('§5Utheric energy spike! §7...and it\'s gone.'); playBrokenEffect(level, player, 'magic'); break
        case 59: player.tell('§fThe die glows for exactly one second.'); playBrokenEffect(level, player, 'standard'); break
        case 60: player.tell('§3A forgotten memory surfaces... then sinks.'); playBrokenEffect(level, player, 'magic'); break

        // --- 61-70: BUMBLEZONE ECHOES ---
        case 61: player.tell('§eSticky residue on the die. Tastes like honey.'); playBrokenEffect(level, player, 'standard'); break
        case 62: player.tell('§8Beewitched? §7More like bored.'); playBrokenEffect(level, player, 'fail'); break
        case 63: player.tell('§eBumblezone frequency found... but jammed.'); playBrokenEffect(level, player, 'magic'); break
        case 64: player.tell('§6Liquid gold... §7actually just warm apple juice.'); playBrokenEffect(level, player, 'standard'); break
        case 65: player.tell('§eA puff of pollen. You almost sneezed.'); playBrokenEffect(level, player, 'standard'); break
        case 66: player.tell('§eA busy worker... §7is taking a break.'); playBrokenEffect(level, player, 'standard'); break
        case 67: player.tell('§6Royal Jelly scent... or is it just sugar?'); playBrokenEffect(level, player, 'magic'); break
        case 68: player.tell('§6Honey Shield! §7The die is just sticky.'); playBrokenEffect(level, player, 'standard'); break
        case 69: player.tell('§eA phantom sting. It didn\'t hurt.'); playBrokenEffect(level, player, 'fail'); break
        case 70: player.tell('§eThe swarm is asleep. Try again in §k999§r §eyears.'); playBrokenEffect(level, player, 'standard'); break

        // --- 71-80: ICARIA & AETHER ECHOES ---
        case 71: player.tell('§bCelestial dust... §7just dandruff.'); playBrokenEffect(level, player, 'standard'); break
        case 72: player.tell('§9Dizzying heights... §7the die fell off your hand.'); playBrokenEffect(level, player, 'fail'); break
        case 73: player.tell('§bFeather-light... §7for half a second.'); playBrokenEffect(level, player, 'standard'); break
        case 74: player.tell('§9A blue gemstone gleam... §7it\'s glass.'); playBrokenEffect(level, player, 'magic'); break
        case 75: player.tell('§aLabyrinth gifts? §7You got lost.'); playBrokenEffect(level, player, 'standard'); break
        case 76: player.tell('§8Fuel lines clogged with §kUNKNOWN_FLUID'); playBrokenEffect(level, player, 'fail'); break
        case 77: player.tell('§7Airship support... §7is out of range.'); playBrokenEffect(level, player, 'standard'); break
        case 78: player.tell('§7Spinning blades... §7the die is a fan now.'); playBrokenEffect(level, player, 'standard'); break
        case 79: player.tell('§cPayload dropped... into a parallel dimension.'); playBrokenEffect(level, player, 'fail'); break
        case 80: player.tell('§7A wooden frame... §7of mind.'); playBrokenEffect(level, player, 'standard'); break

        // --- 81-90: TECH & CATACLYSM ECHOES ---
        case 81: player.tell('§eIncreased focus... §7on how broken this is.'); playBrokenEffect(level, player, 'standard'); break
        case 82: player.tell('§8Mechanical heart... §7has a murmur.'); playBrokenEffect(level, player, 'fail'); break
        case 83: player.tell('§bGyro-stabilization... §7the die is still rolling.'); playBrokenEffect(level, player, 'standard'); break
        case 84: player.tell('§7Steam pressure rising! §7*Pffft*'); playBrokenEffect(level, player, 'fail'); break
        case 85: player.tell('§6Cargo drop? §7More like cargo stop.'); playBrokenEffect(level, player, 'standard'); break
        case 86: player.tell('§8The Wither\'s laugh echoes... very faintly.'); playBrokenEffect(level, player, 'magic'); break
        case 87: player.tell('§7Molten scrap... §7it\'s just lukewarm.'); playBrokenEffect(level, player, 'fail'); break
        case 88: player.tell('§4Internal temperature: §k9000C'); playBrokenEffect(level, player, 'fail'); break
        case 89: player.tell('§cBurning ashes... §7smells like toast.'); playBrokenEffect(level, player, 'fail'); break
        case 90: player.tell('§1The Abyss stares back. It looks bored.'); playBrokenEffect(level, player, 'magic'); break

        // --- 91-100: LEGENDARY TEASES ---
        case 91: player.tell('§5Echoes of the void... §7mostly just static.'); playBrokenEffect(level, player, 'magic'); break
        case 92: player.tell('§cMonstrous power! §7...Briefly imagined.'); playBrokenEffect(level, player, 'magic'); break
        case 93: player.tell('§1Deep-sea pressure detected in your ears.'); playBrokenEffect(level, player, 'standard'); break
        case 94: player.tell('§bOcean treasures... §7wet sand.'); playBrokenEffect(level, player, 'standard'); break
        case 95: player.tell('§5Monstrosity\'s Might. §7The die is slightly heavier.'); playBrokenEffect(level, player, 'magic'); break
        case 96: player.tell('§5Abyssal spawn... §7it\'s a dust bunny.'); playBrokenEffect(level, player, 'standard'); break
        case 97: player.tell('§dThe sky turns purple for a single frame.'); playBrokenEffect(level, player, 'legendary'); break
        case 98: player.tell('§6§lRELIC LOCATED! §r§7...Connection timed out.'); playBrokenEffect(level, player, 'legendary'); break
        case 99: player.tell('§b§lFATE BENT! §r§7...Then it snapped back.'); playBrokenEffect(level, player, 'legendary'); break
        case 100: 
            player.tell('§d§lGOD OF THE DIE! §r§7...Device cannot handle this value.'); 
            playBrokenEffect(level, player, 'legendary'); break

        default:
            player.tell(`§7Resonance Level: §8§k${num * 444} §r§8[${num}]`);
            playBrokenEffect(level, player, 'glitch'); break
    }
}

ItemEvents.rightClicked(event => {
    const { item, player, level, server } = event
    
    if (item.id == 'kubejs:unfinished_dice') {
        let roll = Math.floor(Math.random() * 20) + 1
        triggerUnfinishedOutcome(roll, player, level, server)
        player.addItemCooldown(item, 40) // 2-second cooldown
    }
})