// priority: 0

console.info('curio registry loaded)')

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
    event.modify('relics:leather_belt', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "skilltree:blocking",
                    "identifier",
                    -0.2,
                    'multiply_base'
                )
        )
    })
    event.modify('relics:rage_glove', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "skilltree:evasion",
                    "identifier",
                    -0.5,
                    'multiply_base'
                )
                .addAttribute(
                    "skilltree:stealth",
                    "identifier",
                    -0.5,
                    'multiply_base'
                )
        )
    })
    event.modify('l2hostility:curse_of_pride', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "shieldinghealth:attribute.shieldinghealth.shield_value",
                    "identifier",
                    -1,
                    'multiply_base'
                )
        )
    })
    event.modify('l2hostility:curse_of_wrath', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "attributeslib:healing_received",
                    "identifier",
                    -0.25,
                    'multiply_base'
                )
        )
    })
})



StartupEvents.registry('item', event => {
    event.create('builder_focus')
	    .maxStackSize(1)
		.tag('curios:an_focus')
		.tag('rad3:artifacts')
		.displayName('Builder Focus').color('gold')
		.rarity('Uncommon')
        .texture('kubejs:item/crafterfp')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "ars_nouveau:ars_nouveau.perk.max_mana",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    -1,
                    'multiply_total'
                )
                .addAttribute(
                    "ars_nouveau:ars_nouveau.perk.mana_regen",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    -1,
                    'multiply_total'
                )
                .addAttribute(
                    "attributeslib:healing_received",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    1,
                    'multiply_base'
                )
                .addAttribute(
                    "forge:block_reach",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    2,
                    'addition'
                )
                .addAttribute(
                    "attributeslib:mining_speed",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    4,
                    'multiply_base'
                )
        )

    event.create('archer_focus')
	    .maxStackSize(1)
		.tag('curios:an_focus')
		.tag('rad3:artifacts')
		.displayName('Archer Focus').color('gold')
		.rarity('Uncommon')
        .texture('kubejs:item/roguefp')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "attributeslib:arrow_damage",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    1,
                    'multiply_base'
                )
                .addAttribute(
                    "attributeslib:arrow_velocity",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    1,
                    'multiply_base'
                )
                .addAttribute(
                    "attributeslib:draw_speed",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    0.5,
                    'multiply_base'
                )
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    -1,
                    'multiply_total'
                )
        )

    event.create('mage_focus')
	    .maxStackSize(1)
		.tag('curios:an_focus')
		.tag('rad3:artifacts')
		.displayName('Combat Mage Focus').color('gold')
		.rarity('Uncommon')
        .texture('kubejs:item/wizardfp')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "ars_nouveau:ars_nouveau.perk.spell_damage",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    5,
                    'multiply_base'
                )
                .addAttribute(
                    "ars_nouveau:ars_nouveau.perk.mana_regen",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    1,
                    'multiply_base'
                )
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "1bc873d2-5603-4f79-9c7e-0bf796abbf99",
                    -1,
                    'multiply_total'
                )
        )

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
