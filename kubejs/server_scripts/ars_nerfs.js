ItemEvents.rightClicked('ars_nouveau:spell_crossbow', event => {
    const { item, player, level } = event

    let isCharged = item.nbt && item.nbt.Charged == 1

    if (!isCharged) return

	//basic fail chance
    let failChance = 0.15 
    
	//with multishot
    if (item.enchantments.hasOwnProperty('minecraft:multishot')) {
        failChance += 0.15
    }
    
	//with crescendo
    if (item.enchantments.hasOwnProperty('apotheosis:crescendo')) {
        let enchLevel = item.enchantments['apotheosis:crescendo']
        failChance += (0.10 * enchLevel) 
    }

    if (Math.random() < failChance) {
        player.setStatusMessage(Text.yellow('Crossbow malfunction, shot failed'))
		level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:entity.item.break', 'players', 1.0, 1.0);
        
		item.nbt.Charged = 0
		item.nbt.remove('ChargedProjectiles')
		event.cancel()
		
        player.swing()		
    }
})

const minMana = 100;

const casterTomes = [
    'ars_elemental:fire_caster_tome',
    'ars_elemental:water_caster_tome',
    'ars_elemental:air_caster_tome',
    'ars_elemental:earth_caster_tome',
    'ars_elemental:anima_caster_tome',
    'ars_elemental:manipulation_caster_tome',
    'ars_nouveau:caster_tome'
]

ItemEvents.rightClicked(event =>{
    const {hand, item, target, entity} = event
    //console.log(hand,item,target,entity)
    if (!entity.isPlayer()) return
    if (casterTomes.indexOf(item.getId()) >= 0){
        if (entity.getAttributeTotalValue("ars_nouveau:ars_nouveau.perk.max_mana") <= minMana) event.cancel()
    }
})
