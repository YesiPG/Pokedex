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
          
      
          default:
              informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
              break;
      }
  })

})()