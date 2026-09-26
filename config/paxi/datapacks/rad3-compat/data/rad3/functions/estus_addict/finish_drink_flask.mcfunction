data modify entity @s HandItems[0].id set from entity @s HandItems[0].tag.PreviousItem
data remove entity @s HandItems[0].tag.PreviousItem
scoreboard players reset @s cooldown_timer
attribute @s minecraft:generic.movement_speed modifier remove b30f89a7-9f75-46f9-8b55-891c0fa38cdc
attribute @s minecraft:generic.attack_damage modifier remove b30f89a7-9f75-46f9-8b55-891c0fa38cdc
tag @s remove drinking_flask
scoreboard players remove @s effect_roll 1

#Stuff below is only for miniboss variant
execute if score @s[tag=miniboss] effect_roll matches 2 run hostility mobs @s trait set l2hostility:speedy 1
execute if score @s[tag=miniboss] effect_roll matches 1 run hostility mobs @s trait set l2hostility:grenade 1
execute if score @s[tag=miniboss] effect_roll matches 1 run stopsound @a[distance=..48] music
execute if score @s[tag=miniboss] effect_roll matches 1 run playsound cataclysm:monstrosity_music music @a[distance=..48] ~ ~ ~ 1 0.8 1
execute if score @s[tag=miniboss] effect_roll matches 0 run hostility mobs @s trait set l2hostility:speedy 2
execute if score @s[tag=miniboss] effect_roll matches 0 run hostility mobs @s trait set l2hostility:grenade 2