let params = new URL(document.location).searchParams;
let idPelicula = params.get("id");

let pelicula = getPeliculaById(idPelicula)

if (pelicula != undefined) {
    let imagen = document.querySelector("#imagen-portada");
    imagen.src = pelicula.imagen.url;
    imagen.alt = pelicula.imagen.alt;
    
    document.querySelector("#titulo-pelicula").innerHTML = pelicula.nombre
    let tag = document.querySelector("#tag")
    let portada = document.querySelector("#portada")
    let textoTag = document.querySelector("#texto-tag")
    switch(pelicula.tipo) {
        case 1: 
        portada.classList.toggle('pre-estreno', true);
        portada.classList.toggle('estreno', false); 
        tag.classList.toggle('d-none', false);
        textoTag.textContent = "Pre-estreno"
        break;

        case 0: 
        portada.classList.toggle('pre-estreno', false);
        portada.classList.toggle('estreno', true); 
        tag.classList.toggle('d-none', false);
        textoTag.textContent = "Estreno" 
        break;
        default: 
        portada.classList.toggle('pre-estreno', false);
        portada.classList.toggle('estreno', false); 
        tag.classList.toggle('d-none', true);
    }
}

let seleccionElemento = document.querySelector("#numero-asientos");


document.querySelector("#asientos").innerHTML = Sala();
var seleccionados = 0;

registerAutoAction(".seat-hoverable", item => {
    item.addEventListener('click', () => {
        let maxSeleccionados = Number(seleccionElemento.value);
        

        item.classList.toggle('selected');
        if(item.classList.contains('selected')){
            seleccionados += 1;
        }else {
            seleccionados -= 1;
        }

        if (seleccionados > maxSeleccionados) {
            confirm("No puedes seleccionar más asientos")
            item.classList.toggle('selected', false);
            seleccionados -= 1;
            return;
        }
        
        

        console.log(seleccionados);

    })
})
