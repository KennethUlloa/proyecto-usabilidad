function Dias(dia) {
    return `<option class='bg-fondo-2'>${dia.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}</option>`;
}

function Complejo(complejo) {
    return `<option class='bg-fondo-2 txt-blanco-i'>${complejo.nombre}</option>`;
}

function Tipo(tipo) {
    switch(tipo) {
        case 0: return '<p class="tag">Estreno</p>';
        case 1: return '<p class="tag">Pre-venta</p>';
        default: return "";
    }
}

function getTextoTipo(tipo) {
    switch(tipo) {
        case 0: return 'Estreno';
        case 1: return 'Pre-venta';
        default: return "";
    }
}

function Portada(portada) {
    let tipo = (portada.tipo == 0)? "estreno": (portada.tipo == 1)? "pre-estreno": ""
    let a = Tipo(portada.tipo);
    return `<div class="d-flex flex-column portada ${tipo}">
    <img src="${portada.imagen.url}" class="mb-3" alt="${portada.imagen.alt}"/>
    ${a}
</div>`.trim()
}

function Pelicula(pelicula) {
    let portada = Portada(pelicula);

    return `
        <div class="d-flex flex-column align-items-center portada-wrap mx-auto" data-child-tab=''
         aria-label='película ${pelicula.nombre}, ${getTextoTipo(pelicula.tipo)} con portada: ${pelicula.imagen.alt}'
        >
            ${portada}
            <h3 class="titulo-portada">${pelicula.nombre}</h3>
        </div>
    ` 
}