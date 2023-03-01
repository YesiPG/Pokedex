(function(){
    "use strict"
    const d = document;
    const btnBuscar = d.querySelector(".btn-buscar")

    btnBuscar.addEventListener("click",(e)=>{
        const busqueda = d.getElementById("buscarP").value;
        const informacion = d.querySelector(".cont-info");

        switch (busqueda) {
            case "bulbasaur":
                    informacion.innerHTML = `
                        <h2 class="t-pokemon">Bulbasaur <b>N.° 0001</b></h2>
                            <div class="datos-pokemon">
                                <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon bulbasaur">
                                <p class="parrafo">Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo. <br><br>
                                <b style="color:#0000ff">Tipo:</b> Planta, Veneno. <br>
                                <b style="color:#0000ff">Debilidad:</b> Fuego, Psíquico, Volador, Hielo.
                                </p>    
                            </div>
                            <div class="evol-pokemon">
                                <h3 class="t-evol">Evoluciones</h3>
                                <div class="contenedor">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon bulbasaur">
                                        <p class="parrafo-evol">Bulbasaur N.° 0001<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                    <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" alt="pokemon Ivysaur">
                                        <p class="parrafo-evol">Ivysaur N.° 0002<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                    <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon Venusaur">
                                        <p class="parrafo-evol">Venusaur N.° 0003<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `;
                break;
            case "0001":
                informacion.innerHTML = `
                        <h2 class="t-pokemon">Bulbasaur <b>N.° 0001</b></h2>
                            <div class="datos-pokemon">
                                <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon bulbasaur">
                                <p class="parrafo">Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo. <br><br>
                                <b style="color:#0000ff">Tipo:</b> Planta, Veneno. <br>
                                <b style="color:#0000ff">Debilidad:</b> Fuego, Psíquico, Volador, Hielo.
                                </p>    
                            </div>
                            <div class="evol-pokemon">
                                <h3 class="t-evol">Evoluciones</h3>
                                <div class="contenedor">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon bulbasaur">
                                        <p class="parrafo-evol">Bulbasaur N.° 0001<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                    <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" alt="pokemon Ivysaur">
                                        <p class="parrafo-evol">Ivysaur N.° 0002<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                    <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
                                    <div class="card-evol">
                                        <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon Venusaur">
                                        <p class="parrafo-evol">Venusaur N.° 0003<br>
                                        Planta, Veneno.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `;
                break;
        
            default:
                informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
                break;
        }
    })

})()