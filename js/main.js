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
    case "ivysaur":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ivysaur <b>N.° 0002</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="pokemon ivysaur">
            <p class="parrafo">Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.<br><br>
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
    case "0002":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ivysaur <b>N.° 0002</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="pokemon ivysaur">
            <p class="parrafo">Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.<br><br>
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
    case "venusaur":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venusaur <b>N.° 0003</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="pokemon venusaur">
            <p class="parrafo">La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.<br><br>
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
    case "0003":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venusaur <b>N.° 0003</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="pokemon venusaur">
            <p class="parrafo">La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.<br><br>
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
    case "charmander":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Charmander <b>N.° 0004</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="pokemon charmander">
            <p class="parrafo">Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander">
                <p class="parrafo-evol">Charmander N.° 0004<br>
                Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon">
                <p class="parrafo-evol">Charmeleon N.° 0005<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon Charizard">
                <p class="parrafo-evol">Charizard N.° 0006<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0004":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Charmander <b>N.° 0004</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="pokemon charmander">
            <p class="parrafo">Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander">
                <p class="parrafo-evol">Charmander N.° 0004<br>
                Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon">
                <p class="parrafo-evol">Charmeleon N.° 0005<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon Charizard">
                <p class="parrafo-evol">Charizard N.° 0006<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
          
    case "charmeleon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Charmeleon <b>N.° 0005</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="pokemon charmeleon">
            <p class="parrafo">Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander">
                <p class="parrafo-evol">Charmander N.° 0004<br>
                Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon">
                <p class="parrafo-evol">Charmeleon N.° 0005<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon Charizard">
                <p class="parrafo-evol">Charizard N.° 0006<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0005":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Charmeleon <b>N.° 0005</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="pokemon charmeleon">
            <p class="parrafo">Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander">
                <p class="parrafo-evol">Charmander N.° 0004<br>
                Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon">
                <p class="parrafo-evol">Charmeleon N.° 0005<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon Charizard">
                <p class="parrafo-evol">Charizard N.° 0006<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "charizard":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Charizard <b>N.° 0006</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="pokemon charizard">
            <p class="parrafo">Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander">
                <p class="parrafo-evol">Charmander N.° 0004<br>
                Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon">
                <p class="parrafo-evol">Charmeleon N.° 0005<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon Charizard">
                <p class="parrafo-evol">Charizard N.° 0006<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "squirtle":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Squirtle <b>N.° 0007</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="pokemon squirtle">
            <p class="parrafo">Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0007":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Squirtle <b>N.° 0007</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="pokemon squirtle">
            <p class="parrafo">Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "wartortle":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wartortle <b>N.° 0008</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" alt="pokemon wartortle">
            <p class="parrafo">Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0008":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wartortle <b>N.° 0008</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" alt="pokemon wartortle">
            <p class="parrafo">Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "blastoise":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Blastoise <b>N.° 0009</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" alt="pokemon Blastoise">
            <p class="parrafo">Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0009":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Blastoise <b>N.° 0009</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" alt="pokemon Blastoise">
            <p class="parrafo">Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle">
                <p class="parrafo-evol">Squirtle N.° 0007<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon wartortle">
                <p class="parrafo-evol">Wartortle N.° 0008<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon Blastoise">
                <p class="parrafo-evol">Blastoise N.° 0009<br>
                  Agua.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "caterpie":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Caterpie <b>N.° 0010</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png" alt="pokemon caterpie">
            <p class="parrafo">Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.  <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0010":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Caterpie <b>N.° 0010</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png" alt="pokemon caterpie">
            <p class="parrafo">Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.  <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "metapod":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Metapod <b>N.° 0011</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png" alt="pokemon metapod">
            <p class="parrafo">Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0011":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Metapod <b>N.° 0011</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png" alt="pokemon metapod">
            <p class="parrafo">Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "butterfree":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Butterfree <b>N.° 0012</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png" alt="pokemon butterfree">
            <p class="parrafo">Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "0012":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Butterfree <b>N.° 0012</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png" alt="pokemon butterfree">
            <p class="parrafo">Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie">
                <p class="parrafo-evol">Caterpie N.° 0010<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod">
                <p class="parrafo-evol">Metapod N.° 0011<br>
                  Bicho.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree">
                <p class="parrafo-evol">Butterfree N.° 0012<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div>
                  `;
              break;
    case "weedle":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weedle <b>N.° 0013</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png" alt="pokemon weedle">
            <p class="parrafo">El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0013":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weedle <b>N.° 0013</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png" alt="pokemon weedle">
            <p class="parrafo">El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kakuna":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kakuna <b>N.° 0014</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png" alt="pokemon kakuna">
            <p class="parrafo">Aunque es casi incapaz de moverse, en caso de sentirse amenazado puede envenenar a los enemigos con su aguijón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0014":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kakuna <b>N.° 0014</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png" alt="pokemon kakuna">
            <p class="parrafo">Aunque es casi incapaz de moverse, en caso de sentirse amenazado puede envenenar a los enemigos con su aguijón. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "beedrill":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Beedrill <b>N.° 0015</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png" alt="pokemon beedrill">
            <p class="parrafo">Tiene tres aguijones venenosos, dos en las patas anteriores y uno en la parte baja del abdomen, con los que ataca a sus enemigos una y otra vez. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0015":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Beedrill <b>N.° 0015</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png" alt="pokemon beedrill">
            <p class="parrafo">Tiene tres aguijones venenosos, dos en las patas anteriores y uno en la parte baja del abdomen, con los que ataca a sus enemigos una y otra vez. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png" alt="pokemon weedle">
                <p class="parrafo-evol">Weedle N.° 0013<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png" alt="pokemon kakuna">
                <p class="parrafo-evol">Kakuna N.° 0014<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png" alt="pokemon beedrill">
                <p class="parrafo-evol">Beedrill N.° 0015<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pidgey":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgey <b>N.° 0016</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon pidgey">
            <p class="parrafo">Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0016":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgey <b>N.° 0016</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon pidgey">
            <p class="parrafo">Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pidgeotto":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgeotto <b>N.° 0017</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png" alt="pokemon pidgeotto">
            <p class="parrafo">Su extraordinaria vitalidad y resistencia le permiten cubrir grandes distancias del territorio que habita en busca de presas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0017":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgeotto <b>N.° 0017</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png" alt="pokemon pidgeotto">
            <p class="parrafo">Su extraordinaria vitalidad y resistencia le permiten cubrir grandes distancias del territorio que habita en busca de presas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pidgeot":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgeot <b>N.° 0018</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png" alt="pokemon pidgeot">
            <p class="parrafo">Este Pokémon vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0018":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pidgeot <b>N.° 0018</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png" alt="pokemon pidgeot">
            <p class="parrafo">Este Pokémon vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" alt="pokemon pedgey">
                <p class="parrafo-evol">Pedgey N.° 0016<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png" alt="pokemon pidgeotto">
                <p class="parrafo-evol">Pidgeotto N.° 0017<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png" alt="pokemon pidgeot">
                <p class="parrafo-evol">Pidgeot N.° 0018<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "rattata":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rattata <b>N.° 0019</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png" alt="pokemon rattata">
            <p class="parrafo">Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png" alt="pokemon rattata">
                <p class="parrafo-evol">Rattata N.° 0019<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png" alt="pokemon raticate">
                <p class="parrafo-evol">Raticate N.° 0020<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0019":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rattata <b>N.° 0019</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png" alt="pokemon rattata">
            <p class="parrafo">Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png" alt="pokemon rattata">
                <p class="parrafo-evol">Rattata N.° 0019<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png" alt="pokemon raticate">
                <p class="parrafo-evol">Raticate N.° 0020<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "raticate":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raticate <b>N.° 0020</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png" alt="pokemon raticate">
            <p class="parrafo">Gracias a las pequeñas membranas de las patas traseras, puede nadar por los ríos para capturar presas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png" alt="pokemon rattata">
                <p class="parrafo-evol">Rattata N.° 0019<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png" alt="pokemon raticate">
                <p class="parrafo-evol">Raticate N.° 0020<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0020":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raticate <b>N.° 0020</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png" alt="pokemon raticate">
            <p class="parrafo">Gracias a las pequeñas membranas de las patas traseras, puede nadar por los ríos para capturar presas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png" alt="pokemon rattata">
                <p class="parrafo-evol">Rattata N.° 0019<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png" alt="pokemon raticate">
                <p class="parrafo-evol">Raticate N.° 0020<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "spearow":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Spearow <b>N.° 0021</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png" alt="pokemon spearow">
            <p class="parrafo">A la hora de proteger su territorio, compensa su incapacidad para volar a gran altura con una increíble velocidad. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png" alt="pokemon spearow">
                <p class="parrafo-evol">Spearow N.° 0021<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png" alt="pokemon Fearow">
                <p class="parrafo-evol">Fearow N.° 0022<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0021":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Spearow <b>N.° 0021</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png" alt="pokemon spearow">
            <p class="parrafo">A la hora de proteger su territorio, compensa su incapacidad para volar a gran altura con una increíble velocidad. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png" alt="pokemon spearow">
                <p class="parrafo-evol">Spearow N.° 0021<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png" alt="pokemon Fearow">
                <p class="parrafo-evol">Fearow N.° 0022<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "fearow":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Fearow <b>N.° 0022</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png" alt="pokemon fearow">
            <p class="parrafo">Este Pokémon ha existido desde tiempos remotos. Al menor atisbo de peligro, alza el vuelo y huye. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png" alt="pokemon spearow">
                <p class="parrafo-evol">Spearow N.° 0021<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png" alt="pokemon Fearow">
                <p class="parrafo-evol">Fearow N.° 0022<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0022":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Fearow <b>N.° 0022</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png" alt="pokemon fearow">
            <p class="parrafo">Este Pokémon ha existido desde tiempos remotos. Al menor atisbo de peligro, alza el vuelo y huye. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png" alt="pokemon spearow">
                <p class="parrafo-evol">Spearow N.° 0021<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png" alt="pokemon Fearow">
                <p class="parrafo-evol">Fearow N.° 0022<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ekans":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ekans <b>N.° 0023</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png" alt="pokemon ekans">
            <p class="parrafo">La longitud de este Pokémon aumenta con el tiempo. Por la noche, se enrosca en las ramas de los árboles para descansar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png" alt="pokemon ekans">
                <p class="parrafo-evol">Ekans N.° 0023<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png" alt="pokemon arbok">
                <p class="parrafo-evol">Arbok N.° 0024<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0023":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ekans <b>N.° 0023</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png" alt="pokemon ekans">
            <p class="parrafo">La longitud de este Pokémon aumenta con el tiempo. Por la noche, se enrosca en las ramas de los árboles para descansar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png" alt="pokemon ekans">
                <p class="parrafo-evol">Ekans N.° 0023<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png" alt="pokemon arbok">
                <p class="parrafo-evol">Arbok N.° 0024<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "arbok":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Arbok <b>N.° 0024</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png" alt="pokemon arbok">
            <p class="parrafo">Se han llegado a identificar hasta seis variaciones distintas de los espeluznantes dibujos de su piel. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png" alt="pokemon ekans">
                <p class="parrafo-evol">Ekans N.° 0023<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png" alt="pokemon arbok">
                <p class="parrafo-evol">Arbok N.° 0024<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0024":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Arbok <b>N.° 0024</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png" alt="pokemon arbok">
            <p class="parrafo">Se han llegado a identificar hasta seis variaciones distintas de los espeluznantes dibujos de su piel. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png" alt="pokemon ekans">
                <p class="parrafo-evol">Ekans N.° 0023<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png" alt="pokemon arbok">
                <p class="parrafo-evol">Arbok N.° 0024<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pikachu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pikachu <b>N.° 0025</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="pokemon pikachu">
            <p class="parrafo">Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0025":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pikachu <b>N.° 0025</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="pokemon pikachu">
            <p class="parrafo">Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "raichu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raichu <b>N.° 0026</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" alt="pokemon raichu">
            <p class="parrafo">Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0026":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raichu <b>N.° 0026</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" alt="pokemon raichu">
            <p class="parrafo">Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sandshrew":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sandshrew <b>N.° 0027</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png" alt="pokemon sandshrew">
            <p class="parrafo">Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png" alt="pokemon sandshrew">
                <p class="parrafo-evol">Sandshrew N.° 0027<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png" alt="pokemon sandslash">
                <p class="parrafo-evol">Sandslash N.° 0028<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0027":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sandshrew <b>N.° 0027</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png" alt="pokemon sandshrew">
            <p class="parrafo">Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png" alt="pokemon sandshrew">
                <p class="parrafo-evol">Sandshrew N.° 0027<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png" alt="pokemon sandslash">
                <p class="parrafo-evol">Sandslash N.° 0028<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sandslash":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sandslash <b>N.° 0028</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png" alt="pokemon sandslash">
            <p class="parrafo">Cuanto más seco es el terreno en el que habita, más duras y lisas se vuelven las púas que le recubren la espalda. <br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png" alt="pokemon sandshrew">
                <p class="parrafo-evol">Sandshrew N.° 0027<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png" alt="pokemon sandslash">
                <p class="parrafo-evol">Sandslash N.° 0028<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0028":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sandslash <b>N.° 0028</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png" alt="pokemon sandslash">
            <p class="parrafo">Cuanto más seco es el terreno en el que habita, más duras y lisas se vuelven las púas que le recubren la espalda. <br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png" alt="pokemon sandshrew">
                <p class="parrafo-evol">Sandshrew N.° 0027<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png" alt="pokemon sandslash">
                <p class="parrafo-evol">Sandslash N.° 0028<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidoran♀️":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoran♀️ <b>N.° 0029</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png" alt="pokemon nidoran">
            <p class="parrafo">Posee un olfato más fino que los Nidoran♂. Usa los bigotes para percibir la dirección del viento y buscar comida a sotavento de sus depredadores. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0029":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoran♀️ <b>N.° 0029</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png" alt="pokemon nidoran">
            <p class="parrafo">Posee un olfato más fino que los Nidoran♂. Usa los bigotes para percibir la dirección del viento y buscar comida a sotavento de sus depredadores. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidorina":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidorina <b>N.° 0030</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png" alt="pokemon nidorina">
            <p class="parrafo">Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías al alimentarlas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0030":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidorina <b>N.° 0030</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png" alt="pokemon nidorina">
            <p class="parrafo">Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías al alimentarlas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidoqueen":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoqueen <b>N.° 0031</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png" alt="pokemon nidoqueen">
            <p class="parrafo">Su defensa destaca sobre la capacidad ofensiva. Usa las escamas del cuerpo como una coraza para proteger a su prole de cualquier ataque. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Psiquico, Hielo, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0031":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoqueen <b>N.° 0031</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png" alt="pokemon nidoqueen">
            <p class="parrafo">Su defensa destaca sobre la capacidad ofensiva. Usa las escamas del cuerpo como una coraza para proteger a su prole de cualquier ataque. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Psiquico, Hielo, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♀️ N.° 0029<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png" alt="pokemon nidorina">
                <p class="parrafo-evol">Nidorina N.° 0030<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png" alt="pokemon nidoquen">
                <p class="parrafo-evol">Nidoqueen N.° 0031<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidoran♂️":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoran♂️ <b>N.° 0032</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png" alt="pokemon nidoran">
            <p class="parrafo">Mantiene sus grandes orejas levantadas, siempre alerta. Si advierte peligro, ataca inoculando una potente toxina con su cuerno frontal. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0032":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoran♂️ <b>N.° 0032</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png" alt="pokemon nidoran">
            <p class="parrafo">Mantiene sus grandes orejas levantadas, siempre alerta. Si advierte peligro, ataca inoculando una potente toxina con su cuerno frontal. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidorino":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidorino <b>N.° 0033</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png" alt="pokemon nidorino">
            <p class="parrafo">Dondequiera que va, parte rocas con su cuerno, más duro que un diamante, en busca de una Piedra Lunar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0033":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidorino <b>N.° 0033</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png" alt="pokemon nidorino">
            <p class="parrafo">Dondequiera que va, parte rocas con su cuerno, más duro que un diamante, en busca de una Piedra Lunar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "nidoking":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoking <b>N.° 0034</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png" alt="pokemon nidoking">
            <p class="parrafo">Una vez que se desboca, no hay quien lo pare. Solo se calma ante Nidoqueen, su compañera de toda la vida. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Psiquico, Hielo, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0034":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Nidoking <b>N.° 0034</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png" alt="pokemon nidoking">
            <p class="parrafo">Una vez que se desboca, no hay quien lo pare. Solo se calma ante Nidoqueen, su compañera de toda la vida. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Psiquico, Hielo, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png" alt="pokemon nidoran">
                <p class="parrafo-evol">Nidoran♂️ N.° 0032<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png" alt="pokemon nidorino">
                <p class="parrafo-evol">Nidorino N.° 0033<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png" alt="pokemon nidoking">
                <p class="parrafo-evol">Nidoking N.° 0034<br>
                  Veneno, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "clefairy":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Clefairy <b>N.° 0035</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="pokemon clefairy">
            <p class="parrafo">Se dice que la felicidad llegará a quien vea un grupo de Clefairy bailando a la luz de la luna llena. <br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0035":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Clefairy <b>N.° 0035</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="pokemon clefairy">
            <p class="parrafo">Se dice que la felicidad llegará a quien vea un grupo de Clefairy bailando a la luz de la luna llena. <br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "clefable":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Clefable <b>N.° 0036</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png" alt="pokemon clefable">
            <p class="parrafo">Este Pokémon de aspecto feérico, raramente visto por los humanos, corre a esconderse en cuanto detecta que hay alguien cerca. <br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0036":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Clefable <b>N.° 0036</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png" alt="pokemon clefable">
            <p class="parrafo">Este Pokémon de aspecto feérico, raramente visto por los humanos, corre a esconderse en cuanto detecta que hay alguien cerca. <br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "vulpix":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vulpix <b>N.° 0037</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png" alt="pokemon vulpix">
            <p class="parrafo">De pequeño, tiene seis colas de gran belleza. A medida que crece, le van saliendo más. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" alt="pokemon vulpix">
                <p class="parrafo-evol">Vulpix N.° 0037<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png" alt="pokemon ninetales">
                <p class="parrafo-evol">Ninetales N.° 0038<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0037":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vulpix <b>N.° 0037</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png" alt="pokemon vulpix">
            <p class="parrafo">De pequeño, tiene seis colas de gran belleza. A medida que crece, le van saliendo más. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" alt="pokemon vulpix">
                <p class="parrafo-evol">Vulpix N.° 0037<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png" alt="pokemon ninetales">
                <p class="parrafo-evol">Ninetales N.° 0038<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ninetales":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ninetales <b>N.° 0038</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png" alt="pokemon ninetales">
            <p class="parrafo">Cuentan que llega a vivir hasta mil años y que cada una de las colas posee poderes sobrenaturales. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" alt="pokemon vulpix">
                <p class="parrafo-evol">Vulpix N.° 0037<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png" alt="pokemon ninetales">
                <p class="parrafo-evol">Ninetales N.° 0038<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0038":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ninetales <b>N.° 0038</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png" alt="pokemon ninetales">
            <p class="parrafo">Cuentan que llega a vivir hasta mil años y que cada una de las colas posee poderes sobrenaturales. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png" alt="pokemon vulpix">
                <p class="parrafo-evol">Vulpix N.° 0037<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png" alt="pokemon ninetales">
                <p class="parrafo-evol">Ninetales N.° 0038<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "jigglypuff":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jigglypuff <b>N.° 0039</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" alt="pokemon jigglypuff">
            <p class="parrafo">Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0039":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jigglypuff <b>N.° 0039</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" alt="pokemon jigglypuff">
            <p class="parrafo">Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "wigglytuff":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wigglytuff <b>N.° 0040</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png" alt="pokemon wigglytuff">
            <p class="parrafo">Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0040":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wigglytuff <b>N.° 0040</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png" alt="pokemon wigglytuff">
            <p class="parrafo">Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "zubat":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Zubat <b>N.° 0041</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png" alt="pokemon zubat">
            <p class="parrafo">Emite ondas ultrasónicas por la boca para escrutar el entorno, lo que le permite volar con pericia por cuevas angostas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0041":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Zubat <b>N.° 0041</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png" alt="pokemon zubat">
            <p class="parrafo">Emite ondas ultrasónicas por la boca para escrutar el entorno, lo que le permite volar con pericia por cuevas angostas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "golbat":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golbat <b>N.° 0042</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png" alt="pokemon golbat">
            <p class="parrafo">Le encanta chuparles la sangre a los seres vivos. En ocasiones comparte la preciada colecta con otros congéneres hambrientos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0042":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golbat <b>N.° 0042</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png" alt="pokemon golbat">
            <p class="parrafo">Le encanta chuparles la sangre a los seres vivos. En ocasiones comparte la preciada colecta con otros congéneres hambrientos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "oddish":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Oddish <b>N.° 0043</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png" alt="pokemon oddish">
            <p class="parrafo">Se mueve al exponerse a la luz de la luna. Merodea por la noche para esparcir sus semillas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                  <p class="parrafo-evol">Vileplume N.° 0045<br>
                    Planta, Veneno.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                  <p class="parrafo-evol">Bellossom N.° 0182<br>
                    Planta.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0043":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Oddish <b>N.° 0043</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png" alt="pokemon oddish">
            <p class="parrafo">Se mueve al exponerse a la luz de la luna. Merodea por la noche para esparcir sus semillas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                  <p class="parrafo-evol">Vileplume N.° 0045<br>
                    Planta, Veneno.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                  <p class="parrafo-evol">Bellossom N.° 0182<br>
                    Planta.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "gloom":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gloom <b>N.° 0044</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png" alt="pokemon Gloom">
            <p class="parrafo">Libera un fétido olor por los pistilos. El fuerte hedor hace perder el conocimiento a cualquiera que se encuentre en un radio de 2 km. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                <p class="parrafo-evol">Vileplume N.° 0045<br>
                  Planta, Veneno.
                </p> <br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                <p class="parrafo-evol">Bellossom N.° 0182<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0044":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gloom <b>N.° 0044</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png" alt="pokemon Gloom">
            <p class="parrafo">Libera un fétido olor por los pistilos. El fuerte hedor hace perder el conocimiento a cualquiera que se encuentre en un radio de 2 km. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                <p class="parrafo-evol">Vileplume N.° 0045<br>
                  Planta, Veneno.
                </p> <br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                <p class="parrafo-evol">Bellossom N.° 0182<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "vileplume":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vileplume <b>N.° 0045</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png" alt="pokemon Vileplume">
            <p class="parrafo">Tiene los pétalos más grandes del mundo. Al caminar, de ellos se desprenden densas nubes de polen tóxico. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                <p class="parrafo-evol">Vileplume N.° 0045<br>
                  Planta, Veneno.
                </p> <br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                <p class="parrafo-evol">Bellossom N.° 0182<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0045":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vileplume <b>N.° 0045</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png" alt="pokemon Vileplume">
            <p class="parrafo">Tiene los pétalos más grandes del mundo. Al caminar, de ellos se desprenden densas nubes de polen tóxico. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                <p class="parrafo-evol">Vileplume N.° 0045<br>
                  Planta, Veneno.
                </p> <br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                <p class="parrafo-evol">Bellossom N.° 0182<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "paras":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Paras <b>N.° 0046</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png" alt="pokemon Paras">
            <p class="parrafo">Escarba en el suelo para extraer nutrientes de las raíces de los árboles, que las setas del lomo absorben después casi por completo. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png" alt="pokemon Paras">
                <p class="parrafo-evol">Paras N.° 0046<br>
                  Bicho, Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png" alt="pokemon Parasect">
                <p class="parrafo-evol">Parasect N.° 0047<br>
                  Bicho, Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0046":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Paras <b>N.° 0046</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png" alt="pokemon Paras">
            <p class="parrafo">Escarba en el suelo para extraer nutrientes de las raíces de los árboles, que las setas del lomo absorben después casi por completo. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png" alt="pokemon Paras">
                <p class="parrafo-evol">Paras N.° 0046<br>
                  Bicho, Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png" alt="pokemon Parasect">
                <p class="parrafo-evol">Parasect N.° 0047<br>
                  Bicho, Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "parasect":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Parasect <b>N.° 0047</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png" alt="pokemon Parasect">
            <p class="parrafo">Tras largo tiempo absorbiendo la energía del huésped, la seta parásita del lomo es la que parece controlar la voluntad de este Pokémon. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png" alt="pokemon Paras">
                <p class="parrafo-evol">Paras N.° 0046<br>
                  Bicho, Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png" alt="pokemon Parasect">
                <p class="parrafo-evol">Parasect N.° 0047<br>
                  Bicho, Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0047":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Parasect <b>N.° 0047</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png" alt="pokemon Parasect">
            <p class="parrafo">Tras largo tiempo absorbiendo la energía del huésped, la seta parásita del lomo es la que parece controlar la voluntad de este Pokémon. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png" alt="pokemon Paras">
                <p class="parrafo-evol">Paras N.° 0046<br>
                  Bicho, Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png" alt="pokemon Parasect">
                <p class="parrafo-evol">Parasect N.° 0047<br>
                  Bicho, Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "venonat":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venonat <b>N.° 0048</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png" alt="pokemon Venonat">
            <p class="parrafo">Rezuma veneno por todo su cuerpo. De noche, atrapa y come pequeños Pokémon insecto atraídos por la luz. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png" alt="pokemon Venonat">
                <p class="parrafo-evol">Venonat N.° 0048<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png" alt="pokemon Venomoth">
                <p class="parrafo-evol">Venomoth N.° 0049<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0048":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venonat <b>N.° 0048</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png" alt="pokemon Venonat">
            <p class="parrafo">Rezuma veneno por todo su cuerpo. De noche, atrapa y come pequeños Pokémon insecto atraídos por la luz. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png" alt="pokemon Venonat">
                <p class="parrafo-evol">Venonat N.° 0048<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png" alt="pokemon Venomoth">
                <p class="parrafo-evol">Venomoth N.° 0049<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "venomoth":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venomoth <b>N.° 0049</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png" alt="pokemon Venomoth">
            <p class="parrafo">Tiene las alas cubiertas de escamas. Cada vez que las bate, esparce un polvillo sumamente venenoso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png" alt="pokemon Venonat">
                <p class="parrafo-evol">Venonat N.° 0048<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png" alt="pokemon Venomoth">
                <p class="parrafo-evol">Venomoth N.° 0049<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0049":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Venomoth <b>N.° 0049</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png" alt="pokemon Venomoth">
            <p class="parrafo">Tiene las alas cubiertas de escamas. Cada vez que las bate, esparce un polvillo sumamente venenoso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png" alt="pokemon Venonat">
                <p class="parrafo-evol">Venonat N.° 0048<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png" alt="pokemon Venomoth">
                <p class="parrafo-evol">Venomoth N.° 0049<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "diglett":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Diglett <b>N.° 0050</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png" alt="pokemon Diglett">
            <p class="parrafo">Vive 1 m por debajo del suelo, donde se alimenta de raíces. A veces también aparece en la superficie.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png" alt="pokemon Diglett">
                <p class="parrafo-evol">Diglett N.° 0050<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png" alt="pokemon Dugtrio">
                <p class="parrafo-evol">Dugtrio N.° 0051<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0050":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Diglett <b>N.° 0050</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png" alt="pokemon Diglett">
            <p class="parrafo">Vive 1 m por debajo del suelo, donde se alimenta de raíces. A veces también aparece en la superficie.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png" alt="pokemon Diglett">
                <p class="parrafo-evol">Diglett N.° 0050<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png" alt="pokemon Dugtrio">
                <p class="parrafo-evol">Dugtrio N.° 0051<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dugtrio":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dugtrio <b>N.° 0051</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png" alt="pokemon Dugtrio">
            <p class="parrafo">Sus tres cabezas suben y bajan para remover la tierra cercana y facilitar así la excavación.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png" alt="pokemon Diglett">
                <p class="parrafo-evol">Diglett N.° 0050<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png" alt="pokemon Dugtrio">
                <p class="parrafo-evol">Dugtrio N.° 0051<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0051":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dugtrio <b>N.° 0051</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png" alt="pokemon Dugtrio">
            <p class="parrafo">Sus tres cabezas suben y bajan para remover la tierra cercana y facilitar así la excavación.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png" alt="pokemon Diglett">
                <p class="parrafo-evol">Diglett N.° 0050<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png" alt="pokemon Dugtrio">
                <p class="parrafo-evol">Dugtrio N.° 0051<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "meowth":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Meowth <b>N.° 0052</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png" alt="pokemon Meowth">
            <p class="parrafo">Durante el día, se dedica a dormir. De noche, vigila su territorio con un brillo en los ojos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png" alt="pokemon Meowth">
                <p class="parrafo-evol">Meowth N.° 0052<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png" alt="pokemon Persian">
                <p class="parrafo-evol">Persian N.° 0053<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0052":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Meowth <b>N.° 0052</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png" alt="pokemon Meowth">
            <p class="parrafo">Durante el día, se dedica a dormir. De noche, vigila su territorio con un brillo en los ojos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png" alt="pokemon Meowth">
                <p class="parrafo-evol">Meowth N.° 0052<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png" alt="pokemon Persian">
                <p class="parrafo-evol">Persian N.° 0053<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "persian":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Persian <b>N.° 0053</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png" alt="pokemon Persian">
            <p class="parrafo">Aunque es muy admirado por el pelaje, es difícil de entrenar como mascota porque enseguida suelta arañazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png" alt="pokemon Meowth">
                <p class="parrafo-evol">Meowth N.° 0052<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png" alt="pokemon Persian">
                <p class="parrafo-evol">Persian N.° 0053<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0053":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Persian <b>N.° 0053</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png" alt="pokemon Persian">
            <p class="parrafo">Aunque es muy admirado por el pelaje, es difícil de entrenar como mascota porque enseguida suelta arañazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png" alt="pokemon Meowth">
                <p class="parrafo-evol">Meowth N.° 0052<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png" alt="pokemon Persian">
                <p class="parrafo-evol">Persian N.° 0053<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "psyduck":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Psyduck <b>N.° 0054</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png" alt="pokemon Psyduck">
            <p class="parrafo">Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png" alt="pokemon Psyduck">
                <p class="parrafo-evol">Psyduck N.° 0054<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png" alt="pokemon Golduck">
                <p class="parrafo-evol">Golduck N.° 0055<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0054":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Psyduck <b>N.° 0054</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png" alt="pokemon Psyduck">
            <p class="parrafo">Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png" alt="pokemon Psyduck">
                <p class="parrafo-evol">Psyduck N.° 0054<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png" alt="pokemon Golduck">
                <p class="parrafo-evol">Golduck N.° 0055<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "golduck":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golduck <b>N.° 0055</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png" alt="pokemon Golduck">
            <p class="parrafo">Cuando nada a toda velocidad usando sus largas extremidades palmeadas, su frente comienza a brillar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png" alt="pokemon Psyduck">
                <p class="parrafo-evol">Psyduck N.° 0054<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png" alt="pokemon Golduck">
                <p class="parrafo-evol">Golduck N.° 0055<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0055":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golduck <b>N.° 0055</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png" alt="pokemon Golduck">
            <p class="parrafo">Cuando nada a toda velocidad usando sus largas extremidades palmeadas, su frente comienza a brillar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png" alt="pokemon Psyduck">
                <p class="parrafo-evol">Psyduck N.° 0054<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png" alt="pokemon Golduck">
                <p class="parrafo-evol">Golduck N.° 0055<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mankey":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mankey <b>N.° 0056</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png" alt="pokemon Mankey">
            <p class="parrafo">Vive en grupos en las copas de los árboles. Si pierde de vista a su manada, se siente solo y se enfada. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png" alt="pokemon Mankey">
                <p class="parrafo-evol">Mankey N.° 0056<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png" alt="pokemon Primeape">
                <p class="parrafo-evol">Primeape N.° 0057<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/979.png" alt="pokemon Annihilape">
                <p class="parrafo-evol">Annihilape N.° 0979<br>
                  Lucha, Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0056":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mankey <b>N.° 0056</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png" alt="pokemon Mankey">
            <p class="parrafo">Vive en grupos en las copas de los árboles. Si pierde de vista a su manada, se siente solo y se enfada. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png" alt="pokemon Mankey">
                <p class="parrafo-evol">Mankey N.° 0056<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png" alt="pokemon Primeape">
                <p class="parrafo-evol">Primeape N.° 0057<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/979.png" alt="pokemon Annihilape">
                <p class="parrafo-evol">Annihilape N.° 0979<br>
                  Lucha, Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "primeape":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Primeape <b>N.° 0057</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png" alt="pokemon Primeape">
            <p class="parrafo">Se pone furioso si nota que alguien lo está mirando. Persigue a cualquiera que establezca contacto visual con él. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png" alt="pokemon Mankey">
                <p class="parrafo-evol">Mankey N.° 0056<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png" alt="pokemon Primeape">
                <p class="parrafo-evol">Primeape N.° 0057<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/979.png" alt="pokemon Annihilape">
                <p class="parrafo-evol">Annihilape N.° 0979<br>
                  Lucha, Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0057":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Primeape <b>N.° 0057</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png" alt="pokemon Primeape">
            <p class="parrafo">Se pone furioso si nota que alguien lo está mirando. Persigue a cualquiera que establezca contacto visual con él. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png" alt="pokemon Mankey">
                <p class="parrafo-evol">Mankey N.° 0056<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png" alt="pokemon Primeape">
                <p class="parrafo-evol">Primeape N.° 0057<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/979.png" alt="pokemon Annihilape">
                <p class="parrafo-evol">Annihilape N.° 0979<br>
                  Lucha, Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "growlithe":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Growlithe <b>N.° 0058</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png" alt="pokemon Growlithe">
            <p class="parrafo">De naturaleza valiente y honrada, se enfrenta sin miedo a enemigos más grandes y fuertes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png" alt="pokemon Growlithe">
                <p class="parrafo-evol">Growlithe N.° 0058<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png" alt="pokemon Arcanine">
                <p class="parrafo-evol">Arcanine N.° 0059<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0058":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Growlithe <b>N.° 0058</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png" alt="pokemon Growlithe">
            <p class="parrafo">De naturaleza valiente y honrada, se enfrenta sin miedo a enemigos más grandes y fuertes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png" alt="pokemon Growlithe">
                <p class="parrafo-evol">Growlithe N.° 0058<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png" alt="pokemon Arcanine">
                <p class="parrafo-evol">Arcanine N.° 0059<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "arcanine":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Arcanine <b>N.° 0059</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png" alt="pokemon Arcanine">
            <p class="parrafo">Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png" alt="pokemon Growlithe">
                <p class="parrafo-evol">Growlithe N.° 0058<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png" alt="pokemon Arcanine">
                <p class="parrafo-evol">Arcanine N.° 0059<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0059":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Arcanine <b>N.° 0059</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png" alt="pokemon Arcanine">
            <p class="parrafo">Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png" alt="pokemon Growlithe">
                <p class="parrafo-evol">Growlithe N.° 0058<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png" alt="pokemon Arcanine">
                <p class="parrafo-evol">Arcanine N.° 0059<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "poliwag":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwag <b>N.° 0060</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png" alt="pokemon Poliwag">
            <p class="parrafo">Es más ágil en el agua que en la tierra. La espiral de su vientre no es más que parte de sus vísceras que se ven a través de la piel. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0060":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwag <b>N.° 0060</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png" alt="pokemon Poliwag">
            <p class="parrafo">Es más ágil en el agua que en la tierra. La espiral de su vientre no es más que parte de sus vísceras que se ven a través de la piel. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "poliwhirl":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwhirl <b>N.° 0061</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png" alt="pokemon Poliwhirl">
            <p class="parrafo">Mirar fijamente la espiral de su vientre provoca somnolencia, por lo que puede usarse como alternativa a las nanas para dormir a los niños.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0061":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwhirl <b>N.° 0061</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png" alt="pokemon Poliwhirl">
            <p class="parrafo">Mirar fijamente la espiral de su vientre provoca somnolencia, por lo que puede usarse como alternativa a las nanas para dormir a los niños.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "poliwrath":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwrath <b>N.° 0062</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png" alt="pokemon Poliwrath">
            <p class="parrafo">Su cuerpo es puro músculo. Logra abrirse paso por aguas gélidas partiendo el hielo con sus fornidos brazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Planta, Volador, Psiquico, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0062":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Poliwrath <b>N.° 0062</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png" alt="pokemon Poliwrath">
            <p class="parrafo">Su cuerpo es puro músculo. Logra abrirse paso por aguas gélidas partiendo el hielo con sus fornidos brazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Planta, Volador, Psiquico, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "abra":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Abra <b>N.° 0063</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png" alt="pokemon Abra">
            <p class="parrafo">Es capaz de usar sus poderes psíquicos aun estando dormido. Al parecer, el contenido del sueño influye en sus facultades.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0063":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Abra <b>N.° 0063</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png" alt="pokemon Abra">
            <p class="parrafo">Es capaz de usar sus poderes psíquicos aun estando dormido. Al parecer, el contenido del sueño influye en sus facultades.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kadabra":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kadabra <b>N.° 0064</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png" alt="pokemon Kadabra">
            <p class="parrafo">Duerme suspendido en el aire gracias a sus poderes psíquicos. La cola, de una flexibilidad extraordinaria, hace las veces de almohada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0064":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kadabra <b>N.° 0064</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png" alt="pokemon Kadabra">
            <p class="parrafo">Duerme suspendido en el aire gracias a sus poderes psíquicos. La cola, de una flexibilidad extraordinaria, hace las veces de almohada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "alakazam":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Alakazam <b>N.° 0065</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" alt="pokemon Alakazam">
            <p class="parrafo">Posee una capacidad intelectual fuera de lo común que le permite recordar todo lo sucedido desde el instante de su nacimiento. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0065":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Alakazam <b>N.° 0065</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" alt="pokemon Alakazam">
            <p class="parrafo">Posee una capacidad intelectual fuera de lo común que le permite recordar todo lo sucedido desde el instante de su nacimiento. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png" alt="pokemon Abra">
                <p class="parrafo-evol">Abra N.° 0063<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png" alt="pokemon Kadabra">
                <p class="parrafo-evol">Kadabra N.° 0064<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png" alt="pokemon Alakazam">
                <p class="parrafo-evol">Alakazam N.° 0065<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "machop":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machop <b>N.° 0066</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png" alt="pokemon Machop">
            <p class="parrafo">Es una masa de músculos y, pese a su pequeño tamaño, tiene fuerza de sobra para levantar en brazos a 100 personas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0066":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machop <b>N.° 0066</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png" alt="pokemon Machop">
            <p class="parrafo">Es una masa de músculos y, pese a su pequeño tamaño, tiene fuerza de sobra para levantar en brazos a 100 personas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "machoke":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machoke <b>N.° 0067</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png" alt="pokemon Machoke">
            <p class="parrafo">Su musculoso cuerpo es tan fuerte que usa un cinto antifuerza para controlar sus movimientos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0067":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machoke <b>N.° 0067</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png" alt="pokemon Machoke">
            <p class="parrafo">Su musculoso cuerpo es tan fuerte que usa un cinto antifuerza para controlar sus movimientos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "machamp":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machamp <b>N.° 0068</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" alt="pokemon Machamp">
            <p class="parrafo">Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0068":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Machamp <b>N.° 0068</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" alt="pokemon Machamp">
            <p class="parrafo">Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png" alt="pokemon Machop">
                <p class="parrafo-evol">Machop N.° 0066<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png" alt="pokemon Machoke">
                <p class="parrafo-evol">Machoke N.° 0067<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png" alt="pokemon Machamp">
                <p class="parrafo-evol">Machamp N.° 0068<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "bellsprout":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bellsprout <b>N.° 0069</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png" alt="pokemon Bellsprout">
            <p class="parrafo">Prefiere lugares cálidos y húmedos. Atrapa pequeños Pokémon insectos con sus lianas para devorarlos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0069":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bellsprout <b>N.° 0069</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png" alt="pokemon Bellsprout">
            <p class="parrafo">Prefiere lugares cálidos y húmedos. Atrapa pequeños Pokémon insectos con sus lianas para devorarlos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "weepinbell":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weepinbell <b>N.° 0070</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png" alt="pokemon Weepinbell">
            <p class="parrafo">Cuando tiene hambre, engulle a todo lo que se mueve. La pobre presa acaba disuelta en sus ácidos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0070":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weepinbell <b>N.° 0070</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png" alt="pokemon Weepinbell">
            <p class="parrafo">Cuando tiene hambre, engulle a todo lo que se mueve. La pobre presa acaba disuelta en sus ácidos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "victreebel":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Victreebel <b>N.° 0071</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png" alt="pokemon Victreebel">
            <p class="parrafo">Atrae a su presa con un dulce aroma a miel. Una vez atrapada en la boca, la disuelve en tan solo un día, huesos incluidos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0071":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Victreebel <b>N.° 0071</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png" alt="pokemon Victreebel">
            <p class="parrafo">Atrae a su presa con un dulce aroma a miel. Una vez atrapada en la boca, la disuelve en tan solo un día, huesos incluidos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png" alt="pokemon Bellsprout">
                <p class="parrafo-evol">Bellsprout N.° 0069<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png" alt="pokemon Weepinbell">
                <p class="parrafo-evol">Weepinbell N.° 0070<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png" alt="pokemon Victreebel">
                <p class="parrafo-evol">Victreebel N.° 0071<br>
                  Planta, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "tentacool":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tentacool <b>N.° 0072</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png" alt="pokemon Tentacool">
            <p class="parrafo">Sus facultades natatorias son más bien escasas, por lo que se limita a flotar a la deriva en aguas poco profundas en busca de alimento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png" alt="pokemon Tentacool">
                <p class="parrafo-evol">Tentacool N.° 0072<br>
                  Agua, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png" alt="pokemon Tentacruel">
                <p class="parrafo-evol">Tentacruel N.° 0073<br>
                  Agua, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0072":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tentacool <b>N.° 0072</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png" alt="pokemon Tentacool">
            <p class="parrafo">Sus facultades natatorias son más bien escasas, por lo que se limita a flotar a la deriva en aguas poco profundas en busca de alimento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png" alt="pokemon Tentacool">
                <p class="parrafo-evol">Tentacool N.° 0072<br>
                  Agua, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png" alt="pokemon Tentacruel">
                <p class="parrafo-evol">Tentacruel N.° 0073<br>
                  Agua, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "tentacruel":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tentacruel <b>N.° 0073</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png" alt="pokemon Tentacruel">
            <p class="parrafo">Si las esferas rojas que tiene a ambos lados de la cabeza brillan con intensidad, indica que está a punto de lanzar ondas ultrasónicas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png" alt="pokemon Tentacool">
                <p class="parrafo-evol">Tentacool N.° 0072<br>
                  Agua, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png" alt="pokemon Tentacruel">
                <p class="parrafo-evol">Tentacruel N.° 0073<br>
                  Agua, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0073":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tentacruel <b>N.° 0073</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png" alt="pokemon Tentacruel">
            <p class="parrafo">Si las esferas rojas que tiene a ambos lados de la cabeza brillan con intensidad, indica que está a punto de lanzar ondas ultrasónicas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Veneno<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png" alt="pokemon Tentacool">
                <p class="parrafo-evol">Tentacool N.° 0072<br>
                  Agua, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png" alt="pokemon Tentacruel">
                <p class="parrafo-evol">Tentacruel N.° 0073<br>
                  Agua, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "geodude":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Geodude <b>N.° 0074</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png" alt="pokemon Geodude">
            <p class="parrafo">Se suele encontrar en senderos de montaña y sitios parecidos. Conviene andar con cuidado para no pisarlo sin querer y provocar su enfado.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0074":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Geodude <b>N.° 0074</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png" alt="pokemon Geodude">
            <p class="parrafo">Se suele encontrar en senderos de montaña y sitios parecidos. Conviene andar con cuidado para no pisarlo sin querer y provocar su enfado.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "graveler":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Graveler <b>N.° 0075</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png" alt="pokemon Graveler">
            <p class="parrafo">Se le suele ver rodando montaña abajo. No evita los obstáculos, sino que los arrolla. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0075":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Graveler <b>N.° 0075</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png" alt="pokemon Graveler">
            <p class="parrafo">Se le suele ver rodando montaña abajo. No evita los obstáculos, sino que los arrolla. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "golem":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golem <b>N.° 0076</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" alt="pokemon Golem">
            <p class="parrafo">Nada más mudar la piel, su cuerpo se vuelve blando y blanquecino, pero se endurece al poco tiempo de entrar en contacto con el aire.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0076":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Golem <b>N.° 0076</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" alt="pokemon Golem">
            <p class="parrafo">Nada más mudar la piel, su cuerpo se vuelve blando y blanquecino, pero se endurece al poco tiempo de entrar en contacto con el aire.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png" alt="pokemon Geodude">
                <p class="parrafo-evol">Geodude N.° 0074<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png" alt="pokemon Graveler">
                <p class="parrafo-evol">Graveler N.° 0075<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png" alt="pokemon Golem">
                <p class="parrafo-evol">Golem N.° 0076<br>
                  Roca, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ponyta":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ponyta <b>N.° 0077</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png" alt="pokemon Ponyta">
            <p class="parrafo">Al nacer es un poco lento, pero va fortaleciendo las patas paulatinamente al disputar carreras con sus congéneres.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png" alt="pokemon Ponyta">
                <p class="parrafo-evol">Ponyta N.° 0077<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png" alt="pokemon Rapidash">
                <p class="parrafo-evol">Rapidash N.° 0078<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0077":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ponyta <b>N.° 0077</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png" alt="pokemon Ponyta">
            <p class="parrafo">Al nacer es un poco lento, pero va fortaleciendo las patas paulatinamente al disputar carreras con sus congéneres.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png" alt="pokemon Ponyta">
                <p class="parrafo-evol">Ponyta N.° 0077<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png" alt="pokemon Rapidash">
                <p class="parrafo-evol">Rapidash N.° 0078<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "rapidash":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rapidash <b>N.° 0078</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png" alt="pokemon Rapidash">
            <p class="parrafo">Su ardiente crin ondea al viento mientras atraviesa extensas praderas a una velocidad de 240 km/h.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png" alt="pokemon Ponyta">
                <p class="parrafo-evol">Ponyta N.° 0077<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png" alt="pokemon Rapidash">
                <p class="parrafo-evol">Rapidash N.° 0078<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0078":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rapidash <b>N.° 0078</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png" alt="pokemon Rapidash">
            <p class="parrafo">Su ardiente crin ondea al viento mientras atraviesa extensas praderas a una velocidad de 240 km/h.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png" alt="pokemon Ponyta">
                <p class="parrafo-evol">Ponyta N.° 0077<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png" alt="pokemon Rapidash">
                <p class="parrafo-evol">Rapidash N.° 0078<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "slowpoke":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowpoke <b>N.° 0079</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png" alt="pokemon Slowpoke">
            <p class="parrafo">Increíblemente lento y torpe. Tarda cinco segundos en sentir dolor si lo atacan. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0079":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowpoke <b>N.° 0079</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png" alt="pokemon Slowpoke">
            <p class="parrafo">Increíblemente lento y torpe. Tarda cinco segundos en sentir dolor si lo atacan. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "slowbro":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowbro <b>N.° 0080</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png" alt="pokemon Slowbro">
            <p class="parrafo">Según parece, cuando Slowpoke fue a pescar al mar, un Shellder le mordió la cola y así evolucionó a Slowbro.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0080":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowbro <b>N.° 0080</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png" alt="pokemon Slowbro">
            <p class="parrafo">Según parece, cuando Slowpoke fue a pescar al mar, un Shellder le mordió la cola y así evolucionó a Slowbro.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "magnemite":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magnemite <b>N.° 0081</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png" alt="pokemon Magnemite">
            <p class="parrafo">Las unidades laterales crean ondas electromagnéticas que contrarrestan la gravedad y le permiten flotar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0081":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magnemite <b>N.° 0081</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png" alt="pokemon Magnemite">
            <p class="parrafo">Las unidades laterales crean ondas electromagnéticas que contrarrestan la gravedad y le permiten flotar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magneton":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magneton <b>N.° 0082</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png" alt="pokemon Magneton">
            <p class="parrafo">Tres Magnemite se enlazan mediante una intensa fuerza magnética. Provoca un fuerte pitido en los oídos a quien se le acerque.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0082":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magneton <b>N.° 0082</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png" alt="pokemon Magneton">
            <p class="parrafo">Tres Magnemite se enlazan mediante una intensa fuerza magnética. Provoca un fuerte pitido en los oídos a quien se le acerque.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magnezone":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magnezone <b>N.° 0462</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png" alt="pokemon Magnezone">
            <p class="parrafo">Se dice que mientras vuela emite unas ondas eléctricas misteriosas, a la vez que recibe otras ondas desconocidas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0462":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magnezone <b>N.° 0462</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png" alt="pokemon Magnezone">
            <p class="parrafo">Se dice que mientras vuela emite unas ondas eléctricas misteriosas, a la vez que recibe otras ondas desconocidas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Acero.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png" alt="pokemon Magnemite">
                <p class="parrafo-evol">Magnemite N.° 0081<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png" alt="pokemon Magneton">
                <p class="parrafo-evol">Magneton N.° 0082<br>
                  Electrico, Acero.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png" alt="pokemon Magnezone">
                <p class="parrafo-evol">Magnezone N.° 0462<br>
                  Electrico, Acero.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "farfetchd":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Farfetchd <b>N.° 0083</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png" alt="pokemon Farfetchd">
            <p class="parrafo">Blande el puerro que sujeta con un ala como si se tratase de una espada para rebanar a su rival. En caso de necesidad, se lo come para nutrirse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png" alt="pokemon Farfetchd">
                <p class="parrafo-evol">Farfetchd N.° 0083<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/865.png" alt="pokemon Sirfetchd">
                <p class="parrafo-evol">Sirfetchd N.° 0865<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0083":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Farfetchd <b>N.° 0083</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png" alt="pokemon Farfetchd">
            <p class="parrafo">Blande el puerro que sujeta con un ala como si se tratase de una espada para rebanar a su rival. En caso de necesidad, se lo come para nutrirse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png" alt="pokemon Farfetchd">
                <p class="parrafo-evol">Farfetchd N.° 0083<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/865.png" alt="pokemon Sirfetchd">
                <p class="parrafo-evol">Sirfetchd N.° 0865<br>
                  Lucha.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "doduo":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Doduo <b>N.° 0084</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png" alt="pokemon Doduo">
            <p class="parrafo">Las diminutas alas apenas le permiten volar, pero puede correr a gran velocidad gracias a sus patas hiperdesarrolladas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png" alt="pokemon Doduo">
                <p class="parrafo-evol">Doduo N.° 0084<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png" alt="pokemon Dodrio">
                <p class="parrafo-evol">Dodrio N.° 0085<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0084":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Doduo <b>N.° 0084</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png" alt="pokemon Doduo">
            <p class="parrafo">Las diminutas alas apenas le permiten volar, pero puede correr a gran velocidad gracias a sus patas hiperdesarrolladas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png" alt="pokemon Doduo">
                <p class="parrafo-evol">Doduo N.° 0084<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png" alt="pokemon Dodrio">
                <p class="parrafo-evol">Dodrio N.° 0085<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dodrio":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dodrio <b>N.° 0085</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png" alt="pokemon Dodrio">
            <p class="parrafo">Este Pokémon surge al dividirse una de las cabezas de Doduo. Es capaz de correr por las praderas a 60 km/h.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png" alt="pokemon Doduo">
                <p class="parrafo-evol">Doduo N.° 0084<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png" alt="pokemon Dodrio">
                <p class="parrafo-evol">Dodrio N.° 0085<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0085":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dodrio <b>N.° 0085</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png" alt="pokemon Dodrio">
            <p class="parrafo">Este Pokémon surge al dividirse una de las cabezas de Doduo. Es capaz de correr por las praderas a 60 km/h.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png" alt="pokemon Doduo">
                <p class="parrafo-evol">Doduo N.° 0084<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png" alt="pokemon Dodrio">
                <p class="parrafo-evol">Dodrio N.° 0085<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "seel":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seel <b>N.° 0086</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png" alt="pokemon Seel">
            <p class="parrafo">Le encantan los lugares gélidos y disfruta nadando en aguas a temperaturas en torno a los -10 ºC.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png" alt="pokemon Seel">
                <p class="parrafo-evol">Seel N.° 0086<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png" alt="pokemon Dewgong">
                <p class="parrafo-evol">Dewgong N.° 0087<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0086":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seel <b>N.° 0086</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png" alt="pokemon Seel">
            <p class="parrafo">Le encantan los lugares gélidos y disfruta nadando en aguas a temperaturas en torno a los -10 ºC.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png" alt="pokemon Seel">
                <p class="parrafo-evol">Seel N.° 0086<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png" alt="pokemon Dewgong">
                <p class="parrafo-evol">Dewgong N.° 0087<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dewgong":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dewgong <b>N.° 0087</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png" alt="pokemon Dewgong">
            <p class="parrafo">Su cuerpo es blanco como la nieve. Puede nadar plácidamente en mares gélidos gracias a su resistencia al frío.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png" alt="pokemon Seel">
                <p class="parrafo-evol">Seel N.° 0086<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png" alt="pokemon Dewgong">
                <p class="parrafo-evol">Dewgong N.° 0087<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0087":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dewgong <b>N.° 0087</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png" alt="pokemon Dewgong">
            <p class="parrafo">Su cuerpo es blanco como la nieve. Puede nadar plácidamente en mares gélidos gracias a su resistencia al frío.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png" alt="pokemon Seel">
                <p class="parrafo-evol">Seel N.° 0086<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png" alt="pokemon Dewgong">
                <p class="parrafo-evol">Dewgong N.° 0087<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "grimer":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Grimer <b>N.° 0088</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png" alt="pokemon Grimer">
            <p class="parrafo">Formados a partir de lodo, los Grimer se juntan en lugares sucios para aumentar el número de gérmenes de su cuerpo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png" alt="pokemon Grimer">
                <p class="parrafo-evol">Grimer N.° 0088<br>
                Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png" alt="pokemon Muk">
                <p class="parrafo-evol">Muk N.° 0089<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0088":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Grimer <b>N.° 0088</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png" alt="pokemon Grimer">
            <p class="parrafo">Formados a partir de lodo, los Grimer se juntan en lugares sucios para aumentar el número de gérmenes de su cuerpo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png" alt="pokemon Grimer">
                <p class="parrafo-evol">Grimer N.° 0088<br>
                Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png" alt="pokemon Muk">
                <p class="parrafo-evol">Muk N.° 0089<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "muk":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Muk <b>N.° 0089</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png" alt="pokemon Muk">
            <p class="parrafo">Está cubierto por un repugnante lodo. Es tan tóxico que hasta su rastro es venenoso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png" alt="pokemon Grimer">
                <p class="parrafo-evol">Grimer N.° 0088<br>
                Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png" alt="pokemon Muk">
                <p class="parrafo-evol">Muk N.° 0089<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0089":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Muk <b>N.° 0089</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png" alt="pokemon Muk">
            <p class="parrafo">Está cubierto por un repugnante lodo. Es tan tóxico que hasta su rastro es venenoso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png" alt="pokemon Grimer">
                <p class="parrafo-evol">Grimer N.° 0088<br>
                Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png" alt="pokemon Muk">
                <p class="parrafo-evol">Muk N.° 0089<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "shellder":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Shellder <b>N.° 0090</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png" alt="pokemon Shellder">
            <p class="parrafo">Está metido en una concha más dura que el diamante, pero tiene un cuerpo muy blando.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png" alt="pokemon Shellder">
                <p class="parrafo-evol">Shellder N.° 0090<br>
                Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png" alt="pokemon Cloyster">
                <p class="parrafo-evol">Cloyster N.° 0091<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0090":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Shellder <b>N.° 0090</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png" alt="pokemon Shellder">
            <p class="parrafo">Está metido en una concha más dura que el diamante, pero tiene un cuerpo muy blando.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png" alt="pokemon Shellder">
                <p class="parrafo-evol">Shellder N.° 0090<br>
                Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png" alt="pokemon Cloyster">
                <p class="parrafo-evol">Cloyster N.° 0091<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "cloyster":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cloyster <b>N.° 0091</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png" alt="pokemon Cloyster">
            <p class="parrafo">A los Cloyster que viven en las fuertes corrientes marinas les crecen largas y afiladas púas en la concha.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png" alt="pokemon Shellder">
                <p class="parrafo-evol">Shellder N.° 0090<br>
                Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png" alt="pokemon Cloyster">
                <p class="parrafo-evol">Cloyster N.° 0091<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0091":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cloyster <b>N.° 0091</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png" alt="pokemon Cloyster">
            <p class="parrafo">A los Cloyster que viven en las fuertes corrientes marinas les crecen largas y afiladas púas en la concha.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png" alt="pokemon Shellder">
                <p class="parrafo-evol">Shellder N.° 0090<br>
                Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png" alt="pokemon Cloyster">
                <p class="parrafo-evol">Cloyster N.° 0091<br>
                  Agua, Hielo.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "gastly":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gastly <b>N.° 0092</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png" alt="pokemon Gastly">
            <p class="parrafo">Su estrategia consiste en envolver al rival con su cuerpo gaseoso y envenenarlo a través de la piel.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0092":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gastly <b>N.° 0092</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png" alt="pokemon Gastly">
            <p class="parrafo">Su estrategia consiste en envolver al rival con su cuerpo gaseoso y envenenarlo a través de la piel.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "haunter":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Haunter <b>N.° 0093</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png" alt="pokemon Haunter">
            <p class="parrafo">Le gusta acechar en la oscuridad y tocarles el hombro a sus víctimas con su mano gaseosa. Estas se quedan temblando para siempre. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0093":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Haunter <b>N.° 0093</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png" alt="pokemon Haunter">
            <p class="parrafo">Le gusta acechar en la oscuridad y tocarles el hombro a sus víctimas con su mano gaseosa. Estas se quedan temblando para siempre. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "gengar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gengar <b>N.° 0094</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" alt="pokemon Gengar">
            <p class="parrafo">Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0094":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gengar <b>N.° 0094</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" alt="pokemon Gengar">
            <p class="parrafo">Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png" alt="pokemon Gastly">
                <p class="parrafo-evol">Gastly N.° 0092<br>
                Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png" alt="pokemon Haunter">
                <p class="parrafo-evol">Haunter N.° 0093<br>
                  Fantasma, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="pokemon Gengar">
                <p class="parrafo-evol">Gengar N.° 0094<br>
                  Fantasma, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "onix":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Onix <b>N.° 0095</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png" alt="pokemon Onix">
            <p class="parrafo">Al abrirse paso bajo tierra, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea así de sólido. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png" alt="pokemon Onix">
                <p class="parrafo-evol">Onix N.° 0095<br>
                Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png" alt="pokemon Steelix">
                <p class="parrafo-evol">Steelix N.° 0208<br>
                  Acero, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0095":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Onix <b>N.° 0095</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png" alt="pokemon Onix">
            <p class="parrafo">Al abrirse paso bajo tierra, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea así de sólido. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png" alt="pokemon Onix">
                <p class="parrafo-evol">Onix N.° 0095<br>
                Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png" alt="pokemon Steelix">
                <p class="parrafo-evol">Steelix N.° 0208<br>
                  Acero, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "drowzee":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Drowzee <b>N.° 0096</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png" alt="pokemon Drowzee">
            <p class="parrafo">Recuerda todos los sueños que engulle. Raramente come sueños de adultos porque los de los niños están más ricos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png" alt="pokemon Drowzee">
                <p class="parrafo-evol">Drowzee N.° 0096<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png" alt="pokemon Hypno">
                <p class="parrafo-evol">Hypno N.° 0097<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0096":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Drowzee <b>N.° 0096</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png" alt="pokemon Drowzee">
            <p class="parrafo">Recuerda todos los sueños que engulle. Raramente come sueños de adultos porque los de los niños están más ricos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png" alt="pokemon Drowzee">
                <p class="parrafo-evol">Drowzee N.° 0096<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png" alt="pokemon Hypno">
                <p class="parrafo-evol">Hypno N.° 0097<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "hypno":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hypno <b>N.° 0097</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png" alt="pokemon Hypno">
            <p class="parrafo">Cuando mira al enemigo, usa diversos poderes psíquicos como la hipnosis.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png" alt="pokemon Drowzee">
                <p class="parrafo-evol">Drowzee N.° 0096<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png" alt="pokemon Hypno">
                <p class="parrafo-evol">Hypno N.° 0097<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0097":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hypno <b>N.° 0097</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png" alt="pokemon Hypno">
            <p class="parrafo">Cuando mira al enemigo, usa diversos poderes psíquicos como la hipnosis.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png" alt="pokemon Drowzee">
                <p class="parrafo-evol">Drowzee N.° 0096<br>
                  Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png" alt="pokemon Hypno">
                <p class="parrafo-evol">Hypno N.° 0097<br>
                  Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "krabby":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Krabby <b>N.° 0098</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png" alt="pokemon Krabby">
            <p class="parrafo">Es fácil encontrarlo cerca del mar. Las largas pinzas que tiene vuelven a crecer si se las quitan de su sitio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png" alt="pokemon Krabby">
                <p class="parrafo-evol">Krabby N.° 0098<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png" alt="pokemon Kingler">
                <p class="parrafo-evol">Kingler N.° 0099<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0098":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Krabby <b>N.° 0098</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png" alt="pokemon Krabby">
            <p class="parrafo">Es fácil encontrarlo cerca del mar. Las largas pinzas que tiene vuelven a crecer si se las quitan de su sitio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png" alt="pokemon Krabby">
                <p class="parrafo-evol">Krabby N.° 0098<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png" alt="pokemon Kingler">
                <p class="parrafo-evol">Kingler N.° 0099<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kingler":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kingler <b>N.° 0099</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png" alt="pokemon Kingler">
            <p class="parrafo">La pinza tan grande que tiene posee una fuerza de 10 000 CV, pero le cuesta moverla por su gran tamaño.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png" alt="pokemon Krabby">
                <p class="parrafo-evol">Krabby N.° 0098<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png" alt="pokemon Kingler">
                <p class="parrafo-evol">Kingler N.° 0099<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0099":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kingler <b>N.° 0099</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png" alt="pokemon Kingler">
            <p class="parrafo">La pinza tan grande que tiene posee una fuerza de 10 000 CV, pero le cuesta moverla por su gran tamaño.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png" alt="pokemon Krabby">
                <p class="parrafo-evol">Krabby N.° 0098<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png" alt="pokemon Kingler">
                <p class="parrafo-evol">Kingler N.° 0099<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "voltorb":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Voltorb <b>N.° 0100</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png" alt="pokemon Voltorb">
            <p class="parrafo">Se mueve rodando. Si el terreno es irregular, una chispa provocada por algún bache lo hará explotar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png" alt="pokemon Voltorb">
                <p class="parrafo-evol">Voltorb N.° 0100<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png" alt="pokemon Electrode">
                <p class="parrafo-evol">Electrode N.° 0101<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0100":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Voltorb <b>N.° 0100</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png" alt="pokemon Voltorb">
            <p class="parrafo">Se mueve rodando. Si el terreno es irregular, una chispa provocada por algún bache lo hará explotar. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png" alt="pokemon Voltorb">
                <p class="parrafo-evol">Voltorb N.° 0100<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png" alt="pokemon Electrode">
                <p class="parrafo-evol">Electrode N.° 0101<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "electrode":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electrode <b>N.° 0101</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png" alt="pokemon Electrode">
            <p class="parrafo">Cuanta más energía almacena, mayor velocidad alcanza, aunque aumenta también el riesgo de que explote.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png" alt="pokemon Voltorb">
                <p class="parrafo-evol">Voltorb N.° 0100<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png" alt="pokemon Electrode">
                <p class="parrafo-evol">Electrode N.° 0101<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0101":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electrode <b>N.° 0101</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png" alt="pokemon Electrode">
            <p class="parrafo">Cuanta más energía almacena, mayor velocidad alcanza, aunque aumenta también el riesgo de que explote.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png" alt="pokemon Voltorb">
                <p class="parrafo-evol">Voltorb N.° 0100<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png" alt="pokemon Electrode">
                <p class="parrafo-evol">Electrode N.° 0101<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "exeggcute":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Exeggcute <b>N.° 0102</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png" alt="pokemon Exeggcute">
            <p class="parrafo">Pese a su aspecto de mera piña de huevos, se trata de un Pokémon. Al parecer, sus cabezas se comunican entre sí por telepatía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo, Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png" alt="pokemon Exeggcute">
                <p class="parrafo-evol">Exeggcute N.° 0102<br>
                  Planta, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png" alt="pokemon Exeggutor">
                <p class="parrafo-evol">Exeggutor N.° 0103<br>
                  Planta, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0102":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Exeggcute <b>N.° 0102</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png" alt="pokemon Exeggcute">
            <p class="parrafo">Pese a su aspecto de mera piña de huevos, se trata de un Pokémon. Al parecer, sus cabezas se comunican entre sí por telepatía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo, Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png" alt="pokemon Exeggcute">
                <p class="parrafo-evol">Exeggcute N.° 0102<br>
                  Planta, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png" alt="pokemon Exeggutor">
                <p class="parrafo-evol">Exeggutor N.° 0103<br>
                  Planta, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "exeggutor":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Exeggutor <b>N.° 0103</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png" alt="pokemon Exeggutor">
            <p class="parrafo">Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo, Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png" alt="pokemon Exeggcute">
                <p class="parrafo-evol">Exeggcute N.° 0102<br>
                  Planta, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png" alt="pokemon Exeggutor">
                <p class="parrafo-evol">Exeggutor N.° 0103<br>
                  Planta, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0103":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Exeggutor <b>N.° 0103</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png" alt="pokemon Exeggutor">
            <p class="parrafo">Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo, Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png" alt="pokemon Exeggcute">
                <p class="parrafo-evol">Exeggcute N.° 0102<br>
                  Planta, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png" alt="pokemon Exeggutor">
                <p class="parrafo-evol">Exeggutor N.° 0103<br>
                  Planta, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "cubone":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cubone <b>N.° 0104</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png" alt="pokemon Cubone">
            <p class="parrafo">Cuando llora al acordarse de su madre fallecida, su llanto resuena en el cráneo que lleva en la cabeza.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" alt="pokemon Cubone">
                <p class="parrafo-evol">Cubone N.° 0104<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png" alt="pokemon Marowak">
                <p class="parrafo-evol">Marowak N.° 0105<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0104":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cubone <b>N.° 0104</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png" alt="pokemon Cubone">
            <p class="parrafo">Cuando llora al acordarse de su madre fallecida, su llanto resuena en el cráneo que lleva en la cabeza.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" alt="pokemon Cubone">
                <p class="parrafo-evol">Cubone N.° 0104<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png" alt="pokemon Marowak">
                <p class="parrafo-evol">Marowak N.° 0105<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "marowak":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Marowak <b>N.° 0105</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png" alt="pokemon Marowak">
            <p class="parrafo">Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" alt="pokemon Cubone">
                <p class="parrafo-evol">Cubone N.° 0104<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png" alt="pokemon Marowak">
                <p class="parrafo-evol">Marowak N.° 0105<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0105":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Marowak <b>N.° 0105</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png" alt="pokemon Marowak">
            <p class="parrafo">Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png" alt="pokemon Cubone">
                <p class="parrafo-evol">Cubone N.° 0104<br>
                  Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png" alt="pokemon Marowak">
                <p class="parrafo-evol">Marowak N.° 0105<br>
                  Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "hitmonlee":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmonlee <b>N.° 0106</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png" alt="pokemon Hitmonlee">
            <p class="parrafo">Este Pokémon tiene un sentido del equilibrio increíble. Puede dar patadas desde cualquier posición.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0106":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmonlee <b>N.° 0106</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png" alt="pokemon Hitmonlee">
            <p class="parrafo">Este Pokémon tiene un sentido del equilibrio increíble. Puede dar patadas desde cualquier posición.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "hitmonchan":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmonchan <b>N.° 0107</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png" alt="pokemon Hitmonchan">
            <p class="parrafo">Sus puñetazos cortan el aire. Son tan veloces que el mínimo roce podría causar una quemadura.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0107":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmonchan <b>N.° 0107</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png" alt="pokemon Hitmonchan">
            <p class="parrafo">Sus puñetazos cortan el aire. Son tan veloces que el mínimo roce podría causar una quemadura.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "lickitung":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lickitung <b>N.° 0108</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png" alt="pokemon Lickitung">
            <p class="parrafo">Si sus lametones no se tratan a tiempo, su saliva pegajosa y urticante puede provocar picores persistentes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png" alt="pokemon Lickitung">
                <p class="parrafo-evol">Lickitung N.° 0108<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/463.png" alt="pokemon Lickilicky">
                <p class="parrafo-evol">Lickilicky N.° 0463<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0108":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lickitung <b>N.° 0108</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png" alt="pokemon Lickitung">
            <p class="parrafo">Si sus lametones no se tratan a tiempo, su saliva pegajosa y urticante puede provocar picores persistentes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png" alt="pokemon Lickitung">
                <p class="parrafo-evol">Lickitung N.° 0108<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/463.png" alt="pokemon Lickilicky">
                <p class="parrafo-evol">Lickilicky N.° 0463<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "koffing":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Koffing <b>N.° 0109</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png" alt="pokemon Koffing">
            <p class="parrafo">Su cuerpo está lleno a rebosar de gas venenoso. Acude a los vertederos atraído por el putrefacto olor que emana de los desperdicios.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png" alt="pokemon Koffing">
                <p class="parrafo-evol">Koffing N.° 0109<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png" alt="pokemon Weezing">
                <p class="parrafo-evol">Weezing N.° 0110<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0109":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Koffing <b>N.° 0109</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png" alt="pokemon Koffing">
            <p class="parrafo">Su cuerpo está lleno a rebosar de gas venenoso. Acude a los vertederos atraído por el putrefacto olor que emana de los desperdicios.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png" alt="pokemon Koffing">
                <p class="parrafo-evol">Koffing N.° 0109<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png" alt="pokemon Weezing">
                <p class="parrafo-evol">Weezing N.° 0110<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "weezing":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weezing <b>N.° 0110</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png" alt="pokemon Weezing">
            <p class="parrafo">Usa sus dos cuerpos para mezclar gases. Según parece, en el pasado podían hallarse ejemplares por todos los rincones de Galar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png" alt="pokemon Koffing">
                <p class="parrafo-evol">Koffing N.° 0109<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png" alt="pokemon Weezing">
                <p class="parrafo-evol">Weezing N.° 0110<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0110":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Weezing <b>N.° 0110</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png" alt="pokemon Weezing">
            <p class="parrafo">Usa sus dos cuerpos para mezclar gases. Según parece, en el pasado podían hallarse ejemplares por todos los rincones de Galar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png" alt="pokemon Koffing">
                <p class="parrafo-evol">Koffing N.° 0109<br>
                  Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png" alt="pokemon Weezing">
                <p class="parrafo-evol">Weezing N.° 0110<br>
                  Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "rhyhorn":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rhyhorn <b>N.° 0111</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png" alt="pokemon Rhyhorn">
            <p class="parrafo">Su inteligencia es limitada, aunque posee una fuerza tan considerable que le permite incluso derribar rascacielos con solo embestirlos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra, Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Hielo, Agua, Lucha, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png" alt="pokemon Rhyhorn">
                <p class="parrafo-evol">Rhyhorn N.° 0111<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png" alt="pokemon Rhydon">
                <p class="parrafo-evol">Rhydon N.° 0112<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/464.png" alt="pokemon Rhyperior">
                <p class="parrafo-evol">Rhyperior N.° 0464<br>
                  Tierra, Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0111":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rhyhorn <b>N.° 0111</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png" alt="pokemon Rhyhorn">
            <p class="parrafo">Su inteligencia es limitada, aunque posee una fuerza tan considerable que le permite incluso derribar rascacielos con solo embestirlos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra, Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Hielo, Agua, Lucha, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png" alt="pokemon Rhyhorn">
                <p class="parrafo-evol">Rhyhorn N.° 0111<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png" alt="pokemon Rhydon">
                <p class="parrafo-evol">Rhydon N.° 0112<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/464.png" alt="pokemon Rhyperior">
                <p class="parrafo-evol">Rhyperior N.° 0464<br>
                  Tierra, Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "rhydon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rhydon <b>N.° 0112</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png" alt="pokemon Rhydon">
            <p class="parrafo">Cuando evoluciona, comienza a andar con las patas traseras. Es capaz de horadar rocas con el cuerno que tiene.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra, Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Hielo, Agua, Lucha, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png" alt="pokemon Rhyhorn">
                <p class="parrafo-evol">Rhyhorn N.° 0111<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png" alt="pokemon Rhydon">
                <p class="parrafo-evol">Rhydon N.° 0112<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/464.png" alt="pokemon Rhyperior">
                <p class="parrafo-evol">Rhyperior N.° 0464<br>
                  Tierra, Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0112":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Rhydon <b>N.° 0112</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png" alt="pokemon Rhydon">
            <p class="parrafo">Cuando evoluciona, comienza a andar con las patas traseras. Es capaz de horadar rocas con el cuerno que tiene.<br><br>
            <b style="color:#0000ff">Tipo:</b> Tierra, Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Hielo, Agua, Lucha, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png" alt="pokemon Rhyhorn">
                <p class="parrafo-evol">Rhyhorn N.° 0111<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png" alt="pokemon Rhydon">
                <p class="parrafo-evol">Rhydon N.° 0112<br>
                  Tierra, Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/464.png" alt="pokemon Rhyperior">
                <p class="parrafo-evol">Rhyperior N.° 0464<br>
                  Tierra, Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "chansey":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chansey <b>N.° 0113</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png" alt="pokemon Chansey">
            <p class="parrafo">Un generoso Pokémon que pone huevos muy nutritivos y se los da a personas o Pokémon heridos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0113":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chansey <b>N.° 0113</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png" alt="pokemon Chansey">
            <p class="parrafo">Un generoso Pokémon que pone huevos muy nutritivos y se los da a personas o Pokémon heridos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "happiny":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Happiny <b>N.° 0440</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/440.png" alt="pokemon Happiny">
            <p class="parrafo">En la bolsa de su panza transporta una roca redonda y blanca. Cuando hace amigos puede llegar a regalársela.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0440":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Happiny <b>N.° 0440</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/440.png" alt="pokemon Happiny">
            <p class="parrafo">En la bolsa de su panza transporta una roca redonda y blanca. Cuando hace amigos puede llegar a regalársela.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "blissey":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Blissey <b>N.° 0242</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png" alt="pokemon Blissey">
            <p class="parrafo">Cualquiera que pruebe un poco de huevo de Blissey, se volverá más amable y agradable con todos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0242":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Blissey <b>N.° 0242</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png" alt="pokemon Blissey">
            <p class="parrafo">Cualquiera que pruebe un poco de huevo de Blissey, se volverá más amable y agradable con todos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png" alt="pokemon Happiny">
                <p class="parrafo-evol">Happiny N.° 0440<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png" alt="pokemon Chansey">
                <p class="parrafo-evol">Chansey N.° 0113<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png" alt="pokemon Blissey">
                <p class="parrafo-evol">Blissey N.° 0242<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "tangela":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tangela <b>N.° 0114</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon Tangela">
            <p class="parrafo">Sus lianas no dejan de crecer aunque se le desprendan. Aún se desconoce qué aspecto tiene sin ellas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png" alt="pokemon Tangela">
                <p class="parrafo-evol">Tangela N.° 0114<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/465.png" alt="pokemon Tangrowth">
                <p class="parrafo-evol">Tangrowth N.° 0465<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0114":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tangela <b>N.° 0114</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon Tangela">
            <p class="parrafo">Sus lianas no dejan de crecer aunque se le desprendan. Aún se desconoce qué aspecto tiene sin ellas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png" alt="pokemon Tangela">
                <p class="parrafo-evol">Tangela N.° 0114<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/465.png" alt="pokemon Tangrowth">
                <p class="parrafo-evol">Tangrowth N.° 0465<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kangaskhan":
      informacion.innerHTML = `
        <h2 class="t-pokemon">KangasKhan <b>N.° 0115</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png" alt="pokemon KangasKhan">
            <p class="parrafo">Aunque lleve una cría en el marsupio, su juego de pies no pierde ligereza. Abruma al rival con ráfagas de ágiles puñetazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png" alt="pokemon KangasKhan">
                <p class="parrafo-evol">KangasKhan N.° 0115<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0115":
      informacion.innerHTML = `
        <h2 class="t-pokemon">KangasKhan <b>N.° 0115</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png" alt="pokemon KangasKhan">
            <p class="parrafo">Aunque lleve una cría en el marsupio, su juego de pies no pierde ligereza. Abruma al rival con ráfagas de ágiles puñetazos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png" alt="pokemon KangasKhan">
                <p class="parrafo-evol">KangasKhan N.° 0115<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "horsea":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Horsea <b>N.° 0116</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png" alt="pokemon Horsea">
            <p class="parrafo">Habita en mares de aguas tranquilas. Si se siente en peligro, expulsará por la boca una densa tinta negra para poder huir.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
                <p class="parrafo-evol">Horsea N.° 0116<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
                <p class="parrafo-evol">Seadra N.° 0117<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
                <p class="parrafo-evol">Kingdra N.° 0230<br>
                  Agua, Dragon.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0116":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Horsea <b>N.° 0116</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png" alt="pokemon Horsea">
            <p class="parrafo">Habita en mares de aguas tranquilas. Si se siente en peligro, expulsará por la boca una densa tinta negra para poder huir.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
                <p class="parrafo-evol">Horsea N.° 0116<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
                <p class="parrafo-evol">Seadra N.° 0117<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
                <p class="parrafo-evol">Kingdra N.° 0230<br>
                  Agua, Dragon.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "seadra":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seadra <b>N.° 0117</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png" alt="pokemon Seadra">
            <p class="parrafo">En esta especie, es el macho quien se ocupa de la prole. Durante la época de cría, el veneno de las púas de su espalda se vuelve más potente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
                <p class="parrafo-evol">Horsea N.° 0116<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
                <p class="parrafo-evol">Seadra N.° 0117<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
                <p class="parrafo-evol">Kingdra N.° 0230<br>
                  Agua, Dragon.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0117":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seadra <b>N.° 0117</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png" alt="pokemon Seadra">
            <p class="parrafo">En esta especie, es el macho quien se ocupa de la prole. Durante la época de cría, el veneno de las púas de su espalda se vuelve más potente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
                <p class="parrafo-evol">Horsea N.° 0116<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
                <p class="parrafo-evol">Seadra N.° 0117<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
                <p class="parrafo-evol">Kingdra N.° 0230<br>
                  Agua, Dragon.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "goldeen":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Goldeen <b>N.° 0118</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png" alt="pokemon Goldeen">
            <p class="parrafo">Sus aletas pectorales, caudal y dorsal ondean gráciles en el agua. Por eso se le llama el Bailarín Acuático.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png" alt="pokemon Goldeen">
                <p class="parrafo-evol">Goldeen N.° 0118<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png" alt="pokemon Seaking">
                <p class="parrafo-evol">Seaking N.° 0119<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0118":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Goldeen <b>N.° 0118</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png" alt="pokemon Goldeen">
            <p class="parrafo">Sus aletas pectorales, caudal y dorsal ondean gráciles en el agua. Por eso se le llama el Bailarín Acuático.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png" alt="pokemon Goldeen">
                <p class="parrafo-evol">Goldeen N.° 0118<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png" alt="pokemon Seaking">
                <p class="parrafo-evol">Seaking N.° 0119<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "seaking":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seaking <b>N.° 0119</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png" alt="pokemon Seaking">
            <p class="parrafo">En otoño gana algo de peso para atraer a posibles parejas y se cubre de llamativos colores.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png" alt="pokemon Goldeen">
                <p class="parrafo-evol">Goldeen N.° 0118<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png" alt="pokemon Seaking">
                <p class="parrafo-evol">Seaking N.° 0119<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0119":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Seaking <b>N.° 0119</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png" alt="pokemon Seaking">
            <p class="parrafo">En otoño gana algo de peso para atraer a posibles parejas y se cubre de llamativos colores.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png" alt="pokemon Goldeen">
                <p class="parrafo-evol">Goldeen N.° 0118<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png" alt="pokemon Seaking">
                <p class="parrafo-evol">Seaking N.° 0119<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "staryu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Staryu <b>N.° 0120</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png" alt="pokemon Staryu">
            <p class="parrafo">A finales de verano, se pueden ver grupos de Staryu en la orilla de la playa sincronizando el brillo de sus núcleos a ritmo regular.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png" alt="pokemon Staryu">
                <p class="parrafo-evol">Staryu N.° 0120<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png" alt="pokemon Starmie">
                <p class="parrafo-evol">Starmie N.° 0121<br>
                  Agua, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0120":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Staryu <b>N.° 0120</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png" alt="pokemon Staryu">
            <p class="parrafo">A finales de verano, se pueden ver grupos de Staryu en la orilla de la playa sincronizando el brillo de sus núcleos a ritmo regular.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png" alt="pokemon Staryu">
                <p class="parrafo-evol">Staryu N.° 0120<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png" alt="pokemon Starmie">
                <p class="parrafo-evol">Starmie N.° 0121<br>
                  Agua, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "starmie":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Starmie <b>N.° 0121</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png" alt="pokemon Starmie">
            <p class="parrafo">Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png" alt="pokemon Staryu">
                <p class="parrafo-evol">Staryu N.° 0120<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png" alt="pokemon Starmie">
                <p class="parrafo-evol">Starmie N.° 0121<br>
                  Agua, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0121":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Starmie <b>N.° 0121</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png" alt="pokemon Starmie">
            <p class="parrafo">Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png" alt="pokemon Staryu">
                <p class="parrafo-evol">Staryu N.° 0120<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png" alt="pokemon Starmie">
                <p class="parrafo-evol">Starmie N.° 0121<br>
                  Agua, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mr. mime":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mr. Mime <b>N.° 0122</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png" alt="pokemon Mr. Mime">
            <p class="parrafo">Muchos estudiosos sostienen que el desarrollo de sus enormes manos se debe a su afán por practicar la pantomima.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/439.png" alt="pokemon Mime Jr.">
                <p class="parrafo-evol">Mime Jr. N.° 0439<br>
                  Psiquico, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png" alt="pokemon Mr. Mime">
                <p class="parrafo-evol">Mr. Mime N.° 0122<br>
                  Psiquico, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0122":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mr. Mime <b>N.° 0122</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png" alt="pokemon Mr. Mime">
            <p class="parrafo">Muchos estudiosos sostienen que el desarrollo de sus enormes manos se debe a su afán por practicar la pantomima.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/439.png" alt="pokemon Mime Jr.">
                <p class="parrafo-evol">Mime Jr. N.° 0439<br>
                  Psiquico, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png" alt="pokemon Mr. Mime">
                <p class="parrafo-evol">Mr. Mime N.° 0122<br>
                  Psiquico, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "scyther":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Scyther <b>N.° 0123</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png" alt="pokemon Scyther">
            <p class="parrafo">Avanza por la hierba con sus afiladas guadañas, más rápido de lo que el ojo humano puede percibir.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
                <p class="parrafo-evol">Scyther N.° 0123<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                  <p class="parrafo-evol">Scizor N.° 0212<br>
                    Bicho, Acero.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                  <p class="parrafo-evol">Kleavor N.° 0900<br>
                    Bicho, Roca.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0123":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Scyther <b>N.° 0123</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png" alt="pokemon Scyther">
            <p class="parrafo">Avanza por la hierba con sus afiladas guadañas, más rápido de lo que el ojo humano puede percibir.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
                <p class="parrafo-evol">Scyther N.° 0123<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                  <p class="parrafo-evol">Scizor N.° 0212<br>
                    Bicho, Acero.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                  <p class="parrafo-evol">Kleavor N.° 0900<br>
                    Bicho, Roca.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "jynx":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jynx <b>N.° 0124</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png" alt="pokemon Jynx">
            <p class="parrafo">En cierta parte de Galar se conocía a Jynx como la Reina del Hielo y se reverenciaba con cierto temor.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fantasma, Fuego, Siniestro, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/238.png" alt="pokemon Smoochun">
                <p class="parrafo-evol">Smoochun N.° 0238<br>
                  Hielo, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png" alt="pokemon Jynx">
                <p class="parrafo-evol">Jynx N.° 0124<br>
                  Hielo, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0124":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jynx <b>N.° 0124</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png" alt="pokemon Jynx">
            <p class="parrafo">En cierta parte de Galar se conocía a Jynx como la Reina del Hielo y se reverenciaba con cierto temor.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fantasma, Fuego, Siniestro, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/238.png" alt="pokemon Smoochun">
                <p class="parrafo-evol">Smoochun N.° 0238<br>
                  Hielo, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png" alt="pokemon Jynx">
                <p class="parrafo-evol">Jynx N.° 0124<br>
                  Hielo, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "electabuzz":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electabuzz <b>N.° 0125</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png" alt="pokemon Electabuzz">
            <p class="parrafo">Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0125":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electabuzz <b>N.° 0125</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png" alt="pokemon Electabuzz">
            <p class="parrafo">Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magmar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magmar <b>N.° 0126</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png" alt="pokemon Magmar">
            <p class="parrafo">Abate a sus presas con las llamas que genera y con frecuencia acaba reduciéndolas a carbonilla por accidente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0126":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magmar <b>N.° 0126</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png" alt="pokemon Magmar">
            <p class="parrafo">Abate a sus presas con las llamas que genera y con frecuencia acaba reduciéndolas a carbonilla por accidente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pinsir":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pinsir <b>N.° 0127</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png" alt="pokemon Pinsir">
            <p class="parrafo">Los Pinsir se juzgan entre ellos por la robustez de la cornamenta. Cuanto más imponente sea, más agradará a sus congéneres del sexo opuesto. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png" alt="pokemon Pinsir">
                <p class="parrafo-evol">Pinsir N.° 0127<br>
                  Bicho. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0127":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pinsir <b>N.° 0127</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png" alt="pokemon Pinsir">
            <p class="parrafo">Los Pinsir se juzgan entre ellos por la robustez de la cornamenta. Cuanto más imponente sea, más agradará a sus congéneres del sexo opuesto. <br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png" alt="pokemon Pinsir">
                <p class="parrafo-evol">Pinsir N.° 0127<br>
                  Bicho. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "tauros":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tauros <b>N.° 0128</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png" alt="pokemon Tauros">
            <p class="parrafo">Cuando elige una presa, embiste sin pensárselo. Este Pokémon es famoso por su carácter violento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png" alt="pokemon Tauros">
                <p class="parrafo-evol">Tauros N.° 0128<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0128":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tauros <b>N.° 0128</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png" alt="pokemon Tauros">
            <p class="parrafo">Cuando elige una presa, embiste sin pensárselo. Este Pokémon es famoso por su carácter violento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png" alt="pokemon Tauros">
                <p class="parrafo-evol">Tauros N.° 0128<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magikarp":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magikarp <b>N.° 0129</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png" alt="pokemon Magikarp">
            <p class="parrafo">Un Pokémon desvalido y patético. A veces es capaz de saltar alto, pero rara vez más de 2 m.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png" alt="pokemon Magikarp">
                <p class="parrafo-evol">Magikarp N.° 0129<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png" alt="pokemon Gyarados">
                <p class="parrafo-evol">Gyarados N.° 0130<br>
                  Agua, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0129":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magikarp <b>N.° 0129</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png" alt="pokemon Magikarp">
            <p class="parrafo">Un Pokémon desvalido y patético. A veces es capaz de saltar alto, pero rara vez más de 2 m.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png" alt="pokemon Magikarp">
                <p class="parrafo-evol">Magikarp N.° 0129<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png" alt="pokemon Gyarados">
                <p class="parrafo-evol">Gyarados N.° 0130<br>
                  Agua, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "gyarados":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gyarados <b>N.° 0130</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" alt="pokemon Gyarados">
            <p class="parrafo">Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png" alt="pokemon Magikarp">
                <p class="parrafo-evol">Magikarp N.° 0129<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png" alt="pokemon Gyarados">
                <p class="parrafo-evol">Gyarados N.° 0130<br>
                  Agua, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0130":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Gyarados <b>N.° 0130</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" alt="pokemon Gyarados">
            <p class="parrafo">Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png" alt="pokemon Magikarp">
                <p class="parrafo-evol">Magikarp N.° 0129<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png" alt="pokemon Gyarados">
                <p class="parrafo-evol">Gyarados N.° 0130<br>
                  Agua, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "lapras":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lapras <b>N.° 0131</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" alt="pokemon Lapras">
            <p class="parrafo">Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png" alt="pokemon Lapras">
                <p class="parrafo-evol">Lapras N.° 0131<br>
                  Agua, Hielo. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0131":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lapras <b>N.° 0131</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" alt="pokemon Lapras">
            <p class="parrafo">Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hielo<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png" alt="pokemon Lapras">
                <p class="parrafo-evol">Lapras N.° 0131<br>
                  Agua, Hielo. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ditto":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ditto <b>N.° 0132</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" alt="pokemon Ditto">
            <p class="parrafo">Su habilidad para transformarse es perfecta, pero, si se le hace reír, perderá la fuerza y no podrá mantenerse transformado.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png" alt="pokemon Ditto">
                <p class="parrafo-evol">Ditto N.° 0132<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0132":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ditto <b>N.° 0132</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" alt="pokemon Ditto">
            <p class="parrafo">Su habilidad para transformarse es perfecta, pero, si se le hace reír, perderá la fuerza y no podrá mantenerse transformado.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png" alt="pokemon Ditto">
                <p class="parrafo-evol">Ditto N.° 0132<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "eevee":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Eevee <b>N.° 0133</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" alt="pokemon Eevee">
            <p class="parrafo">Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
      
    case "0133":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Eevee <b>N.° 0133</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" alt="pokemon Eevee">
            <p class="parrafo">Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "vaporeon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vaporeon <b>N.° 0134</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png" alt="pokemon Vaporeon">
            <p class="parrafo">Vive cerca del agua. Su cola termina en una aleta parecida a la de un pez, por lo que hay gente que lo confunde con una sirena.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0134":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Vaporeon <b>N.° 0134</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png" alt="pokemon Vaporeon">
            <p class="parrafo">Vive cerca del agua. Su cola termina en una aleta parecida a la de un pez, por lo que hay gente que lo confunde con una sirena.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "jolteon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jolteon <b>N.° 0135</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png" alt="pokemon Jolteon">
            <p class="parrafo">Concentra la débil actividad eléctrica de sus células para lanzar dañinas descargas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0135":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jolteon <b>N.° 0135</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png" alt="pokemon Jolteon">
            <p class="parrafo">Concentra la débil actividad eléctrica de sus células para lanzar dañinas descargas. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "flareon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Flareon <b>N.° 0136</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png" alt="pokemon Flareon">
            <p class="parrafo">Calienta el aire que inhala en su saca de fuego y lo expulsa a 1700 ºC. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0136":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Flareon <b>N.° 0136</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png" alt="pokemon Flareon">
            <p class="parrafo">Calienta el aire que inhala en su saca de fuego y lo expulsa a 1700 ºC. <br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "espeon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Espeon <b>N.° 0196</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png" alt="pokemon Espeon">
            <p class="parrafo">Al predecir el siguiente movimiento de su rival, los extremos de su cola bífida tiemblan ligeramente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0196":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Espeon <b>N.° 0196</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png" alt="pokemon Espeon">
            <p class="parrafo">Al predecir el siguiente movimiento de su rival, los extremos de su cola bífida tiemblan ligeramente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "umbreon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Umbreon <b>N.° 0197</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png" alt="pokemon Umbreon">
            <p class="parrafo">Si se expone al aura de la luna, los anillos de su cuerpo relucen y adquiere un poder misterioso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Bicho, Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0197":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Umbreon <b>N.° 0197</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png" alt="pokemon Umbreon">
            <p class="parrafo">Si se expone al aura de la luna, los anillos de su cuerpo relucen y adquiere un poder misterioso.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Bicho, Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "leafeon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Leafeon <b>N.° 0470</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png" alt="pokemon Leafeon">
            <p class="parrafo">En días soleados, duerme y hace la fotosíntesis, con la que emite aire puro a su alrededor. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0470":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Leafeon <b>N.° 0470</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png" alt="pokemon Leafeon">
            <p class="parrafo">En días soleados, duerme y hace la fotosíntesis, con la que emite aire puro a su alrededor. <br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0471":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Glaceon <b>N.° 0471</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png" alt="pokemon Glaceon">
            <p class="parrafo">Controla a su antojo la temperatura corporal y congela las partículas de agua que flotan en el aire para provocar ráfagas de nieve en polvo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Acero, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "glaceon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Glaceon <b>N.° 0471</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png" alt="pokemon Glaceon">
            <p class="parrafo">Controla a su antojo la temperatura corporal y congela las partículas de agua que flotan en el aire para provocar ráfagas de nieve en polvo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Acero, Lucha, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "sylveon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sylveon <b>N.° 0700</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png" alt="pokemon Sylveon">
            <p class="parrafo">Con sus apéndices sensoriales con forma de cinta, emite unas ondas tranquilizadoras capaces de neutralizar la hostilidad de sus rivales.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0700":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sylveon <b>N.° 0700</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png" alt="pokemon Sylveon">
            <p class="parrafo">Con sus apéndices sensoriales con forma de cinta, emite unas ondas tranquilizadoras capaces de neutralizar la hostilidad de sus rivales.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" alt="pokemon Eevee">
                <p class="parrafo-evol">Eevee N.° 0133<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png" alt="pokemon Vaporeon">
                  <p class="parrafo-evol">Vaporeon N.° 0134<br>
                    Agua.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png" alt="pokemon Jolteon">
                  <p class="parrafo-evol">Jolteon N.° 0135<br>
                    Electrico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png" alt="pokemon Flareon">
                  <p class="parrafo-evol">Flareon N.° 0136<br>
                    Fuego.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png" alt="pokemon Espeon">
                  <p class="parrafo-evol">Espeon N.° 0196<br>
                    Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png" alt="pokemon Umbreon">
                  <p class="parrafo-evol">Umbreon N.° 0197<br>
                    Siniestro.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png" alt="pokemon Leafeon">
                  <p class="parrafo-evol">Leafeon N.° 0470<br>
                    Planta.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png" alt="pokemon Glaceon">
                  <p class="parrafo-evol">Glaceon N.° 0471<br>
                    Hielo.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png" alt="pokemon Sylveon">
                  <p class="parrafo-evol">Sylveon N.° 0700<br>
                    Hada.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "porygon":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon <b>N.° 0137</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png" alt="pokemon Porygon">
            <p class="parrafo">Se trata del primer Pokémon del mundo creado a partir de códigos de programación gracias al uso de tecnología de vanguardia. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0137":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon <b>N.° 0137</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png" alt="pokemon Porygon">
            <p class="parrafo">Se trata del primer Pokémon del mundo creado a partir de códigos de programación gracias al uso de tecnología de vanguardia. <br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "porygon2":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon2 <b>N.° 0233</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png" alt="pokemon Porygon2">
            <p class="parrafo">Se trata de una versión mejorada de Porygon mediante un software especial. Tiene capacidad de aprendizaje autónomo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0233":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon2 <b>N.° 0233</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png" alt="pokemon Porygon2">
            <p class="parrafo">Se trata de una versión mejorada de Porygon mediante un software especial. Tiene capacidad de aprendizaje autónomo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "porygon-z":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon-Z <b>N.° 0474</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/474.png" alt="pokemon Porygon-Z">
            <p class="parrafo">Se le instaló un software que le permite entrar y salir de otras dimensiones, pero que provocó que su comportamiento se volviese inestable.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0474":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Porygon-Z <b>N.° 0474</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/474.png" alt="pokemon Porygon-Z">
            <p class="parrafo">Se le instaló un software que le permite entrar y salir de otras dimensiones, pero que provocó que su comportamiento se volviese inestable.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png" alt="pokemon Porygon">
                <p class="parrafo-evol">Porygon N.° 0137<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png" alt="pokemon Porygon2">
                <p class="parrafo-evol">Porygon2 N.° 0233<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png" alt="pokemon Porygon-Z">
                <p class="parrafo-evol">Porygon-Z N.° 0474<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "omanyte":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Omanyte <b>N.° 0138</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png" alt="pokemon Omanyte">
            <p class="parrafo">Varios ejemplares han escapado o bien han sido liberados tras su restauración, lo que comienza a suscitar una serie de problemas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png" alt="pokemon Omanyte">
                <p class="parrafo-evol">Omanyte N.° 0138<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png" alt="pokemon Omastar">
                <p class="parrafo-evol">Omastar N.° 0139<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0138":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Omanyte <b>N.° 0138</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png" alt="pokemon Omanyte">
            <p class="parrafo">Varios ejemplares han escapado o bien han sido liberados tras su restauración, lo que comienza a suscitar una serie de problemas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png" alt="pokemon Omanyte">
                <p class="parrafo-evol">Omanyte N.° 0138<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png" alt="pokemon Omastar">
                <p class="parrafo-evol">Omastar N.° 0139<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "omastar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Omastar <b>N.° 0139</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png" alt="pokemon Omastar">
            <p class="parrafo">Se cree que se extinguió porque el excesivo tamaño y peso de su concha le impedían moverse con rapidez para capturar presas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png" alt="pokemon Omanyte">
                <p class="parrafo-evol">Omanyte N.° 0138<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png" alt="pokemon Omastar">
                <p class="parrafo-evol">Omastar N.° 0139<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0139":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Omastar <b>N.° 0139</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png" alt="pokemon Omastar">
            <p class="parrafo">Se cree que se extinguió porque el excesivo tamaño y peso de su concha le impedían moverse con rapidez para capturar presas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png" alt="pokemon Omanyte">
                <p class="parrafo-evol">Omanyte N.° 0138<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png" alt="pokemon Omastar">
                <p class="parrafo-evol">Omastar N.° 0139<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0140":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kabuto <b>N.° 0140</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png" alt="pokemon Kabuto">
            <p class="parrafo">Un Pokémon casi extinto. Cada tres días, muda el caparazón, que se va endureciendo de forma progresiva.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png" alt="pokemon Kabuto">
                <p class="parrafo-evol">Kabuto N.° 0140<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png" alt="pokemon Kabutops">
                <p class="parrafo-evol">Kabutops N.° 0141<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kabuto":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kabuto <b>N.° 0140</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png" alt="pokemon Kabuto">
            <p class="parrafo">Un Pokémon casi extinto. Cada tres días, muda el caparazón, que se va endureciendo de forma progresiva.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png" alt="pokemon Kabuto">
                <p class="parrafo-evol">Kabuto N.° 0140<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png" alt="pokemon Kabutops">
                <p class="parrafo-evol">Kabutops N.° 0141<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "kabutops":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kabutops <b>N.° 0141</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png" alt="pokemon Kabutops">
            <p class="parrafo">Despedaza a las presas que atrapa para sorber sus fluidos y deja los restos para que otros Pokémon den buena cuenta de ellos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png" alt="pokemon Kabuto">
                <p class="parrafo-evol">Kabuto N.° 0140<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png" alt="pokemon Kabutops">
                <p class="parrafo-evol">Kabutops N.° 0141<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0141":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Kabutops <b>N.° 0141</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png" alt="pokemon Kabutops">
            <p class="parrafo">Despedaza a las presas que atrapa para sorber sus fluidos y deja los restos para que otros Pokémon den buena cuenta de ellos. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png" alt="pokemon Kabuto">
                <p class="parrafo-evol">Kabuto N.° 0140<br>
                  Roca, Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png" alt="pokemon Kabutops">
                <p class="parrafo-evol">Kabutops N.° 0141<br>
                  Roca, Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "aerodactyl":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Aerodactyl <b>N.° 0142</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png" alt="pokemon Aerodactyl">
            <p class="parrafo">Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png" alt="pokemon Aerodactyl">
                <p class="parrafo-evol">Aerodactyl N.° 0142<br>
                  Roca, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0142":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Aerodactyl <b>N.° 0142</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png" alt="pokemon Aerodactyl">
            <p class="parrafo">Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png" alt="pokemon Aerodactyl">
                <p class="parrafo-evol">Aerodactyl N.° 0142<br>
                  Roca, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "snorlax":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Snorlax <b>N.° 0143</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" alt="pokemon Snorlax">
            <p class="parrafo">No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/446.png" alt="pokemon Munchlax">
                <p class="parrafo-evol">Munchlax N.° 0446<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png" alt="pokemon Snorlax">
                <p class="parrafo-evol">Snorlax N.° 0143<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0143":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Snorlax <b>N.° 0143</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" alt="pokemon Snorlax">
            <p class="parrafo">No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/446.png" alt="pokemon Munchlax">
                <p class="parrafo-evol">Munchlax N.° 0446<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png" alt="pokemon Snorlax">
                <p class="parrafo-evol">Snorlax N.° 0143<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "munchlax":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Munchlax <b>N.° 0446</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png" alt="pokemon Munchlax">
            <p class="parrafo">Atiborrarse de comida es su fijación. Como no le hace ascos a nada, puede ingerir alimentos podridos sin inmutarse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/446.png" alt="pokemon Munchlax">
                <p class="parrafo-evol">Munchlax N.° 0446<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png" alt="pokemon Snorlax">
                <p class="parrafo-evol">Snorlax N.° 0143<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0446":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Munchlax <b>N.° 0446</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png" alt="pokemon Munchlax">
            <p class="parrafo">Atiborrarse de comida es su fijación. Como no le hace ascos a nada, puede ingerir alimentos podridos sin inmutarse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/446.png" alt="pokemon Munchlax">
                <p class="parrafo-evol">Munchlax N.° 0446<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png" alt="pokemon Snorlax">
                <p class="parrafo-evol">Snorlax N.° 0143<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "articuno":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Articuno <b>N.° 0144</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png" alt="pokemon Articuno">
            <p class="parrafo">Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png" alt="pokemon Articuno">
                <p class="parrafo-evol">Articuno N.° 0144<br>
                  Hielo, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0144":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Articuno <b>N.° 0144</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png" alt="pokemon Articuno">
            <p class="parrafo">Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png" alt="pokemon Articuno">
                <p class="parrafo-evol">Articuno N.° 0144<br>
                  Hielo, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "zapdos":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Zapdos <b>N.° 0145</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png" alt="pokemon Zapdos">
            <p class="parrafo">Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png" alt="pokemon Zapdos">
                <p class="parrafo-evol">Zapdos N.° 0145<br>
                  Electrico, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0145":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Zapdos <b>N.° 0145</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png" alt="pokemon Zapdos">
            <p class="parrafo">Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta. <br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png" alt="pokemon Zapdos">
                <p class="parrafo-evol">Zapdos N.° 0145<br>
                  Electrico, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "moltres":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Moltres <b>N.° 0146</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png" alt="pokemon Moltres">
            <p class="parrafo">Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png" alt="pokemon Moltres">
                <p class="parrafo-evol">Moltres N.° 0146<br>
                  Fuego, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0146":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Moltres <b>N.° 0146</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png" alt="pokemon Moltres">
            <p class="parrafo">Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png" alt="pokemon Moltres">
                <p class="parrafo-evol">Moltres N.° 0146<br>
                  Fuego, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dratini":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dratini <b>N.° 0147</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png" alt="pokemon Dratini">
            <p class="parrafo">Durante la etapa de crecimiento, muda muchas veces de piel y se protege mediante una cascada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Hielo, Dragon.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0147":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dratini <b>N.° 0147</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png" alt="pokemon Dratini">
            <p class="parrafo">Durante la etapa de crecimiento, muda muchas veces de piel y se protege mediante una cascada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Hielo, Dragon.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dragonair":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dragonair <b>N.° 0148</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png" alt="pokemon Dragonair">
            <p class="parrafo">Dicen que, cuando su cuerpo desprende un aura, el tiempo empieza a cambiar inmediatamente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Hielo, Dragon.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0148":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dragonair <b>N.° 0148</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png" alt="pokemon Dragonair">
            <p class="parrafo">Dicen que, cuando su cuerpo desprende un aura, el tiempo empieza a cambiar inmediatamente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Hielo, Dragon.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "dragonite":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dragonite <b>N.° 0149</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png" alt="pokemon Dragonite">
            <p class="parrafo">Dicen que viven en una isla en algún lugar del océano que solo ellos habitan. <br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Dragon, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0149":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Dragonite <b>N.° 0149</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png" alt="pokemon Dragonite">
            <p class="parrafo">Dicen que viven en una isla en algún lugar del océano que solo ellos habitan. <br><br>
            <b style="color:#0000ff">Tipo:</b> Dragon, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Dragon, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png" alt="pokemon Dratini">
                <p class="parrafo-evol">Dratini N.° 0147<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png" alt="pokemon Dragonair">
                <p class="parrafo-evol">Dragonair N.° 0148<br>
                  Dragon.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="pokemon Dragonite">
                <p class="parrafo-evol">Dragonite N.° 0149<br>
                  Dragon, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mewtwo":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mewtwo <b>N.° 0150</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" alt="pokemon Mewtwo">
            <p class="parrafo">Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png" alt="pokemon Mewtwo">
                <p class="parrafo-evol">Mewtwo N.° 0150<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0150":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mewtwo <b>N.° 0150</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" alt="pokemon Mewtwo">
            <p class="parrafo">Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png" alt="pokemon Mewtwo">
                <p class="parrafo-evol">Mewtwo N.° 0150<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mew":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mew <b>N.° 0151</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="pokemon Mew">
            <p class="parrafo">Si se observa a través de un microscopio, puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png" alt="pokemon Mew">
                <p class="parrafo-evol">Mew N.° 0151<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0151":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mew <b>N.° 0151</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="pokemon Mew">
            <p class="parrafo">Si se observa a través de un microscopio, puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png" alt="pokemon Mew">
                <p class="parrafo-evol">Mew N.° 0151<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "chikorita":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chikorita <b>N.° 0152</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt="pokemon Chikorita">
            <p class="parrafo">Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0152":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chikorita <b>N.° 0152</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt="pokemon Chikorita">
            <p class="parrafo">Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "bayleef":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bayleef <b>N.° 0153</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png" alt="pokemon Bayleef">
            <p class="parrafo">Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0153":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bayleef <b>N.° 0153</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png" alt="pokemon Bayleef">
            <p class="parrafo">Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "meganium":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Meganium <b>N.° 0154</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png" alt="pokemon Meganium">
            <p class="parrafo">La fragancia de la flor de Meganium aplaca y suaviza los ánimos. Al luchar, este Pokémon libera mayor cantidad de esencia para disminuir el ánimo de combate de su oponente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0154":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Meganium <b>N.° 0154</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png" alt="pokemon Meganium">
            <p class="parrafo">La fragancia de la flor de Meganium aplaca y suaviza los ánimos. Al luchar, este Pokémon libera mayor cantidad de esencia para disminuir el ánimo de combate de su oponente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png" alt="pokemon Chikorita">
                <p class="parrafo-evol">Chikorita N.° 0152<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png" alt="pokemon Bayleef">
                <p class="parrafo-evol">Bayleef N.° 0153<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png" alt="pokemon Meganium">
                <p class="parrafo-evol">Meganium N.° 0154<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "cyndaquil":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cyndaquil <b>N.° 0155</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt="pokemon Cyndaquil">
            <p class="parrafo">Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0155":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cyndaquil <b>N.° 0155</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt="pokemon Cyndaquil">
            <p class="parrafo">Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "quilava":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Quilava <b>N.° 0156</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png" alt="pokemon Quilava">
            <p class="parrafo">Quilava mantiene a sus rivales a raya con la intensidad de sus llamas y las ráfagas de aire ígneo que producen. También aprovecha su espectacular agilidad para esquivar ataques a la vez que abrasa al rival con sus llamas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0156":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Quilava <b>N.° 0156</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png" alt="pokemon Quilava">
            <p class="parrafo">Quilava mantiene a sus rivales a raya con la intensidad de sus llamas y las ráfagas de aire ígneo que producen. También aprovecha su espectacular agilidad para esquivar ataques a la vez que abrasa al rival con sus llamas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "typhlosion":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Typhlosion <b>N.° 0157</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png" alt="pokemon Typhlosion">
            <p class="parrafo">Typhlosion se oculta tras un trémulo haz de calor que crea mediante sus intensas y sofocantes llamaradas. Este Pokémon causa explosiones de fuego que reducen todo a cenizas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0157":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Typhlosion <b>N.° 0157</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png" alt="pokemon Typhlosion">
            <p class="parrafo">Typhlosion se oculta tras un trémulo haz de calor que crea mediante sus intensas y sofocantes llamaradas. Este Pokémon causa explosiones de fuego que reducen todo a cenizas.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png" alt="pokemon Cyndaquil">
                <p class="parrafo-evol">Cyndaquil N.° 0155<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png" alt="pokemon Quilava">
                <p class="parrafo-evol">Quilava N.° 0156<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png" alt="pokemon Typhlosion">
                <p class="parrafo-evol">Typhlosion N.° 0157<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "totodile":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Totodile <b>N.° 0158</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt="pokemon Totodile">
            <p class="parrafo">Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0158":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Totodile <b>N.° 0158</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt="pokemon Totodile">
            <p class="parrafo">Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "croconaw":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Croconaw <b>N.° 0159</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png" alt="pokemon Croconaw">
            <p class="parrafo">Una vez que Croconaw le ha clavado los colmillos a su presa, es imposible que escape porque los tiene hacia adentro como si fueran anzuelos. Cuando Croconaw hinca los dientes, no hay escapatoria.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0159":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Croconaw <b>N.° 0159</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png" alt="pokemon Croconaw">
            <p class="parrafo">Una vez que Croconaw le ha clavado los colmillos a su presa, es imposible que escape porque los tiene hacia adentro como si fueran anzuelos. Cuando Croconaw hinca los dientes, no hay escapatoria.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "feraligatr":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Feraligatr <b>N.° 0160</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png" alt="pokemon Feraligatr">
            <p class="parrafo">Feraligatr intimida a sus oponentes abriendo las grandes fauces que tiene. En combate, golpea el suelo bruscamente con las gruesas y fuertes patas traseras que tiene para cargar contra su rival a una velocidad de vértigo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0160":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Feraligatr <b>N.° 0160</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png" alt="pokemon Feraligatr">
            <p class="parrafo">Feraligatr intimida a sus oponentes abriendo las grandes fauces que tiene. En combate, golpea el suelo bruscamente con las gruesas y fuertes patas traseras que tiene para cargar contra su rival a una velocidad de vértigo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png" alt="pokemon Totodile">
                <p class="parrafo-evol">Totodile N.° 0158<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png" alt="pokemon Croconaw">
                <p class="parrafo-evol">Croconaw N.° 0159<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png" alt="pokemon Feraligatr">
                <p class="parrafo-evol">Feraligatr N.° 0160<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sentret":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sentret <b>N.° 0161</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png" alt="pokemon Sentret">
            <p class="parrafo">Sentret no duerme a menos que otro haga guardia. El que hace de centinela lo despertará al mínimo signo de peligro. Cuando este Pokémon se separa de su manada, es incapaz de echarse a dormir, presa del miedo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/161.png" alt="pokemon Sentret">
                <p class="parrafo-evol">Sentret N.° 0161<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/162.png" alt="pokemon Furret">
                <p class="parrafo-evol">Furret N.° 0162<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0161":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sentret <b>N.° 0161</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png" alt="pokemon Sentret">
            <p class="parrafo">Sentret no duerme a menos que otro haga guardia. El que hace de centinela lo despertará al mínimo signo de peligro. Cuando este Pokémon se separa de su manada, es incapaz de echarse a dormir, presa del miedo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/161.png" alt="pokemon Sentret">
                <p class="parrafo-evol">Sentret N.° 0161<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/162.png" alt="pokemon Furret">
                <p class="parrafo-evol">Furret N.° 0162<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "furret":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Furret <b>N.° 0162</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png" alt="pokemon Furret">
            <p class="parrafo">Furret es de constitución muy delgada. En combate le resulta útil porque puede escabullirse con habilidad por cualquier huequito y escapar. A pesar de que tiene patas cortas, es ágil y veloz.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/161.png" alt="pokemon Sentret">
                <p class="parrafo-evol">Sentret N.° 0161<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/162.png" alt="pokemon Furret">
                <p class="parrafo-evol">Furret N.° 0162<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0162":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Furret <b>N.° 0162</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png" alt="pokemon Furret">
            <p class="parrafo">Furret es de constitución muy delgada. En combate le resulta útil porque puede escabullirse con habilidad por cualquier huequito y escapar. A pesar de que tiene patas cortas, es ágil y veloz.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/161.png" alt="pokemon Sentret">
                <p class="parrafo-evol">Sentret N.° 0161<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/162.png" alt="pokemon Furret">
                <p class="parrafo-evol">Furret N.° 0162<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "hoothoot":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hoothoot <b>N.° 0163</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png" alt="pokemon Hoothoot">
            <p class="parrafo">Se apoya en una sola pata y, cuando cambia de una a otra, se mueve tan rápido que apenas se percibe.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/163.png" alt="pokemon Hoothoot">
                <p class="parrafo-evol">Hoothoot N.° 0163<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/164.png" alt="pokemon Noctowl">
                <p class="parrafo-evol">Noctowl N.° 0164<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0163":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hoothoot <b>N.° 0163</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png" alt="pokemon Hoothoot">
            <p class="parrafo">Se apoya en una sola pata y, cuando cambia de una a otra, se mueve tan rápido que apenas se percibe.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/163.png" alt="pokemon Hoothoot">
                <p class="parrafo-evol">Hoothoot N.° 0163<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/164.png" alt="pokemon Noctowl">
                <p class="parrafo-evol">Noctowl N.° 0164<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "noctowl":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Noctowl <b>N.° 0164</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png" alt="pokemon Noctowl">
            <p class="parrafo">Tiene los ojos muy desarrollados y puede ver con increíble claridad en la oscuridad más absoluta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/163.png" alt="pokemon Hoothoot">
                <p class="parrafo-evol">Hoothoot N.° 0163<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/164.png" alt="pokemon Noctowl">
                <p class="parrafo-evol">Noctowl N.° 0164<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0164":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Noctowl <b>N.° 0164</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png" alt="pokemon Noctowl">
            <p class="parrafo">Tiene los ojos muy desarrollados y puede ver con increíble claridad en la oscuridad más absoluta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/163.png" alt="pokemon Hoothoot">
                <p class="parrafo-evol">Hoothoot N.° 0163<br>
                  Normal, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/164.png" alt="pokemon Noctowl">
                <p class="parrafo-evol">Noctowl N.° 0164<br>
                  Normal, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ledyba":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ledyba <b>N.° 0165</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png" alt="pokemon Ledyba">
            <p class="parrafo">Este Pokémon no soporta el frío. En Alola, sin embargo, se encuentra en su elemento y se lo puede ver revoloteando vivaracho por doquier.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/165.png" alt="pokemon Ledyba">
                <p class="parrafo-evol">Ledyba N.° 0165<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/166.png" alt="pokemon Ledian">
                <p class="parrafo-evol">Ledian N.° 0166<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0165":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ledyba <b>N.° 0165</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png" alt="pokemon Ledyba">
            <p class="parrafo">Este Pokémon no soporta el frío. En Alola, sin embargo, se encuentra en su elemento y se lo puede ver revoloteando vivaracho por doquier.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/165.png" alt="pokemon Ledyba">
                <p class="parrafo-evol">Ledyba N.° 0165<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/166.png" alt="pokemon Ledian">
                <p class="parrafo-evol">Ledian N.° 0166<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ledian":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ledian <b>N.° 0166</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png" alt="pokemon Ledian">
            <p class="parrafo">Se dice que los motivos que luce en el dorso guardan relación con las estrellas, aunque esta teoría sigue siendo todo un misterio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/165.png" alt="pokemon Ledyba">
                <p class="parrafo-evol">Ledyba N.° 0165<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/166.png" alt="pokemon Ledian">
                <p class="parrafo-evol">Ledian N.° 0166<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0166":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ledian <b>N.° 0166</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png" alt="pokemon Ledian">
            <p class="parrafo">Se dice que los motivos que luce en el dorso guardan relación con las estrellas, aunque esta teoría sigue siendo todo un misterio.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/165.png" alt="pokemon Ledyba">
                <p class="parrafo-evol">Ledyba N.° 0165<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/166.png" alt="pokemon Ledian">
                <p class="parrafo-evol">Ledian N.° 0166<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "spinarak":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Spinarak <b>N.° 0167</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png" alt="pokemon Spinarak">
            <p class="parrafo">Segrega un hilo de increíble resistencia con el que teje su tela, capaz de soportar el peso de una roca de 10 kg sin romperse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/167.png" alt="pokemon Spinarak">
                <p class="parrafo-evol">Spinarak N.° 0167<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/168.png" alt="pokemon Ariados">
                <p class="parrafo-evol">Ariados N.° 0168<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0167":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Spinarak <b>N.° 0167</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png" alt="pokemon Spinarak">
            <p class="parrafo">Segrega un hilo de increíble resistencia con el que teje su tela, capaz de soportar el peso de una roca de 10 kg sin romperse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/167.png" alt="pokemon Spinarak">
                <p class="parrafo-evol">Spinarak N.° 0167<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/168.png" alt="pokemon Ariados">
                <p class="parrafo-evol">Ariados N.° 0168<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ariados":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ariados <b>N.° 0168</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png" alt="pokemon Ariados">
            <p class="parrafo">Ronda por la noche en busca de presas a las que inmoviliza con su hilo para luego clavarles los colmillos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/167.png" alt="pokemon Spinarak">
                <p class="parrafo-evol">Spinarak N.° 0167<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/168.png" alt="pokemon Ariados">
                <p class="parrafo-evol">Ariados N.° 0168<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0168":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ariados <b>N.° 0168</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png" alt="pokemon Ariados">
            <p class="parrafo">Ronda por la noche en busca de presas a las que inmoviliza con su hilo para luego clavarles los colmillos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Veneno.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/167.png" alt="pokemon Spinarak">
                <p class="parrafo-evol">Spinarak N.° 0167<br>
                  Bicho, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/168.png" alt="pokemon Ariados">
                <p class="parrafo-evol">Ariados N.° 0168<br>
                  Bicho, Veneno.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "crobat":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Crobat <b>N.° 0169</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png" alt="pokemon Crobat">
            <p class="parrafo">Sus patas se han convertido en alas. Se lanza sobre su presa en un vuelo silencioso a alta velocidad y le clava los colmillos en la nuca.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0169":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Crobat <b>N.° 0169</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png" alt="pokemon Crobat">
            <p class="parrafo">Sus patas se han convertido en alas. Se lanza sobre su presa en un vuelo silencioso a alta velocidad y le clava los colmillos en la nuca.<br><br>
            <b style="color:#0000ff">Tipo:</b> Veneno, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png" alt="pokemon Zubat">
                <p class="parrafo-evol">Zubat N.° 0041<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png" alt="pokemon Golbat">
                <p class="parrafo-evol">Golbat N.° 0042<br>
                  Veneno, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png" alt="pokemon Crobat">
                <p class="parrafo-evol">Crobat N.° 0169<br>
                  Veneno, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "chinchou":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chinchou <b>N.° 0170</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png" alt="pokemon Chinchou">
            <p class="parrafo">Sus otrora dos aletas han evolucionado a las actuales antenas y ambas tienen carga positiva y negativa.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/170.png" alt="pokemon Chinchou">
                <p class="parrafo-evol">Chinchou N.° 0170<br>
                  Agua, Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/171.png" alt="pokemon Lanturn">
                <p class="parrafo-evol">Lanturn N.° 0171<br>
                  Agua, Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0170":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Chinchou <b>N.° 0170</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png" alt="pokemon Chinchou">
            <p class="parrafo">Sus otrora dos aletas han evolucionado a las actuales antenas y ambas tienen carga positiva y negativa.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/170.png" alt="pokemon Chinchou">
                <p class="parrafo-evol">Chinchou N.° 0170<br>
                  Agua, Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/171.png" alt="pokemon Lanturn">
                <p class="parrafo-evol">Lanturn N.° 0171<br>
                  Agua, Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "lanturn":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lanturn <b>N.° 0171</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png" alt="pokemon Lanturn">
            <p class="parrafo">La luz que emite es tan brillante que puede iluminar la superficie del mar desde unos 5 km de profundidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/170.png" alt="pokemon Chinchou">
                <p class="parrafo-evol">Chinchou N.° 0170<br>
                  Agua, Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/171.png" alt="pokemon Lanturn">
                <p class="parrafo-evol">Lanturn N.° 0171<br>
                  Agua, Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0171":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lanturn <b>N.° 0171</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png" alt="pokemon Lanturn">
            <p class="parrafo">La luz que emite es tan brillante que puede iluminar la superficie del mar desde unos 5 km de profundidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/170.png" alt="pokemon Chinchou">
                <p class="parrafo-evol">Chinchou N.° 0170<br>
                  Agua, Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/171.png" alt="pokemon Lanturn">
                <p class="parrafo-evol">Lanturn N.° 0171<br>
                  Agua, Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pichu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pichu <b>N.° 0172</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png" alt="pokemon Pichu">
            <p class="parrafo">No se le da muy bien el almacenamiento de electricidad. A la mínima, descarga energía sin darse cuenta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0172":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pichu <b>N.° 0172</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png" alt="pokemon Pichu">
            <p class="parrafo">No se le da muy bien el almacenamiento de electricidad. A la mínima, descarga energía sin darse cuenta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png" alt="pokemon pichu">
                <p class="parrafo-evol">Pichu N.° 0172<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="pokemon pikachu">
                <p class="parrafo-evol">Pikachu N.° 0025<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" alt="pokemon raichu">
                <p class="parrafo-evol">Raichu N.° 0026<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "cleffa":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cleffa <b>N.° 0173</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png" alt="pokemon cleffa">
            <p class="parrafo">Los lugareños rumorean que suele encontrarse en lugares donde han caído estrellas fugaces.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0173":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Cleffa <b>N.° 0173</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png" alt="pokemon cleffa">
            <p class="parrafo">Los lugareños rumorean que suele encontrarse en lugares donde han caído estrellas fugaces.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png" alt="pokemon cleffa">
                <p class="parrafo-evol">Cleffa N.° 0173<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="pokemon clefairy">
                <p class="parrafo-evol">Clefairy N.° 0035<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png" alt="pokemon clefable">
                <p class="parrafo-evol">Clefable N.° 0036<br>
                  Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "igglybuff":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Igglybuff <b>N.° 0174</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png" alt="pokemon Igglybuff">
            <p class="parrafo">Su cuerpo suave y elástico desprende un aroma ligeramente dulce. Cuando empieza a botar, no puede parar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0174":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Igglybuff <b>N.° 0174</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png" alt="pokemon Igglybuff">
            <p class="parrafo">Su cuerpo suave y elástico desprende un aroma ligeramente dulce. Cuando empieza a botar, no puede parar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png" alt="pokemon igglybuff">
                <p class="parrafo-evol">Igglybuff N.° 0174<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" alt="pokemon Jigglypuff">
                <p class="parrafo-evol">Jigglypuff N.° 0039<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png" alt="pokemon Wigglytuff">
                <p class="parrafo-evol">Wigglytuff N.° 0040<br>
                  Normal, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "togepi":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togepi <b>N.° 0175</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png" alt="pokemon Togepi">
            <p class="parrafo">El cascarón parece estar lleno de alegría. Dicen que trae buena suerte si se le trata con cariño.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0175":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togepi <b>N.° 0175</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png" alt="pokemon Togepi">
            <p class="parrafo">El cascarón parece estar lleno de alegría. Dicen que trae buena suerte si se le trata con cariño.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "togetic":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togetic <b>N.° 0176</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png" alt="pokemon Togetic">
            <p class="parrafo">Dicen que se le aparece a la gente de buen corazón y la inunda de felicidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0176":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togetic <b>N.° 0176</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png" alt="pokemon Togetic">
            <p class="parrafo">Dicen que se le aparece a la gente de buen corazón y la inunda de felicidad.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "togekiss":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togekiss <b>N.° 0468</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png" alt="pokemon Togekiss">
            <p class="parrafo">Este Pokémon jamás se muestra en lugares donde reine la discordia y la disensión. Últimamente apenas se avistan ejemplares.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0468":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Togekiss <b>N.° 0468</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png" alt="pokemon Togekiss">
            <p class="parrafo">Este Pokémon jamás se muestra en lugares donde reine la discordia y la disensión. Últimamente apenas se avistan ejemplares.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hada, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png" alt="pokemon Togepi">
                <p class="parrafo-evol">Togepi N.° 0175<br>
                  Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png" alt="pokemon Togetic">
                <p class="parrafo-evol">Togetic N.° 0176<br>
                  Hada, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png" alt="pokemon Togekiss">
                <p class="parrafo-evol">Togekiss N.° 0468<br>
                  Hada, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "natu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Natu <b>N.° 0177</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png" alt="pokemon Natu">
            <p class="parrafo">Trepa con gran habilidad por el tronco de los árboles, donde aprovecha para picotear los brotes nuevos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/177.png" alt="pokemon Natu">
                <p class="parrafo-evol">Natu N.° 0177<br>
                  Psiquico, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/178.png" alt="pokemon Xatu">
                <p class="parrafo-evol">Xatu N.° 0178<br>
                  Psiquico, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0177":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Natu <b>N.° 0177</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png" alt="pokemon Natu">
            <p class="parrafo">Trepa con gran habilidad por el tronco de los árboles, donde aprovecha para picotear los brotes nuevos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/177.png" alt="pokemon Natu">
                <p class="parrafo-evol">Natu N.° 0177<br>
                  Psiquico, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/178.png" alt="pokemon Xatu">
                <p class="parrafo-evol">Xatu N.° 0178<br>
                  Psiquico, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "xatu":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Xatu <b>N.° 0178</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png" alt="pokemon Xatu">
            <p class="parrafo">Dicen que se mantiene prácticamente inmóvil y en silencio porque observa el pasado y el futuro al mismo tiempo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/177.png" alt="pokemon Natu">
                <p class="parrafo-evol">Natu N.° 0177<br>
                  Psiquico, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/178.png" alt="pokemon Xatu">
                <p class="parrafo-evol">Xatu N.° 0178<br>
                  Psiquico, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0178":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Xatu <b>N.° 0178</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png" alt="pokemon Xatu">
            <p class="parrafo">Dicen que se mantiene prácticamente inmóvil y en silencio porque observa el pasado y el futuro al mismo tiempo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/177.png" alt="pokemon Natu">
                <p class="parrafo-evol">Natu N.° 0177<br>
                  Psiquico, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/178.png" alt="pokemon Xatu">
                <p class="parrafo-evol">Xatu N.° 0178<br>
                  Psiquico, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mareep":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mareep <b>N.° 0179</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png" alt="pokemon Mareep">
            <p class="parrafo">Cuando almacena electricidad estática en su cuerpo, la lana dobla su volumen. Quien la toque recibirá una descarga.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0179":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mareep <b>N.° 0179</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png" alt="pokemon Mareep">
            <p class="parrafo">Cuando almacena electricidad estática en su cuerpo, la lana dobla su volumen. Quien la toque recibirá una descarga.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "flaaffy":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Flaaffy <b>N.° 0180</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png" alt="pokemon Flaaffy">
            <p class="parrafo">Como almacena tanta electricidad, en algunas partes de su cuerpo no le crece ni la lana.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0180":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Flaaffy <b>N.° 0180</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png" alt="pokemon Flaaffy">
            <p class="parrafo">Como almacena tanta electricidad, en algunas partes de su cuerpo no le crece ni la lana.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ampharos":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ampharos <b>N.° 0181</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png" alt="pokemon Ampharos">
            <p class="parrafo">El brillo de su cola es visible desde lejos. En la antigüedad, se usaba mucho como faro.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0181":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ampharos <b>N.° 0181</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png" alt="pokemon Ampharos">
            <p class="parrafo">El brillo de su cola es visible desde lejos. En la antigüedad, se usaba mucho como faro.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico.<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png" alt="pokemon Mareep">
                <p class="parrafo-evol">Mareep N.° 0179<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png" alt="pokemon Flaaffy">
                <p class="parrafo-evol">Flaaffy N.° 0180<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png" alt="pokemon Ampharos">
                <p class="parrafo-evol">Ampharos N.° 0181<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "bellossom":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bellossom <b>N.° 0182</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png" alt="pokemon Bellossom">
            <p class="parrafo">Abunda en los trópicos. Al bailar, sus pétalos se rozan y emiten un agradable sonido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                  <p class="parrafo-evol">Vileplume N.° 0045<br>
                    Planta, Veneno.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                  <p class="parrafo-evol">Bellossom N.° 0182<br>
                    Planta.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0182":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bellossom <b>N.° 0182</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png" alt="pokemon Bellossom">
            <p class="parrafo">Abunda en los trópicos. Al bailar, sus pétalos se rozan y emiten un agradable sonido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png" alt="pokemon Oddish">
                <p class="parrafo-evol">Oddish N.° 0043<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png" alt="pokemon Gloom">
                <p class="parrafo-evol">Gloom N.° 0044<br>
                  Planta, Veneno.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png" alt="pokemon Vileplume">
                  <p class="parrafo-evol">Vileplume N.° 0045<br>
                    Planta, Veneno.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png" alt="pokemon Bellossom">
                  <p class="parrafo-evol">Bellossom N.° 0182<br>
                    Planta.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "marill":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Marill <b>N.° 0183</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png" alt="pokemon Marill">
            <p class="parrafo">Tiene un pelaje que repele el agua, por lo que está seco incluso después de bañarse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0183":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Marill <b>N.° 0183</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png" alt="pokemon Marill">
            <p class="parrafo">Tiene un pelaje que repele el agua, por lo que está seco incluso después de bañarse.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "azurill":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Azurill <b>N.° 0298</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png" alt="pokemon Azurill">
            <p class="parrafo">Rebota como una pelota. Para luchar contra enemigos más grandes, agita la cola en el aire.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0298":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Azurill <b>N.° 0298</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png" alt="pokemon Azurill">
            <p class="parrafo">Rebota como una pelota. Para luchar contra enemigos más grandes, agita la cola en el aire.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "azumarill":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Azumarill <b>N.° 0184</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png" alt="pokemon Azumarill">
            <p class="parrafo">Sus largas orejas son unos sensores excepcionales que le permiten diferenciar e identificar lo que oye dentro del agua.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0184":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Azumarill <b>N.° 0184</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png" alt="pokemon Azumarill">
            <p class="parrafo">Sus largas orejas son unos sensores excepcionales que le permiten diferenciar e identificar lo que oye dentro del agua.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Hada.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Veneno.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png" alt="pokemon Azurill">
                <p class="parrafo-evol">Azurill N.° 0298<br>
                  Normal, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png" alt="pokemon Marill">
                <p class="parrafo-evol">Marill N.° 0183<br>
                  Agua, Hada.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png" alt="pokemon Azumarill">
                <p class="parrafo-evol">Azumarill N.° 0184<br>
                  Agua, Hada.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sudowoodo":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sudowoodo <b>N.° 0185</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png" alt="pokemon Sudowoodo">
            <p class="parrafo">Aunque pretende ser un árbol, en su composición se parece más a una roca que a una planta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Acero, Planta, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/438.png" alt="pokemon Bonsly">
                <p class="parrafo-evol">Bonsly N.° 0438<br>
                  Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/185.png" alt="pokemon Sudowoodo">
                <p class="parrafo-evol">Sudowoodo N.° 0185<br>
                  Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0185":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sudowoodo <b>N.° 0185</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png" alt="pokemon Sudowoodo">
            <p class="parrafo">Aunque pretende ser un árbol, en su composición se parece más a una roca que a una planta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Acero, Planta, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/438.png" alt="pokemon Bonsly">
                <p class="parrafo-evol">Bonsly N.° 0438<br>
                  Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/185.png" alt="pokemon Sudowoodo">
                <p class="parrafo-evol">Sudowoodo N.° 0185<br>
                  Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "bonsly":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bonsly <b>N.° 0438</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png" alt="pokemon Bonsly">
            <p class="parrafo">Aunque parece que llora, realmente lo que hace es expulsar el exceso de fluidos corporales por los ojos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Acero, Planta, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/438.png" alt="pokemon Bonsly">
                <p class="parrafo-evol">Bonsly N.° 0438<br>
                  Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/185.png" alt="pokemon Sudowoodo">
                <p class="parrafo-evol">Sudowoodo N.° 0185<br>
                  Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0438":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Bonsly <b>N.° 0438</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png" alt="pokemon Bonsly">
            <p class="parrafo">Aunque parece que llora, realmente lo que hace es expulsar el exceso de fluidos corporales por los ojos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Acero, Planta, Lucha, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/438.png" alt="pokemon Bonsly">
                <p class="parrafo-evol">Bonsly N.° 0438<br>
                  Roca.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/185.png" alt="pokemon Sudowoodo">
                <p class="parrafo-evol">Sudowoodo N.° 0185<br>
                  Roca.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "politoed":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Politoed <b>N.° 0186</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png" alt="pokemon Politoed">
            <p class="parrafo">Aparece a orillas de las charcas al caer la noche. Reclama su territorio profiriendo un fuerte grito que recuerda a un bramido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0186":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Politoed <b>N.° 0186</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png" alt="pokemon Politoed">
            <p class="parrafo">Aparece a orillas de las charcas al caer la noche. Reclama su territorio profiriendo un fuerte grito que recuerda a un bramido.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png" alt="pokemon Poliwag">
                <p class="parrafo-evol">Poliwag N.° 0060<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png" alt="pokemon Poliwhirl">
                <p class="parrafo-evol">Poliwhirl N.° 0061<br>
                  Agua.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png" alt="pokemon Poliwrath">
                <p class="parrafo-evol">Poliwrath N.° 0062<br>
                  Agua, Lucha.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png" alt="pokemon Politoed">
                <p class="parrafo-evol">Politoed N.° 0186<br>
                  Agua.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "hoppip":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hoppip <b>N.° 0187</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png" alt="pokemon Hoppip">
            <p class="parrafo">Recorre largas distancias arrastrado por el viento. Se desconoce la procedencia exacta de los ejemplares que habitan en Paldea.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0187":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hoppip <b>N.° 0187</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png" alt="pokemon Hoppip">
            <p class="parrafo">Recorre largas distancias arrastrado por el viento. Se desconoce la procedencia exacta de los ejemplares que habitan en Paldea.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "skiploom":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Skiploom <b>N.° 0188</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png" alt="pokemon Skiploom">
            <p class="parrafo">Al parecer, los admiradores de este Pokémon son capaces de determinar su lugar de nacimiento por el aroma que desprende la flor de su cabeza.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0188":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Skiploom <b>N.° 0188</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png" alt="pokemon Skiploom">
            <p class="parrafo">Al parecer, los admiradores de este Pokémon son capaces de determinar su lugar de nacimiento por el aroma que desprende la flor de su cabeza.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "jumpluff":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jumpluff <b>N.° 0189</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png" alt="pokemon Jumpluff">
            <p class="parrafo">Viaja arrastrado por los vientos estacionales hasta agotar sus esporas de algodón, momento que marca el final de su viaje y de su ciclo vital.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0189":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Jumpluff <b>N.° 0189</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png" alt="pokemon Jumpluff">
            <p class="parrafo">Viaja arrastrado por los vientos estacionales hasta agotar sus esporas de algodón, momento que marca el final de su viaje y de su ciclo vital.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png" alt="pokemon Hoppip">
                <p class="parrafo-evol">Hoppip N.° 0187<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png" alt="pokemon Skiploom">
                <p class="parrafo-evol">Skiploom N.° 0188<br>
                  Planta, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png" alt="pokemon Jumpluff">
                <p class="parrafo-evol">Jumpluff N.° 0189<br>
                  Planta, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "aipom":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Aipom <b>N.° 0190</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png" alt="pokemon Aipom">
            <p class="parrafo">De tanto utilizar la cola, esta se ha vuelto más hábil que sus dedos. Construye sus nidos en las copas de los árboles.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png" alt="pokemon Aipom">
                <p class="parrafo-evol">Aipom N.° 0190<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/424.png" alt="pokemon Ambipom">
                <p class="parrafo-evol">Ambipom N.° 0424<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0190":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Aipom <b>N.° 0190</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png" alt="pokemon Aipom">
            <p class="parrafo">De tanto utilizar la cola, esta se ha vuelto más hábil que sus dedos. Construye sus nidos en las copas de los árboles.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png" alt="pokemon Aipom">
                <p class="parrafo-evol">Aipom N.° 0190<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/424.png" alt="pokemon Ambipom">
                <p class="parrafo-evol">Ambipom N.° 0424<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "ambipom":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ambipom <b>N.° 0424</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/424.png" alt="pokemon Ambipom">
            <p class="parrafo">Su especie arma constantes trifulcas por los árboles más cómodos con los Passimian. Suelen ganar la mitad de las veces.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png" alt="pokemon Aipom">
                <p class="parrafo-evol">Aipom N.° 0190<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/424.png" alt="pokemon Ambipom">
                <p class="parrafo-evol">Ambipom N.° 0424<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0424":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ambipom <b>N.° 0424</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/424.png" alt="pokemon Ambipom">
            <p class="parrafo">Su especie arma constantes trifulcas por los árboles más cómodos con los Passimian. Suelen ganar la mitad de las veces.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal.<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png" alt="pokemon Aipom">
                <p class="parrafo-evol">Aipom N.° 0190<br>
                  Normal.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/424.png" alt="pokemon Ambipom">
                <p class="parrafo-evol">Ambipom N.° 0424<br>
                  Normal.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sunkern":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sunkern <b>N.° 0191</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png" alt="pokemon Sunkern">
            <p class="parrafo">Cae de repente del cielo por las mañanas. Como sabe que es débil, solo se dedica a nutrirse hasta que evoluciona.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/191.png" alt="pokemon Sunkern">
                <p class="parrafo-evol">Sunkern N.° 0191<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Sunflora">
                <p class="parrafo-evol">Sunflora N.° 0192<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0191":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sunkern <b>N.° 0191</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png" alt="pokemon Sunkern">
            <p class="parrafo">Cae de repente del cielo por las mañanas. Como sabe que es débil, solo se dedica a nutrirse hasta que evoluciona.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/191.png" alt="pokemon Sunkern">
                <p class="parrafo-evol">Sunkern N.° 0191<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Sunflora">
                <p class="parrafo-evol">Sunflora N.° 0192<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "sunflora":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sunflora <b>N.° 0192</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png" alt="pokemon Sunflora">
            <p class="parrafo">De día, corre histérico de un lado a otro, pero, cuando se pone el sol, se detiene por completo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/191.png" alt="pokemon Sunkern">
                <p class="parrafo-evol">Sunkern N.° 0191<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Sunflora">
                <p class="parrafo-evol">Sunflora N.° 0192<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0192":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Sunflora <b>N.° 0192</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png" alt="pokemon Sunflora">
            <p class="parrafo">De día, corre histérico de un lado a otro, pero, cuando se pone el sol, se detiene por completo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Hielo, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/191.png" alt="pokemon Sunkern">
                <p class="parrafo-evol">Sunkern N.° 0191<br>
                  Planta.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Sunflora">
                <p class="parrafo-evol">Sunflora N.° 0192<br>
                  Planta.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "yanma":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Yanma <b>N.° 0193</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png" alt="pokemon Yanma">
            <p class="parrafo">Yanma tiene un ángulo de visión de 360° sin mover los ojos. Es un gran volador, experto en hacer repentinas paradas y cambios de dirección en el aire. Aprovecha la habilidad que tiene de volar para lanzarse sobre su presa.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Yanma">
                <p class="parrafo-evol">Yanma N.° 0192<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/469.png" alt="pokemon Yanmega">
                <p class="parrafo-evol">Yanmega N.° 0469<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0193":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Yanma <b>N.° 0193</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png" alt="pokemon Yanma">
            <p class="parrafo">Yanma tiene un ángulo de visión de 360° sin mover los ojos. Es un gran volador, experto en hacer repentinas paradas y cambios de dirección en el aire. Aprovecha la habilidad que tiene de volar para lanzarse sobre su presa.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Yanma">
                <p class="parrafo-evol">Yanma N.° 0192<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/469.png" alt="pokemon Yanmega">
                <p class="parrafo-evol">Yanmega N.° 0469<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "yanmega":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Yanmega <b>N.° 0469</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/469.png" alt="pokemon Yanmega">
            <p class="parrafo">Su técnica favorita consiste en volar a gran velocidad y despedazar con su mandíbula a su oponente en un instante.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Yanma">
                <p class="parrafo-evol">Yanma N.° 0192<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/469.png" alt="pokemon Yanmega">
                <p class="parrafo-evol">Yanmega N.° 0469<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0469":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Yanmega <b>N.° 0469</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/469.png" alt="pokemon Yanmega">
            <p class="parrafo">Su técnica favorita consiste en volar a gran velocidad y despedazar con su mandíbula a su oponente en un instante.<br><br>
            <b style="color:#0000ff">Tipo:</b> Bicho, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png" alt="pokemon Yanma">
                <p class="parrafo-evol">Yanma N.° 0192<br>
                  Bicho, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/469.png" alt="pokemon Yanmega">
                <p class="parrafo-evol">Yanmega N.° 0469<br>
                  Bicho, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "wooper":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wooper <b>N.° 0194</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png" alt="pokemon Wooper">
            <p class="parrafo">Este Pokémon vive en aguas frías. Sale del agua para buscar comida cuando refresca el ambiente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png" alt="pokemon Wooper">
                <p class="parrafo-evol">Wooper N.° 0194<br>
                  Agua, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/195.png" alt="pokemon Quagsire">
                <p class="parrafo-evol">Quagsire N.° 0195<br>
                  Agua, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0194":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Wooper <b>N.° 0194</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png" alt="pokemon Wooper">
            <p class="parrafo">Este Pokémon vive en aguas frías. Sale del agua para buscar comida cuando refresca el ambiente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png" alt="pokemon Wooper">
                <p class="parrafo-evol">Wooper N.° 0194<br>
                  Agua, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/195.png" alt="pokemon Quagsire">
                <p class="parrafo-evol">Quagsire N.° 0195<br>
                  Agua, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "quagsire":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Quagsire <b>N.° 0195</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png" alt="pokemon Quagsire">
            <p class="parrafo">Es de naturaleza tranquila. Permanece impasible cuando, al nadar, choca de cabeza contra rocas de río o el casco de los barcos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png" alt="pokemon Wooper">
                <p class="parrafo-evol">Wooper N.° 0194<br>
                  Agua, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/195.png" alt="pokemon Quagsire">
                <p class="parrafo-evol">Quagsire N.° 0195<br>
                  Agua, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0195":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Quagsire <b>N.° 0195</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png" alt="pokemon Quagsire">
            <p class="parrafo">Es de naturaleza tranquila. Permanece impasible cuando, al nadar, choca de cabeza contra rocas de río o el casco de los barcos.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Tierra.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png" alt="pokemon Wooper">
                <p class="parrafo-evol">Wooper N.° 0194<br>
                  Agua, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/195.png" alt="pokemon Quagsire">
                <p class="parrafo-evol">Quagsire N.° 0195<br>
                  Agua, Tierra.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "murkrow":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Murkrow <b>N.° 0198</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png" alt="pokemon Murkrow">
            <p class="parrafo">Temido y odiado por muchos, dicen que trae la desgracia a todos aquellos que lo ven por la noche.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/198.png" alt="pokemon Murkrow">
                <p class="parrafo-evol">Murkrow N.° 0198<br>
                  Siniestro, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/430.png" alt="pokemon Honchkrow">
                <p class="parrafo-evol">Honchkrow N.° 0430<br>
                  Siniestro, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0198":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Murkrow <b>N.° 0198</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png" alt="pokemon Murkrow">
            <p class="parrafo">Temido y odiado por muchos, dicen que trae la desgracia a todos aquellos que lo ven por la noche.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/198.png" alt="pokemon Murkrow">
                <p class="parrafo-evol">Murkrow N.° 0198<br>
                  Siniestro, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/430.png" alt="pokemon Honchkrow">
                <p class="parrafo-evol">Honchkrow N.° 0430<br>
                  Siniestro, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "honchkrow":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Honchkrow <b>N.° 0430</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png" alt="pokemon Honchkrow">
            <p class="parrafo">No perdona ni se apiada nunca. No consiente fallos ni a los propios Murkrow que lo siguen.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/198.png" alt="pokemon Murkrow">
                <p class="parrafo-evol">Murkrow N.° 0198<br>
                  Siniestro, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/430.png" alt="pokemon Honchkrow">
                <p class="parrafo-evol">Honchkrow N.° 0430<br>
                  Siniestro, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0430":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Honchkrow <b>N.° 0430</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png" alt="pokemon Honchkrow">
            <p class="parrafo">No perdona ni se apiada nunca. No consiente fallos ni a los propios Murkrow que lo siguen.<br><br>
            <b style="color:#0000ff">Tipo:</b> Siniestro, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Hada, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/198.png" alt="pokemon Murkrow">
                <p class="parrafo-evol">Murkrow N.° 0198<br>
                  Siniestro, Volador.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/430.png" alt="pokemon Honchkrow">
                <p class="parrafo-evol">Honchkrow N.° 0430<br>
                  Siniestro, Volador.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "slowking":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowking <b>N.° 0199</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png" alt="pokemon Slowking">
            <p class="parrafo">Al ser mordido en la cabeza, Slowpoke absorbió unas toxinas que liberaron su poder oculto.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0199":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Slowking <b>N.° 0199</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png" alt="pokemon Slowking">
            <p class="parrafo">Al ser mordido en la cabeza, Slowpoke absorbió unas toxinas que liberaron su poder oculto.<br><br>
            <b style="color:#0000ff">Tipo:</b> Agua, Psiquico<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Planta, Electrico, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png" alt="pokemon Slowpoke">
                <p class="parrafo-evol">Slowpoke N.° 0079<br>
                  Agua, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                  <p class="parrafo-evol">Slowbro N.° 0080<br>
                    Agua, Psiquico.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                  <p class="parrafo-evol">Slowking N.° 0199<br>
                    Agua, Psiquico.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "misdreavus":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Misdreavus <b>N.° 0200</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png" alt="pokemon Misdreavus">
            <p class="parrafo">Sorprende a la gente en mitad de la noche y acumula su miedo como energía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/200.png" alt="pokemon Misdreavus">
                <p class="parrafo-evol">Misdreavus N.° 0200<br>
                  Fantasma.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png" alt="pokemon Mismagius">
                <p class="parrafo-evol">Mismagius N.° 0429<br>
                  Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0200":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Misdreavus <b>N.° 0200</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png" alt="pokemon Misdreavus">
            <p class="parrafo">Sorprende a la gente en mitad de la noche y acumula su miedo como energía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/200.png" alt="pokemon Misdreavus">
                <p class="parrafo-evol">Misdreavus N.° 0200<br>
                  Fantasma.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png" alt="pokemon Mismagius">
                <p class="parrafo-evol">Mismagius N.° 0429<br>
                  Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "mismagius":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mismagius <b>N.° 0429</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png" alt="pokemon Mismagius">
            <p class="parrafo">Sus gritos parecen cánticos. Se dice que, en alguna rara ocasión, han imbuido felicidad a quien los oía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/200.png" alt="pokemon Misdreavus">
                <p class="parrafo-evol">Misdreavus N.° 0200<br>
                  Fantasma.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png" alt="pokemon Mismagius">
                <p class="parrafo-evol">Mismagius N.° 0429<br>
                  Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0429":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Mismagius <b>N.° 0429</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png" alt="pokemon Mismagius">
            <p class="parrafo">Sus gritos parecen cánticos. Se dice que, en alguna rara ocasión, han imbuido felicidad a quien los oía.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/200.png" alt="pokemon Misdreavus">
                <p class="parrafo-evol">Misdreavus N.° 0200<br>
                  Fantasma.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png" alt="pokemon Mismagius">
                <p class="parrafo-evol">Mismagius N.° 0429<br>
                  Fantasma.
                </p>
              </div>
            </div>
          </div> `;
          break;
          case "unown":
            informacion.innerHTML = `
        <h2 class="t-pokemon">Unown <b>N.° 0201</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png" alt="pokemon Unown">
            <p class="parrafo">Estos Pokémon tienen forma de caracteres antiguos. No se sabe qué surgió primero, si la vieja escritura o los distintos Unown. Esta cuestión sigue siendo objeto de estudio, pero aún no se ha averiguado nada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/201.png" alt="pokemon Unown">
                <p class="parrafo-evol">Unown N.° 0201<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0201":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Unown <b>N.° 0201</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png" alt="pokemon Unown">
            <p class="parrafo">Estos Pokémon tienen forma de caracteres antiguos. No se sabe qué surgió primero, si la vieja escritura o los distintos Unown. Esta cuestión sigue siendo objeto de estudio, pero aún no se ha averiguado nada.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/201.png" alt="pokemon Unown">
                <p class="parrafo-evol">Unown N.° 0201<br>
                  Psiquico. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
  case "wobbuffet":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wobbuffet <b>N.° 0202</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png" alt="pokemon Wobbuffet">
          <p class="parrafo">Odia la luz y las sacudidas. Si le atacan, infla su cuerpo para contraatacar con más ímpetu.<br><br>
          <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/360.png" alt="pokemon Wynaut">
              <p class="parrafo-evol">Wynaut N.° 0360<br>
                Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/202.png" alt="pokemon Wobbuffet">
              <p class="parrafo-evol">Wobbuffet N.° 0202<br>
                Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0202":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wobbuffet <b>N.° 0202</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png" alt="pokemon Wobbuffet">
          <p class="parrafo">Odia la luz y las sacudidas. Si le atacan, infla su cuerpo para contraatacar con más ímpetu.<br><br>
          <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/360.png" alt="pokemon Wynaut">
              <p class="parrafo-evol">Wynaut N.° 0360<br>
                Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/202.png" alt="pokemon Wobbuffet">
              <p class="parrafo-evol">Wobbuffet N.° 0202<br>
                Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "wynaut":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wynaut <b>N.° 0360</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png" alt="pokemon Wynaut">
          <p class="parrafo">Suelen ir en grupo. Templan su paciencia jugando a empujarse los unos a los otros. <br><br>
          <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/360.png" alt="pokemon Wynaut">
              <p class="parrafo-evol">Wynaut N.° 0360<br>
                Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/202.png" alt="pokemon Wobbuffet">
              <p class="parrafo-evol">Wobbuffet N.° 0202<br>
                Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0360":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wynaut <b>N.° 0360</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png" alt="pokemon Wynaut">
          <p class="parrafo">Suelen ir en grupo. Templan su paciencia jugando a empujarse los unos a los otros. <br><br>
          <b style="color:#0000ff">Tipo:</b> Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/360.png" alt="pokemon Wynaut">
              <p class="parrafo-evol">Wynaut N.° 0360<br>
                Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/202.png" alt="pokemon Wobbuffet">
              <p class="parrafo-evol">Wobbuffet N.° 0202<br>
                Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "girafarig":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Girafarig <b>N.° 0203</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png" alt="pokemon Girafarig">
          <p class="parrafo">El minúsculo cerebro que tiene en la cola es en realidad un órgano importante dotado de potentes poderes psíquicos. <br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/203.png" alt="pokemon Girafarig">
              <p class="parrafo-evol">Girafarig N.° 0203<br>
                Normal, Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/981.png" alt="pokemon Farigiraf">
              <p class="parrafo-evol">Farigiraf N.° 0981<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0203":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Girafarig <b>N.° 0203</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png" alt="pokemon Girafarig">
          <p class="parrafo">El minúsculo cerebro que tiene en la cola es en realidad un órgano importante dotado de potentes poderes psíquicos. <br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/203.png" alt="pokemon Girafarig">
              <p class="parrafo-evol">Girafarig N.° 0203<br>
                Normal, Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/981.png" alt="pokemon Farigiraf">
              <p class="parrafo-evol">Farigiraf N.° 0981<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "farigiraf":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Farigiraf <b>N.° 0981</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/981.png" alt="pokemon Farigiraf">
          <p class="parrafo">Las ondas cerebrales de la cola y la cabeza van al compás, lo que le confiere poderes psíquicos diez veces más potentes que los de los Girafarig.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/203.png" alt="pokemon Girafarig">
              <p class="parrafo-evol">Girafarig N.° 0203<br>
                Normal, Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/981.png" alt="pokemon Farigiraf">
              <p class="parrafo-evol">Farigiraf N.° 0981<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0981":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Farigiraf <b>N.° 0981</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/981.png" alt="pokemon Farigiraf">
          <p class="parrafo">Las ondas cerebrales de la cola y la cabeza van al compás, lo que le confiere poderes psíquicos diez veces más potentes que los de los Girafarig.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/203.png" alt="pokemon Girafarig">
              <p class="parrafo-evol">Girafarig N.° 0203<br>
                Normal, Psiquico.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/981.png" alt="pokemon Farigiraf">
              <p class="parrafo-evol">Farigiraf N.° 0981<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "pineco":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Pineco <b>N.° 0204</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png" alt="pokemon Pineco">
          <p class="parrafo">Le gusta engrosar su coraza añadiendo cortezas de árbol. El aumento de peso no le molesta.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/204.png" alt="pokemon Pineco">
              <p class="parrafo-evol">Pineco N.° 0204<br>
                Bicho.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png" alt="pokemon Forretress">
              <p class="parrafo-evol">Forretress N.° 0205<br>
                Bicho, Acero.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0204":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Pineco <b>N.° 0204</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png" alt="pokemon Pineco">
          <p class="parrafo">Le gusta engrosar su coraza añadiendo cortezas de árbol. El aumento de peso no le molesta.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Volador, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/204.png" alt="pokemon Pineco">
              <p class="parrafo-evol">Pineco N.° 0204<br>
                Bicho.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png" alt="pokemon Forretress">
              <p class="parrafo-evol">Forretress N.° 0205<br>
                Bicho, Acero.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "forretress":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Forretress <b>N.° 0205</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png" alt="pokemon Forretress">
          <p class="parrafo">Se le suele ver enganchado al tronco de un árbol grande. Cuando comienza la acción, dispara trozos de su coraza.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Acero.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/204.png" alt="pokemon Pineco">
              <p class="parrafo-evol">Pineco N.° 0204<br>
                Bicho.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png" alt="pokemon Forretress">
              <p class="parrafo-evol">Forretress N.° 0205<br>
                Bicho, Acero.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0205":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Forretress <b>N.° 0205</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png" alt="pokemon Forretress">
          <p class="parrafo">Se le suele ver enganchado al tronco de un árbol grande. Cuando comienza la acción, dispara trozos de su coraza.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Acero.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/204.png" alt="pokemon Pineco">
              <p class="parrafo-evol">Pineco N.° 0204<br>
                Bicho.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png" alt="pokemon Forretress">
              <p class="parrafo-evol">Forretress N.° 0205<br>
                Bicho, Acero.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "dunsparce":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Dunsparce <b>N.° 0206</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png" alt="pokemon Dunsparce">
          <p class="parrafo">Construye laberintos en lugares oscuros. Si alguien lo descubre, huye cavando un agujero con la cola.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/206.png" alt="pokemon Dunsparce">
              <p class="parrafo-evol">Dunsparce N.° 0206<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/982.png" alt="pokemon Dudunsparce">
              <p class="parrafo-evol">Dudunsparce N.° 0982<br>
                Normal.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0206":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Dunsparce <b>N.° 0206</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png" alt="pokemon Dunsparce">
          <p class="parrafo">Construye laberintos en lugares oscuros. Si alguien lo descubre, huye cavando un agujero con la cola.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/206.png" alt="pokemon Dunsparce">
              <p class="parrafo-evol">Dunsparce N.° 0206<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/982.png" alt="pokemon Dudunsparce">
              <p class="parrafo-evol">Dudunsparce N.° 0982<br>
                Normal.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "dudunsparce":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Dudunsparce <b>N.° 0982</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/982.png" alt="pokemon Dudunsparce">
          <p class="parrafo">Usa su dura cola para horadar el lecho rocoso en las profundidades de la tierra y establecer su madriguera, cuyos túneles se extienden 10 km.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/206.png" alt="pokemon Dunsparce">
              <p class="parrafo-evol">Dunsparce N.° 0206<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/982.png" alt="pokemon Dudunsparce">
              <p class="parrafo-evol">Dudunsparce N.° 0982<br>
                Normal.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0982":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Dudunsparce <b>N.° 0982</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/982.png" alt="pokemon Dudunsparce">
          <p class="parrafo">Usa su dura cola para horadar el lecho rocoso en las profundidades de la tierra y establecer su madriguera, cuyos túneles se extienden 10 km.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/206.png" alt="pokemon Dunsparce">
              <p class="parrafo-evol">Dunsparce N.° 0206<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/982.png" alt="pokemon Dudunsparce">
              <p class="parrafo-evol">Dudunsparce N.° 0982<br>
                Normal.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "gligar":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Gligar <b>N.° 0207</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png" alt="pokemon Gligar">
          <p class="parrafo">Gligar planea por el aire sin hacer ningún ruido, como si fuera patinando. Este Pokémon se agarra a la cara de su rival con las patas traseras, con forma de garra, y las pinzas de las delanteras y le inyecta veneno por el aguijón.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/207.png" alt="pokemon Gligar">
              <p class="parrafo-evol">Gligar N.° 0207<br>
                Tierra, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/472.png" alt="pokemon Gliscor">
              <p class="parrafo-evol">Gliscor N.° 0472<br>
                Tierra, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0207":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Gligar <b>N.° 0207</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png" alt="pokemon Gligar">
          <p class="parrafo">Gligar planea por el aire sin hacer ningún ruido, como si fuera patinando. Este Pokémon se agarra a la cara de su rival con las patas traseras, con forma de garra, y las pinzas de las delanteras y le inyecta veneno por el aguijón.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/207.png" alt="pokemon Gligar">
              <p class="parrafo-evol">Gligar N.° 0207<br>
                Tierra, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/472.png" alt="pokemon Gliscor">
              <p class="parrafo-evol">Gliscor N.° 0472<br>
                Tierra, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "gliscor":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Gliscor <b>N.° 0472</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png" alt="pokemon Gliscor">
          <p class="parrafo">Espera a sus presas colgado de una rama bocabajo. Cuando llega su oportunidad, se lanza en picado.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/207.png" alt="pokemon Gligar">
              <p class="parrafo-evol">Gligar N.° 0207<br>
                Tierra, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/472.png" alt="pokemon Gliscor">
              <p class="parrafo-evol">Gliscor N.° 0472<br>
                Tierra, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0472":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Gliscor <b>N.° 0472</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png" alt="pokemon Gliscor">
          <p class="parrafo">Espera a sus presas colgado de una rama bocabajo. Cuando llega su oportunidad, se lanza en picado.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/207.png" alt="pokemon Gligar">
              <p class="parrafo-evol">Gligar N.° 0207<br>
                Tierra, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/472.png" alt="pokemon Gliscor">
              <p class="parrafo-evol">Gliscor N.° 0472<br>
                Tierra, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "steelix":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Steelix <b>N.° 0208</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png" alt="pokemon Steelix">
          <p class="parrafo">Según dicen, si un Onix vive más de 100 años, su cuerpo adquiere una composición que recuerda a la de los diamantes.<br><br>
          <b style="color:#0000ff">Tipo:</b> Acero, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Agua, Lucha, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png" alt="pokemon Onix">
              <p class="parrafo-evol">Onix N.° 0095<br>
                Roca, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png" alt="pokemon Steelix">
              <p class="parrafo-evol">Steelix N.° 0208<br>
                Acero, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0208":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Steelix <b>N.° 0208</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png" alt="pokemon Steelix">
          <p class="parrafo">Según dicen, si un Onix vive más de 100 años, su cuerpo adquiere una composición que recuerda a la de los diamantes.<br><br>
          <b style="color:#0000ff">Tipo:</b> Acero, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Agua, Lucha, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png" alt="pokemon Onix">
              <p class="parrafo-evol">Onix N.° 0095<br>
                Roca, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png" alt="pokemon Steelix">
              <p class="parrafo-evol">Steelix N.° 0208<br>
                Acero, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "snubbull":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Snubbull <b>N.° 0209</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png" alt="pokemon Snubbull">
          <p class="parrafo">Le gusta que le hagan mimos y coge confianza con facilidad. A la gente le fascina el contraste entre su aspecto fiero y carácter dulce.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hada.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/209.png" alt="pokemon Snubbull">
              <p class="parrafo-evol">Snubbull N.° 0209<br>
                Hada.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/210.png" alt="pokemon Granbull">
              <p class="parrafo-evol">Granbull N.° 0210<br>
                Hada.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0209":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Snubbull <b>N.° 0209</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png" alt="pokemon Snubbull">
          <p class="parrafo">Le gusta que le hagan mimos y coge confianza con facilidad. A la gente le fascina el contraste entre su aspecto fiero y carácter dulce.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hada.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/209.png" alt="pokemon Snubbull">
              <p class="parrafo-evol">Snubbull N.° 0209<br>
                Hada.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/210.png" alt="pokemon Granbull">
              <p class="parrafo-evol">Granbull N.° 0210<br>
                Hada.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "granbull":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Granbull <b>N.° 0210</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png" alt="pokemon Granbull">
          <p class="parrafo">Su mandíbula posee una fuerza abrumadora, pero, como no le gusta pelear, rara vez tiene ocasión de demostrarlo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hada.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/209.png" alt="pokemon Snubbull">
              <p class="parrafo-evol">Snubbull N.° 0209<br>
                Hada.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/210.png" alt="pokemon Granbull">
              <p class="parrafo-evol">Granbull N.° 0210<br>
                Hada.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0210":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Granbull <b>N.° 0210</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png" alt="pokemon Granbull">
          <p class="parrafo">Su mandíbula posee una fuerza abrumadora, pero, como no le gusta pelear, rara vez tiene ocasión de demostrarlo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hada.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Veneno.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/209.png" alt="pokemon Snubbull">
              <p class="parrafo-evol">Snubbull N.° 0209<br>
                Hada.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/210.png" alt="pokemon Granbull">
              <p class="parrafo-evol">Granbull N.° 0210<br>
                Hada.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "qwilfish":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Qwilfish <b>N.° 0211</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png" alt="pokemon Qwilfish">
          <p class="parrafo">Si comienza a beber agua para hincharse, es señal de amenaza. Ataca al rival arrojando las púas tóxicas que le recubren el cuerpo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Veneno.<br>
          <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211_f2.png" alt="pokemon Qwilfish">
              <p class="parrafo-evol">Qwilfish N.° 0211<br>
                Siniestro, Veneno.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/904.png" alt="pokemon Overqwil">
              <p class="parrafo-evol">Overqwil N.° 0904<br>
                Siniestro, Veneno.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0211":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Qwilfish <b>N.° 0211</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png" alt="pokemon Qwilfish">
          <p class="parrafo">Si comienza a beber agua para hincharse, es señal de amenaza. Ataca al rival arrojando las púas tóxicas que le recubren el cuerpo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Veneno.<br>
          <b style="color:#0000ff">Debilidad:</b> Psiquico, Electrico, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211_f2.png" alt="pokemon Qwilfish">
              <p class="parrafo-evol">Qwilfish N.° 0211<br>
                Siniestro, Veneno.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/904.png" alt="pokemon Overqwil">
              <p class="parrafo-evol">Overqwil N.° 0904<br>
                Siniestro, Veneno.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "overqwil":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Overqwil <b>N.° 0904</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/904.png" alt="pokemon Overqwil">
          <p class="parrafo">Sus púas, afiladas como lanzas, y su violento carácter le han granjeado el mote de Demonio del Mar. Puede sorber veneno como sustento alimenticio.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Veneno.<br>
          <b style="color:#0000ff">Debilidad:</b> Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211_f2.png" alt="pokemon Qwilfish">
              <p class="parrafo-evol">Qwilfish N.° 0211<br>
                Siniestro, Veneno.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/904.png" alt="pokemon Overqwil">
              <p class="parrafo-evol">Overqwil N.° 0904<br>
                Siniestro, Veneno.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0904":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Overqwil <b>N.° 0904</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/904.png" alt="pokemon Overqwil">
          <p class="parrafo">Sus púas, afiladas como lanzas, y su violento carácter le han granjeado el mote de Demonio del Mar. Puede sorber veneno como sustento alimenticio.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Veneno.<br>
          <b style="color:#0000ff">Debilidad:</b> Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211_f2.png" alt="pokemon Qwilfish">
              <p class="parrafo-evol">Qwilfish N.° 0211<br>
                Siniestro, Veneno.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/904.png" alt="pokemon Overqwil">
              <p class="parrafo-evol">Overqwil N.° 0904<br>
                Siniestro, Veneno.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "scizor":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Scizor <b>N.° 0212</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png" alt="pokemon Scizor">
          <p class="parrafo">Las pinzas que posee contienen acero y pueden hacer trizas cualquier objeto por duro que sea.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Acero.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
              <p class="parrafo-evol">Scyther N.° 0123<br>
                Bicho, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "0212":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Scizor <b>N.° 0212</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png" alt="pokemon Scizor">
          <p class="parrafo">Las pinzas que posee contienen acero y pueden hacer trizas cualquier objeto por duro que sea.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Acero.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
              <p class="parrafo-evol">Scyther N.° 0123<br>
                Bicho, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "kleavor":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Kleavor <b>N.° 0900</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/900.png" alt="pokemon Kleavor">
          <p class="parrafo">Las dos toscas hachas le permiten talar árboles mientras su piel pétrea lo protege. Dada su naturaleza agresiva, es aconsejable escapar en caso de toparse con uno en estado salvaje.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
              <p class="parrafo-evol">Scyther N.° 0123<br>
                Bicho, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "0900":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Kleavor <b>N.° 0900</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/900.png" alt="pokemon Kleavor">
          <p class="parrafo">Las dos toscas hachas le permiten talar árboles mientras su piel pétrea lo protege. Dada su naturaleza agresiva, es aconsejable escapar en caso de toparse con uno en estado salvaje.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png" alt="pokemon Scyther">
              <p class="parrafo-evol">Scyther N.° 0123<br>
                Bicho, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "shuckle":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Shuckle <b>N.° 0213</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png" alt="pokemon Shuckle">
          <p class="parrafo">Almacena bayas dentro de su concha. Para evitar ataques, se esconde inmóvil bajo las rocas.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/213.png" alt="pokemon Shuckle">
              <p class="parrafo-evol">Shuckle N.° 0213<br>
                Bicho, Roca. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0213":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Shuckle <b>N.° 0213</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png" alt="pokemon Shuckle">
          <p class="parrafo">Almacena bayas dentro de su concha. Para evitar ataques, se esconde inmóvil bajo las rocas.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Agua, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/213.png" alt="pokemon Shuckle">
              <p class="parrafo-evol">Shuckle N.° 0213<br>
                Bicho, Roca. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "heracross":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Heracross <b>N.° 0214</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png" alt="pokemon Heracross">
          <p class="parrafo">Le encanta la savia dulce y usa su cuerno para lanzar por los aires a cualquiera que se acerque a ella.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Lucha.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hada.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/214.png" alt="pokemon Heracross">
              <p class="parrafo-evol">Heracross N.° 0214<br>
                Bicho, Lucha. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0214":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Heracross <b>N.° 0214</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png" alt="pokemon Heracross">
          <p class="parrafo">Le encanta la savia dulce y usa su cuerno para lanzar por los aires a cualquiera que se acerque a ella.<br><br>
          <b style="color:#0000ff">Tipo:</b> Bicho, Lucha.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Psiquico, Volador, Hada.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/214.png" alt="pokemon Heracross">
              <p class="parrafo-evol">Heracross N.° 0214<br>
                Bicho, Lucha. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "sneasel":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Sneasel <b>N.° 0215</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png" alt="pokemon Sneasel">
          <p class="parrafo">Este Pokémon es muy astuto. Se vale de la oscuridad de la noche para atacar a su presa.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Hielo.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Lucha, Roca, Hada, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png" alt="pokemon Sneasel">
              <p class="parrafo-evol">Sneasel N.° 0215<br>
                Siniestro, Hielo.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/461.png" alt="pokemon Weavile">
              <p class="parrafo-evol">Weavile N.° 0461<br>
                Siniestro, Hielo.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0215":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Sneasel <b>N.° 0215</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png" alt="pokemon Sneasel">
          <p class="parrafo">Este Pokémon es muy astuto. Se vale de la oscuridad de la noche para atacar a su presa.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Hielo.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Lucha, Roca, Hada, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png" alt="pokemon Sneasel">
              <p class="parrafo-evol">Sneasel N.° 0215<br>
                Siniestro, Hielo.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/461.png" alt="pokemon Weavile">
              <p class="parrafo-evol">Weavile N.° 0461<br>
                Siniestro, Hielo.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "weavile":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Weavile <b>N.° 0461</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png" alt="pokemon Weavile">
          <p class="parrafo">Su carácter se volvió aún más vil con la evolución. Se comunica marcando rocas con sus garras. <br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Hielo.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Lucha, Roca, Hada, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png" alt="pokemon Sneasel">
              <p class="parrafo-evol">Sneasel N.° 0215<br>
                Siniestro, Hielo.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/461.png" alt="pokemon Weavile">
              <p class="parrafo-evol">Weavile N.° 0461<br>
                Siniestro, Hielo.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0461":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Weavile <b>N.° 0461</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png" alt="pokemon Weavile">
          <p class="parrafo">Su carácter se volvió aún más vil con la evolución. Se comunica marcando rocas con sus garras. <br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Hielo.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Lucha, Roca, Hada, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png" alt="pokemon Sneasel">
              <p class="parrafo-evol">Sneasel N.° 0215<br>
                Siniestro, Hielo.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/461.png" alt="pokemon Weavile">
              <p class="parrafo-evol">Weavile N.° 0461<br>
                Siniestro, Hielo.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "teddiursa":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Teddiursa <b>N.° 0216</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png" alt="pokemon Teddiursa">
          <p class="parrafo">Sigue con sigilo a los Combee para localizar su colmena. Consume abundantes cantidades de miel, que recoge impregnando las zarpas.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "0216":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Teddiursa <b>N.° 0216</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png" alt="pokemon Teddiursa">
          <p class="parrafo">Sigue con sigilo a los Combee para localizar su colmena. Consume abundantes cantidades de miel, que recoge impregnando las zarpas.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "ursaring":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Ursaring <b>N.° 0217</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png" alt="pokemon Ursaring">
          <p class="parrafo">Su expresión dura y adusta se convierte en una sonrisa rebosante de felicidad en cuanto saborea la miel que tanto le gusta.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "0217":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Ursaring <b>N.° 0217</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png" alt="pokemon Ursaring">
          <p class="parrafo">Su expresión dura y adusta se convierte en una sonrisa rebosante de felicidad en cuanto saborea la miel que tanto le gusta.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "ursaluna":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Ursaluna <b>N.° 0901</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/901.png" alt="pokemon Ursaluna">
          <p class="parrafo">Tengo la teoría de que el terreno pantanoso de Hisui favoreció el desarrollo de su constitución robusta, así como su capacidad de manipular la turba a voluntad.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "0901":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Ursaluna <b>N.° 0901</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/901.png" alt="pokemon Ursaluna">
          <p class="parrafo">Tengo la teoría de que el terreno pantanoso de Hisui favoreció el desarrollo de su constitución robusta, así como su capacidad de manipular la turba a voluntad.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra, Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png" alt="pokemon Teddiursa">
              <p class="parrafo-evol">Teddiursa N.° 0216<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png" alt="pokemon Ursaring">
                <p class="parrafo-evol">Ursaring N.° 0217<br>
                  Normal.
                </p>
              </div>
              <div>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/901.png" alt="pokemon Ursaluna">
                <p class="parrafo-evol">Ursaluna N.° 0901<br>
                  Tierra, Normal.
                </p>
              </div>
            </div>
          </div>
        </div> `;
        break;
  case "slugma":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Slugma <b>N.° 0218</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png" alt="pokemon Slugma">
          <p class="parrafo">Por el sistema circulatorio de Slugma corre magma líquido. Si este Pokémon se enfriara, el magma perdería el calor y se solidificaría, por lo que se resquebrajaría por completo, perdería algunos trozos y reduciría su tamaño.<br><br>
          <b style="color:#0000ff">Tipo:</b> Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/218.png" alt="pokemon Slugma">
              <p class="parrafo-evol">Slugma N.° 0218<br>
                Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/219.png" alt="pokemon Magcargo">
              <p class="parrafo-evol">Magcargo N.° 0219<br>
                Fuego, Roca.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0218":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Slugma <b>N.° 0218</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png" alt="pokemon Slugma">
          <p class="parrafo">Por el sistema circulatorio de Slugma corre magma líquido. Si este Pokémon se enfriara, el magma perdería el calor y se solidificaría, por lo que se resquebrajaría por completo, perdería algunos trozos y reduciría su tamaño.<br><br>
          <b style="color:#0000ff">Tipo:</b> Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/218.png" alt="pokemon Slugma">
              <p class="parrafo-evol">Slugma N.° 0218<br>
                Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/219.png" alt="pokemon Magcargo">
              <p class="parrafo-evol">Magcargo N.° 0219<br>
                Fuego, Roca.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "magcargo":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Magcargo <b>N.° 0219</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png" alt="pokemon Magcargo">
          <p class="parrafo">La coraza de Magcargo es en realidad su propia piel que quedó endurecida al enfriarse. Está muy resquebrajada y es muy frágil; se desharía solo con tocarla. Este Pokémon debe sumergirse en magma para recuperar su forma.<br><br>
          <b style="color:#0000ff">Tipo:</b> Fuego, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/218.png" alt="pokemon Slugma">
              <p class="parrafo-evol">Slugma N.° 0218<br>
                Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/219.png" alt="pokemon Magcargo">
              <p class="parrafo-evol">Magcargo N.° 0219<br>
                Fuego, Roca.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0219":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Magcargo <b>N.° 0219</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png" alt="pokemon Magcargo">
          <p class="parrafo">La coraza de Magcargo es en realidad su propia piel que quedó endurecida al enfriarse. Está muy resquebrajada y es muy frágil; se desharía solo con tocarla. Este Pokémon debe sumergirse en magma para recuperar su forma.<br><br>
          <b style="color:#0000ff">Tipo:</b> Fuego, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/218.png" alt="pokemon Slugma">
              <p class="parrafo-evol">Slugma N.° 0218<br>
                Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/219.png" alt="pokemon Magcargo">
              <p class="parrafo-evol">Magcargo N.° 0219<br>
                Fuego, Roca.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "swinub":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Swinub <b>N.° 0220</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png" alt="pokemon Swinub">
          <p class="parrafo">Frota el hocico contra el suelo para desenterrar comida. A veces descubre aguas termales.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0220":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Swinub <b>N.° 0220</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png" alt="pokemon Swinub">
          <p class="parrafo">Frota el hocico contra el suelo para desenterrar comida. A veces descubre aguas termales.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "piloswine":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Piloswine <b>N.° 0221</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png" alt="pokemon Piloswine">
          <p class="parrafo">Cuando carga contra un enemigo, se le erizan los pelos del lomo. Es muy sensible al sonido.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0221":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Piloswine <b>N.° 0221</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png" alt="pokemon Piloswine">
          <p class="parrafo">Cuando carga contra un enemigo, se le erizan los pelos del lomo. Es muy sensible al sonido.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "mamoswine":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mamoswine <b>N.° 0473</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png" alt="pokemon Mamoswine">
          <p class="parrafo">Aparece representado en pinturas rupestres de hace 10 000 años. Hubo un tiempo en el que se lo consideró extinto.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0473":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mamoswine <b>N.° 0473</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png" alt="pokemon Mamoswine">
          <p class="parrafo">Aparece representado en pinturas rupestres de hace 10 000 años. Hubo un tiempo en el que se lo consideró extinto.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Planta, Agua, Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png" alt="pokemon Swinub">
              <p class="parrafo-evol">Swinub N.° 0220<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png" alt="pokemon Piloswine">
              <p class="parrafo-evol">Piloswine N.° 0221<br>
                Hielo, Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png" alt="pokemon Mamoswine">
              <p class="parrafo-evol">Mamoswine N.° 0473<br>
                Hielo, Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "corsola":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Corsola <b>N.° 0222</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png" alt="pokemon Corsola">
          <p class="parrafo">Las ramas que le brotan de la cabeza se regeneran si se rompen. Las más bellas se emplean como amuleto en los partos.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png" alt="pokemon Corsola">
              <p class="parrafo-evol">Corsola N.° 0222<br>
                Agua, Roca.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/864.png" alt="pokemon Cursola">
              <p class="parrafo-evol">Cursola N.° 0864<br>
                Fantasma.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0222":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Corsola <b>N.° 0222</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png" alt="pokemon Corsola">
          <p class="parrafo">Las ramas que le brotan de la cabeza se regeneran si se rompen. Las más bellas se emplean como amuleto en los partos.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Roca.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico, Lucha, Tierra.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png" alt="pokemon Corsola">
              <p class="parrafo-evol">Corsola N.° 0222<br>
                Agua, Roca.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/864.png" alt="pokemon Cursola">
              <p class="parrafo-evol">Cursola N.° 0864<br>
                Fantasma.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "cursola":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Cursola <b>N.° 0864</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/864.png" alt="pokemon Cursola">
          <p class="parrafo">Su energía espiritual ha aumentado hasta hacerlo desprenderse de su base caliza. Protege el alma del núcleo con su cuerpo espectral. <br><br>
          <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png" alt="pokemon Corsola">
              <p class="parrafo-evol">Corsola N.° 0222<br>
                Agua, Roca.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/864.png" alt="pokemon Cursola">
              <p class="parrafo-evol">Cursola N.° 0864<br>
                Fantasma.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0864":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Cursola <b>N.° 0864</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/864.png" alt="pokemon Cursola">
          <p class="parrafo">Su energía espiritual ha aumentado hasta hacerlo desprenderse de su base caliza. Protege el alma del núcleo con su cuerpo espectral. <br><br>
          <b style="color:#0000ff">Tipo:</b> Fantasma.<br>
          <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png" alt="pokemon Corsola">
              <p class="parrafo-evol">Corsola N.° 0222<br>
                Agua, Roca.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/864.png" alt="pokemon Cursola">
              <p class="parrafo-evol">Cursola N.° 0864<br>
                Fantasma.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "remoraid":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Remoraid <b>N.° 0223</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png" alt="pokemon Remoraid">
          <p class="parrafo">Los chorros de agua que escupe pueden alcanzar a presas en movimiento a una distancia de hasta 100 m.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/223.png" alt="pokemon Remoraid">
              <p class="parrafo-evol">Remoraid N.° 0223<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/224.png" alt="pokemon Octillery">
              <p class="parrafo-evol">Octillery N.° 0224<br>
                Agua.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0223":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Remoraid <b>N.° 0223</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png" alt="pokemon Remoraid">
          <p class="parrafo">Los chorros de agua que escupe pueden alcanzar a presas en movimiento a una distancia de hasta 100 m.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/223.png" alt="pokemon Remoraid">
              <p class="parrafo-evol">Remoraid N.° 0223<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/224.png" alt="pokemon Octillery">
              <p class="parrafo-evol">Octillery N.° 0224<br>
                Agua.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "octillery":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Octillery <b>N.° 0224</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png" alt="pokemon Octillery">
          <p class="parrafo">Tiene querencia por los agujeros, hasta el punto de ocupar los que han hecho otros para anidar y dormir en ellos. <br><br>
          <b style="color:#0000ff">Tipo:</b> Agua.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/223.png" alt="pokemon Remoraid">
              <p class="parrafo-evol">Remoraid N.° 0223<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/224.png" alt="pokemon Octillery">
              <p class="parrafo-evol">Octillery N.° 0224<br>
                Agua.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0224":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Octillery <b>N.° 0224</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png" alt="pokemon Octillery">
          <p class="parrafo">Tiene querencia por los agujeros, hasta el punto de ocupar los que han hecho otros para anidar y dormir en ellos. <br><br>
          <b style="color:#0000ff">Tipo:</b> Agua.<br>
          <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/223.png" alt="pokemon Remoraid">
              <p class="parrafo-evol">Remoraid N.° 0223<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/224.png" alt="pokemon Octillery">
              <p class="parrafo-evol">Octillery N.° 0224<br>
                Agua.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "delibird":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Delibird <b>N.° 0225</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png" alt="pokemon Delibird">
          <p class="parrafo">Transporta comida durante todo el día. Según dicen, muchos desaparecidos han sobrevivido gracias a ella.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/225.png" alt="pokemon Delibird">
              <p class="parrafo-evol">Delibird N.° 0225<br>
                Hielo, Volador. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0225":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Delibird <b>N.° 0225</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png" alt="pokemon Delibird">
          <p class="parrafo">Transporta comida durante todo el día. Según dicen, muchos desaparecidos han sobrevivido gracias a ella.<br><br>
          <b style="color:#0000ff">Tipo:</b> Hielo, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Acero, Fuego, Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/225.png" alt="pokemon Delibird">
              <p class="parrafo-evol">Delibird N.° 0225<br>
                Hielo, Volador. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "mantine":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mantine <b>N.° 0226</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png" alt="pokemon Mantine">
          <p class="parrafo">Tras ganar velocidad nadando, aprovecha las olas para proyectarse y recorrer planeando hasta 100 m de distancia.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/458.png" alt="pokemon Mantyke">
              <p class="parrafo-evol">Mantyke N.° 0458<br>
                Agua, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/226.png" alt="pokemon Mantine">
              <p class="parrafo-evol">Mantine N.° 0226<br>
                Agua, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0226":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mantine <b>N.° 0226</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png" alt="pokemon Mantine">
          <p class="parrafo">Tras ganar velocidad nadando, aprovecha las olas para proyectarse y recorrer planeando hasta 100 m de distancia.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/458.png" alt="pokemon Mantyke">
              <p class="parrafo-evol">Mantyke N.° 0458<br>
                Agua, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/226.png" alt="pokemon Mantine">
              <p class="parrafo-evol">Mantine N.° 0226<br>
                Agua, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "mantyke":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mantyke <b>N.° 0458</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png" alt="pokemon Mantyke">
          <p class="parrafo">Los Mantyke que habitan en los mares de Galar se mueven con lentitud, posiblemente por la baja temperatura de las aguas de la región.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/458.png" alt="pokemon Mantyke">
              <p class="parrafo-evol">Mantyke N.° 0458<br>
                Agua, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/226.png" alt="pokemon Mantine">
              <p class="parrafo-evol">Mantine N.° 0226<br>
                Agua, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0458":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Mantyke <b>N.° 0458</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png" alt="pokemon Mantyke">
          <p class="parrafo">Los Mantyke que habitan en los mares de Galar se mueven con lentitud, posiblemente por la baja temperatura de las aguas de la región.<br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Electrico, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/458.png" alt="pokemon Mantyke">
              <p class="parrafo-evol">Mantyke N.° 0458<br>
                Agua, Volador.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/226.png" alt="pokemon Mantine">
              <p class="parrafo-evol">Mantine N.° 0226<br>
                Agua, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "skarmory":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Skarmory <b>N.° 0227</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png" alt="pokemon Skarmory">
          <p class="parrafo">Sus afiladas plumas son más cortantes que el filo de una espada. Tiene disputas territoriales muy agresivas con Corviknight.<br><br>
          <b style="color:#0000ff">Tipo:</b> Acero, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/227.png" alt="pokemon Skarmory">
              <p class="parrafo-evol">Skarmory N.° 0227<br>
                Acero, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
    
  case "0227":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Skarmory <b>N.° 0227</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png" alt="pokemon Skarmory">
          <p class="parrafo">Sus afiladas plumas son más cortantes que el filo de una espada. Tiene disputas territoriales muy agresivas con Corviknight.<br><br>
          <b style="color:#0000ff">Tipo:</b> Acero, Volador.<br>
          <b style="color:#0000ff">Debilidad:</b> Fuego, Electrico.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/227.png" alt="pokemon Skarmory">
              <p class="parrafo-evol">Skarmory N.° 0227<br>
                Acero, Volador.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "houndour":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Houndour <b>N.° 0228</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png" alt="pokemon Houndour">
          <p class="parrafo">Tiene suficiente inteligencia para cazar en manada. Se comunica con los demás a través de diversos aullidos.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/228.png" alt="pokemon Houndour">
              <p class="parrafo-evol">Houndour N.° 0228<br>
                Siniestro, Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png" alt="pokemon Houndoom">
              <p class="parrafo-evol">Houndoom N.° 0229<br>
                Siniestro, Fuego.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0228":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Houndour <b>N.° 0228</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png" alt="pokemon Houndour">
          <p class="parrafo">Tiene suficiente inteligencia para cazar en manada. Se comunica con los demás a través de diversos aullidos.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/228.png" alt="pokemon Houndour">
              <p class="parrafo-evol">Houndour N.° 0228<br>
                Siniestro, Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png" alt="pokemon Houndoom">
              <p class="parrafo-evol">Houndoom N.° 0229<br>
                Siniestro, Fuego.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "houndoom":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Houndoom <b>N.° 0229</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png" alt="pokemon Houndoom">
          <p class="parrafo">Si alguien se quema con las llamas que lanza por la boca, el dolor no desaparecerá nunca.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/228.png" alt="pokemon Houndour">
              <p class="parrafo-evol">Houndour N.° 0228<br>
                Siniestro, Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png" alt="pokemon Houndoom">
              <p class="parrafo-evol">Houndoom N.° 0229<br>
                Siniestro, Fuego.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0229":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Houndoom <b>N.° 0229</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png" alt="pokemon Houndoom">
          <p class="parrafo">Si alguien se quema con las llamas que lanza por la boca, el dolor no desaparecerá nunca.<br><br>
          <b style="color:#0000ff">Tipo:</b> Siniestro, Fuego.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Lucha, Roca.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/228.png" alt="pokemon Houndour">
              <p class="parrafo-evol">Houndour N.° 0228<br>
                Siniestro, Fuego.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png" alt="pokemon Houndoom">
              <p class="parrafo-evol">Houndoom N.° 0229<br>
                Siniestro, Fuego.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "kingdra":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Kingdra <b>N.° 0230</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png" alt="pokemon Kingdra">
          <p class="parrafo">Se deja ver en la superficie del mar cuando hay tormentas. Si se encuentra con Dragonite, tendrá lugar una violenta pelea. <br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Dragon.<br>
          <b style="color:#0000ff">Debilidad:</b> Hada, Dragon.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
              <p class="parrafo-evol">Horsea N.° 0116<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
              <p class="parrafo-evol">Seadra N.° 0117<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
              <p class="parrafo-evol">Kingdra N.° 0230<br>
                Agua, Dragon.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0230":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Kingdra <b>N.° 0230</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png" alt="pokemon Kingdra">
          <p class="parrafo">Se deja ver en la superficie del mar cuando hay tormentas. Si se encuentra con Dragonite, tendrá lugar una violenta pelea. <br><br>
          <b style="color:#0000ff">Tipo:</b> Agua, Dragon.<br>
          <b style="color:#0000ff">Debilidad:</b> Hada, Dragon.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png" alt="pokemon Horsea">
              <p class="parrafo-evol">Horsea N.° 0116<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png" alt="pokemon Seadra">
              <p class="parrafo-evol">Seadra N.° 0117<br>
                Agua.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png" alt="pokemon Kingdra">
              <p class="parrafo-evol">Kingdra N.° 0230<br>
                Agua, Dragon.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "phanpy":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Phanpy <b>N.° 0231</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png" alt="pokemon Phanpy">
          <p class="parrafo">Vive en hoyos que cava en la ribera de los ríos. Tras retozar en el lodo, no se queda tranquilo hasta haberse lavado bien el cuerpo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png" alt="pokemon Phanpy">
              <p class="parrafo-evol">Phanpy N.° 0231<br>
                Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/232.png" alt="pokemon Donphan">
              <p class="parrafo-evol">Donphan N.° 0232<br>
                Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0231":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Phanpy <b>N.° 0231</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png" alt="pokemon Phanpy">
          <p class="parrafo">Vive en hoyos que cava en la ribera de los ríos. Tras retozar en el lodo, no se queda tranquilo hasta haberse lavado bien el cuerpo.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png" alt="pokemon Phanpy">
              <p class="parrafo-evol">Phanpy N.° 0231<br>
                Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/232.png" alt="pokemon Donphan">
              <p class="parrafo-evol">Donphan N.° 0232<br>
                Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "donphan":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Donphan <b>N.° 0232</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png" alt="pokemon Donphan">
          <p class="parrafo">Su dura piel podría resistir el choque contra un coche sin sufrir un rasguño. La lluvia, sin embargo, es su punto débil.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png" alt="pokemon Phanpy">
              <p class="parrafo-evol">Phanpy N.° 0231<br>
                Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/232.png" alt="pokemon Donphan">
              <p class="parrafo-evol">Donphan N.° 0232<br>
                Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0232":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Donphan <b>N.° 0232</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png" alt="pokemon Donphan">
          <p class="parrafo">Su dura piel podría resistir el choque contra un coche sin sufrir un rasguño. La lluvia, sin embargo, es su punto débil.<br><br>
          <b style="color:#0000ff">Tipo:</b> Tierra.<br>
          <b style="color:#0000ff">Debilidad:</b> Agua, Planta, Hielo.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png" alt="pokemon Phanpy">
              <p class="parrafo-evol">Phanpy N.° 0231<br>
                Tierra.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/232.png" alt="pokemon Donphan">
              <p class="parrafo-evol">Donphan N.° 0232<br>
                Tierra.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "stantler":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Stantler <b>N.° 0234</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png" alt="pokemon Stantler">
          <p class="parrafo">Antaño habitaba en entornos inhóspitos, por lo que sus poderes psíquicos eran supuestamente más potentes aún que en la actualidad.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/234.png" alt="pokemon Stantler">
              <p class="parrafo-evol">Stantler N.° 0234<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/899.png" alt="pokemon Wyrdeer">
              <p class="parrafo-evol">Wyrdeer N.° 0899<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0234":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Stantler <b>N.° 0234</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png" alt="pokemon Stantler">
          <p class="parrafo">Antaño habitaba en entornos inhóspitos, por lo que sus poderes psíquicos eran supuestamente más potentes aún que en la actualidad.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/234.png" alt="pokemon Stantler">
              <p class="parrafo-evol">Stantler N.° 0234<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/899.png" alt="pokemon Wyrdeer">
              <p class="parrafo-evol">Wyrdeer N.° 0899<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "wyrdeer":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wyrdeer <b>N.° 0899</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/899.png" alt="pokemon Wyrdeer">
          <p class="parrafo">Sus orbes negros brillan con un fulgor misterioso cuando erige muros invisibles. El pelaje que se desprende de sus barbas es muy codiciado para crear cálidos ropajes para el invierno.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/234.png" alt="pokemon Stantler">
              <p class="parrafo-evol">Stantler N.° 0234<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/899.png" alt="pokemon Wyrdeer">
              <p class="parrafo-evol">Wyrdeer N.° 0899<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0899":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Wyrdeer <b>N.° 0899</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/899.png" alt="pokemon Wyrdeer">
          <p class="parrafo">Sus orbes negros brillan con un fulgor misterioso cuando erige muros invisibles. El pelaje que se desprende de sus barbas es muy codiciado para crear cálidos ropajes para el invierno.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal, Psiquico.<br>
          <b style="color:#0000ff">Debilidad:</b> Siniestro, Bicho.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/234.png" alt="pokemon Stantler">
              <p class="parrafo-evol">Stantler N.° 0234<br>
                Normal.
              </p>
            </div>
            <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/899.png" alt="pokemon Wyrdeer">
              <p class="parrafo-evol">Wyrdeer N.° 0899<br>
                Normal, Psiquico.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "smeargle":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Smeargle <b>N.° 0235</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png" alt="pokemon Smeargle">
          <p class="parrafo">La tonalidad del líquido que libera por la cola cambia en función de su estado anímico.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/235.png" alt="pokemon Smeargle">
              <p class="parrafo-evol">Smeargle N.° 0235<br>
                Normal. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
  case "0235":
    informacion.innerHTML = `
      <h2 class="t-pokemon">Smeargle <b>N.° 0235</b></h2>
        <div class="datos-pokemon">
          <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png" alt="pokemon Smeargle">
          <p class="parrafo">La tonalidad del líquido que libera por la cola cambia en función de su estado anímico.<br><br>
          <b style="color:#0000ff">Tipo:</b> Normal.<br>
          <b style="color:#0000ff">Debilidad:</b> Lucha.
          </p>    
        </div>
        <div class="evol-pokemon">
          <h3 class="t-evol">Evoluciones</h3>
          <div class="contenedor">
            <div class="card-evol">
              <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/235.png" alt="pokemon Smeargle">
              <p class="parrafo-evol">Smeargle N.° 0235<br>
                Normal. <br><br>
                Este Pokemon no evoluciona.
              </p>
            </div>
          </div>
        </div> `;
        break;
    case "tyrogue":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tyrogue <b>N.° 0236</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png" alt="pokemon Tyrogue">
            <p class="parrafo">Siempre está rebosante de energía. Por muchas derrotas que acumule, no deja de plantar cara a sus rivales con tal de fortalecerse. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0236":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tyrogue <b>N.° 0236</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png" alt="pokemon Tyrogue">
            <p class="parrafo">Siempre está rebosante de energía. Por muchas derrotas que acumule, no deja de plantar cara a sus rivales con tal de fortalecerse. <br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "hitmontop":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmontop <b>N.° 0237</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png" alt="pokemon Hitmontop">
            <p class="parrafo">Lanza patadas mientras gira. Si alcanza mucha velocidad, puede cavar un hoyo en la tierra.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "0237":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Hitmontop <b>N.° 0237</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png" alt="pokemon Hitmontop">
            <p class="parrafo">Lanza patadas mientras gira. Si alcanza mucha velocidad, puede cavar un hoyo en la tierra.<br><br>
            <b style="color:#0000ff">Tipo:</b> Lucha.<br>
            <b style="color:#0000ff">Debilidad:</b> Psiquico, Volador, Hada.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png" alt="pokemon Tyrogue">
                <p class="parrafo-evol">Tyrogue N.° 0236<br>
                  Lucha.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                  <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                  <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                    Lucha.
                  </p>
                </div>
                <div>
                  <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                  <p class="parrafo-evol">Hitmontop N.° 0237<br>
                    Lucha.
                  </p>
                </div>
              </div>
            </div>
          </div> `;
          break;
    case "smoochum":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Smoochum <b>N.° 0238</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png" alt="pokemon Smoochum">
            <p class="parrafo">En cuanto se le ensucia la cara, aunque sea un poco, se la lava con agua. En el resto del cuerpo, la suciedad no parece importarle mucho.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fantasma, Fuego, Siniestro, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/238.png" alt="pokemon Smoochun">
                <p class="parrafo-evol">Smoochun N.° 0238<br>
                  Hielo, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png" alt="pokemon Jynx">
                <p class="parrafo-evol">Jynx N.° 0124<br>
                  Hielo, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0238":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Smoochum <b>N.° 0238</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png" alt="pokemon Smoochum">
            <p class="parrafo">En cuanto se le ensucia la cara, aunque sea un poco, se la lava con agua. En el resto del cuerpo, la suciedad no parece importarle mucho.<br><br>
            <b style="color:#0000ff">Tipo:</b> Hielo, Psiquico.<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Fantasma, Fuego, Siniestro, Roca, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/238.png" alt="pokemon Smoochun">
                <p class="parrafo-evol">Smoochun N.° 0238<br>
                  Hielo, Psiquico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png" alt="pokemon Jynx">
                <p class="parrafo-evol">Jynx N.° 0124<br>
                  Hielo, Psiquico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "elekid":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Elekid <b>N.° 0239</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png" alt="pokemon Elekid">
            <p class="parrafo">Cuando se acerca una tormenta, pierde la compostura. Si oye el sonido de un trueno, no se puede contener y monta un revuelo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0239":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Elekid <b>N.° 0239</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png" alt="pokemon Elekid">
            <p class="parrafo">Cuando se acerca una tormenta, pierde la compostura. Si oye el sonido de un trueno, no se puede contener y monta un revuelo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "electivire":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electivire <b>N.° 0466</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png" alt="pokemon Electivire">
            <p class="parrafo">La cantidad de electricidad que genera es proporcional a su pulso. Al enzarzarse en combate, su voltaje aumenta drásticamente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0466":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Electivire <b>N.° 0466</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png" alt="pokemon Electivire">
            <p class="parrafo">La cantidad de electricidad que genera es proporcional a su pulso. Al enzarzarse en combate, su voltaje aumenta drásticamente.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png" alt="pokemon Elekid">
                <p class="parrafo-evol">Elekid N.° 0239<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png" alt="pokemon Electabuzz">
                <p class="parrafo-evol">Electabuzz N.° 0125<br>
                  Electrico.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png" alt="pokemon Electivire">
                <p class="parrafo-evol">Electivire N.° 0466<br>
                  Electrico.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magby":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magby <b>N.° 0240</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png" alt="pokemon Magby">
            <p class="parrafo">Como todavía es pequeño, se asusta fácilmente. Cuando se emociona o se sorprende, se le escapa fuego por la nariz y por la boca.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0240":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magby <b>N.° 0240</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png" alt="pokemon Magby">
            <p class="parrafo">Como todavía es pequeño, se asusta fácilmente. Cuando se emociona o se sorprende, se le escapa fuego por la nariz y por la boca.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "magmortar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magmortar <b>N.° 0467</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/467.png" alt="pokemon Magmortar">
            <p class="parrafo">Al respirar profundamente, el fuego del interior de su vientre gana intensidad y puede alcanzar los 2000 ºC.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0467":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Magmortar <b>N.° 0467</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/467.png" alt="pokemon Magmortar">
            <p class="parrafo">Al respirar profundamente, el fuego del interior de su vientre gana intensidad y puede alcanzar los 2000 ºC.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png" alt="pokemon Magby">
                <p class="parrafo-evol">Magby N.° 0240<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png" alt="pokemon Magmar">
                <p class="parrafo-evol">Magmar N.° 0126<br>
                  Fuego.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png" alt="pokemon Magmortar">
                <p class="parrafo-evol">Magmortar N.° 0467<br>
                  Fuego.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "miltank":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Miltank <b>N.° 0241</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png" alt="pokemon Miltank">
            <p class="parrafo">Debido a la nutritiva leche que produce, ha contribuido al bienestar de humanos y Pokémon desde tiempos inmemoriales.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/241.png" alt="pokemon Miltank">
                <p class="parrafo-evol">Miltank N.° 0241<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0241":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Miltank <b>N.° 0241</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png" alt="pokemon Miltank">
            <p class="parrafo">Debido a la nutritiva leche que produce, ha contribuido al bienestar de humanos y Pokémon desde tiempos inmemoriales.<br><br>
            <b style="color:#0000ff">Tipo:</b> Normal<br>
            <b style="color:#0000ff">Debilidad:</b> Lucha.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/241.png" alt="pokemon Miltank">
                <p class="parrafo-evol">Miltank N.° 0241<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "raikou":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raikou <b>N.° 0243</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png" alt="pokemon Raikou">
            <p class="parrafo">Raikou tiene la velocidad del rayo. Los rugidos de este Pokémon emiten ondas de choque que se esparcen vibrando por el aire y sacuden el suelo como si fueran auténticas descargas de rayo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/243.png" alt="pokemon Raikou">
                <p class="parrafo-evol">Raikou N.° 0243<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0243":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Raikou <b>N.° 0243</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png" alt="pokemon Raikou">
            <p class="parrafo">Raikou tiene la velocidad del rayo. Los rugidos de este Pokémon emiten ondas de choque que se esparcen vibrando por el aire y sacuden el suelo como si fueran auténticas descargas de rayo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Electrico<br>
            <b style="color:#0000ff">Debilidad:</b> Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/243.png" alt="pokemon Raikou">
                <p class="parrafo-evol">Raikou N.° 0243<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "entei":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Entei <b>N.° 0244</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png" alt="pokemon Entei">
            <p class="parrafo">Entei contiene el fulgor del magma en su interior. Se cree que este Pokémon nació de la erupción de un volcán. Escupe numerosas ráfagas de fuego que devoran y reducen a cenizas todo lo que tocan.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/244.png" alt="pokemon Entei">
                <p class="parrafo-evol">Entei N.° 0244<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0244":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Entei <b>N.° 0244</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png" alt="pokemon Entei">
            <p class="parrafo">Entei contiene el fulgor del magma en su interior. Se cree que este Pokémon nació de la erupción de un volcán. Escupe numerosas ráfagas de fuego que devoran y reducen a cenizas todo lo que tocan.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Tierra, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/244.png" alt="pokemon Entei">
                <p class="parrafo-evol">Entei N.° 0244<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "suicune":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Suicune <b>N.° 0245</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png" alt="pokemon Suicune">
            <p class="parrafo">Suicune emana la pureza de los manantiales. Suele corretear por el campo con gran elegancia. Este Pokémon tiene el poder de purificar el agua contaminada. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/245.png" alt="pokemon Suicune">
                <p class="parrafo-evol">Suicune N.° 0245<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0245":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Suicune <b>N.° 0245</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png" alt="pokemon Suicune">
            <p class="parrafo">Suicune emana la pureza de los manantiales. Suele corretear por el campo con gran elegancia. Este Pokémon tiene el poder de purificar el agua contaminada. <br><br>
            <b style="color:#0000ff">Tipo:</b> Agua.<br>
            <b style="color:#0000ff">Debilidad:</b> Planta, Electrico.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/245.png" alt="pokemon Suicune">
                <p class="parrafo-evol">Suicune N.° 0245<br>
                  Normal. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;

    case "larvitar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Larvitar <b>N.° 0246</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png" alt="pokemon Larvitar">
            <p class="parrafo">Nacido en las profundidades subterráneas, este Pokémon se convierte en pupa al comer la cantidad de tierra equivalente a una montaña. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0246":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Larvitar <b>N.° 0246</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png" alt="pokemon Larvitar">
            <p class="parrafo">Nacido en las profundidades subterráneas, este Pokémon se convierte en pupa al comer la cantidad de tierra equivalente a una montaña. <br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "pupitar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pupitar <b>N.° 0247</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png" alt="pokemon Pupitar">
            <p class="parrafo">Esta pupa vuela propulsándose con los gases sometidos a altas presiones que encierra en el interior de su cuerpo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0247":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Pupitar <b>N.° 0247</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png" alt="pokemon Pupitar">
            <p class="parrafo">Esta pupa vuela propulsándose con los gases sometidos a altas presiones que encierra en el interior de su cuerpo.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Tierra<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hielo, Planta, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "tyranitar":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tyranitar <b>N.° 0248</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png" alt="pokemon Tyranitar">
            <p class="parrafo">Tiene tanta fuerza que puede cambiar el paisaje. Su naturaleza insolente le hace ser muy egoísta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Siniestro<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hada, Planta, Bicho, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    case "0248":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Tyranitar <b>N.° 0248</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png" alt="pokemon Tyranitar">
            <p class="parrafo">Tiene tanta fuerza que puede cambiar el paisaje. Su naturaleza insolente le hace ser muy egoísta.<br><br>
            <b style="color:#0000ff">Tipo:</b> Roca, Siniestro<br>
            <b style="color:#0000ff">Debilidad:</b> Acero, Lucha, Agua, Hada, Planta, Bicho, Tierra.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png" alt="pokemon Larvitar">
                <p class="parrafo-evol">Larvitar N.° 0246<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png" alt="pokemon Pupitar">
                <p class="parrafo-evol">Pupitar N.° 0247<br>
                  Roca, Tierra.
                </p>
              </div>
              <img class="img-arrow" src="../img/arrow.svg" alt="flecha">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="pokemon Tyranitar">
                <p class="parrafo-evol">Tyranitar N.° 0248<br>
                  Roca, Siniestro.
                </p>
              </div>
            </div>
          </div> `;
          break;
    
    case "lugia":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lugia <b>N.° 0249</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png" alt="pokemon Lugia">
            <p class="parrafo">La fuerza que tiene Lugia en las alas es devastadora; con nada que las bata es capaz de derribar edificios enteros. Por eso mismo, prefiere vivir donde no haya nadie, en lo más profundo del mar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/249.png" alt="pokemon Lugia">
                <p class="parrafo-evol">Lugia N.° 0249<br>
                  Psiquico, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0249":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Lugia <b>N.° 0249</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png" alt="pokemon Lugia">
            <p class="parrafo">La fuerza que tiene Lugia en las alas es devastadora; con nada que las bata es capaz de derribar edificios enteros. Por eso mismo, prefiere vivir donde no haya nadie, en lo más profundo del mar.<br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Siniestro, Electrico, Hielo, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/249.png" alt="pokemon Lugia">
                <p class="parrafo-evol">Lugia N.° 0249<br>
                  Psiquico, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "ho-oh":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ho-Oh <b>N.° 0250</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png" alt="pokemon Ho-Oh">
            <p class="parrafo">El plumaje de Ho-Oh contiene siete colores que pueden apreciarse según el ángulo desde el que les dé la luz. Dicen que sus plumas dan felicidad a quienes las llevan y, también, que este Pokémon vive a los pies del arco iris.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/250.png" alt="pokemon Ho-Oh">
                <p class="parrafo-evol">Ho-Oh N.° 0250<br>
                  Fuego, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0250":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Ho-Oh <b>N.° 0250</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png" alt="pokemon Ho-Oh">
            <p class="parrafo">El plumaje de Ho-Oh contiene siete colores que pueden apreciarse según el ángulo desde el que les dé la luz. Dicen que sus plumas dan felicidad a quienes las llevan y, también, que este Pokémon vive a los pies del arco iris.<br><br>
            <b style="color:#0000ff">Tipo:</b> Fuego, Volador.<br>
            <b style="color:#0000ff">Debilidad:</b> Agua, Electrico, Roca.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/250.png" alt="pokemon Ho-Oh">
                <p class="parrafo-evol">Ho-Oh N.° 0250<br>
                  Fuego, Volador. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "celebi":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Celebi <b>N.° 0251</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png" alt="pokemon Celebi">
            <p class="parrafo">Este Pokémon vino del futuro haciendo un viaje en el tiempo. Hay quien piensa que, mientras Celebi siga apareciendo, hay un futuro brillante y esperanzador. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/251.png" alt="pokemon Celebi">
                <p class="parrafo-evol">Celebi N.° 0251<br>
                  Psiquico, Planta. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    case "0251":
      informacion.innerHTML = `
        <h2 class="t-pokemon">Celebi <b>N.° 0251</b></h2>
          <div class="datos-pokemon">
            <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png" alt="pokemon Celebi">
            <p class="parrafo">Este Pokémon vino del futuro haciendo un viaje en el tiempo. Hay quien piensa que, mientras Celebi siga apareciendo, hay un futuro brillante y esperanzador. <br><br>
            <b style="color:#0000ff">Tipo:</b> Psiquico, Planta.<br>
            <b style="color:#0000ff">Debilidad:</b> Fantasma, Fuego, Volador, Hielo Siniestro, Veneno, Bicho.
            </p>    
          </div>
          <div class="evol-pokemon">
            <h3 class="t-evol">Evoluciones</h3>
            <div class="contenedor">
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/251.png" alt="pokemon Celebi">
                <p class="parrafo-evol">Celebi N.° 0251<br>
                  Psiquico, Planta. <br><br>
                  Este Pokemon no evoluciona.
                </p>
              </div>
            </div>
          </div> `;
    break;
    
    default:
        informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
        break;
      }
  })

})()