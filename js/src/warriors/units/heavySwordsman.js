const HeavySwordsmanWarriorSTATS = {
    maxHp: 50,
    armor: 5,
    spriteRow: 2,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 400,
    attackWinddown: 400,
    attackCooldown: 1500,
    minAttack: 8,
    maxAttack: 15,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE,
    speed: DEFAULT.UNIT_SPEED * 0.80,
    range: DEFAULT.UNIT_MELEE_RANGE * 1.1
};

class HeavySwordsmanWarrior extends Warrior {
    constructor() {
        super(HeavySwordsmanWarriorSTATS);
    }
}
