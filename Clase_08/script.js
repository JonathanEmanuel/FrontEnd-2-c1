// Selecciono los elementos
let btnMas = document.querySelector('#btnContar');
let btnMenos = document.querySelector('#btnDescontar');

let text = document.querySelector('#textoContador');
let contador = 0;


// Agregro los Listen
btnMas.addEventListener('click', contar);
btnMenos.addEventListener('click', function(){
    if( contador > 0){
        contador--;
        text.textContent = contador;
    }
})

// Funciones
function contar(){
    contador++;
    console.log(contador);
    text.textContent = contador;
}

