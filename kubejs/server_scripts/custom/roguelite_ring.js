console.info('Roguelite System Loading...')

// --- CENTRALIZED DATA ---
const MILESTONE_DATA = [
//	DIMENSIONS
    { id: 'milestone_nether', p: 10, name: 'The Depths of Hell' },
    { id: 'milestone_end', p: 25, name: 'The End of All' },
    { id: 'milestone_aether', p: 15, name: 'High Above the Clouds' },
    { id: 'milestone_bumblezone', p: 10, name: 'The Great Hive' },
    { id: 'milestone_icaria', p: 20, name: 'The Forsaken Lands' },
    { id: 'milestone_undergarden', p: 15, name: 'The Forgotten Garden' },
    { id: 'milestone_dimdungeons', p: 15, name: 'The Infinite Labyrinth' },
	{ id: 'milestone_dungeon', p: 10, name: 'Dungeon Raider' },
//	BOSSES
    { id: 'milestone_wither', p: 10, name: 'Slayer of the Undead' },
    { id: 'milestone_ignis', p: 20, name: 'Bane of the Fire Lord' },
    { id: 'milestone_monstrosity', p: 20, name: 'Giant Slayer' },
	{ id: 'milestone_ender_guardian', p: 20, name: 'Void Guardian' },
	{ id: 'milestone_the_harbinger', p: 20, name: 'Mechanical Menace' },
	{ id: 'milestone_the_leviathan', p: 20, name: 'Abyssal Horror' },
	{ id: 'milestone_ancient_remnant', p: 20, name: 'Sands of Time' },
	{ id: 'milestone_maledictus', p: 20, name: 'Cursed King' },
	{ id: 'milestone_scylla', p: 20, name: 'Sea Witch' },
	{ id: 'milestone_lich', p: 20, name: 'Twilight Lich' },
	{ id: 'milestone_obsidilith', p: 20, name: 'Obsidian Construct' },
	{ id: 'milestone_gauntlet', p: 20, name: 'Hands of Fate' },
	{ id: 'milestone_void_blossom', p: 20, name: 'Toxic Bloom' },
	{ id: 'milestone_frostmaw', p: 20, name: 'The Frozen Maw' },
	{ id: 'milestone_grave_lich', p: 20, name: 'Master of the Grave' },
	{ id: 'milestone_wilden', p: 20, name: 'Chimaera Hunter' },
	{ id: 'milestone_wroughtnaut', p: 20, name: 'Living Fortress' },
	{ id: 'milestone_umvuthi', p: 20, name: 'Sun’s Fury' },
	{ id: 'milestone_forgotten', p: 50, name: 'Forgotten Guardian' },
//	ITEMS
    { id: 'milestone_elytra', p: 10, name: 'Wings of Liberty' },
	{ id: 'milestone_chaos_ingot', p: 15, name: 'Entropy Master' },
	{ id: 'milestone_miracle_ingot', p: 15, name: 'Alchemical Perfection' },
	{ id: 'milestone_eternium_ingot', p: 15, name: 'Endless Resolve' },
	{ id: 'milestone_hellforged', p: 15, name: 'Sovereign of Souls' },
	{ id: 'milestone_bronze', p: 15, name: 'Ancient Bronze' },
	{ id: 'milestone_stratus', p: 15, name: 'Cloud Walker' },
	{ id: 'milestone_dawnstone', p: 15, name: 'Sun-Forged Alloy' },
	{ id: 'milestone_depth', p: 15, name: 'Spirit of the Abyss' },
	{ id: 'milestone_forgotten_ingot', p: 15, name: 'Echoes of the Past' },
//	MISC
	{ id: 'milestone_deep', p: 5, name: 'The Deepest Dark' },
//	QUEST CHAPTER (Rewarded for completing)	
	{ id: 'milestone_pathfinder', p: 50, name: 'The Long Road' },
	{ id: 'milestone_arsnouveau', p: 50, name: 'Magic Supremacy' },
	{ id: 'milestone_bestiary', p: 50, name: 'The Great Hunt' },
	{ id: 'milestone_hostility', p: 50, name: 'Vanquisher of Malice' },
	{ id: 'milestone_embers', p: 50, name: 'The Primal Flame' },
	{ id: 'milestone_bloodmagic', p: 50, name: 'Sanguine Architect' },
	{ id: 'milestone_equipment', p: 50, name: 'Armed to the Teeth' },
	{ id: 'milestone_trinkets', p: 50, name: 'Curio Collector' },
	{ id: 'milestone_collections', p: 50, name: 'The Master Curator' },
	{ id: 'milestone_enchanting', p: 50, name: 'Arcane Weaver' }
];

// --- RANK CONFIGURATION ---
const RANKS = [
    { min: 820, name: "Legend", color: "§d" },
    { min: 730, name: "Mythic", color: "§5" },
    { min: 640, name: "Guardian", color: "§3" },
    { min: 550, name: "Sentinel", color: "§b" },
    { min: 460, name: "Hero", color: "§c" },
    { min: 370, name: "Champion", color: "§6" },
    { min: 280, name: "Elite", color: "§e" },
    { min: 190, name: "Veteran", color: "§a" },
    { min: 100, name: "Adventurer", color: "§b" },
    { min: 50,  name: "Novice", color: "§2" },
    { min: 10,  name: "Survivor", color: "§f" },
    { min: 0,   name: "Wanderer", color: "§7" }
];

// --- REBIRTH KITS ---
const REBIRTH_KITS = {
    "Legend": [
        ['sophisticatedbackpacks:diamond_backpack', 'minecraft:netherite_chestplate', 'minecraft:netherite_sword', 'minecraft:enchanted_golden_apple', 2, 'minecraft:netherite_pickaxe', 'minecraft:water_bucket', 'minecraft:ender_pearl', 16],
        ['minecraft:netherite_leggings', 'minecraft:netherite_boots', 'minecraft:totem_of_undying', 'minecraft:bow', 'minecraft:arrow', 64, 'minecraft:golden_carrot', 64, 'minecraft:netherite_axe']
    ],
    "Mythic": [
        ['sophisticatedbackpacks:diamond_backpack', 'minecraft:diamond_chestplate', 'minecraft:diamond_sword', 'minecraft:golden_apple', 5, 'minecraft:diamond_pickaxe', 'minecraft:ender_pearl', 8],
        ['minecraft:diamond_helmet', 'minecraft:diamond_boots', 'minecraft:shield', 'minecraft:crossbow', 'minecraft:arrow', 64, 'minecraft:potion', '{Potion:"minecraft:strong_strength"}']
    ],
    "Guardian": [
        ['sophisticatedbackpacks:gold_backpack', 'minecraft:diamond_chestplate', 'minecraft:shield', 'minecraft:iron_ingot', 32, 'minecraft:diamond_axe', 'minecraft:cooked_beef', 64],
        ['minecraft:turtle_helmet', 'minecraft:trident', 'minecraft:potion', '{Potion:"minecraft:long_breathing"}', 'minecraft:water_bucket', 'minecraft:sea_lantern', 16]
    ],
    "Sentinel": [
        ['sophisticatedbackpacks:gold_backpack', 'minecraft:iron_chestplate', 'minecraft:diamond_sword', 'minecraft:golden_apple', 1, 'minecraft:iron_pickaxe', 'minecraft:cobblestone', 64],
        ['minecraft:diamond_boots', 'minecraft:bow', 'minecraft:arrow', 32, 'minecraft:cooked_porkchop', 20, 'minecraft:bucket']
    ],
    "Hero": [
        ['sophisticatedbackpacks:gold_backpack', 'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:golden_apple', 2, 'minecraft:water_bucket', 'minecraft:cooked_porkchop', 16],
        ['minecraft:diamond_helmet', 'minecraft:diamond_leggings', 'minecraft:bow', 'minecraft:arrow', 64, 'minecraft:iron_pickaxe', 'minecraft:torch', 32]
    ],
    "Champion": [
        ['sophisticatedbackpacks:iron_backpack', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_sword', 'minecraft:bucket', 'minecraft:cooked_mutton', 16],
        ['minecraft:crossbow', 'minecraft:arrow', 64, 'minecraft:iron_axe', 'minecraft:shield', 'minecraft:iron_pickaxe', 'minecraft:bread', 20]
    ],
    "Elite": [
        ['sophisticatedbackpacks:iron_backpack', 'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:cooked_beef', 16, 'minecraft:torch', 16, 'minecraft:oak_log', 16],
        ['minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 'minecraft:stone_axe', 'minecraft:shield', 'minecraft:apple', 10]
    ],
    "Veteran": [
        ['sophisticatedbackpacks:iron_backpack', 'minecraft:stone_sword', 'minecraft:shield', 'minecraft:bread', 8, 'minecraft:stone_pickaxe', 'minecraft:torch', 16],
        ['minecraft:leather_chestplate', 'minecraft:stone_pickaxe', 'minecraft:torch', 16, 'minecraft:stone_shovel', 'minecraft:cooked_cod', 8]
    ],
    "Adventurer": [
        ['sophisticatedbackpacks:backpack', 'minecraft:stone_sword', 'minecraft:apple', 5, 'minecraft:wooden_pickaxe', 'minecraft:torch', 10],
        ['minecraft:wooden_axe', 'minecraft:wooden_pickaxe', 'minecraft:torch', 10, 'minecraft:leather_boots', 'minecraft:bread', 4]
    ],
    "Novice": [
        ['sophisticatedbackpacks:backpack', 'minecraft:stone_axe', 'minecraft:bread', 5, 'minecraft:torch', 5],
        ['minecraft:leather_helmet', 'minecraft:stone_shovel', 'minecraft:apple', 3]
    ],
    "Survivor": [
        ['sophisticatedbackpacks:backpack', 'minecraft:wooden_sword', 'minecraft:bread', 3, 'minecraft:stick', 4],
        ['minecraft:leather_helmet', 'minecraft:apple', 2, 'minecraft:stick', 4, 'minecraft:cobblestone', 8]
    ],
    "Wanderer": [
        ['sophisticatedbackpacks:backpack', 'minecraft:bread', 4, 'minecraft:torch', 64, 'minecraft:wooden_shovel'],
        ['minecraft:stick', 2, 'minecraft:apple', 1, 'minecraft:wooden_axe']
    ]
};

// --- GENERAL HELPER FUNCTIONS ---

function calculatePoints(player) {
    let total = 0;
    MILESTONE_DATA.forEach(m => {
        if (player.stages.has(m.id)) total += m.p;
    });
    return total;
}

function getUnlockedMilestoneNames(player) {
    let names = [];
    MILESTONE_DATA.forEach(m => {
        if (player.stages.has(m.id)) names.push(m.name);
    });
    return names;
}

function getRankData(pts) {
    return RANKS.find(r => pts >= r.min) || RANKS[RANKS.length - 1];
}

// --- GLOBAL GAMEPLAY TRIGGERS (AWARDS STAGES) ---

// Dimension Milestones
EntityEvents.spawned('player', event => {
    const { player, level } = event;
    const dimMap = {
        'minecraft:the_nether': 'milestone_nether',
        'minecraft:the_end': 'milestone_end',
        'aether:the_aether': 'milestone_aether',
        'the_bumblezone:the_bumblezone': 'milestone_bumblezone',
        'landsoficaria:icaria': 'milestone_icaria',
        'undergarden:undergarden': 'milestone_undergarden',
        'dimdungeons:dungeon_dimension': 'milestone_dimdungeons',
		'lrdynamicdungeon:dungeon_dimension': 'milestone_dungeon'
    };
	
	let dim = level.dimension.toString();
    let mId = dimMap[dim];

    if (mId && !player.stages.has(mId)) {
		let mData = MILESTONE_DATA.find(m => m.id === mId);
        player.stages.add(mId);
		
        if (mId === 'milestone_undergarden') {
            player.tell(Text.of("Your world was blessed with new loot...").gold().italic());
        }
		
		player.tell(Text.of(`New dimension reached! §b+${mData.p} Progression Points: §r${mData.name}`));
        player.tell(Text.of(`§bProgression Milestone Unlocked! Type /rank to check your status`));
        updateRingNBT(player);
    }
});

// Boss Kills
EntityEvents.death(event => {
    const { entity, source } = event;
    if (!source.player) return;
    const p = source.player;
    const bossMap = {
        'minecraft:wither': 'milestone_wither',
        'cataclysm:ignis': 'milestone_ignis',
        'cataclysm:netherite_monstrosity': 'milestone_monstrosity',
        'cataclysm:ender_guardian': 'milestone_ender_guardian',
        'cataclysm:the_harbinger': 'milestone_the_harbinger',
        'cataclysm:the_leviathan': 'milestone_the_leviathan',
        'cataclysm:ancient_remnant': 'milestone_ancient_remnant',
        'cataclysm:maledictus': 'milestone_maledictus',
        'cataclysm:scylla': 'milestone_scylla',
        'bosses_of_mass_destruction:lich': 'milestone_lich',
        'bosses_of_mass_destruction:obsidilith': 'milestone_obsidilith',
        'bosses_of_mass_destruction:gauntlet': 'milestone_gauntlet',
        'bosses_of_mass_destruction:void_blossom': 'milestone_void_blossom',
        'mowziesmobs:frostmaw': 'milestone_frostmaw',
		'mowziesmobs:ferrous_wroughtnaut': 'milestone_wroughtnaut',
		'mowziesmobs:umvuthi': 'milestone_umvuthi',
        'graveyard:lich': 'milestone_grave_lich',
        'ars_nouveau:wilden_boss': 'milestone_wilden',
		'undergarden:forgotten_guardian': 'milestone_forgotten'
    };
    let mId = bossMap[entity.type];
    if (mId && !p.stages.has(mId)) {
        let mData = MILESTONE_DATA.find(m => m.id === mId);
        p.stages.add(mId);
			if (mId === 'milestone_wither') {
				p.tell(Text.of("New loot may appear in chests...").gold().italic());
			}
        p.tell(Text.of(`Legendary creature slained! §b+${mData.p} Progression Points: §r${mData.name}`));
        updateRingNBT(p);
    }
});

// Item Triggers
PlayerEvents.inventoryChanged(event => {
    const { player, item } = event;
    const itemMap = {
        'minecraft:elytra': 'milestone_elytra',
        'l2hostility:chaos_ingot': 'milestone_chaos_ingot',
        'l2hostility:miracle_ingot': 'milestone_miracle_ingot',
        'l2complements:eternium_ingot': 'milestone_eternium_ingot',
        'bloodmagic:ingot_hellforged': 'milestone_hellforged',
        'darkerdepths:forsaken_bronze_ingot': 'milestone_bronze',
        'deep_aether:stratus_ingot': 'milestone_stratus',
        'embers:dawnstone_ingot': 'milestone_dawnstone',
        'naturesaura:depth_ingot': 'milestone_depth',
        'undergarden:forgotten_ingot': 'milestone_forgotten_ingot'
    };
    let mId = itemMap[item.id];
    if (mId && !player.stages.has(mId)) {
        let mData = MILESTONE_DATA.find(m => m.id === mId);
        player.stages.add(mId);
        player.tell(Text.of(`Rare item acquired! §b+${mData.p} Progression Points: §r${mData.name}`));
        updateRingNBT(player);
    }
});

// Quest Completion Milestones
FTBQuestsEvents.completed(event => {
    const { player, object } = event;
    let mData = MILESTONE_DATA.find(m => object.hasTag(m.id));

    if (mData && !player.stages.has(mData.id)) {
        player.stages.add(mData.id);
        player.tell(Text.of(`§b+${mData.p} Progression Points: §r${mData.name}`));
        updateRingNBT(player);
    }
});

// Deep Dark Triggers
BlockEvents.broken(event => {
    const { player } = event;
    if (player.y <= -60 && !player.stages.has('milestone_deep')) {
        player.stages.add('milestone_deep');
        player.tell(Text.of('§b+5 Progression Points: §rThe Deepest Dark'));
        updateRingNBT(player);
    }
});

// ==========================================================
// --- RING SPECIFIC LOGIC (NBT SYNC, DEATH, COMMANDS) ---
// ==========================================================

function updateRingNBT(player) {
    let pts = calculatePoints(player);
    let rebirths = player.persistentData.getInt('rebirth_count') || 0;
    let rank = getRankData(pts);
    let milestones = getUnlockedMilestoneNames(player);
	
    // --- RANK UP ANNOUNCEMENT LOGIC ---
    let previousRankName = player.persistentData.getString('last_known_rank') || "Wanderer";
    
    if (rank.name !== previousRankName) {
        let newRankIndex = RANKS.findIndex(r => r.name === rank.name);
        let oldRankIndex = RANKS.findIndex(r => r.name === previousRankName);

        if (newRankIndex < oldRankIndex) {
            player.server.tell(Text.of(""));
            player.server.tell([
                Text.of("⭐ ").gold(),
                Text.of(player.username).white(),
                Text.of(" has unlocked new milestone rank - ").yellow(),
                Text.of(`${rank.color}${rank.name}`).bold(),
                Text.of("!").yellow()
            ]);

			player.level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.player.levelup', 'players', 1.0, 1.0);
        }
        player.persistentData.putString('last_known_rank', rank.name);
    }
	
    let nbtData = {
        points: pts,
        rebirths: rebirths,
        unlocked_names: milestones,
        rank_name: rank.name,
        rank_color: rank.color
    };

    // Update Main Inventory
    player.inventory.allItems.forEach(stack => {
        if (stack.id == 'kubejs:roguelite_ring') stack.setNbt(nbtData);
    });

    // Update Curios Inventory
	try {
        let CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
        let inventoryOpt = CuriosApi.getCuriosInventory(player);

        if (inventoryOpt.isPresent()) {
            let curiosInv = inventoryOpt.resolve().get();
            let curiosMap = curiosInv.getCurios(); 

            curiosMap.forEach((identifier, slotInventory) => {
                let stacks = slotInventory.getStacks(); 
                for (let i = 0; i < stacks.getSlots(); i++) {
                    let stack = stacks.getStackInSlot(i);
                    if (!stack.isEmpty() && stack.id == 'kubejs:roguelite_ring') {
                        stack.setNbt(nbtData);
                        stacks.setStackInSlot(i, stack);
                    }
                }
            });
        }
    } catch (err) {
        console.error("Curio Access Failed: " + err);
    }
    player.containerMenu.broadcastChanges();
}

PlayerEvents.inventoryOpened(event => {
    event.server.scheduleInTicks(2, callback => {
        updateRingNBT(event.player);
    });
});

// CORE DEATH LOGIC
EntityEvents.death('player', event => {
    const { player, server } = event;
    let x = Math.floor(event.entity.x);
    let y = Math.floor(event.entity.y);
    let z = Math.floor(event.entity.z);
    
    let isEquipped = false;
    let posString = `${x}, ${y}, ${z}`;
    player.persistentData.putString('last_death_pos', posString);

    try {
        let CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
        let inventoryOpt = CuriosApi.getCuriosInventory(player);

        if (inventoryOpt.isPresent()) {
            let curiosInv = inventoryOpt.resolve().get();
            let curiosMap = curiosInv.getCurios();

            curiosMap.forEach((identifier, slotInventory) => {
                let stacks = slotInventory.getStacks();
                for (let i = 0; i < stacks.getSlots(); i++) {
                    let stack = stacks.getStackInSlot(i);
                    if (!stack.isEmpty() && stack.id == 'kubejs:roguelite_ring') {
                        isEquipped = true;
                        stacks.setStackInSlot(i, "minecraft:air");
						server.runCommandSilent(`particle minecraft:large_smoke ${x} ${y+1} ${z} 0.5 0.5 0.5 0.1 20`);
                        server.runCommandSilent(`particle minecraft:dragon_breath ${x} ${y+1} ${z} 0.5 0.5 0.5 0.05 30`);
						server.runCommandSilent(`playsound minecraft:block.glass.break player @a ${x} ${y} ${z} 1 0.5`);
                    }
                }
            });
        }
    } catch (err) {
        console.error("Death Check Curio Error: " + err);
    }

    if (isEquipped) {
		let rebirths = (player.persistentData.getInt('rebirth_count') || 0) + 1;
        player.persistentData.putInt('rebirth_count', rebirths);
        let pts = calculatePoints(player);
        let rank = getRankData(pts);
        let kits = REBIRTH_KITS[rank.name];
        let randomKit = kits[Math.floor(Math.random() * kits.length)];

        player.inventory.clear();

        server.scheduleInTicks(1, callback => {
            let rx = (Math.random() - 0.5) * 15000;
            let rz = (Math.random() - 0.5) * 15000;
            player.teleportTo('minecraft:overworld', rx, 100, rz, 0, 0);
            randomKit.forEach(item => { if (typeof item === 'string') player.give(item); });
            player.potionEffects.add('minecraft:slow_falling', 400);
            player.potionEffects.add('minecraft:resistance', 600, 4);
            player.tell(Text.of(`Rank ${rank.color}${rank.name} §fRebirth: Your journey continues...`).aqua());
        });
    }
});

// RING COMMANDS
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(Commands.literal('rank').executes(ctx => {
        const player = ctx.source.player;
        if (!player) return 0;
        let pts = calculatePoints(player);
        let rebirths = player.persistentData.getInt('rebirth_count') || 0;
        let lastPos = player.persistentData.getString('last_death_pos') || "None";
        let rankData = getRankData(pts);
        let nextRank = RANKS.slice().reverse().find(r => r.min > pts);
        let nextGoal = nextRank ? nextRank.min : pts;
		

        // Progress bar logic using Minecraft color codes
		let barLength = 20;
		let progress = nextGoal === pts ? barLength : Math.min(Math.floor((pts / nextGoal) * barLength), barLength);
		let bar = "§a" + "|".repeat(progress) + "§8" + ".".repeat(barLength - progress);

        // Chat output utilizing Text.of()
        player.tell(Text.of('--- [ Roguelite Status ] ---').gold());
        player.tell([Text.of('Rank: ').white(), Text.of(`${rankData.color}${rankData.name}`)]);
		player.tell(Text.of(`Progress: [${bar}§r] §f${pts}§7/§f${nextGoal}`).white().hover(Text.of("§8§oProgress till reaching the next Rank")));
        player.tell([Text.of('Total Points: ').white(), Text.of(`${pts}`).aqua()]);
        player.tell([Text.of('Rebirths: ').white().hover(Text.of("§8§oNumber of times respawned with Ring Of Rebirth")), Text.of(`${rebirths}`).lightPurple()]);
        player.tell([Text.of('Last Death: ').white(), Text.of(`${lastPos}`).gray()]);
		player.tell([Text.of(' ')]);
                    
		if (getUnlockedMilestoneNames(player).length > 0) {
			player.tell(Text.of('Unlocked Milestones:').yellow());
			player.tell(Text.of(`§7${getUnlockedMilestoneNames(player).join(', ')}`).italic());
		} else {
			player.tell(Text.of('No milestones achieved yet.').red());
		}
        player.tell(Text.of('------------------------').gold());
        return 1;
    }));

    event.register(Commands.literal('ring').then(Commands.literal('update').executes(ctx => {
        const player = ctx.source.player;
        updateRingNBT(player);
        player.tell(Text.green("Ring NBT Synchronized."));
        return 1;
    })));
});