'use strict';
function Loop(contexto,screen){
        contexto.clearRect(0 , 0 , screen.width , screen.height);

        Draw(contexto,screen);
        requestAnimationFrame(() => Loop(contexto,screen));
}