(function(){
    "use strict";

    const d = document;
    const img = d.querySelector(".nav_img");
    const navegador = d.querySelector(".nav_cont");
    const boton = d.querySelector(".nav_boton");

    boton.addEventListener("click",(e)=>{
        if(img.getAttribute("src") == "icon/menu.svg"){
            img.setAttribute("src","icon/close.svg");
            navegador.classList.add("nav_cont--active");
        }
        else{
            img.setAttribute("src","icon/menu.svg");
            navegador.classList.remove("nav_cont--active");
        }
    })
})();