const SkeletonWarriorSTATS = {
    maxHp: 20,
    armor: 0,
    spriteRow: 12,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 500,
    attackWinddown: 400,
    attackCooldown: 1500, 
    minAttack: 3,
    maxAttack: 8,
    speed: DEFAULT.UNIT_SPEED * 0.6, 
    range: DEFAULT.UNIT_MELEE_RANGE * 0.8
};

class SkeletonWarrior extends Warrior {
    constructor() {
        super(SkeletonWarriorSTATS);
    }
}
