interface Art {
    id:number;
    cod: string; 
    color: string; 
    piel: string;
}

class Articulos {
    // Vv necesarias
    private urlGet: string = "http://localhost:3000/getArticulos";
    private urlPush: string = "http://localhost:3000/pushArticulos";
    private form = $("#f1");

    constructor (){
        // Cargar los artículos ya guardados
        this.getArticulos();
        // Evento para guardar los valores del formulario en el server
        this.form.on("submit", (e) => {
            try {
                e.preventDefault();
                this.pushArticulo();
            } catch (e){
                console.error(e);
            }
        });
    }

    private async pushArticulo(): Promise<void> {
        // Apuntamos a los valores de los campos
        let codigo = $("#cod").val();
        let col = $("#color").val();
        let piel = $("#piel").val();

        // Construimos la url a enviar al servidor
        const urlFinal = `${this.urlPush}?cod=${codigo}&color=${col}&piel=${piel}`;

        const response = await fetch(urlFinal);
        if (response.ok) {
            await response.json();
            // Actualizamos la tabla
            this.getArticulos();
        }
    }

    private async getArticulos(): Promise<void> {
        // Esperamos a que se acceda a los productos y los guardamos en un array de tipo Art
        const response = await fetch(this.urlGet);
        const articulos: Art[] = await response.json();

        // Apuntamos al cuerpo de la tabla
        const tbody = document.getElementById('carteras');
        if (tbody) {
            // Limpiamos el contenido previo
            tbody.innerHTML = "";

            // Generamos el HTML completo en una variable string
            let fila = "";
            articulos.forEach((o: Art) => {
                fila += `<tr>
                    <td>${o.id}</td>
                    <td>${o.cod}</td>
                    <td>${o.color}</td>
                    <td>${o.piel}</td>
                </tr>`;
            });

            // añadimos la fila al body de la tabla
            tbody.innerHTML = fila;
        }
    }
}


new Articulos();
