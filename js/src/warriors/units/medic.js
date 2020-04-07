const MedicWarriorSTATS = {
    maxHp: 25,
    armor: 1,
    spriteRow: 10,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 0.9,
    // healing
    attackWindup: 500,
    attackWinddown: 800,
    attackCooldown: 3000, 
    minAttack: 6, 
    maxAttack: 12,
    speed: DEFAULT.UNIT_SPEED * 0.9, 
    range: DEFAULT.UNIT_RANGED_RANGE * 0.3, 
    projectileClass: null
};

class MedicWarrior extends Warrior {

    constructor() {
        super(MedicWarriorSTATS);
    }

    onAttack(myTeam, enemyTeams) {
        if(this.target) {
            let polar = Gmt.cartesianToPolar(this.pos.x - this.target.pos.x, this.pos.y - this.target.pos.y);
            if(polar.r <= this.range) {
                this.target.hp.heal(this.attackInfo.getDmg());
            }
        }
    }

    lockOnTarget(myTeam, enemyTeams) {
        if(!this.target || this.target.hp.asFraction() > 0.75) {
            let newTarget = null;
            let newTargetPriority = 0;
            myTeam.warriors.filter(w => w.hp.alive).forEach(w => {
                let dist = Gmt.Distance.vertices(this.pos, w.pos);
                let missingHp = 1 - w.hp.asFraction();
                let prority = missingHp/dist;
                if(prority >= newTargetPriority) {
                    newTargetPriority = prority;
                    newTarget = w;
                }
            });
            this.target = newTarget;
        } else if(!this.target.hp.alive) {
            this.target = undefined;
        }
        return this.target ? true : false;
    }
}
