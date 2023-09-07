let params = new URL(document.location).searchParams;
let idPelicula = params.get("id");
let pelicula = getPeliculaById(idPelicula);
if (pelicula != undefined) {
    let imagen = document.querySelector("#imagen-portada");
    imagen.src = pelicula.imagen.url;
    imagen.alt = pelicula.imagen.alt;
    document.querySelector("#descripcion").innerHTML = pelicula.sinopsis
    let titulo = document.querySelector("#titulo-pelicula")
    titulo.innerHTML = pelicula.nombre
    titulo.ariaLabel = pelicula.nombre

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
let panelDias = document.querySelector("#panel-dias")
if(panelDias != undefined) {
  panelDias.innerHTML = getListaDias(6).map(dia => DiaHorario(dia)).join('');
}