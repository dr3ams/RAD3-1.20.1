ItemEvents.tooltip(event =>{
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (item.maxDamage > 0){
            let durability = String(item.maxDamage - item.damageValue).split(".", 1)
            let maxDurability = String(item.maxDamage).split(".", 1)
            if (item.damageValue/item.maxDamage >= 0.9){
                text.add(Text.red("Durability: " + durability + " / " + maxDurability))
            } else if(item.damageValue/item.maxDamage >= 0.5){
                text.add(Text.yellow("Durability: " + durability + " / " + maxDurability))
            } else {
                text.add(Text.green("Durability: " + durability + " / " + maxDurability))
            }
        }
    })

	event.addAdvanced('paraglider:spirit_orb', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
		text.add(1, [
	    Text.of('• Can be exchanged for ').white(),
        Text.of('Stamina Vessels ').green(),
        Text.of('in the villages').white()
      ])
      text.add(2, [
        Text.of('• Can drop from breaking spawners').white()
		])
      text.add(3, [
        Text.of('• Random loot from lootcrates in ').white(),
        Text.of('⭐ The Market ').yellow(),
        Text.of('questbook chapter').white()
		])
    }
	})

	event.addAdvanced('paraglider:stamina_vessel', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').green(),
        Text.of('to see more info.').gray()
      ])
    } else {	
      text.add(1, [
        Text.of('• Obtained from ').white(), 
		Text.of('Goddess Statue ').gold(),
		Text.of('in exchange for ').white(),
		Text.of('Spirit Orbs').yellow()
		])
      text.add(2, [
	    Text.of('• Can also drop from ').white(),
        Text.of('Raids, ').darkRed(),
        Text.of('killing ').white(),
		Text.of('Wither, ').gray(),
		Text.of('Ender Dragon, ').darkPurple(),
		Text.of('or bought from ').white(),
		Text.of('Goblin Trader').green()
      ])
    }
	})

	event.addAdvanced(['kubejs:essence_earth'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Alchemy ').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Can drop while mining ores or digging gravel').white()
		])
      text.add(2, [
        Text.of('• Additional resources can be extracted from it using one of the ').white(),
        Text.of('⭐ Masteries').darkRed()
		])
      text.add(3, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('landsoficaria:totem_of_stuffing', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Prevents the player from taking damage when ').white(),
		Text.of('starving').yellow()
		])
      text.add(2, [
        Text.of('• Removes any ').white(),
		Text.of('Hunger ').gray(),
		Text.of('effects, adds a ').white(),
		Text.of('Saturation ').darkRed(),
		Text.of('effect for 10 seconds and refills food and saturation ').white(),
		Text.of('fully').green()
		])
    }
  })
  
  	event.addAdvanced('landsoficaria:totem_of_unblinding', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Prevents getting blinded by ').white(),
		Text.of('Blindness ').gray(),
		Text.of('or ').white(),
		Text.of('Darkness ').gray(),
		Text.of('effects (especially helpful to combat some mobs in Icaria)').white()
		])
      text.add(2, [
        Text.of('• Adds a ').white(),
		Text.of('Blindness Immunity ').green(),
		Text.of('effect for 30 seconds').white()
		])
    }
  })

  	event.addAdvanced('landsoficaria:totem_of_undrowning', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Prevents from taking damage when ').white(),
		Text.of('drowning ').blue()
		])
      text.add(2, [
        Text.of('• Adds a ').white(),
		Text.of('Water Breathing ').blue(),
		Text.of('effect for 30 seconds and refills air fully').white()
		])
    }
  })
    	
	event.addAdvanced('landsoficaria:totem_of_unshattering', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Prevents armor, tools and weapons from breaking when they reach 90+ % damage and restores 90 % of their durability').white()
		])
    }
  })
  
  	event.addAdvanced('landsoficaria:totem_of_unsinking', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Prevents the player from taking damage when falling into the void, by teleporting to max Y at the same X and Z coordinates').white()
		])
      text.add(2, [
        Text.of('• Adds a ').white(),
		Text.of('Slow Falling ').blue(),
		Text.of('effect for 30 seconds').white()
		])
    }
  })  
  
	event.addAdvanced(['aether:healing_stone'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Applies Regeneration I effect for 30 seconds').white()
		])
    }
  })
	
	event.addAdvanced('the_bumblezone:bee_cannon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('Lets you store bees you right click into the item up to 3 bees! If you hold right button and then release, you fire the bees! Any non-bee mob you are looking at will be attacked by the bees!').white()
		])
		text.add(2, [
        Text.of('• Can be repaired by Honey Crystal Shards, Sugar Infused Stone, or Sugar Infused Cobblestone.').white()
		])
    }
  })
	
	event.addAdvanced('the_bumblezone:bee_cannon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• High-knockback, high-damage cannon lets you store Honey Crystal Shards from your inventory into the item! Right click up to 3 times to store up to 3 Honey Crystals Shards in the cannon. If you hold right button and then release, you fire the crystals!').white()
		])
		text.add(2, [
        Text.of('• The crystals are consumable ammo and cannot be picked up again once fired.').white()
		])
		text.add(3, [
        Text.of('• Can also be enchanted with Quick Charge, Punch, Power, and Piercing enchantments along with Unbreaking, Curse of the Vanishing, and Mending.').white()
		])
		text.add(4, [
        Text.of('• Can be repaired by Honey Crystal Shards, Sugar Infused Stone, or Sugar Infused Cobblestone.').white()
		])
    }
  })

	event.addAdvanced(['kubejs:gem_shard_great'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').darkPurple(),
        Text.of('to see more info.').gray()
      ])
    } else {
		text.add(1, [
        Text.of('• Earned mainly by completing bounties').white()
		])
        text.add(2, [
        Text.of('• Exchange in ').white(),
		Text.of('⭐ The Market ').yellow(),
		Text.of('quest chapter for a random ').white(),
		Text.of('Apotheosis Gem').darkPurple()
		])
    }
  })
	
	event.addAdvanced(['kubejs:voucher_relic'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').darkPurple(),
        Text.of('to see more info.').gray()
      ])
    } else {
		text.add(1, [
        Text.of('• Found in chests deep underground').white()
		])
        text.add(2, [
        Text.of('• Exchange in ').white(),
		Text.of('⭐ The Market ').yellow(),
		Text.of('quest chapter for a random ').white(),
		Text.of('Relic').darkPurple()
		])
    }
  })
	
	event.addAdvanced(['bonfires:estus_flask',], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Restored when using a bonfire').white()
		])
    }
    })

	event.addAdvanced(['kubejs:gem_shard'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Scavenging').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Can be found in chests').white()
		])
      text.add(2, [
        Text.of('• 9 shards can be converted into a random Common ').white(),
        Text.of('Apotheosis ').darkRed(),
		Text.of('gem ').white()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
        ])
    }
	})

	event.addAdvanced(['kubejs:junk'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Scavenging').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Can be found in chests').white()
		])
      text.add(2, [
        Text.of('• Additional resources can be extracted from it using one of the ').white(),
        Text.of('⭐ Masteries').darkRed()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
	})
  
	event.addAdvanced(['kubejs:essence_monster', 'kubejs:essence_monster_raw'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Enchanting, Alchemy').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Can drop from monsters or found in chests').white()
		])
      text.add(2, [
        Text.of('• Additional resources can be extracted from it using one of the ').white(),
        Text.of('⭐ Masteries').darkRed()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
	})
	
	event.addAdvanced('kubejs:artifact_fragment', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Scavenging').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired by disassembling ').white(),
		Text.of('Artifacts ').gold(),
		Text.of('or ').white(),
		Text.of('Relics').darkPurple()
		])
		text.add(2, [
	    Text.of('• Looks like it can be re-assembled again in another place . . .').white()
      ])
      text.add(3, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
	})
	
	event.addAdvanced('kubejs:spawnercore', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Enchanting, Alchemy, Scavenging ').white()
      ])
    } else {
      text.add(1, [
        Text.of('• Right-click to gain small amount of ').white(),
        Text.of('experience').green()
		])
      text.add(2, [
	    Text.of('• Can be exchanged for more rewards in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })
	
	event.addAdvanced('kubejs:scroll_exp', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Right-click to gain small amount of ').white(),
        Text.of('experience').green()
		])
      text.add(2, [
	    Text.of('• Can be exchanged for more rewards in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
	  text.add(3, [
	    Text.of('• Portable Experience Dissolver ').aqua(),
        Text.of('can be used to extract ').white(),
        Text.of('Experience dust ').green(),
		Text.of('needed in ').white(),
        Text.of('Enchanting Mastery ').darkGreen(),
		Text.of('recipes').white()
      ])
    }
  })

	event.addAdvanced('kubejs:scraps', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Main ingredient needed for leveling up the ').white(),
		Text.of('Scavenging ⭐ Mastery').blue()
		])
		text.add(2, [
        Text.of('• Can be found in  ').white(),
		Text.of('dungeons chests ').gold(),
		Text.of('or crafted with ').white(),
        Text.of('Portable Mini Salvager').darkPurple()
		])
      text.add(3, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('kubejs:dust_alchemical', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Main ingredient needed for leveling up the ').white(),
		Text.of('Alchemy ⭐ Mastery').darkPurple()
		])
		text.add(2, [
        Text.of('• Can be found in  ').white(),
		Text.of('dungeons chests ').gold(),
		Text.of('or crafted with ').white(),
        Text.of('Portable Transmutation Device').darkPurple()
		])
      text.add(3, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('kubejs:dust_experience', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Main ingredient needed for leveling up the ').white(),
		Text.of('Enchanting ⭐ Mastery').green()
		])
		text.add(2, [
        Text.of('• Can be found in  ').white(),
		Text.of('dungeons chests ').gold(),
		Text.of('or crafted with ').white(),
        Text.of('Portable Experience Dissolver').darkPurple()
		])
      text.add(3, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('kubejs:portable_dissolver', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Used to obtain ').white(),
		Text.of('Experience Dust ').green(),
		Text.of('needed in ').white(),
        Text.of('Enchanting Mastery ').green(),
		Text.of('recipes').white()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })
  
  	event.addAdvanced('kubejs:portable_transmutator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Used to obtain ').white(),
		Text.of('Alchemy Powder ').lightPurple(),
		Text.of('needed in ').white(),
        Text.of('Alchemy Mastery ').darkPurple(),
		Text.of('recipes').white()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('kubejs:portable_salvager', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Used to obtain ').white(),
		Text.of('Scraps ').blue(),
		Text.of('needed in ').white(),
        Text.of('Scavenging Mastery ').darkPurple(),
		Text.of('recipes').white()
		])
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
      ])
    }
  })

	event.addAdvanced('farmersdelight:straw', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').green(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• You may collect ').white(),
        Text.of('straw ').green(),
		Text.of('when harvesting grassy plants (Tall Grass, Wheat and Rice)').white()
		])
      text.add(2, [
        Text.of('• Can be used to make ').white(),
		Text.of('Rope').gold()
      ])
    }
  })
	
	event.addAdvanced('farmersdelight:rope', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').green(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Climbable block, behaving in a similar manner to Vines and Ladders').white()
		])
      text.add(2, [
        Text.of('• To climb them, simply hold Jump while touching it').white()
      ])
	  text.add(3, [
        Text.of('• When placing Rope, you can use more ropes against the first one to deploy them downward').white()
      ])
	  text.add(4, [
        Text.of('• To suppress rope deployment, simply sneak while placing it').white()
      ])
    }
  })	
	
	event.addAdvanced('#skilltree:gems', (item, advanced, text) => {
      text.add(1, [
        Text.of('• Use ').yellow(),
        Text.of('Smithing Table ').green().bold(true),
        Text.of('to insert it').yellow()
      ])
	})
  
  	event.addAdvanced(['skilltree:quiver', 'skilltree:fiery_quiver', 'skilltree:armored_quiver', 'skilltree:gilded_quiver', 'skilltree:toxic_quiver', 'skilltree:diamond_quiver', 'skilltree:healing_quiver', 'skilltree:silent_quiver', 'skilltree:bone_quiver'], (item, advanced, text) => {
      text.add(1, [
        Text.of('• Place together with ').white(),
		Text.of('arrows ').blue(),
		Text.of('in a ').white(),
        Text.of('crafting grid').gold()
      ])
	})

	// COINS
	event.addAdvanced('kubejs:coin_dungeon', (item, advanced, text) => {
	text.add(1, [
        Text.of('Loot coin').gold()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired from ').white(),
        Text.of('dungeon chests ').gold(),
        Text.of('and breaking ').white(),
        Text.of('spawners').gold()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ The Market ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)

      ])
    }
  })

	event.addAdvanced(['kubejs:copper_coin', 'kubejs:iron_coin', 'kubejs:gold_coin', 'kubejs:diamond_coin'], (item, advanced, text) => {
	text.add(1, [
        Text.of('Quest coin').gold()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired through doing ').white(),
        Text.of('quests ').gold(),
		Text.of('from the ').white(),
		Text.of('Quest Book ').green()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ The Market ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)

      ])
    }
  })
  
    event.addAdvanced('kubejs:proofofwork', (item, advanced, text) => {
	text.add(1, [
        Text.of('Minecolony coin').yellow()
     ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
	  	text.add(1, [
        Text.of('Can be acquired as: ').white()
      ])
      text.add(2, [
        Text.of('• one-time ').green().bold(true),
        Text.of('quest reward in  ').white(),
        Text.of('Minecolonies related ').gold(),
        Text.of('quests.').white()
      ])
	    text.add(3, [
        Text.of('• repeatable ').blue().bold(true),
        Text.of('random reward from some ').white(),
        Text.of('Minecolonies professions ').gold(),
        Text.of('(sifter, netherminer, miner)').white()
      ])
	  	text.add(4, [
		Text.of('• Exchange it in ').white(),
        Text.of('⭐ The Market ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book. ').green()
      ])
    }
  })

	event.addAdvanced(['kubejs:coin_aether', 'kubejs:coin_undergarden', 'kubejs:coin_twilight', 'kubejs:coin_bumblezone', 'kubejs:coin_icaria', 'kubejs:coin_end', 'kubejs:coin_nether'], (item, advanced, text) => {
	text.add(1, [
        Text.of('Dimensional coin').aqua()
    ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired from ').white(), 
		Text.of('loot ').darkPurple(), 
		Text.of('or through doing corresponding ').white(),
		Text.of('dimension-based ').aqua(),
        Text.of('quests ').gold(),
		Text.of('from the ').white(),
		Text.of('Quest Book ').green()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ The Market ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)
      ])
    }
  })
  
  	event.addAdvanced('kubejs:coin_task', (item, advanced, text) => {
	text.add(1, [
        Text.of('Task coin').blue()
    ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired by doing various ').white(),
		Text.of('Bounties ').blue(),
		Text.of('from the ').white(),
		Text.of('Bounty ').gold(),
        Text.of('board').white()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ The Market ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for specific ').white(),
		Text.of('Loot').gold().bold(true)

      ])
    }
  })
/////////////////////
  
    event.addAdvanced('naturescompass:naturescompass', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('• Allows you to search for a ').white(),
        Text.of('biome`s ').green().bold(true),
        Text.of('location').white()
      ])
    }
  })
  
      event.addAdvanced('l2hostility:hostility_orb', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('• Used to make a chunk section ').white(),
        Text.of('permanently ').red(),
        Text.of('not spawning mobs with levels').white()
      ])
	   text.add(2, [
        Text.of('• Use ').white(),
        Text.of('Hostility Detector ').blue(),
        Text.of('to know about current difficulty').white()
      ])
	    text.add(3, [
        Text.of('• Find out more details in dedicated ').white(),
        Text.of('Quest chapter ').green(),
		Text.of('in the Quest Book - ').white(),
        Text.of('Hostile World ').red().bold(true),
		Text.of('or in the guide book - ').white(),
		Text.of('L2Hostility Guide').red().bold(true)
      ])
    }
  })
  
    event.addAdvanced('#chalk:chalks', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Click on the ').white(),
          Text.of('full side ').green(),
          Text.of('of a block to draw a mark.').white()
        ])
        text.add(2, [
          Text.of('• The ').white(),
          Text.of('direction ').green(),
          Text.of('does matter and will point the arrow in that direction.').white()
        ])
      }
    })
	
	event.addAdvanced('roughtweaks:plaster', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Natural Healing ').red(),
		  Text.of('is ').white(),
		  Text.of('disabled. ').red().bold(true),
          Text.of('This is one of the items that can ').white(),
          Text.of('restore ').green(),
		  Text.of('your ').white(),
		  Text.of('health').red()
        ])
        text.add(2, [
        Text.of('• Find out more details about healing in ').white(),
        Text.of('⭐ Features ').blue(),		
        Text.of('Quest chapter ').green(),
		Text.of('in the Quest Book').white()
        ])
      }
    })


    event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
      text.add(1, [
        Text.of('• Used to store all your ').white(),
        Text.of('Guide Books').green()
		])
		text.add(2, [
        Text.of('• Right-click ').gold(),
        Text.of('to open the book selection screen').white()
		])
		text.add(3, [
        Text.of('• Shift + Right-click ').gold(),
        Text.of('to convert to the book for the block you`re looking at').white()
		])
		text.add(4, [
        Text.of('• Left-click ').gold(),
        Text.of('on air to revert a book back into the Tome').white()
		])
		text.add(5, [
        Text.of('• Shift + Q ').gold(),
        Text.of('to eject a book from it').white()
        ]) 
  })
  
    event.addAdvanced('bonfires:undead_bone_shard', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Used to reinforce ').white(),
		  Text.of('Estus Flask ').green(),
		  Text.of('at ').white(),
		  Text.of('Bonfires ').darkRed(),
		  Text.of('to increase ').white(),
		  Text.of('heal amount').red()
        ])
        text.add(2, [
        Text.of('• Obtained randomly from ').white(),
        Text.of('Dimensional ').blue(),		
        Text.of('or ').white(),
		Text.of('Dungeon Coin ').darkPurple(),
		Text.of('rewards in ').white(),
		Text.of('⭐ The Market ').yellow(),
		Text.of('quest chapter').white()
        ])
      }
    })

	event.addAdvanced(['kubejs:quest_crate'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('Quest Item').darkRed()
      ])
    } else {
      text.add(1, [
        Text.of('• Found in chests after completing ').white(),
        Text.of('sidestory_name ').darkRed(),
		Text.of('Sidestory ').gold(),
		Text.of('quest').white()
		])
      text.add(2, [
	    Text.of('• Can be opened with the help of ').white(),
        Text.of('⭐ sidestory_npc_name ').darkRed(),
        Text.of('in ').white(),
		Text.of('Sidestories ').gold(),
		Text.of('quest chapter').white()
        ])
     }
	})
  	event.addAdvanced('#rad3:decapitating', (item, advanced, text) => {
      text.add(1, [
		Text.of('Has a ').white(),
        Text.of('25% ').yellow(),
        Text.of('chance to ').white(),
        Text.of('behead ').red(),
		Text.of('a slain mob').white()
      ])
	})
	event.addAdvanced('sophisticatedstorage:chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})
	event.addAdvanced('sophisticatedstorage:copper_chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})
	event.addAdvanced('sophisticatedstorage:iron_chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})
	event.addAdvanced('sophisticatedstorage:gold_chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})
	event.addAdvanced('sophisticatedstorage:diamond_chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})
	event.addAdvanced('sophisticatedstorage:netherite_chest', (item, advanced, text) => {
    text.add(1, Text.of('Cannot be stored in a capsule. ')) 
	text.add(2, Text.of('Double chests cause issues with Toms Simple Storage. '))
    text.add(3, Text.of('Barrels work just fine!'))
	})


    // drop info
	event.addAdvanced('cataclysm:amethyst_crab_meat', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Amethyst Crab mini-boss found rarely in the Lush Caves biome').gray()) 
	})
	event.addAdvanced('cataclysm:amethyst_crab_shell', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Amethyst Crab mini-boss found rarely in the Lush Caves biome').gray()) 
	})
	event.addAdvanced('hmag:ancient_stone', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Elder Guardians and Monoliths').gray()) 
	})
	event.addAdvanced('hmag:kobold_leather', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Kobold found rarely underground').gray()) 
	})
	event.addAdvanced('hmag:ogre_horn', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Ogre found rarely underground').gray()) 
	})
	event.addAdvanced('hmag:lich_cloth', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Lich found rarely underground').gray()) 
	})
	event.addAdvanced('hmag:necrofiber', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Necrostalker found rarely underground').gray()) 
	})
	event.addAdvanced('hmag:ender_plasm', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Ender Executor found rarely with Endermen').gray()) 
	})
	event.addAdvanced('hmag:crimson_cuticula', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Crimson Slaughterer found rarely in Crimson Forests').gray()) 
	})
	event.addAdvanced('hmag:dyssomnia_skin', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Dyssomnia, which attacks sleepless players').gray()) 
	})
	event.addAdvanced('hmag:mysterious_petal', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Alraune found rarely in Jungles').gray()) 
	})
	event.addAdvanced('hmag:sharp_fang', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Snow Canine found rarely in snowy biomes').gray()) 
	})
	event.addAdvanced('hmag:burning_core', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Fortress Keeper found rarely in Nether Fortresses').gray()) 
	})
	event.addAdvanced('hmag:cubic_nucleus', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Slime Girl found rarely in Swamps').gray()) 
	})
	event.addAdvanced('hmag:evil_crystal_fragment', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from evil women').gray()) 
	})
	event.addAdvanced('hmag:lightning_particle', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from charged creepers').gray()) 
	})
	event.addAdvanced('bosses_of_mass_destruction:ancient_anima', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from the Night Lich boss').gray()) 
	})
	event.addAdvanced('bosses_of_mass_destruction:blazing_eye', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from the Nether Gauntlet boss').gray()) 
	})
	event.addAdvanced('bosses_of_mass_destruction:obsidian_heart', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from the Obsidilith boss').gray()) 
	})
	event.addAdvanced('bosses_of_mass_destruction:void_thorn', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from the Void Blossom boss').gray()) 
	})
	// item info
	event.addAdvanced('hmag:insomnia_fruit', (item, advanced, text) => {
    text.add(1, Text.of('Becomes stronger the longer you go without sleep').gray()) 
	})
	event.addAdvanced('hmag:insomnia_sword', (item, advanced, text) => {
    text.add(1, Text.of('Becomes stronger the longer you go without sleep').gray()) 
	})
	event.addAdvanced('hmag:nemesis_blade', (item, advanced, text) => {
    text.add(1, Text.of('Becomes stronger the less experience you have').gray()) 
	})
	event.addAdvanced('hmag:crimson_bow', (item, advanced, text) => {
    text.add(1, Text.of('Becomes stronger the hungrier you are').gray()) 
	})
	event.addAdvanced('hmag:fortress_shield', (item, advanced, text) => {
    text.add(1, Text.of('Ignites attackers').gray()) 
	})
	event.addAdvanced('hmag:bat_stew', (item, advanced, text) => {
    text.add(1, Text.of('Gives darkness immunity').gray()) 
	})
	event.addAdvanced('#hmag:reinforced_blocks', (item, advanced, text) => {
    text.add(1, Text.of('Immune to Withers').gray()) 
	})
	event.addAdvanced('darkerdepths:void_soul_jar', (item, advanced, text) => {
    text.add(1, Text.of('Capture a void soul in a glass bottle').gray()) 
	})
	event.addAdvanced('minecraft:reinforced_deepslate', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Sculkium Pickaxe').gray()) 
	})
	
	
	
	

	//Gear Upgrades
	event.addAdvanced('kubejs:upgrade_swift', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increase Mining Speed or Attack Speed by 15%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})
	
	event.addAdvanced('kubejs:upgrade_swift2', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increase Mining Speed or Attack Speed by 25%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_swift3', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increase Mining Speed or Attack Speed by 35%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_sharp', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increases Attack Damage by 10%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_sharp2', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increases Attack Damage by 15%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_sharp3', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increases Attack Damage by 25%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_force', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Tools, Melee').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increases Attack Damage and Movement Speed by 10%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_prof', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Rings, Necklace, Belt, Charm, Bracelet').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('Increases Proficiency gain by 100%').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_heart', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Chestplate').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+400% Max Health, -100% Armor, -100% Armor Toughness').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_gilded', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Chestplate').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+40% Overheal, -2 Max Hearts, -2 Armor').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_guarding', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Chestplate').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('-3 Max Hearts, +100% Armor, +100% Armor Toughness').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_sniping', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Bow').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+30% Arrow DMG, +30% Arrow Speed, -25% Draw Speed, -20% Movement Speed').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_quick', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Bow').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+30% Draw Speed, -10% Movement Speed, -25% Arrow DMG, +20% Arrow Speed').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})	
	
	event.addAdvanced('kubejs:upgrade_reach', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Pickaxe').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+ 1 Block Reach, -10% Mining Speed').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})

	event.addAdvanced('kubejs:upgrade_quickfeet', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Feet').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+30% Movement Speed').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})	

	event.addAdvanced('kubejs:upgrade_lifesteal', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Armor').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+20% Lifesteal, -1 Max HP').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})	

	event.addAdvanced('kubejs:upgrade_fortress', (item, advanced, text) => {
	if (!event.isShift()) {	
      text.add(1, [Text.of('Rarity: ').white(),Text.of('Common').blue()])
	  text.add(2, [Text.of('Type: ').white(),Text.of('Shield').darkGreen()])
	  text.add(3, [Text.of('Info: ').white(),Text.of('+5 Attack Damage, +20% Attack Speed, +2 Attack Knockback, +10% Movement Speed').darkRed()])
	} else {text.add(1, [
        Text.of('• Use ').white(),Text.of('Anvil ').darkGreen(),Text.of('to insert it into ').white(),Text.of('Upgrade Slot ').green(),Text.of('in your gear ').white(),Text.of('with enough ').white(),Text.of('Proficiency ').blue()])}	
	})		
// THE END	
})
ClientEvents.lang('en_us', event => {
  event.renameItem('graveyard:upper_bone_staff', 'Skull of the Wizard King')
  event.renameItem('graveyard:middle_bone_staff', 'Ribs of the Warrior King')
  event.renameItem('graveyard:lower_bone_staff', 'Tail of the Beast King')
})