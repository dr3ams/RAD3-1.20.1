BlockEvents.modification(event => {
    event.modify('minecraft:spawner', block => {
      block.destroySpeed = 100
      block.explosionResistance = 100
    })
  })