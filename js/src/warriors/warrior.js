class Warrior extends Entity{

    constructor(props) {
        super(props);
        this.hp = new HealthBar(props.maxHp, props.armor);
        this.attackInfo = new AttackInfo(props.attackWindup, props.attackWinddown, props.attackCooldown, props.minAttack, props.maxAttack);
        this.range = props.range;
        this.target = null;
    }

    act(myTeam, enemyTeams) {
        if(this.lockOnTarget(myTeam, enemyTeams)){
            let polar = Gmt.cartesianToPolar(this.hitbox.x - this.target.hitbox.x, this.hitbox.y - this.target.hitbox.y);
            this.turnTo(polar.phi);
            if(polar.r > this.range) {
                this.move(this.speed, polar.phi);
            } else {
                this.attack();
            }
        }
    }

    attack() {
        let me = this;
        this.attackInfo.startAttack(() => {
            me.onAttack();
        });
    }

    onAttack() {
        if(this.target) {
            let polar = Gmt.cartesianToPolar(this.hitbox.x - this.target.hitbox.x, this.hitbox.y - this.target.hitbox.y);
            if(polar.r <= this.range) {
                this.target.hp.damage(this.attackInfo.getDmg());
            }
        }
    }

    lockOnTarget(myTeam, enemyTeams) {
        if(!this.target) {
            let newTarget = null;
            let newTargetDist = Infinity;
            enemyTeams.forEach(t => {
                t.warriors.filter(w => w.hp.alive).forEach(w => {
                    let dist = Gmt.Distance.circles(this.hitbox, w.hitbox);
                    if(dist < newTargetDist) {
                        newTargetDist = dist;
                        newTarget = w;
                    }
                });
            });
            this.target = newTarget;
        } else if(!this.target.hp.alive) {
            this.target = undefined;
        }
        return this.target ? true : false;
    }
 
}