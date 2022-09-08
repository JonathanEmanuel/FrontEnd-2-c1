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
    document.querySelector('#loading').classList.add('oculto');
}

function mostrarLoading(){
    document.querySelector('#loading').classList.remove('oculto');
}

btn.addEventListener('click', function(){
    mostrarLoading();
    console.log('Iniciando...')
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
    })
    .finally( function(){
        console.log('Finalizando...')
        ocultarLoading();
    })
})
