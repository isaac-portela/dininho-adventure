'use strict';
(function (win, doc) {
    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    }
    const $canvas = doc.querySelector("#game-dino");
    const contexto = $canvas.getContext("2d");

    $canvas.width = screen.width;
    $canvas.height = screen.height;

    Draw(contexto,screen);

    //Loop();
})(window, document);