// ============================================================
//   SLOTS SYSTEM — KubeJS 1.20.1
//   Trigger : Right-click Gamble Coin (mainhand)
//             + Gold Ingot in offhand (consumed per spin)
//             + XP points (not levels)
//   Files   : slots.js            → kubejs/server_scripts/
//             gamble_coin_item.js → kubejs/startup_scripts/
// ============================================================

// ─── CONFIGURATION ──────────────────────────────────────────

const LIMIT_MIN         = 32;    // Min spins per time window
const LIMIT_MAX         = 64;    // Max spins per time window
const LIMIT_TIMER_HOURS = 0.5;   // Hours before spin limit resets (0.5 = 30 min)

const SPIN_XP_COST      = 25;    // XP points (NOT levels) consumed per spin
const SPIN_COOLDOWN_MS  = 5000;  // Milliseconds between spins (5 sec)
const GAMBLE_COIN_ID    = "kubejs:gamble_coin";
const OFFHAND_ITEM_ID   = "minecraft:gold_ingot"; // Consumed on each spin

// Win chances — remainder (1 - both) = loss probability
const JACKPOT_CHANCE    = 0.05;  // 5%  — all 3 symbols match
const PARTIAL_CHANCE    = 0.25;  // 25% — any 2 symbols match

// ─── DIMENSION PRIZE TABLE ───────────────────────────────────
// Prizes awarded automatically on win, picked by dimension.
// Fields: weight (higher = more common), item, count, label.

const DIMENSION_PRIZES = {

    "minecraft:overworld": {
        jackpot: [
            { weight: 5,  item: "minecraft:netherite_ingot",        count: 1,  label: "Netherite Ingot"         },
            { weight: 8,  item: "minecraft:elytra",                 count: 1,  label: "Elytra"                  },
            { weight: 10, item: "minecraft:totem_of_undying",       count: 1,  label: "Totem of Undying"        },
            { weight: 15, item: "minecraft:enchanted_golden_apple", count: 1,  label: "Enchanted Golden Apple"  },
            { weight: 20, item: "minecraft:diamond",                count: 5,  label: "5x Diamond"              },
        ],
        partial: [
            { weight: 25, item: "minecraft:diamond",                count: 1,  label: "Diamond"                 },
            { weight: 30, item: "minecraft:experience_bottle",      count: 8,  label: "8x XP Bottle"            },
            { weight: 20, item: "minecraft:gold_ingot",             count: 4,  label: "4x Gold Ingot"           },
            { weight: 15, item: "minecraft:ender_pearl",            count: 4,  label: "4x Ender Pearl"          },
            { weight: 10, item: "minecraft:iron_ingot",             count: 8,  label: "8x Iron Ingot"           },
        ],
    },

    "minecraft:the_nether": {
        jackpot: [
            { weight: 10, item: "minecraft:netherite_ingot",        count: 2,  label: "2x Netherite Ingot"      },
            { weight: 15, item: "minecraft:ancient_debris",         count: 3,  label: "3x Ancient Debris"       },
            { weight: 20, item: "minecraft:crying_obsidian",        count: 16, label: "16x Crying Obsidian"     },
            { weight: 5,  item: "minecraft:enchanted_golden_apple", count: 2,  label: "2x Enchanted Golden Apple"},
            { weight: 10, item: "minecraft:wither_skeleton_skull",  count: 2,  label: "2x Wither Skull"         },
        ],
        partial: [
            { weight: 30, item: "minecraft:gold_ingot",             count: 8,  label: "8x Gold Ingot"           },
            { weight: 25, item: "minecraft:quartz",                 count: 16, label: "16x Nether Quartz"       },
            { weight: 20, item: "minecraft:blaze_rod",              count: 4,  label: "4x Blaze Rod"            },
            { weight: 15, item: "minecraft:magma_cream",            count: 8,  label: "8x Magma Cream"          },
            { weight: 10, item: "minecraft:wither_skeleton_skull",  count: 1,  label: "Wither Skeleton Skull"   },
        ],
    },

    "minecraft:the_end": {
        jackpot: [
            { weight: 5,  item: "minecraft:dragon_egg",             count: 1,  label: "Dragon Egg"              },
            { weight: 10, item: "minecraft:elytra",                 count: 1,  label: "Elytra"                  },
            { weight: 15, item: "minecraft:end_crystal",            count: 4,  label: "4x End Crystal"          },
            { weight: 20, item: "minecraft:shulker_shell",          count: 8,  label: "8x Shulker Shell"        },
            { weight: 8,  item: "minecraft:chorus_fruit",           count: 32, label: "32x Chorus Fruit"        },
        ],
        partial: [
            { weight: 30, item: "minecraft:ender_pearl",            count: 8,  label: "8x Ender Pearl"          },
            { weight: 25, item: "minecraft:purpur_block",           count: 16, label: "16x Purpur Block"        },
            { weight: 20, item: "minecraft:end_stone_bricks",       count: 32, label: "32x End Stone Bricks"    },
            { weight: 15, item: "minecraft:shulker_shell",          count: 2,  label: "2x Shulker Shell"        },
            { weight: 10, item: "minecraft:dragon_breath",          count: 4,  label: "4x Dragon's Breath"      },
        ],
    },

    // Fallback for any modded / unknown dimension
    "_default": {
        jackpot: [
            { weight: 20, item: "minecraft:diamond",                count: 3,  label: "3x Diamond"              },
            { weight: 15, item: "minecraft:totem_of_undying",       count: 1,  label: "Totem of Undying"        },
            { weight: 10, item: "minecraft:netherite_ingot",        count: 1,  label: "Netherite Ingot"         },
        ],
        partial: [
            { weight: 30, item: "minecraft:gold_ingot",             count: 4,  label: "4x Gold Ingot"           },
            { weight: 30, item: "minecraft:experience_bottle",      count: 8,  label: "8x XP Bottle"            },
            { weight: 20, item: "minecraft:iron_ingot",             count: 8,  label: "8x Iron Ingot"           },
        ],
    },
};

// ─── SLOT SYMBOLS ─────────────────────────────────────────────
const SYMBOLS    = ["💎", "🍎", "🍒", "🍇", "🎁", "💀"];
const SPIN_ICONS = ["🔄", "🎰", "✨", "🎲"];

// ─── LIMIT MESSAGES ───────────────────────────────────────────
const LIMIT_MESSAGES = [
    { name: "FINGERS WORN OUT",        desc: "Your fingers became too square for these buttons. Take a break!" },
    { name: "VILLAGER STRIKE",         desc: "The cashier villager got tired and locked himself in the bathroom." },
    { name: "MACHINE OVERHEATING",     desc: "The slot machine is smoking! It refuses to work until it cools down." },
    { name: "RNG OFFENDED",            desc: "The God of Randomness saw your bets and went to cry. Come back later." },
    { name: "GAMBLING ALERT",          desc: "We called an Iron Golem patrol. Run before they prescribe you a ban!" },
    { name: "MINECRAFT DETOX",         desc: "Your eyes have become too square. Go look at real grass (not the block kind)!" },
    { name: "BOT CHECK",               desc: "You're clicking so fast we thought you were a clicker. Rest a bit." },
    { name: "BROKEN LEVER",            desc: "You pressed the lever so hard it fell off. Waiting for the repair guy." },
    { name: "LUCK TAX",                desc: "You've used your daily luck allowance. Keep going and you'll only win gravel." },
    { name: "CASHIER AT LUNCH",        desc: "The token-dispensing villager went to eat carrots. Come back later." },
    { name: "END CONNECTION LOST",     desc: "A shulker chewed through the inter-dimensional cable. Prizes can't get through." },
    { name: "RNG ON VACATION",         desc: "The random number generator took a day off. It only outputs '0' right now." },
    { name: "LAZINESS CURSE",          desc: "You've been afflicted with 'tired fingers'. Your character refuses to touch the machines." },
    { name: "ADMIN IS WATCHING",       desc: "The administrator noticed your enthusiasm and placed a temporary seal on your pockets." },
    { name: "HOLE IN THE WALLET",      desc: "Your prize bag tore. Needs time to be stitched with netherite thread." },
    { name: "TAX OFFICE RAID",         desc: "A wandering trader filed a complaint. We're hiding the black ledgers." },
    { name: "SILVERFISH INFESTATION",  desc: "Silverfish moved into the slots and ate all the jackpots. Waiting for the exterminator." },
    { name: "MAGIC RECERTIFICATION",   desc: "The luck enchantment expired. Waiting for an XP shipment from the enderman farm." },
    { name: "HEROBRINE CHANGED THE PASSWORDS", desc: "Someone left the admin panel open. Now there are only white eyes on the screen." },
    { name: "SANITATION DAY",          desc: "We're cleaning the machines and polishing every pixel to a shine." },
    { name: "ACCOUNTING",              desc: "Counting prizes on an abacus — the calculator was eaten by a trader's donkey." },
    { name: "DUMPLING BREAK",          desc: "The chief mechanic dropped the server room keys into sour cream." },
    { name: "CREEPER INVASION",        desc: "One green client went all-in. Now we're picking up wall blocks from across the dimension." },
    { name: "WITCH'S REVENGE",         desc: "The cherry icon got cursed. Now it drops poison instead. Working on it..." },
    { name: "PAPER SHORTAGE",          desc: "Ran out of receipt paper. Waiting for the sugarcane farm to grow." },
    { name: "NETHER TRAFFIC JAM",      desc: "A fat Ghast got stuck in the portal. All prize traffic is at a standstill." },
    { name: "DRAGON'S DAY OFF",        desc: "The dragon is celebrating his birthday. All random magic went to fireworks." },
    { name: "PIXEL THEFT",             desc: "An Enderman stole a block from the lottery drum. Replacing it with a pumpkin." },
    { name: "SPIDER STRIKE",           desc: "Spiders refuse to weave the network. Demanding vertical ladders." },
    { name: "NOISE COMPLAINT",         desc: "Wardens complained about the jackpot sound. Laying wool on the floor." },
    { name: "JAVA UPDATE",             desc: "The server got tired of waiting for the update and took indefinite leave." },
];

// ─── INTERNAL ────────────────────────────────────────────────
const LIMIT_MS = LIMIT_TIMER_HOURS * 3600000;

// ─── RIGHT-CLICK TRIGGER ─────────────────────────────────────
ItemEvents.rightClicked(event => {
    const { item, player, server } = event;

    if (item.id !== GAMBLE_COIN_ID) return;

    // Prevent default item use (e.g. eating, placing)
    //event.cancel();

    let now = new Date().getTime();

    // Check 2: Enough XP points?
    if (player.xpPoints < SPIN_XP_COST) {
        player.tell(`§cNot enough XP! You need §b${SPIN_XP_COST} XP points §cto spin.`);
        player.tell(`§7You currently have §e${Math.floor(player.xpPoints)} §7points.`);
        return;
    }

    // Check 3: 5-second cooldown
    let lastSpin = player.persistentData.slotsLastSpin || 0;
    if (now - lastSpin < SPIN_COOLDOWN_MS) {
        let secsLeft = ((SPIN_COOLDOWN_MS - (now - lastSpin)) / 1000).toFixed(1);
        player.setStatusMessage(Text.of(`§e⏳ Wait §b${secsLeft}s §ebefore spinning again.`).bold());
        return;
    }

    // Check 4: Hourly spin limit
    if (!player.persistentData.slotsWindowStart) {
        player.persistentData.slotsWindowStart    = now;
        player.persistentData.slotsUsedThisWindow = 0;
        player.persistentData.slotsCurrentLimit   = randInt(LIMIT_MIN, LIMIT_MAX);
    }
    if (now - player.persistentData.slotsWindowStart > LIMIT_MS) {
        player.persistentData.slotsWindowStart    = now;
        player.persistentData.slotsUsedThisWindow = 0;
        player.persistentData.slotsCurrentLimit   = randInt(LIMIT_MIN, LIMIT_MAX);
    }
    if (player.persistentData.slotsUsedThisWindow >= player.persistentData.slotsCurrentLimit) {
        let msg      = LIMIT_MESSAGES[Math.floor(Math.random() * LIMIT_MESSAGES.length)];
        let timeLeft = Math.ceil((LIMIT_MS - (now - player.persistentData.slotsWindowStart)) / 60000);
        player.tell(" ");
        player.tell(`§c§l🛑 SLOTS CLOSED: ${msg.name}`);
        player.tell(`§7${msg.desc}`);
        player.tell(`§eAccess locked for: §b${timeLeft} min.`);
        player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
            "minecraft:entity.villager.no", "players", 1.0, 1.0);
        return;
    }

    // ── Consume resources ──────────────────────────────────
    player.giveExperiencePoints(-SPIN_XP_COST); // Deduct XP points, NOT levels
		
        // Find and Consume Fuel
        let consumed = false;
        player.inventory.allItems.forEach(stack => {
            if (!consumed && stack.id == 'minecraft:gold_ingot') {
                stack.count--;
                consumed = true;
            }
        });

        if (!consumed) {
            player.tell("§cYou need a §6Gold Ingot §cin your §finventory §cto spin!");
            return;
        }
	
	let coinItem = player.mainHandItem;
    coinItem.damageValue += 1;
    if (coinItem.damageValue >= coinItem.maxDamage) {
        coinItem.count = 0; // Remove the item (it's broken)
        player.level.playSound(null, player.blockX, player.blockY, player.blockZ, "minecraft:entity.item.break", "players", 1.0, 1.0);
        player.tell("Your Gamble Coin broke!");
    }
	
    player.persistentData.slotsLastSpin       = now;
    player.persistentData.slotsUsedThisWindow++;

    // ── Resolve dimension prize pool ───────────────────────
    let dimId   = player.level.dimension;
    let dimPool = DIMENSION_PRIZES[dimId] || DIMENSION_PRIZES["_default"];

    // ── Spin animation ─────────────────────────────────────
    player.tell(Text.of(`§6§l> §bSPINNING ... §6§l<`).italic());

    [5, 10, 15].forEach(ticks => {
        server.scheduleInTicks(ticks, () => {
            let r1 = SPIN_ICONS[Math.floor(Math.random() * SPIN_ICONS.length)];
            let r2 = SPIN_ICONS[Math.floor(Math.random() * SPIN_ICONS.length)];
            let r3 = SPIN_ICONS[Math.floor(Math.random() * SPIN_ICONS.length)];
            player.setStatusMessage(Text.of(`§6[ §k${r1} §6| §k${r2} §6| §k${r3} §6]`));
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                "minecraft:block.note_block.hat", "players", 0.5, 1.8);
        });
    });

    // ── Result ─────────────────────────────────────────────
    server.scheduleInTicks(22, () => {
        let roll = Math.random();
        let s1, s2, s3;

        if (roll < JACKPOT_CHANCE) {
            let sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            s1 = s2 = s3 = sym;
        } else if (roll < JACKPOT_CHANCE + PARTIAL_CHANCE) {
            let sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            s1 = s2 = sym;
            do { s3 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]; } while (s3 === sym);
        } else {
            let pool = SYMBOLS.slice();
            s1 = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
            s2 = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
            s3 = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
        }

        let isJackpot = (s1 === s2 && s2 === s3);
        let isPartial = !isJackpot && (s1 === s2 || s2 === s3 || s1 === s3);

        let c1 = "§7", c2 = "§7", c3 = "§7";
        if (isJackpot)      { c1 = c2 = c3 = "§a§l"; }
        else if (s1 === s2) { c1 = c2 = "§a§l"; }
        else if (s2 === s3) { c2 = c3 = "§a§l"; }
        else if (s1 === s3) { c1 = c3 = "§a§l"; }

		 player.setStatusMessage(Text.of(""));

        player.tell(Text.of("§7╔════════════╗"));
        player.tell(Text.of(`        ${c1}${s1}  §b|  ${c2}${s2}  §b|  ${c3}${s3}      `));
        player.tell(Text.of("§7╚════════════╝"));

        if (isJackpot) {
            let prize = weightedPick(dimPool.jackpot);
            player.give(Item.of(prize.item, prize.count));
            recordWin(player, server, "jackpot");
            server.tell(Text.of(`§6§l🎰 JACKPOT! §f${player.username} §bwon §e${prize.label}!`).gold());
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                "minecraft:ui.toast.challenge_complete", "players", 1.0, 1.0);

        } else if (isPartial) {
            let prize = weightedPick(dimPool.partial);
            player.give(Item.of(prize.item, prize.count));
            recordWin(player, server, "partial");
            player.tell(Text.of(`§a§l✔ WIN! §fYou received §e${prize.label}§f!`));
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                "minecraft:entity.experience_orb.pickup", "players", 0.8, 1.2);

        } else {
            player.tell(Text.of("§7✘ No match. Try again...").gray());
            player.level.playSound(null, player.blockX, player.blockY, player.blockZ,
                "minecraft:block.note_block.bass", "players", 1.0, 0.5);
        }
    });
});

// ─── COMMANDS ────────────────────────────────────────────────
ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(Commands.literal("slots")

        // /slots top
        .then(Commands.literal("top")
            .executes(ctx => {
                const { server, player } = ctx.source;
                let lb    = server.persistentData.slotsLeaderboard || {};
                let board = [];
                for (let name in lb) {
                    board.push({ name: name, wins: lb[name].total || 0 });
                }
                board.sort((a, b) => b.wins - a.wins);

                player.tell(" ");
                player.tell("§6§l🎰 SLOTS LEADERBOARD 🎰");
                player.tell("§7▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                if (board.length === 0) {
                    player.tell("§7No wins recorded yet.");
                } else {
                    let limit = Math.min(board.length, 10);
                    for (let i = 0; i < limit; i++) {
                        let color    = i === 0 ? "§e" : i < 3 ? "§6" : "§f";
                        let jackpots = (lb[board[i].name].jackpots || 0);
                        player.tell(Text.of(
                            `${color}${i + 1}. ${board[i].name} §7— §a${board[i].wins} wins §8(${jackpots} jackpots)`
                        ));
                    }
                }
                player.tell("§7▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                return 1;
            })
        )

        // /slots stats
        .then(Commands.literal("stats")
            .executes(ctx => {
                const { player, server } = ctx.source;
                let entry    = (server.persistentData.slotsLeaderboard || {})[player.username] || {};
                let total    = entry.total    || 0;
                let jackpots = entry.jackpots || 0;
                let partials = entry.partials || 0;

                player.tell(" ");
                player.tell("§6§l🎰 Your Slot Stats");
                player.tell("§7▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                player.tell(`§7Total wins : §a${total}`);
                player.tell(`§7Jackpots   : §e${jackpots}`);
                player.tell(`§7Small wins : §b${partials}`);
                player.tell("§7▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                return 1;
            })
        )
    );
});

// ─── HELPERS ─────────────────────────────────────────────────

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function weightedPick(pool) {
    let total = pool.reduce((sum, p) => sum + p.weight, 0);
    let roll  = Math.random() * total;
    for (let entry of pool) {
        roll -= entry.weight;
        if (roll <= 0) return entry;
    }
    return pool[pool.length - 1];
}

function recordWin(player, server, type) {
    if (!server.persistentData.slotsLeaderboard)
        server.persistentData.slotsLeaderboard = {};
    let lb = server.persistentData.slotsLeaderboard;
    if (!lb[player.username]) lb[player.username] = { total: 0, jackpots: 0, partials: 0 };
    lb[player.username].total++;
    if (type === "jackpot") lb[player.username].jackpots++;
    if (type === "partial") lb[player.username].partials++;
}

function getDimName(dimId) {
    const names = {
        "minecraft:overworld":  "Overworld",
        "minecraft:the_nether": "Nether",
        "minecraft:the_end":    "The End",
    };
    return names[dimId] || dimId.split(":").pop().replace(/_/g, " ");
}