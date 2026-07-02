console.info('Curio Slot Limiter Loading...');

const CURIO_LIMIT_CONFIG = {
    'charm': {
        maxCount: 2,
        items: [
            'l2complements:eternal_totem_of_dream', 
            'celestial_artifacts:holy_talisman', 
            'celestial_artifacts:cursed_totem', 
            'celestial_artifacts:undead_charm', 
            'celestial_artifacts:soul_box'
        ]
    }
	// add more slot types here, e.g.:																		 
};

// --- CAPABILITY ATTACHMENT ---
// attachCuriosCapability + canEquip lets Curios itself reject the equip
// attempt before it happens - the item just stays where it was
ItemEvents.modification(event => {				 
    Object.keys(CURIO_LIMIT_CONFIG).forEach(slotType => {
        let limitConfig = CURIO_LIMIT_CONFIG[slotType];

        limitConfig.items.forEach(itemId => {
            // The correct syntax uses a callback to expose the ItemBuilder
            event.modify(itemId, item => {
                item.attachCuriosCapability(
                    CuriosJSCapabilityBuilder.create()
                        .canEquip((slotContext, stack) => canEquipWithLimit(slotContext, stack, slotType, limitConfig))
                );
            });
        });
    });
});

// --- LIMIT CHECK ---
function canEquipWithLimit(slotContext, stack, slotType, limitConfig) {
    let player = slotContext.entity();
    let equippingIndex = slotContext.index(); 

    let count = 0;
    try {
        let CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
        let inventoryOpt = CuriosApi.getCuriosInventory(player);

        if (inventoryOpt.isPresent()) {
            let curiosInv = inventoryOpt.resolve().get();
            let slotInventory = curiosInv.getCurios().get(slotType);

            if (slotInventory) {
                let stacks = slotInventory.getStacks();
																			  
																			  
                for (let i = 0; i < stacks.getSlots(); i++) {
                    if (i === equippingIndex) continue;
                    let existing = stacks.getStackInSlot(i);
                    if (!existing.isEmpty() && limitConfig.items.includes(existing.id)) {
                        count++;
                    }
                }
            }
        }
    } catch (err) {
        console.error('Curio Limit Check Failed: ' + err);
        return true; 
    }

    if (count >= limitConfig.maxCount) {
        if (player && player.tell && !player.level.isClientSide()) {
            player.tell(Text.of("Your spirit strains... You cannot bear the resonance of another such artifact.").gold().italic());

            player.level.playSound(null, player.blockX, player.blockY, player.blockZ, 'minecraft:block.enchantment_table.use', 'players', 1.0, 1.0);
        }
        return false;
    }

    return true;
}