const menu_icono = document.querySelector(".menu-h__icono");
const menu_desplegable = document.querySelector(".menu-desplegable");
const info_desplegable = document.querySelector(".info-desplegable");
const botones_desplegable = document.querySelector(".botones_desplegable"); 
const main = document.querySelector("main");
menu_icono.addEventListener("click", function() {
    menu_desplegable.classList.toggle("activo");
    info_desplegable.classList.toggle("activo");
    botones_desplegable.classList.toggle("activo");
});



