"use strict";
class Articulos {
    constructor() {
        // Vv necesarias
        this.urlGet = "http://localhost:3000/getArticulos";
        this.urlPush = "http://localhost:3000/pushArticulos";
        // Cargar los artículos ya guardados
        this.getArticulos();
        // Evento para guardar los valores del formulario en el server
        $("#f1").on("submit", (e) => {
            try {
                e.preventDefault();
                this.pushArticulo();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    async pushArticulo() {
        // Apuntamos a los valores de los campos
        let codigo = $("#cod").val();
        let col = $("#color").val();
        let piel = $("#piel").val();
        // Construimos la url a enviar al servidor
        const urlFinal = `${this.urlPush}?cod=${codigo}&color=${col}&piel=${piel}`;
        const response = await fetch(urlFinal);
        if (response.ok) {
            await response.json();
            // Limpiamos el formulario
            $("#f1")[0].reset();
            // Actualizamos la tabla
            this.getArticulos();
        }
    }
    async getArticulos() {
        // Esperamos a que se acceda a los productos y los guardamos en un array de tipo Art
        const response = await fetch(this.urlGet);
        const articulos = await response.json();
        // Apuntamos al cuerpo de la tabla
        const tbody = document.getElementById('carteras');
        if (tbody) {
            // Limpiamos el contenido previo
            tbody.innerHTML = "";
            // Generamos el HTML completo en una variable string
            let fila = "";
            articulos.forEach((o) => {
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
//# sourceMappingURL=index.js.map