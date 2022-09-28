window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const email = document.querySelector('#inputEmail')
    const password = document.querySelector('#inputPassword')
    const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1';


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // normalizo los campos de entreda
        let emailValor = normalizarEmail( email.value )
        let passwordValor = password.value;

        // Validaciones
        if(  validarEmail(emailValor)  ){
            //creamos el cuerpo de la request
            const payload = {
                email: emailValor,
                password: passwordValor
            };
            //configuramos la request del Fetch
            const settings = {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            //lanzamos la consulta de login a la API
            realizarLogin(settings);

            //limpio los campos del formulario
            form.reset();
           
        } else {
            Swal.fire(
                'Campos invalidos',
                'El formato del Correo electrónico es invalido invalida',
                'info'
            );
        }


       
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        console.log("Lanzando la consulta a la API...");
        fetch(`${url}/users/login`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    
                    Swal.fire(
                        'Credenciales invalidas',
                        'Correo electrónico o Contraseña invalida',
                        'info'
                    );
                    return;
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    //guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página
                    location.replace('./mis-tareas.html');
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };


});