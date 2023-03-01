(function(){
    "use strict"
    const d = document;
    const btnBuscar = d.querySelector(".btn-buscar")

    btnBuscar.addEventListener("click",(e)=>{
        const busqueda = d.getElementById("buscarP").value;
        const informacion = d.querySelector(".cont-info");

        switch (busqueda) {
            case "bulbasaur":
                    informacion.innerHTML = `<h2 class="t-pokemon">Bulbasaur</h2>
                                            <div class="datos-pokemon">
                                                <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon bulbasaur">
                                                <p class="parrafo">Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo. <br>
                                                <b style="color:#0000ff">Tipo:</b> Planta, Veneno. <br>
                                                <b style="color:#0000ff">Debilidad:</b> Fuego, Psíquico, Volador, Hielo.
                                                </p>    
                                            </div>
                                            <div class="evol-pokemon">
                                                
                                            </div>
                                            `;
                break;
        
            default:
                informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
                break;
        }
    })

})()