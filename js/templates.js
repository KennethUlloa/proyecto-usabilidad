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

function Portada(portada, level = 1) {
    let tipo = (portada.tipo == 0)? "estreno": (portada.tipo == 1)? "pre-estreno": ""
    let a = Tipo(portada.tipo);
    return `<div class="d-flex flex-column portada-${level} ${tipo}">
    <img src="${portada.imagen.url}" class="mb-3" alt="${portada.imagen.alt}"/>
    ${a}
    <h3 class="titulo-portada no-decor txt-blanco">${portada.nombre}</h3>
</div>`.trim()
}

function Pelicula(pelicula) {
    let portada = Portada(pelicula);

    return `
        <a href="schedules.html?id=${pelicula.id}" class="no-decor">
        <div class="d-flex flex-column align-items-center portada-wrap mx-auto " data-child-tab=''
         aria-label='película ${pelicula.nombre}, ${getTextoTipo(pelicula.tipo)} con portada: ${pelicula.imagen.alt}'
        >
            ${portada}
        </div>
        </a>
    `.trim() 
}

function DiaHorario(dia) {
    return `
    <button class="d-flex btn-fondo btn-primario-hover flex-column align-items-center border-0" data-child-tab="">
        <div class="complejo">${dia.toLocaleDateString('es-MX',{weekday:'short'}).toUpperCase()}</div>
        <b class="b3">${dia.getDate()}</b>
    </button>`.trim()
}

const estadosAsientos = ['','selected','taken']

function Asiento(asiento, estado=0) {

    let index = Math.max(0,Math.min(estadosAsientos.length - 1, estado));
    return `
    <button data-svg="img/seat.svg" class="seat seat-hoverable bg-transparent border-0 ${estadosAsientos[estado]} icon-48" data-seat="${asiento}" data-child-tag="" aria-label="asiento ${asiento}"></button>
    `.trim()
}

function Sala() {
    let proto = [1,1,1,1,1,0,0,1,1,1,1,1]
    let startCode = 65;
    let content = ""
    for(var i = 0; i < 10; i++) {
        var num = 0;
        let char = String.fromCharCode(startCode + i);
        content += '<div class="d-flex w-100 position-relative">' + proto.map(i => {
            if(i === 0){
                return '<span class="box-32 opacity-0">a</span>'
            }else {
                num += 1;
                return Asiento(char + num);
            }
        }).join('') + "</div>";
    }

    return content;
}