(function(){
    "use strict";
    const d = document;
    const selector = d.getElementById("news_filter");
    
    selector.addEventListener("change",(e)=>{
        const noticias = d.querySelectorAll(".news_list .news_article");
        let filtro = e.target.value;

        for(let i = 0; i < noticias.length; i++){
            let categoria = noticias[i].getAttribute('data-categoria');

            if (filtro === 'todo' || filtro === categoria) {
                noticias[i].style.display = 'block';
                // noticias[i].classList.add("news_article--active");
            }else {
                noticias[i].style.display = 'none';
                // noticias[i].classList.remove("news_article--active");
            }
        }
    })

})();