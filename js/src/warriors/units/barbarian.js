const BarbarianWarriorSTATS = {
    maxHp: 50,
    armor: 0,
    spriteRow: 8,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 1.1,
    attackWindup: 200,
    attackWinddown: 200,
    attackCooldown: 700, 
    minAttack: 3,
    maxAttack: 5,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE * 1.1,
    speed: DEFAULT.UNIT_SPEED * 1.3, 
    range: DEFAULT.UNIT_MELEE_RANGE * 0.9
};

class BarbarianWarrior extends Warrior {
    constructor() {
        super(BarbarianWarriorSTATS);
    }
}
