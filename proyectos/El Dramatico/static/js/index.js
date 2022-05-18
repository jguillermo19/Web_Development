const navToggle = document.querySelector('.toggle');
const navLogo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');

const acerca = document.getElementById('btn-acerca-de');
const menu = document.getElementById('btn-menu');
const galeria = document.getElementById('btn-galeria');
const ubicacion = document.getElementById('btn-ubicacion');

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-menu_visible');
    navLogo.classList.toggle('logo_visible');
    navToggle.classList.toggle('toggle_active');
});

acerca.addEventListener('click',()=>{
    navMenu.classList.remove('nav-menu_visible');
    navLogo.classList.remove('logo_visible');
    navToggle.classList.remove('toggle_active');
});
menu.addEventListener('click',()=>{
    navMenu.classList.remove('nav-menu_visible');
    navLogo.classList.remove('logo_visible');
    navToggle.classList.remove('toggle_active');
});
galeria.addEventListener('click',()=>{
    navMenu.classList.remove('nav-menu_visible');
    navLogo.classList.remove('logo_visible');
    navToggle.classList.remove('toggle_active');
});
ubicacion.addEventListener('click',()=>{
    navMenu.classList.remove('nav-menu_visible');
    navLogo.classList.remove('logo_visible');
    navToggle.classList.remove('toggle_active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.scrollup').fadeIn('slow');
    } else {
        $('.scrollup').fadeOut('slow');
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
    return false;
});