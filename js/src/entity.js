class Entity {

    constructor(props) {
        this.displayInfo = new DisplayInfo(props.spriteRow, props.displaySize);
        this.hitbox = new Gmt.Circle(0, 0, props.collisonSize);
        this.speed = props.speed;
        this.direction = 0;
    }

    placeAt(x, y) {
        this.hitbox.x = x;
        this.hitbox.y = y;
    }

    turnTo(dir) {
        this.direction = dir;
    }

    move(distance, dir) {
        let x = distance * Math.cos(dir);
        let y = distance * Math.sin(dir);
        this.hitbox.move(-x, -y);
    }

}