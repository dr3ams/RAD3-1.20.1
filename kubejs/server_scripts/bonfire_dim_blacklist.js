
BlockEvents.placed("bonfires:ash_bone_pile", event =>{
    const {level, entity, player, server, block} = event
    let dim = String(level.getDimension())
    if (!((dim == "bloodmagic:dungeon") || (dim == "lrdynamicdungeon:dungeon_dimension") || (dim == "dimdungeons:dungeon_dimension"))){return}
    player.setStatusMessage("Bonfires can't be placed here.")
    event.cancel()
})

global["SpellResolveEvent$Pre"] = function(event) {
    const {resolver, world, shooter, spell, context} = event
    
    let dim = String(world.getDimension())
    if (!((dim == "bloodmagic:dungeon") || (dim == "lrdynamicdungeon:dungeon_dimension") || (dim == "dimdungeons:dungeon_dimension"))){return}

    spell.recipe.forEach(entry => {
        if (entry.getName() == "Place Block") {
            if (shooter.isPlayer()) {
                shooter.setStatusMessage("Place block can't be used here.")
            }
            event.setCanceled(true)
        }
    })
}