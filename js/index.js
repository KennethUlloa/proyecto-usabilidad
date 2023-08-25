
/*
let imports = async () => {
    var api = await import('./api.js');
    
}
import('./api.js').then(mod => {
    console.log(mod)
    var api = mod;
    main()
});

 */

//Main function
function main() {
    let selector = document.querySelector("#diaFuncion");
    selector.innerHTML = api.getListaDias().map(dia => Dias(dia)).join('');
    document.querySelector("#complejo").innerHTML = api.getSucursales().map(item => Complejo(item)).join('');
    document.querySelector("#portadas").innerHTML = api.getPeliculas().map(peli => Pelicula(peli)).join('');
}



main();