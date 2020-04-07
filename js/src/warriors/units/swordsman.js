const SwordsmanWarriorSTATS = {
    maxHp: 35,
    armor: 3,
    spriteRow: 1,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 400,
    attackWinddown: 400,
    attackCooldown: 1500,
    minAttack: 6,
    maxAttack: 12,
    speed: DEFAULT.UNIT_SPEED * 0.90,
    range: DEFAULT.UNIT_MELEE_RANGE * 1.1
};

class SwordsmanWarrior extends Warrior {
    constructor() {
        super(SwordsmanWarriorSTATS);
    }
}
