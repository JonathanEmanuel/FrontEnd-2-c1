function delay(valor) {
    let cantidad = 999999999 / valor;
    let variable = 0;
    for (let i = 0; i < cantidad; i++) {
        variable++;
        let result = i * 3 + i / 5 * 2;
    }
}

function getPromociones(){
    const promos = [
        {
            titulo: 'Descuento en Juguetes del 20%'
        },
        {
            titulo: 'Descuento en Electrodomesticos del 15%'
        }
    ];
    delay(1);
    return promos;
}

function getTarjetas(){
    return [];
}

function getDatos(){
    const datos = {
        usuario: 'John Do',
        saldo: 1000,
        activo: true
    };

    delay(4);
    return datos;

}