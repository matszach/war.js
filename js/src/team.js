class Team {

    constructor(color) {
        this.color = color;
        this.warriors = [];
        this.projectiles = [];
        this.unitTileset = new Gmt.TileSet(`assets\\target\\units.${color}.png`, 128, 128, 8);
        this.projectileTileset = new Gmt.TileSet(`assets\\target\\projectiles.${color}.png`, 128, 128, 8);
        this.symbolTileset = new Gmt.TileSet(`assets\\target\\symbols.${color}.png`, 128, 128, 8);
    }

    act(teams) {
        let enemyTeams = teams.filter(t => t !== this);
        this.warriors.filter(w => w.hp.alive).forEach(w => w.act(this, enemyTeams));
    }

}