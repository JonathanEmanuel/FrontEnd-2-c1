/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');


// Si exite el toke vamos a redirigir a tareas.html
const jwt = localStorage.getItem('jwt');
if ( jwt) {
    location.replace('tareas.html');
}


/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Preparando Datos');
    const usuario = {
        email: inputEmail.value,
        password: inputPassword.value
    }

    console.log(usuario);
    realizarLogin(usuario);

});


/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 2: Realizar el login [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarLogin(usuario) {
    const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

    const config = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json',
        },
    }

    fetch(url,config ).
    then( (response) => response.json() )
    .then(  function(dataJSON) {
        console.log(dataJSON);
        if( dataJSON.jwt){
            localStorage.setItem('jwt', dataJSON.jwt );
            location.replace('tareas.html');
        }
    })
    .catch(  function(response){
        console.error(response);
    });
        
};
