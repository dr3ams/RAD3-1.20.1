// ============================================================
//  LOOTBOX SYSTEM
//  server_scripts/lootbox.js
//
//  Items:
//    kubejs:lootbox_common    + kubejs:key_common
//    kubejs:lootbox_rare      + kubejs:key_rare
//    kubejs:lootbox_epic      + kubejs:key_epic
//    kubejs:lootbox_legendary + kubejs:key_legendary
//
//  Usage: hold matching key, right-click the lootbox item.
//  Both are consumed. Rolls loot from the tier's pool.
//
//  Each pool entry: { id, count, weight }
//  Weight is relative — higher = more likely.
//  Rolls: how many separate loot pulls per open.
// ============================================================

const LOOTBOX_CONFIG = {
    common: {
        lootbox:  'kubejs:lootbox_common',
        key:      'kubejs:key_common',
        rolls:    2,
        color:    '§f',
        label:    'COMMON',
        pool: [
            { id: 'minecraft:iron_ingot',        	  count: 8,  weight: 40 },
            { id: 'minecraft:gold_ingot',        	  count: 4,  weight: 30 },
            { id: 'minecraft:bread',             	  count: 16, weight: 30 },
            { id: 'minecraft:torch',             	  count: 32, weight: 25 },
            { id: 'minecraft:arrow',             	  count: 16, weight: 25 },
            { id: 'minecraft:coal',              	  count: 12, weight: 20 },
            { id: 'minecraft:leather',          	  count: 6,  weight: 20 },
            { id: 'minecraft:string',           	  count: 8,  weight: 15 },
			{ id: 'ars_nouveau:experience_gem', 	  count: 4,  weight: 40 },
			{ id: 'kubejs:scroll_exp',       	 	  count: 2,  weight: 40 },
			{ id: 'minecraft:experience_bottle', 	  count: 5,  weight: 40 },
			{ id: 'kubejs:map_fragment',       	   	  count: 1,  weight: 10 },
			{ id: 'kubejs:coin_dungeon',       		  count: 1,  weight: 20 },
			{ id: 'supplementaries:bomb',        	  count: 8,  weight: 50 },
			{ id: 'roughtweaks:bandage',       		  count: 1,  weight: 40 },
			{ id: 'simplehats:hatscraps_common',	  count: 1,  weight: 15 },
			{ id: 'titles:title_scroll_common',  	  count: 1,  weight: 10 },
			{ id: 'collectorsalbum:common_card_pack', count: 1,  weight: 15 },
			{ id: 'apotheosis:common_material',       count: 2,  weight: 25 },
			{ id: 'minecraft:amethyst_shard',         count: 8,  weight: 40 },
			{ id: 'minecraft:prismarine_shard',       count: 4,  weight: 25 },
			{ id: 'minecraft:phantom_membrane',       count: 2,  weight: 40 },
			{ id: 'hmag:randomberry',        		  count: 1,  weight: 35 }, 
			{ id: 'hmag:exp_berry',         		  count: 5,  weight: 50 },
			{ id: 'dungeonsdelight:cooked_snifferwurst',count: 1,  weight: 30 }, 
			{ id: 'dungeonsdelight:smoked_spider_meat', count: 1,  weight: 45 },
			{ id: 'dungeonsdelight:slime_bar',			count: 1,  weight: 25 },
			
        ]
    },
    rare: {
        lootbox:  'kubejs:lootbox_rare',
        key:      'kubejs:key_rare',
        rolls:    2,
        color:    '§9',
        label:    'RARE',
        pool: [
            { id: 'minecraft:emerald',           		count: 3,  weight: 30 },
            { id: 'minecraft:ender_pearl',       		count: 4,  weight: 20 },
            { id: 'minecraft:golden_apple',      		count: 1,  weight: 15 },
            { id: 'kubejs:coin_raid',            		count: 1,  weight: 20 },
			{ id: 'kubejs:map_fragment',         		count: 1,  weight: 10 },
			{ id: 'minecraft:experience_bottle', 		count: 8,  weight: 35 },
			{ id: 'kubejs:scroll_exp',       	 	  	count: 4,  weight: 40 },
			{ id: 'kubejs:coin_dungeon',         		count: 3,  weight: 15 },
			{ id: 'kubejs:unidentified_glyph_scroll', 	count: 1,  weight: 20 },
			{ id: 'kubejs:map_scroll_biome',          	count: 1,  weight: 10 },
			{ id: 'supplementaries:bomb',             	count: 14,  weight: 45 },
			{ id: 'simplehats:hatscraps_common',      	count: 1,  weight: 15 },
			{ id: 'titles:title_scroll_common',       	count: 1,  weight: 15 },
			{ id: 'collectorsalbum:uncommon_card_pack', count: 1,  weight: 5 },
			{ id: 'apotheosis:uncommon_material',       count: 2,  weight: 10 },
			{ id: 'minecraft:echo_shard',            	count: 3,  weight: 10 },
			{ id: 'ars_nouveau:greater_experience_gem', count: 2,  weight: 40 },
			{ id: 'kubejs:gem_shard_great',            	count: 1,  weight: 10 },
        ]
    },
    epic: {
        lootbox:  'kubejs:lootbox_epic',
        key:      'kubejs:key_epic',
        rolls:    2,
        color:    '§5',
        label:    'EPIC',
        pool: [
            { id: 'minecraft:diamond',      	     	count: 6,  weight: 30 },
            { id: 'kubejs:coin_raid',        			count: 3,  weight: 25 },
            { id: 'kubejs:frost_scroll',      	   		count: 1,  weight: 15 },
            { id: 'kubejs:dungeon_recall',      		count: 1,  weight: 15 },
			{ id: 'kubejs:map_fragment',      			count: 1,  weight: 15 },
			{ id: 'kubejs:scroll_exp_great',      	    count: 2,  weight: 15 },
			{ id: 'ars_nouveau:greater_experience_gem', count: 3,  weight: 20 },
			{ id: 'minecraft:experience_bottle',      	count: 16,  weight: 30 },
			{ id: 'kubejs:coin_dungeon',            	count: 3,  weight: 30 },
			{ id: 'kubejs:unidentified_glyph_scroll_2', count: 1,  weight: 15 },
			{ id: 'kubejs:map_scroll_biome',            count: 1,  weight: 20 },
			{ id: 'kubejs:spawnercore',            		count: 1,  weight: 25 },
			{ id: 'supplementaries:bomb',            	count: 20,  weight: 40 },
			{ id: 'minecraft:golden_apple',            	count: 3,  weight: 20 },
			{ id: 'roughtweaks:medkit',            		count: 1,  weight: 25 },
			{ id: 'simplehats:hatscraps_common',        count: 1,  weight: 20 },
			{ id: 'titles:title_scroll_uncommon',       count: 1,  weight: 15 },
			{ id: 'collectorsalbum:rare_card_pack',     count: 1,  weight: 10 },
			{ id: 'apotheosis:rare_material',           count: 1,  weight: 10 },
			{ id: 'apotheosis:gem_fused_slate',         count: 5,  weight: 20 },
			{ id: 'kubejs:gemcutters_pouch',       		count: 1,  weight: 5 },
        ]
    },
    legendary: {
        lootbox:  'kubejs:lootbox_legendary',
        key:      'kubejs:key_legendary',
        rolls:    2,
        color:    '§6',
        label:    'LEGENDARY',
        pool: [
            { id: 'kubejs:coin_raid',           		 count: 4, weight: 30 },
            { id: 'kubejs:boss_killer',          		 count: 1,  weight: 10 },
            { id: 'kubejs:miniboss_killer',      		 count: 1,  weight: 15 },
            { id: 'kubejs:dungeon_recall',       		 count: 1,  weight: 15 },
			{ id: 'kubejs:map_fragment',    			 count: 3,  weight: 15 },
			{ id: 'kubejs:scroll_exp_great',      		 count: 3,  weight: 40 },
			{ id: 'ars_nouveau:greater_experience_gem',  count: 8,  weight: 45 },
			{ id: 'minecraft:experience_bottle',  		 count: 3,  weight: 55 },
			{ id: 'kubejs:coin_dungeon',  				 count: 5,  weight: 30 },
			{ id: 'kubejs:voucher_relic',  				 count: 1,  weight: 5 },
			{ id: 'kubejs:unidentified_glyph_scroll_3',  count: 1,  weight: 20 },
			{ id: 'kubejs:map_scroll_structure',  		 count: 1,  weight: 20 },
			{ id: 'kubejs:spawnercore',  				 count: 2,  weight: 25 },
			{ id: 'minecraft:totem_of_undying',  		 count: 1,  weight: 15 },
			{ id: 'minecraft:enchanted_golden_apple',	 count: 1,  weight: 20 },
			{ id: 'roughtweaks:medkit_enchanted',  		 count: 1,  weight: 20 },
			{ id: 'simplehats:hatscraps_rare',  		 count: 1,  weight: 15 },
			{ id: 'titles:title_scroll_rare',  			 count: 1,  weight: 10 },
			{ id: 'collectorsalbum:epic_card_pack',  	 count: 1,  weight: 5 },
			{ id: 'fantasy_armor:moon_crystal',  		 count: 1,  weight: 10 },
			{ id: 'apotheosis:epic_material',  			 count: 1,  weight: 5 },
			{ id: 'apotheosis:warden_tendril',  		 count: 1,  weight: 10 },
			{ id: 'l2complements:warden_bone_shard',  	 count: 1,  weight: 15 },
			{ id: 'apotheosis:boss_summoner',  			 count: 1,  weight: 15 },
			{ id: 'kubejs:gemcutters_pouch_greater',	 count: 1,  weight: 5 },
        ]
    }
};

// ── WEIGHTED RANDOM PICK ─────────────────────────────────────
function weightedPick(pool) {
    let total = pool.reduce((sum, e) => sum + e.weight, 0);
    let roll  = Math.random() * total;
    for (let entry of pool) {
        roll -= entry.weight;
        if (roll <= 0) return entry;
    }
    return pool[pool.length - 1];
}

// ── RIGHT-CLICK HANDLER ──────────────────────────────────────
ItemEvents.rightClicked(event => {
    const { player, item, level } = event;

    for (let tier of Object.values(LOOTBOX_CONFIG)) {
        if (String(item.id) !== tier.lootbox) continue;

        // Check player is holding matching key in off-hand
        let offhand = player.offHandItem;
        if (String(offhand.id) !== tier.key) {
            player.tell(Text.of(`§cYou need a ${tier.color}${tier.label} Key §cin your off-hand to open this.`));
            return;
        }

        // Consume lootbox and key
        item.count--;
        offhand.count--;

        // Roll loot
        let results = [];
        for (let i = 0; i < tier.rolls; i++) {
            let pick = weightedPick(tier.pool);
            player.give(Item.of(pick.id, pick.count));
            let displayName = pick.id.split(':')[1].replace(/_/g, ' ');
            results.push(`§f${pick.count}x §7${displayName}`);
        }

        // Announce
        player.tell(Text.of(`${tier.color}✦ §l${tier.label} LOOTBOX§r ${tier.color}opened!`).bold());
        results.forEach(r => player.tell(Text.of(`  §8» ${r}`)));
        level.playSound(null, player.blockX, player.blockY, player.blockZ,
            'minecraft:entity.player.levelup', 'players', 1.0, 1.0);
        level.playSound(null, player.blockX, player.blockY, player.blockZ,
            'minecraft:block.chest.open', 'players', 1.0, 1.2);

        event.cancel();
        return;
    }
});