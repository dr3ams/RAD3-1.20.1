---
navigation:
  parent: custom-systems/custom-systems-index.md
  title: Dungeon Raid
  icon: kubejs:dungeon_pass
  position: 1
---

# Dungeon Raid

The Dungeon Raid system is a roguelite layer built on top of the LRS Dynamic Dungeon mod. It tracks your performance inside the dungeon dimension, rewards kills and chest looting with Raid Tokens, and maintains a persistent rank progression system that carries across every run.

## Starting a Run

Craft or obtain a **Dungeon Pass** and use it on the dungeon portal to enter. Once inside, everything you do contributes to a shared score pool.

## Scoring

Kills and chest opens both feed score. At the end of a run, score converts to **Raid Tokens**, which are deposited automatically into your **Raid Vault** — not your inventory.

| Action | Score |
|---|---|
| Normal mob kill | 1 pt |
| Miniboss kill | 2 pts |
| Boss kill | 10 pts |
| Chest opened | 4 pts |

Token cap is **32 per run**, regardless of your rank multiplier.

## Rank and XP

XP is earned separately from score: kills give 10 XP, chest opens give 25 XP. XP advances your Rank, with each rank requiring progressively more XP (Rank 1: 1500 XP; Rank 2: +3000 XP; Rank 3: +4500 XP, and so on).

**Rank effects per rank:**
- Token multiplier: +10% (Rank 3 = ×1.3, Rank 5 = ×1.5)
- Mob HP: +5%
- Mob damage: +2%

Higher rank means harder enemies and better token returns. Dying inside the dungeon costs **5% of your within-rank XP progress**, but you can never lose a rank from a single death — your XP floors at the start of your current rank.

## Room Events

Once per run, between 1 and 3 minutes after entry, a random room event fires and lasts 1 minute. It is announced in chat and the action bar.

| Event | Effect |
|---|---|
| ☠ Blood Surge | Nearby mobs gain Strength II |
| ❄ Frozen Dungeon | Player gets Slowness III |
| ⚡ Score Frenzy | Normal kill score is doubled |
| 🔥 Inferno | Player gets Fire Resistance; mobs get Speed II |
| 👁 Cursed Sight | Player gets Blindness |
| 💚 Dungeon's Gift | Player gets Regeneration II |
| ⚡ Haste Surge | Player gets Haste II + Speed II |
| 💀 Darkness Falls | Player gets Darkness |
| ❄ Brittle Mobs | Nearby mobs get Weakness II |
| ★ Elite Surge | All new mob spawns gain +50% HP |

## Chests

Every chest in the dungeon has a **10% chance** of being cursed. Opening a cursed chest applies a random debuff for 2 minutes — but the chest is still lootable. Every chest open also has a **20% chance** to spawn a named **👁 Chest Guardian** on top of the chest. Guardians are drawn from a pool of vanilla hostile mobs.

## Rival Raiders

Higher rank increases the chance of a **Rival Raider** spawning in the dungeon — a player-like NPC that competes with you for kills and score. Deal with them.

## Raid Vault Commands

Tokens accumulate in a virtual vault, not your inventory.

| Command | Description |
|---|---|
| `/raidvault` | Show your current token balance |
| `/raidvault withdraw <amount>` | Move tokens to your inventory as physical items |
| `/raidvault deposit` | Deposit held Raid Token items back into the vault |
| `/raidstats` | Your rank, XP, progress bar, and lifetime stats |
| `/raidhelp` | Quick system overview in chat |

See also: [Dungeon Treasures](../world/dungeon-treasures.md) — [Spawner Extraction](spawner-extraction.md)
