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
        w.placeAt(rootX + Gmt.randFloat(-200, 200), rootY + Gmt.randFloat(-350, 350));
        w.turnTo(Gmt.rad(Gmt.randFloat(0, 2)));
        t.warriors.push(w);
    });
    return t;
} 

function getTeams() {
    let team1 = getRandomTeam(Gmt.choice(COLORS), 250, 250, 400);
    let team2 = getRandomTeam(Gmt.choice(COLORS.filter(w => w.color !== team1.color)), 250, 1250, 400);
    return [team1, team2];
}