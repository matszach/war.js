const ArcherWarriorSTATS = {
    maxHp: 25,
    armor: 0,
    spriteRow: 5,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 800,
    attackWinddown: 500,
    attackCooldown: 2500, 
    minAttack: 3,
    maxAttack: 5,
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
