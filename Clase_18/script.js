const formulario = document.querySelector('form');
const postText = document.querySelector('#titulo');
const contador = document.querySelector('#caracteres');
const posteos = document.querySelector('#titulo-publicado');

postText.addEventListener('keyup', function(e){
    let caracteres = postText.value.length;
    contador.innerHTML = caracteres
})

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Accion del form');

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const datosEnviar = {
        id_usuario: 1,
        titulo: postText.value
    }
    
    const config = {
        method: 'POST',
        body: JSON.stringify(datosEnviar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }


    fetch(url,config ).then( (response) => response.json() )
    .then(  function(dataJSON) {
        console.log(dataJSON);
        console.log('Dato guardado');
        posteos.innerHTML = `Post guardad con el id ${dataJSON.id} y el titulo ${dataJSON.titulo}`
    })
    .catch(  function(response){
        console.error(response);
    } )

})

