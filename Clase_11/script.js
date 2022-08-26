// 1.Leer los datos del input y asignarlos al objeto consulta
// 2. Validar campos completo
let inputNombre = document.querySelector('#nombre');
let inputEmail = document.querySelector('#email');
let textConsulta = document.querySelector('#consulta');
let boton = document.querySelector('button');

let objetoConsulta = {
    nombre: '',
    email: '',
    consulta: ''
};


boton.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log('Envento del boton')

    objetoConsulta.nombre = inputNombre.value;
    objetoConsulta.email = inputEmail.value;
    objetoConsulta.consulta = textConsulta.value;

    console.log(objetoConsulta);
});


