'use strict';
function Loop(){
        const {contexto,screen} = global;
        Draw();
       requestAnimationFrame(function(){Loop(contexto,screen)});
}
