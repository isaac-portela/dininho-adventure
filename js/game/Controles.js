'use strict';

function Controles() {
    const {dininho}  = global
    window.addEventListener('keydown',function({key}){
        if(key.toLowerCase()== 'a'){
           dininho.moveLeft();

        }
       if(key.toLowerCase()=='d'){
            dininho.moveRight();
        }
    });
}