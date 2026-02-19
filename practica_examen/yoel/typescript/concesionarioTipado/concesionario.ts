class Coche {
    marca: string;
    precio: number;
    
    constructor(marca: string, precio: number) {
        this.marca = marca;
        this.precio = precio;
    }
}

let concesionario: Coche[] = [
    new Coche("seat", 15000),
    new Coche("bmw", 40000)
];

function obtenerCochesCaros(array : Coche[]): Coche[] {
    return array.filter(coche=> coche.precio > 20000);
}

console.log(obtenerCochesCaros(concesionario));