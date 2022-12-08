const juegoModulo = (() => {
  'use strict';

//declaraciones
const apiUrl = './js/data.json';
const body = document.body;
const heroes = [];
let contadorPosicionIzq = 0;
let contadorPosicionDer = 0;
let mazoJugador = [];
let mazoComputadora = [];
let cartaComputadora;
let cantidadRondasIzq = 9;
let cantidadRondasDer = 9;
let backgroundVariable = `rgba(55,66,122,1)`;
let puntosJugador = 0;
let puntosComputadora = 0;


const getHeroes = async() => {
  try {
    const response = await fetch(`${apiUrl}`);
    if(!response.ok) throw 'No se pudo realizar la petición';
    const heroes = await response.json();
    return heroes;
  } catch (error) {
    throw error;
  }
}

const getHeroesById = async(id) => {
  try {
    const heroes = await getHeroes();
    const [heroe] = heroes.filter(hero => hero.id === id);
    return heroe;
  } catch (error) {
    throw error;
  }
}

const getHeroesByPublisher = async(publisher) => {
  try {
    const heroes = await getHeroes();
    const heroesByPublisher = heroes.filter(hero => hero.biography.publisher === publisher);
    console.log(heroesByPublisher);
    return heroesByPublisher;
  } catch (error) {
    throw error;
  }
}
  const main = document.getElementById('main');
  const contenedor = document.createElement('div');
  contenedor.classList.add('contenedorPrincipal','row', 'justify-content-center');
  const contenedorCartasDorsoIzq = document.createElement('div');
  contenedorCartasDorsoIzq.classList.add('col-3','d-flex','justify-content-start');
  const contenedorCartaIzq = document.createElement('div');
  contenedorCartaIzq.classList.add('col-3','d-flex', 'justify-content-end');
  const contenedorCartaDer = document.createElement('div');
  contenedorCartaDer.classList.add('col-3');
  const contenedorCartasDorsoDer = document.createElement('div');
  contenedorCartasDorsoDer.classList.add('col-3','d-flex', 'justify-content-end');
  const heroesTarjetas = document.getElementById('heroesLista')


const cargarHome = () => {
  crearSelectores();
  tarjetas.innerHTML = '';
  carta.innerHTML = '';
  dorsoCarta.innerHTML = '';
  cartaDerecha.innerHTML = '';
  dorsoCartaOculta.innerHTML = '';
  dorsoCartaDerecha.innerHTML = '';
  header.style.background = backgroundVariable;
  tarjetas.style.background = `linear-gradient(to bottom, ${backgroundVariable} 0%, rgba(255,255,255,1) 100%)`; 
} ; 
  
const crearHtml = () => {


  main.appendChild(contenedor);
  contenedor.appendChild(contenedorSelector);
  contenedor.appendChild(contenedorCartasDorsoIzq);
  contenedor.appendChild(contenedorCartaIzq);
  contenedor.appendChild(contenedorCartaDer);
  contenedor.appendChild(contenedorCartasDorsoDer);
  contenedorCartasDorsoIzq.appendChild(dorsoCarta);
  contenedorCartaIzq.appendChild(carta);
  contenedorCartaDer.appendChild(dorsoCartaOculta);
  // contenedorCartaDer.appendChild(cartaDerecha);
  contenedorCartasDorsoDer.appendChild(dorsoCartaDerecha);
  heroesTarjetas.appendChild(tarjetas);


  crearMenuNav();
  crearSelectores();
  crearFooter();

  header.style.background = backgroundVariable;

  const juego = document.getElementById('juego');
  const cartasHeroes = document.getElementById('cartasHeroes');
  const estadisticas = document.getElementById('stats');
  const navbarBrand = document.getElementById('navbarBrand');

  juego.addEventListener('click', () => {
    cargarHome();
  });

  cartasHeroes.addEventListener('click', () => {
    cargarHome();
    crearTarjetas();
    contenedorSelector.innerHTML = '';
  });

  navbarBrand.addEventListener('click', () => {
    cargarHome();
  });

}



const header = document.getElementById('headerContainer');
const menuNav = document.createElement('div');
header.appendChild(menuNav);

const crearMenuNav = () => {
  menuNav.innerHTML = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a id="navbarBrand" class="navbar-brand" href="#">
      <div class="d-flex align-content-center containerLogo">
        <img class="dcLogo" src="./img/dc_logo.png" alt="DC_logo">
        <img class="vsLogo" src="./img/vs_logo.png" alt="Vs_logo">
        <img class="marvelLogo" src="./img/marvel_logo1.png" alt="Marvel_logo">
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a id="juego" class="nav-link" aria-current="page" href="#">Juego</a>
        </li>
        <li class="nav-item">
          <a id="cartasHeroes" class="nav-link" href="#">Heroes</a>
        </li>
        <li class="nav-item">
        <a id="stats" class="nav-link" href="#">Estadísticas</a>
      </li>
      </ul>
    </div>
  </div>
</nav>`
}

const footerSitio = document.getElementById('footerSitio');
const footer= document.createElement('div');
footerSitio.appendChild(footer);

const crearFooter = () => {
  footer.innerHTML = `
  <div class="row justify-content-around align-items-center">
    <div class="col-lg-4 col-md-6">
      <p class="footer__copyright">Copyright © 2022, All Right Reserved</p>
    </div>
    <div class="col-lg-4 col-md-6">
      <p class="footer__nombre">Desarrollado por: <b>Esteban Perea</b></p>
    </div>
    <!--Redes sociales -->
    <div class="redes_sociales col-lg-4 col-md-12">
      <a href="https://www.facebook.com/people/Esteban-Gabriel-Jes%C3%BAs-Perea/100010899370670/"
        target="_blank"><i class="bi bi-facebook redes_logos"></i></a>
      <a href="https://www.instagram.com/estebangabrieljesus/" target="_blank"><i
          class="bi bi-instagram redes_logos"></i></a>
      <a href="https://www.linkedin.com/in/esteban-perea-211582224/?originalSubdomain=ar" target="_blank"><i
          class="bi bi-linkedin redes_logos"></i></a>
      <a href="https://github.com/Esteban674" target="_blank"><i class="bi bi-github redes_logos"></i></a>
    </div>
  </div>
  `
}


const contenedorSelector = document.createElement('div');
contenedorSelector.classList.add('container-fluid','px-0');

const crearSelectores = () => {
  contenedorSelector.innerHTML = `
      <div class="row">
        <div class="col-12 text-center mt-5 mb-3 tituloSelector">
          <h1 class="mt-5 mb-5">Juego de cartas Marvel vs DC</h1>
          <h3>Para comenzar el juego selecciona tu facción</h3>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center">
        <div id="DCSelector" class="col-5 publisherSelector px-0 sombra-movil">
            <img id="imgDCSelector" src="./img/DC_LogoSelector.png" alt="Logo DC Comics">
        </div>
        <div id="vsSelector" class="col-1 text-center px-0">
          <img id="imgVsSelector" class="img-fluid" src="./img/vs_logo.png" alt="vs_logo">
        </div>
        <div id="MarvelSelector" class="col-5 publisherSelector px-0 sombra-movil">
          <img id="imgMarvelSelector" class="img-fluid" src="./img/MarvelSelector2.jpg" alt="Logo Marvel Comics">
        </div>
      </div>
  `
  const dcSelected = document.getElementById('DCSelector');
  dcSelected.addEventListener('click', async() => {
    cantidadRondasIzq = 9;
    cantidadRondasDer = 9;
    contadorPosicionIzq = 0;
    contenedorSelector.innerHTML = '';
    const publisher = 'DC Comics'; 
    mazoJugador = await generarMazo(publisher);
    for(let i = 0; i < cantidadRondasIzq; i++){
      crearDorsoCartaIzquierda(publisher);
      contadorPosicionIzq = i + 1;
    }
    cantidadRondasIzq--;
    crearCarta(mazoJugador.pop());
    generarContrarioMarvel();
    console.log('DCSelected')
  })

  const marvelSelected = document.getElementById('MarvelSelector');
  marvelSelected.addEventListener('click', async() => {
    cantidadRondasIzq = 9;
    cantidadRondasDer = 9;
    contadorPosicionIzq = 0;
    contenedorSelector.innerHTML = '';
    const publisher = 'Marvel Comics'; 
    mazoJugador = await generarMazo(publisher);
    for(let i = 0; i < cantidadRondasIzq; i++){
      crearDorsoCartaIzquierda(publisher);
      contadorPosicionIzq = i + 1;
    }
    cantidadRondasIzq--;
    crearCarta(mazoJugador.pop());
    generarContrarioDC();
    console.log('MarvelSelected')
  })
}

const generarContrarioMarvel = async() => {
  contadorPosicionDer = 0;
  const publisher = 'Marvel Comics'; 
  mazoComputadora = await generarMazo(publisher);
  for(let i = 0; i < cantidadRondasDer; i++){
    crearDorsoCartaDerecha(publisher);
    contadorPosicionDer = i + 1;
  };
  cantidadRondasDer--;
  cartaComputadora = mazoComputadora.pop()
  crearDorsoCartaOculta(publisher);
}

const generarContrarioDC = async() => {
  contadorPosicionDer = 0;
  const publisher = 'DC Comics'; 
  mazoComputadora = await generarMazo(publisher);
  for(let i = 0; i < cantidadRondasDer; i++){
    crearDorsoCartaDerecha(publisher);
    contadorPosicionDer = i + 1;
  };
  cantidadRondasDer--;
  cartaComputadora = mazoComputadora.pop()
  crearDorsoCartaOculta(publisher);
}


const tarjetas = document.createElement('div');
tarjetas.classList.add('contenedorTarjetas','justify-content-center');


const carta = document.createElement('div');
carta.classList.add('contenedorCartas','justify-content-center');

const dorsoCarta = document.createElement('div');
dorsoCarta.classList.add('contenedorCartas','justify-content-center');

const cartaDerecha = document.createElement('div');
cartaDerecha.classList.add('contenedorCartas','justify-content-center');

const dorsoCartaDerecha = document.createElement('div');
dorsoCartaDerecha.classList.add('contenedorCartas','justify-content-center');

const dorsoCartaOculta = document.createElement('div');
dorsoCartaOculta.classList.add('contenedorCartas','justify-content-center');

const crearDorsoCartaIzquierda = (publisher) => {
  dorsoCarta.innerHTML += `
        <div class="dorsoCarta positionIzq${contadorPosicionIzq}">
          <img src="${publisher === 'DC Comics'? './img/dorsoDC.png' : './img/dorsoMarvel.jpg'}" alt="dorso carta" class="imagenDorsoCarta">
        </div>
  `
};

const crearDorsoCartaDerecha = (publisher) => {
  dorsoCartaDerecha.innerHTML += `
        <div class="dorsoCarta positionDer${contadorPosicionDer}"">
          <img src="${publisher === 'DC Comics'? './img/dorsoDC.png' : './img/dorsoMarvel.jpg'}" alt="dorso carta" class="imagenDorsoCarta">
        </div>
  `
};

const crearDorsoCartaOculta = (publisher) => {
  dorsoCartaOculta.innerHTML = `
        <div class="dorsoCarta dorsoCartaOculta">
          <img src="${publisher === 'DC Comics'? './img/dorsoDC.png' : './img/dorsoMarvel.jpg'}" alt="dorso carta" class="imagenDorsoCarta">
        </div>
  `
};

const crearCarta = async(id) => {
  const heroe = await getHeroesById(id);
    carta.innerHTML += `
        <div class="carta animate__animated animate__fadeIn">
        <div class="d-flex justify-content-between align-items-center contenedorNombreCarta">
          <img src="${heroe.biography.publisher == 'DC Comics'? './img/dcLogoCarta.png':'./img/marvelLogoCarta.png'}" alt="logo Carta" srcset="" class="logoCarta">
          <p class="text-center nombreCarta">${heroe.name.toUpperCase()}</p> 
          <img src="${heroe.biography.publisher == 'DC Comics'? './img/dcLogoCarta.png':'./img/marvelLogoCarta.png'}" alt="logo Carta" srcset="" class="logoCarta">
        </div>

        <div>
        <img src="${heroe.image.url}" alt="" srcset="" class="imagen" crossorigin="anonymous">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>ALTURA (cm):</p><input type="button" name="height" value="${heroe.appearance.height}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>PESO (kg):</p><input type="button" name="weight" value="${heroe.appearance.weight}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>INTELIGENCIA (IQ):</p><input type="button" name="intelligence" value="${Math.round(parseInt(heroe.powerstats.intelligence * 1.6))}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>FUERZA (kg):</p><input type="button" name="strength" value="${heroe.powerstats.strength}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>VELOCIDAD (km/h):</p><input type="button" name="speed" value="${heroe.powerstats.speed}" class="valorPropiedad">
        </div>
        </div>
        
    `
    const propiedades = document.querySelectorAll('.valorPropiedad');

    propiedades.forEach( propiedad => propiedad.addEventListener('click', ({target}) => {
      console.log(parseInt(target['value']));
      console.log((target['name']));
      dorsoCartaOculta.innerHTML = '';
      contenedorCartaDer.appendChild(cartaDerecha);
      // contenedorCartaDer.classList.add('col-3','d-flex','justify-content-start');
      compararPropiedad(heroe,(target['name']),parseInt(target['value']));
      console.log(cartaComputadora);
    }))

    const imagenHeroe = document.querySelector('.imagen');
    imagenHeroe.addEventListener('click', (e) => {
      console.log(e);
    })

    imagenHeroe.addEventListener('load', function (e) {
      let ctx;
      if(!this.canvas) {
          this.canvas = document.createElement('canvas');
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          ctx=this.canvas.getContext('2d');
          ctx.drawImage(this, 0, 0, this.width, this.height);
      } else {
        ctx=this.canvas.getContext('2d');
      }
      let r = 0,g = 0,b = 0,a = 0;
      let contador = 0;
      let pixel;
      let pixel2;
      for(let x= 100; x < 200; x = x + 20){
        for(let y = 100; y < 390; y = y + 20){
          contador++;
          pixel = ctx.getImageData(x, y, 1, 1).data;
          pixel2 = pixel.map( i => +i );
          r += pixel2[0];
          g += pixel2[1];
          b += pixel2[2];
          a += pixel2[3];
        }
      }
      r = Math.round(r/contador);
      g = Math.round(g/contador);
      b = Math.round(b/contador);
      a = Math.round(a/contador);

      backgroundVariable = `rgba(${r},${g},${b},${a})`
      contenedor.style.background = `linear-gradient(to bottom, ${backgroundVariable} 0%, rgba(255,255,255,1) 100%)`;    
      header.style.background = backgroundVariable;
      tarjetas.style.background = `linear-gradient(to bottom, ${backgroundVariable} 0%, rgba(255,255,255,1) 100%)`;   
      footerSitio.style.background = `rgba(255,255,255,1)`;
      })

//rangos 17 8 /300 8 /16 432 / 300 434
}

const empate = (heroeJugador, heroeComputadora) => {
  swal({
    title: 'Empate!',
    text: `${heroeJugador.name} empata en esta propiedad con ${heroeComputadora.name}`,
    icon: 'warning',
    button: 'Continuar',
    closeOnClickOutside: false,
  })
  puntosJugador += 1;
  puntosComputadora += 1;
};

const ganaste = (heroeJugador, heroeComputadora) => {
  swal({
    title: 'Ganaste!',
    text: `${heroeJugador.name} le gana en esta propiedad a ${heroeComputadora.name}`,
    icon: 'success',
    button: 'Continuar',
    closeOnClickOutside: false,
  })
  puntosJugador += 3;
};

const perdiste = (heroeJugador, heroeComputadora) => {
  swal({
    title: 'Perdiste!',
    text: `${heroeJugador.name} pierde en esta propiedad con ${heroeComputadora.name}`,
    icon: 'error',
    button: 'Continuar',
    closeOnClickOutside: false,
  })
  puntosComputadora += 3;
};

const compararPropiedad = async(heroeJugador,propiedad,valor) => {
  cartaComputadora = mazoComputadora.pop()
  crearCartaDerecha(cartaComputadora);
  const heroe = await getHeroesById(cartaComputadora);
  console.log(propiedad)
  console.log(heroe.appearance.height)
  switch (propiedad) {
    case 'height': {
      if(valor === parseInt(heroe.appearance.height)){
        empate(heroeJugador, heroe);
      }else if(valor > parseInt(heroe.appearance.height)){
        ganaste(heroeJugador, heroe);
      }else{
        perdiste(heroeJugador, heroe);
      }
      break;
    };
    case 'weight':{
      if(valor === parseInt(heroe.appearance.weight)){
        empate(heroeJugador, heroe);
      }else if(valor > parseInt(heroe.appearance.weight)){
        ganaste(heroeJugador, heroe);
      }else{
        perdiste(heroeJugador, heroe);
      }
      break;
    };
    case 'intelligence':{
      if(valor === Math.round(parseInt(heroe.powerstats.intelligence * 1.6))){
        empate(heroeJugador, heroe);
      }else if(valor > Math.round(parseInt(heroe.powerstats.intelligence * 1.6))){
        ganaste(heroeJugador, heroe);
      }else{
        perdiste(heroeJugador, heroe);
      }
      break;
    };
    case 'strength':{
      if(valor === parseInt(heroe.powerstats.strength)){
        empate(heroeJugador, heroe);
      }else if(valor > parseInt(heroe.powerstats.strength)){
        ganaste(heroeJugador, heroe);
      }else{
        perdiste(heroeJugador, heroe);
      }
      break;
    };
    case 'speed':{
      if(valor === parseInt(heroe.powerstats.speed)){
        empate(heroeJugador, heroe);
      }else if(valor > parseInt(heroe.powerstats.speed)){
        ganaste(heroeJugador, heroe);
      }else{
        perdiste(heroeJugador, heroe);
      }
      break;
    };
    default: {
      break;
    }
  }
  
  console.log('Puntos Jugador ' + puntosJugador);
  console.log('Puntos Computadora ' + puntosComputadora);

  const botonConfirmar = document.querySelector('.swal-button--confirm');
  botonConfirmar.addEventListener('click', () => {
    if(cantidadRondasDer > -1){
    siguienteCarta(heroe.biography.publisher);

    dorsoCartaDerecha.innerHTML = '';
    contadorPosicionDer = 0;
    for(let i = 0; i < cantidadRondasDer; i++){
      crearDorsoCartaDerecha(heroe.biography.publisher);
      contadorPosicionDer = i + 1;
    };
    cantidadRondasDer--;
    dorsoCarta.innerHTML = '';
    contadorPosicionIzq = 0;
    for(let i = 0; i < cantidadRondasIzq; i++){
      crearDorsoCartaIzquierda(heroeJugador.biography.publisher);
      contadorPosicionIzq = i + 1;
    };
    cantidadRondasIzq--;
    }else{
      console.log('Juego terminado')
      if(puntosJugador > puntosComputadora){
        swal({
          title: 'Ganaste!',
          text: `Felicitaciones obtuviste ${puntosJugador} puntos!`,
          icon: 'success',
          button: 'Finalizar',
          closeOnClickOutside: false,
        })
      }else if(puntosJugador < puntosComputadora){
        swal({
          title: 'Perdiste!',
          text: `Solo obtuviste ${puntosJugador} puntos!`,
          icon: 'error',
          button: 'Finalizar',
          closeOnClickOutside: false,
        })
      }else{
        swal({
          title: 'Empate!',
          text: `Felicitaciones obtuviste ${puntosJugador} puntos!`,
          icon: 'warning',
          button: 'Finalizar',
          closeOnClickOutside: false,
        })
      }
      cargarHome();
      puntosJugador = 0;
      puntosComputadora = 0;
    }
  })
};

const siguienteCarta = (publisher) => {
  console.log('Siguiente Carta');
  carta.innerHTML = '';
  cartaDerecha.innerHTML = '';
  crearCarta(mazoJugador.pop());
  crearDorsoCartaOculta(publisher);
}


const crearCartaDerecha = async(id) => {
  const heroe = await getHeroesById(id);
    cartaDerecha.innerHTML += `
        <div class="carta animate__animated animate__flipInY">
        <div class="d-flex justify-content-between align-items-center contenedorNombreCarta">
          <img src="${heroe.biography.publisher == 'DC Comics'? './img/dcLogoCarta.png':'./img/marvelLogoCarta.png'}" alt="logo Carta" srcset="" class="logoCarta">
          <p class="text-center nombreCarta">${heroe.name.toUpperCase()}</p> 
          <img src="${heroe.biography.publisher == 'DC Comics'? './img/dcLogoCarta.png':'./img/marvelLogoCarta.png'}" alt="logo Carta" srcset="" class="logoCarta">
        </div>

        <div>
        <img src="${heroe.image.url}" alt="" srcset="" class="imagen">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>ALTURA (cm):</p><input type="button" value="${heroe.appearance.height}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>PESO (kg):</p><input type="button" value="${heroe.appearance.weight}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>INTELIGENCIA (IQ):</p><input type="button" value="${Math.round(heroe.powerstats.intelligence * 1.6)}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>FUERZA (kg):</p><input type="button" value="${heroe.powerstats.strength}" class="valorPropiedad">
        </div>
        <div class="d-flex justify-content-between propiedad">
        <p>VELOCIDAD (km/h):</p><input type="button" value="${heroe.powerstats.speed}" class="valorPropiedad">
        </div>
        </div>
    `
};

const crearTarjetas = async() => {
  const heroes = await getHeroes();
  heroes.map(heroe =>{
    tarjetas.innerHTML += `
    <div class="card text-bg-dark mt-5 me-4" style="max-width: 360px;">
      <div class="contenedorImagenTarjeta">
        <img src="${heroe.image.url}" class="card-img-top" alt="imagen ${heroe.name}">
      </div>
      <div class="card-body">
        <h5 class="card-title">${heroe.name}</h5>
        <div class="row d-flex">
          <h6 class="text-center">Biography</h6>
          <div class="col-12">
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Full Name</span><span class="biographyValue">${heroe.biography.fullName}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Publisher</span><span class="biographyValue">${heroe.biography.publisher}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Race</span><span class="biographyValue"> ${heroe.appearance.race}</span>
            </div>
          </div>
          <div class="row d-flex px-0">
          <h6 class="text-center">Stats</h6>
          <div class="col-6">
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Intelligence</span><span class="statValue">${Math.round(heroe.powerstats.intelligence * 1.6)}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Strength</span><span class="statValue"> ${heroe.powerstats.strength}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Speed</span><span class="statValue"> ${heroe.powerstats.speed}</span>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Height</span><span class="statValue"> ${heroe.appearance.height}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Weigth</span><span class="statValue"> ${heroe.appearance.weight}</span>
            </div>
            <div class="d-flex justify-content-between renglonTarjeta">
              <span>Alignment</span><span class="statValue"> ${heroe.biography.alignment}</span>
            </div>
          </div>
          
        </div>
        </div>
      <div/>
    </div> 
    `
  })
}

const generarMazo = async(publisher) => {
  const heroesFaction = await getHeroesByPublisher(publisher);
  const mazo = heroesFaction.map(hero => hero.id)
  return _.shuffle(mazo);
};


const init = () => {

  crearHtml();

}

init();

})();

//TODO usar la funcion reduce para mostrar el acumulado 
// usar sort para ordenar los heroes por alguna propiedad
// [...arreglo] operador spread desestructurar
// usar fechas para las estadisticas para practicarla