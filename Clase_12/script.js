const formulario = document.querySelector('form');
const boton = document.querySelector('button');
const inputNombre = document.querySelector('#nombre');
const inputPass = document.querySelector('#pass');
const inputTel = document.querySelector('#tel');

const controles = document.querySelectorAll('input');
const hobbies = document.getElementsByName('hobbies');


console.log(formulario, inputNombre, inputPass, inputTel);


boton.removeAttribute('disabled');

const datos = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: '',
    nacionalidad: ''
}

// Evento del Submit
formulario.addEventListener('submit', function(evento){
    let error = false;
    let listaHobbies = [];
    evento.preventDefault();

    // Valido input del tipo texto y password
    controles.forEach(control => {
        if( control.value.trim() == '' ){
            control.classList.add('error');
            control.addEventListener('click', ()=> control.classList.remove('error'));
            error = true;
        }
    });

    // Validaciones hobbie
    hobbies.forEach(hobbie => {
        if(  hobbie.checked == true ){
            listaHobbies.push( hobbie.id );
        }
    });


    console.log(listaHobbies);

    // validacion de radio


    if( !error ){
        datos.nombre = inputNombre.value;
        datos.telefono = inputTel.value;
        datos.contrasenia = inputPass.value;
    }


    console.log(datos);
})



function normalizar(input){
    return input.value.trim();    
}
