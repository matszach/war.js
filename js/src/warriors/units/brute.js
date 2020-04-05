const BruteWarriorSTATS = {
    maxHp: 100,
    armor: 5,
    spriteRow: 7,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 2,
    attackWindup: 600,
    attackWinddown: 800,
    attackCooldown: 3000, 
    minAttack: 15,
    maxAttack: 21,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE * 2,
    speed: DEFAULT.UNIT_SPEED * 0.7, 
    range: DEFAULT.UNIT_MELEE_RANGE * 1.5
};

class BruteWarrior extends MeleeWarrior {
    constructor() {
        super(BruteWarriorSTATS);
    }
}
