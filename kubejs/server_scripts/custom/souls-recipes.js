ServerEvents.recipes((event) => {

    event.shaped('kubejs:soul_jar', [
        ' N ',
        'SJS',
        ' A '
    ], {
        N: 'minecraft:iron_ingot',
        J: 'supplementaries:jar',
        S: 'minecraft:soul_sand',
        A: 'minecraft:amethyst_shard'
    })
	
    event.shaped('kubejs:book_of_disenchant_lesser', [
        ' L ',
        'GBG',
        ' S '
    ], {
        B: 'minecraft:book',
        G: 'minecraft:grindstone',
        L: 'minecraft:lapis_lazuli',
        S: 'minecraft:soul_soil'
    })

    event.shaped('kubejs:book_of_disenchant_greater', [
        'GDG',
        'LBL',
        ' G '
    ], {
        B: 'kubejs:book_of_disenchant_lesser',
        L: 'minecraft:leather',
        G: 'minecraft:gold_ingot',
        D: 'apotheosis:gem_dust'
    })

    event.shaped('kubejs:tome_of_soul_unraveling', [
        'MPM',
        'CBC',
        ' R '
    ], {
        B: 'minecraft:book',
        P: 'minecraft:phantom_membrane',
        C: 'minecraft:crying_obsidian',
        M: 'minecraft:amethyst_shard',
        R: 'apotheosis:rare_material' 
    })

    event.shaped('kubejs:tome_of_scattered_souls', [
        ' B ',
        'BTB',
        ' B '
    ], {
        T: 'kubejs:tome_of_soul_unraveling',
        B: 'minecraft:book'
    })

    event.shaped('kubejs:tome_of_scattered_souls', [
        'BGB',
        'CEC',
        'BMB',
    ], {
        B: 'minecraft:book',
        G: 'minecraft:ghast_tear',
        C: 'minecraft:crying_obsidian',
        E: 'minecraft:echo_shard',
        M: 'apotheosis:epic_material'
    })
})