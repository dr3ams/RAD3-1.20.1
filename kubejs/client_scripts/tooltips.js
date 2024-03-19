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
})