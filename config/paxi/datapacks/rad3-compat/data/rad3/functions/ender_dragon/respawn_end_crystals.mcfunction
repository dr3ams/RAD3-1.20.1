stopsound @a[distance=..500] music
playsound quark:music.endermosh music @a[distance=..500] ~ ~ ~ 50 0.75 0.25
execute as @e[type=marker,tag=ender_dragon_crystal_location] at @s unless entity @e[type=end_crystal,distance=..5] run summon end_crystal ~ ~ ~ {ShowBottom:1b,Tags:["dragon_rage_crystal"]}
execute as @e[type=marker,tag=ender_dragon_crystal_location] at @s run fill ~4 ~4 ~4 ~-4 ~-3 ~-4 iron_bars replace air
execute as @e[type=marker,tag=ender_dragon_crystal_location] at @s run fill ~3 ~3 ~3 ~-3 ~-3 ~-3 air replace iron_bars
execute as @e[type=marker,tag=ender_dragon_crystal_location] at @s run fill ~4 ~-4 ~4 ~-4 ~-4 ~-4 quark:grate replace air