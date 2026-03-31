const RAID_CONFIG = {
    // Experience Settings
    xpPerKill: 10,
    xpPerChest: 25,
    xpRequiredPerRank: 1500,     // XP to reach Rank 1; each rank costs this × (rank+1)
                                // Total XP for Rank N = xpRequiredPerRank × N×(N+1)/2

    // Reward Settings
    // Kills and chests contribute to a shared score pool before token conversion.
    // This means a mix of kills+chests combines naturally instead of separate buckets.
    killScoreWeight: 1,         // Each kill is worth X score points
	minibossScoreWeight: 2,     // Miniboss kill = X × killScoreWeight score points
	bossScoreWeight: 10,        // Boss kill     = X × killScoreWeight score points
    chestScoreWeight: 4,        // Each chest is worth X score points (chests are rarer)
    scorePerToken: 10,          // Total score needed for 1 token
                                // e.g. 30 kills + 5 chests = 30 + 5 = 35 score → 3 tokens
                                // e.g. 10 kills + 0 chests = 10 score             → 1 token
	
	
    maxTokensPerRun: 32,        // Hard cap on tokens per exit
    minPityTokens: 1,           // Tokens if player did something but missed thresholds
    rankTokenBonus: 0.1,        // +5% token multiplier per rank (Rank 3 = x1.15)

    // Scaling Settings (per Rank)
    hpScalePerRank: 0.05,       // +5% mob Health per rank
    dmgScalePerRank: 0.02,      // +2% mob Attack Damage per rank

    // Kill streak milestone interval
    killStreakInterval: 10,     // Notify + chime every X kills
	
	// XP death penalty — fraction of XP lost within current rank only
    xpDeathPenalty: 0.10,
	
	slownessChance: 0.15,       // 15% chance for mobs to inflict slowness
    slownessDuration: 40,      // Duration in ticks (2 seconds)
	
    // Zombie knockback
    zombieKnockbackChance: 0.30,   // 30% chance zombie hit sends player flying
    zombieKnockbackStrength: 5.2,  // Horizontal force
    zombieKnockbackLift: 1.4,      // Vertical force
	
    freezeRadius: 8,            // Radius for the Freeze Item
    freezeDuration: 80,         // 3 seconds of freeze

    // Mob scaling search radius
    scalingSearchRadius: 128,

    // Guard settings
    guardDurationTicks: 1200,   // 1 minute
    guardFollowInterval: 20,    // Re-check every 20 ticks
    guardLeashDistance: 14,     // Teleport to owner if farther than this
    guardAggroRange: 24,        // Target attacker if guard is within this range

    // Kill multiplier item
    killMultiplierDuration: 900,  // 45 seconds in ticks
    killMultiplierAmount: 2,      // Score multiplier on normal kills
	
    // Chest guardian
    chestGuardianChance: 0.15,    // 15% chance to spawn on chest open

    // Rival raider
    rivalBaseChance: 0.05,        // 5% chance at Rank 0
    rivalChancePerRank: 0.05,     // +5% per rank (Rank 3 = 20%, Rank 5 = 30%, cap at 50%)				 																					  
    
	// Room events
    roomEventMinDelay: 1200,      // Earliest a room event can fire (ticks, 1 min)
    roomEventMaxDelay: 6000,      // Latest a room event can fire (ticks, 5 min)
    roomEventDuration: 1200,      // How long a room event lasts (ticks, 1 min)

    // Cursed chests
    cursedChestChance: 0.10,      // 10% chance any chest is cursed
    cursedDebuffDuration: 1200,  // 1 min																					
};	
				   
const DUNGEON_START_MESSAGES = [
    "§8--- §7Searching dungeon position. . .",
    "§8--- §7Placing mobs. . .",
    "§8--- §7Placing loot. . .",
    "§8--- §7Replacing chests with mimics. . .",
    "§8--- §7Making custom loot. . .",
    "§8--- §7Configuring room placing algorithm. . .",
    "§8--- §7Asking dimension placing permission. . .",
    "§8--- §7Asking Herobrine for permission. . .",
    "§8--- §7Polishing the mimic's teeth. . .",
    "§8--- §7Convincing creepers not to be shy. . .",
    "§8--- §7Teaching skeletons how to aim (maybe). . .",
    "§8--- §7Spilling coffee on the dungeon blueprints. . .",
    "§8--- §7Calculating loot-to-pain ratio. . .",
    "§8--- §7Generating 1,000,000 useless bats. . .",
    "§8--- §7Hiding the secret entrance in plain sight. . .",
    "§8--- §7Checking if you brought a torch. . ."
		  
];

const DUNGEON_EXIT_STATS = [
    "§7Spiders Traumatized: §f",
    "§7Near-Death Experiences: §f",
    "§7Chickens Ignored: §f",
    "§7Steps taken in fear: §f",
    "§7Herobrine Sightings: §f0",
    "§7Accidental Crouch-Jumps: §f",
    "§7Loot greed level: §fCRITICAL",
    "§7Sanity remaining: §f",
    "§7Villagers not helped: §f",
    "§7Dirt blocks looked at: §f",
    "§7Times you thought you saw a Creeper: §f",
    "§7Ores walked past while distracted: §f",
    "§7Amount of 'Just one more chest' lies: §f",
    "§7Zombies offended by your presence: §f",
    "§7Gravel blocks that ruined your day: §f"
];

const CHEST_BLOCK_IDS = [
		'minecraft:chest',
		'minecraft:trapped_chest',
		'minecraft:barrel',
		'sophisticatedstorage:chest'
	];

// Mobs that can spawn as a chest guardian
const CHEST_GUARDIAN_POOL = [
    'minecraft:zombie',
    'minecraft:skeleton',
    'minecraft:husk',
    'minecraft:stray',
    'minecraft:vindicator',
    'minecraft:pillager',
];

// Names randomly assigned to the rival raider
const RIVAL_RAIDER_NAMES = [
    '§e⚔ Rival Raider',
    '§e⚔ Dungeon Plunderer',
    '§e⚔ Vault Thief',
    '§e⚔ The Competitor',
    '§e⚔ Fellow Raider',
    '§e⚔ Loot Rival',
];
			  
// ============================================================
//  ROOM EVENTS
// ============================================================
const ROOM_EVENTS = [
    {
        id: 'blood_surge',
        name: '§c☠ Blood Surge',
        desc: '§7The dungeon pulses with dark energy. Mobs grow stronger!',
        onStart: (player, level, server) => {
            level.getEntities().filter(e => e.isMonster() && e.distanceToEntity(player) < 48)
                .forEach(m => m.potionEffects.add('minecraft:strength', RAID_CONFIG.roomEventDuration, 1, false, true));
        },
        onEnd: (player) => {}
    },
    {
        id: 'frozen_dungeon',
        name: '§9❄ Frozen Dungeon',
        desc: '§7An icy wind sweeps through the halls. Your steps slow.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:slowness', RAID_CONFIG.roomEventDuration, 1, false, true);
        },
        onEnd: (player) => { server.runCommandSilent(`effect clear ${player.username} minecraft:slowness`); }
    },
    {
        id: 'score_frenzy',
        name: '§6⚡ Score Frenzy',
        desc: '§7The dungeon rewards the bold. Kill score is doubled!',
        onStart: (player, level, server) => { player.persistentData.roomEventScoreBoost = true; },
        onEnd: (player) => { player.persistentData.roomEventScoreBoost = false; }
    },
    {
        id: 'inferno',
        name: '§4🔥 Inferno',
        desc: '§7Flames erupt from the walls. Mobs move faster, but fire cannot harm you.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:fire_resistance', RAID_CONFIG.roomEventDuration, 0, false, true);
            level.getEntities().filter(e => e.isMonster() && e.distanceToEntity(player) < 48)
                .forEach(m => m.potionEffects.add('minecraft:speed', RAID_CONFIG.roomEventDuration, 1, false, true));
        },
        onEnd: (player) => { server.runCommandSilent(`effect clear ${player.username} minecraft:fire_resistance`); }
    },
    {
        id: 'cursed_sight',
        name: '§5👁 Cursed Sight',
        desc: '§7Your vision warps. Something watches from the dark.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:blindness', RAID_CONFIG.roomEventDuration, 0, false, true);
        },
        onEnd: (player) => { server.runCommandSilent(`effect clear ${player.username} minecraft:blindness`); }
    },
    {
        id: 'dungeons_gift',
        name: '§a💚 Dungeon`s Gift',
        desc: '§7The dungeon takes pity on you. Wounds close on their own.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:regeneration', RAID_CONFIG.roomEventDuration, 1, false, true);
        },
        onEnd: (player) => { server.runCommandSilent(`effect clear ${player.username} minecraft:regeneration`); }
    },
    {
        id: 'haste_surge',
        name: '§e⚡ Haste Surge',
        desc: '§7Energy courses through the dungeon. You feel faster and sharper.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:haste', RAID_CONFIG.roomEventDuration, 1, false, true);
            player.potionEffects.add('minecraft:speed', RAID_CONFIG.roomEventDuration, 1, false, true);
        },
        onEnd: (player) => {
            server.runCommandSilent(`effect clear ${player.username} minecraft:haste`);
            server.runCommandSilent(`effect clear ${player.username} minecraft:speed`);
        }
    },
    {
        id: 'darkness_falls',
        name: '§8💀 Darkness Falls',
        desc: '§7The torches die. Something moves in the black.',
        onStart: (player, level, server) => {
            player.potionEffects.add('minecraft:darkness', RAID_CONFIG.roomEventDuration, 0, false, true);
        },
        onEnd: (player) => { server.runCommandSilent(`effect clear ${player.username} minecraft:darkness`); }
    },
    {
        id: 'brittle_mobs',
        name: '§b❄ Brittle Mobs',
        desc: '§7The cold saps the strength of your enemies. Strike hard!',
        onStart: (player, level, server) => {
            level.getEntities().filter(e => e.isMonster() && e.distanceToEntity(player) < 48)
                .forEach(m => m.potionEffects.add('minecraft:weakness', RAID_CONFIG.roomEventDuration, 1, false, true));
        },
        onEnd: (player) => {}
    },
    {
        id: 'elite_surge',
        name: '§6★ Elite Surge',
        desc: '§7The dungeon spawns only its strongest. Danger — and glory — await.',
        onStart: (player, level, server) => { player.persistentData.roomEventEliteSurge = true; },
        onEnd: (player) => { player.persistentData.roomEventEliteSurge = false; }
    },
];

// Cursed chest debuffs — one random per cursed chest
const CURSED_DEBUFFS = [
    { id: 'minecraft:weakness', amp: 0, name: 'Weakness'   },
    { id: 'minecraft:slowness', amp: 0, name: 'Slowness' },
    { id: 'minecraft:hunger',   amp: 0, name: 'Hunger' },
    { id: 'minecraft:nausea',   amp: 0, name: 'Nausea'     },
];
const MINIBOSS_MOB_IDS = [
	'darkerdepths:void_soul_knight',
	'minecraft:shulker',
	'cataclysm:koboleton',
	'landsoficaria:soldier_revenant',
	'hmag:nightwalker',
	'landsoficaria:scorpion',
	'cataclysm:draugr',
	'friendsandfoes:illusioner',
	'hmag:dogu',
	'hmag:melty_monster'
];

const BOSS_MOB_IDS = [
	'hmag:ghastly_seeker',
	'landsoficaria:captain_revenant',
	'cataclysm:elite_draugr',
	'mowziesmobs:umvuthana',
	'cataclysm:deepling_brute',
	'ntrials:breeze_boss',
	'hmag:ogre',
	'hmag:giant_mummy',
	'hmag:spider_nest'
];
// ============================================================
//  HELPER FUNCTIONS
// ============================================================

function formatNum(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Renders a text progress bar directly to a player's chat.

function renderProgressBar(target, current, goal, label, colorCode) {
    let size = 10;
    let progress = Math.min(Math.floor((current / goal) * size), size);
    let percent  = Math.min(Math.floor((current / goal) * 100), 100);

    let bar = "§8[";
    for (let i = 0; i < size; i++) {
        bar += (i < progress) ? `${colorCode}■` : "§7□";
    }
    bar += `§8] §e${percent}%`;

    target.tell(
        Text.of(``)
            .append(Text.of(bar))
            .append(Text.of(` | §e${formatNum(current)} §7/ §6${formatNum(goal)}`))
    );
}

/**
 * Returns what rank a player should be at for a given total XP.
 * Each rank costs progressively more: Rank 1=500, Rank 2=1000, Rank 3=1500...
 * Driven entirely by RAID_CONFIG.xpRequiredPerRank.
 */
function getRaidRank(totalXP) {
    let rank = 0;
    let remaining = totalXP;
    while (true) {
        let xpForNext = RAID_CONFIG.xpRequiredPerRank * (rank + 1);
        if (remaining >= xpForNext) {
            remaining -= xpForNext;
            rank++;
        } else {
            break;
        }
    }
    return rank;
}

/**
 * Returns XP still needed to reach the next rank.
 */
function xpToNextRank(totalXP) {
    let rank = 0;
    let remaining = totalXP;
    while (true) {
        let xpForNext = RAID_CONFIG.xpRequiredPerRank * (rank + 1);
        if (remaining >= xpForNext) {
            remaining -= xpForNext;
            rank++;
        } else {
            return xpForNext - remaining;
        }
    }
}

/**
 * Token multiplier based on rank.
 * Rank 0 = x1.0, Rank 1 = x1.1, Rank 5 = x1.5, etc.
 * Driven by RAID_CONFIG.rankTokenBonus.
 */
function getRankTokenMultiplier(rank) {
    return 1.0 + (rank * RAID_CONFIG.rankTokenBonus);
}

CommonAddedEvents.playerChangeDimension(event => {
    const { player, server, level } = event;
    
													 
    let toDim = String(event.getNewLevel().dimension);
    let fromDim = String(event.getOldLevel().dimension);

    // --- 1. ENTRY LOGIC ---
    if (toDim === "lrdynamicdungeon:dungeon_dimension") {
        if (player.persistentData.inRaid) return;
        
        console.log(`[RAID] ${player.username} entered the dungeon. Initializing...`);

        player.persistentData.inRaid = true;
        player.persistentData.raidKills = 0;
        player.persistentData.raidChests = 0;
		player.persistentData.raidBossKills     = 0;
        player.persistentData.raidMinibossKills = 0;
		player.persistentData.raidDeaths        = 0;
		
        player.persistentData.raidStartTime = new Date().getTime();
        player.persistentData.killMultiplierActive = false;
        player.persistentData.killMultiplierBonus   = 0;
        player.persistentData.activeRoomEvent       = '';
        player.persistentData.roomEventScoreBoost   = false;
        player.persistentData.roomEventEliteSurge   = false;
        player.persistentData.raidDimension         = true;

        // Schedule room event at a random delay
        let eventDelay = RAID_CONFIG.roomEventMinDelay +
            Math.floor(Math.random() * (RAID_CONFIG.roomEventMaxDelay - RAID_CONFIG.roomEventMinDelay));
			
			server.scheduleInTicks(eventDelay, () => {
				if (!player.persistentData.inRaid) return;
				
				// If an event is already active (e.g. from a previous scheduled call
				// that fired late after a death re-entry), do nothing
				if (player.persistentData.activeRoomEvent !== '') return
				
				let evt = ROOM_EVENTS[Math.floor(Math.random() * ROOM_EVENTS.length)];
				
				player.persistentData.activeRoomEvent = evt.id;
				player.tell(Text.of(''));
				player.tell(Text.of(`${evt.name}`).bold());
				player.tell(Text.of(evt.desc).italic());
				player.setStatusMessage(`${evt.name} §7is active!`);
				level.playSound(null, player.blockX, player.blockY, player.blockZ,
					'minecraft:ambient.cave', 'players', 1.0, 0.5);
				
				evt.onStart(player, level, server);
				
					server.scheduleInTicks(RAID_CONFIG.roomEventDuration, () => {
						if (player.persistentData.activeRoomEvent === evt.id) {
							player.persistentData.activeRoomEvent = '';
							evt.onEnd(player);
							player.tell(Text.of(`§8${evt.name.replace(/§./g, '')} §8has ended.`).italic());
						}
					});
			});	   
		
		// Save Starting Coordinates for the Recall Item
		player.persistentData.putDouble('startX', player.x);
		player.persistentData.putDouble('startY', player.y);
		player.persistentData.putDouble('startZ', player.z);

		// Loading Sequence   
        let startMessages = DUNGEON_START_MESSAGES.sort(() => 0.5 - Math.random()).slice(0, 3);
        player.tell(Text.of("-----------------------").bold());
        player.tell("§6🚀 Preparing your dungeon...");
        
        startMessages.forEach((msg, i) => {
            server.scheduleInTicks((i + 1) * 15, () => {
                player.tell(msg);
                player.level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.chain.place', 'players', 0.6, 1.2);
            });
        });

        // Rival raider — chance scales with rank, spawns after short delay
        server.scheduleInTicks(120, () => {
            let rank = player.persistentData.raidRank || 0;
            let rivalChance = Math.min(
                RAID_CONFIG.rivalBaseChance + (rank * RAID_CONFIG.rivalChancePerRank),
                0.50  // hard cap at 50%
            );
            if (Math.random() < rivalChance) {
                let rival = level.createEntity('minecraft:pillager');
                rival.x = player.x + (Math.random() * 10 - 5);
                rival.y = player.y;
                rival.z = player.z + (Math.random() * 10 - 5);
                let rivalName = RIVAL_RAIDER_NAMES[Math.floor(Math.random() * RIVAL_RAIDER_NAMES.length)];
                rival.customName = rivalName;
                rival.setCustomNameVisible(true);
                rival.spawn();
                player.tell(Text.of(`§e⚠ ${rivalName.replace(/§./g, '')} §ehas entered the dungeon!`));
                level.playSound(null, player.blockX, player.blockY, player.blockZ,
                    'minecraft:entity.pillager.ambient', 'players', 1.0, 0.8);
            }
        });
		
        server.scheduleInTicks(60, () => {
			let rank    = player.persistentData.raidRank    || 0;
            let totalXP = player.persistentData.raidTotalXP || 0;
            let toNext  = xpToNextRank(totalXP);
			
            player.tell(Text.of(""));
            player.tell(Text.of("§a✅ Dungeon Raid System Loaded! §fStatistic tracking enabled"));									   
            
            // Display Current Rank on Entry
            player.tell(Text.of(`§7Current Rank: §e${rank} §8(${toNext} XP to Rank ${rank + 1})`).italic());
            
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.note_block.chime', 'players', 0.8, 1.2);
            player.tell(Text.of("-----------------------").bold());
        });
    }

    // --- 2. EXIT LOGIC ---
																				
    if (fromDim === "lrdynamicdungeon:dungeon_dimension" && player.persistentData.inRaid) {
        
        console.log(`[RAID] ${player.username} left the dungeon. Calculating rewards...`);
        
		// Calculate Payout				   
        let kills = player.persistentData.raidKills || 0;
        let chests = player.persistentData.raidChests || 0;
		let p_bossKills     = player.persistentData.raidBossKills     || 0;
		let p_minibossKills = player.persistentData.raidMinibossKills || 0;

		// Deaths this run
        let deaths          = player.persistentData.raidDeaths        || 0;
        // Diff ms timestamps, divide by 1000 for seconds
        let startMs     = player.persistentData.raidStartTime || new Date().getTime();
        let durationSec = Math.max(0, Math.floor((new Date().getTime() - startMs) / 1000));
        let durMin      = Math.floor(durationSec / 60);
        let durSec      = durationSec % 60;
        let durStr      = `${durMin}:${durSec.toString().padStart(2, '0')}`;
        
        // ── XP & RANK ──────────────────────────────────────────
        let xpEarned   = (kills * RAID_CONFIG.xpPerKill) + (chests * RAID_CONFIG.xpPerChest);
        let newTotalXP = (player.persistentData.raidTotalXP || 0) + xpEarned;
        player.persistentData.raidTotalXP = newTotalXP;

        let oldRank = player.persistentData.raidRank || 0;
        let newRank = getRaidRank(newTotalXP);
        let xpNext  = xpToNextRank(newTotalXP);

        player.persistentData.raidRank = newRank;  // always save rank

        // ── TOKEN CALCULATION ──────────────────────────────────
        // Kills and chests feed a shared score pool so they combine
        // rather than working as two independent buckets.
		let rankMult   = getRankTokenMultiplier(newRank);

		let killMult      = player.persistentData.killMultiplierBonus 														   
        let killScore  = kills  * RAID_CONFIG.killScoreWeight;
        let chestScore = chests * RAID_CONFIG.chestScoreWeight;
		let bossScore     = p_bossKills     * RAID_CONFIG.bossScoreWeight;
		let minibossScore = p_minibossKills * RAID_CONFIG.minibossScoreWeight;
        let totalScore    = killScore + chestScore + bossScore + minibossScore;
		
        let rawTokens  = Math.floor(totalScore / RAID_CONFIG.scorePerToken);

        if (rawTokens < RAID_CONFIG.minPityTokens && (kills > 5 || chests > 0)) {
            rawTokens = RAID_CONFIG.minPityTokens;
        }

        let tokens = Math.min(
            Math.floor(rawTokens * rankMult),
            RAID_CONFIG.maxTokensPerRun
        );
        // But always give at least 1 token if they earned any before penalty
        if (tokens < 1 && rawTokens >= RAID_CONFIG.minPityTokens) tokens = 1;

        // ── RESET SESSION FLAG ─────────────────────────────────
        player.persistentData.inRaid              = false;
        player.persistentData.activeRoomEvent     = '';
        player.persistentData.roomEventScoreBoost = false;
        player.persistentData.roomEventEliteSurge = false;
		
        // raidDimension cleared here on voluntary exit only
        // On death-exit it will be cleared by PlayerEvents.respawned
		player.persistentData.raidDimension = false;
		
        [
            'minecraft:slowness', 'minecraft:fire_resistance', 'minecraft:blindness',
            'minecraft:regeneration', 'minecraft:haste', 'minecraft:speed',
            'minecraft:darkness', 'minecraft:weakness', 'minecraft:hunger', 'minecraft:nausea'
        ].forEach(eff => {
            server.runCommandSilent(`effect clear ${player.username} ${eff}`);
        });	

        // Print Summary
        let fakeStats = DUNGEON_EXIT_STATS.sort(() => 0.5 - Math.random()).slice(0, 2);
        
		player.tell(Text.of(`--- [§bRAID SUMMARY §f| Time: ${durStr}]§r ---`));
        player.tell(Text.of(`§7Mobs Defeated: §f${kills}`));
		if (p_bossKills > 0)     
			player.tell(Text.of(`§6⚔ Bosses Slain:     §f${p_bossKills}`));
        if (p_minibossKills > 0) 
			player.tell(Text.of(`§b★ Minibosses Slain: §f${p_minibossKills}`));
        player.tell(Text.of(`§7Chests Looted: §f${chests}`));
		
        // Show death count in summary if player died
        //if (deaths > 0) {
        //    player.tell(Text.of(`§c💀 Deaths this run: §f${deaths}`));
        //}
		
        fakeStats.forEach(stat => {
																							  
            let output = stat;
            if (!stat.match(/\d$/) && !stat.match(/L$/) && !stat.match(/%$/)) {
                output += Math.floor(Math.random() * 20) + 1;
            }
            player.tell(Text.of(output));
        });
        // XP and Rank Display
		player.tell(Text.of(`§dRaid XP: §f+${xpEarned} §8(Total: ${newTotalXP})`));
		
		// Calculate XP earned within current rank tier for bar accuracy
		let xpIntoRank    = (RAID_CONFIG.xpRequiredPerRank * newRank * (newRank + 1) / 2);
		let xpForThisRank = RAID_CONFIG.xpRequiredPerRank * (newRank + 1);
		let xpProgress    = newTotalXP - xpIntoRank;

		renderProgressBar(player, xpProgress, xpForThisRank, "Rank XP", "§d");
        player.tell(Text.of(`§6Rewards: §f+${tokens} Raid Token${tokens !== 1 ? 's' : ''} §8→ Vault §8(x${rankMult.toFixed(1)} rank bonus)`).gold());

        if (rawTokens > RAID_CONFIG.maxTokensPerRun) {
            player.tell(Text.of("§8(Token cap reached for this run)").italic());
        }

        player.tell(Text.of("-----------------------").bold());
		player.tell(Text.of("§8Use §7/raidstats §8to view your full profile & lifetime stats.").italic());

        // ── RANK-UP ANNOUNCEMENT ───────────────────────────────
        if (newRank > oldRank) {
            server.scheduleInTicks(5, () => {
                player.tell(Text.of(""));
                player.tell(Text.of(`§b⭐ RANK ASCENSION! §6You are now Rank ${newRank}!`).bold());
                player.tell(Text.of(`§7Mob difficulty increased. Token bonus: §fx${getRankTokenMultiplier(newRank).toFixed(1)}`));
                player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                    'minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0);
            });
        }

        // [── LIFETIME STATS ────────────────────────────────────
        // Accumulate persistent stats across all runs
        if (kills > 0) {
            player.persistentData.statTotalRuns = (player.persistentData.statTotalRuns || 0) + 1;
        }
        player.persistentData.statTotalKills  = (player.persistentData.statTotalKills  || 0) + kills;
        player.persistentData.statTotalTokens = (player.persistentData.statTotalTokens || 0) + tokens;
			if (deaths > 0) player.persistentData.statTotalDeaths = (player.persistentData.statTotalDeaths || 0) + deaths;
			if (kills > (player.persistentData.statBestKills || 0)) {
				player.persistentData.statBestKills = kills;
			}
        // Track fastest completed run in seconds (only if player survived)
        let prevBest = player.persistentData.statBestTime || 0;
        if (deaths === 0 && (prevBest === 0 || durationSec < prevBest)) {
            player.persistentData.statBestTime = durationSec;
        }

        // ── DEPOSIT TOKENS INTO RAID VAULT ────────────────────
        if (tokens > 0) {
            let rv = player.persistentData.getCompound('raidVault');
            rv.putInt('raidTokens', (rv.getInt('raidTokens') || 0) + tokens);
            player.persistentData.put('raidVault', rv);
            player.tell(Text.of(`§6✦ §f${tokens} Raid Token${tokens !== 1 ? 's' : ''} §6deposited into your Raid Vault. §8(/raidvault)`));
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                'minecraft:entity.player.levelup', 'players', 1.0, 1.0);
        }
    }
});

// ============================================================
//  DANGER SCALING — mobs scale with nearest player's rank
// ============================================================
EntityEvents.spawned(event => {
    const { entity, level } = event;
    
    if (String(level.dimension) !== "lrdynamicdungeon:dungeon_dimension") return;
    if (!entity.isMonster()) return;
        // Find the nearest player to apply their rank difficulty
        let p = level.getNearestPlayer(entity.x, entity.y, entity.z, RAID_CONFIG.scalingSearchRadius, false);
        if (!p) return;
        
		let rank = p.persistentData.raidRank || 0;

		let healthMult = 1 + (rank * RAID_CONFIG.hpScalePerRank);
		let damageMult = 1 + (rank * RAID_CONFIG.dmgScalePerRank);

		entity.maxHealth = entity.maxHealth * healthMult;
		entity.health    = entity.maxHealth;

		let damageAttr = entity.getAttribute('minecraft:generic.attack_damage');
		if (damageAttr) {
			entity.setAttributeBaseValue(
				'minecraft:generic.attack_damage',
				damageAttr.baseValue * damageMult
			);
    }
});

// ============================================================
//  SLOWNESS ON HIT
// ============================================================
EntityEvents.hurt(event => {
    const { entity, source, level } = event;

    if (String(level.dimension) !== "lrdynamicdungeon:dungeon_dimension") return;
    if (!entity.isPlayer() || !entity.persistentData.inRaid) return;
    if (!source.actual || !source.actual.isMonster()) return;

    if (Math.random() < RAID_CONFIG.slownessChance) {
        entity.potionEffects.add('minecraft:slowness', RAID_CONFIG.slownessDuration, 1);
        entity.tell(Text.of("§cThe dungeon's chill slows your veins!").italic());
        level.playSound(null, entity.blockX, entity.blockY, entity.blockZ,
            'minecraft:entity.stray.ambient', 'players', 0.5, 0.5);
    }
});
// ============================================================
//  KNOCKBACK ON HIT FOR ZOMBIE
// ============================================================
EntityEvents.hurt(event => {
    const { entity, source, level } = event;

    if (!entity.isPlayer()) return;
    if (!source.actual || source.actual.type !== 'minecraft:zombie') return;

    let dx = entity.x - source.actual.x;
    let dz = entity.z - source.actual.z;
    let distance = Math.sqrt(dx * dx + dz * dz);

    if (distance > 0 && Math.random() < RAID_CONFIG.zombieKnockbackChance) {
        entity.setMotion(
            (dx / distance) * RAID_CONFIG.zombieKnockbackStrength,
            RAID_CONFIG.zombieKnockbackLift,
            (dz / distance) * RAID_CONFIG.zombieKnockbackStrength
        );
        
        entity.hurtMarked = true;

        //entity.tell(Text.of("§4The zombie's blow sends you flying!").italic());
        level.playSound(null, entity.blockX, entity.blockY, entity.blockZ, 
            'minecraft:entity.zombie.attack_wooden_door', 'players', 1.0, 0.8);
    }
});

// ============================================================
//  KILL TRACKER
// ============================================================
EntityEvents.death(event => {
    const { source, entity, level } = event;

    if (!source.player || !source.player.persistentData.inRaid) return;
	//if (String(level.dimension) !== 'lrdynamicdungeon:dungeon_dimension') return;

    let p = source.player;
    let entityId = String(entity.type);
    let isBoss      = BOSS_MOB_IDS.includes(entityId);
    let isMiniboss  = MINIBOSS_MOB_IDS.includes(entityId);

    p.persistentData.raidKills++;

    // Apply kill multiplier bonus score if active
    if (!isBoss && !isMiniboss && p.persistentData.killMultiplierActive) {
        let bonus = RAID_CONFIG.killScoreWeight * (RAID_CONFIG.killMultiplierAmount - 1);
        p.persistentData.killMultiplierBonus = (p.persistentData.killMultiplierBonus || 0) + bonus;
    }
    // Score Frenzy room event — doubles normal kill score
    if (!isBoss && !isMiniboss && p.persistentData.roomEventScoreBoost) {
        p.persistentData.killMultiplierBonus = (p.persistentData.killMultiplierBonus || 0) + RAID_CONFIG.killScoreWeight;																											 
    }								
	
    if (isBoss) {
        p.persistentData.raidBossKills = (p.persistentData.raidBossKills || 0) + 1;
        p.tell(Text.of(`§6⚔ BOSS SLAIN: §f${entityId.split(':')[1]} §8(+${RAID_CONFIG.bossScoreWeight} pts)`).bold());
        p.level.playSound(null, p.blockX, p.blockY, p.blockZ,
            'minecraft:ui.toast.challenge_complete', 'players', 1.0, 0.8);
    } else if (isMiniboss) {
        p.persistentData.raidMinibossKills = (p.persistentData.raidMinibossKills || 0) + 1;
        p.tell(Text.of(`§b★ Miniboss Defeated: §f${entityId.split(':')[1]} §8(+${RAID_CONFIG.minibossScoreWeight} pts)`));
        p.level.playSound(null, p.blockX, p.blockY, p.blockZ,
            'minecraft:entity.player.levelup', 'players', 0.8, 1.4);
    } else if (p.persistentData.raidKills % RAID_CONFIG.killStreakInterval === 0) {
        p.tell(Text.of(`§7Kill Streak: §b${p.persistentData.raidKills}§r`));
        p.level.playSound(null, p.blockX, p.blockY, p.blockZ,
            'minecraft:entity.experience_orb.pickup', 'players', 0.8, 1.2);
    } else {
        p.level.playSound(null, p.blockX, p.blockY, p.blockZ,
            'minecraft:block.stone.hit', 'players', 0.4, 1.5);
    }
});

// ============================================================
//  CHEST TRACKER
// ============================================================
BlockEvents.rightClicked(event => {
    const { block, player, level } = event;

    if (!player.persistentData.inRaid) return;
	if (String(level.dimension) !== 'lrdynamicdungeon:dungeon_dimension') return;																			 

	const isChestById = CHEST_BLOCK_IDS.includes(block.id);
    if (!isChestById) return;

    // 3. Build a unique position key for this chest
    const posId = `${block.x}_${block.y}_${block.z}`;

    // 4. Read the existing opened-chests string from persistentData
    //    putString/getString are the reliable NBT methods in KubeJS 1.20.1
    let openedStr = '';
    try {
        openedStr = player.persistentData.getString('openedChests') || '';
    } catch (e) {
        openedStr = '';
    }

    // 5. Dedup check — if this chest was already opened this run, bail out
    //    We wrap posId in pipes so "1_2_3" doesn't partially match "1_2_30"
    if (openedStr.includes(`|${posId}|`)) return;

    // 6. Register this chest and increment counter
    player.persistentData.putString('openedChests', openedStr + `|${posId}|`);
    player.persistentData.raidChests = (player.persistentData.raidChests || 0) + 1;

    const chestCount = player.persistentData.raidChests;

    // 7. Cursed chest — random debuff
    if (Math.random() < RAID_CONFIG.cursedChestChance) {
        let debuff = CURSED_DEBUFFS[Math.floor(Math.random() * CURSED_DEBUFFS.length)];
        player.potionEffects.add(debuff.id, RAID_CONFIG.cursedDebuffDuration, debuff.amp, false, true);
        player.tell(Text.of(''));
        player.tell(Text.of(`§5☠ Cursed Chest! §7You have been afflicted with §c${debuff.name}§7.`).bold());
        player.setStatusMessage(`§5☠ Cursed! §c${debuff.name} §7`);
        level.playSound(null, block.x, block.y, block.z,
            'minecraft:entity.wither.ambient', 'players', 0.8, 1.4);
    } else {
        // 8. Normal feedback
        player.statusMessage = Text.of(`§6Chests Looted: §f${chestCount}`);
    }

    // 9. Chest guardian — chance to spawn a named mob on chest open
    if (Math.random() < RAID_CONFIG.chestGuardianChance) {
        let guardianId = CHEST_GUARDIAN_POOL[Math.floor(Math.random() * CHEST_GUARDIAN_POOL.length)];
        let guardian = level.createEntity(guardianId);
        guardian.x = block.x + 0.5;
        guardian.y = block.y + 1;
        guardian.z = block.z + 0.5;
        guardian.customName = '§c👁 Chest Guardian';
        guardian.setCustomNameVisible(true);
        guardian.spawn();
        player.statusMessage = Text.of('§c👁 A guardian emerges from the chest!');
        level.playSound(null, block.x, block.y, block.z,
            'minecraft:entity.zombie.ambient', 'players', 1.0, 0.6);
    }																	  
});

// ============================================================
//  DEATH TRACKER
// Uses PlayerEvents.respawned — fires exactly once per actual respawn.
// raidDimension is set true on entry, survives the death-exit dim change,
// and is cleared here immediately after penalty fires — one death = one penalty.
// Overworld deaths after that won't trigger the block since the flag is gone.
// ============================================================
PlayerEvents.respawned(event => {
    const { player } = event;

    //  fires on actual death/respawn, never on portal use, so no false positives.
    if (!player.persistentData.raidDimension) return;

    player.persistentData.raidDeaths = (player.persistentData.raidDeaths || 0) + 1;

    // ── XP DEATH PENALTY ──────────────────────────────────────────
    // Lose xpDeathPenalty% of XP earned within the current rank only.
    let currentXP  = player.persistentData.raidTotalXP || 0;
    let currentRank = getRaidRank(currentXP);
    let rankFloorXP = RAID_CONFIG.xpRequiredPerRank * currentRank * (currentRank + 1) / 2;
    let xpIntoRank  = currentXP - rankFloorXP;
    let xpLost      = Math.floor(xpIntoRank * RAID_CONFIG.xpDeathPenalty);
    let newXP       = Math.max(rankFloorXP, currentXP - xpLost);
	
    player.persistentData.raidTotalXP = newXP;
    player.persistentData.raidRank    = currentRank;

	player.persistentData.raidDimension = false;
																	   
    if (xpLost > 0) {
        player.tell(Text.of(`§c💀 You died in the dungeon! §f-${xpLost} Raid XP §8(${RAID_CONFIG.xpDeathPenalty * 100}% of rank progress)`));
        player.tell(Text.of(`§8Remaining XP in rank: §f${formatNum(newXP - rankFloorXP)} §8/ §f${formatNum(RAID_CONFIG.xpRequiredPerRank * (currentRank + 1))}`));
    } else {

        player.tell(Text.of(`§c💀 You died in the dungeon! §8(No XP lost — re-enter to continue)`));
    }
});


// ============================================================
//  BOSS & MINIBOSS KILLER ITEMS
// Right-click a target mob to instantly kill it.
// Three conditions must pass: inRaid, dungeon dimension, correct mob type.
// ============================================================

// ── BOSS KILLER ─────────────────────────────────────────────────
ItemEvents.entityInteracted('kubejs:boss_killer', event => {
    const { player, target, level, item } = event;

    if (!player.persistentData.inRaid) {
        player.tell(Text.of('§c✗ You must be inside a dungeon raid to use this.'));
        return;
    }
    if (String(level.dimension) !== 'lrdynamicdungeon:dungeon_dimension') {
        player.tell(Text.of('§c✗ This item only works inside the dungeon dimension.'));
        return;
    }
    let entityId = String(target.type);
    if (!BOSS_MOB_IDS.includes(entityId)) {
        player.tell(Text.of(`§c✗ §f${entityId.split(':')[1]} §cis not a Boss.`));
        return;
    }

    item.count--;
    target.attack(target.maxHealth + 1000);

    player.tell(Text.of(`§6⚔ §lBoss Killer §r§6activated! §f${entityId.split(':')[1]} §6obliterated.`).bold());
    level.playSound(null, player.blockX, player.blockY, player.blockZ,
        'minecraft:entity.lightning_bolt.impact', 'players', 1.0, 1.2);

    event.cancel();
});

// ── MINIBOSS KILLER ────────────────────────────────────────────
ItemEvents.entityInteracted('kubejs:miniboss_killer', event => {
    const { player, target, level, item } = event;

    if (!player.persistentData.inRaid) {
        player.tell(Text.of('§c✗ You must be inside a dungeon raid to use this.'));
        return;
    }
    if (String(level.dimension) !== 'lrdynamicdungeon:dungeon_dimension') {
        player.tell(Text.of('§c✗ This item only works inside the dungeon dimension.'));
        return;
    }
    let entityId = String(target.type);
    if (!MINIBOSS_MOB_IDS.includes(entityId)) {
        player.tell(Text.of(`§c✗ §f${entityId.split(':')[1]} §cis not a Miniboss.`));
        return;
    }

    item.count--;
    target.attack(target.maxHealth + 1000);

    player.tell(Text.of(`§b★ Miniboss Killer §r§bactivated! §f${entityId.split(':')[1]} §bdefeated.`));
    level.playSound(null, player.blockX, player.blockY, player.blockZ,
        'minecraft:entity.player.levelup', 'players', 1.0, 1.5);

    event.cancel();
});

ItemEvents.rightClicked(event => {
    const { item, player, level, server } = event;

    // --- RECALL ITEM ---

    if (item.id == 'kubejs:dungeon_recall') {
        if (!player.persistentData.inRaid) {
            player.tell(Text.of("§cThis item only hums with power inside a dungeon."));
            return;
        }

        let sx = player.persistentData.getDouble('startX');
        let sy = player.persistentData.getDouble('startY');
        let sz = player.persistentData.getDouble('startZ');

        player.teleportTo(sx, sy, sz);
        player.tell(Text.of("§b🌀 You feel a pull towards the entrance..."));
        level.playSound(null, sx, sy, sz, 'minecraft:entity.enderman.teleport', 'players', 1.0, 1.0);
        item.count--;
    }

    // --- FREEZE ITEM ---
    if (item.id == 'kubejs:frost_scroll') {
		if (!player.persistentData.inRaid) {
            player.tell(Text.of("§cThis item only hums with power inside a dungeon."));
            return;
        }
        player.tell(Text.of("§9❄ Shattering the air around you!"));
        level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.player.hurt_freeze', 'players', 1.0, 0.5);

        // Find all monsters in radius
        let targets = level.getEntities().filter(e => e.isMonster() && e.distanceToEntity(player) < RAID_CONFIG.freezeRadius);
        
        targets.forEach(mob => {
            // Apply Slowness 255 (Complete immobilization) + Glowing
            mob.potionEffects.add('minecraft:slowness', RAID_CONFIG.freezeDuration, 254);
            mob.potionEffects.add('minecraft:glowing', RAID_CONFIG.freezeDuration, 0);
            
            // Particle effect at each mob
            server.runCommandSilent(`particle minecraft:snowflake ${mob.x} ${mob.y + 1} ${mob.z} 0.5 0.5 0.5 0.1 20`);
        });

        player.swing();
        item.count--; // Consume item
    }
    // --- KILL MULTIPLIER ITEM ---
    if (item.id == 'kubejs:kill_multiplier') {
        if (!player.persistentData.inRaid) {
            player.tell(Text.of("§cThis item only hums with power inside a dungeon."));
            return;
        }
        if (player.persistentData.killMultiplierActive) {
            player.tell(Text.of("§cA multiplier is already active!"));
            return;
        }

        player.persistentData.killMultiplierActive = true;
        item.count--;

        let durationSecs = RAID_CONFIG.killMultiplierDuration / 20;
        player.tell(Text.of(`§6⚡ Kill Multiplier activated! §fx${RAID_CONFIG.killMultiplierAmount} §6kill score for §f${durationSecs}s§6!`).bold());
        level.playSound(null, player.blockX, player.blockY, player.blockZ,
            'minecraft:entity.player.levelup', 'players', 1.0, 0.8);
        server.runCommandSilent(`particle minecraft:flame ${player.x} ${player.y + 1} ${player.z} 0.3 0.5 0.3 0.1 30`);

        // Countdown messages at halfway and 10 seconds
        let halfTicks = Math.floor(RAID_CONFIG.killMultiplierDuration / 2);
        let halfSecs  = Math.floor(durationSecs / 2);
        server.scheduleInTicks(halfTicks, () => {
            if (player.persistentData.killMultiplierActive) {
                player.setStatusMessage(`§6⚡ Kill Multiplier: §f${halfSecs}s remaining`);
            }
        });
        server.scheduleInTicks(RAID_CONFIG.killMultiplierDuration - 200, () => {
            if (player.persistentData.killMultiplierActive) {
                player.setStatusMessage('§6⚡ Kill Multiplier: §c10s remaining!');
            }
        });

        // Expire
        server.scheduleInTicks(RAID_CONFIG.killMultiplierDuration, () => {
            player.persistentData.killMultiplierActive = false;
            player.tell(Text.of('§8⚡ Kill Multiplier expired.'));
            level.playSound(null, player.blockX, player.blockY, player.blockZ,
                'minecraft:block.fire.extinguish', 'players', 0.8, 1.2);
        });
    }
	// --- GUARD SUMMON ---	
    if (item.id !== 'kubejs:guard_summon') return;

    // Check if player already has an active guard
    let hasGuard = level.getEntities().some(
        e => e.type === 'guardvillagers:guard'
          && e.tags.contains('guardian_villager')
          && e.tags.contains(`owner_${player.uuid}`)
          && e.potionEffects.isActive('minecraft:glowing')
    );

    if (hasGuard) {
        player.setStatusMessage('§cYou already have an active guard!');
        return;
    }

    // Summon 
    let guard = level.createEntity('guardvillagers:guard');
    guard.x = player.x;
    guard.y = player.y;
    guard.z = player.z;

    guard.addTag('guardian_villager');
    guard.addTag(`owner_${player.uuid}`);

    // Glowing = lifespan timer, strength so it can actually fight
    guard.potionEffects.add('minecraft:glowing',    RAID_CONFIG.guardDurationTicks, 0, false, false);
    guard.potionEffects.add('minecraft:resistance', RAID_CONFIG.guardDurationTicks, 1, false, true);

    guard.customName = `§a⚔ Personal Guard ⚔]`;
    guard.setCustomNameVisible(true);
    guard.spawn();

    player.setStatusMessage('§aYour guard has arrived! §8(1 minute lifespan)');
    level.playSound(null, player.blockX, player.blockY, player.blockZ,
        'minecraft:entity.villager.yes', 'players', 1.0, 1.2);

	item.count--;
	
});
// --- GUARD AI — target whoever is hitting the owner ---
	EntityEvents.hurt(event => {
		const { entity, source, level } = event;

		// When a player takes damage from a mob, direct nearby guards at the attacker
		if (entity.isPlayer()) {
			let attacker = source.actual;
			if (!attacker || attacker.isPlayer()) return;

			level.getEntities()
				.filter(e =>
					e.type === 'guardvillagers:guard'
				 && e.tags.contains('guardian_villager')
				 && e.tags.contains(`owner_${entity.uuid}`)
				 && e.distanceToEntity(entity) < RAID_CONFIG.guardAggroRange
				)
				.forEach(guard => guard.setTarget(attacker));
		}
	});

// --- GUARD MANAGEMENT — leash, lifespan, particles ---
	LevelEvents.tick(event => {
    if (event.server.tickCount % RAID_CONFIG.guardFollowInterval !== 0) return;

    let activeOwners = new Set();

    event.level.getEntities()
        .filter(e =>
            e.type === 'guardvillagers:guard'
         && e.tags.contains('guardian_villager')
        )
        .forEach(guard => {

            // 1. LIFESPAN CHECK — glowing expired = time's up
            if (!guard.potionEffects.isActive('minecraft:glowing')) {
                guard.discard();
                return;
            }

            // 2. LEASH — teleport to owner if too far
            let ownerTag = null;
			let tagIter = guard.tags.iterator();
			while (tagIter.hasNext()) {
				let t = tagIter.next();
				if (t.startsWith('owner_')) { ownerTag = t; break; }
			}
            if (!ownerTag) { guard.discard(); return; }

            let uuid  = ownerTag.replace('owner_', '');
            let owner = event.server.getPlayer(uuid);

            if (!owner) {
                // Owner offline or gone — discard guard
                guard.discard();
                return;
            }

            activeOwners.add(owner);

            if (guard.distanceToEntity(owner) > RAID_CONFIG.guardLeashDistance) {
                guard.teleportTo(owner.x, owner.y, owner.z);
            }
        });

    // 3. PLAYER PARTICLES — visual indicator that guard is active
    activeOwners.forEach(owner => {
        event.level.spawnParticles(
            'minecraft:enchant',
            true,
            owner.x, owner.y + 1, owner.z,
            0.4, 0.8, 0.4,
            6,
            0.05
        );
    });
});

// ============================================================
//  /raidstats COMMAND
// ============================================================

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal("raidstats")
            .executes(ctx => {
                let player = ctx.source.player;
                if (!player) return 0;

                let totalXP = player.persistentData.raidTotalXP || 0;
                let rank    = player.persistentData.raidRank    || 0;
                let toNext  = xpToNextRank(totalXP);
                let mult    = getRankTokenMultiplier(rank);

                player.tell(Text.of("--- §6[RAIDER PROFILE]§r ---").bold());
                player.tell(`§7Name:        §f${player.username}`); 
                player.tell(Text.of(`§7Rank:        §e${rank}`));
                player.tell(Text.of(`§7Total XP:    §f${totalXP} §8(${toNext} XP to Rank ${rank + 1})`));

                let si = (RAID_CONFIG.xpRequiredPerRank * rank * (rank + 1) / 2);
                let sg = RAID_CONFIG.xpRequiredPerRank * (rank + 1);

                renderProgressBar(player, totalXP - si, sg, "Rank XP", "§6");
                player.tell(Text.of(`§7Token Bonus: §fx${mult.toFixed(2)}`));
                player.tell(Text.of(`§8---`));

                let totalRuns   = player.persistentData.statTotalRuns   || 0;

                let totalKills  = player.persistentData.statTotalKills  || 0;

                let totalTokens = player.persistentData.statTotalTokens || 0;

                let totalDeaths = player.persistentData.statTotalDeaths || 0;

                let bestKills   = player.persistentData.statBestKills   || 0;

                let bestTimeSec = player.persistentData.statBestTime    || 0;

                let btMin = Math.floor(bestTimeSec / 60);

                let btSec = (bestTimeSec % 60).toString().padStart(2, '0');

                let bestTimeStr = bestTimeSec > 0 ? `${btMin}:${btSec}` : '§8N/A';

                player.tell(Text.of(`§7Runs Completed:  §f${formatNum(totalRuns)}`));
                player.tell(Text.of(`§7Lifetime Kills:  §f${formatNum(totalKills)}`));
                player.tell(Text.of(`§7Tokens Earned:   §f${formatNum(totalTokens)}`));
                player.tell(Text.of(`§7Total Deaths:    §f${formatNum(totalDeaths)}`));
                player.tell(Text.of(`§7Best Kill Run:   §f${formatNum(bestKills)} kills`));
                player.tell(Text.of("-----------------------").bold());
				player.tell(Text.of("§8Use §7/raidhelp §8to view more ").italic());
                return 1;
            })
    );
});

// ============================================================
//  /raidhelp COMMAND
// ============================================================
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
 
    event.register(
        Commands.literal("raidhelp")
            .executes(ctx => {
                let player = ctx.source.player;
                if (!player) return 0;
 
                player.tell(Text.of("§8------- §6[RAID SYSTEM HELP] §8-------").bold());
                player.tell(Text.of("§7Enter the §6Dungeon Portal§7 with a §fDungeon Pass§7. Kill mobs, open chests, and exit the portal when you're done. Your performance is tracked the entire time."));
                player.tell(Text.of(""));
 
                player.tell(Text.of("§6§l✦ Raid Tokens").bold());
                player.tell(Text.of("§7Every kill and chest contributes to a score pool. When you exit, that score converts into §6Raid Tokens§7 deposited directly into your §6Raid Vault§7. Bosses and minibosses are worth more. Higher rank gives a token bonus multiplier."));
                player.tell(Text.of("§8Spend tokens in the §7Dungeon Raid §8quest chapter."));
                player.tell(Text.of(""));
 
                player.tell(Text.of("§b§l★ Rank & XP").bold());
                player.tell(Text.of("§7Killing mobs and opening chests earns §bRaid XP§7. Enough XP and you rank up. Higher rank means mobs hit harder and have more health — but your token rewards improve and rival raiders become more common."));
                player.tell(Text.of(""));
 
                player.tell(Text.of("§c§l💀 Death").bold());
                player.tell(Text.of("§7Dying in the dungeon costs a small portion of your current rank's XP progress. You §lcannot lose a rank§r§7 from dying. Your run is not over — re-enter and keep going."));
                player.tell(Text.of(""));
 
                player.tell(Text.of("§5§l👁 Room Events").bold());
                player.tell(Text.of("§7Once per run, a random event fires at random time after entry. It might buff you, curse the mobs, double your score, or make things considerably harder. It lasts about 1 minute."));
                player.tell(Text.of(""));
 
                player.tell(Text.of("§5§l☠ Cursed Chests").bold());
                player.tell(Text.of("§7Some chests are cursed. Opening them gives loot as normal, but also applies a random debuff. Effects clear when you exit."));
                player.tell(Text.of(""));
  
                player.tell(Text.of("§7§lCommands").bold());
                player.tell(Text.of("§7/raidstats        §8— rank, XP, and lifetime statistics"));
                player.tell(Text.of("§7/raidvault        §8— token balance"));
                player.tell(Text.of("§7/raidvault withdraw <n> §8— move tokens to inventory"));
                player.tell(Text.of("§7/raidvault deposit      §8— deposit held tokens into vault"));
                player.tell(Text.of("§8------------------------------------").bold());
 
                return 1;
            })
    );
});

// ============================================================
//  /raidvault COMMAND
// ============================================================
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('raidvault')

        // ── BALANCE ──────────────────────────────────────────────
        .executes(ctx => {
            let player  = ctx.source.player;
            let rv      = player.persistentData.getCompound('raidVault');
            let balance = rv.getInt('raidTokens') || 0;

            player.tell(Text.of("--- §6[RAID VAULT]§r ---").bold());
            player.tell(Text.of(`§7Raid Tokens: §6${formatNum(balance)}`));
            player.tell(Text.of("§8---"));
            player.tell(Text.of("§8/raidvault withdraw §7<amount> §8— withdraw tokens to inventory"));
            player.tell(Text.of("§8/raidvault deposit  §8— deposit held tokens into vault"));
            player.tell(Text.of("-----------------------").bold());
            return 1;
        })

        // ── DEPOSIT (main hand) ───────────────────────────────────
        .then(Commands.literal('deposit').executes(ctx => {
            let player = ctx.source.player;
            let item   = player.mainHandItem;

            if (String(item.id) !== 'kubejs:coin_raid' || item.count === 0) {
                player.tell(Text.of('§cYou are not holding any Raid Tokens!'));
                return 0;
            }

            let rv      = player.persistentData.getCompound('raidVault');
            let current = rv.getInt('raidTokens') || 0;
            let amount  = item.count;
            rv.putInt('raidTokens', current + amount);
            player.persistentData.put('raidVault', rv);
            item.setCount(0);

            player.tell(Text.of(`§6✦ Deposited §f${amount} §6Raid Token${amount !== 1 ? 's' : ''} §8(Balance: §6${formatNum(current + amount)}§8)`));
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                'minecraft:entity.villager.yes', 'players', 1.0, 1.0);
            return 1;
        }))

        // ── WITHDRAW <amount> ─────────────────────────────────────
        .then(Commands.literal('withdraw')
            .then(Commands.argument('amount', Arguments.INTEGER.create(event))
                .executes(ctx => {
                    let player  = ctx.source.player;
                    let amount  = Arguments.INTEGER.getResult(ctx, 'amount');

                    if (amount <= 0) {
                        player.tell(Text.of('§cAmount must be greater than 0.'));
                        return 0;
                    }

                    let rv      = player.persistentData.getCompound('raidVault');
                    let balance = rv.getInt('raidTokens') || 0;

                    if (balance < amount) {
                        player.tell(Text.of(`§cInsufficient tokens! You have §f${formatNum(balance)} §cin your vault.`));
                        return 0;
                    }

                    rv.putInt('raidTokens', balance - amount);
                    player.persistentData.put('raidVault', rv);
                    player.give(Item.of('kubejs:coin_raid', amount));

                    player.tell(Text.of(`§6✦ Withdrew §f${amount} §6Raid Token${amount !== 1 ? 's' : ''} §8(Balance: §6${formatNum(balance - amount)}§8)`));
                    player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                        'minecraft:block.amethyst_block.break', 'players', 1.0, 1.2);
                    return 1;
                })
            )
        )
    );
});

