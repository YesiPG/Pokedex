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
        <h2 class="t-pokemon">pikachu <b>N.° 0025</b></h2>
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
        <h2 class="t-pokemon">pikachu <b>N.° 0025</b></h2>
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
      
    default:
        informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
        break;
      }
  })

})()