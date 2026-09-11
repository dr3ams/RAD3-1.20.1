#damage resistance reduced to 50% if all crystals are broken
execute unless data entity @s ForgeCaps."l2hostility:traits".traits."l2hostility:adaptive" run attribute @s l2damagetracker:damage_reduction modifier add b062b1f7-f545-4e06-9510-334d11717837 "No End Crystals" 0.5 add

#adaptive check; remove adaptive stacks and take full damage if all crystals are broken because having both was annoying
execute if data entity @s ForgeCaps."l2hostility:traits".traits."l2hostility:adaptive" run attribute @s l2damagetracker:damage_reduction modifier add b062b1f7-f545-4e06-9510-334d11717837 "No End Crystals" 1.0 add
execute unless entity @s[tag=nocrystals] run data remove entity @s ForgeCaps."l2hostility:traits".data."l2hostility:adaptive"

execute unless entity @s[tag=nocrystals] run tag @s add shield_broken

execute unless entity @s[tag=nocrystals] run playsound minecraft:block.respawn_anchor.deplete hostile @a[distance=..64] ~ ~ ~ 8 0.5 0.9
tag @s add nocrystals