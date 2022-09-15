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
  const contenedorTareas =  document.querySelector('.tareas-pendientes');
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

    btnCerrarSesion.addEventListener('click', function () {
      const confirmarSalir = confirm('¿Desea Salir?');

      if( confirmarSalir == true){
        localStorage.clear();
        location.replace('index.html');
      }

    });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';

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
    const url = 'https://ctd-todo-api.herokuapp.com/v1/tasks';

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
        data.forEach(tarea => {
          contenedorTareas.innerHTML += `
          <li class="tarea" data-aos="fade-down">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${tarea.createdAt}</p>
            </div>
          </li>
          `
        });
    })
    

  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

  obtenerNombreUsuario();
  consultarTareas();
});