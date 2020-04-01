$(document).ready(function () {
    let $ul = $(".carousel-dino");


    $ul.click(function(e){
        let $elemento = $(e.target);
     if($elemento.parent().hasClass("-left")){
            carouselLeft();
     }
    });


    function carouselLeft() {
        let $left = $(".-left");
        let $center = $(".-center");
        let $right = $(".-right");

        let id = parseInt($left.attr('data-id'));
        
        const nexId = id == 0 ? 14 : id - 1 ;

        

        $left.removeClass("-left");
        $center.removeClass("-center");
        $right.removeClass("-right");

        $left.addClass("-center");
        $center.addClass("-right");

        $center = $left;
        $right = $right;
        $left = $(`[data-id="${nexId}"]`);

        $left.addClass("-left");


    }
});