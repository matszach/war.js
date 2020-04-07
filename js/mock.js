const COLORS = [
    'black', 'blue', 'green', 'orange',
    'pink', 'purple', 'red', 'teal', 'white', 'yellow'
];

const UNIT_TYPES = [
    MilitiaWarrior, SwordsmanWarrior, HeavySwordsmanWarrior,
    SpearmanWarrior, HeavySpearmanWarrior, ArcherWarrior, 
    WizardWarrior, BruteWarrior, BarbarianWarrior, TankWarrior, MedicWarrior
];


function getRandomTeam(color, nofMembers, rootX, spreadX, rootY, spreadY) {
    let t = new Team(color);
    Gmt.iter1D(nofMembers, i => {
        let c = Gmt.choice(UNIT_TYPES);
        let w = new c();
        w.placeAt(rootX + Gmt.randFloat(-spreadX, spreadX), rootY + Gmt.randFloat(-spreadY, spreadY));
        w.turnTo(Gmt.rad(Gmt.randFloat(0, 2)));
        t.warriors.push(w);
    });
    return t;
} 

function getTeams(br) {
    let u = 100;
    let team1 = getRandomTeam(Gmt.choice(COLORS), u, 250, 200, br.height/2 + 25, br.height/2 - 50);
    let team2 = getRandomTeam(Gmt.choice(COLORS.filter(c => c !== team1.color)), u, br.width - 250, 200, br.height/2 + 25, br.height/2 - 50);
    return [team1, team2];
}