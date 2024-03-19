const DRYGMY_UUID = "[I;1946194541,268914259,-2012236738,1743961897]";
const onlyDrygmy = (builder) => builder
    .matchKiller(entity => 
        entity.nbt(`{UUID:${DRYGMY_UUID}}`)
    );

ServerEvents.tags("entity_type", event => {
    event.add("ars_nouveau:jar_blacklist", [
        "#forge:bosses",
    ]);

    event.add("ars_nouveau:drygmy_blacklist",[
        "#forge:bosses",
        "artifacts:mimic",
        /occultism:.+/,
        "friendsandfoes:illusioner",
        "friendsandfoes:iceologer",
        "minecraft:evoker"
        

    ])
})

LootJS.modifiers(event => {
    onlyDrygmy(event.addLootTableModifier("apotheosis:entity/treasure_goblin"))
        .removeLoot(/.*/);
});