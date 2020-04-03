'use strict';
function Dininho(contexto,screen, floor) {


    const dininho = new Image();
    dininho.src = "/imagens/game/player/correndo/dininho_correndo_1.png";


    const position = {
        x:428,
        y: screen.height  - (floor.height * 0.88) + dininho.height
    };


    function draw() {
        dininho.addEventListener('load', function () {
            contexto.drawImage(dininho, position.x, position.y);

        });
    }
        function update(){
            contexto.drawImage(dininho, position.x, position.y);
        }

        function moveLeft(){
            position.x -= 10;
        }
        function moveRight(){
          position.x += 10;
        }

    return {
        draw,
        moveLeft,
        moveRight,
        update
    }
}