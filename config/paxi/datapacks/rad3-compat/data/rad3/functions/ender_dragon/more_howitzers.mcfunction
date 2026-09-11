summon cataclysm:void_howitzer ~1 ~ ~1 {LeftOwner:0b,Tags:["dragon_howitzer_e"],Owner:[I;0,0,0,0],Motion:[0.7,-0.5,0.0]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_e] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~1 ~ ~-1 {LeftOwner:0b,Tags:["dragon_howitzer_n"],Owner:[I;0,0,0,0],Motion:[0.0,-0.5,-0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_n] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~-1 ~ ~-1 {LeftOwner:0b,Tags:["dragon_howitzer_w"],Owner:[I;0,0,0,0],Motion:[-0.7,-0.5,0.0]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_w] Owner set from entity @s UUID
summon cataclysm:void_howitzer ~-1 ~ ~1 {LeftOwner:0b,Tags:["dragon_howitzer_s"],Owner:[I;0,0,0,0],Motion:[0.0,-0.5,0.7]}
data modify entity @e[type=cataclysm:void_howitzer,limit=1,sort=nearest,tag=dragon_howitzer_s] Owner set from entity @s UUID