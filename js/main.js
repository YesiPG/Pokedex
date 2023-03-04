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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                <p class="parrafo-evol">Slowbro N.° 0080<br>
                  Agua, Psiquico.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                <p class="parrafo-evol">Slowking N.° 0199<br>
                  Agua, Psiquico.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                <p class="parrafo-evol">Slowbro N.° 0080<br>
                  Agua, Psiquico.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                <p class="parrafo-evol">Slowking N.° 0199<br>
                  Agua, Psiquico.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                <p class="parrafo-evol">Slowbro N.° 0080<br>
                  Agua, Psiquico.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                <p class="parrafo-evol">Slowking N.° 0199<br>
                  Agua, Psiquico.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png" alt="pokemon Slowbro">
                <p class="parrafo-evol">Slowbro N.° 0080<br>
                  Agua, Psiquico.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png" alt="pokemon Slowking">
                <p class="parrafo-evol">Slowking N.° 0199<br>
                  Agua, Psiquico.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                <p class="parrafo-evol">Hitmontop N.° 0237<br>
                  Lucha.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                <p class="parrafo-evol">Hitmontop N.° 0237<br>
                  Lucha.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                <p class="parrafo-evol">Hitmontop N.° 0237<br>
                  Lucha.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png" alt="pokemon Hitmonlee">
                <p class="parrafo-evol">Hitmonlee N.° 0106<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png" alt="pokemon Hitmonchan">
                <p class="parrafo-evol">Hitmonchan N.° 0107<br>
                  Lucha.
                </p>
              </div>
              <div class="card-evol">
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png" alt="pokemon Hitmontop">
                <p class="parrafo-evol">Hitmontop N.° 0237<br>
                  Lucha.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
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
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png" alt="pokemon Scizor">
                <p class="parrafo-evol">Scizor N.° 0212<br>
                  Bicho, Acero.
                </p><br><br>
                <img class="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/900.png" alt="pokemon Kleavor">
                <p class="parrafo-evol">Kleavor N.° 0900<br>
                  Bicho, Roca.
                </p>
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
            <b style="color:#0000ff">Debilidad:</b> Hada, Dragon, Hielo.
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
      
    default:
        informacion.innerHTML = `El nombre "${busqueda}" no es un pokemon.`;
        break;
      }
  })

})()