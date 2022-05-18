$(document).ready(function(){
    if($(window).width()>850){
        // Efecto Menu
        $('.menu a').each(function(index,elemento){
            $(this).css({
                'top': '-200px'
            });
            $(this).animate({
                top: '0'
            },2000+(index*500));
        });

        // Efecto Header
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });
        
        $('header .texto').animate({
            opacity: 1,
            marginTop: '-25px'
        }, 1500);
    }

    // Scroll Elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        },500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        },500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        },500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        },500);
    });
});