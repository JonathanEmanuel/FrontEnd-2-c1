// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = localStorage.getItem('jwt');

if(!jwt){
    // usamos el replace para no guardar en el historial la url anterior
    location.replace('index.html');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nombreUsuario = document.querySelector('.user-info p');
  const contenedorTareasPendientes =  document.querySelector('.tareas-pendientes');
  const contenedorTareasTerminadas = document.querySelector('.tareas-terminadas');
  const contadorFinalizadas = this.document.querySelector('#cantidad-finalizadas');
  const inputNuevaTarea = this.document.querySelector('#nuevaTarea');

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

    btnCerrarSesion.addEventListener('click', function () {
    
      Swal.fire({
          title: '¿Desea cerrar la sesión?',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar'
      }).then((resultado) => {
          // si el atributo de isConfirmed es true, es que el usuario acepto
          console.log(resultado);
          if( resultado.isConfirmed == true ){
            localStorage.clear();
            location.replace('index.html');
          }
      })

    });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
    const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe';

    const configuraciones = {
        method: 'GET',
        headers: {
          authorization: jwt
        }
    }

    fetch(url, configuraciones)
    .then( respuesta => respuesta.json())
    .then( data => {
        console.log('RESPUESTA DEL SERVIDOR');
        console.log(data)
        nombreUsuario.textContent = data.email;
    })
  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
    const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks';

    const configuraciones = {
        method: 'GET',
        headers: {
          authorization: jwt
        }
    }

    fetch(url, configuraciones)
    .then( respuesta => respuesta.json())
    .then( data => {
        console.log('RESPUESTA DEL SERVIDOR');
        //data[1].completed = true;
        console.log(data)
        renderizarTareas(data);
    });
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */
  formCrearTarea.addEventListener('submit', function (event) {

    event.preventDefault();
    // preparamos el objeto a enviar al servidor
    const nueva = {
      description: inputNuevaTarea.value,
      completed: false
    }

    // armamos la carta(peticion) como la pide el servidor (ver documentacion)
    const configuraciones = {
      method:'POST',
      headers: {
        authorization: jwt,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nueva)
    }

    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks', configuraciones)
    .then( respuesta => respuesta.json())
    .then( info => {
        // POR HACER: Varificar que la tarea se creo correctamente
        console.log("Tarea recien posteada");
        console.log(info);
        Swal.fire(
          'Tarea creada correctamente',
          '',
          'success'
        )

      // necesitamos recargar nuestra interfaz
      consultarTareas();
    })
    .catch( error => console.log(error))
  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {

    contenedorTareasPendientes.innerHTML = '';
    contenedorTareasTerminadas.innerHTML = '';
    let contador = 0;
    listado.forEach(tarea => {
      if(tarea.completed){
        contador++;
        contenedorTareasTerminadas.innerHTML += `
            <li class="tarea" data-aos="fade-up">
              <div class="hecha">
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <div class="descripcion">
                <p class="nombre">${tarea.description}</p>
                <div class="cambios-estados">
                  <button class="change completa" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                  <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
                </div>
              </div>
            </li>`;

      } else {
        contenedorTareasPendientes.innerHTML += `
          <li class="tarea" data-aos="fade-down">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${ new Date(tarea.createdAt).toLocaleDateString()}</p>
            </div>
          </li>`;
      }
    });

    contadorFinalizadas.textContent = contador;

    const botonesChange = document.querySelectorAll('.change');
    const botonesDelete = document.querySelectorAll('.borrar');


    botonesChange.forEach(boton => {
      boton.addEventListener('click', function(event) {
        //console.log(event.target);
        botonCambioEstado(event.target)
      })
    });

    botonesDelete.forEach(boton => {
      boton.addEventListener('click', function(event) {
        //console.log(event.target);
        botonBorrarTarea(event.target)
      })
    });

  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonCambioEstado(elemento) {
    console.log(elemento);
    console.log(elemento.id);
    console.log(elemento.classList.contains('completa'))
    

    let tarea = {
      completed: !elemento.classList.contains('completa') ? true : false
    }

    const url = `https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${elemento.id} `;
    const config = {
      method: 'PUT',
      headers: {
        authorization: jwt,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tarea)
    }
    console.log(url, config);
    fetch(url, config).then(  response => response.json() )
    .then( data => {
      console.log(data);
      // Vuelve a recargar las tareas
      consultarTareas();
    });

  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea(elemento) {
    console.log('Eliminar tarea', elemento.id);
    const id = elemento.id;
    const url = `https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`;

    const config = {
      method: "DELETE",
      headers: {
        Authorization: jwt,
      },
    };
    fetch(url, config).then((response) => {
      console.log("Borrando tarea...");
      console.log(response.status);
      //vuelvo a consultar las tareas actualizadas
      consultarTareas();
    });

  };

  obtenerNombreUsuario();
  consultarTareas();
});