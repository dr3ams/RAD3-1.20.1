//I have no idea how this works. Big thank you to @vomiter on the Kubejs discord for writing this script for me.

EntityEvents.drops(event => {
    const {drops} = event
    drops.forEach(drop => {
        if(drop.item.id == 'bonfires:ash_pile'){
            drop.remove("discarded")
        }
    })
})