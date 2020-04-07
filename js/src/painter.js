class Painter {

    constructor(cvs) {
        this.cvs = cvs;
    }

    clear() {
        this.cvs.clear();
    }

    drawFps(loop) {
        this.cvs.write('FPS: ' + parseInt(loop.getFPS()), 10, 20, 'white', 20);
    }

    drawTeams(teams) {
        teams.forEach(t => {
            t.warriors.forEach(w => {
                if(!w.hp.alive) {
                    let tile = t.symbolTileset.get(0, 0);
                    let rect = w.pos.toRectangle(w.displayInfo.size / 3, w.displayInfo.size / 3);
                    this.cvs.drawTile(tile, rect, 0, 0.3);
                } else {
                    let f = w.hp.asFraction();
                    let c = Gmt.rgba((1 - f) * 255, 255 * f, 0, 0.05);
                    this.cvs.fillCircle(w.pos.toCircle(w.displayInfo.size * 0.45), c);
                }
            });
        });
        teams.forEach(t => {
            t.warriors.forEach(w => {
                if(w.hp.alive) {
                    let tile = t.unitTileset.get(w.displayInfo.row, w.attackInfo.state);
                    let rect = w.pos.toRectangle(w.displayInfo.size, w.displayInfo.size).move(w.displayInfo.size/2, w.displayInfo.size/2);
                    this.cvs.drawTile(tile, rect, w.direction + Gmt.rad(0.5));
                }
            });
        });
    }

}