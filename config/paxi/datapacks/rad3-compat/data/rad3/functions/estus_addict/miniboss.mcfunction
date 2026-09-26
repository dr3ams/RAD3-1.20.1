scoreboard players add @s effect_roll 3
data modify entity @s ArmorItems[0] set from entity @p Inventory[{Slot:100b}]
data modify entity @s ArmorItems[1] set from entity @p Inventory[{Slot:101b}]
data modify entity @s ArmorItems[2] set from entity @p Inventory[{Slot:102b}]
data modify entity @s ArmorItems[3] set from entity @p Inventory[{Slot:103b}]
stopsound @a[distance=..48] music
playsound mowziesmobs:music.ferrous_wroughtnaut_theme music @a[distance=..48] ~ ~ ~ 1 1.25 1
hostility mobs @s trait set l2hostility:counter_strike 1