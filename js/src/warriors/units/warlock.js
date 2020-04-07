const WarlockWarriorSTATS = {
    maxHp: 35,
    armor: 2,
    spriteRow: 11,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 0.9,
    // ressurection
    attackWindup: 1000,
    attackWinddown: 800,
    attackCooldown: 10000, 
    minAttack: 6, 
    maxAttack: 12,
    speed: DEFAULT.UNIT_SPEED * 0.9, 
    range: DEFAULT.UNIT_RANGED_RANGE * 0.4, 
    projectileClass: null
};

class WarlockWarrior extends Warrior {

    constructor() {
        super(WarlockWarriorSTATS);
    }

    onAttack(myTeam, enemyTeams) {
        if(!!this.target && !this.target.hp.alive) {
            let polar = Gmt.cartesianToPolar(this.pos.x - this.target.pos.x, this.pos.y - this.target.pos.y);
            if(polar.r <= this.range) {
                this.target.hp.reset();
                this.target.hp.setAsFraction(0.25);
            }
        }
    }

    lockOnTarget(myTeam, enemyTeams) {
        if(!this.target) {
            let newTarget = null;
            let newTargetDist = Infinity;
            myTeam.warriors.filter(w => !w.hp.alive).forEach(w => {
                let dist = Gmt.Distance.vertices(this.pos, w.pos);
                if(dist < newTargetDist) {
                    newTargetDist = dist;
                    newTarget = w;
                }
            });
            this.target = newTarget;
        } else if (this.target.hp.alive) {
            this.target = undefined;
        }
        return this.target ? true : false;
    }
}
