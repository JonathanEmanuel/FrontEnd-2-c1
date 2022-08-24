
window.addEventListener('keydown', function(evento){
    evento.preventDefault();
    console.log('evento keydown ', evento.key)
})

window.addEventListener('keypress', function(evento){
    window.addEventListener('keydown', function(evento){
        console.log('evento keydown ', evento.key)
    })
    console.log('evento keypress ', evento.key)
})