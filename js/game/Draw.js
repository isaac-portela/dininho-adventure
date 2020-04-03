'use strict';

function Draw() {
    const {contexto , screen , dininho , sky , floor} =  global;

    if (!global.start) {
        sky.draw();
        floor.draw();
        dininho.draw();

     global.start = true;
    }else{
       contexto.clearRect(0 , 0 , screen.width , screen.height);
        sky.update();
        floor.update();
        dininho.update();
    }
}