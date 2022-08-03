var nombre1 = "Jona";
let nombre = "Emanuel";
let dni = 123;
var profesor = true;

let lenguajes = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python' ];
//                  0  ,   1  ,      2
const persona = {
    nombre: 'Juan',
    apellido: 'Ruiz',
    saludar: function(){
        console.log('Hola');
        alert('Hola');
    }
}

console.error('Error prueba');

console.info('información');
// Error de nombre de variable
// console.log(lenguaje);

console.table(lenguajes);

console.table(persona);

persona.saludar();

console.log('Fin del programa');

for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i]);
}

lenguajes.forEach(lenguaje => {
    console.log(`Lenguaje ${lenguaje}`);
});