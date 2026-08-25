---
navigation:
  parent: custom-systems/custom-systems-index.md
  title: Spawner Extraction
  icon: minecraft:spawner
  position: 2
---

# Spawner Extraction

The Spawner Extraction system lets you capture a working spawner from the world and relocate it. This requires specific tools and conditions — you cannot simply mine a spawner and move it.

## Requirements

You need a **Spawner Extractor** — a custom tool crafted for this purpose. Check JEI for the recipe.

The spawner must also meet a condition before extraction is possible: it must have a **low remaining spawn count** (close to burning out from the [Ageing Spawners](../world/spawners.md) mechanic). A spawner with most of its 20 spawns remaining cannot be extracted. Let it run down first.

## Extraction Process

1. Engage the spawner room and let the spawner burn through most of its spawn pool
2. Once the spawner is near burnout, hold your Spawner Extractor and right-click the spawner
3. A successful extraction removes the spawner from the world and places it in your inventory as a **Captured Spawner** item containing the mob type

The extraction has a chance to fail if the spawner still has too many spawns remaining. The lower the remaining count, the higher the success chance.

## Placing an Extracted Spawner

Right-click a **Captured Spawner** on any solid surface to place it as a functional spawner. The placed spawner retains the mob type from the original.

Placed spawners follow the same burnout rules as natural ones — 20 spawns total before they deactivate permanently. You are relocating a finite resource, not creating a renewable one.

## Use Cases

- Move a rare or exotic mob spawner closer to your base for targeted farming
- Relocate a Blaze or Skeleton spawner to a more convenient position for XP farming before it expires
- Capture a spawner type unavailable in a dimension you can access easily

See also: [Spawners](../world/spawners.md) — [Dungeon Raid](dungeon-raid.md)
