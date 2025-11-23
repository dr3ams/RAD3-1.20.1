ServerEvents.tags("worldgen/biome", event=> {
    event.get("c:in_overworld").getObjectIds().forEach(biome => {
        if (!event.get("c:aquatic").getObjectIds().contains(biome)){
            event.add("rad:bonefire_spawn_location", biome)
        }
    })
})