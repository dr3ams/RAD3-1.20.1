summon cataclysm:void_howitzer ~1 ~ ~1 {LeftOwner:0b,Tags:["dragon_howitzer_se"],Owner:[I;0,0,0,0],Motion:[0.7,-0.5,0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_se] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~1 ~ ~-1 {LeftOwner:0b,Tags:["dragon_howitzer_ne"],Owner:[I;0,0,0,0],Motion:[0.7,-0.5,-0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_ne] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~-1 ~ ~-1 {LeftOwner:0b,Tags:["dragon_howitzer_nw"],Owner:[I;0,0,0,0],Motion:[-0.7,-0.5,-0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_nw] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~-1 ~ ~1 {LeftOwner:0b,Tags:["dragon_howitzer_sw"],Owner:[I;0,0,0,0],Motion:[-0.7,-0.5,0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_sw] Owner set from entity @s UUID