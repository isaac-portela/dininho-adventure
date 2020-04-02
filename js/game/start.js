'use strict';
(function (win, doc) {
    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    }
    const $canvas = doc.querySelector("#game-dino");
    const contexto = $canvas.getContext("2d");
    
    const floor = new Floor(contexto, screen);

    $canvas.width = screen.width;
    $canvas.height = screen.height;

    
    floor.draw();

})(window, document);