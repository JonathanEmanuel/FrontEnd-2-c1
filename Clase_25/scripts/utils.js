/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    return (texto == '') ? false : true;

}

function normalizarTexto(texto) {
    return texto.trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( email == ''){
        return false;
    }

    if (!regex.test(email)) {
        return false;
    }

    return true;
}

function normalizarEmail(email) {
    return email.trim();
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return (contrasenia_1 === contrasenia_2) ? true : false;
}

