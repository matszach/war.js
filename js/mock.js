const COLORS = [
    'black', 'blue', 'green', 'orange',
    'pink', 'purple', 'red', 'teal', 'white', 'yellow'
];

const UNIT_TYPES = [
    MilitiaWarrior, SwordsmanWarrior, HeavySwordsmanWarrior,
    SpearmanWarrior, HeavySpearmanWarrior, ArcherWarrior, 
    WizardWarrior
];


function getRandomTeam(color, nofMembers) {
    let t = new Team(color);
    let rootX = Gmt.randFloat(300, 900);
    let rootY = Gmt.randFloat(300, 600);
    Gmt.iter1D(nofMembers, i => {
        let c = Gmt.choice(UNIT_TYPES);
        let w = new c();
        w.placeAt(rootX + Gmt.randFloat(-200, 200), rootY + Gmt.randFloat(-200, 200));
        w.turnTo(Gmt.rad(Gmt.randFloat(0, 2)));
        t.warriors.push(w);
    });
    return t;
} 

function getTeams() {
    let nofTeams = Gmt.randInt(2, 5);
    let nofMembers = parseInt(150/nofTeams);
    let colors = [];
    while(colors.length < nofTeams) {
        let c = Gmt.choice(COLORS);
        if(!colors.includes(c)){
            colors.push(c);
        }
    }
    return Gmt.constructArray(nofTeams, i => getRandomTeam(colors[i], nofMembers + Gmt.randInt(-2, 2)));
}