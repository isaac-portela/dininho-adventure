'use strict';
(function (win, doc) {
    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    }
    const $canvas = doc.querySelector("#game-dino");
    const contexto = $canvas.getContext("2d");

  
    
    const floor = new Floor(contexto, screen);
    const sky = new Sky(contexto,screen);

    $canvas.width = screen.width;
    $canvas.height = screen.height;

    //Estudar com funciona o globalCompositeOperation !
    contexto.globalCompositeOperation = "destination-over";

   
    floor.draw();
    sky.draw();    

})(window, document);