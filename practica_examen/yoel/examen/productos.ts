interface InterfaceProducto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

class Peticion {

    static async ejecutarPeticion(): Promise<InterfaceProducto[]> {
        // let conexion = await fetch('http://localhost:3000/productos');

        // let datos = await conexion.json();

        // return datos;


        return $.ajax({
            url: 'http://localhost:3000/productos', // URL de la API
            method: 'GET',                                       // Método HTTP (GET, POST, PUT, DELETE)
            dataType: 'json'                                     // Tipo de dato que esperamos de vuelta
        });
    }
}

class Visualizacion {

    static render(productos: InterfaceProducto[], contenedorId: string) {
        let contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        contenedor.innerHTML = ''; // Limpiamos antes de pintar

        for (let producto of productos) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}€</td>
            <td>${producto.stock} uds</td>`;
            contenedor.appendChild(tr);
        }
    }

}

let boton = document.getElementById('boton');
boton?.addEventListener('click', async () => {
    try {
        let datos = await Peticion.ejecutarPeticion();

        Visualizacion.render(datos, 'cuerpoTabla');
    } catch (e) {
        console.log('Error: ', e);
    }
});