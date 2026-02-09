// --- 1. GLOBAL CONFIGURATIONS (Defined once at the top) ---
const THEMES = [
    { id: "eldritch", name: "Eldritch", color: "dark_purple" },
    { id: "warbound", name: "Warbound", color: "red" },
    { id: "overgrown", name: "Overgrown", color: "green" },
    { id: "scorched", name: "Scorched", color: "gold" },
    { id: "sunken", name: "Sunken", color: "blue" },
    { id: "volcanic", name: "Volcanic", color: "dark_red" },
    { id: "abyssal", name: "Abyssal", color: "dark_blue" },
    { id: "mechanical", name: "Mechanical", color: "gray" },
    { id: "celestial", name: "Celestial", color: "aqua" },
    { id: "fungal", name: "Fungal", color: "light_purple" },
	{ id: 'glacial', name: 'Glacial', color: 'white' },
    { id: 'gilded', name: 'Gilded', color: 'gold' },
    { id: 'electrified', name: 'Electrified', color: 'yellow' },
    { id: 'aetheric', name: 'Aetheric', color: 'light_purple' },
    { id: 'cavernous', name: 'Cavernous', color: 'dark_gray' },
    { id: 'bastion', name: 'Bastion', color: 'dark_red' },
    { id: 'stronghold', name: 'Stronghold', color: 'dark_green' },
    { id: 'monumental', name: 'Monumental', color: 'dark_aqua' },
    { id: 'dilapidated', name: 'Dilapidated', color: 'gold' },
    { id: 'industrial', name: 'Industrial', color: 'gray' },
    { id: 'skeletal', name: 'Skeletal', color: 'white' },
    { id: 'insectoid', name: 'Insectoid', color: 'green' },
    { id: 'reptilian', name: 'Reptilian', color: 'dark_green' },
    { id: 'ichorous', name: 'Ichorous', color: 'red' },
    { id: 'draconic', name: 'Draconic', color: 'dark_purple' },
    { id: 'void', name: 'Void', color: 'black' },
    { id: 'crystalline', name: 'Crystalline', color: 'aqua' },
    { id: 'radiant', name: 'Radiant', color: 'yellow' },
    { id: 'forbidden', name: 'Forbidden', color: 'dark_red' },
    { id: 'echoing', name: 'Echoing', color: 'dark_cyan' }
];

const TOME_LOOT_POOLS = {
    eldritch: ["minecraft:sculk", "minecraft:echo_shard", "ars_nouveau:source_gem", "apotheosis:gem_dust", "apotheosis:rare_material"],
    warbound: ["minecraft:iron_ingot", "minecraft:arrow", "apotheosis:common_material", "apotheosis:gem_dust", "apotheosis:epic_material"],
    overgrown: ["minecraft:moss_block", "ars_nouveau:blue_archwood_sapling", "ars_nouveau:source_berry", "naturesaura:gold_leaf", "apotheosis:mythic_material"],
    scorched: ["minecraft:magma_cream", "minecraft:blaze_rod", "hmag:necrofiber", "nethers_delight:hoglin_hide", "kubejs:coin_nether"],
    sunken: ["minecraft:prismarine_shard", "aquaculture:box", "aquaculture:lockbox", "aquaculture:treasure_chest", "aquaculture:neptunium_ingot"],
    volcanic: ["minecraft:crying_obsidian", "hmag:evil_crystal", "hmag:burning_core", "minecraft:wither_rose", "minecraft:netherite_scrap"],
    abyssal: ["minecraft:glow_ink_sac", "aquaculture:neptunium_nugget", "ars_nouveau:wilden_tribute", "simplyswords:runic_tablet", "apotheosis:sigil_of_socketing"],
    mechanical: ["embers:raw_silver", "embers:raw_lead", "embers:archaic_brick", "embers:winding_gears", "embers:dawnstone_ingot"],
    celestial: ["minecraft:ender_pearl", "hmag:soul_powder", "kubejs:gem_shard_great", "apotheosis:infused_coin", "minecraft:shulker_shell"],
    fungal: ["minecraft:mycelium", "ars_nouveau:magebloom", "minecraft:mooshroom_spawn_egg", "aether_redux:blighted_spores", "relics:spore_sack"],
    forgotten: ["minecraft:book", "minecraft:experience_bottle", "ars_nouveau:blank_parchment", "ars_nouveau:spell_parchment", "kubejs:scroll_exp_great"],
    glacial: ["minecraft:packed_ice", "minecraft:blue_ice", "ars_nouveau:water_essence", "apotheosis:common_material", "celestial_core:treasure_fragment"],
    gilded: ["minecraft:raw_gold", "minecraft:gold_block", "ars_nouveau:abjuration_essence", "celestial_core:broken_totem", "l2complements:life_essence"],
    electrified: ["minecraft:lightning_rod", "minecraft:redstone_block", "ars_nouveau:air_essence", "hmag:lightning_particle", "apotheosis:gem_dust"],
    aetheric: ["aether:ambrosium_shard", "aether:zanite_gemstone", "aether:golden_amber", "deep_aether:skyjade", "aether_redux:refined_sentrite"],
    cavernous: ["minecraft:pointed_dripstone", "minecraft:raw_iron_block", "spelunkery:rough_diamond", "hmag:lich_cloth", "celestial_core:earth_core"],
    bastion: ["minecraft:gilded_blackstone", "minecraft:ancient_debris", "celestial_core:fire_essence", "apotheosis:rare_material", "apotheosis:mythic_material"],
    stronghold: ["minecraft:mossy_stone_bricks", "minecraft:ender_eye", "l2complements:storm_core", "l2complements:heirophant_green", "celestial_core:reforging_table"],
    monumental: ["minecraft:sea_lantern", "hmag:ancient_stone", "l2complements:explosion_shard", "celestial_core:guardian_spike", "simplyswords:runic_tablet"],
    dilapidated: ["minecraft:cobweb", "minecraft:chain", "graveyard:corruption", "hmag:reinforcing_chain", "celestial_core:death_essence"],
    industrial: ["minecraft:hopper", "apotheosis:gem_dust", "embers:ash", "aether_redux:refined_sentrite", "aether_redux:sentry_chip"],
    skeletal: ["minecraft:bone_block", "graveyard:corruption", "l2hostility:hostility_essence", "minecraft:skeleton_skull", "l2complements:warden_bone_shard"],
    insectoid: ["minecraft:bee_nest", "the_bumblezone:glistering_honey_crystal", "the_bumblezone:honey_crystal_shards", "the_bumblezone:pollen_puff", "the_bumblezone:royal_jelly_bottle"],
    reptilian: ["minecraft:scute", "hmag:kobold_leather", "hmag:ogre_horn", "hmag:sharp_fang", "celestial_core:treasure_fragment"],
    ichorous: ["minecraft:redstone", "bloodmagic:life_essence_bucket", "celestial_core:heart_fragment", "l2complements:cursed_droplet", "bosses_of_mass_destruction:brimstone_nectar"],
    draconic: ["minecraft:obsidian", "minecraft:end_crystal", "minecraft:dragon_breath", "quark:dragon_scale", "hmag:ender_plasm"],
    void: ["minecraft:chorus_fruit", "minecraft:shulker_shell", "kubejs:reagent_box", "apotheosis:apotheotic_coin", "l2complements:void_eye"],
    crystalline: ["minecraft:amethyst_cluster", "minecraft:budding_amethyst", "ars_nouveau:source_gem_block", "ars_nouveau:conjuration_essence", "apotheosis:gem_dust"],
    radiant: ["minecraft:glow_berries", "minecraft:glowstone", "ars_nouveau:abjuration_essence", "kubejs:gem_shard_great", "celestial_artifacts:purified_powder"],
    forbidden: ["minecraft:soul_sand", "graveyard:corruption", "undergarden:blood_globule", "graveyard:dark_iron_ingot", "bloodmagic:weakbloodshard"],
    echoing: ["minecraft:sculk_sensor", "minecraft:sculk_catalyst", "minecraft:echo_shard", "kubejs:reagent_box", "apotheosis:mythic_material"]
};

const TOME_MESSAGES = {
    eldritch: "The text crawls across the page like ink-black insects.",
    warbound: "The parchment is stained with the soot and blood of battle.",
    overgrown: "Dried leaves and wild vines spill from the broken seal.",
    scorched: "Heat radiates from the charred, soot-covered binding.",
    sunken: "The pages are damp, smelling of salt and ancient depths.",
    volcanic: "The binding is hot to the touch, smelling of sulfur.",
    abyssal: "A cold, crushing pressure emanates from the dark ink.",
    mechanical: "Small brass gears and springs fall from the pages.",
    celestial: "The paper feels lighter than air, shimmering with starlight.",
    fungal: "Spores puff out as the seal breaks, smelling of damp earth.",
	glacial: "A blast of freezing air escapes as the frost-crusted seal snaps.",
    gilded: "The weight of the book is immense; gold flakes peel from its edges.",
    electrified: "Static discharge numbs your fingers as you break the binding.",
    aetheric: "The tome feels as if it wants to float away into the clouds.",
    cavernous: "Echoes of dripping water and shifting stone emerge from the pages.",
    bastion: "The scent of ancient piglin forges and pig-iron fills the air.",
    stronghold: "The ink glows with the sickly green light of an ender eye.",
    monumental: "Pressure builds in your ears, as if you were miles underwater.",
    dilapidated: "Dust and cobwebs spill out; the history here is almost forgotten.",
    industrial: "The rhythmic clicking of tiny invisible gears stops as you open it.",
    skeletal: "The binding is made of sun-bleached bone, cold and brittle.",
    insectoid: "Chitinous clicking sounds emanate from within the paper.",
    reptilian: "The leather cover feels like coarse, cold scales.",
    ichorous: "A thick, iron-scented fluid stains your hands as the seal breaks.",
    draconic: "The power within is suffocating; the pages are scorched by dragonfire.",
    void: "Light seems to get sucked into the open pages, leaving only darkness.",
    crystalline: "The pages chime like bells as they are turned.",
    radiant: "Warmth and blinding light pour from the script.",
    forbidden: "Whispers fill your mind, urging you to close the book immediately.",
    echoing: "Every movement you make is repeated twice in the silence of the tome."
};

const RESONANCE_MAP = {
    'minecraft:spawner': 'minecraft:obsidian',
    'minecraft:ancient_debris': 'minecraft:basalt',
    'minecraft:budding_amethyst': 'minecraft:amethyst_block',
    'minecraft:reinforced_deepslate': 'minecraft:cobbled_deepslate'
};

ItemEvents.rightClicked(event => {
    const { player, item, level, server, target } = event;
    const pName = player.username;

// --- 1. ECHO EXTRACTOR ---
    if (item.id == 'kubejs:echo_extractor') {
        let currentTime = level.time;
        let targetBlock = target.block;
        
        // Cooldown Check
        if (player.persistentData.contains('extractor_cooldown')) {
            let elapsed = currentTime - player.persistentData.getLong('extractor_cooldown');
            if (elapsed < 400) {
                let remaining = Math.ceil((400 - elapsed) / 20);
                player.setStatusMessage(Text.of(`Extractor is cooling down: ${remaining}s`).red());
                return;
            }
        }

        // Busy Check (Combined)
        if (player.persistentData.getBoolean('extractor_busy')) {
            player.setStatusMessage(Text.of("The Extractor is still condensing echoes...").red());
            return;
        }

        // Resonance Check
        if (!targetBlock || !RESONANCE_MAP[targetBlock.id]) {
            player.setStatusMessage(Text.of("This object holds no echoes.").gray());
            return;
        }

        // Fuel Check (Blessed Incense)
        let clearResult = server.runCommandSilent(`clear ${pName} kubejs:blessed_incense 1`);
        if (clearResult <= 0) {
            player.setStatusMessage(Text.of("Extraction requires incense to stabilize the chronal flow.").italic());
            return;
        }

		// 3. Define unique coordinate variables ONLY when we are sure the ritual starts
			let echoX = targetBlock.x;
			let echoY = targetBlock.y;
			let echoZ = targetBlock.z;

	

        // Start Ritual
        player.persistentData.putBoolean('extractor_busy', true);
        player.tell(Text.of("The Echo Extractor begins to drain the block's essence...").darkPurple());
        
        server.runCommandSilent(`effect give ${pName} minecraft:slowness 6 10 true`);
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.charge player ${pName} ${player.x} ${player.y} ${player.z} 1 0.8`);

        server.scheduleInTicks(120, () => {
            let p = server.getPlayer(pName);
			let replacement = RESONANCE_MAP[targetBlock.id] || 'minecraft:obsidian';
            if (!p) return;

            p.persistentData.remove('extractor_busy');
            p.persistentData.putLong('extractor_cooldown', level.time);

            let mastery = p.persistentData.getDouble('ritual_mastery') || 0.0;
            let currentRisk = Math.max(0.05, 0.30 - (mastery * 0.001));
			
			// --- FAILURE LOGIC - THE PERMANENT 5% STABILITY CHECK ---
			if (Math.random() < 0.05) {

				// Roll to see if the spawner is destroyed (30% of the 5%)
				let isDestroyed = Math.random() < 0.30;

				if (isDestroyed) {
					// CRITICAL FAILURE: Spawner is lost
					server.runCommandSilent(`setblock ${echoX} ${echoY} ${echoZ} ${replacement}`);
					player.tell(Text.of("CRITICAL FAILURE: The Echo collapsed!").red().bold());
					server.runCommandSilent(`execute at ${pName} run playsound minecraft:entity.generic.explode player @s ~ ~ ~ 1 0.5`);
					
				} else {
					// SOFT FAILURE: Spawner remains, but ritual fails
					player.tell(Text.of("STABILITY FAILURE: The Echo slipped away...").yellow());
					
					// Visual "Fizzle" effect
					server.runCommandSilent(`execute at ${pName} run particle minecraft:smoke ~ ~1 ~ 0.2 0.2 0.2 0.05 10`);
					server.runCommandSilent(`execute at ${pName} run playsound minecraft:block.fire.extinguish player @s ~ ~ ~ 1 1.5`);
				}

				// Consumables and cooldowns
				player.attack(2.0); // 1 heart of recoil damage
				return; // EXIT the script so no Sealed Tome is given
			}

            // --- FAILURE LOGIC - Temporal Remnant---
            if (Math.random() < currentRisk) {
                server.runCommandSilent(`execute at ${pName} run summon minecraft:vex ~ ~1 ~ {LifeTicks:600,CustomName:'"Temporal Remnant"'}`);
                server.runCommandSilent(`effect give ${pName} minecraft:blindness 3 1 true`);
                server.runCommandSilent(`execute at ${pName} run tp ${pName} ~ ~0.2 ~`); 
                server.runCommandSilent(`playsound minecraft:entity.generic.explode player ${pName} ~ ~ ~ 1 0.5`);
                server.runCommandSilent(`particle minecraft:explosion_emitter ${p.x} ${p.y + 1} ${p.z} 0.5 0.5 0.5 0.1 1`);
                p.tell(Text.of("The extraction failed! A temporal remnant has escaped!").red().italic());
                return; 
            }

            // --- SUCCESS LOGIC ---
            let roll = THEMES[Math.floor(Math.random() * THEMES.length)];
                     
            // Block Swap & Visuals
            server.runCommandSilent(`setblock ${echoX} ${echoY} ${echoZ} ${replacement}`);
            server.runCommandSilent(`particle minecraft:sculk_soul ${echoX} ${echoY + 1} ${echoZ} 0.5 0.5 0.5 0.05 50`);
            server.runCommandSilent(`playsound minecraft:block.respawn_anchor.set_spawn block @a ${echoX} ${echoY} ${echoZ} 1 1.2`);
            
            // Rewards
            let giveCmd = `give ${pName} kubejs:sealed_tome{theme:"${roll.id}",display:{Name:'{"text":"Sealed ${roll.name} Tome","color":"${roll.color}","italic":false}'}} 1`;
            server.runCommandSilent(giveCmd);
            
            p.persistentData.putDouble('ritual_mastery', mastery + 1.0);            
			p.tell(Text.of(`Extraction successfull!`).aqua().bold()
							.append(Text.of(" - ").gray())
							.append(Text.of(`Sealed ${roll.name} Tome (+1 Extraction Level)`).color(roll.color))
						);

            // Discovery Tracking (The Sticky String Fix)
            let discoveredStr = p.persistentData.getString('echo_discoveries') || "";
            if (discoveredStr.indexOf(roll.id) === -1) {
                let newStr = discoveredStr + roll.id + ",";
                p.persistentData.putString('echo_discoveries', newStr);
                server.runCommandSilent(`kubejs persistent_data ${pName} merge {echo_discoveries:"${newStr}"}`);

                p.tell(Text.of(`New Theme Discovered: ${roll.name}`).gold().italic());
                server.runCommandSilent(`execute at ${pName} run playsound minecraft:ui.toast.challenge_complete player @s 1 1`);
            }
        });
    }

// --- 2. CHRONICLE OF ECHOES (STRING-REGISTRY VERSION) ---
    if (item.id == 'kubejs:chronicle_of_echoes') {
        let mastery = player.persistentData.getDouble('ritual_mastery') || 0.0;
        let lastCooldown = player.persistentData.getLong('extractor_cooldown') || 0;
        let discoveredStr = player.persistentData.getString('echo_discoveries') || "";

        let currentRisk = Math.max(5.0, 30.0 - (mastery * 0.1));
        let bonusTier = Math.floor(mastery / 10);
        let remainingSeconds = Math.ceil(Math.max(0, 400 - (level.time - lastCooldown)) / 20);

        player.tell(Text.of("-- Chronicle of Echoes --").darkPurple().bold());
        player.tell(Text.of("Extraction Expertise: ").gray().append(Text.of(mastery.toFixed(1)).yellow()));
        
        let riskColor = currentRisk > 20 ? "red" : (currentRisk > 10 ? "yellow" : "green");
        player.tell(Text.of("Backfire Risk: ").gray().append(Text.of(`${currentRisk.toFixed(1)}%`).color(riskColor)));
        player.tell(Text.of("Extraction Tier: ").gray().append(Text.of(`Tier ${bonusTier}`).aqua()));

        // --- DISCOVERY DISPLAY ---
        let themeList = Text.of("");
        let foundAny = false;

        // Loop through the THEMES constant and check if their ID is in our discovery string
        THEMES.forEach(tObj => {
            if (discoveredStr.indexOf(tObj.id) !== -1) {
                if (foundAny) themeList.append(Text.of(", ").gray());
                themeList.append(Text.of(tObj.name).color(tObj.color));
                foundAny = true;
            }
        });

        if (!foundAny) {
            player.tell(Text.of("Discovered Echoes: ").gray().append(Text.of("None").darkGray().italic()));
        } else {
            player.tell(Text.of("Discovered Echoes: ").gray().append(themeList));
        }

        player.tell(Text.of("Extractor Status: ").gray().append(remainingSeconds > 0 ? Text.of(`Cooling (${remainingSeconds}s)`).red() : Text.of("Stable / Ready").green().italic()));
        player.tell(Text.of("-----------------------").darkPurple().bold());
        player.playSound('minecraft:item.book.page_turn');
    }

    // --- SEALED TOME ---
	if (item.id == 'kubejs:sealed_tome') {
        if (!item.nbt || !item.nbt.theme) return;

        let theme = item.nbt.theme;
        let mastery = player.persistentData.getDouble('ritual_mastery') || 0.0;
        let bonusTier = Math.floor(mastery / 10); 
        let pool = TOME_LOOT_POOLS[theme] || TOME_LOOT_POOLS.forgotten;

        // 1. DYNAMIC RARITY THRESHOLDS
        // Every tier lowers the requirement for Rare loot by 0.01 (min 0.50)
        let rareThreshold = Math.max(0.50, 0.90 - (bonusTier * 0.01));
        let uncommonThreshold = Math.max(0.30, 0.70 - (bonusTier * 0.01));

        let roll = Math.random();
        let itemToGive;
        let qty = 1;

        // 2. SCALED ROLL
        if (roll > rareThreshold && bonusTier >= 3) {
            // RARE (Tier 3+)
            itemToGive = pool[3] || pool[2];
            qty = (itemToGive.includes("end") || itemToGive.includes("dragon") || itemToGive.includes("void") || itemToGive.includes("shulker") || itemToGive.includes("epic") || itemToGive.includes("mythic") || itemToGive.includes("neptunium") || itemToGive.includes("totem") || itemToGive.includes("netherite")) ? 1 : (10, 1 + Math.floor(bonusTier / 25));
        } 
        else if (roll > uncommonThreshold && bonusTier >= 1) {
            // UNCOMMON (Tier 1+)
            itemToGive = pool[2] || pool[1];
            qty = 1 + Math.floor(bonusTier / 20);
        } 
        else {
            // COMMON
            itemToGive = pool[Math.floor(Math.random() * 2)];
            qty = Math.floor(Math.random() * 3) + 1 + Math.floor(bonusTier / 25);
        }

        // 3. EXECUTION & SPAWNING
        item.count--; 
        
		// Summon the main reward
        // We use nbt format for the item entity to ensure quantity and ID are correct
        let mainItemNBT = `{Item:{id:"${itemToGive}",Count:${qty}b}}`;
        server.runCommandSilent(`execute at ${pName} run summon minecraft:item ~ ~1 ~ ${mainItemNBT}`);

        // Grandmaster - Scaled Gold Bonus
        if (bonusTier > 0 && Math.random() < 0.70) {
            let goldItem = bonusTier >= 50 ? "minecraft:gold_ingot" : "minecraft:gold_nugget";
            let goldQty = Math.min(32, Math.floor(Math.random() * (bonusTier / 10)) + 1);
            let goldNBT = `{Item:{id:"${goldItem}",Count:${goldQty}b}}`;
            
            server.runCommandSilent(`execute at ${pName} run summon minecraft:item ~ ~1.2 ~ ${goldNBT}`);
        }

		// 4. THE JACKPOT (Tier 50+)
        if (bonusTier >= 50 && Math.random() < 0.01) { // 1% chance at Tier 50
            server.runCommandSilent(`execute at ${pName} run summon minecraft:item ~ ~1.5 ~ {Item:{id:"minecraft:nether_star",Count:1b}}`);
            player.tell(Text.of("THE TIMELINE FRACTURES! A Chronal Singularity has manifested!").gold().bold());
            server.runCommandSilent(`execute at ${pName} run playsound minecraft:ui.toast.challenge_complete player @s ~ ~ ~ 1 0.5`);
        }

        // 4. Visuals & Audio
        // Sound: Paper tearing + Magic sparkle
        server.runCommandSilent(`playsound minecraft:item.book.page_turn player ${pName} ~ ~ ~ 1 1.5`);
        server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup player ${pName} ~ ~ ~ 0.5 1.2`);

        // Theme-Specific Particles
        let selectedParticle = "minecraft:enchanted_hit";
		
        if (theme == 'eldritch') selectedParticle = "minecraft:dragon_breath";
        if (theme == 'scorched' || theme == 'volcanic') selectedParticle = "minecraft:flame";
        if (theme == 'sunken' || theme == 'abyssal') selectedParticle = "minecraft:bubble";
        if (theme == 'celestial') selectedParticle = "minecraft:end_rod";
        if (theme == 'overgrown' || theme == 'fungal') selectedParticle = "minecraft:happy_villager";
        if (theme == 'glacial') selectedParticle = "minecraft:snowflake";
        if (theme == 'electrified') selectedParticle = "minecraft:electric_spark";
        if (theme == 'gilded' || theme == 'radiant') selectedParticle = "minecraft:wax_off"; // Sparkling gold/light
        if (theme == 'aetheric' || theme == 'celestial') selectedParticle = "minecraft:end_rod";
        if (theme == 'eldritch' || theme == 'void' || theme == 'echoing') selectedParticle = "minecraft:dragon_breath";
        if (theme == 'scorched' || theme == 'volcanic' || theme == 'bastion') selectedParticle = "minecraft:flame";
        if (theme == 'forbidden' || theme == 'draconic') selectedParticle = "minecraft:large_smoke";
        if (theme == 'ichorous') selectedParticle = "minecraft:angry_villager"; // Dark red 'hit' particles
        if (theme == 'overgrown' || theme == 'fungal' || theme == 'insectoid') selectedParticle = "minecraft:happy_villager";
        if (theme == 'reptilian') selectedParticle = "minecraft:item_slime";
        if (theme == 'skeletal') selectedParticle = "minecraft:white_ash";
        if (theme == 'sunken' || theme == 'abyssal' || theme == 'monumental') selectedParticle = "minecraft:bubble";
        if (theme == 'cavernous' || theme == 'stronghold') selectedParticle = "minecraft:ash";
        if (theme == 'crystalline') selectedParticle = "minecraft:crit";
        if (theme == 'industrial' || theme == 'mechanical') selectedParticle = "minecraft:composter"; // Looks like flying bits of metal/wood
        if (theme == 'dilapidated') selectedParticle = "minecraft:campfire_cosy_smoke";
		
		// BURST 1: Immediate (Fast and outward)
        server.runCommandSilent(`particle ${selectedParticle} ${player.x} ${player.y + 1.2} ${player.z} 0.6 0.6 0.6 0.15 30`);

        // BURST 2: Lingering (Scheduled 10 ticks later, slow-rising)
        server.scheduleInTicks(10, () => {
            // We use a smaller speed (0.02) so they drift slowly upward like a cloud
            server.runCommandSilent(`particle ${selectedParticle} ${player.x} ${player.y + 1.2} ${player.z} 0.4 0.5 0.4 0.02 15`);
        });

        // BURST 3: High-Mastery "Afterglow" (Only at Tier 3+)
        if (bonusTier >= 3) {
            server.scheduleInTicks(20, () => {
                server.runCommandSilent(`particle minecraft:glow ${player.x} ${player.y + 1.2} ${player.z} 0.3 0.3 0.3 0.01 10`);
            });
        }

        // 5. Flavor Text (with Theme color)
		player.tell(Text.of(TOME_MESSAGES[theme] || "The secrets unfold...").italic());
		
		console.log(`Tome Opened: Theme=${theme}, Roll=${roll.toFixed(2)}, Tier=${bonusTier}, Item=${itemToGive}`);
    }
});