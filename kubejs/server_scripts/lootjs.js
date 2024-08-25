LootJS.modifiers(event => {
	
	const lootsize = 9;//amount of unique item stacks that will be allowed to generate from a loot table (item stacks can an item with a count so a stack of 6 bones for instance)
	
	
	// keeping this as an example for future use
    //event.addBlockLootModifier(['occultism:silver_ore', 'occultism:silver_ore_deepslate'])
    //    .replaceLoot('occultism:raw_silver', 'embers:raw_silver', true)
    //    .replaceLoot('occultism:silver_ore', 'embers:silver_ore', true)
    //    .replaceLoot('occultism:silver_ore_deepslate', 'embers:deepslate_silver_ore', true);
	
	event.addLootTypeModifier(LootType.CHEST)
    .removeLoot("aether:life_shard")
	
	event
	.addLootTypeModifier(LootType.ENTITY)
	.removeLoot("bonfires:ash_pile");
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("minecraft:overworld") 
	.addLoot(
	LootEntry.of("kubejs:coin_dungeon").when((c) => c.randomChance(0.5)).limitCount([1, 3])
	)
	;
	
	event.addBlockLootModifier('minecraft:spawner')
    .addLoot('kubejs:coin_dungeon')

	event.addLootTypeModifier(LootType.CHEST).anyDimension("aether:the_aether").addLoot(
	LootEntry.of("kubejs:coin_aether").when((c) => c.randomChance(0.6)).limitCount([1, 1])
	);		
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("minecraft:the_nether").addLoot(
	LootEntry.of("kubejs:coin_nether").when((c) => c.randomChance(0.6)).limitCount([1, 1])
	);	
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("minecraft:the_end").addLoot(
	LootEntry.of("kubejs:coin_end").when((c) => c.randomChance(0.6)).limitCount([1, 1])
	);
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("undergarden:undergarden").addLoot(
	LootEntry.of("kubejs:coin_undergarden").when((c) => c.randomChance(0.7)).limitCount([1, 1])
	);	
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("landsoficaria:icaria").addLoot(
	LootEntry.of("kubejs:coin_icaria").when((c) => c.randomChance(0.6)).limitCount([1, 1])
	);	
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("the_bumblezone:the_bumblezone").addLoot(
	LootEntry.of("kubejs:coin_bumblezone").when((c) => c.randomChance(0.7)).limitCount([1, 1])
	);	
	
	//LOOT LIMITER
	let lootlist = new Array();
    event
        .addLootTypeModifier(LootType.CHEST)
        .apply((context)=>{
            if (context.lootSize() > lootsize) {

                lootlist = [];
                context.forEachLoot((loot) =>{
                    lootlist.push(loot);
                })

                context.removeLoot(ItemFilter.ALWAYS_TRUE);
                
                while (lootlist.length > lootsize){
                    let index = Math.floor(Math.random() * lootlist.length);
                    lootlist.splice(index,1);
                }
                lootlist.forEach(item =>{
                    context.addLoot(item);
                })
            }
        })
		

		
//THE END		
})