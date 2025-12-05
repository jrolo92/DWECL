class Secc {

    constructor(){}

    cabecera(){
        var fila = document.createElement("tr");

        var celdaCod = document.createElement("th");
        celdaCod.textContent = "ID";
        celdaCod.className= "centra borde";

        var celdaDes = document.createElement("th");
        celdaDes.textContent = "NOMBRE";
        celdaDes.className= "centra borde";

        var celdaCos = document.createElement("th");
        celdaCos.textContent = "COSTE €";
        celdaCos.className= "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }

    modeloCartera(cod, descrip){
        var fila = document.createElement("tr");

        var celdaCod = document.createElement("td");
        celdaCod.textContent = cod;
        celdaCod.className = "centra borde";

        var celdaDes = document.createElement("td");
        celdaDes.textContent = descrip;
        celdaDes.className = "centra borde";

        var celdaCos = document.createElement("td");
        celdaCos.className = "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }

    tipoCoste(nombre, coste){
        var fila = document.createElement("tr");

        var celdaCod = document.createElement("td");
        celdaCod.className = "centra borde";
        var celdaDes = document.createElement("td");
        celdaDes.textContent = nombre;
        celdaDes.className = "centra borde";
        celdaDes.setAttribute("onmouseover", "this.style.border='1px solid blue';");
        celdaDes.setAttribute("onmouseout", "this.style.border='';");
        

        var celdaCos = document.createElement("td");
        celdaCos.textContent = coste;
        celdaCos.className = "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }

    calculoTotal(total){
         var fila = document.createElement("tr");

        var celdaCod = document.createElement("td");

         var celdaDes = document.createElement("td");
        celdaDes.textContent = "TOTAL";
        celdaDes.className = "centra borde";

        var celdaCos = document.createElement("td");
        celdaCos.textContent = total;
        celdaCos.className = "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }
}

class Tabla {
    #contenido = [];

    constructor(){
        this.#contenido = JSON.parse(bdDallo);
        this.render();   
    }

    render(){
        // Para aplicarlo a partir de la etiqueta body del html
        var contenedor = document.body;

        // Tabla
        var tabla = document.createElement("table");

        // Cabecera
        var cabecera = document.createElement("thead");

        // Cuerpo de la tabla
        var bodyTabla = document.createElement("tbody");

        // Creamos una instancia de Secc para usar los métodos
        var secc = new Secc();

        // Montamos la cabecera usando el método
        cabecera.appendChild(secc.cabecera());

        // Recorremos todos los productos del json para usar lo que necesitemos en los métodos de Secc
        for (let i of this.#contenido){
            // Montamos el cuerpo de la tabla usando el método con el código y la descripción como parámetros
            bodyTabla.appendChild(secc.modeloCartera(i.cod, i.descrip));
            // Creamos la vv para ir acumulando el total de los costes
            var total = 0;
            // Mientras recorremos los productos volvemos a recorrer el otro array dentro de costos
            for (let j in i.costos){
                var costo = i.costos[j];                            // El valor de cada tipo de costo
                total += costo;
                bodyTabla.appendChild(secc.tipoCoste(j, costo));    // Montamos los costos en la tabla usando nuestro método
            }

            bodyTabla.appendChild(secc.calculoTotal(total.toFixed(2)));
        }

        tabla.appendChild(cabecera);
        tabla.appendChild(bodyTabla);   
        contenedor.appendChild(tabla);
    }
}

const bdDallo=`[{ "cod": 1,
                        "descrip": "cartera piel vacuno negra",
                        "costos":{ "piel": 5,
                                   "hilo": 0.80,
                                   "rebaje": 1,
                                   "pegamento": 0.50,
                                   "pintura": 0.45,
                                   "broches": 0.90,
                                   "cosido": 1,
                                   "fabricación": 15,
                                   "embasado": 1}                
                   },
                   {    "cod": 2,
                        "descrip": "cartera piel vacuno azul",
                        "costos":{ "piel": 6,
                                   "hilo": 0.90,
                                   "rebaje": 1.50,
                                   "pegamento": 0.70,
                                   "pintura": 0.50,
                                   "broches": 0.80,
                                   "cosido": 1.50,
                                   "fabricación": 16,
                                   "embasado": 1.20}                
                   },
                   {    "cod": 3,
                        "descrip": "cartera piel coco",
                        "costos":{ "piel": 25,
                                   "hilo": 1,
                                   "rebaje": 1,
                                   "pegamento": 0.70,
                                   "pintura": 0.80,
                                   "broches": 1,
                                   "cosido": 3,
                                   "fabricación": 20,
                                   "embasado": 5}               
                   }]`

new Tabla(bdDallo);   
