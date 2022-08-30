const formulario = document.querySelector('form');
const boton = document.querySelector('button');
const inputNombre = document.querySelector('#nombre');
const inputPass = document.querySelector('#pass');
const inputTel = document.querySelector('#tel');

const hobbies = document.getElementsByName('hobbies');
const nacionalidades = document.querySelectorAll('input[name="nacionalidad"]');

const listaErrores = document.querySelector('#lista-errores');


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
    let errores = [];
    let listaHobbies = [];
    evento.preventDefault();


    if(normalizar(inputNombre) === ''){
        inputNombre.classList.add('error');
        errores.push(`Por favor, complete el campo Nombre`);
        inputNombre.addEventListener('focus', ()=> {
            inputNombre.classList.remove('error')
            listaErrores.innerHTML = '';
        });
    }

    if( normalizar(inputPass) === ''){
        inputPass.classList.add('error');
        errores.push(`Por favor, complete el campo Contrasela`);
        inputPass.addEventListener('focus', ()=> {
            inputPass.classList.remove('error');
            listaErrores.innerHTML = '';
        });
    }

    if( normalizar( inputTel) === ''){
        inputTel.classList.add('error');
        errores.push(`Por favor, complete el campo Telefono`);
        inputTel.addEventListener('focus', ()=> {
            inputTel.classList.remove('error')
            listaErrores.innerHTML = '';
        });
    }


    // Validaciones hobbie
    hobbies.forEach(hobbie => {
        if(  hobbie.checked == true ){
            listaHobbies.push( hobbie.id );
        }
    });
    if( listaHobbies.length > 4 ){
        errores.push('No es posible seleccionar más de cuatro hoobies');
    }

    // validacion de nacionalidad
    nacionalidades.forEach(item => {
        if( item.checked){
            datos.nacionalidad = item.id;
        }
    });


    if( errores.length === 0 ){
        datos.nombre = inputNombre.value;
        datos.telefono = inputTel.value;
        datos.contrasenia = inputPass.value;
        datos.hobbies = listaHobbies;

        console.log('Datos Correctos!');
        console.log(datos);

    } else {
        errores.forEach(error => listaErrores.innerHTML += `<li>${error}</li>`);
    }


})



function normalizar(input){
    return input.value.trim();    
}
