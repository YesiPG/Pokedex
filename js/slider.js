(function(){
    "use strict";
    const d = document;
    const carrusel = d.querySelector(".outs_cont2")
    const tarjeta = d.querySelectorAll(".outs_tarjeta");
    let index;

    for(let i = 0; i< tarjeta.length; i++){
        if(tarjeta[i].classList.contains("outs_tarjeta--active")){
            index = i;
            break;
        }
    }

    console.log(index);

    d.addEventListener("click",(e)=>{
        const tama = carrusel.children.length;
        let distancia = 200;
        let nuevoScroll = carrusel.scrollLeft + distancia;
        
        if(e.target.matches(".outs_flechaIzq")){
            index = (index - 1 + tama) % tama;
            
            tarjeta[index+1].classList.remove("outs_tarjeta--active");
            tarjeta[index].classList.add("outs_tarjeta--active");
            
            const nuevoScroll2 = - distancia * index;
            carrusel.scrollLeft = nuevoScroll2; 
        }
        if(e.target.matches(".outs_flechaDer")){
            index = (index + 1) % tama;

            tarjeta[index-1].classList.remove("outs_tarjeta--active");
            tarjeta[index].classList.add("outs_tarjeta--active");

            if(nuevoScroll >= carrusel.scrollWidth){
                nuevoScroll = 0;
            }
            carrusel.scrollTo({
                left: nuevoScroll,
                behavior: 'smooth'
            });
        }
    })
})()