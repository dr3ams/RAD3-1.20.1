const tome = Item.of('eccentrictome:tome', '{"eccentrictome:items":[{Count:1b,id:"ftbquests:book",tag:{affix_data:{rarity:"apotheotic_additions:esoteric"},display:{Name:\'{"text":"RAD 3 Quest Book"}\'}}},{Count:1b,id:"ars_nouveau:worn_notebook"},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"l2hostility:hostility_guide"}},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},{Count:1b,id:"araxers_bestiary:bestiary_book"},{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}],"eccentrictome:mods":{apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},bloodmagic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}}},buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},dimdungeons:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}}},ftbquests:{0:{Count:1b,id:"ftbquests:book",tag:{affix_data:{rarity:"apotheotic_additions:esoteric"},display:{Name:\'{"text":"RAD 3 Quest Book"}\'}}}},l2hostility:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"l2hostility:hostility_guide"}}},naturesaura:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},parcool:{0:{Count:1b,id:"parcool:parcool_guide"}},simplyswords:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}}}},"eccentrictome:version":2}')
const CuriosAPI = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");

const qbook = Item.of('ftbquests:book', '{affix_data:{rarity:"apotheotic_additions:esoteric"},display:{Name:\'{"text":"RAD 3 Quest Book"}\'}}');

const startingItems = [

  [0, Item.of('minecraft:stone_sword')],
  [1, Item.of('minecraft:golden_pickaxe').enchant('minecraft:unbreaking', 3)],
  [3, qbook],
  [4, tome],
  [7, Item.of('supplementaries:sack', '{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"roughtweaks:plaster"},{Count:16b,Slot:1b,id:"minecraft:torch"},{Count:1b,Slot:2b,id:"paraglider:paraglider"},{Count:1b,Slot:3b,id:"l2hostility:hostility_orb"},{Count:1b,Slot:4b,id:"roughtweaks:plaster"},],id:"minecraft:shulker_box"}}')],
  [8, Item.of('fruitsdelight:jelly_bread', 2, '{JellyEffectRoot:["PINEAPPLE"]}')],
  [9, 'sophisticatedbackpacks:backpack']
]

PlayerEvents.loggedIn(event =>{

  if (!event.player.stages.has('starting_items')) {
      
      startingItems.forEach(item => {
          event.player.inventory.setStackInSlot(item[0], item[1]);
      })
      
      event.player.setFeetArmorItem(Item.of('minecraft:leather_boots'));
      event.player.setLegsArmorItem(Item.of('minecraft:leather_leggings'));

      event.player.stages.add('starting_items');
  }
})