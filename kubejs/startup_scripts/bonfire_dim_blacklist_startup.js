ForgeEvents.onEvent("com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Pre", event=> {
    if(global["SpellResolveEvent$Pre"]){
        global["SpellResolveEvent$Pre"](event)
    }
})