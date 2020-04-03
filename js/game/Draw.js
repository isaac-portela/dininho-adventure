'use strict';
function Draw(contexto ,screen){
    const sky = new Sky(contexto,screen); 
    const floor = new Floor(contexto, screen);
    const dininho = new Dininho(contexto,screen,floor.height,1000);

        floor.draw();
        sky.draw();   
        dininho.draw();
}