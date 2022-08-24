const texto_1 = document.querySelector('#texto-1');
const texto_2 = document.querySelector('#texto-2');
const contenedor =  document.querySelector('body');


contenedor.addEventListener('keydown', function(evento){
    
    console.log('evento keydown ', evento.key)
    texto_1.textContent = `Evento del teclado con keydown ${evento.key}`;
})

contenedor.addEventListener('keypress', function(evento){
    
    console.log('evento keypress ', evento.key);
    texto_2.textContent = evento.key;
})


/*
window.addEventListener('keydown', function(evento){
    evento.preventDefault();
    console.log('evento keydown ', evento.key)
    texto_1.textContent = `Evento del teclado con keydown ${evento.key}`;
})

window.addEventListener('keypress', function(evento){
    evento.preventDefault();
    console.log('evento keypress ', evento.key);
    texto_2.textContent = evento.key;
})
*/