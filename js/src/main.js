$(window).ready(() => {

    const painter = new Painter(new Gmt.CanvasWrapper('canvas-home'));
    

    let teams = getTeams();

    new Gmt.Loop(60, loop => {
        painter.clear();
        teams.forEach(t => t.act(teams));
        painter.drawTeams(teams);
        painter.drawFps(loop);
    }).start();

});