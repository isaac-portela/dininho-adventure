'use strict';
function Draw(contexto ,screen){
    const sky = new Sky(contexto,screen); 
    const floor = new Floor(contexto, screen);
    const dininho = new Dininho(contexto,screen,floor.height);
        
        sky.draw();   
        floor.draw();
        dininho.draw();
}