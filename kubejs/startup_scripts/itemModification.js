// priority: 0

ItemEvents.modification(event => {
  event.modify('kubejs:voucher_relic', item => {
    item.maxStackSize = 1;
  });
  event.modify('kubejs:artifact_fragment', item => {
    item.maxStackSize = 1;
  });
  event.modify('l2complements:totemic_apple', item => {
    item.maxStackSize = 1;
  });
  event.modify('l2complements:enchanted_totemic_apple', item => {
    item.maxStackSize = 1;
  });
  event.modify('minecraft:golden_apple', item => {
    item.maxStackSize = 4;
  });
  event.modify('minecraft:enchanted_golden_apple', item => {
    item.maxStackSize = 1;
  });
});

StartupEvents.postInit((_event) => {
  Platform.mods.kubejs.name = 'RAD 3';
});
