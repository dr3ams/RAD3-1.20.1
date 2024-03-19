ServerEvents.loaded(event => {
    let server = event.server;
    if(server.persistentData.contains("setGameRules")) return;
    server.runCommandSilent('gamerule refillCooldown 360');
    server.runCommandSilent('gamerule playersSleepingPercentage 25');
    server.runCommandSilent('gamerule disableElytraMovementCheck true');
    server.runCommandSilent('gamerule globalSoundEvents false');
    server.runCommandSilent('gamerule announceAdvancements false');
    server.runCommandSilent('gamerule naturalRegeneration false');
    server.persistentData.setGameRules = true;
});