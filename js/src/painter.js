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
                    let rect = w.hitbox.getCenter().toRectangle(w.displayInfo.size / 3, w.displayInfo.size / 3);
                    this.cvs.drawTile(tile, rect, 0, 0.3);
                }
            });
        });
        teams.forEach(t => {
            t.warriors.forEach(w => {
                if(w.hp.alive) {
                    let tile = t.unitTileset.get(w.displayInfo.row, w.attackInfo.state);
                    let rect = w.hitbox.getCenter().toRectangle(w.displayInfo.size, w.displayInfo.size);
                    this.cvs.drawTile(tile, rect, w.direction + Gmt.rad(0.5));
                }
            });
        });
    }

}