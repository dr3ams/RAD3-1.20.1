const TOME_LOOT_POOLS = {
    eldritch: ["minecraft:sculk", "minecraft:amethyst_shard", "minecraft:echo_shard", "minecraft:ghast_tear"],
    warbound: ["minecraft:arrow", "minecraft:iron_ingot", "minecraft:crossbow", "minecraft:flint_and_steel"],
    overgrown: ["minecraft:vine", "minecraft:sweet_berries", "minecraft:moss_block", "minecraft:spore_blossom"],
    scorched: ["minecraft:fire_charge", "minecraft:magma_cream", "minecraft:blaze_rod", "minecraft:gold_ingot"],
    sunken: ["minecraft:cod", "minecraft:prismarine_shard", "minecraft:nautilus_shell", "minecraft:heart_of_the_sea"],
    volcanic: ["minecraft:crying_obsidian", "minecraft:blaze_powder", "minecraft:netherite_scrap", "minecraft:ghast_tear"],
    abyssal: ["minecraft:ink_sac", "minecraft:prismarine_crystals", "minecraft:glow_ink_sac", "minecraft:heart_of_the_sea"],
    mechanical: ["minecraft:copper_ingot", "minecraft:repeater", "minecraft:piston", "minecraft:clock"],
    celestial: ["minecraft:ender_pearl", "minecraft:shulker_shell", "minecraft:phantom_membrane", "minecraft:elytra"],
    fungal: ["minecraft:red_mushroom", "minecraft:brown_mushroom", "minecraft:mycelium", "minecraft:mooshroom_spawn_egg"],
    forgotten: ["minecraft:feather", "minecraft:paper", "minecraft:book", "minecraft:experience_bottle"]
};

ItemEvents.rightClicked('kubejs:sealed_tome', event => {
const { player, item, server } = event;
    let theme = item.nbt.theme || "forgotten";
    let pName = player.username;
    
    // LONGER LEVELING: Now Tier 1 is Level 25, Tier 2 is 50, Tier 3 is 75.
    let mastery = player.persistentData.getInt('ritual_mastery') || 0;
    let bonusTier = Math.floor(mastery / 25); 
    
    let roll = Math.random(); 
    item.count--;
    player.playSound('minecraft:item.book.page_turn', 1.0, 1.0);

    let quantity = 2; 
    let pool = TOME_LOOT_POOLS[theme] || TOME_LOOT_POOLS.forgotten;
    let itemToGive = pool[0]; // Default to first item
	
	if (theme === "forgotten") {
        player.tell(Text.of("The pages are blank... perhaps the ritual was flawed.").gray());
        return; // No rewards for forgotten tomes
    }

    // GATED LOGIC
    if (roll > 0.90 && bonusTier >= 3) { // LEGENDARY (Level 75+)
        quantity = 4;
        itemToGive = pool[3]; 
        server.runCommandSilent(`particle minecraft:totem_of_undying ${player.x} ${player.y+1} ${player.z} 0.5 0.5 0.5 0.1 100`);
    } else if (roll > 0.70 && bonusTier >= 1) { // RARE (Level 25+)
        quantity = 2;
        itemToGive = pool[2];
        server.runCommandSilent(`particle minecraft:happy_villager ${player.x} ${player.y+1} ${player.z} 0.5 0.5 0.5 0.1 30`);
    } else { // COMMON
        itemToGive = pool[Math.floor(Math.random() * 2)]; 
    }

    // ENSURE REWARD IS GIVEN
    player.give(`${quantity}x ${itemToGive}`);

    // MASTERY BONUS (Extra Gold)
    if (bonusTier > 0) {
        let extraGold = Math.floor(Math.random() * 2) + bonusTier;
        player.give(`${extraGold}x minecraft:gold_nugget`);
        player.statusMessage = Text.yellow(`Mastery Tier ${bonusTier} Bonus Applied`);
    }

    // 6. Theme Messages (Truncated for brevity, keep your full list)
    const MESSAGES = {
        eldritch: "The text crawls across the page like ink-black insects.",
        warbound: "The parchment is stained with the soot and blood of battle.",
        overgrown: "Dried leaves and wild vines spill from the broken seal.",
        scorched: "Heat radiates from the charred, soot-covered binding.",
        sunken: "The pages are damp, smelling of salt and ancient depths.",
        volcanic: "The binding is hot to the touch, smelling of sulfur.",
        abyssal: "A cold, crushing pressure emanates from the dark ink.",
        mechanical: "Small brass gears and springs fall from the pages.",
        celestial: "The paper feels lighter than air, shimmering with starlight.",
        fungal: "Spores puff out as the seal breaks, smelling of damp earth."
    };

	let messageText = MESSAGES[theme] || "The tome is faded, its secrets mostly lost to time.";
    player.tell(Text.of(messageText).italic());
});