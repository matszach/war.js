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
            let polar = Gmt.cartesianToPolar(this.pos.x - this.target.pos.x, this.pos.y - this.target.pos.y);
            this.turnTo(polar.phi);
            if(polar.r > this.range) {
                this.move(this.speed, polar.phi);
            } else {
                this.attack(myTeam, enemyTeams);
            }
        }
    }

    attack(myTeam, enemyTeams) {
        let me = this;
        this.attackInfo.startAttack(() => {
            me.onAttack(myTeam, enemyTeams);
        });
    }

    onAttack(myTeam, enemyTeams) {
        if(this.target) {
            let polar = Gmt.cartesianToPolar(this.pos.x - this.target.pos.x, this.pos.y - this.target.pos.y);
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
                    let dist = Gmt.Distance.vertices(this.pos, w.pos);
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