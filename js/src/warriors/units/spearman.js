const SpearmanWarriorSTATS = {
    maxHp: 30,
    armor: 2,
    spriteRow: 3,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 500,
    attackWinddown: 500,
    attackCooldown: 2000, 
    minAttack: 5,
    maxAttack: 10,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE,
    speed: DEFAULT.UNIT_SPEED * 0.95,
    range: DEFAULT.UNIT_MELEE_RANGE * 1.5
};

class SpearmanWarrior extends Warrior {
    constructor() {
        super(SpearmanWarriorSTATS);
    }
}
