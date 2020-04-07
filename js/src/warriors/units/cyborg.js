const CyborgWarriorSTATS = {
    maxHp: 80,
    armor: 5,
    spriteRow: 13,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 1.6,
    attackWindup: 300,
    attackWinddown: 900,
    attackCooldown: 4000, 
    minAttack: 9,
    maxAttack: 15,
    speed: DEFAULT.UNIT_SPEED * 0.7, 
    range: DEFAULT.UNIT_RANGED_RANGE * 0.35, 
    projectileClass: null
};

class CyborgWarrior extends Warrior {
    constructor() {
        super(CyborgWarriorSTATS);
    }
}
