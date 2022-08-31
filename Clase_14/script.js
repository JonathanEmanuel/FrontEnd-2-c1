/* --------------------------- variables globales --------------------------- */
let span = document.querySelector('#nombre');

let nombre = prompt('Ingrese su nombre');
span.innerText = nombre;

localStorage.setItem('nombre', nombre);
