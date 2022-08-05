/*
    1. Piedra
    2. Papel
    3. Tijera

    1. Solicitar opcion del usuario - ok
    2. Generar la opción random - Ok
    3. Elegir ganador 
    4. Mostar el ganador

*/
const opciones = ['Piedra', 'Papel', 'Tijera'];
let ptosUsuario = 0;
let ptosMaquina = 0;


/* --------------------- 1. Solicitar opcion del usuario -------------------- */
const jugarUsuario = () => {
    let opcion;
    do {
        opcion =parseInt(prompt('Bienvenido \n Seleccione :\n 0: Piedra \n 1:Papel \n 2:Tijera'));

    } while( opcion > opciones.length -1)

    return opcion;
} 
 
const jugarMaquina = () => {
    const opcion = Math.round( Math.random() * 2 );
    return opcion;
}

const elegirGanador = (opcionUsuario, opcionMaquina) => {
    // 0 Piedra, 1 Papel , 2 Tijera
    if( opcionUsuario == opcionMaquina  ){
        return 'Empate';
     // Usuario Pierde  (0)
    } else if (  (opcionUsuario == 0  && opcionMaquina == 1) || (opcionUsuario == 1 && opcionMaquina == 2) || ( opcionUsuario == 2 && opcionMaquina == 0)  ) {
        ptosMaquina++;
        return 'Perdio';
    } else {
        ptosUsuario++
        return 'Gano';
    }
}


/* ----------------------------- Bucle Principal ---------------------------- */

// Gana el que tenga dos puntos
while (ptosMaquina < 2 || ptosUsuario < 2) {
    const usuario = jugarUsuario();
    const maquina = jugarMaquina();

    const resultado = elegirGanador(usuario, maquina);

    console.log( resultado);
    console.log(usuario, maquina)
    console.log('Ptos Usuario ' + ptosUsuario);
    console.log('Ptos Maquina ' + ptosMaquina);
}
