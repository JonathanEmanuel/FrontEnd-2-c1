let peliculas = [
    {
        id: 1,
        nombre: "Capitán América - El primer vengador",
        estreno: 2011,
        director: "Joe Johnston",
        fotoUrl: "img/capitan-america-poster.jpg"
    },
    {
        id: 2,
        nombre: "Capitana Marvel",
        estreno: 2019,
        director: "Anna Boden y Ryan Fleck",
        fotoUrl: "img/capitana-marvel-poster.jpg"
    },
    {
        id: 3,
        nombre: "Iron Man",
        estreno: 2008,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-poster.jpg"
    },
    {
        id: 4,
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-2-poster.jpg"
    },
    {
        id: 5,
        nombre: "El increíble Hulk",
        estreno: 2008,
        director: "Louis Leterrier",
        fotoUrl: "img/el-increible-hulk-poster.jpg"
    },
    {
        id: 6,
        nombre: "Thor",
        estreno: 2011,
        director: "Kenneth Branagh",
        fotoUrl: "img/thor-poster.jpg"
    },
    {
        id: 7,
        nombre: "Los Vengadores",
        estreno: 2012,
        director: "Joss Whedon",
        fotoUrl: "img/vengadores-poster.jpg"
    },
    {
        id: 8,
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        fotoUrl: "img/iron-man-2-poster.jpg"
    },
    {
        id: 9,
        nombre: "Iron Man 3",
        estreno: 2013,
        director: "Shane Black",
        fotoUrl: "img/iron-man-3-poster.jpg"
    },
    {
        id: 10,
        nombre: "Thor - El mundo oscuro",
        estreno: 2013,
        director: "Alan Taylor",
        fotoUrl: "img/thor-el-mundo-oscuro-poster.jpg"
    },
    {
        id: 11,
        nombre: "Capitán América: El Soldado de Invierno",
        estreno: 2014,
        director: "Anthony y Joe Russo",
        fotoUrl: "img/capitan-america-el-soldado-de-invierno.jpg"
    },
    {
        id: 12,
        nombre: "Guardianes de la Galaxia",
        estreno: 2014,
        director: "James Gunn",
        fotoUrl: "img/guardianes-de-la-galaxia-poster.jpg"
    },
    {
        id: 13,
        nombre: "Guardianes de la Galaxia Vol. 2",
        estreno: 2017,
        director: "James Gunn",
        fotoUrl: "img/guardianes-de-la-galaxia-2-poster.png"
    },
    {
        id: 14,
        nombre: "Vengadores - La era de Ultrón",
        estreno: 2015,
        director: "Joss Whedon",
        fotoUrl: "img/vengadores-era-de-ultron-poster.jpg"
    },
    {
        id: 15,
        nombre: "Ant-Man",
        estreno: 2015,
        director: "Peyton Reed",
        fotoUrl: "img/ant-man-poster.jpg"
    },
    {
        id: 16,
        nombre: "Capitán América - Civil War",
        estreno: 2016,
        director: "Joe y Anthony Russo",
        fotoUrl: "img/capitan-america-civil-war-poster.jpg"
    },
    {
        id: 17,
        nombre: "Spider-Man - Homecoming",
        estreno: 2017,
        director: "Jon Watts",
        fotoUrl: "img/spiderman-homecoming-poster.jpg"
    },
    {
        id: 18,
        nombre: "Doctor Extraño",
        estreno: 2016,
        director: "Scott Derrickson",
        fotoUrl: "img/doctor-strange-poster.jpg"
    },
    {
        id: 19,
        nombre: "Viuda negra",
        estreno: 2020,
        director: "Cate Shortland",
        fotoUrl: "img/viuda-negra-poster.png"
    },
    {
        id: 20,
        nombre: "Black Panther",
        estreno: 2018,
        director: "Ryan Coogler",
        fotoUrl: "img/black-panther-poster.jpg"
    },
    {
        id: 21,
        nombre: "Thor - Ragnarok",
        estreno: 2017,
        director: "Taika Waititi",
        fotoUrl: "img/thor-ragnarok-poster.jpg"
    },
]
const contenedor = document.querySelector('#app');

/* -------------------------------- funciones ------------------------------- */
function activar(card){
    card.classList.add('active');
}

function cambiarTema(){
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}

function crearCard(pelicula, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let descripcion = document.createElement('p');
    let director = document.createElement('strong');

    card.setAttribute('class', 'card');
    titulo.innerText = pelicula.nombre;
    imagen.setAttribute('src', pelicula.fotoUrl);
    imagen.setAttribute('alt', pelicula.nombre);
    imagen.setAttribute('title', pelicula.nombre);
    director.innerText = pelicula.director;
    descripcion.innerText = pelicula.estreno + '| ';
    descripcion.appendChild( director);

    /* 
    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(descripcion); 
    */

    card.append(titulo, imagen, descripcion);

    console.log(card, titulo, imagen, descripcion );
    contenedor.appendChild(card);
    /*
    let card = `<div class="card">
                    <h2>${pelicula.nombre}</h2>
                    <img src="${pelicula.fotoUrl}" alt="${pelicula.nombre}">
                    <p> ${pelicula.estreno} | <strong>${pelicula.director}</strong> </p>
                </div>`;
    contenedor.innerHTML += card;
    */
}

/* ----------------------------- Bucle principal ---------------------------- */

for (const pelicula of peliculas) {
    crearCard(pelicula, contenedor);
}