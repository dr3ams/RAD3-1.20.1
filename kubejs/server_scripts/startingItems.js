//const pandora = Item.of('pandora:pandora_necklace', '{PandoraCharms:[{Count:1b,id:"curseofpandora:curse_of_inertia"},{Count:1b,id:"curseofpandora:curse_of_proximity"},{Count:1b,id:"curseofpandora:curse_of_flesh"},{Count:1b,id:"curseofpandora:curse_of_metabolism"},{Count:1b,id:"curseofpandora:curse_of_tension"},{Count:1b,id:"curseofpandora:curse_of_prudence"},{Count:1b,id:"curseofpandora:curse_of_spell"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"},{Count:0b,id:"minecraft:air"}]}')
const tome = Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},bloodmagic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}}},buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},dimdungeons:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}}},l2hostility:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"l2hostility:hostility_guide"}}},parcool:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"parcool:parcool_guide"}}},naturesaura:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},simplyswords:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}}}}}');
const CuriosAPI = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
const book = Item.of('ars_nouveau:novice_spell_book', '{"ars_nouveau:caster":{current_slot:4,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:10,spells:{spell0:{name:"Heal",recipe:{part0:"ars_nouveau:glyph_self",part1:"ars_nouveau:glyph_heal",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell1:{name:"Fell",recipe:{part0:"ars_nouveau:glyph_projectile",part1:"ars_nouveau:glyph_fell",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell2:{name:"Break",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_break",part2:"ars_nouveau:glyph_fortune",part3:"ars_nouveau:glyph_fortune",part4:"ars_nouveau:glyph_fortune",part5:"ars_nouveau:glyph_fortune",size:6},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell3:{name:"Simple Break",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_break",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell4:{name:"Blink",recipe:{part0:"ars_nouveau:glyph_projectile",part1:"ars_nouveau:glyph_blink",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell5:{name:"",recipe:{size:0},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell6:{name:"",recipe:{size:0},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell7:{name:"",recipe:{size:0},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell8:{name:"",recipe:{size:0},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}},spell9:{name:"",recipe:{size:0},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}');
const qbook = Item.of('ftbquests:book', '{affix_data:{rarity:"apotheotic_additions:esoteric"},display:{Name:\'{"text":"RAD 3 Quest Book"}\'}}');

const startingItems = [

  [0, Item.of('minecraft:stone_sword')],
  [1, Item.of('minecraft:golden_pickaxe').enchant('minecraft:unbreaking', 3)],
  [2, book],
  [3, qbook],
  [4, tome],
  [5, 'roughtweaks:plaster'],
  [6, 'roughtweaks:plaster'],
  [7, Item.of('supplementaries:sack', '{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"spelunkery:item_magnet"},{Count:1b,Slot:1b,id:"nameless_trinkets:mysterious_trinket"},{Count:64b,Slot:2b,id:"minecraft:torch"},{Count:1b,Slot:3b,id:"paraglider:paraglider"},{Count:1b,Slot:4b,id:"minecraft:brush"},{Count:1b,Slot:5b,id:"minecraft:ender_pearl"}],id:"minecraft:shulker_box"}}')],
  [8, Item.of('fruitsdelight:jelly_bread', 2, '{JellyEffectRoot:["PINEAPPLE"]}')],
  [9, 'sophisticatedbackpacks:backpack'],
  [10, Item.of('l2hostility:hostility_orb')]
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