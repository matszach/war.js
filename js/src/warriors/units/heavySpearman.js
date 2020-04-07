const HeavySpearmanWarriorSTATS = {
    maxHp: 40,
    armor: 4,
    spriteRow: 4,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 500,
    attackWinddown: 500,
    attackCooldown: 2000,
    minAttack: 6,
    maxAttack: 12,
    speed: DEFAULT.UNIT_SPEED * 0.85,
    range: DEFAULT.UNIT_MELEE_RANGE * 1.5
};

class HeavySpearmanWarrior extends Warrior {
    constructor() {
        super(HeavySpearmanWarriorSTATS);
    }
}
