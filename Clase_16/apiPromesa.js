let getPromocionesPromesa = new Promise(  (resuelve, falle) => {  // resolve, reject
    setTimeout(  function(){
        const promos = [
            {
                titulo: 'Descuento en Juguetes del 20%'
            },
            {
                titulo: 'Descuento en Electrodomesticos del 15%'
            }
        ];

        resuelve( promos);
    }, 3000  );

    //setTimeout( ()=> {} , 3000)
})


const getDatosPromesa =  new Promise(  (resolve, reject) => {

    setTimeout( ()=>{
        const datos = {
            usuario: 'John Do',
            saldo: 1000,
            activo: true
        };

        resolve(datos);
    }, 5000);

})


const getTransferencia = new Promise(  (resolve, reject) =>{
    let datos = {
        saldo: 1000,
        activo: true
    }

    if(  datos.saldo < 1 ){
        reject('Fallo, sin saldo');
    } else if(  datos.activo == false ){
        reject('Cuenta inactiva');
    } else {
        resolve('Correcto');
    }

});
