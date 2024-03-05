(function(){
    "use strict";
    const d = document;
    const carrusel = d.querySelector(".outs_cont2")
    const tarjeta = d.querySelectorAll(".outs_tarjeta");
    let index = tarjeta.forEach(i => {
        if(i.getAttribute(".outs_tarjeta--active")=== true){
            return console.log("hola");
        }
        
    });
    console.log(index);

    d.addEventListener("click",(e)=>{
        const width = carrusel.offsetWidth;

        if(e.target.matches(".outs_flechaIzq")){
            index = (index - 1 + carrusel.children.length) % carrusel.children.length;
            carrusel.style.transform = `translateX(-${width * index}px)`;
        }
        if(e.target.matches(".outs_flechaDer")){
            index = (index + 1) % carrusel.children.length;
        }
    })
})();