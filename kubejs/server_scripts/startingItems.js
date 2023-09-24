PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      //Gives the items
      event.player.give('minecraft:stone_sword')
      event.player.give(Item.of('minecraft:golden_pickaxe').enchant('minecraft:unbreaking', 3))
      event.player.give(Item.of('map_atlases:atlas'))
      event.player.give(Item.of('sophisticatedbackpacks:gold_backpack'))
      event.player.give('minecraft:leather_leggings')
      event.player.give('minecraft:leather_boots')
      event.player.give(Item.of('cnb:heal_spell_book_1'))
      event.player.give('64x minecraft:torch')
      event.player.give('12x minecraft:cooked_beef')
      event.player.give('collectorsalbum:common_card_package')
      event.player.give('supplementaries:bubble_blower')
      event.player.give('constructionwand:iron_wand')
    }
})