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
      text.add(2, [
	    Text.of('• Find out more details in ').white(),
        Text.of('⭐ Masteries ').darkRed(),
        Text.of('questbook chapter').white()
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
		Text.of('quest chapter for random ').white(),
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
  
	event.addAdvanced(['kubejs:essence_monster', 'kubejs:essence_monster_raw'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
	    text.add(2, [
        Text.of('⭐ Mastery: ').darkRed(),
        Text.of('Enchanting, Alchemy ').white()
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
        Text.of('• Aquired by disassembling ').white(),
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
        Text.of('⭐ Masteries ').red(),
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
        Text.of('• Main ingridient needed for leveling up the ').white(),
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
        Text.of('• Main ingridient needed for leveling up the ').white(),
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
        Text.of('• Main ingridient needed for leveling up the ').white(),
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
  
  	event.addAdvanced(['kubejs:coin_engineer', 'kubejs:coin_food', 'kubejs:coin_gathering', 'kubejs:coin_exploration', 'kubejs:coin_gear', 'kubejs:coin_magic'], (item, advanced, text) => {
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
        Text.of('• Acquired through doing corresponding ').white(),
		Text.of('Task-type ').blue(),
		Text.of('quests from the ').white(),
		Text.of('⭐ Task board ').gold(),
        Text.of('quest chapter ').white()
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
  
	event.addAdvanced('cataclysm:amethyst_crab_meat', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Amethyst Crab mini-boss in the Sunken City dungeon or rarely in Lush Caves biome')) 
	})
	
	event.addAdvanced('undergarden:blood_globule', (item, advanced, text) => {
    text.add(1, Text.of('Dropped from Engorged Blood Mushroom Caps in Undergarden Dimension')) 
	})

// THE END	
})