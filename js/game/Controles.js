'use strict';

function Controles($canvas) {
    win.addEventListener('keyup',function({key}){
        if(key.toLowerCase()== 'a'){
            dininho.moveLeft();

        }
       if(key.toLowerCase()=='d'){
            dininho.moveRight();
        }
    });
}