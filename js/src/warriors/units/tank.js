const TankWarriorSTATS = {
    maxHp: 40,
    armor: 8,
    spriteRow: 9,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 1.2,
    attackWindup: 400,
    attackWinddown: 300,
    attackCooldown: 1500, 
    minAttack: 3,
    maxAttack: 8,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE * 1.2,
    speed: DEFAULT.UNIT_SPEED * 0.7, 
    range: DEFAULT.UNIT_MELEE_RANGE
};

class TankWarrior extends MeleeWarrior {
    constructor() {
        super(TankWarriorSTATS);
    }
}
