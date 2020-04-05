class RangedWarrior extends Warrior {

    constructor(props) {
        super(props);
        this.accuracy = props.accuracy || 1;
        this.projectileClass = props.projectileClass;
    }

}