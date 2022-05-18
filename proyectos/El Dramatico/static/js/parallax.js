$(document).ready(function(){
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        
        if(windowWidth>1000){
            var scroll = $(window).scrollTop();
            /*$('header .texto').css({
                'transform':'translate(0px,' + scroll / 2 + '%)'
            });*/
            $('.acerca-de article').css({
                'transform':'translate(0px, -' + scroll / 13 + '%)'
            });
        }
        
        else if(windowWidth>850){
            var scroll = $(window).scrollTop();
            /*$('header .texto').css({
                'transform':'translate(0px,' + scroll / 2 + '%)'
            });*/
            $('.acerca-de article').css({
                'transform':'translate(0px, -' + scroll / 25 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();    

        if(windowWidth<850){
            $('.acerca-de article').css({
                'transform':'translate(0px, 0px)'
            });
        }
    });
});