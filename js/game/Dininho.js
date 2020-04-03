'use strict';
function Dininho(contexto, screen, floorHeight) {

    const dininho = new Image();
    dininho.src = "/imagens/game/player/correndo/dininho_correndo_1.png";


    const position = {
        x:428,
        y: screen.height  - (floorHeight * 0.64) + dininho.height
    };


    function draw() {
        dininho.addEventListener('load', function () {
            contexto.drawImage(dininho, position.x, position.y);

        });
    }

    function update (){
        position.x += 5;
    }

    return {
        draw,
        update
    }
}