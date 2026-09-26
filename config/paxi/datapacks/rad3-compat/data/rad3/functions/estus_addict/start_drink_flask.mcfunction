execute unless score @s effect_roll matches 1.. run scoreboard players set @s effect_roll 1
data modify entity @s HandItems[0].tag merge value {PreviousItem:""}
data modify entity @s HandItems[0].tag.PreviousItem set from entity @s HandItems[0].id
data modify entity @s HandItems[0].id set value "bonfires:estus_flask"
attribute @s minecraft:generic.movement_speed modifier add b30f89a7-9f75-46f9-8b55-891c0fa38cdc no_move_while_drinking -1 multiply
attribute @s minecraft:generic.attack_damage modifier add b30f89a7-9f75-46f9-8b55-891c0fa38cdc no_attack_while_drinking -1 multiply
scoreboard players set @s cooldown_timer 28
tag @s add drinking_flask

#cooldown_timer is time it takes to finish drinking a flask
#effect_roll is amount of flask charges. Start with 1 by default, reduced by 1 after finishing a drink