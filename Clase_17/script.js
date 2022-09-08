const btn = document.querySelector('#btn-get');
const tarjetas = document.querySelector('.tarjetas');
let ruta = 'https://restcountries.com/v3.1/all';

function renderizarCards(lista){
    lista.forEach(pais => {
        tarjetas.innerHTML += `<div class="card">
                                    <h4>${pais.name.official}</h4>
                                    <img src="${pais.flags.png}" alt="${pais.name.official}" />
                                </div>`;
    });
}

function ocultarLoading(){
    
}

btn.addEventListener('click', function(){

    fetch(ruta).then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();

    }).then( (data) =>{
        console.log(data);
        renderizarCards(data);


    }).catch( (response) => {
        console.log('Respuesta');
        console.error(response);
        tarjetas.innerHTML = '<h2>En este momento no podemos acceder al servicio </h2>';
    }).finally()
})

