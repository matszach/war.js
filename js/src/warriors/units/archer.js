const ArcherWarriorSTATS = {
    maxHp: 25,
    armor: 0,
    spriteRow: 5,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 800,
    attackWinddown: 500,
    attackCooldown: 2500, 
    minAttack: 3,
    maxAttack: 6,
    speed: DEFAULT.UNIT_SPEED * 1, 
    range: DEFAULT.UNIT_RANGED_RANGE, 
    projectileClass: null
};

class ArcherWarrior extends Warrior {
    constructor() {
        super(ArcherWarriorSTATS);
    }
}
