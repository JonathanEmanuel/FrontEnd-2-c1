let peliculas = [
    {
        nombre: "Capitán América - El primer vengador",
        estreno: 2011,
        director: "Joe Johnston",
        poster: "img/capitan-america-poster.jpg"
    },
    {
        nombre: "Capitana Marvel",
        estreno: 2019,
        director: "(Anna Boden y Ryan Fleck",
        poster: "img/capitana-marvel-poster.jpg"
    },
    {
        nombre: "Iron Man",
        estreno: 2008,
        director: "Jon Favreau",
        poster: "img/iron-man-poster.jpg"
    },
    {
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        poster: "img/iron-man-2-poster.jpg"
    },
    {
        nombre: "El increíble Hulk",
        estreno: 2008,
        director: "Louis Leterrier",
        poster: "img/el-increible-hulk-poster.jpg"
    },
    {
        nombre: "Thor",
        estreno: 2011,
        director: "Kenneth Branagh",
        poster: "img/thor-poster.jpg"
    },
    {
        nombre: "Los Vengadores",
        estreno: 2012,
        director: "Joss Whedon",
        poster: "img/vengadores-poster.jpg"
    },
    {
        nombre: "Iron Man 2",
        estreno: 2010,
        director: "Jon Favreau",
        poster: "img/iron-man-2-poster.jpg"
    },
    {
        nombre: "Iron Man 3",
        estreno: 2013,
        director: "Shane Black",
        poster: "img/iron-man-3-poster.jpg"
    },
    {
        nombre: "Thor - El mundo oscuro",
        estreno: 2013,
        director: "Alan Taylor",
        poster: "img/thor-el-mundo-oscuro-poster.jpg"
    },
    {
        nombre: "Capitán América: El Soldado de Invierno",
        estreno: 2014,
        director: "Anthony y Joe Russo",
        poster: "img/capitan-america-el-soldado-de-invierno.jpg"
    },
    {
        nombre: "Guardianes de la Galaxia",
        estreno: 2014,
        director: "James Gunn",
        poster: "img/guardianes-de-la-galaxia-poster.jpg"
    },
    {
        nombre: "Guardianes de la Galaxia Vol. 2",
        estreno: 2017,
        director: "James Gunn",
        poster: "img/guardianes-de-la-galaxia-2-poster.png"
    },
    {
        nombre: "Vengadores - La era de Ultrón",
        estreno: 2015,
        director: "Joss Whedon",
        poster: "img/vengadores-era-de-ultron-poster.jpg"
    },
    {
        nombre: "Ant-Man",
        estreno: 2015,
        director: "Peyton Reed",
        poster: "img/ant-man-poster.jpg"
    },
    {
        nombre: "Capitán América - Civil War",
        estreno: 2016,
        director: "Joe y Anthony Russo",
        poster: "img/capitan-america-civil-war-poster.jpg"
    },
    {
        nombre: "Spider-Man - Homecoming",
        estreno: 2017,
        director: "Jon Watts",
        poster: "img/spiderman-homecoming-poster.jpg"
    },
    {
        nombre: "Doctor Extraño",
        estreno: 2016,
        director: "Scott Derrickson",
        poster: "img/doctor-strange-poster.jpg"
    },
    {
        nombre: "Viuda negra",
        estreno: 2020,
        director: "Cate Shortland",
        poster: "img/viuda-negra-poster.png"
    },
    {
        nombre: "Black Panther",
        estreno: 2018,
        director: "Ryan Coogler",
        poster: "img/black-panther-poster.jpg"
    },
    {
        nombre: "Thor - Ragnarok",
        estreno: 2017,
        director: "Taika Waititi",
        poster: "img/thor-ragnarok-poster.jpg"
    },
]
const contenedor = document.querySelector('main');

function crearCard(pelicula, contenedor){
    let card = `<div class="card">
                    <h2>${pelicula.nombre}</h2>
                    <img src="${pelicula.poster}" alt="${pelicula.nombre}">
                    <p> ${pelicula.estreno} | <strong>${pelicula.director}</strong> </p>

                </div>`;

    contenedor.innerHTML += card;
}

function activar(card){
    card.classList.add('active');
}

function cambiarTema(){
    let body = document.querySelector('body');
    body.classList.toggle('dark');
}

for (const pelicula of peliculas) {
    crearCard(pelicula, contenedor);
}