/* --------------------------- variables globales --------------------------- */
let formulario = document.querySelector('form');
let inputPalabra = document.querySelector('#busqueda');
let historial = document.querySelector('#busquedas-realizadas');
let span = document.querySelector('#nombre');
let nombre;
let busquedas = [];


/* ------------------------------- Normalizar ------------------------------- */
function normalizar(input){
    return input.value.trim();
}

/* --------------------------- Renderizar historia -------------------------- */
// Recibir un array luego renderizar los <p> dentro busquedas-realizadas
// busquedas = ['mate', 'cafe', 'reloj']
function renderizarBusquedas(lista){
    historial.innerHTML = '';
    lista.forEach(elemento => {
        historial.innerHTML += `<p>${elemento}</p>`;
    });

}

/* ---------------------- Abrir Buscador con la palabra --------------------- */
function iniciarBusqueda(palabra){
    location.replace(`https://www.google.com/search?q=${palabra}`);
}

/* ------------------------------ GuardarDatos ------------------------------ */
function guardarDatos(lista){
    let jsonString = JSON.stringify(lista);
    localStorage.setItem('historial', jsonString );
}


if( localStorage.getItem('historial')){
    let objeto = JSON.parse( localStorage.getItem('historial') );
    console.log( objeto );
    console.log( typeof( objeto  )  );
    busquedas = objeto;
    renderizarBusquedas(busquedas);
}


if( localStorage.getItem('nombre')  ) {
    nombre = localStorage.getItem('nombre')
} else {
    nombre = prompt('Ingrese su nombre');

}
span.innerText = nombre;
localStorage.setItem('nombre', nombre);



/* -------------------------- Evento del formulario ------------------------- */
// leer el dato del fomulario, validar que tenga al menos un caracter
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let palabra = normalizar( inputPalabra );
    if( palabra != '' ){
        console.log('Buscando...');
        busquedas.push(palabra);
        renderizarBusquedas(busquedas);

        guardarDatos(busquedas);
        iniciarBusqueda(palabra);
    }
})






