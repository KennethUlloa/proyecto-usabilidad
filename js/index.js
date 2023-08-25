function main() {
    document.querySelector("#diaFuncion").innerHTML = api.getListaDias().map(dia => Dias(dia)).join('');
    document.querySelector("#complejo").innerHTML = api.getSucursales().map(item => Complejo(item)).join('');
}

main();

