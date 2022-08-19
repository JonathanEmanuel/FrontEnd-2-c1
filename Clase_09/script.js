let peliculas = [
    {
        id: 1,
        like:false,
        nombre: "Capitán América - El primer vengador",
        estreno: 2011,
        director: "Joe Johnston",
        fotoUrl: "img/capitan-america-poster.jpg"
    },
    {
        id: 2,
        like:false,
        nombre: "Capitana Marvel",
        estreno: 2019,
        director: "Anna Boden y Ryan Fleck",
        fotoUrl: "img/capitana-marvel-poster.jpg"
    },
    {
        id: 3,
        like:true,
        nombre: "Iron Man",
        estreno: 2008,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-poster.jpg"
    },
    {
        id: 4,
        like:false,
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-2-poster.jpg"
    },
    {
        id: 5,
        like:false,
        nombre: "El increíble Hulk",
        estreno: 2008,
        director: "Louis Leterrier",
        fotoUrl: "img/el-increible-hulk-poster.jpg"
    },
    {
        id: 6,
        like:false,
        nombre: "Thor",
        estreno: 2011,
        director: "Kenneth Branagh",
        fotoUrl: "img/thor-poster.jpg"
    },
    {
        id: 7,
        like:true,
        nombre: "Los Vengadores",
        estreno: 2012,
        director: "Joss Whedon",
        fotoUrl: "img/vengadores-poster.jpg"
    },
    {
        id: 8,
        like:false,
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-2-poster.jpg"
    },
    {
        id: 9,
        like:false,
        nombre: "Iron Man 3",
        estreno: 2013,
        director: "Shane Black",
        fotoUrl: "img/iron-man-3-poster.jpg"
    },
    {
        id: 10,
        like:false,
        nombre: "Thor - El mundo oscuro",
        estreno: 2013,
        director: "Alan Taylor",
        fotoUrl: "img/thor-el-mundo-oscuro-poster.jpg"
    },
    {
        id: 11,
        like:false,
        nombre: "Capitán América: El Soldado de Invierno",
        estreno: 2014,
        director: "Anthony y Joe Russo",
        fotoUrl: "img/capitan-america-el-soldado-de-invierno.jpg"
    },
    {
        id: 12,
        like:false,
        nombre: "Guardianes de la Galaxia",
        estreno: 2014,
        director: "James Gunn",
        fotoUrl: "img/guardianes-de-la-galaxia-poster.jpg"
    },
    {
        id: 13,
        like:false,
        nombre: "Guardianes de la Galaxia Vol. 2",
        estreno: 2017,
        director: "James Gunn",
        fotoUrl: "img/guardianes-de-la-galaxia-2-poster.png"
    },
    {
        id: 14,
        like:false,
        nombre: "Vengadores - La era de Ultrón",
        estreno: 2015,
        director: "Joss Whedon",
        fotoUrl: "img/vengadores-era-de-ultron-poster.jpg"
    },
    {
        id: 15,
        like:false,
        nombre: "Ant-Man",
        estreno: 2015,
        director: "Peyton Reed",
        fotoUrl: "img/ant-man-poster.jpg"
    },
    {
        id: 16,
        like:false,
        nombre: "Capitán América - Civil War",
        estreno: 2016,
        director: "Joe y Anthony Russo",
        fotoUrl: "img/capitan-america-civil-war-poster.jpg"
    },
    {
        id: 17,
        like:false,
        nombre: "Spider-Man - Homecoming",
        estreno: 2017,
        director: "Jon Watts",
        fotoUrl: "img/spiderman-homecoming-poster.jpg"
    },
    {
        id: 18,
        like:false,
        nombre: "Doctor Extraño",
        estreno: 2016,
        director: "Scott Derrickson",
        fotoUrl: "img/doctor-strange-poster.jpg"
    },
    {
        id: 19,
        like:false,
        nombre: "Viuda negra",
        estreno: 2020,
        director: "Cate Shortland",
        fotoUrl: "img/viuda-negra-poster.png"
    },
    {
        id: 20,
        like:false,
        nombre: "Black Panther",
        estreno: 2018,
        director: "Ryan Coogler",
        fotoUrl: "img/black-panther-poster.jpg"
    },
    {
        id: 21,
        like:false,
        nombre: "Thor - Ragnarok",
        estreno: 2017,
        director: "Taika Waititi",
        fotoUrl: "img/thor-ragnarok-poster.jpg"
    },
]

const contenedor = document.querySelector('#app');
const loading = document.createElement('img');
loading.setAttribute('src', 'img/loading.gif');

/* -------------------------------- funciones ------------------------------- */
function cambiarTema(){
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}

function crearCard(pelicula){

    let card = `<div class="card">
                    <div onclick="favoritos(${pelicula.id})" class="row">
                        <h3>Favoritos</h3>
                        <i class="fa-solid fa-lg fa-heart ${ pelicula.like ? 'like' : '' }"></i>
                    </div>
                    <h2>${pelicula.nombre}</h2>
                    <img src="${pelicula.fotoUrl}" alt="${pelicula.nombre}">
                    <p> ${pelicula.estreno} | <strong>${pelicula.director}</strong> </p>
                </div>`;
    contenedor.innerHTML += card;
}

// Bucle Principal 
function renderizarPeliculas(){
    contenedor.innerHTML = '';
    peliculas.forEach(pelicula => {
        crearCard(pelicula)
    });

    /*
    let rows = document.querySelectorAll('.row');
    //console.log(rows);


    rows.forEach((row, index) => {
        row.addEventListener('click', () => { 
            favoritos(index)
        } )
    });
    */

}


// Cambiar atributo like
function favoritos(id){
    console.log('❤' , id);
    // peliculas[id].like = true;

    let p = peliculas.find( elemet => elemet.id === id  );
    //console.log(p);
    p.like = !p.like;

    renderizarPeliculas();
}

contenedor.appendChild(loading)


setTimeout(renderizarPeliculas, 1000)



cambiarTema()