const dropProb = 0.3;

LootJS.modifiers(event => {
    //event.enableLogging();

    event.addLootTableModifier("minecraft:entities/wither_skeleton")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:wither_skeleton_skull'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:wither_skeleton_skull')
            }
        })

    event.addLootTableModifier("minecraft:entities/zombie")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:zombie_head'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:zombie_head')
            }
        })
    event.addLootTableModifier("creeperoverhaul:entities/snowy_creeper", "creeperoverhaul:entities/jungle_creeper", "creeperoverhaul:entities/mushroom_creeper", "creeperoverhaul:entities/ocean_creeper", "creeperoverhaul:entities/beach_creeper", "creeperoverhaul:entities/desert_creeper", "creeperoverhaul:entities/cave_creeper", "creeperoverhaul:entities/hills_creeper", "creeperoverhaul:entities/swamp_creeper", "creeperoverhaul:entities/dark_oak_creeper", "creeperoverhaul:entities/dripstone_creeper", "creeperoverhaul:entities/spruce_creeper", "creeperoverhaul:entities/badlands_creeper", "creeperoverhaul:entities/savannah_creeper", "creeperoverhaul:entities/bamboo_creeper", "minecraft:entities/creeper")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:creeper_head'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:creeper_head')
            }
        })

    event.addLootTableModifier("minecraft:entities/piglin", "minecraft:entities/piglin_brute")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:piglin_head'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:piglin_head')
            }
        })

    event.addLootTableModifier("minecraft:entities/enderman")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('supplementaries:enderman_head'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('supplementaries:enderman_head')
            }
        })
    
    event.addLootTableModifier("minecraft:entities/ender_dragon")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:dragon_head'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:dragon_head')
            }
        })

    event.addLootTableModifier("minecraft:entities/skeleton")
        .matchMainHand("#rad:decapitating")
        .apply(c =>{
            let skull = false
            c.forEachLoot(item =>{
                //console.log(item)
                if (item.equals(Item.of('minecraft:skeleton_skull'))){
                    skull = true
                }
            })
            if (skull) return
            if(Math.random() < dropProb){
                c.addLoot('minecraft:skeleton_skull')
            }
        })
})