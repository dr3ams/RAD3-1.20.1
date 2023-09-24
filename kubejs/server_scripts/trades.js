MoreJSEvents.wandererTrades((event) => {
    // change to "MoreJSEvents.wandererTrades" in 1.19
    
        const trade1 = event.addTrade(1, 'minecraft:lapis_ore', 'kubejs:coin_01');
        trade1.maxUses(1);
        
        const trade2 = event.addTrade(1, 'minecraft:redstone_ore', 'kubejs:coin_01');
        const trade3 = event.addTrade(1, 'minecraft:gold_ore', 'kubejs:coin_01');
        const trade4 = event.addTrade(1, 'undergarden:depthrock_gold_ore', 'kubejs:coin_01');
        const trade5 = event.addTrade(1, 'randomite:randomite_ore', 'kubejs:coin_01');
        const trade6 = event.addTrade(1, 'minecraft:deepslate_emerald_ore', 'kubejs:coin_01');
        const trade7 = event.addTrade(1, 'minecraft:diamond_ore', 'kubejs:coin_01');
        const trade8 = event.addTrade(1, 'undergarden:depthrock_diamond_ore', 'kubejs:coin_01');
    
        // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
        // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
});