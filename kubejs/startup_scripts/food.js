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
			.effect('nausea', 200, 0, 1)		
			.effect('glowing', 200, 0, 1)		
		}
	})
	
  event.modify('kubejs:dust_alchemical', item => 
	{
    item.foodProperties = food => 
		{
			food
			.effect('nausea', 200, 0, 1)		
			.effect('glowing', 200, 0, 1)
			.effect('darkness', 200, 0, 1)			
		}
	})	
  event.modify('endrem:witch_pupil', item => 
	{
    item.foodProperties = food => 
		{
			food.hunger(2)
			food.saturation(1)
			food.alwaysEdible()
			food
			.effect('fire_resistance', 3600, 0, 1)
			.effect('invisibility', 3600, 0, 1)
			.effect('jump_boost', 3600, 0, 1)
			.effect('night_vision', 3600, 0, 1)
			.effect('poison', 600, 1, 1)
			.effect('regeneration', 3600, 0, 1)
			.effect('resistance', 3600, 0, 1)
			.effect('slow_falling', 3600, 0, 1)
			.effect('slowness', 600, 1, 1)
			.effect('speed', 3600, 0, 1)
			.effect('strength', 3600, 0, 1)
			.effect('water_breathing', 3600, 0, 1)
			.effect('weakness', 600, 1, 1)
			.effect('quark:resilience', 3600, 0, 1)
		}
	})	


	
})


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
