class Entity {

    constructor(props) {
        this.displayInfo = new DisplayInfo(props.spriteRow, props.displaySize);
        this.pos = new Gmt.Vertex(0, 0);
        this.speed = props.speed;
        this.direction = 0;
    }

    placeAt(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    turnTo(dir) {
        this.direction = dir;
    }

    move(distance, dir) {
        let x = distance * Math.cos(dir);
        let y = distance * Math.sin(dir);
        this.pos.move(-x, -y);
    }

}