global.drygmy_blacklist = []
global.threads = []

global.createPonderEmbersMultiblock = (scene, type, height, aetherworks) => {
    const modId = aetherworks ? 'aetherworks' : 'embers';
    scene.world.setBlocks([3, height, 1], `${modId}:${type}_edge`);
    scene.world.setBlocks([2, height, 1], `${modId}:${type}_edge`);
    scene.world.setBlocks([1, height, 1], `${modId}:${type}_edge`);

    scene.world.setBlocks([3, height, 2], `${modId}:${type}_edge`);
    scene.world.setBlocks([2, height, 2], `${modId}:${type}`);
    scene.world.setBlocks([1, height, 2], `${modId}:${type}_edge`);

    scene.world.setBlocks([3, height, 3], `${modId}:${type}_edge`);
    scene.world.setBlocks([2, height, 3], `${modId}:${type}_edge`);
    scene.world.setBlocks([1, height, 3], `${modId}:${type}_edge`);

    scene.world.modifyBlock([3, height, 3], () => Block.id(`${modId}:${type}_edge`).with("edge", "southeast"), false);
    scene.world.modifyBlock([2, height, 3], () => Block.id(`${modId}:${type}_edge`).with("edge", "south"), false);
    scene.world.modifyBlock([1, height, 3], () => Block.id(`${modId}:${type}_edge`).with("edge", "southwest"), false);

    scene.world.modifyBlock([3, height, 2], () => Block.id(`${modId}:${type}_edge`).with("edge", "east"), false); 

    scene.world.modifyBlock([1, height, 2], () => Block.id(`${modId}:${type}_edge`).with("edge", "west"), false);

    scene.world.modifyBlock([3, height, 1], () => Block.id(`${modId}:${type}_edge`).with("edge", "northeast"), false);
    scene.world.modifyBlock([2, height, 1], () => Block.id(`${modId}:${type}_edge`).with("edge", "north"), false);
    scene.world.modifyBlock([1, height, 1], () => Block.id(`${modId}:${type}_edge`).with("edge", "northwest"), false);
}

global.showPonderLayer = (scene, speed, height, exclude) => {
    for (let x = 0; x <= 5; x++) {
        for (let z = 0; z <= 5; z++) {
            if (!exclude || !(x == exclude.x && z == exclude.z)) scene.world.showSection([x, height, z], Facing.DOWN);
            
        }
        if (speed > 0) scene.idle(speed);
    }
}
