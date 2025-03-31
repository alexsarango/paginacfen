// Lógica para el hover sobre los cuadros de "Más información"
document.querySelectorAll('.more-info').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "#0056b3";
    });

    item.addEventListener('mouseout', () => {
        item.style.color = "#007bff";
    });
});

// Lógica para el carrusel de imágenes
let imagenes = [
    {
        "url": "assets/carrucel/mitico.jpg",
    },
    {
        "url": "assets/carrucel/fisica_unidos.jpeg",
    },
    {
        "url": "assets/carrucel/experimentos.jpg",
    },
    {
        "url": "assets/carrucel/militar.jpg",
    },
    {
        "url": "assets/carrucel/chimborazo.jpg",
    },
    {
        "url": "assets/carrucel/vanguard.jpg",
    },
    {
        "url": "assets/carrucel/EBDK.jpg",
    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}