class Secc {

    constructor() { }
    /*
        Método que crea una fila para la cabecera y le añade celdas con el nombre de cada columna y estilos.
        Retorna: fila.
    */
    cabecera() {
        var fila = document.createElement("tr");

        var celdaCod = document.createElement("th");
        celdaCod.textContent = "ID";
        celdaCod.className = "centra borde";

        var celdaDes = document.createElement("th");
        celdaDes.textContent = "NOMBRE";
        celdaDes.className = "centra borde";

        var celdaCos = document.createElement("th");
        celdaCos.textContent = "COSTE €";
        celdaCos.className = "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }

    /*
        Método que crea una fila y le añade las celdas con los valores pasados por los parámetros (código y nombre del producto).
        Retorna: fila.
    */
    modeloCartera(cod, descrip) {
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

    /*
        Método que crea una fila y le añade las celdas con el nombre y el coste de cada costo.
        Le añade un atributo que cambia el color del borde cuando el ratón pasa por encima y 
            vuelve al color por defecto cuando se deja de pasar el ratón
        Retorna: fila .
    */
    tipoCoste(nombre, coste) {
        var fila = document.createElement("tr");

        var celdaCod = document.createElement("td");
        celdaCod.className = "centra borde";

        var celdaDes = document.createElement("td");
        celdaDes.textContent = nombre;
        celdaDes.className = "centra borde";
        celdaDes.setAttribute("onmouseover", "this.style.border='2px solid blue';");
        celdaDes.setAttribute("onmouseout", "this.style.border='';");

        var celdaCos = document.createElement("td");
        celdaCos.textContent = coste;
        celdaCos.className = "centra borde";

        fila.appendChild(celdaCod);
        fila.appendChild(celdaDes);
        fila.appendChild(celdaCos);

        return fila;
    }

    /*
        Método que crea una fila y le añade las celdas con Total y el valor del total.
        Retorna: fila.
    */
    calculoTotal(total) {
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
    // Atributo para trabajar con el contenido del JSON parseado
    #contenido = [];

  
    /*
        Cuando se crea una instancia de esta clase se va a guardar el contenido del JSON parseado en el atributo
        y se va a ejecutar el método render() automáticamente.
    */
    constructor(bdDallo) {
        this.#contenido = JSON.parse(bdDallo);
        this.render();
    }

    render() {
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
        for (let i of this.#contenido) {
            // Montamos los modelos en el cuerpo de la tabla usando el método con el código y la descripción como parámetros
            bodyTabla.appendChild(secc.modeloCartera(i.cod, i.descrip));
            // Creamos la vv para ir acumulando el total de los costes
            var total = 0;
            // Mientras recorremos los productos volvemos a recorrer el otro array dentro de costos
            for (let j in i.costos) {
                var costo = i.costos[j];                            // El valor de cada tipo de costo
                total += costo;
                // Montamos los costos en la tabla usando nuestro método con el nombre y el valor de cada uno como parámetros
                bodyTabla.appendChild(secc.tipoCoste(j, costo));
            }
            // Montamos el coste total en el cuerpo usando nuestro método con el total como parámetro
            bodyTabla.appendChild(secc.calculoTotal(total.toFixed(2)));
        }

        // Montamos cabecera y cuerpo en la tabla y ésta a su vez en el body del html
        tabla.appendChild(cabecera);
        tabla.appendChild(bodyTabla);
        contenedor.appendChild(tabla);
    }
}

const bdDallo = `[{ "cod": 1,
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

// Creamos instancia de la clase tabla
new Tabla(bdDallo);   
