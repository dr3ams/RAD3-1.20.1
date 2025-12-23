ItemEvents.rightClicked('kubejs:seers_journal', event => {
    const { player, level } = event;
    
    // 1. Data Retrieval
    let mastery = player.persistentData.getInt('ritual_mastery') || 0;
    let lastOpened = player.persistentData.getLong('last_tome_time') || 0;
    let currentTime = level.time;
    
    // 2. Calculations
    let currentRisk = Math.max(5.0, 15.0 - (mastery * 0.5));
    let bonusTier = Math.floor(mastery / 10);
    
    // Cooldown Math: 2400 ticks = 2 minutes
    let cooldownTicks = 2400;
    let remainingTicks = Math.max(0, cooldownTicks - (currentTime - lastOpened));
    let remainingSeconds = Math.ceil(remainingTicks / 20);
    
    // 3. Display Logic
    player.tell(Text.of("--- The Seer's Progress ---").gold().bold());
    
    // Ritual Stats
    player.tell(Text.of("Ritual Attunement: ").gray().append(Text.of(mastery.toString()).yellow()));
    
    // Risk Level with dynamic color
    let riskText = Text.of(`${currentRisk.toFixed(1)}%`);
    if (currentRisk > 10) riskText.red();
    else if (currentRisk > 5) riskText.yellow();
    else riskText.green();
    player.tell(Text.of("Current Backfire Risk: ").gray().append(riskText));
    
    // Mastery Tier
    player.tell(Text.of("Mastery Bonus Tier: ").gray().append(Text.of(`Tier ${bonusTier}`).aqua()));

    // 4. NEW: Cooldown Tracker Display
    if (remainingSeconds > 0) {
        player.tell(Text.of("Spiritual Fatigue: ").gray().append(Text.of(`${remainingSeconds}s remaining`).red()));
    } else {
        player.tell(Text.of("The spirits are ready for another revelation.").green().italic());
    }
    
    // 5. Footer and Sound
    player.tell(Text.of("-----------------------").gold().bold());
    player.playSound('minecraft:item.book.page_turn');
});