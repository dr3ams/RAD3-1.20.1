LootJS.modifiers(event => {
	// keeping this as an example for future use
    //event.addBlockLootModifier(['occultism:silver_ore', 'occultism:silver_ore_deepslate'])
    //    .replaceLoot('occultism:raw_silver', 'embers:raw_silver', true)
    //    .replaceLoot('occultism:silver_ore', 'embers:silver_ore', true)
    //    .replaceLoot('occultism:silver_ore_deepslate', 'embers:deepslate_silver_ore', true);
	
	event
	.addLootTypeModifier(LootType.ENTITY)
	.removeLoot("bonfires:ash_pile");
	
	
	
})