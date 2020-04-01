$(document).ready(function () {
    let $ovos = $(".separator-dino");
    let cont = 0;
    let $key = $(".key-gif");
    $ovos.click(function () {
        if(!$(this).hasClass("-clicked")){
            cont++;
        }
        $(this).addClass("-clicked");
        if(cont==4){
            showKey();
        }
        
    });
    function showKey(){
       $key.addClass("-active");
    }
});