class Producto {

    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


class tarjetaProducto{
    #productos = [];

    constructor(){
        this.insertarProductos(productosAlmacen);
        this.render();
    }

    insertarProductos (productosAlmacen) {
        for (let x of productosAlmacen){
            this.#productos.push(new Producto(x.id,x.nombre,x.precio));
        }
    }

    render(){
        // Contenedor principal
        var contenedor = document.getElementById("container");
        for (let x of this.#productos){
            // columna
            var columna = document.createElement("div");
            columna.className = "col-md-4 mb-4";
            // tarjeta
            var tarjeta = document.createElement("div");
            tarjeta.className = "card h-100";
            // id
            var id = document.createElement("span"); 
            id.className = "card-text";           
            id.innerText = x['id'];
            // nombre
            var nombre = document.createElement("h4");
            nombre.className = "card-title";
            nombre.innerText = x['nombre'];
            // precio
            var precio = document.createElement("p");
            precio.className = "card-text";
            precio.innerText = x['precio'] + "€";

            // Montamos
            tarjeta.appendChild(id);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(precio);

            columna.appendChild(tarjeta);
            contenedor.appendChild(columna);

        }
 
    }
}


var productosAlmacen = [
    {
        "id": 1,
        "nombre": "Teléfono Inteligente",
        "precio": 699.99
    },
    {
        "id": 2,
        "nombre": "Auriculares Inalámbricos",
        "precio": 89.50
    },
    {
        "id": 3,
        "nombre": "Monitor Curvo 27''",
        "precio": 249.00
    }
];

new tarjetaProducto();


