class Articulo {
    constructor(public nombre: string, public precio: number, public stock: boolean) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    crearNodo() {
        let div = document.createElement('div');
        div.innerText = `Nombre: ${this.nombre} / Precio: ${this.precio} `;
        if (this.stock == false){
            div.style.backgroundColor = 'red';
        }

        return div;
    }
}

async function peticion() {
    try {
        let conexion = await fetch('http://localhost:3000');

        let datos = await conexion.json();

        let divContenedor = document.getElementById('contenedorProductos');
        for (let producto of datos) {
            let nuevoArticulo = new Articulo(producto.nombre, producto.precio, producto.stock).crearNodo();
            divContenedor?.appendChild(nuevoArticulo);
        }
    } catch (e) {
        console.log('Error: ', e);
    }
}

peticion();