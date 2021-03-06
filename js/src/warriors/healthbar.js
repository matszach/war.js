class HealthBar {

    constructor(max, armor) {
        this.max = max;
        this.curr = this.max;
        this.armor = armor;
        this.alive = true;
    }

    damage(number) {
        number -= this.armor;
        number = number > 1 ? number : 1;
        this.curr -= number;
        if(this.curr <= 0) {
            this.alive = false;
        }
    }

    heal(number) {
        this.curr += number;
        if(this.curr > this.max) {
            this.curr = this.max;
        }
    }

    asFraction() {
        return this.curr/this.max; 
    }

    setAsFraction(fr) {
        this.curr = this.max * fr;
    }
    
    reset() {
        this.curr = this.max;
        this.alive = true;
    }
}