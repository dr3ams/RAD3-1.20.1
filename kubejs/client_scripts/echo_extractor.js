global.extractorData = { mastery: 0, cooldown: 0, discoveries: "", castTicks: 120, cooldownTicks: 400 };

NetworkEvents.dataReceived('sync_extractor_stats', event => {
    // This logs to the console so you can see if the data actually arrives
    // console.log("Received Echo Data: " + event.data.mastery);
    
    global.extractorData = {
        mastery: event.data.mastery,
        cooldown: event.data.cooldown,
        discoveries: event.data.discoveries,
        castTicks: event.data.castTicks,
        cooldownTicks: event.data.cooldownTicks
    };
});

ItemEvents.tooltip(event => {
	
	
    event.addAdvanced(['kubejs:echo_extractor'], (item, advanced, text) => {
        // Line 1: Lore
        text.add(1, Text.of("Device used to extract echoes from spawners").gray().italic());

            // --- SECTION 1: EXTRACTION EXPERTISE (NOW FIRST) ---
            text.add(2, Text.of("Extraction Expertise:").white());

            let mastery = global.extractorData.mastery;
            let castSec = (global.extractorData.castTicks / 20).toFixed(1);
            let cooldownSec = (global.extractorData.cooldownTicks / 20).toFixed(1);
            let currentRisk = Math.max(5.0, 30.0 - (mastery * 0.1));
            let bonusTier = Math.floor(mastery / 10);
            
            // Risk Color Calculation
            let riskColor = currentRisk > 20 ? "§c" : (currentRisk > 10 ? "§e" : "§a");

            text.add(3, [Text.of('§7Expertise: '), Text.of(`${mastery.toFixed(1)} `), Text.of('§8| '), Text.of(`§bTier ${bonusTier}`)]);
            text.add(4, [Text.of('§7Backfire Risk: '), Text.of(`${riskColor}${currentRisk.toFixed(1)}%`)]);

            // --- PROGRESS BAR (Towards next Tier) ---
            let nextTierGoal = (bonusTier + 1) * 10;
            let prevTierGoal = bonusTier * 10;
            let pct = (mastery - prevTierGoal) / (nextTierGoal - prevTierGoal);
            let barColor = pct < 0.3 ? "§c" : (pct < 0.7 ? "§e" : "§a");
            
            let bar = "";
            for (let i = 0; i < 10; i++) {
                bar += (i < pct * 10) ? `${barColor}|` : "§8.";
            }
            text.add(5, [Text.of('§7Tier Progress: '), Text.of(`§8[${bar}§8] §f${mastery.toFixed(1)}/${nextTierGoal}`)]);

        if (!event.isShift()) {
            text.add(6, Text.of("Hold [Shift] for more info").yellow());
        } else {
            // --- SECTION 2: MECHANICS (NOW SECOND) ---
            text.add(6, Text.of(' ')); // Spacer
            text.add(7, [Text.of("§6• "), Text.of("Drains essence from targeted resonant blocks")]);
            text.add(8, [Text.of("§b• "), Text.of("Grants a §dSealed Tome§r with themed loot")]);
            text.add(9, [Text.of("§2• "), Text.of(`Heavy slowness, §e${castSec}s§r cast, §e${cooldownSec}s§r cooldown`)]);
            text.add(10, [Text.of("§4• "), Text.of("Low Expertise increases §cTemporal Backfire§r")]);
            text.add(11, [Text.of("§4• "), Text.of("Has a 5% permanent chance to fail")]);
		
		}
    });
	
	
	
    event.addAdvanced('kubejs:sealed_tome', (item, assistant, text) => {
        // Line 1: Lore
        text.add(1, Text.of("A book filled with whispers of a forgotten era").gray().italic());

        if (!event.shift) {
            text.add(2, Text.of("Hold [Shift] to sense the contents.").yellow());
        } else {
            text.add(2, Text.of("Mechanics:").white());

            // Determine Theme from NBT
            let themeId = (item.nbt && item.nbt.theme) ? item.nbt.theme : "unknown";
            // Capitalize for display
            let displayTheme = themeId.charAt(0).toUpperCase() + themeId.slice(1);

            text.add(3, Text.of(` 1. §bResonance:§r This tome contains §e${displayTheme}§r echoes.`));
            text.add(4, Text.of(" 2. §6Usage:§r Right-click to break the seal and claim the contents."));
            text.add(5, Text.of(" 3. §dReward:§r May contain rare artifacts or materials from this theme."));
        }
    });	
});

