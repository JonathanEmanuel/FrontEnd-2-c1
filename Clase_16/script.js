/* --------------------------- variables Globales --------------------------- */
const componenteDatos = document.querySelector('#datos');
const componenteTajetas = document.querySelector('#tarjetas');
const componentePromociones = document.querySelector('#promociones');
const btnIngresar = document.querySelector('button');



function renderizarPromociones(lista){
    componentePromociones.innerHTML = '';

    lista.forEach(element => {
        componentePromociones.innerHTML += `<h4>${element.titulo} </h4>`
    });
}

function renderizarDatos(cuenta){
    componenteDatos.innerHTML = '';
    componenteDatos.innerHTML += `<h2>Usuario ${cuenta.usuario}</h2>`
    componenteDatos.innerHTML += `<h2>Saldo ${cuenta.saldo}</h2>`
    componenteDatos.innerHTML += `<h2>Estado ${ ( cuenta.activo == true ? 'Activa' : 'Inactiva')}</h2>`
}


btnIngresar.addEventListener('click', function(){

    //renderizarDatos(getDatos());

    // renderizarPromociones(getPromociones());

    // Promesa con demora de 5''
    getDatosPromesa.then(  (response) => {
        console.log(response);
        renderizarDatos(response);
    } )

    // Promesa con demora de 3''
    getPromocionesPromesa.then(  (respuesta) =>{ // Se resolvio
        console.log(respuesta);
        renderizarPromociones(respuesta);
    }).catch( (response) =>{
        console.error('fallo')
    });





})


/* 
getTransferencia.then(  (responseResolve) => {
    console.log('Correcto ' + responseResolve);

}).catch( (responseReject) => {
    console.error('Fallo en ' + responseReject );

}) */