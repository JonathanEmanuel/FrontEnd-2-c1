console.log('Inicio del Script');
// alert('Bienvenido');


// console.log( confirm('Continuar?') ) ;

//let nombre = prompt('Ingrese su Nombre');

//console.log( 'Hola ' + nombre);

console.log('Fin del Script');


//let numero = parseFloat( prompt('Ingrese un número') );
//console.log(numero, typeof(numero) );


const gato = {
    nombre: 'Mei',
    color: 'Gris',
    edad: 2
}

const peliculas = [
    {
        nombre: 'Capitán América',
        estreno: 2011,
        director: 'Fulano'
    },
    {
        nombre: 'Capitana Marvel',
        estreno: 2019,
        director: 'Mengano'
    },
    {
        nombre: 'Iron man',
        estreno: 2008,
        director: 'Fulano'
    },
]


// Para recorre propiedad de un objeto literal
for (const key in gato) {
    //console.log(key)
}

// Pare recorre un Array, String
for (const pelicula of peliculas) {
    //console.table(pelicula)
}

const min = 0;
const max = peliculas.length;

let numero = Math.random() * (max - min) + min ;

console.log(numero)

console.log(  Math.floor( numero )    );

while(  confirm('¿Jugar?') == true ){
    // Math floor Redondea para abajo
    let numeroRadom = Math.random() * (max - min) + min;
    let posRandom = Math.floor( numeroRadom );
    console.log(posRandom)
    
    console.log(  peliculas[posRandom]  );

    let respuesta = prompt('Cuando se estreño la pelicula ' + peliculas[posRandom].nombre );

    if(  respuesta == peliculas[posRandom].estreno){
        alert('Correcto!');
    }else {
        alert('Error');
    }
}






