const WizardWarriorSTATS = {
    maxHp: 15,
    armor: 0,
    spriteRow: 6,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE,
    attackWindup: 500,
    attackWinddown: 800,
    attackCooldown: 3500, 
    minAttack: 5,
    maxAttack: 10,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE,
    speed: DEFAULT.UNIT_SPEED * 1, 
    range: DEFAULT.UNIT_RANGED_RANGE, 
    accuracy: 0.95,
    projectileClass: null
};

class WizardWarrior extends MeleeWarrior {
    constructor() {
        super(WizardWarriorSTATS);
    }
}
