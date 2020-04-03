'use strict';
 function Floor(contexto , screen) {

     const floor = new Image();
     floor.src = "/imagens/game/chao.png";

    function draw(){
     floor.addEventListener('load', function () {
         contexto.drawImage(floor, 0, screen.height - floor.height);
         contexto.drawImage(floor, floor.width, screen.height - floor.height);
     });
    }
    return{
        draw,
        height: floor.height
    }
 }