/*
REQUERIMIENTOS PARA LA APP

- utilizar el formulario para captar el texto ingresado --Ok

- implementar el evento "submit", utilizarlo para guardar el comentario en un array --Ok

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico) --Ok

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

/* --------------------------- variables Globales --------------------------- */
const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const areaComentarios = document.querySelector('.comentarios');
let datosStorage = JSON.parse( localStorage.getItem('comentarios-app')) ;
let comentarios = []

if( datosStorage ){  
    comentarios = datosStorage;
}

renderizarComentarios(comentarios);


function normalizar(input){
    return input.value.trim();
}


/* --------------------- Captar el evento del fomulario --------------------- */
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let comentario = normalizar(inputComentario);
    if( comentario  == '' ){
        console.log('Error, completar el campo')
    } else {
        console.log('Capturando datos');

        //comentarios.push(comentario);
        comentarios.unshift(comentario);
        inputComentario.value = '';

        renderizarComentarios(comentarios);
        guardarComentarios(comentarios);
    }
    console.log(comentarios);
})

/* ------------------------- Renderizar comentarios ------------------------- */
function renderizarComentarios(lista){  // ['n','otro']
    areaComentarios.innerHTML = '';
    lista.forEach(comentario => {
        areaComentarios.innerHTML += `<p> ${comentario} </p>`;
    
    });

}

/* --------------------------- Guardar localStorage comentarios -------------------------- */
function guardarComentarios(lista){
    let datosGuardar = JSON.stringify(lista);
    localStorage.setItem('comentarios-app', datosGuardar);
}

/* ---------------------------- Leer del localStorage comentarios ---------------------------- */
function leerComentarios(){
    comentarios =  JSON.parse( localStorage.getItem('comentarios-app'));
}

//leerComentarios();
//renderizarComentarios(comentarios);