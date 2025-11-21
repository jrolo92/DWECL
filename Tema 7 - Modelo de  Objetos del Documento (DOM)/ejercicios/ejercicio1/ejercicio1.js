class Producto {

    // Constructor:
    constructor(codigo, nombre, precio, imagen){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Todo lo que sea mostrar productos
class ContProducto {
    #productosDisponibles = [];

    constructor(productos){
        this.#productosDisponibles = productos;
        console.log(this.#productosDisponibles);
    }

    mostrar(){
        document.getElementById("productos");
        
    }
}

// Todo lo que sea mostrar cesta
class Cesta {
    #productosAñadidos = [];

    constructor(){}
}

// Productos disponibles:
var productos = [
    {codigo:1, nombre:"Mousse", precio:5, imagen:"https://cdn.pixabay.com/photo/2020/09/18/21/14/dessert-5582984_1280.jpg"},
    {codigo:2, nombre:"Helado", precio:4, imagen:"https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048_1280.jpg"},
    {codigo:3, nombre:"Magdalenas", precio:3, imagen:"https://cdn.pixabay.com/photo/2016/03/05/20/09/bake-1238681_1280.jpg"},
    {codigo:4, nombre:"Galletas", precio:10, imagen:"https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_1280.jpg"},
    {codigo:5, nombre:"Tarta", precio:20, imagen:"https://cdn.pixabay.com/photo/2020/03/10/03/49/red-velvet-cake-4917734_1280.jpg"},
    {codigo:6, nombre:"Bizcocho", precio:12, imagen:"https://cdn.pixabay.com/photo/2020/04/09/21/18/biscuit-5023135_1280.jpg"},
]

// Crear la instancia
new ContProducto(productos);