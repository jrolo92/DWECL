var Coche = /** @class */ (function () {
    function Coche(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }
    return Coche;
}());
var concesionario = [
    new Coche("seat", 15000),
    new Coche("bmw", 40000)
];
function obtenerCochesCaros(array) {
    return array.filter(function (coche) { return coche.precio > 20000; });
}
console.log(obtenerCochesCaros(concesionario));
