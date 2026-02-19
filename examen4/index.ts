interface Art {
    id:number;
    cod: string; 
    color: string; 
    piel: string;
}

class Articulos {

    private urlGet: string = "http://localhost:3000/getArticulos";
    private urlPush: string = "http://localhost:3000/pushArticulos";

    constructor (){
        $("#bot").on("click", () => {
            try {
                this.pushArticulo();
            } catch (e){
                console.error(e);
            }
        });
    }

    private async pushArticulo() {

        let codigo = $("#cod").val();
        let col = $("#color").val();
        let piel = $("#piel").val();

        const urlFinal = `${this.urlPush}?cod=${codigo}&color=${col}&piel=${piel}`;
        const response = await fetch(urlFinal);

        const datos = await response.json();

        this.getArticulos();

    }

    private async getArticulos(){

        fetch(this.urlGet)
            .then(result => result.json())
            .then(function(obj) {
                const tbody = document.getElementById('carteras');
                if (tbody){
                tbody.innerHTML = "";
                obj.forEach((o: Art) => {
                    const fila = `<tr>
                                    <td>${o.id}</td>
                                    <td>${o.cod}</td>
                                    <td>${o.color}</td>
                                    <td>${o.piel}</td>
                                </tr>`;
                    
                    tbody.innerHTML += fila;
                });
                }
            })
            .catch(e => console.log(`Error capturado: ${e}`));
    }

}


new Articulos();
