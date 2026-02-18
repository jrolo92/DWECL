interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

class ServicioProductos {

    private url: string = "http://localhost:3000/productos";

    async funAjax(): Promise<Producto[]> {
        // Forma simple (no permite await):
        // return $.ajax({
        //     url: this.url,
        //     type: "GET",
        //     dataType: "json"
        // });
        // Forma de hacer la petición ajax en forma de promesa con jquery
        return new Promise ((resolve, reject) => {
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "json",
                success: (datos: Producto[]) => {
                    resolve(datos);
                },
                error: (e) => {
                    reject(`Error en la petición jQuery: ${e}`);
                }
            });
        });
    }
}

class MostrarProductos {

    pintarTabla (productos: Producto[]): void {

        const tbody = $("#cuerpoTabla");
        tbody.empty();

        productos.forEach(p => {
            tbody.append(`<tr>
                            <td>${p.id}</td>
                            <td>${p.nombre}</td>
                            <td>${p.precio}</td>
                            <td>${p.stock}</td>
                         </tr>`);
        })
    }
}

const servicio = new ServicioProductos();
const vista = new MostrarProductos();

// Evento para el botón
$("#boton").on("click", async () => {
    try {
        const datos = await servicio.funAjax();
        vista.pintarTabla(datos);
    } catch (e) {
        console.error(e);
    }
});