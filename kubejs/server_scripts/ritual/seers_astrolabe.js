// Add any new structure IDs here!
const STRUCTURE_THEMES = {
    "minecraft:ancient_city": { theme: "eldritch", color: "dark_purple" },
    "minecraft:stronghold": { theme: "eldritch", color: "dark_purple" },
    "minecraft:jungle_pyramid": { theme: "overgrown", color: "green" },
    "minecraft:swamp_hut": { theme: "overgrown", color: "green" },
    "minecraft:desert_pyramid": { theme: "scorched", color: "orange" },
    "minecraft:bastion_remnant": { theme: "scorched", color: "orange" },
    "minecraft:ocean_monument": { theme: "sunken", color: "aqua" },
    "minecraft:shipwreck": { theme: "sunken", color: "aqua" },
	"betterdungeons:zombie_dungeon": { theme: "warbound", color: "red" },
    "minecraft:pillager_outpost": { theme: "warbound", color: "red" } // New theme example
};

ItemEvents.rightClicked('kubejs:seers_astrolabe', event => {
    const { player, server, level } = event;
    let pName = player.username;

    if (player.persistentData.contains('astrolabe_busy')) {
        player.statusMessage = Text.of("The Astrolabe is still harmonizing...").red();
        return;
    }

    // --- FRIEND'S LOGIC: StructureManager + Location Check ---
    let pos = player.blockPos;
    let sm = level.structureManager();
    
    // Check if any valid structure start exists at this exact location
    // This effectively performs the LocationPredicate check
    let structureAtPos = sm.getStructureAt(pos);
    let isAtRuin = structureAtPos.isValid(); // Returns true if inside a valid structure start

    if (!isAtRuin) {
        player.statusMessage = Text.of("The crystals remain dim. There is no history here.").gray();
        return; 
    }

    // --- RITUAL START ---
    let clearResult = server.runCommandSilent(`clear ${pName} kubejs:blessed_incense 1`);
    if (clearResult <= 0) {
        player.statusMessage = Text.of("The spirits demand an offering of incense.").italic();
        return;
    }

    player.persistentData.putBoolean('astrolabe_busy', true);
    player.tell(Text.of("The Astrolabe hums. Stay still...").darkPurple());
    server.runCommandSilent(`effect give ${pName} minecraft:slowness 6 10 true`);

    server.scheduleInTicks(120, (callback) => {
        let srv = Utils.server;
        let p = srv.getPlayer(pName);
        if (!p) return;

        p.persistentData.remove('astrolabe_busy');
        let mastery = p.persistentData.getInt('ritual_mastery') || 0;

        if (Math.random() < Math.max(0.05, 0.15 - (mastery * 0.005))) {
            p.tell(Text.of("The spirits are restless!").red());
            srv.runCommandSilent(`execute at ${pName} run summon vex ~ ~2 ~`);
        } else {
            // Randomly choose from your 10 themes
            let roll = THEMES[Math.floor(Math.random() * THEMES.length)];

            let giveCmd = `give ${pName} kubejs:sealed_tome{theme:"${roll.id}",display:{Name:'{"text":"Sealed ${roll.name} Tome","color":"${roll.color}","italic":false}'}} 1`;
            srv.runCommandSilent(giveCmd);
            
            p.persistentData.putInt('ritual_mastery', mastery + 1);
            srv.runCommandSilent(`playsound minecraft:block.enchantment_table.use player ${pName} ~ ~ ~ 1 1`);
            srv.runCommandSilent(`particle minecraft:dragon_breath ${p.x} ${p.y + 1} ${p.z} 0.5 0.5 0.5 0.1 50`);
        }
    });
});