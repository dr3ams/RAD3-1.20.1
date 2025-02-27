// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('food script started')

ItemEvents.modification(event => {
	
	
	//(effect: ID, duration: int, amplifier: int, probability: float)
  event.modify('kubejs:dust_experience', item => 
	{
    item.foodProperties = food => 
		{
			food
			.effect('nausea', 100, 25, 10)		
			.effect('glowing', 100, 255, 10)		
		}
	})
	
  event.modify('kubejs:dust_alchemical', item => 
	{
    item.foodProperties = food => 
		{
			food
			.effect('nausea', 100, 25, 10)		
			.effect('glowing', 100, 255, 10)
			.effect('darkness', 100, 255, 10)			
		}
	})	


	
})


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
