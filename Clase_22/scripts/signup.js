// evaluar si hay un token para mandarlo directo a sus tareas
const jwt = localStorage.getItem('jwt');

if (jwt) {
    // usamos el replace para no guardar en el historial la url anterior
    location.replace('mis-tareas.html');
}


window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const form = document.querySelector('form');
   const inputNombre = document.querySelector('#inputNombre');
   const inputApellido = document.querySelector('#inputApellido');
   const inputEmail = document.querySelector('#inputEmail');
   const inputPassword = document.querySelector('#inputPassword');
   const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if( inputPassword.value === inputPasswordRepetida.value){
        
        const usuario = {
            "firstName": inputNombre.value,
            "lastName": inputApellido.value,
            "email": inputEmail.value,
            "password": inputPassword.value
        }

        realizarRegister(usuario);


      } else {
        alert('Las contaseñas no coinciden');
      }


    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(usuario) {
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users';

        const configuraciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        fetch(url, configuraciones)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log('RESPUESTA DEL SERVIDOR');
            console.log(data)
            
            // si es correcto el usuarios nos llega un token
            // entoces lo guardamos en el deposito para ir a la siguiente pantalla
            if(data.jwt){
                // guardamos ese token que nos llega
                localStorage.setItem('jwt', data.jwt);
                location.replace('mis-tareas.html');
            }
        })
    };


});