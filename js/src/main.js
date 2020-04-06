$(window).ready(() => {

    let cvs = new Gmt.CanvasWrapper('canvas-home');
    const painter = new Painter(cvs);
    
    let teams = getTeams(cvs.getBoundingRect());

    new Gmt.Loop(60, loop => {
        painter.clear();
        teams.forEach(t => t.act(teams));
        painter.drawTeams(teams);
        painter.drawFps(loop);
    }).start();

});