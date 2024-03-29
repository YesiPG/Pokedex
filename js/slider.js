(function(){
    "use strict";
    const d = document;
    const carrusel = d.querySelector(".outs_carrusel");
    const tarjetas = d.querySelectorAll(".outs_cont");
    let index = 0;
    let carga = 0;
    let num = 0.492;
    
    // console.log("hola");

    const update = ()=>{
        const offset = - index * (100/num);
        carrusel.style.transform = `translateX(${offset}px)`;
    }

    window.addEventListener("resize",(e)=>{
        carga = innerWidth;
        update();
    })

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".outs_flechaIzq")){
            index--;
            if (index < 0) {
                index = 0;
            }
            update();
        }
        
        if(e.target.matches(".outs_flechaDer")){
            index++;
            const limiteIndex = tarjetas.length - num;
            if (index > limiteIndex) {
                index = limiteIndex;
            }
            update();
        }
    })
})();