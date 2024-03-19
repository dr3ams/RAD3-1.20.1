const wood = [
    'minecraft:mangrove_planks',
    'minecraft:warped_planks',
    'minecraft:crimson_planks',
    'minecraft:dark_oak_planks',
    'minecraft:acacia_planks',
    'minecraft:jungle_planks',
    'minecraft:birch_planks',
    'minecraft:spruce_planks',
    'minecraft:oak_planks',
    'quark:blossom_planks',
    'quark:azalea_planks',
    'quark:ancient_planks',
    'minecraft:cherry_planks',
    'minecraft:bamboo_planks'
]


ServerEvents.recipes(event =>{
    event.remove({output: /quark:+((?!(purpur))(?!(prismarine))(?!(nether_brick)).)+_chest/})

    wood.forEach(woodType => {
        let woodid = woodType.split(":")
        woodid = woodid[1].split("_planks", 1)
        event.shapeless("quark:" + woodid +"_chest", ["#forge:chests", woodType])
        event.shapeless("quark:" + woodid +"_trapped_chest", ["quark:" + woodid + "_chest", 'minecraft:tripwire_hook'])
    })


    event.shaped('minecraft:chest', [
        'aaa',
        'a a',
        'aaa'
    ],{
        a: '#minecraft:planks'

    })
    event.shaped('4x minecraft:chest', [
        'aaa',
        'a a',
        'aaa'
    ],{
        a: '#minecraft:logs'

    })
})