ServerEvents.recipes(event => {
    
    // 1. Define all the tags you want to support
    const EQUIPMENT_TAGS = [
        '#forge:tools/swords',
        '#forge:armors',
        '#forge:tools/pickaxes',
        '#forge:tools/axes',
		'#forge:shields',
		'#c:shields',
		'#c:swords',
		'#skilltree:melee_weapon'
    ]
    
    const MATERIAL = 'minecraft:gold_ingot'

    // 2. Loop through each tag
    EQUIPMENT_TAGS.forEach(tagName => {
        let itemsInTag = Ingredient.of(tagName).getItemIds()
        
        // 3. Loop through every item in that tag
        itemsInTag.forEach(itemId => {
            event.shapeless(
                Item.of(itemId), // Result
                [
                    Item.of(itemId), // Input
                    MATERIAL
                ]
            )
            .modifyResult((grid, result) => {
                // 4. STRICT 3x3 Crafting Table Check
                if (grid.width < 3) {
                    return Item.empty 
                }

                // 5. Copy NBT (Enchants/Damage) from the grid
                let inputItem = grid.find(Item.of(itemId))
                return inputItem ? inputItem.copy() : result
            })
        })
    })
})