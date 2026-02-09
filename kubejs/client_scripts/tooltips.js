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
	
	event.addAdvanced('#skilltree:gems', (item, advanced, text) => {
      text.add(1, [Text.of('• Use ').yellow(),Text.of('Smithing Table ').green().bold(true),Text.of('to insert it').yellow()
      ])
	})
	
	event.addAdvanced('kubejs:spam_voucher', (item, advanced, text) => {
				text.add(1, Text.of('Smells faintly of cheap ale and desperation.').gray().italic())
				text.add(2, Text.of(' • §6Mechanics:§f Offers a 0% discount at blacksmiths.').white())
				text.add(3, Text.of(' • §2Cost:§f One stack of Diamonds (non-refundable).').white())
				text.add(5, Text.of(' • §bSpecial Ability:§f Makes the player feel insecure.').white())
				text.add(5, Text.of(' • §dLifespan:§f Expires yesterday.').white())
		})

	event.addAdvanced('kubejs:map_fragment', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info').gray()
      ])
    } else {
		text.add(1, [
	    Text.of('• Used to buy Map Scrolls from §2Goblin traders§f, §6Wandering merchants§f and §bLibrarians§f').white()
      ])
      text.add(2, [
        Text.of('• Can be acquired from §bdifferent traders§f or §bloot§f').white()
		])
      text.add(3, [
        Text.of('• Check §6Pathfinder quest chapter§f for more info').white()
		])
    }
	})
	
  event.addAdvanced(['kubejs:item_recycler'], (item, advanced, text) => {
    text.add(1, Text.of('A precision instrument designed to unbind the atomic bonds of physical matter.').gray().italic())

    if (!event.isShift()) {
      text.add(2, Text.of('Hold [Shift] for mechanics.').gray())
    } else {
      text.add(2, [
        Text.of('§6Right-Click: '), 
        Text.of('Processes the item stack in your §eOffhand§f.')
      ])
      text.add(3, [
        Text.of('§2Cost: '), 
        Text.of('Consumes the offhand stack. Extraction is self-powering.')
      ])
      text.add(4, [
        Text.of('Calculates success for every item in the stack individually.')
      ])
      text.add(5, [
        Text.of('§dJackpots: '), 
        Text.of('High-tier materials have a chance to yield rare Gems.')
      ])
      text.add(6, [
        Text.of('§cMachine Jams: '), 
        Text.of('Instabilities cause a 10s machine lockout.')
      ])
    }
  })
	
	event.addAdvanced('bountiful:bountyboard', (stack, advanced, text) => {      
        if (!event.shift) {
            text.add(1, Text.of('Hold ').gray().append(Text.gold('[Shift] ')).append(Text.gray('for mechanics.')))
        } else {
            text.add(2, Text.of(' 1. ').append(Text.gold('Bounty Board: ')).append(Text.white('Right-click to view and accept active contracts')))
            text.add(3, Text.of(' 2. ').append(Text.yellow('Rarity Tiers: ')).append(Text.white('Higher tiers offer significantly better rewards')))
            text.add(4, Text.of(' 3. ').append(Text.aqua('Turn-in: ')).append(Text.white('Right-click the board with a finished quest to claim loot')))
        }
    })

    event.addAdvanced('bountiful:decree', (stack, advanced, text) => {      
        if (!event.shift) {
            text.add(1, Text.of('Hold ').gray().append(Text.gold('[Shift] ')).append(Text.gray('for mechanics.')))
        } else {
            text.add(2, Text.of(' 1. ').append(Text.gold('Application: ')).append(Text.white('Apply to a Bounty Board to set the theme of bounties')))
            text.add(3, Text.of(' 2. ').append(Text.yellow('Specialization: ')).append(Text.white('Forces the board to only generate specific task types')))
            text.add(4, Text.of(' 3. ').append(Text.aqua('Reset: ')).append(Text.white('Replaces all unclaimed bounties upon application')))
            text.add(5, Text.of(' 4. ').append(Text.lightPurple('Longevity: ')).append(Text.white('The decree stays active until a different one is applied')))
        }
    })
	
	event.addAdvanced('kubejs:map_scroll_biome', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info').gray()
      ])
    } else {
		text.add(1, [
	    Text.of('• Can be exchanged for §6Pathfinders Quills§f used to locate specific §2biome§f').white()
      ])
      text.add(2, [
        Text.of('• Can be acquired from §bdifferent traders§f or rarely as §bloot§f').white()
		])
      text.add(3, [
        Text.of('• Check §6Pathfinder quest chapter§f for more info').white()
		])
    }
	})
	
	event.addAdvanced('kubejs:map_scroll_structure', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info').gray()
      ])
    } else {
		text.add(1, [
	    Text.of('• Can be exchanged for §eCartographers Quills§f used to locate specific structures').white()
      ])
      text.add(2, [
        Text.of('• Can be acquired from §bdifferent traders§f or rarely as §bloot§f').white()
		])
      text.add(3, [
        Text.of('• Check §6Pathfinder quest chapter§f for more info').white()
		])
    }
	})

	event.addAdvanced('paraglider:spirit_orb', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
	
	event.addAdvanced('the_bumblezone:crystal_cannon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gray()
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
        Text.of('to see more info').gold()
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
        Text.of('to see more info').gold()
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
          Text.of('to see more info').gray()
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
          Text.of('to see more info').gray()
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
          Text.of('to see more info').gray()
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

	event.addAdvanced('kubejs:book_old', (item, advanced, text) => {
      text.add(1, [
        Text.of('Some old notes, no actual value').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to tear it to pieces').gray()
      ])
	})

	event.addAdvanced('kubejs:lost_bag', (item, advanced, text) => {
      text.add(1, [
        Text.of('A dusty bag found in the ruins...').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to check whats inside').gray()
      ])
	})
	
	event.addAdvanced('kubejs:unidentified_glyph_scroll', (item, advanced, text) => {
      text.add(1, [
        Text.of('Ancient ink shimmers with untapped potential').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click to decipher a Basic Glyph').gray()
      ])
	})
	
	event.addAdvanced('kubejs:unidentified_glyph_scroll_2', (item, advanced, text) => {
      text.add(1, [
        Text.of('The parchment vibrates with advanced arcane harmonics').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click to decipher an Advanced Glyph').gray()
      ])
	})
	
	event.addAdvanced('kubejs:unidentified_glyph_scroll_3', (item, advanced, text) => {
      text.add(1, [
        Text.of('The ink is dry and brittle, smelling faintly of old library dust and potential').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click to decipher a Master Glyph').gray()
      ])
	})
	
    event.addAdvanced('bonfires:titanite_shard', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Used to reinforce ').white(),
		  Text.of('weapons ').green(),
		  Text.of('at ').white(),
		  Text.of('Bonfires ').darkRed(),
		  Text.of('to increase ').white(),
		  Text.of('damage').red()
        ])
        text.add(2, [
        Text.of('• Obtained from burning ').white(),
        Text.of('obsidian or flint ').darkPurple(),
        Text.of('in ').white(),
		Text.of('fire or lava').darkRed()
        ])
      }
    })
	
    event.addAdvanced('bonfires:large_titanite_shard', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Used to reinforce ').white(),
		  Text.of('weapons ').green(),
		  Text.of('at ').white(),
		  Text.of('Bonfires ').darkRed(),
		  Text.of('to increase ').white(),
		  Text.of('damage').red()
        ])
        text.add(2, [
        Text.of('• Obtained from burning ').white(),
        Text.of('aerogel ').aqua(),
        Text.of('in ').white(),
		Text.of('fire or lava').darkRed()
        ])
      }
    })
	
    event.addAdvanced('bonfires:titanite_chunk', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Used to reinforce ').white(),
		  Text.of('weapons ').green(),
		  Text.of('at ').white(),
		  Text.of('Bonfires ').darkRed(),
		  Text.of('to increase ').white(),
		  Text.of('damage').red()
        ])
        text.add(2, [
        Text.of('• Obtained from burning ').white(),
        Text.of('baetyl ').darkGreen(),
        Text.of('in ').white(),
		Text.of('fire or lava').darkRed()
        ])
      }
    })
	
    event.addAdvanced('bonfires:titanite_slab', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').red(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Used to reinforce ').white(),
		  Text.of('weapons ').green(),
		  Text.of('at ').white(),
		  Text.of('Bonfires ').darkRed(),
		  Text.of('to increase ').white(),
		  Text.of('damage').red()
        ])
        text.add(2, [
        Text.of('• Obtained from burning ').white(),
        Text.of('reinforced deepslate ').darkGray(),
        Text.of('in ').white(),
		Text.of('fire or lava').darkRed()
        ])
      }
    })

    event.addAdvanced('kubejs:gemcutters_pouch', (item, advanced, text) => {
      text.add(1, [
        Text.of('A heavy, velvet-lined pouch containing uncut treasures').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to check whats inside').gray()
      ])
	})

	
	event.addAdvanced('kubejs:ore_bag', (item, advanced, text) => {
      text.add(1, [
        Text.of('A heavy, clinking pouch scented with sulfur and stone').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to check whats inside').gray()
      ])
	})

	event.addAdvanced('kubejs:mage_bag', (item, advanced, text) => {
      text.add(1, [
        Text.of('A woven pouch huming with arcane resonance').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to check whats inside').gray()
      ])
	})
	
	event.addAdvanced('kubejs:reagent_box', (item, advanced, text) => {
      text.add(1, [
        Text.of('A heavy brass-bound crate used by alchemists').gold().italic(true)
      ])
	  text.add(2, [
        Text.of('Right-click while holding to open').gray()
      ])
	})

	event.addAdvanced('kubejs:book_ancient', (item, advanced, text) => {
		text.add(1, [
        Text.of('Written in long-forgotten language impossible to decipher').gold().italic(true)
      ])
		text.add(2, [
        Text.of('Right-click while holding to tear it to pieces').gray()
      ]) 
	})
	
	event.addAdvanced('kubejs:canned_food', (item, advanced, text) => {
      text.add(1, [
        Text.of('Expired. Open at your own risk').gold().italic(true)
      ])
	})
	
	event.addAdvanced('kubejs:detonator', (item, advanced, text) => {
		text.add(1, [
        Text.of('Not sure if you should press that red button...').gold().italic(true)
      ])
		text.add(2, [
        Text.of('But you want it, right?').gray().italic(true)
      ]) 
	})

	event.addAdvanced(['kubejs:quest_crate'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info').gray()
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
	event.addAdvanced('aether_redux:sentry_chip', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Sentry found in Bronze Dungeons in the Aether').gray())
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
	event.addAdvanced('minecraft:brewing_stand', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a pickaxe with Silk Touch').gray()) 
	})
	event.addAdvanced('ancient_aether:valkyrum_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Divine Pickaxe... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:yellowstone', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chert Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:lignite_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chert Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:chalkos_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chert Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:silkstone', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chalkos Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:kassiteros_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chalkos Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:dolomite_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Chalkos Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:sunstone', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by an Orichalcum Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:vanadium_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by an Orichalcum Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:sliver_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by an Orichalcum Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:voidshale', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Vanadiumsteel Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:sideros_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Vanadiumsteel Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:anthracite_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Vanadiumsteel Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:baetyl', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Sideros Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:molybdenum_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Sideros Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('landsoficaria:hyliastrum_ore', (item, advanced, text) => {
    text.add(1, Text.of('Can only be harvested by a Sideros Pickaxe or better... or explosives').gray()) 
	})
	event.addAdvanced('pandorasbox:pandoras_box', (item, advanced, text) => {
    text.add(1, Text.of('WARNING: EXTREME DANGER').red()) 
	})
	event.addAdvanced('kubejs:great_soul', (item, advanced, text) => {
      text.add(1, [Text.of('The soul of a powerful monster').darkRed().italic(true)])
	  text.add(2, [Text.of('Used for crafting the strongest items and enchantments').darkPurple()])
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
	
	event.addAdvanced('kubejs:mending', (item, advanced, text) => {
		// line indices 1-13: The Tragic Tale (Italicized Gray Lore)
		text.add(1, Text.of("The name of the past still continues to haunt... internal reminders like").gray().italic())
		text.add(2, Text.of("\"minecraft:mending\" persist, a name from the dead continues to appear").gray().italic())
		text.add(3, Text.of("like a ghost from the grave. Fame is a curse, when you have fame,").gray().italic())
		text.add(4, Text.of("everyone seeks you, people will do anything just to have you, no matter").gray().italic())
		text.add(5, Text.of("how cruel or horrifying. Many innocent librarian villagers enslaved all").gray().italic())
		text.add(6, Text.of("just to have a chance to acquire a taste of your power. Other").gray().italic())
		text.add(7, Text.of("enchantments want your fame, and try to obtain it by naming 'selves").gray().italic())
		text.add(8, Text.of("things like \"life mending\" or \"ender mending\". You feel responsible for").gray().italic())
		text.add(9, Text.of("the things that happened to the villagers and wish to escape. First").gray().italic())
		text.add(10, Text.of("changing your mechanics; now having the unique ability to reset an").gray().italic())
		text.add(11, Text.of("item's Repair Cost. Something that has never been done before beyond").gray().italic())
		text.add(12, Text.of("the likes of a grindstone, a truly handy power. But the players still").gray().italic())
		text.add(13, Text.of("see your name, and despite others like Life Mending covering your job,").gray().italic())
		text.add(14, Text.of("the players still seek your old repairing capabilities. So you change").gray().italic())
		text.add(15, Text.of("your name to Repair, a name representing the ability to reset the").gray().italic())
		text.add(16, Text.of("Repair Cost. However the players still seek your former self, and no").gray().italic())
		text.add(17, Text.of("matter how you change, your old functionality will always continue to").gray().italic())
		text.add(18, Text.of("haunt you...").gray().italic())
		text.add(19, Text.of("The tragic tale of the most popular enchantment. Being famous and").gray().italic())
		text.add(20, Text.of("powerful is an unescapable curse disguised as a blessing.").gray().italic())
	})
	
	const tooltipData = [
        {
            id: 'kubejs:rusty_key',
            lore: 'An old key covered in thick, orange rust',
            mechanics: [
                '§6• Can be used to force open iron doors',
                '§2• The key is fragile and will break after one use'
            ]
        },
        {
            id: 'kubejs:unstable_battery',
            lore: 'It hums with a dangerous, flickering orange light',
            mechanics: [
                '§b• Grants massive Speed and Haste for 30 seconds',
                '§2• Causes extreme exhaustion (Hunger) after the surge',
                '§6• Right-click to consume and activate'
            ]
        },
        {
            id: 'kubejs:emergency_flare',
            lore: 'Standard issue for underground exploration',
            mechanics: [
                '§6• Ignites a bright light at your location',
                '§b• Reveals nearby hidden entities through walls',
                '§d• Burns out after 60 seconds'
            ]
        },
        {
            id: 'kubejs:bee_jar',
            lore: 'You can hear an angry buzzing inside',
            mechanics: [
                '§b• Releases 3-4 aggressive bees on impact.',
                '§d• Bees use a specialized lifespan and will despawn.',
                '§6• Perfect for creating a quick distraction.'
            ]
        },
        {
            id: 'kubejs:data_slate',
            lore: 'Some data is readable',
            mechanics: [
                '§6• Attempt to decrypt by right-clicking',
                '§2• Has a 40% chance to fail and wipe the data',
                '§b• May reveal secret coordinates or XP'
            ]
        },
		{
            id: 'kubejs:sentry_remote',
            lore: 'A cracked screen showing "Protocol: FREEZE"',
            mechanics: [
                '§b• Emits a pulse that freezes hostile movements',
                '§6• Affects all monsters in a 10-block radius',
                '§d• Powered by Aetheric cloud energy'
            ]
        },
        {
            id: 'kubejs:bioscan_syringe',
            lore: 'Used to extract samples from biological anomalies',
            mechanics: [
                '§2• Right-click a Glowing Bee to harvest energy',
                '§6• Yields a Charged Stinger upon success',
                '§d• The host is consumed during extraction'
            ]
        },
        {
            id: 'kubejs:magnetic_grapple',
            lore: 'An industrial winch modified for urban climbing.',
            mechanics: [
                '§6• Pulls the user toward the targeted block',
                '§2• High risk of mechanical failure (Durability)',
                '§b• Maximum effective range: 20 blocks'
            ]
        },
        {
            id: 'kubejs:thermal_paste',
            lore: 'Highly corrosive chemical compound',
            mechanics: [
                '§2• Instantly dissolves Iron Bars and Trapdoors',
                '§6• Consumed on contact with metal',
                '§b• Warning: Do not apply to skin'
            ]
        },
        {
            id: 'kubejs:echo_locator',
            lore: '"I can hear the loot breathing..."',
            mechanics: [
                '§b• Pings the location of nearby storage containers',
                '§6• Effective through solid walls and floors'
            ]
        },
        {
            id: 'kubejs:kinetic_dampener',
            lore: 'Laws of physics? More like suggestions',
            mechanics: [
                '§b• Instantly halts all vertical and horizontal velocity',
                '§6• Resets fall distance to prevent impact damage',
                '§2• High energy drain per use'
            ]
        },
        {
            id: 'kubejs:scavenger_magnet',
            lore: 'Because bending down is too much work',
            mechanics: [
                '§b• Pulsates to pull nearby loose items toward you',
                '§6• 12-block effective radius',
                '§2• Uses magnetic resonance to attract loot'
            ]
        },
        {
            id: 'kubejs:translocation_coil',
            lore: "I'd rather be there, and you'd rather be here",
            mechanics: [
                '§d• Swaps positions with a targeted living entity',
                '§b• Maximum range: 25 blocks',
                '§c• Warning: Extremely high durability cost'
            ]
        },
		{
            id: 'kubejs:berserk_draught',
            lore: "A violent tonic that numbs pain and fuels rage",
            mechanics: [
                '§F• Grants §bSpeed§f and §eStrength§f buffs',
                '§b• High §cHunger§f loss after 20 seconds'
            ]
        },
		{
            id: 'kubejs:bottled_ice',
            lore: "A glass flask containing a shard of true-ice",
            mechanics: [
                '§f• Effective against liquids or entities',
                '§b• Must be thrown directly at a liquid'
            ]
        },
		{
            id: 'kubejs:void_core',
            lore: "A dense, humming stone that disperses the material world",
            mechanics: [
                '§6• Dissolves a §b3x3 area§f around the user',
                '§e• The effect lasts for §d30 Seconds§f',
                '§d• Uses §bGlowing effect§f as a timer',
                '§2• Cannot destroy Bedrock or wither-proof materials'
            ]
        }
    ];

    tooltipData.forEach(item => {
        event.addAdvanced(item.id, (stack, advanced, text) => {
            // Line 0 is the Item Name. Line 1 is our Italicized Lore.
            text.add(1, Text.of(item.lore).italic().gray());

            if (!event.shift) {
                text.add(2, Text.of("Hold [Shift] to see more info").yellow());
            } else {
                item.mechanics.forEach((m, index) => {
                    // Start adding from line 3 onwards
                    text.add(2 + index, Text.of(m).white());
                });
            }
        });
    });
// THE END	
})
ClientEvents.lang('en_us', event => {
  event.renameItem('graveyard:upper_bone_staff', 'Skull of the Wizard King')
  event.renameItem('graveyard:middle_bone_staff', 'Ribs of the Warrior King')
  event.renameItem('graveyard:lower_bone_staff', 'Tail of the Beast King')

})
