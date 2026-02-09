ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:roguelite_ring', (item, assistant, text) => {
        let n = item.nbt;
        
        // Read the rank data the server already calculated
        let rankName = n && n.rank_name ? n.rank_name : "Wanderer";
        let rankColor = n && n.rank_color ? n.rank_color : "§7";
        let pts = n && n.points ? n.points : 0;
        let rebirths = n && n.rebirths ? n.rebirths : 0;
        let lastPos = n && n.last_death_pos ? n.last_death_pos : "Unknown";
        
        let milestones = [];
        if (n && n.unlocked_names) {
            n.unlocked_names.forEach(m => milestones.push(m));
        }
        
        let percent = Math.floor((milestones.length / 16) * 100);

        // Build Tooltip (Safe Append Only)
        text.add(Text.of("A heavy burden for a second chance...").gray().italic());

        if (!event.shift) {
            text.add(Text.of("Hold [Shift] for mechanics.").yellow());
        } else {
            text.add(Text.of("Clears your inventory and spawn you in random location on death").white());
            text.add(Text.of("Gives different loot based on unlocked milestones").white());

            // Use the data from NBT
            text.add(Text.of(` 1. §6Rank:§r ${rankColor}${rankName}§r (§f${pts} Pts§r)`));
            text.add(Text.of(` 2. §bProgress:§r §a${percent}%§7 of Milestones Completed`));
            text.add(Text.of(` 3. §eRebirths:§r §f${rebirths}§r`));
            text.add(Text.of(` 4. §bLast Death:§r §7${lastPos}§r`));

            if (milestones.length > 0) {
                text.add(Text.of(` 5. §bUnlocked Milestones:§r`));
                let itemsPerLine = 2; 
                for (let i = 0; i < milestones.length; i += itemsPerLine) {
                    let chunk = milestones.slice(i, i + itemsPerLine).join(', ');
                    if (i + itemsPerLine < milestones.length) chunk += ',';
                    text.add(Text.of(`    §7${chunk}§r`));
                }
            } else {
                text.add(Text.of(` 5. §bMilestones:§r §7None§r`));
            }
        }
    });
});