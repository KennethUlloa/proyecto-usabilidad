function getSucursales() {
    return [
        {
            nombre: "SCALA"
        },
        {
            nombre: "CCI"
        }
    ]
}

function getListaDias(count = 5) {
    let date = new Date()
    let dias = [];
    
    for(let i = 0; i < count; i++) {
        let currDate = new Date();
        currDate.setDate(date.getDate() + i);
        dias.push(currDate);
        
    }

    return dias
}

function getPeliculas() {
    
    return [
        {
            id: 'flash',
            nombre: "Flash", 
            tiempo:"2h10m" ,
            tipo: 1,
            imagen: {
                url: 'img/the_flash.webp',
                alt: 'hombre con disfraz rojo y amarillo en el centro, hombre con disfraz negro y orejas punteagudas, mujer con traje azul y rojo con una capa'
            },
            sinopsis: "Barry Allen (Flash) usa sus superpoderes para viajar en el tiempo y salvar la vida de su madre, pero sin saberlo altera el futuro y queda atrapado en una realidad en la que el general Zod ha regresado y amenaza con la aniquilación, pero en la que no hay superhéroes."
        },
        {
            id: 'bluebeetle',
            nombre: "Blue Beetle", 
            tiempo:"2h7m" ,
            tipo: 0,
            imagen: {
                url: 'img/blue_beetle.webp',
                alt: 'Hombre con traje negro con detalles azules, mujer en el lado izquierdo'
            },
            sinopsis: "Jaime Reyes se encuentra en posesión de una antigua reliquia de biotecnología alienígena llamada Escarabajo. Cuando el Escarabajo elige a Jaime como huésped simbiótico, le otorga una armadura con poderes extraordinarios e impredecibles."
        },
        {
            id: 'gotg3',
            nombre: "Guardianes de la Galaxia vol.3", 
            tiempo:"2h29m" ,
            tipo: 3,
            imagen: {
                url: 'img/gotg3.jpeg',
                alt: 'De izquierda a derecha: personaje con textura de madera, mujer con aspecto robótico, hombre con piel verde y tatuajes rojos, mujer con piel verde y cabello rojo, mapache parado en dos pies, hombre de cabello corto, mujer con antenas delgadas, hombre con una aleta en la cabeza'
            },
            sinopsis: "Aunque sigue afectado por la pérdida de Gamora, Peter Quill debe reunir a su equipo para defender el universo de una nueva amenaza o, en caso de fracasar, será el final de los Guardianes."
        },
        {
            id: 'shazam2',
            nombre: "Shazam 2: Furia de los dioses", 
            tiempo:"2h10m" ,
            tipo: 3,
            imagen: {
                url: 'img/shazam.jpg',
                alt: 'Hombre con traje rojo y capa blanca en el centro, tres mujeres con armaduras antiguas en la parte trasera del poster, dragón de madera en el fondo'
            },
            sinopsis: "Billy Batson y sus hermanos adoptivos Freddy, Mary, Pedro, Eugene y Darla, también dotados de superpoderes, tienen que enfrentarse a las tres hijas de Atlas: Hespera, Calipso y Anthea."
        },
        {
            id: 'elemental',
            nombre: "Elemental", 
            tiempo:"1h42m" ,
            tipo: 3,
            imagen: {
                url: 'img/elemental.jpeg',
                alt: 'Hombre hecho de agua en el lado izquierdo, mujer hecha de fuego en el lado derecho'
            },
            sinopsis: "En una ciudad en la que los elementos de fuego, agua, tierra y aire viven en distritos separados, una chica de fuego y un chico de agua descubren que, aunque la sociedad les diga lo contrario, tienen muchas cosas en común."
        },
        {
            id: 'ninjaturtles',
            nombre: "Ninja Turtles: Caos mutante", 
            tiempo:"1h39m" ,
            tipo: 3,
            imagen: {
                url: 'img/tmnt.jpeg',
                alt: 'Cuatro tortugas con forma humana en un fondo negro con pose de salto'
            },
            sinopsis: "Después de años de estar protegidos del mundo humano, estos hermanos se propusieron ganarse los corazones de los neoyorquinos y ser aceptados como adolescentes normales realizando actos heroicos. Su nueva amiga April O'Neil les ayudará a enfrentarse a un misterioso sindicato del crimen, pero pronto intentarán desequilibrarlos destando un ejército de mutantes sobre ellos."
        }

    ]
}

function getBanners() {
    return [
        '/imgs/bb_banner.jpg',
        '/imgs/gotg-banner.jpg',
        '/imgs/multicines-promociones.jpg',
        '/imgs/shazam_banner.png'
    ]
}

function getPeliculaById(id_pelicula) {
    let found = getPeliculas().find(pelicula => pelicula.id == id_pelicula)
    if (found === undefined) {
        found = {
            nombre: "Dummy", 
            tiempo:"2h10m" ,
            tipo: 5,
            imagen: {
                url: '/',
                alt: 'Nada'
            },
            sinopsis: "Nada"
        }
    }

    return found;
}

const api = {
    getListaDias: getListaDias,
    getSucursales: getSucursales,
    getPeliculas: getPeliculas,
    getBanners: getBanners
}
