// requires: aether
// requires: create

ClientEvents.lang('en_us', event => {

  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:globe')
      .addSummary('Display a randomly generated blocky world that is unique to your current seed')
      .addBehaviour([
	    'Acquisition',
        'In shipwrecks or sold by the wandering trader'
      ])
	  .addBehaviour([
	    'On interaction',
        'It will spin and display the current world coordinates'
      ])
	  .addBehaviour([
	    'Spin once powered by redstone',
        'Can give off a comparator output that depends on the current face'
      ])
      .build()
	)
	
})