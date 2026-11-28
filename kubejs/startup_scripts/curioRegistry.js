// priority: 0

console.info('curio registry loaded')

/* 
	///EXAMPLE
	
StartupEvents.registry('item', event => {
    event.create('test')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.max_health",
                    UUID,
                    20,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.armor",
                        "identifier",
                        20,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:head")
})

ItemEvents.modification(event => {
    event.modify('apple', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.max_health",
                    "identifier",
                    20,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.armor",
                        UUID,
                        20,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
    })
}) */


ItemEvents.modification(event => {
    event.modify('cataclysm:ring_of_grudged', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "attributeslib:crit_damage",
                    "identifier",
                    0.1,
                    'addition'
                )
        )
    })
    event.modify('cataclysm:vitality_ankh', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "attributeslib:healing_received",
                    "identifier",
                    0.2,
                    'addition'
                )
        )
    })
})


StartupEvents.registry('item', event => {

    event.create('roguelite_ring')
	    .maxStackSize(1)
		.tag('curios:ring')
		.tag('rad3:artifacts')
		.displayName('Ring of Rebirth')
		.rarity('Rare')
        .texture('kubejs:item/roguelite_ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "minecraft:generic.max_health",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    4,
                    'addition'
                )
        )
	
///END
})

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'RAD 3'; });
