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

function getListaDias() {
    let date = new Date()
    let dias = [];
    
    for(let i = 0; i < 5; i++) {
        let currDate = new Date();
        currDate.setDate(date.getDate() + i);
        dias.push(currDate);
        
    }

    return dias
}

function getPeliculas() {
    
    return [
        {
            nombre: "Flash", 
            tiempo:"2h10m" ,
            tipo: 1,
            imagen: '/img/the_flash.webp',
            sinopsis: "Barry Allen (Flash) usa sus superpoderes para viajar en el tiempo y salvar la vida de su madre, pero sin saberlo altera el futuro y queda atrapado en una realidad en la que el general Zod ha regresado y amenaza con la aniquilación, pero en la que no hay superhéroes."
        },
        {
            nombre: "Blue Beetle", 
            tiempo:"2h7m" ,
            tipo: 0,
            imagen: '/img/blue_beetle.webp',
            sinopsis: "Jaime Reyes se encuentra en posesión de una antigua reliquia de biotecnología alienígena llamada Escarabajo. Cuando el Escarabajo elige a Jaime como huésped simbiótico, le otorga una armadura con poderes extraordinarios e impredecibles."
        },
        {
            nombre: "Guardianes de la Galaxia vol.3", 
            tiempo:"2h29m" ,
            tipo: 3,
            imagen: '/img/gotg3.jpeg',
            sinopsis: "Aunque sigue afectado por la pérdida de Gamora, Peter Quill debe reunir a su equipo para defender el universo de una nueva amenaza o, en caso de fracasar, será el final de los Guardianes."
        },
        {
            nombre: "Shazam 2: Furia de los dioses", 
            tiempo:"2h10m" ,
            tipo: 3,
            imagen: '/img/shazam.jpg',
            sinopsis: "Billy Batson y sus hermanos adoptivos Freddy, Mary, Pedro, Eugene y Darla, también dotados de superpoderes, tienen que enfrentarse a las tres hijas de Atlas: Hespera, Calipso y Anthea."
        },
        {
            nombre: "Elemental", 
            tiempo:"1h42m" ,
            tipo: 3,
            imagen: '/img/elemental.jpeg',
            sinopsis: "En una ciudad en la que los elementos de fuego, agua, tierra y aire viven en distritos separados, una chica de fuego y un chico de agua descubren que, aunque la sociedad les diga lo contrario, tienen muchas cosas en común."
        },
        {
            nombre: "Ninja Turtles: Caos mutante", 
            tiempo:"1h39m" ,
            tipo: 3,
            imagen: '/img/tmnt.jpeg',
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

const api = {
    getListaDias: getListaDias,
    getSucursales: getSucursales,
    getPeliculas: getPeliculas,
    getBanners: getBanners
}