
(function(){
    "use strict";

    const d = document;
    const boton = d.querySelectorAll(".info_icon");
    const close = d.querySelector(".modal_icon");
    const imagen = d.querySelector(".modal_image");
    const modal = d.querySelector(".modal");
    
    
    boton.forEach((v,i)=>{
        v.addEventListener("click",(e)=>{
            if(i == 0){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria1.jpg");
            }
            else if(i == 1){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria2.png");
            }
            else if(i == 2){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria3.webp");
            }
            else if(i == 3){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria4.jpg");
            }
            else if(i == 4){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria5.jpg");
            }
            else if(i == 5){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria6.jpg");
            }
            else if(i == 6){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria7.jpg");
            }
            else if(i == 7){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria8.jpg");
            }
            else if(i == 8){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria9.jpg");
            }
            else if(i == 9){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria10.jpg");
            }
            else if(i == 10){
                modal.classList.add("modal--active");
                imagen.setAttribute("src","image/galeria11.png");
            }

        })
    })

    close.addEventListener("click",(e)=>{
        modal.classList.remove("modal--active");
    })

    
})();

