let urlImagenes = [];
const imagenes = document.querySelectorAll('img');
const cantidad = imagenes.length;

for (let i = 0; i < cantidad; i++) {
    let url = prompt(`Ingrese la imagen ${i+1}`);
    urlImagenes.push(url);
}

// Recorrer un nodeList con for
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute('src', urlImagenes[i]);
}

// Recorrer un nodeList con forEach
/*
imagenes.forEach( (item, i) => {
    item.setAttribute( 'src', urlImagenes[i] );
});
*/