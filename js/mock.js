const COLORS = [
    'black', 'blue', 'green', 'orange',
    'pink', 'purple', 'red', 'teal', 'white', 'yellow'
];

const UNIT_TYPES = [
    MilitiaWarrior, SwordsmanWarrior, HeavySwordsmanWarrior,
    SpearmanWarrior, HeavySpearmanWarrior, ArcherWarrior, 
    WizardWarrior, BruteWarrior
];


function getRandomTeam(color, nofMembers, rootX, rootY) {
    let t = new Team(color);
    Gmt.iter1D(nofMembers, i => {
        let c = Gmt.choice(UNIT_TYPES);
        let w = new c();
        w.placeAt(rootX + Gmt.randFloat(-200, 200), rootY + Gmt.randFloat(-400, 400));
        w.turnTo(Gmt.rad(Gmt.randFloat(0, 2)));
        t.warriors.push(w);
    });
    return t;
} 

function getTeams() {
    let nofTeams = Gmt.randInt(2, 2);
    let nofMembers = parseInt(100/nofTeams);
    let colors = [];
    while(colors.length < nofTeams) {
        let c = Gmt.choice(COLORS);
        if(!colors.includes(c)){
            colors.push(c);
        }
    }
    return Gmt.constructArray(nofTeams, i => getRandomTeam(colors[i], nofMembers, Gmt.randFloat(200, 1400), 400));
}