$(document).ready(function () {
    let $ul = $(".carousel-dino");


    $ul.click(function(e){
        let $elemento = $(e.target);
        if($elemento.parent().hasClass("-left")){
             carouselLeft();
     }
         else if($elemento.parent().hasClass("-right")){
                carouselRight();
     }
    });


    function carouselLeft() {
        let $left = $(".-left");
        let $center = $(".-center");
        let $right = $(".-right");

        let id = parseInt($left.attr('data-id'));
        let nexId;
        if(id==0){
            nexId = 14;
        }
        else{
            nexId = id-1;
        }

        $left.removeClass("-left");
        $center.removeClass("-center");
        $right.removeClass("-right");

        $left.addClass("-center");
        $center.addClass("-right");


        $left = $(`[data-id=${nexId}]`);
        $left.addClass("-left");
    }
    function carouselRight(){
        let $left = $(".-left");
        let $center = $(".-center");
        let $right = $(".-right");

        let id = parseInt($right.attr('data-id'));
        let nextId;
            if(id==14){
                nextId = 0;
            }else{
                nextId = id + 1;
            }


        $left.removeClass("-left");
        $center.removeClass("-center");
        $right.removeClass("-right");

        $right.addClass("-center");
        $center.addClass("-left");

        $right = $(`[data-id=${nextId}]`);
        $right.addClass("-right");
    }


});