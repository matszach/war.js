const MilitiaWarriorSTATS = {
    maxHp: 20,
    armor: 0,
    spriteRow: 0,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 400,
    attackWinddown: 300,
    attackCooldown: 1500, 
    minAttack: 3,
    maxAttack: 8,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE,
    speed: DEFAULT.UNIT_SPEED * 1, 
    range: DEFAULT.UNIT_MELEE_RANGE
};

class MilitiaWarrior extends Warrior {
    constructor() {
        super(MilitiaWarriorSTATS);
    }
}
