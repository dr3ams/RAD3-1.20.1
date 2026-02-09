// Mapping for nicknames to real IDs (used for Withdrawal and Suggestions)
const COIN_MAP = {
    'copper': 'kubejs:copper_coin',
    'iron': 'kubejs:iron_coin',
    'gold': 'kubejs:gold_coin',
    'diamond': 'kubejs:diamond_coin',
    'aether': 'kubejs:coin_aether',
    'undergarden': 'kubejs:coin_undergarden',
    'twilight': 'kubejs:coin_twilight',
    'bumblezone': 'kubejs:coin_bumblezone',
    'icaria': 'kubejs:coin_icaria',
    'end': 'kubejs:coin_end',
    'nether': 'kubejs:coin_nether',
    'task': 'kubejs:coin_task',
    'dungeon': 'kubejs:coin_dungeon'
};

const COIN_COLORS = {
    'kubejs:copper_coin': '§6',      // Gold/Orange
    'kubejs:iron_coin': '§f',        // White
    'kubejs:gold_coin': '§e',        // Yellow
    'kubejs:diamond_coin': '§b',     // Aqua
    'kubejs:coin_aether': '§3',      // Dark Aqua
    'kubejs:coin_undergarden': '§2', // Dark Green
    'kubejs:coin_twilight': '§d',    // Light Purple
    'kubejs:coin_bumblezone': '§6',  // Gold
    'kubejs:coin_icaria': '§e',      // Yellow
    'kubejs:coin_end': '§5',         // Dark Purple
    'kubejs:coin_nether': '§c',      // Red
    'kubejs:coin_task': '§a',        // Green
    'kubejs:coin_dungeon': '§8'      // Dark Gray
};

// Define the "Value" of each coin here for the Net Worth calculation
const COIN_VALUES = {
    'kubejs:copper_coin': 1,
    'kubejs:coin_dungeon': 2,
    'kubejs:iron_coin': 3,
    'kubejs:gold_coin': 4,
    'kubejs:diamond_coin': 5,
    'kubejs:coin_task': 3,
    'kubejs:coin_nether': 3,
    'kubejs:coin_aether': 3,
    'kubejs:coin_undergarden': 3,
    'kubejs:coin_bumblezone': 3,
    'kubejs:coin_icaria': 3,
    'kubejs:coin_end': 5
};

const COIN_NAMES = Object.keys(COIN_MAP);
const COIN_IDS = Object.values(COIN_MAP);


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments, level } = event;

    event.register(Commands.literal('vault')
        // --- BALANCE COMMAND ---
        .then(Commands.literal('balance').executes(ctx => {
            let player = ctx.source.player;
            let vault = player.persistentData.getCompound('cloudVault');
            let hasBalance = false;
            let totalNetWorth = 0;

            player.tell("§b§l╔════════════╗");
            player.tell("      §6§lVAULT ACCOUNT          ");
            player.tell("§b§l╠════════════╣");
            player.tell("  §6Status: §2Active"); 
            player.tell("  §7Type: §fStandard Vault");
            player.tell(" "); 

            COIN_IDS.forEach(coinId => {
                let amount = vault.getInt(coinId);
                if (amount > 0) {
                    hasBalance = true;
                    let value = COIN_VALUES[coinId] || 0;
                    totalNetWorth += (amount * value);
					
					// Get the assigned color (default to gray if missing)
                    let coinColor = COIN_COLORS[coinId] || '§7';
                    
                    let displayName = coinId.split(':')[1]
                        .replace('coin_', '')
                        .replace('_coin', '')
                        .replace('_', ' ')
                        .toUpperCase();
                        
                    let nick = displayName.toLowerCase().replace(' ', '');  
                    let message = Text.of(coinColor + displayName + " COIN" + ":§2 " + amount + " ");
                    let withdrawBtn = Text.of(" §b• ").hover(Text.of("§8§oUse: /vault withdraw " + nick + " <amount>"));
                    
                    player.tell(withdrawBtn.append(message));
                }
            });
            
            if (!hasBalance) {
                player.tell("  §8§oYour vault is currently empty...§r");
            } else {
                player.tell(" ");
                player.tell("  §6Total Net Worth: §f" + totalNetWorth + " §7(Gold Value)");
            }

            player.tell("§b§l╚════════════╝§r");
            player.tell(" "); 
            player.tell("§8» To §6withdraw §8use §7§o/vault withdraw <coin_name> <amount>"); 
			player.tell("§8» To §9withdraw all §8use §7§o/vault withdraw all (500 coins limit)");
            player.tell("§8» To §2deposit §8use §7§o/vault deposit §8while holding");
			player.tell("§8» To §adeposit all §8use §7§o/vault deposit all");			
            
            return 1;
        }))

// --- DEPOSIT COMMAND (Main Hand) ---
        .then(Commands.literal('deposit')
            .executes(ctx => {
                let player = ctx.source.player;
                let item = player.mainHandItem;
                let itemId = String(item.id);

                if (COIN_IDS.indexOf(itemId) !== -1) {
                    let vault = player.persistentData.getCompound('cloudVault');
                    let current = vault.getInt(itemId);
                    vault.putInt(itemId, current + item.count);
                    player.persistentData.put('cloudVault', vault);
                    
                    // 1. Get the color and clean name
                    let coinColor = COIN_COLORS[itemId] || '§b'; // Defaults to light blue
                    let cleanName = itemId.split(':')[1]
                        .replace('coin_', '')
                        .replace('_coin', '')
                        .replace('_', ' ')
                        .toUpperCase();
                    
                    // 2. Colored Success Message
                    // Format: Deposited 64x [COLOR]GOLD COIN
                    player.tell(Text.of("§7Deposited " + item.count + "x ").append(Text.of(coinColor + cleanName + " COIN")));				
                    player.runCommandSilent('playsound minecraft:entity.villager.yes player @s ~ ~ ~ 3 1');					
                    item.setCount(0);
                    return 1;
                }
                player.tell(Text.red('You are not holding a valid coin!'));
                return 0;
            })
			
			
// --- DEPOSIT ALL (DIRECT CONTAINER ACCESS) ---
            .then(Commands.literal('all').executes(ctx => {
                let player = ctx.source.player;
                let vault = player.persistentData.getCompound('cloudVault');
                let count = 0;
                
                // Direct access to the player's inventory container
                let inventory = player.inventory;
                let size = inventory.containerSize; // Use containerSize for 1.20.1

                for (let i = 0; i < size; i++) {
                    let item = inventory.getItem(i); // Use getItem(i) instead of get(i)
                    
                    if (item && !item.empty) {
                        let id = String(item.id);
                        
                        // Check if the ID is in our list
                        if (COIN_IDS.indexOf(id) !== -1) {
                            let currentInVault = vault.getInt(id);
                            vault.putInt(id, currentInVault + item.count);
                            count += item.count;
                                                       
                            item.setCount(0);
                        }
                    }
                }

                if (count > 0) {
                    player.persistentData.put('cloudVault', vault);
                    player.tell("§b§lVAULT: §7Successfully deposited §f" + count + " §7coins.");
					player.runCommandSilent('playsound minecraft:entity.villager.yes player @s ~ ~ ~ 3 1');
                    return 1;
                }
                
                player.tell("§cNo coins found in inventory.");
                return 0;
            }))
			
			
        )

        // --- WITHDRAW COMMAND ---
        .then(Commands.literal('withdraw')
            .then(Commands.argument('coin', Arguments.STRING.create(event))
                .suggests((ctx, builder) => builder.suggestObjects(COIN_NAMES))
                .then(Commands.argument('amount', Arguments.INTEGER.create(event))
                    .executes(ctx => {
                        const player = ctx.source.player;
                        const coinInput = Arguments.STRING.getResult(ctx, 'coin').toLowerCase();
                        const amount = Arguments.INTEGER.getResult(ctx, 'amount');
                        const realId = COIN_MAP[coinInput];

                        if (!realId) {
                            player.tell("§cInvalid coin! Choose from: " + COIN_NAMES.join(', '));
                            return 0;
                        }

                        let vault = player.persistentData.getCompound('cloudVault');
                        let current = vault.getInt(realId);

                        if (current >= amount) {
                            vault.putInt(realId, current - amount);
                            player.persistentData.put('cloudVault', vault);
                            player.give(Item.of(realId, amount));
                            player.tell("§bWithdrew §f" + amount + "x §b" + coinInput.toUpperCase() + "COIN §b");
                            return 1;
                        } else {
                            player.tell("§cInsufficient funds! You only have §f" + current + "§c.");
                            return 0;
                        }
                    })
                )
            )
        
		// --- WITHDRAW ALL (WITH 500 LIMIT) ---
            .then(Commands.literal('all').executes(ctx => {
                let player = ctx.source.player;
                let vault = player.persistentData.getCompound('cloudVault');
                let totalCountInVault = 0;
                let coinsToWithdraw = [];

                // 1. First, calculate the total to check the limit
                COIN_IDS.forEach(coinId => {
                    let amount = vault.getInt(coinId);
                    if (amount > 0) {
                        totalCountInVault += amount;
                        coinsToWithdraw.push({ id: coinId, qty: amount });
                    }
                });

                // 2. Safety Check
                if (totalCountInVault > 500) {
                    player.tell("§c§lERROR: §7The vault is too full to withdraw all at once!");
                    player.tell("§8» §7Total: §f" + totalCountInVault + " §8/ 500 max.");
                    player.tell("§8» §6Please withdraw specific coins individually.");
                    player.runCommandSilent('playsound minecraft:entity.villager.no player @s ~ ~ ~ 3 1.5');
                    return 0;
                }

                // 3. Process Withdrawal
                if (totalCountInVault > 0) {
                    let details = [];
                    
                    coinsToWithdraw.forEach(coin => {
                        player.give(Item.of(coin.id, coin.qty));
                        vault.putInt(coin.id, 0); // Clear vault
                        
                        let coinName = coin.id.split(':')[1].replace('coin_', '').replace('_coin', '').replace('_', ' ').toUpperCase();
                        details.push("§f" + coin.qty + "x " + coinName);
                    });

                    player.persistentData.put('cloudVault', vault);
                    player.persistentData.dirty = true;

                    player.tell("§b§lVAULT: §7Withdrawal complete.");
                    player.tell("§8» §7Items: " + details.join('§7, '));
                    player.tell("§8» §6§lTOTAL COINS: §f" + totalCountInVault);
                    
                    player.runCommandSilent('playsound minecraft:block.amethyst_block.break players @s ~ ~ ~ 1 1.2');
                    return 1;
                }
                
                player.tell("§cYour vault is already empty!");
                return 0;
            }))	
		
		)
	
    );
});