function Sky(contexto, screen) {
    const sky = new Image();
    sky.src = "/imagens/game/ceu.png";

    const center = () => (screen.width/2) - (sky.width/2);
    function draw () {
        sky.addEventListener('load', function () {
            contexto.drawImage(sky, center(), 0);
        });
    }
    return {
        draw
    }

}