const WarlockWarriorSTATS = {
    maxHp: 35,
    armor: 2,
    spriteRow: 11,
    displaySize: DEFAULT.UNIT_SPRITE_SIZE * 0.9,
    // ressurection
    attackWindup: 500,
    attackWinddown: 800,
    attackCooldown: 6000, 
    minAttack: 6, 
    maxAttack: 12,
    collisonSize: DEFAULT.UNIT_COLLISION_SIZE * 0.9,
    speed: DEFAULT.UNIT_SPEED * 0.9, 
    range: DEFAULT.UNIT_RANGED_RANGE * 0.4, 
    projectileClass: null
};

class WarlockWarrior extends Warrior {

    constructor() {
        super(WarlockWarriorSTATS);
    }

    onAttack(myTeam, enemyTeams) {
        console.log(1);
        if(!this.target.hp.alive) {
            console.log(2);
            let polar = Gmt.cartesianToPolar(this.hitbox.x - this.target.hitbox.x, this.hitbox.y - this.target.hitbox.y);
            if(polar.r <= this.range) {
                this.target.hp.reset();
            }
        }
    }

    lockOnTarget(myTeam, enemyTeams) {
        if(!this.target) {
            let newTarget = null;
            let newTargetDist = Infinity;
            myTeam.warriors.filter(w => !w.hp.alive).forEach(w => {
                let dist = Gmt.Distance.circles(this.hitbox, w.hitbox);
                if(dist < newTargetDist) {
                    newTargetDist = dist;
                    newTarget = w;
                }
            });
            this.target = newTarget;
        } else if (this.target.hp.alive) {
            console.log(3);
            this.target = undefined;
        }
        return this.target ? true : false;
    }
}
