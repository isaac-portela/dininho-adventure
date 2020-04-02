'use strict';
(function (win,doc){
    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    }
    const $canvas = doc.querySelector("#game-dino");
    const contexto  = $canvas.getContext("2d");
    const  floor = new Image();

    $canvas.width = screen.width;
    $canvas.height = screen.height;
   
  
    floor.src = "/imagens/game/chao.png";
    floor.addEventListener('load',function(){
        contexto.drawImage(floor , 0 , screen.height -  floor.height);
    });
   
})(window,document);