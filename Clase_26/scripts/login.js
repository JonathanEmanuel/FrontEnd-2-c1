// evaluar si hay un token para mandarlo directo a sus tareas
const jwt = localStorage.getItem('jwt');

if (jwt) {
    // usamos el replace para no guardar en el historial la url anterior
    location.replace('mis-tareas.html');
}


window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        console.log("se hizo submit");

        if( inputEmail.value == ''  ){
            Swal.fire(
                'To Do',
                'Por favor, complete el Email',
                'info'
            );
            return;
        }


        if( inputPassword.value == ''  ){
            Swal.fire(
                'To Do',
                'Por favor, complete la contraseña',
                'info'
            );
            return;
        }

        const usuario = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        // llamamos a a funcion para loggearnos
        realizarLogin(usuario)

    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(user) {
        const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login';

        const configuraciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
            } else {
                Swal.fire(
                    'Credenciales invalidas',
                    'Correo electrónico o Contraseña invalida',
                    'info'
                );
            }
        })





    };


});