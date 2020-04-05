const ArcherWarriorSTATS = {
    maxHp: 25,
    armor: 0,
    spriteRow: 5,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 800,
    attackWinddown: 500,
    attackCooldown: 2500, 
    minAttack: 6,
    maxAttack: 12,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE,
    speed: DEFAULT.UNIT_SPEED * 1, 
    range: DEFAULT.UNIT_RANGED_RANGE, 
    accuracy: 0.99,
    projectileClass: null
};

class ArcherWarrior extends MeleeWarrior {
    constructor() {
        super(ArcherWarriorSTATS);
    }
}
