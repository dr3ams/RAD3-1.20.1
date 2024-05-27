

ServerEvents.recipes(event =>{
	// keeping this as an example for future use
    //event.replaceInput({condition: true},'occultism:raw_silver' , 'embers:raw_silver')
    //event.replaceOutput({condition: true},'occultism:raw_silver' , 'embers:raw_silver')

    event.blasting('embers:silver_ingot', '#forge:ores/silver')
    event.smelting('embers:silver_ingot', '#forge:ores/silver')
})