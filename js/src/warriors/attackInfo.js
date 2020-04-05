const STATE = {
    IDLE: 0,
    WINDUP: 1,
    WINDDOWN: 2
};

class AttackInfo {
    
    constructor(windup, winddown, cooldown, minDmg, maxDmg) {
        this.windup = windup;
        this.winddown = winddown;
        this.cooldown = cooldown;
        this.minDmg = minDmg;
        this.maxDmg = maxDmg;
        this.state = STATE.IDLE;
        this.isCooldown = false;
    }

    getDmg() {
        return Gmt.randFloat(this.minDmg, this.maxDmg);
    }

    startAttack(callback, myTeam, enemyTeams) {
        let info = this;
        if(info.state !== STATE.IDLE || info.isCooldown) {
            return;
        } else {
            info.state = STATE.WINDUP;
            info.isCooldown = true;
            setTimeout(() => {
                info.isCooldown = false;
            }, info.cooldown);
            setTimeout(() => {
                callback(myTeam, enemyTeams);
                setTimeout(() => {
                    callback(myTeam, enemyTeams);
                    info.state = STATE.IDLE;
                }, info.winddown);
                info.state = STATE.WINDDOWN;
            }, info.windup);
        }
    }

}