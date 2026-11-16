// priority: 0
// client_scripts/class_focuses_tooltip.js
// Lore lines in the same style as Vanilla Focus / Way of the Archer:
// grey italic flavour line, then one gold / green / red bullet each.

ItemEvents.tooltip(event => {
    event.add('kubejs:berserker_focus', [
        Text.gray('For those who would rather die swinging.').italic(),
        Text.gold(' ▪ Turns every fight into a brawl you win by bleeding the enemy first.'),
        Text.green(' ▪ Greatly improves melee damage, speed and life steal.'),
        Text.red(' ▪ Fragile, barely heals, no shielding, no mana.')
    ]);

    event.add('kubejs:shadow_focus', [
        Text.gray('For those who are never where the blade lands.').italic(),
        Text.gold(' ▪ Strike first, strike critically, and be gone.'),
        Text.green(' ▪ Critical hits, dodging, speed and an extra roll.'),
        Text.red(' ▪ Paper-thin: low health, weak armor, no shielding, no mana.')
    ]);
	
	event.add('kubejs:blood_pact_focus', [
        Text.gray('A debt that is paid in other people\'s blood.').italic(),
        Text.gold(' ▪ Heal by hurting. The sun is no longer your friend.'),
        Text.green(' ▪ Strong life steal, bonus damage, and overheal into absorption.'),
        Text.red(' ▪ You burn in daylight, always hunger, barely heal, no shielding, no mana.')
    ]);

    event.add('kubejs:wayfarer_focus', [
        Text.gray('The road is the only weapon worth carrying.').italic(),
        Text.gold(' ▪ Built to go everywhere and fight nothing.'),
        Text.green(' ▪ Fast, tireless on foot and in water, climbs steps, gains more experience.'),
        Text.red(' ▪ Barely any damage, fragile, tiring to swing, no mana.')
    ]);

    event.add('kubejs:delver_focus', [
        Text.gray('Everything worth having is buried.').italic(),
        Text.gold(' ▪ Mine faster, reach further, and see in the dark below the surface.'),
        Text.green(' ▪ Huge mining speed, long reach, better luck, night vision underground.'),
        Text.red(' ▪ Weak in a fight, slower on your feet, no mana.')
    ]);

    event.add('kubejs:last_stand_focus', [
        Text.gray('Hold the line. It is all you have left.').italic(),
        Text.gold(' ▪ Near death, you become something dangerous.'),
        Text.green(' ▪ At low health: Strength, Resistance and Speed. Armor and dodge always.'),
        Text.red(' ▪ Low maximum health, poor healing, no shielding, no mana.')
    ]);
	
    event.addAdvanced('kubejs:gambler_focus', (item, advanced, text) => {
        let g = null;
        try {
            let m = /GamblerData:'([^']*)'/.exec(String(item.nbt));
            if (m) g = JSON.parse(m[1]);
        } catch (e) {}
        let rolled = g != null;
        let i = 1;

        text.add(i++, Text.gray('Fortune favours the bold. Fate does not care.').italic());

        if (!rolled) {
            text.add(i++, Text.yellow(' ▪ Equip to cast the dice.'));
        } else {
            if (g.j) text.add(i++, Text.gold(' ★ JACKPOT — one extra boon').bold());
            else if (g.s) text.add(i++, Text.red(' ☠ SNAKE EYES — one extra bane').bold());
            else text.add(i++, Text.gold(' ▪ The dice are cast. Fate is sealed.'));
        }

            text.add(i++, Text.green(' ▪ Always grants +3 Luck.'));
            text.add(i++, Text.green(' ▪ Rolls 3 random boons.'));
            text.add(i++, Text.red(' ▪ Rolls 3 random banes.'));
            text.add(i++, Text.darkGray(' ▪ 5% jackpot (+1 boon), 5% snake eyes (+1 bane).'));
    });
	
});
