// priority: 10

//Quest Book should answer most of your questions, guide you or will tell you what to do if you get lost. 
//You can access it from the item or in the upper-left corner of your inventory screen.

//By completing quests you will gain useful resources and Quest Coins which then can be exchanged in the dedicated quest chapter for useful resources.

//If you have any issues or suggestions - visit pack's github page. 

//We also have a discord where you can communicate, ask questions or search for answers.

PlayerEvents.chat((event) => {
  let { player, message, server } = event;
  server.tell([Text.yellow(player.displayName), " ", Text.gray("»"), " ", Text.white(message)]);
  event.cancel();
});

PlayerEvents.loggedIn(event => {
  if (!event.player.persistentData.contains('firstjoin')) 
  {
    event.player.persistentData.putBoolean('firstjoin', true)

      event.player.tell([
        Component.of('Welcome to Roguelike Adventures and Dungeons 3\n').gold(),
		Component.of('The '),
        Component.of('Quest Book ').green(),
        Component.of('should answer most of your questions, '),
        Component.of('guide you ').yellow(),
		Component.of('or tell you what to do if you get lost.'),
        Component.of('You can access it from the item or in the upper-left corner of your inventory screen.\n'),
		
        Component.of('By completing '),
        Component.of('quests ').green(),
        Component.of('you will be awarded useful resources and '),
        Component.of('Quest Coins ').gold(),
        Component.of('which then can be exchanged in '),
		Component.of('The Market ').gold(),
		Component.of('quest chapter for '),
        Component.of('useful resources.\n').yellow(),
		
        Component.of('For issues or suggestions - '),
		Component.of('[github] ')
		  .clickOpenUrl('https://github.com/dr3ams/RAD3-1.20.1')
          .hover('Opens Roguelike Adventures and Dungeons 3 Github')
          .aqua(),
		
        Component.of('Communicate, ask questions or search for answers - '),
		Component.of('[discord] ')
		  .clickOpenUrl('https://discord.com/invite/dreams-modpacks-512339624627011586')
          .hover('Click to visit our Discord server.')
          .aqua(),
		  
        Component.of('Thank you for playing!').green(),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
      ])

  } else if (event.player.persistentData.contains('firstjoin')) 
  {
    event.player.tell([
      Component.of('Welcome back!\n').bold().green(),
		
        Component.of('For issues or suggestions - '),
		Component.of('[github]\n')
		  .clickOpenUrl('https://github.com/dr3ams/RAD3-1.20.1')
          .hover('Opens Roguelike Adventures and Dungeons 3 Github')
          .aqua(),
		
        Component.of('Communicate, ask questions or search for answers - '),
		Component.of('[discord]\n')
		  .clickOpenUrl('https://discord.com/invite/dreams-modpacks-512339624627011586')
          .hover('Click to visit our Discord server.')
          .aqua(),
		  
        Component.of('Thank you for playing!').green()
    ])

  }
})



