// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

ItemEvents.modification(event => {
	
	
  event.modify('kubejs:voucher_relic', item => {
    item.maxStackSize = 1
  })
  event.modify('kubejs:artifact_fragment', item => {
    item.maxStackSize = 1
  })
  event.modify('l2complements:totemic_apple', item => {
    item.maxStackSize = 1
  })
  event.modify('l2complements:enchanted_totemic_apple', item => {
    item.maxStackSize = 1
  })
  event.modify('minecraft:golden_apple', item => {
    item.maxStackSize = 1
  })
  event.modify('minecraft:enchanted_golden_apple', item => {
    item.maxStackSize = 1
  })
  
 ////////////END 
})

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'RAD 3'; });
