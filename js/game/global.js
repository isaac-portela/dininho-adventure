const global =  (function (win,doc) {

    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    }
    const $canvas = doc.querySelector("#game-dino");
    const contexto = $canvas.getContext("2d");
    
    const sky = new Sky(contexto,screen);
    const floor = new Floor(contexto,screen);
    const dininho = new Dininho(contexto,screen,floor);

    let start = false;

    $canvas.width = screen.width;
    $canvas.height = screen.height;
    

    return{
        floor,
        sky,
        dininho,
        contexto,
        screen,
        start
    }
})(window,document);