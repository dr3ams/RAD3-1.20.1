ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:scroll_exp') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/experience add ${event.player.username} 20 points`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }

//END	
})

ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:spawnercore') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/experience add ${event.player.username} 25 points`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
})