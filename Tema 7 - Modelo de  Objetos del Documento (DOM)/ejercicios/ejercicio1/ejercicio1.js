// Cada producto del array de productos tendrá que tener esos atributos
class Producto {

    constructor(codigo, nombre, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Todo lo que sea mostrar productos
class ContProducto {
    // Array que almacena los productos para mostrarlos
    #productosDisponibles = [];
    #cesta;

    /*
        Al crear una instancia de esta clase se van a guardar los productos en el atributo (array)
        y se van a pintar usando el metodo mostrar()
    */
    constructor(productos, cesta) {
        this.#productosDisponibles = productos;
        this.#cesta = cesta;
        // console.log(this.#productosDisponibles);
        this.mostrar();
    }

    mostrar() {
        // Seleccionamos el contenedor donde se van a pintar las tarjetas.
        var contenedor = document.getElementById("contenedor");

        /* Recorremos cada producto, usamos el método crearProducto() 
            para crear una tarjeta para cada producto y la añadimos al html
        */
        for (var producto of this.#productosDisponibles) {
        var nuevaTarjeta = this.crearProducto(producto);
        contenedor.appendChild(nuevaTarjeta);
    }
    }

    /*
        Método que crea cada uno de los elementos para los productos y les da un estilo.
        Monta la tarjeta uniendo los elementos
        retorno: columna con 3 tarjetas por fila
    */
    crearProducto(producto) {
        // Columna (div)
        var col = document.createElement("div");
        col.className = "col-md-4 mb-4";            // Estilos para que salgan 3 por fila (3x4)

        // Tarjeta principal (div)
        var tarjeta = document.createElement("div");
        tarjeta.className = "card h-100";

        // Imagen del producto 
        var imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.className = "card-img-top";

        // Nombre del producto (h4)
        var nombre = document.createElement("h4");
        nombre.textContent = producto.nombre;

        // Cuerpo de la tarjeta (div)
        var cuerpo = document.createElement("div");
        cuerpo.className = "card-body";

        // Cantidad (input)
        var cantidad = document.createElement("input");
        cantidad.type = "number";
        cantidad.min = 1;
        cantidad.value = 1;
        cantidad.className = "form-control mb-2";

        // Precio (p)
        var precio = document.createElement("p");
        precio.textContent = producto.precio + " €";
        precio.className = "card-text";

        // Botón (button)
        var boton = document.createElement("button");
        boton.textContent = "Añadir a cesta";
        boton.className = "btn btn-primary w-100";

        // Creamos un evento con el que al hacer click en el botón de añadir va a usar la isntancia de cesta para ejecutar su método añadir()
        boton.addEventListener("click", () => this.#cesta.añadir(producto, parseInt(cantidad.value)));

        // Añadimos los elementos al cuerpo en el orden que queremos que se muestre
        cuerpo.appendChild(nombre);
        cuerpo.appendChild(precio);
        cuerpo.appendChild(cantidad);
        cuerpo.appendChild(boton);

        // Montamos la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        // Metemos la tarjeta dentro de la columna
        col.appendChild(tarjeta);

        return col;
    }
}

// Muestra los productos en la cesta y permite borrarlos
class Cesta {
    // Array de productos añadidos a la cesta
    #productosAñadidos = [];

    constructor() { }


    añadir(producto, cantidad) {
        var prodExistente = null;

        // Recorremos el array buscando si ya existe el producto
        for (var i = 0; i < this.#productosAñadidos.length; i++) {
            if (this.#productosAñadidos[i].codigo === producto.codigo) {
                prodExistente = this.#productosAñadidos[i];
                break; 
            }
        }

        if (prodExistente) {
            prodExistente.cantidad += cantidad;
        } else {
            // Creamos un nuevo objeto con los datos del producto
            var productoAñadir = {
                codigo: producto.codigo,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: cantidad
            };

            // Lo agregamos a la cesta
            this.#productosAñadidos.push(productoAñadir);
        }
        // Lo repintamos en la cesta
        this.mostrar();
    }


    mostrar() {
        // Obtenemos el elemento donde se van a insertar los productos
        var filaCesta = document.getElementById("cesta");
        // Borramos la tabla antes de volver a pintar para evitar que se pinten los productos anteriores
        filaCesta.innerHTML = "";

        // Creamos la vv total para mostrar al final de la cesta y la inicializamos
        var total = 0;

        /* 
            Recorremos el array de productos de la cesta y crea una fila para cada uno.
            Para cada celda creamos un elemento y lo vamos añadiendo a la fila
        */
       for (const producto of this.#productosAñadidos) {
            var fila = document.createElement("tr");

            // Creamos la variable subtotal para mostrarla en el elemento correspondiente mas abajo
            var subtotal = producto.precio * producto.cantidad;
            total += subtotal;
            
            // Celda código
            var celdaCodigo = document.createElement("td");
            celdaCodigo.textContent = producto.codigo;
            fila.appendChild(celdaCodigo);

            // Celda nombre
            var celdaNombre = document.createElement("td");
            celdaNombre.textContent = producto.nombre;
            fila.appendChild(celdaNombre);

            // Celda cantidad
            var celdaCantidad = document.createElement("td");
            celdaCantidad.textContent = producto.cantidad;
            fila.appendChild(celdaCantidad);

            // Celda precio unitario
            var celdaPrecio = document.createElement("td");
            celdaPrecio.textContent = producto.precio + " €";
            fila.appendChild(celdaPrecio);

            // Celda precio total
            var celdaTotal = document.createElement("td");
            celdaTotal.textContent = (subtotal) + " €";
            fila.appendChild(celdaTotal);

            // Celda botón eliminar
            var celdaBoton = document.createElement("td");
            var botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.className = "btn btn-danger btn-sm";

            // Evento para eliminar un producto usando el método eliminar de la clase cesta
            botonEliminar.addEventListener("click", () => this.eliminar(producto.codigo));

            celdaBoton.appendChild(botonEliminar);
            fila.appendChild(celdaBoton);

            // Finalmente añadimos la fila completa a la tabla
            filaCesta.appendChild(fila);
        };

        // Actualizamos el total y el total+IVA
        document.getElementById("total").textContent = total + " €";
        document.getElementById("totalIva").textContent = (total * 1.21).toFixed(2) + " €";
    }

    eliminar(codigo){
        for (var i = 0; i < this.#productosAñadidos.length; i++) {    // Recorremos el array de productos añadidos  
            if (this.#productosAñadidos[i].codigo === codigo) {       // Si encontramos el producto con ese código
                this.#productosAñadidos.splice(i, 1);                 // Lo quitamos del array
                break;
            }
        }

        // Repintamos la cesta
        this.mostrar();
    }
}

// Productos disponibles:
var productos = [
    { codigo: 1, nombre: "Mousse", precio: 5, imagen: "https://cdn.pixabay.com/photo/2020/09/18/21/14/dessert-5582984_1280.jpg" },
    { codigo: 2, nombre: "Helado", precio: 4, imagen: "https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048_1280.jpg" },
    { codigo: 3, nombre: "Magdalenas", precio: 3, imagen: "https://cdn.pixabay.com/photo/2016/03/05/20/09/bake-1238681_1280.jpg" },
    { codigo: 4, nombre: "Galletas", precio: 10, imagen: "https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_1280.jpg" },
    { codigo: 5, nombre: "Tarta", precio: 20, imagen: "https://cdn.pixabay.com/photo/2020/03/10/03/49/red-velvet-cake-4917734_1280.jpg" },
    { codigo: 6, nombre: "Bizcocho", precio: 12, imagen: "https://cdn.pixabay.com/photo/2020/04/09/21/18/biscuit-5023135_1280.jpg" },
];

// Crear la instancia de ContenedorProducto y de Cesta
new ContProducto(productos, new Cesta());
// var cesta = new Cesta();