// Le va a dar el formato a la respuesta ajax
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

class ServicioProductos {

    private url: string = "http://localhost:3000/productos";

    async funAjax(): Promise<Producto[]> {
        try{
            // Hace la petición a la URL
            const response = await fetch(this.url);
            
            // Devolvemos los datos en una vv de tipo array de Productos
            const datos: Producto[] = await response.json();
            return datos;
            
        }catch (e){
            // Si hay algun error lo muestra por consola
            console.log(`Error: ${e}`);
            // Devolvemos array vacío si hay un error
            return [];
        }
    }
}

class MostrarProductos {

    pintarTabla (productos: Producto[]): void {
        const tbody = document.getElementById('cuerpoTabla');
        
        if (tbody){
            tbody.innerHTML = "";
            productos.forEach(p => {
                const fila = `<tr>
                                <td>${p.id}</td>
                                <td>${p.nombre}</td>
                                <td>${p.precio}</td>
                                <td>${p.stock}</td>
                             </tr>`;
                
                tbody.innerHTML += fila;
            });
        }
    }
}

// Iniciamos las clases
const servicio = new ServicioProductos();
const vista = new MostrarProductos();

// Evento para el botón
const boton = document.getElementById("boton");
// En vez de comprobar que boton tiene contenido se le puede poner boton?.addEventListener
if (boton){
    boton.addEventListener("click", async () => {
        try {
            const datos = await servicio.funAjax();
            vista.pintarTabla(datos);
        } catch (e) {
            console.error ("Error al cargar: ", e);
        }
    });
}
