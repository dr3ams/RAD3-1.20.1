stopsound @a[distance=..48] music
playsound undergarden:music.disc.mammoth music @a[distance=..48] ~ ~ ~ 15 2 1
hostility mobs @s trait set l2hostility:speedy 5
hostility mobs @s trait set l2hostility:counter_strike 1
hostility mobs @s trait set l2hostility:dispell 3
hostility mobs @s trait set l2hostility:killer_aura 1
damage @s 1 minecraft:explosion by @s
summon item ~4 ~ ~4 {Invulnerable:1,Item:{id:"supplementaries:bomb",Count:3},Glowing:1,Motion:[0.0d,0.25d,0.0d]}
summon item ~-4 ~ ~-4 {Invulnerable:1,Item:{id:"supplementaries:bomb",Count:3},Glowing:1,Motion:[0.0d,0.25d,0.0d]}
summon item ~4 ~ ~-4 {Invulnerable:1,Item:{id:"supplementaries:bomb",Count:3},Glowing:1,Motion:[0.0d,0.25d,0.0d]}
summon item ~-4 ~ ~4 {Invulnerable:1,Item:{id:"supplementaries:bomb",Count:3},Glowing:1,Motion:[0.0d,0.25d,0.0d]}